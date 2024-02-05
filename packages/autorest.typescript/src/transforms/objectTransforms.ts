// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CodeModel,
  ObjectSchema,
  ComplexSchema,
  Property,
  GroupProperty,
  Language
} from "@autorest/codemodel";
import {
  ObjectDetails,
  ObjectKind,
  PolymorphicObjectDetails,
  ComposedObjectDetails
} from "../models/modelDetails";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { normalizeName, NameType } from "../utils/nameUtils";
import { PropertyDetails } from "../models/modelDetails";
import {
  getTypeForSchema,
  getSchemaParents,
  getAdditionalProperties,
  getSchemaTypeDocumentation
} from "../utils/schemaHelpers";
import { extractHeaders } from "../utils/extractHeaders";
import { getAutorestOptions } from "../autorestSession";

export function transformObjects(
  codeModel: CodeModel,
  uberParents: ObjectDetails[]
): ObjectDetails[] {
  const clientName = getLanguageMetadata(codeModel.language).name;
  const objectSchemas = codeModel.schemas.objects || [];
  const headersSchemas = extractHeaders(codeModel.operationGroups, clientName);
  const objectDetails = [...objectSchemas, ...headersSchemas].map((object) =>
    transformObject(object, uberParents)
  );

  return getObjectDetailsWithHierarchy(objectDetails);
}

export function transformObject(
  schema: ObjectSchema,
  uberParents: ObjectDetails[]
): ObjectDetails {
  const metadata = getLanguageMetadata(schema.language);
  let name = normalizeName(
    metadata.name,
    NameType.Class,
    true /** shouldGuard */
  );
  const kind = getObjectKind(schema);

  let objectDetails: ObjectDetails = {
    children: [],
    parents: [],
    hasAdditionalProperties: false,
    kind,
    name,
    serializedName: getObjectSerializedName(metadata, kind),
    description: metadata.description || undefined,
    schema,
    properties: schema.properties
      ? schema.properties.map((prop) =>
          transformProperty(prop)
        )
      : []
  };

  return getAdditionalObjectDetails(objectDetails, uberParents);
}

function getObjectSerializedName(metadata: Language, kind: ObjectKind) {
  return metadata.serializedName
    ? metadata.serializedName
    : kind === ObjectKind.Polymorphic
      ? metadata.name
      : undefined;
}

