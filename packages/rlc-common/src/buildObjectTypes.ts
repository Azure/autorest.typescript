// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  InterfaceDeclarationStructure,
  OptionalKind,
  PropertySignatureStructure,
  StructureKind,
  TypeAliasDeclarationStructure
} from "ts-morph";
import { NameType, normalizeName } from "./helpers/nameUtils.js";
import {
  isArraySchema,
  isDictionarySchema,
  isObjectSchema
} from "./helpers/schemaHelpers.js";
import {
  ArraySchema,
  ObjectSchema,
  Parameter,
  Property,
  RLCModel,
  Schema,
  SchemaContext
} from "./interfaces.js";
import { getMultipartPartTypeName } from "./helpers/nameConstructors.js";

/**
 * Generates interfaces for ObjectSchemas
 */
export function buildObjectInterfaces(
  model: RLCModel,
  importedModels: Set<string>,
  schemaUsage: SchemaContext[]
): InterfaceDeclarationStructure[] {
  const objectSchemas: ObjectSchema[] = (model.schemas ?? []).filter(
    (o) =>
      isObjectSchema(o) &&
      (o as ObjectSchema).usage?.some((u) => schemaUsage.includes(u))
  );
  const objectInterfaces: InterfaceDeclarationStructure[] = [];

  for (const objectSchema of objectSchemas) {
    if (
      objectSchema.alias ||
      objectSchema.outputAlias ||
      objectSchema.fromCore
    ) {
      continue;
    }

    // FIXME: disabling new multipart generation for modular while we figure out the story
    if (objectSchema.isMultipartBody && !model.options?.isModularLibrary) {
      objectInterfaces.push(
        ...buildMultipartPartDefinitions(
          objectSchema,
          importedModels,
          schemaUsage
        )
      );
      continue;
    }

    const baseName = getObjectBaseName(objectSchema, schemaUsage);
    const interfaceDeclaration = getObjectInterfaceDeclaration(
      model,
      baseName,
      objectSchema,
      schemaUsage,
      importedModels
    );

    objectInterfaces.push(interfaceDeclaration);
  }
  return objectInterfaces;
}

const MULTIPART_FILE_METADATA_PROPERTIES: OptionalKind<PropertySignatureStructure>[] =
  [
    {
      name: "filename",
      hasQuestionToken: true,
      type: "string"
    },
    {
      name: "contentType",
      hasQuestionToken: true,
      type: "string"
    }
  ];

function buildMultipartPartDefinitions(
  schema: ObjectSchema,
  importedModels: Set<string>,
  schemaUsage: SchemaContext[]
): InterfaceDeclarationStructure[] {
  if (!schema.isMultipartBody) {
    return [];
  }

  // Transform property signatures into individual models
  const propertySignatures = getPropertySignatures(
    schema.properties ?? {},
    schemaUsage,
    importedModels,
    { flattenBinaryArrays: true }
  );

  const structures: InterfaceDeclarationStructure[] = [];

  for (const signature of propertySignatures) {
    const name = signature.name;
    const propertySchema = schema.properties?.[name];
    const typeName = getMultipartPartTypeName(schema.name, name);

    const isFileUpload = signature.type?.toString().includes("File") ?? false;

    const additionalProperties: any[] = [];

    if ((propertySchema as any).multipartOptions) {
      const multipartOptions: any = (propertySchema as any).multipartOptions;
      if (multipartOptions.filenameSchema) {
        additionalProperties.push(
          getPropertySignature(
            { name: "filename", ...multipartOptions.filenameSchema },
            [SchemaContext.Input],
            importedModels
          )
        );
      }
      if (multipartOptions.contentTypeSchema) {
        additionalProperties.push(
          getPropertySignature(
            { name: "contentType", ...multipartOptions.contentTypeSchema },
            [SchemaContext.Input],
            importedModels
          )
        );
      }
    } else if (isFileUpload) {
      // default additional file metadata properties (legacy)
      additionalProperties.push(...MULTIPART_FILE_METADATA_PROPERTIES);
    }

    structures.push({
      kind: StructureKind.Interface,
      isExported: true,
      name: typeName,
      properties: [
        {
          name: "name",
          type: name
        },
        {
          name: "body",
          type: signature.type
        },
        ...additionalProperties
      ]
    });
  }

  return structures;
}

