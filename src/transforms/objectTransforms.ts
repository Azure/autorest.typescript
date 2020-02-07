// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CodeModel,
  ObjectSchema,
  ComplexSchema,
  SchemaType,
  Property
} from "@azure-tools/codemodel";
import {
  ObjectDetails,
  ObjectKind,
  PolymorphicObjectDetails,
  ComposedObjectDetails
} from "../models/modelDetails";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { normalizeName, NameType } from "../utils/nameUtils";
import { PropertyDetails } from "../models/modelDetails";
import { getTypeForSchema } from "../utils/schemaHelpers";
import { extractHeaders } from "../utils/extractHeaders";

export function transformObjects(
  codeModel: CodeModel,
  uberParents: ObjectDetails[]
): ObjectDetails[] {
  const objectSchemas = codeModel.schemas.objects || [];
  const headersSchemas = extractHeaders(codeModel.operationGroups);
  const objectDetails = [...objectSchemas, ...headersSchemas].map(object =>
    transformObject(object, uberParents)
  );

  return getObjectDetailsWithHierarchy(objectDetails);
}

export function transformObject(
  schema: ObjectSchema,
  uberParents: ObjectDetails[]
): ObjectDetails {
  const metadata = getLanguageMetadata(schema.language);
  let name = normalizeName(metadata.name, NameType.Class);
  const kind = getObjectKind(schema);

  let objectDetails: ObjectDetails = {
    children: [],
    parents: [],
    hasAdditionalProperties: false,
    kind,
    name,
    serializedName: metadata.serializedName,
    description: `An interface representing ${metadata.name}.`,
    schema,
    properties: schema.properties
      ? schema.properties.map(prop => transformProperty(prop))
      : []
  };

  return getAdditionalObjectDetails(objectDetails, schema, uberParents);
}

export function transformProperty(property: Property): PropertyDetails {
  const metadata = getLanguageMetadata(property.language);
  const { typeName, isConstant, defaultValue } = getTypeForSchema(
    property.schema
  );
  const typeDetails = getTypeForSchema(property.schema);

  return {
    name: normalizeName(metadata.name, NameType.Property),
    description: !metadata.description.startsWith("MISSING")
      ? metadata.description
      : undefined,
    serializedName: property.serializedName,
    type: typeName,
    required: !!property.required,
    readOnly: !!property.readOnly,
    isConstant,
    defaultValue,
    typeDetails,
    isDiscriminator: false
  };
}

function getObjectKind(schema: ObjectSchema): ObjectKind {
  if (schema.discriminator || schema.discriminatorValue) {
    return ObjectKind.Polymorphic;
  }

  if (schema.parents && schema.parents.immediate.length) {
    return ObjectKind.Extended;
  }

  return ObjectKind.Basic;
}

function getObjectDetailsWithHierarchy(
  objectsDetails: ObjectDetails[]
): ObjectDetails[] {
  return objectsDetails.map(current => {
    const parentsSchema =
      current.schema.parents && current.schema.parents.immediate;
    const childrenSchema =
      current.schema.children && current.schema.children.immediate;
    let parents: ObjectDetails[] = extractHierarchy(
      parentsSchema,
      objectsDetails,
      current
    );
    let children: ObjectDetails[] = extractHierarchy(
      childrenSchema,
      objectsDetails,
      current
    );
    const hasAdditionalProperties =
      !!parentsSchema &&
      parentsSchema.some(p => p.type === SchemaType.Dictionary);

    return {
      ...current,
      parents,
      children,
      hasAdditionalProperties
    };
  });
}

function extractHierarchy(
  schemas: ComplexSchema[] | undefined,
  objectsDetails: ObjectDetails[],
  current: ObjectDetails
): ObjectDetails[] {
  if (!schemas || !schemas.length) {
    return [];
  }

  return schemas
    .filter(s => s.type === SchemaType.Object)
    .map(r => {
      const relativeName = normalizeName(
        getLanguageMetadata(r.language).name,
        NameType.Interface
      );
      const relative = objectsDetails.find(o => o.name === relativeName);

      if (!relative) {
        throw new Error(
          `Expected relative ${relativeName} of ${current.name} but couldn't find it in transformed objects`
        );
      }
      return relative;
    });
}

function getAdditionalObjectDetails(
  objectDetails: ObjectDetails,
  schema: ObjectSchema,
  uberParents: ObjectDetails[]
): ObjectDetails {
  switch (objectDetails.kind) {
    case ObjectKind.Basic:
      return objectDetails;
    case ObjectKind.Polymorphic:
      return transformPolymorphicObject(
        objectDetails as PolymorphicObjectDetails,
        schema,
        uberParents
      );
    case ObjectKind.Extended:
      return transformComposedObject(objectDetails, schema);
    default:
      throw new Error(`Unexpected ObjectKind ${objectDetails.kind}`);
  }
}

function transformComposedObject(
  objectDetails: ObjectDetails,
  schema: ObjectSchema
): ComposedObjectDetails {
  if (!schema.parents) {
    throw new Error(`Expected object ${objectDetails.name} to have parents`);
  }

  const parentNames = schema.parents.immediate.map(parent => {
    const name = getLanguageMetadata(parent.language).name;
    return `${normalizeName(name, NameType.Interface)}`;
  });

  return {
    ...objectDetails,
    parentNames
  };
}

function transformPolymorphicObject(
  objectDetails: PolymorphicObjectDetails,
  schema: ObjectSchema,
  uberParents: ObjectDetails[]
): PolymorphicObjectDetails {
  let uberParent: ObjectSchema | undefined = schema;
  const allParents = schema.parents && schema.parents.all;
  if (allParents && allParents.length) {
    const uberParentSchema = allParents.find(p => {
      // TODO: Reconsider names to reduce issues with normalization, can we switch to serialized?
      const name = normalizeName(
        getLanguageMetadata(p.language).name,
        NameType.Interface
      );
      return uberParents.some(up => up.name === name);
    });

    if (!uberParentSchema) {
      const upn = uberParents.map(u => u.name);
      throw new Error(
        `Could not determine uberParent for Object ${
          objectDetails.name
        }. Make sure that swagger defines polymorphism correctly; UberParents: ${JSON.stringify(
          upn
        )}`
      );
    }

    uberParent = uberParentSchema as ObjectSchema;
  }

  const uberParentName = getLanguageMetadata(uberParent.language).name;
  const unionName = `${normalizeName(uberParentName, NameType.Interface)}Union`;

  let discriminator: { [key: string]: string[] } = {};

  if (schema === uberParent && schema.children) {
    const discriminatorProperty = uberParent.discriminator!.property
      .serializedName;

    const children = schema.children.all;
    const childDiscriminators = children
      .map(c => (c as ObjectSchema).discriminatorValue)
      .filter(c => !!c) as string[];

    const propertyToMark = objectDetails.properties.find(
      p => p.name === discriminatorProperty
    );

    if (propertyToMark) {
      propertyToMark.isDiscriminator = true;
    }

    discriminator = !childDiscriminators.length
      ? {}
      : { [`"${discriminatorProperty}"`]: childDiscriminators };
  }

  return {
    discriminator,
    unionName,
    ...objectDetails
  } as PolymorphicObjectDetails;
}
