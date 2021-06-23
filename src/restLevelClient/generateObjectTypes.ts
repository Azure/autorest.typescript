import {
  CodeModel,
  ComplexSchema,
  isObjectSchema,
  ObjectSchema,
  Parameter,
  Property
} from "@autorest/codemodel";
import { Channel } from "@autorest/extension-base";
import {
  InterfaceDeclarationStructure,
  PropertySignatureStructure,
  StructureKind
} from "ts-morph";
import { getSession } from "../autorestSession";
import { NameType, normalizeName } from "../utils/nameUtils";
import { isDictionarySchema } from "./schemaHelpers";
import { getPropertySignature } from "./getPropertySignature";

/**
 * Generates interfaces for ObjectSchemas
 */

export function buildObjectInterfaces(
  model: CodeModel,
  importedModels: Set<string>
): InterfaceDeclarationStructure[] {
  const objectSchemas = model.schemas.objects ?? [];
  const objectInterfaces: InterfaceDeclarationStructure[] = [];
  for (const objectSchema of objectSchemas) {
    let baseName = normalizeName(
      objectSchema.language.default.name,
      NameType.Interface,
      true /** guard name */
    );
    const properties = objectSchema.properties ?? [];

    // Get the polymorphic property and value if there is any for the given object.

    let propertySignatures = getPropertySignatures(properties, importedModels);

    // Add the polymorphic property if exists
    propertySignatures = addDiscriminatorProperty(
      objectSchema,
      propertySignatures
    );

    // Calculate the parents of the current object
    const extendFrom = getImmediateParentsNames(objectSchema);

    objectInterfaces.push({
      kind: StructureKind.Interface,
      name: baseName,
      isExported: true,
      properties: propertySignatures,
      ...(extendFrom && { extends: extendFrom })
    });
  }
  return objectInterfaces;
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
        Text: `getDiscriminatorProperty: Expected object ${objectSchema.language.default.name} to have a discriminator in its hierarchy but found none`,
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
  const discriminatorValue = objectSchema.discriminatorValue;
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
function getImmediateParentsNames(objectSchema: ObjectSchema): string[] {
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
    .map(parent =>
      normalizeName(
        parent.language.default.name,
        NameType.Interface,
        true /** shouldGuard */
      )
    );

  return [...parents, ...extendFrom];
}

function isBaseObjectSchema(objectSchema: ObjectSchema): boolean {
  const selfName = normalizeName(
    objectSchema.language.default.name,
    NameType.Interface
  );

  return (
    objectSchema.parents?.immediate?.length === 1 &&
    objectSchema.parents.immediate[0].language.default.name === selfName &&
    !Boolean(objectSchema.properties?.length)
  );
}

function getPropertySignatures(
  properties: Property[],
  importedModels: Set<string>
) {
  return properties.map(p => getPropertySignature(p, importedModels));
}