export function buildObjectAliases(
  model: RLCModel,
  importedModels: Set<string>,
  schemaUsage: SchemaContext[]
) {
  const objectSchemas: ObjectSchema[] = (model.schemas ?? []).filter(
    (o) =>
      isObjectSchema(o) &&
      (o as ObjectSchema).usage?.some((u) => schemaUsage.includes(u))
  );
  const objectAliases: TypeAliasDeclarationStructure[] = [];

  for (const objectSchema of objectSchemas) {
    // FIXME: disabling new multipart generation for modular while we figure out the story
    if (objectSchema.isMultipartBody && !model.options?.isModularLibrary) {
      const propertySignatures = getPropertySignatures(
        objectSchema.properties ?? {},
        schemaUsage,
        importedModels,
        { flattenBinaryArrays: true }
      );

      const objectTypeNames = propertySignatures.map((sig) =>
        getMultipartPartTypeName(objectSchema.name, sig.name)
      );

      objectAliases.push({
        kind: StructureKind.TypeAlias,
        ...(objectSchema.description && {
          docs: [{ description: objectSchema.description }]
        }),
        name: objectSchema.typeName!,
        type: `FormData | Array<${objectTypeNames.join("|") || "unknown"}>`,
        isExported: true
      });
    }

    if (objectSchema.alias || objectSchema.outputAlias) {
      const description = objectSchema.description;
      const modelName = schemaUsage.includes(SchemaContext.Input)
        ? `${objectSchema.typeName}`
        : `${objectSchema.outputTypeName}`;
      objectAliases.push({
        kind: StructureKind.TypeAlias,
        ...(description && { docs: [{ description }] }),
        name: modelName,
        type: schemaUsage.includes(SchemaContext.Input)
          ? `${objectSchema.alias}`
          : `${objectSchema.outputAlias}`,
        isExported: true,
        docs: [description ?? "Alias for " + modelName]
      });
    }
  }
  return objectAliases;
}

export function buildPolymorphicAliases(
  model: RLCModel,
  schemaUsage: SchemaContext[]
) {
  // We'll add aliases for polymorphic objects
  const objectAliases: TypeAliasDeclarationStructure[] = [];
  const objectSchemas: ObjectSchema[] = (model.schemas ?? []).filter(
    (o) =>
      isObjectSchema(o) &&
      (o as ObjectSchema).usage?.some((u) => schemaUsage.includes(u))
  );
  for (const objectSchema of objectSchemas) {
    const baseName = getObjectBaseName(objectSchema, schemaUsage);
    const typeAlias = getPolymorphicTypeAlias(
      baseName,
      objectSchema,
      schemaUsage
    );
    if (typeAlias) {
      objectAliases.push(typeAlias);
    }
  }

  return objectAliases;
}

/**
 * Gets a base name for an object schema this is tipically used with suffixes when building interface or type names
 */
function getObjectBaseName(
  objectSchema: ObjectSchema,
  schemaUsage: SchemaContext[]
) {
  const nameSuffix = schemaUsage.includes(SchemaContext.Output) ? "Output" : "";
  const name = normalizeName(
    objectSchema.name,
    NameType.Interface,
    true /** guard name */
  );

  return `${name}${nameSuffix}`;
}

/**
 * If the current object is a Polymorphic parent, we need to create
 * a type alias with the union of its children to enable polymorphism
 */