export function transformProperty({
  language,
  schema,
  serializedName,
  required,
  readOnly,
  nullable
}: Property | GroupProperty): PropertyDetails {
  const { useCoreV2 } = getAutorestOptions();
  const metadata = getLanguageMetadata(language);
  // In the next call, the second parameter 'false' stands for isNullable
  // which helps to determine whether | null should be added to the type.
  const typeDetails = getTypeForSchema(schema, false, useCoreV2);
  const { typeName, isConstant, defaultValue } = typeDetails;

  const schemaDescription = getSchemaTypeDocumentation(schema);
  const description = metadata.description
    ? `${metadata.description}${schemaDescription}`
    : schemaDescription;

  return {
    name: normalizeName(
      metadata.name,
      metadata.isTopLevelParameter ? NameType.Parameter : NameType.Property,
      true /** shouldGuard */
    ),
    description,
    serializedName: serializedName,
    type: typeName.startsWith("$DO_NOT_NORMALIZE$")
      ? typeName.replace("$DO_NOT_NORMALIZE$", "")
      : typeName,
    required: !!required,
    readOnly: !!readOnly,
    nullable: !!nullable,
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

  const immediateParents = getSchemaParents(schema, true /** immediateOnly */);
  if (immediateParents.length) {
    return ObjectKind.Extended;
  }

  return ObjectKind.Basic;
}

function getObjectDetailsWithHierarchy(
  objectsDetails: ObjectDetails[]
): ObjectDetails[] {
  return objectsDetails.map((current) => {
    const parentsSchema = getSchemaParents(
      current.schema,
      true /** immediateOnly */
    );
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
    const hasAdditionalProperties = Boolean(
      getAdditionalProperties(current.schema, true /** immediateOnly */)
    );

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

  return schemas.map((r) => {
    const relativeName = normalizeName(
      getLanguageMetadata(r.language).name,
      NameType.Interface,
      true /** shouldGuard */
    );
    const relative = objectsDetails.find((o) => o.name === relativeName);

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
  uberParents: ObjectDetails[]
): ObjectDetails {
  switch (objectDetails.kind) {
    case ObjectKind.Basic:
      return objectDetails;
    case ObjectKind.Polymorphic:
      return transformPolymorphicObject(
        objectDetails as PolymorphicObjectDetails,
        uberParents
      );
    case ObjectKind.Extended:
      return transformComposedObject(objectDetails);
    default:
      throw new Error(`Unexpected ObjectKind ${objectDetails.kind}`);
  }
}

function transformComposedObject(
  objectDetails: ObjectDetails
): ComposedObjectDetails {
  const immediateParents = getSchemaParents(
    objectDetails.schema,
    true /** immediateOnly */
  );
  if (immediateParents.length < 1) {
    throw new Error(`Expected object ${objectDetails.name} to have parents`);
  }

  const parentNames = immediateParents.map((parent) => {
    const name = getLanguageMetadata(parent.language).name;
    return `${normalizeName(
      name,
      NameType.Interface,
      true /** shouldGuard */
    )}`;
  });

  return {
    ...objectDetails,
    parentNames
  };
}

function transformPolymorphicObject(
  objectDetails: PolymorphicObjectDetails,
  uberParents: ObjectDetails[]
): PolymorphicObjectDetails {
  const schema = objectDetails.schema;
  let uberParent: ObjectSchema | undefined = objectDetails.schema;
  const allParents = getSchemaParents(schema);
  if (allParents && allParents.length) {
    const uberParentSchema = allParents.find((p) => {
      // TODO: Reconsider names to reduce issues with normalization, can we switch to serialized?
      const name = normalizeName(
        getLanguageMetadata(p.language).name,
        NameType.Interface,
        true /** shouldGuard */
      );
      return uberParents.some((up) => up.name === name);
    });

    if (!uberParentSchema) {
      const upn = uberParents.map((u) => u.name);
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

  if (schema !== uberParent && objectDetails.schema.parents?.immediate[0]) {
    uberParent = objectDetails.schema.parents?.immediate[0] as ObjectSchema;
  }
  const uberParentName = getLanguageMetadata(uberParent.language).name;
  const unionName = `${normalizeName(uberParentName, NameType.Interface)}Union`;

  // Discriminator path is used to build a mapping between Discriminators and Mappers
  // this mapping is used by core-http during serialization.
  // Discriminator path is in the form <UberParent>.<discriminatorValue>
  let discriminatorPath: string | undefined;
  let discriminatorValues: { [key: string]: string[] } = {};

  if (schema === uberParent && schema.children) {
    // When the object is a top level parent, its discriminatorPath is itself
    discriminatorPath = `${uberParentName}`;
    const discriminatorProperty = getLanguageMetadata(
      uberParent.discriminator!.property.language
    ).name;

    const childDiscriminators = getChildrenDiscriminators(schema);

    const propertyToMark = objectDetails.properties.find(
      (p) => p.name === discriminatorProperty
    );

    if (propertyToMark) {
      propertyToMark.isDiscriminator = true;
    }

    discriminatorValues = !childDiscriminators.length
      ? {}
      : { [`"${discriminatorProperty}"`]: childDiscriminators };
  } else {
    discriminatorPath = `${uberParentName}.${
      schema.discriminatorValue
        ? schema.discriminatorValue
        : schema.language.default.name
    }`;
    if (uberParent.discriminator) {
      const childDiscriminators = getChildrenDiscriminators(schema);
      discriminatorValues = {
        [getLanguageMetadata(uberParent.discriminator.property.language).name]:
          [
            schema.discriminatorValue
              ? schema.discriminatorValue
              : schema.language.default.name,
            ...childDiscriminators
          ]
      };
    }
  }

  return {
    ...objectDetails,
    discriminatorValues,
    discriminatorPath,
    unionName
  } as PolymorphicObjectDetails;
}

function getChildrenDiscriminators(objectSchema: ObjectSchema) {
  const children = objectSchema.children?.all ?? [];
  return children
    .map((c) => (c as ObjectSchema).discriminatorValue)
    .filter((c) => !!c) as string[];
}
