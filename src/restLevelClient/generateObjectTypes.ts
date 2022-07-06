import {
  CodeModel,
  ComplexSchema,
  isObjectSchema,
  ObjectSchema,
  Property,
  SchemaContext
} from "@autorest/codemodel";
import { Channel } from "@autorest/extension-base";
import {
  InterfaceDeclarationStructure,
  PropertySignatureStructure,
  StructureKind,
  TypeAliasDeclarationStructure
} from "ts-morph";
import { getSession } from "../autorestSession";
import { NameType, normalizeName } from "../utils/nameUtils";
import { isDictionarySchema } from "./schemaHelpers";
import { getPropertySignature } from "./getPropertySignature";
import { getLanguageMetadata } from "../utils/languageHelpers";

/**
 * Generates interfaces for ObjectSchemas
 */
export function buildObjectInterfaces(
  model: CodeModel,
  importedModels: Set<string>,
  schemaUsage: SchemaContext[]
): InterfaceDeclarationStructure[] {
  const objectSchemas = (model.schemas.objects ?? []).filter(o =>
    o.usage?.some(u => schemaUsage.includes(u))
  );
  const objectInterfaces: InterfaceDeclarationStructure[] = [];

  for (const objectSchema of objectSchemas) {
    const baseName = getObjectBaseName(objectSchema, schemaUsage);
    const interfaceDeclaration = getObjectInterfaceDeclaration(
      baseName,
      objectSchema,
      schemaUsage,
      importedModels
    );

    objectInterfaces.push(interfaceDeclaration);
  }
  return objectInterfaces;
}

export function buildPolymorphicAliases(
  model: CodeModel,
  schemaUsage: SchemaContext[]
) {
  // We'll add aliases for polymorphic objects
  const objectAliases: TypeAliasDeclarationStructure[] = [];
  const objectSchemas = (model.schemas.objects ?? []).filter(o =>
    o.usage?.some(u => schemaUsage.includes(u))
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
    getLanguageMetadata(objectSchema.language).name,
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
      getLanguageMetadata(child.language).name,
      NameType.Interface,
      true /** shouldGuard */
    );

    unionTypes.push(`${name}${nameSuffix}`);
  }

  return {
    kind: StructureKind.TypeAlias,
    name: `${baseName}`,
    type: unionTypes.join(" | "),
    isExported: true
  };
}

/**
 * Builds the interface for the current object schema. If it is a polymorphic
 * root node it will suffix it with Base.
 */
function getObjectInterfaceDeclaration(
  baseName: string,
  objectSchema: ObjectSchema,
  schemaUsage: SchemaContext[],
  importedModels: Set<string>
): InterfaceDeclarationStructure {
  let interfaceName = `${baseName}`;
  if (isPolymorphicParent(objectSchema)) {
    interfaceName = `${baseName}Parent`;
  }

  const properties = objectSchema.properties ?? [];

  let propertySignatures = getPropertySignatures(
    properties,
    schemaUsage,
    importedModels
  );

  // Add the polymorphic property if exists
  propertySignatures = addDiscriminatorProperty(
    objectSchema,
    propertySignatures
  );

  // Calculate the parents of the current object
  const extendFrom = getImmediateParentsNames(objectSchema, schemaUsage);

  return {
    kind: StructureKind.Interface,
    name: interfaceName,
    isExported: true,
    properties: propertySignatures,
    ...(extendFrom && { extends: extendFrom })
  };
}

function isPolymorphicParent(objectSchema: ObjectSchema) {
  return objectSchema.children?.immediate.length && objectSchema.discriminator;
}

function addDiscriminatorProperty(
  objectSchema: ObjectSchema,
  properties: PropertySignatureStructure[]
): PropertySignatureStructure[] {
  const polymorphicProperty = getDiscriminatorProperty(objectSchema);

  if (polymorphicProperty) {
    // It is possible that the polymorphic property needs to override an existing property.
    // This is usually the case on the top level parent where the property already has a type of string
    // we need to replace it with the polymorphic values of its children
    const filteredProperties = properties.filter(
      p => p.name !== polymorphicProperty.name
    );
    return [...filteredProperties, polymorphicProperty];
  }

  return properties;
}

/**
 * Finds the name of the property used as discriminator and the discriminator value.
 */
function getDiscriminatorProperty(
  objectSchema: ObjectSchema
): PropertySignatureStructure | undefined {
  const { message } = getSession();
  const discriminatorValue = objectSchema.discriminatorValue;
  if (!discriminatorValue && !objectSchema.discriminator) {
    return undefined;
  }

  const discriminators = getDiscriminatorValue(objectSchema);
  const discriminatorPropertyName = getDiscriminatorPropertyName(objectSchema);

  if (discriminators) {
    if (discriminatorPropertyName === undefined) {
      message({
        Text: `getDiscriminatorProperty: Expected object ${
          getLanguageMetadata(objectSchema.language).name
        } to have a discriminator in its hierarchy but found none`,
        Channel: Channel.Warning
      });
      return;
    }

    return {
      kind: StructureKind.PropertySignature,
      name: `"${discriminatorPropertyName}"`,
      type: discriminators
    };
  }

  return undefined;
}

/**
 * Finds the closest discriminator property
 */
function getDiscriminatorPropertyName(objectSchema: ObjectSchema) {
  if (objectSchema.discriminator !== undefined) {
    return objectSchema.discriminator.property.serializedName;
  }

  const allParents = objectSchema.parents?.all ?? [];

  for (const parent of allParents) {
    if (isObjectSchema(parent) && parent.discriminator) {
      return parent.discriminator.property.serializedName;
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
    : objectSchema.discriminator?.property.isDiscriminator
    ? objectSchema.language.default.name
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
      v => `"${v}"`
    );

    return [...selfDiscriminator, ...childValues].join(" | ");
  }

  return undefined;
}

/**
 * Looks into the children and grabs all possible discriminatorValues
 */
function getChildDiscriminatorValues(children: ComplexSchema[]): string[] {
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
function getImmediateParentsNames(
  objectSchema: ObjectSchema,
  shcemaUsage: SchemaContext[]
): string[] {
  if (!objectSchema.parents?.immediate) {
    return [];
  }

  let extendFrom: string[] = [];

  // If an immediate parent is a DictionarySchema, that means that the object has been marked
  // with additional properties. We need to add Record<string, unknown> to the extend list and
  if (objectSchema.parents.immediate.find(isDictionarySchema)) {
    extendFrom.push("Record<string, unknown>");
  }

  // Get the rest of the parents excluding any DictionarySchemas
  const parents = objectSchema.parents.immediate
    .filter(p => !isDictionarySchema(p))
    .map(parent => {
      const nameSuffix = shcemaUsage.includes(SchemaContext.Output)
        ? "Output"
        : "";
      const name = `${normalizeName(
        getLanguageMetadata(parent.language).name,
        NameType.Interface,
        true /** shouldGuard */
      )}${nameSuffix}`;

      return isObjectSchema(parent) && isPolymorphicParent(parent)
        ? `${name}Parent`
        : name;
    });

  return [...parents, ...extendFrom];
}

function getPropertySignatures(
  properties: Property[],
  schemaUsage: SchemaContext[],
  importedModels: Set<string>
) {
  return properties.map(p =>
    getPropertySignature(p, schemaUsage, importedModels)
  );
}