function getPolymorphicTypeAlias(
  baseName: string,
  objectSchema: ObjectSchema,
  schemaUsage: SchemaContext[]
): TypeAliasDeclarationStructure | undefined {
  if (!isPolymorphicParent(objectSchema)) {
    return undefined;
  }

  const unionTypes: string[] = [];

  // If the object itself has a discriminatorValue add its base to the union
  if (objectSchema.discriminatorValue) {
    unionTypes.push(`${baseName}Parent`);
  }

  for (const child of objectSchema.children?.all ?? []) {
    const nameSuffix = schemaUsage.includes(SchemaContext.Output)
      ? "Output"
      : "";
    const name = normalizeName(
      child.name,
      NameType.Interface,
      true /** shouldGuard */
    );

    unionTypes.push(`${name}${nameSuffix}`);
  }

  const description = objectSchema.description;

  return {
    kind: StructureKind.TypeAlias,
    ...(description && { docs: [{ description }] }),
    name: `${baseName}`,
    type: unionTypes.join(" | "),
    isExported: true
  };
}

/**
 * Builds the interface for the current object schema. If it is a polymorphic
 * root node it will suffix it with Base.
 */
export function getObjectInterfaceDeclaration(
  model: RLCModel,
  baseName: string,
  objectSchema: ObjectSchema,
  schemaUsage: SchemaContext[],
  importedModels: Set<string>
): InterfaceDeclarationStructure {
  let interfaceName = `${baseName}`;
  if (isPolymorphicParent(objectSchema)) {
    interfaceName = `${baseName}Parent`;
  }

  const properties = objectSchema.properties ?? {};

  let propertySignatures = getPropertySignatures(
    properties,
    schemaUsage,
    importedModels
  );

  // Add the polymorphic property if exists
  propertySignatures = addDiscriminatorProperty(
    model,
    objectSchema,
    propertySignatures,
    schemaUsage
  );

  // Calculate the parents of the current object
  const extendFrom = getImmediateParentsNames(objectSchema, schemaUsage);

  const description = objectSchema.description;
  return {
    kind: StructureKind.Interface,
    ...(description && { docs: [{ description }] }),
    name: interfaceName,
    isExported: true,
    properties: propertySignatures,
    ...(extendFrom && { extends: extendFrom })
  };
}

function isPolymorphicParent(objectSchema: ObjectSchema) {
  return objectSchema.isPolyParent ? true : false;
}

function addDiscriminatorProperty(
  model: RLCModel,
  objectSchema: ObjectSchema,
  properties: PropertySignatureStructure[],
  schemaUsage: SchemaContext[]
): PropertySignatureStructure[] {
  const polymorphicProperty = getDiscriminatorProperty(
    model,
    objectSchema,
    schemaUsage
  );

  if (polymorphicProperty) {
    // It is possible that the polymorphic property needs to override an existing property.
    // This is usually the case on the top level parent where the property already has a type of string
    // we need to replace it with the polymorphic values of its children
    const filteredProperties = properties.filter(
      (p) => p.name !== polymorphicProperty.name
    );
    return [...filteredProperties, polymorphicProperty];
  }

  return properties;
}

/**
 * Finds the name of the property used as discriminator and the discriminator value.
 */
function getDiscriminatorProperty(
  model: RLCModel,
  objectSchema: ObjectSchema,
  schemaUsage: SchemaContext[]
): PropertySignatureStructure | undefined {
  const discriminatorValue = objectSchema.discriminatorValue;
  if (!discriminatorValue && !objectSchema.discriminator) {
    return undefined;
  }

  const discriminators = getDiscriminatorValue(objectSchema);
  const discriminatorPropertyName = getDiscriminatorPropertyName(objectSchema);

  if (discriminators) {
    if (discriminatorPropertyName === undefined) {
      throw new Error(
        `getDiscriminatorProperty: Expected object ${objectSchema.name} to have a discriminator in its hierarchy but found none`
      );
    }
    const inputTypeName =
      objectSchema.discriminator?.typeName ?? objectSchema.discriminator?.type;
    return {
      kind: StructureKind.PropertySignature,
      name: `"${discriminatorPropertyName}"`,
      type:
        model.options?.sourceFrom === "Swagger"
          ? discriminators
          : schemaUsage.includes(SchemaContext.Output)
            ? objectSchema.discriminator?.outputTypeName ?? inputTypeName
            : inputTypeName
    };
  }

  return undefined;
}

/**
 * Finds the closest discriminator property
 */
function getDiscriminatorPropertyName(objectSchema: ObjectSchema) {
  if (objectSchema.discriminator !== undefined) {
    return objectSchema.discriminator.name;
  }

  const allParents = objectSchema.parents?.all ?? [];

  for (const parent of allParents) {
    if (isObjectSchema(parent) && parent.discriminator) {
      return parent.discriminator.name;
    }
  }
  return undefined;
}

/**
 * Calculates the discriminator values that a given object needs
 */
function getDiscriminatorValue(objectSchema: ObjectSchema): string | undefined {
  const discriminatorValue = objectSchema.discriminatorValue
    ? objectSchema.discriminatorValue
    : objectSchema.discriminator
      ? objectSchema.name
      : undefined;
  const children = objectSchema.children?.immediate ?? [];

  // If the current object has a discriminatorValue but doesn't have any children
  // it is a leaf node and the only discriminator value needed is itself
  if (discriminatorValue && !children.length) {
    return `"${discriminatorValue}"`;
  }

  // when the current object has both discriminator and discriminatorValue
  if (children) {
    const discriminatorProperty = objectSchema.discriminator;
    // Even when there are children, if no discriminatorProperty is present this is a leaf in the polymorphism tree
    if (!discriminatorProperty) {
      return `"${discriminatorValue}"`;
    }

    // the current object has discriminated children we need to find all the discriminatorValues for each of its children
    const allChildren = objectSchema.children?.all ?? [];

    // Top level parents may not have a discriminator of their own.
    const selfDiscriminator = discriminatorValue
      ? [`"${discriminatorValue}"`]
      : [];

    const childValues = getChildDiscriminatorValues(allChildren).map(
      (v) => `"${v}"`
    );

    return [...selfDiscriminator, ...childValues].join(" | ");
  }

  return undefined;
}

/**
 * Looks into the children and grabs all possible discriminatorValues
 */
function getChildDiscriminatorValues(children: ObjectSchema[]): string[] {
  const discriminatorValues = new Set<string>();
  for (const child of children) {
    if (isObjectSchema(child) && child.discriminatorValue) {
      discriminatorValues.add(child.discriminatorValue);
    }
  }

  return [...discriminatorValues];
}

/**
 * Gets a list of types a given object may extend from
 */
export function getImmediateParentsNames(
  objectSchema: ObjectSchema,
  schemaUsage: SchemaContext[]
): string[] {
  if (!objectSchema.parents?.immediate) {
    return [];
  }

  const extendFrom: string[] = [];

  // If an immediate parent is an empty DictionarySchema, that means that the object has been marked
  // with additional properties. We need to add Record<string, unknown> to the extend list and
  if (
    objectSchema.parents.immediate.find((im) =>
      isDictionarySchema(im, { filterEmpty: true })
    )
  ) {
    extendFrom.push("Record<string, unknown>");
  }

  // Get the rest of the parents excluding any DictionarySchemas
  const parents = objectSchema.parents.immediate
    .filter((p) => !isDictionarySchema(p, { filterEmpty: true }))
    .map((parent) => {
      const nameSuffix = schemaUsage.includes(SchemaContext.Output)
        ? "Output"
        : "";
      const name = isDictionarySchema(parent)
        ? Object.entries(objectSchema.properties!)?.some((prop) => {
            const typeName = prop[1].typeName ?? prop[1].type;
            return (
              `Record<string, ${typeName}>` !== parent.typeName &&
              !(parent as any).additionalProperties?.typeName?.includes(
                typeName
              )
            );
          })
          ? schemaUsage.includes(SchemaContext.Output)
            ? "Record<string, any>"
            : "Record<string, unknown>"
          : `${
              (schemaUsage.includes(SchemaContext.Output)
                ? parent.outputTypeName
                : parent.typeName) ?? parent.name
            }`
        : `${normalizeName(
            parent.name,
            NameType.Interface,
            true /** shouldGuard */
          )}${nameSuffix}`;

      return isObjectSchema(parent) && isPolymorphicParent(parent)
        ? `${name}Parent`
        : name;
    });

  return [...parents, ...extendFrom];
}

interface GetPropertySignatureOptions {
  flattenBinaryArrays?: boolean;
}

function getPropertySignatures(
  properties: { [key: string]: Property },
  schemaUsage: SchemaContext[],
  importedModels: Set<string>,
  options: GetPropertySignatureOptions = {}
) {
  let validProperties = Object.keys(properties);
  const readOnlyFilter = (name: string) =>
    !(schemaUsage.includes(SchemaContext.Input) && properties[name].readOnly);
  const neverFilter = (name: string) => properties[name].type !== "never";
  validProperties = validProperties.filter(readOnlyFilter).filter(neverFilter);
  return validProperties.map((p) =>
    getPropertySignature(
      { ...properties[p], name: p },
      schemaUsage,
      importedModels,
      options
    )
  );
}

function isBinaryArray(schema: Schema): boolean {
  return Boolean(
    isArraySchema(schema) &&
      (schema.items?.typeName?.includes("NodeJS.ReadableStream") ||
        schema.items?.outputTypeName?.includes("NodeJS.ReadableStream"))
  );
}

/**
 * Builds a Typescript property or parameter signature
 * @param schema - Property or parameter to get the Typescript signature for
 * @param importedModels - Set to track the models that need to be imported
 * @returns a PropertySignatureStructure for the property.
 */
export function getPropertySignature(
  property: Property | Parameter,
  schemaUsage: SchemaContext[],
  importedModels: Set<string>,
  options: GetPropertySignatureOptions = {}
): PropertySignatureStructure {
  let schema: Schema;
  if (options.flattenBinaryArrays && isBinaryArray(property)) {
    schema = {
      ...((property as ArraySchema).items ?? property),
      name: property.name
    };
  } else {
    schema = property;
  }

  const propertyName = schema.name;
  const description = schema.description;
  let type;
  const hasCoreInArray =
    schema.type === "array" &&
    (schema as any).items &&
    (schema as any).items.fromCore;
  const hasCoreInRecord =
    schema.type === "dictionary" &&
    (schema as any).additionalProperties &&
    (schema as any).additionalProperties.fromCore;
  if (hasCoreInArray && schema.typeName) {
    type = schema.typeName;
    importedModels.add(
      (schema as any).items.typeName ?? (schema as any).items.name
    );
  } else if (hasCoreInRecord && schema.typeName) {
    type = schema.typeName;
    importedModels.add(
      (schema as any).additionalProperties.typeName ??
        (schema as any).additionalProperties.name
    );
  } else {
    type =
      generateForOutput(schemaUsage, schema.usage) && schema.outputTypeName
        ? schema.outputTypeName
        : schema.typeName
          ? schema.typeName
          : schema.type;
    if (schema.typeName && schema.fromCore) {
      importedModels.add(schema.typeName);
      type = schema.typeName;
    }
  }

  return {
    name: propertyName,
    ...(description && { docs: [{ description }] }),
    hasQuestionToken: !schema.required,
    isReadonly: generateForOutput(schemaUsage, schema.usage) && schema.readOnly,
    type,
    kind: StructureKind.PropertySignature
  };
}

function generateForOutput(
  schemaUsage: SchemaContext[],
  propertyUsage?: SchemaContext[]
) {
  return (
    (schemaUsage.includes(SchemaContext.Output) &&
      propertyUsage?.includes(SchemaContext.Output)) ||
    (schemaUsage.includes(SchemaContext.Exception) &&
      propertyUsage?.includes(SchemaContext.Exception))
  );
}
