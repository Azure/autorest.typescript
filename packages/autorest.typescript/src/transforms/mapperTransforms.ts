// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Schema,
  NumberSchema,
  isNumberSchema,
  SchemaType,
  StringSchema,
  ConstantSchema,
  ObjectSchema,
  ChoiceSchema,
  ByteArraySchema,
  Property,
  ArraySchema,
  DictionarySchema,
  DateTimeSchema,
  CodeModel,
  AnyObjectSchema,
  AnySchema
} from "@autorest/codemodel";
import {
  BaseMapper,
  Mapper,
  MapperType,
  MapperConstraints,
  PolymorphicDiscriminator
} from "@azure/core-http";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { isNil } from "lodash";
import { normalizeName, NameType } from "../utils/nameUtils";
import { extractHeaders } from "../utils/extractHeaders";
import { KnownMediaType } from "@azure-tools/codegen";
import { ClientOptions } from "../models/clientDetails";
import {
  getSchemaParents,
  getAdditionalProperties
} from "../utils/schemaHelpers";
import { ObjectDetails } from "../models/modelDetails";
import { MapperTypes } from "../utils/valueHelpers";
import { getAutorestOptions } from "../autorestSession";

interface PipelineValue {
  schema: Schema;
  options?: EntityOptions;
  mapper?: Mapper;
  isHandled?: boolean;
}

const primitiveSchemaTypes = [
  SchemaType.Boolean,
  SchemaType.Char,
  SchemaType.Duration
];

/**
 * Function that runs a set of functions as a pipeline
 * if any function processed the input, remaining ones will skip
 * @param fns functions in the pipeline
 */
const pipe = (
  ...fns: Array<(pipelineValue: PipelineValue) => PipelineValue>
) => (x: PipelineValue) => fns.reduce((v, f) => (!v.isHandled ? f(v) : v), x);

export type ModelProperties = { [propertyName: string]: Mapper | string[] };

export interface EntityOptions {
  skipEnumValidation?: boolean;
  serializedName?: string;
  required?: boolean;
  readOnly?: boolean;
  hasXmlMetadata?: boolean;
  uberParents?: string[];
  nullable?: boolean;
}

export interface MapperInput {
  schema: Schema;
  options?: EntityOptions;
}

export async function transformMappers(
  codeModel: CodeModel,
  uberParents: ObjectDetails[],
  { mediaTypes }: ClientOptions
): Promise<Mapper[]> {
  const { skipEnumValidation } = getAutorestOptions();
  const clientName = getLanguageMetadata(codeModel.language).name;

  if (!codeModel.schemas.objects) {
    return [];
  }

  const uberParentsNames = uberParents.map(up => up.name);
  const hasXmlMetadata = mediaTypes?.has(KnownMediaType.Xml);
  return [
    ...codeModel.schemas.objects,
    ...extractHeaders(codeModel.operationGroups, clientName)
  ].map(objectSchema =>
    transformMapper({
      schema: objectSchema,
      options: {
        hasXmlMetadata,
        uberParents: uberParentsNames,
        skipEnumValidation
      }
    })
  );
}

/**
 * Transform a schema into a Mapper
 * @param mapperInput An object consisting of a schema and EntityOptions
 */
export function transformMapper({ schema, options }: MapperInput) {
  const processMapper = pipe(
    transformStringMapper,
    transformNumberMapper,
    transformConstantMapper,
    transformDateMapper,
    transformTimeMapper,
    transformChoiceMapper,
    transformPrimitiveMapper,
    transformByteArrayMapper,
    transformBinaryMapper,
    transformObjectMapper,
    transformArrayMapper,
    transformDictionaryMapper,
    transformUuidMapper,
    transformAnyMapper
  );
  const { mapper } = processMapper({ schema, options });

  if (!mapper) {
    throw new Error(`Couldn't transfrom mapper from schema: ${schema.type}`);
  }

  return mapper;
}

/**
 * Gets a className from a schema
 * @param schema Schema to get the className from
 */
export function getMapperClassName(schema: Schema): string {
  return normalizeName(
    getLanguageMetadata(schema.language).name,
    NameType.Class,
    true /** shouldGuard */
  );
}

interface PartialMapperType {
  name: string;
  className?: string;
  allowedValues?: any[];
  element?: Mapper;
  value?: Mapper;
  modelProperties?: ModelProperties;
  polymorphicDiscriminator?: PolymorphicDiscriminator | string;
  uberParent?: string;
  additionalProperties?: Mapper;
}

function buildMapper(
  schema: Schema,
  type: PartialMapperType,
  options: EntityOptions = {}
): Mapper {
  const required = !!options.required;
  const readOnly = !!options.readOnly;
  const nullable = !!options.nullable;
  // Handle x-ms-discriminator-value Extension. More info:
  // https://github.com/Azure/autorest/tree/master/docs/extensions/swagger-extensions-examples/x-ms-discriminator-value
  const serializedName =
    getDiscriminatorValue(schema) ||
    options.serializedName ||
    (schema as ObjectSchema).discriminator && !isUberParent(schema as ObjectSchema) && getLanguageMetadata(schema.language).name ||
    // Fallback to name only for XML schemas since they need a name, otherwise don't
    (options.hasXmlMetadata && getLanguageMetadata(schema.language).name);

  const arraySchema = schema as ArraySchema;
  arraySchema.elementType;
  const stringSchema = schema as StringSchema;
  const numberSchema = schema as NumberSchema;

  const hasConstraints =
    !isNil(arraySchema.maxItems) ||
    !isNil(arraySchema.minItems) ||
    !isNil(arraySchema.uniqueItems) ||
    !isNil(stringSchema.maxLength) ||
    !isNil(stringSchema.minLength) ||
    !isNil(stringSchema.pattern) ||
    !isNil(numberSchema.multipleOf) ||
    !isNil(numberSchema.maximum) ||
    !isNil(numberSchema.minimum);

  const constraints: MapperConstraints = {
    ...(arraySchema.minItems && { MinItems: arraySchema.minItems }),
    ...(arraySchema.maxItems && { MaxItems: arraySchema.maxItems }),
    ...(arraySchema.uniqueItems && { UniqueItems: arraySchema.uniqueItems }),
    ...(stringSchema.maxLength && { MaxLength: stringSchema.maxLength }),
    ...(stringSchema.minLength && { MinLength: stringSchema.minLength }),
    ...(stringSchema.pattern && { Pattern: new RegExp(stringSchema.pattern) }),
    ...(numberSchema.maximum !== null && numberSchema.maximum !== undefined
      ? numberSchema.exclusiveMaximum
        ? { ExclusiveMaximum: numberSchema.maximum }
        : { InclusiveMaximum: numberSchema.maximum }
      : {}),
    ...(numberSchema.minimum !== null && numberSchema.minimum !== undefined
      ? numberSchema.exclusiveMinimum
        ? { ExclusiveMinimum: numberSchema.minimum }
        : { InclusiveMinimum: numberSchema.minimum }
      : {}),
    ...(numberSchema.multipleOf && { MultipleOf: numberSchema.multipleOf })
  };

  const xmlMetadata = getXmlMetadata(schema, options);

  const mappeType = type as MapperType;
  return {
    ...{ type: mappeType },
    ...(serializedName && { serializedName }),
    ...(schema.defaultValue !== undefined && {
      defaultValue: schema.defaultValue
    }),
    ...(required && { required }),
    ...(readOnly && { readOnly }),
    ...(nullable && { nullable }),
    ...(hasConstraints && { constraints }),
    ...xmlMetadata
  };
}

function transformPrimitiveMapper(pipelineValue: PipelineValue) {
  const { schema, options } = pipelineValue;

  if (!isSchemaType(primitiveSchemaTypes, schema)) {
    return pipelineValue;
  }
  const type = {
    name: getMapperTypeFromSchema(schema.type)
  };
  const mapper = buildMapper(schema, type, options) as BaseMapper;

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function getXmlMetadata(
  schema: Schema,
  { hasXmlMetadata, serializedName }: EntityOptions
) {
  if (!hasXmlMetadata) {
    return {};
  }

  let xmlElementName: string | undefined = undefined;
  let xmlNamespace = schema.serialization?.xml?.namespace;
  let xmlNamespacePrefix = schema.serialization?.xml?.prefix;
  if (schema.type === SchemaType.Array) {
    const elementSchema = (schema as ArraySchema).elementType;
    const languageMetadata = getLanguageMetadata(elementSchema.language);
    xmlElementName =
      elementSchema.serialization?.xml?.name ||
      languageMetadata.serializedName ||
      languageMetadata.name;
  }

  const defaultName =
    serializedName || getLanguageMetadata(schema.language).serializedName;
  const { name, attribute: xmlIsAttribute, wrapped: xmlIsWrapped } =
    schema.serialization?.xml || {};

  const xmlName = name || defaultName;

  const headerCollectionPrefix = getLanguageMetadata(schema.language)
    .headerCollectionPrefix;

  return {
    ...(headerCollectionPrefix && { headerCollectionPrefix }),
    ...(xmlName && { xmlName }),
    ...(xmlIsAttribute && { xmlIsAttribute }),
    ...(xmlIsWrapped && { xmlIsWrapped }),
    ...(xmlElementName && { xmlElementName }),
    ...(xmlNamespace && { xmlNamespace }),
    ...(xmlNamespacePrefix && { xmlNamespacePrefix })
  };
}

function buildAdditionalProperties(
  objectSchema: ObjectSchema
): Mapper | undefined {
  const additionalProperties = getAdditionalProperties(objectSchema);
  return additionalProperties
    ? {
      type: {
        name: MapperType.Object
      }
    }
    : undefined;
}

function isUberParent(objectSchema: ObjectSchema) {
  const { parents, children } = objectSchema;
  return !parents && children && children.all && children.all.length;
}

function transformObjectMapper(pipelineValue: PipelineValue) {
  const { schema, options } = pipelineValue;

  if (!isSchemaType([SchemaType.Object], schema)) {
    return pipelineValue;
  }
  const className = getMapperClassName(schema);
  const objectSchema = schema as ObjectSchema;
  const { discriminator, discriminatorValue } = objectSchema;

  let modelProperties = processProperties(objectSchema.properties, options);
  const parents = getSchemaParents(objectSchema);
  const immediateParents = getSchemaParents(
    objectSchema,
    true /** immediateOnly */
  );
  const parentsRefs = immediateParents
    .map(p => getMapperClassName(p))
    .filter(p => p !== className);

  const additionalProperties = buildAdditionalProperties(objectSchema);

  modelProperties = {
    ...modelProperties,
    ...(parentsRefs && parentsRefs.length && { parentsRefs })
  };

  const uberParents = options?.uberParents || [];

  // If we find a new uber parent, store it
  if (uberParents.indexOf(className) < 0 && isUberParent(objectSchema)) {
    uberParents.push(className);
  }

  // If any of the parents is present in uberParents we know it
  // is its uber parent
  const uberParent = getMapperClassName(
    parents.find(p => uberParents.includes(getMapperClassName(p))) || schema
  );

  const mapper = buildMapper(
    schema,
    {
      name: MapperType.Composite,
      className,
      modelProperties,
      ...(discriminatorValue && {
        uberParent,
        polymorphicDiscriminator: `${uberParent}.type.polymorphicDiscriminator`
      }),
      ...(discriminator && {
        uberParent,
        polymorphicDiscriminator: {
          serializedName: discriminator!.property.serializedName,
          clientName: normalizeName(
            discriminator!.property.language.default.name,
            NameType.Property
          )
        }
      }),
      ...(additionalProperties && { additionalProperties })
    },
    options
  );

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformDictionaryMapper(pipelineValue: PipelineValue) {
  const { schema, options } = pipelineValue;

  if (!isSchemaType([SchemaType.Dictionary, SchemaType.AnyObject], schema)) {
    return pipelineValue;
  }
  let dictionarySchema = schema as DictionarySchema | AnyObjectSchema;

  const elementSchema = isDictionarySchema(dictionarySchema)
    ? dictionarySchema.elementType
    : new AnySchema("Schema for AnyObject type");
  const mapper = buildMapper(
    schema,
    { name: MapperType.Dictionary, value: getMapperOrRef(elementSchema) },
    options
  );

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function isDictionarySchema(schema: Schema): schema is DictionarySchema {
  return schema.type === SchemaType.Dictionary;
}

function isAnyObjectSchema(schema: Schema): schema is AnyObjectSchema {
  return schema.type === SchemaType.AnyObject;
}

function transformArrayMapper(pipelineValue: PipelineValue) {
  const { schema, options } = pipelineValue;

  if (!isSchemaType([SchemaType.Array], schema)) {
    return pipelineValue;
  }

  const arraySchema = schema as ArraySchema;
  const elementSchema = arraySchema.elementType;
  const mapper = buildMapper(
    schema,
    {
      name: MapperType.Sequence,
      element: getMapperOrRef(elementSchema)
    },
    options
  );

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformBinaryMapper(pipelineValue: PipelineValue) {
  const { schema, options } = pipelineValue;

  if (!isSchemaType([SchemaType.Binary], schema)) {
    return pipelineValue;
  }

  const schemaType = MapperType.Stream;

  const mapper = buildMapper(
    schema,
    {
      name: schemaType
    },
    options
  );

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformByteArrayMapper(pipelineValue: PipelineValue) {
  const { schema, options } = pipelineValue;

  if (!isSchemaType([SchemaType.ByteArray], schema)) {
    return pipelineValue;
  }

  const byteArraySchema = schema as ByteArraySchema;
  const schemaType =
    byteArraySchema.format === "base64url"
      ? MapperType.Base64Url
      : MapperType.ByteArray;

  const mapper = buildMapper(
    schema,
    {
      name: schemaType
    },
    options
  );

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformChoiceMapper(pipelineValue: PipelineValue) {
  const { schema, options } = pipelineValue;

  if (!isSchemaType([SchemaType.SealedChoice, SchemaType.Choice], schema)) {
    return pipelineValue;
  }

  const choiceSchema = schema as ChoiceSchema;
  let type;

  if (isSchemaType([SchemaType.Choice], schema)) {
    if (choiceSchema.choiceType && choiceSchema.choiceType.type) {
      type = {
        name: getMapperTypeFromSchema(choiceSchema.choiceType.type)
      };
    } else {
      type = {
        name: MapperType.String
      };
    }
  } else {
    if (options?.skipEnumValidation) {
      type = {
        name: MapperType.String
      };
    } else {
      type = {
        name: MapperType.Enum,
        allowedValues: choiceSchema.choices.map(choice => choice.value)
      };
    }
  }

  const mapper = buildMapper(schema, type, options);

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformDateMapper(pipelineValue: PipelineValue) {
  const { schema, options } = pipelineValue;

  if (
    !isSchemaType(
      [SchemaType.Date, SchemaType.DateTime, SchemaType.UnixTime],
      schema
    )
  ) {
    return pipelineValue;
  }

  const { format } = schema as DateTimeSchema;
  const mapper = buildMapper(
    schema,
    { name: getMapperTypeFromSchema(schema.type, format) },
    options
  );

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformTimeMapper(pipelineValue: PipelineValue) {
  const { schema, options } = pipelineValue;

  if (!isSchemaType([SchemaType.Time], schema)) {
    return pipelineValue;
  }

  const mapper = buildMapper(
    schema,
    { name: getMapperTypeFromSchema(schema.type) },
    options
  );

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformStringMapper(pipelineValue: PipelineValue) {
  const { schema, options } = pipelineValue;

  /**
   * Note: SchemaCredential is treated as a string for mapping purposes. According to OpenApi v3
   * the "password" format on a string schema is `A hint to UIs to obscure input.`
   * So for mapping this has no effect. However when generating models we are including a hint
   * as part of the documentation. For more information:
   * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#data-types
   */
  if (
    !isSchemaType(
      [SchemaType.String, SchemaType.Credential, SchemaType.Uri],
      schema
    )
  ) {
    return pipelineValue;
  }

  const mapper = buildMapper(schema, { name: MapperType.String }, options);

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformConstantMapper(pipelineValue: PipelineValue): PipelineValue {
  const { schema, options } = pipelineValue;

  if (!isSchemaType([SchemaType.Constant], schema)) {
    return pipelineValue;
  }
  const serializedName =
    (options && options.serializedName) ||
    getLanguageMetadata(schema.language).serializedName;

  const constantSchema = schema as ConstantSchema;

  const mapper: Mapper = {
    ...transformMapper({ schema: constantSchema.valueType }),
    defaultValue: constantSchema.value.value,
    isConstant: true,
    ...(serializedName && { serializedName })
  };

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformNumberMapper(pipelineValue: PipelineValue): PipelineValue {
  const { schema, options } = pipelineValue;

  if (!isNumberSchema(schema)) {
    return pipelineValue;
  }

  const mapper: BaseMapper = buildMapper(
    schema,
    { name: MapperType.Number },
    options
  );

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformAnyMapper(pipelineValue: PipelineValue): PipelineValue {
  const { schema, options } = pipelineValue;

  if (!isSchemaType([SchemaType.Any], schema)) {
    return pipelineValue;
  }

  const mapper: BaseMapper = buildMapper(schema, { name: "any" }, options);

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformUuidMapper(pipelineValue: PipelineValue): PipelineValue {
  const { schema, options } = pipelineValue;

  if (!isSchemaType([SchemaType.Uuid], schema)) {
    return pipelineValue;
  }

  const mapper: BaseMapper = buildMapper(schema, { name: "Uuid" }, options);

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function processProperties(
  properties: Property[] = [],
  options: EntityOptions = {}
) {
  let modelProperties: ModelProperties = {};
  properties.forEach(prop => {
    const serializedName = getPropertySerializedName(prop);
    const propName = getLanguageMetadata(prop.language).name;
    const name = normalizeName(
      propName,
      prop.language.default.isTopLevelParameter ? NameType.Parameter : NameType.Property,
      true /** shouldGuard */
    );
    modelProperties[name] = getMapperOrRef(prop.schema, serializedName, {
      ...options,
      required: prop.required,
      readOnly: prop.readOnly,
      nullable: prop.nullable,
      serializedName
    });
  });

  return modelProperties;
}

function getPropertySerializedName({
  flattenedNames,
  serializedName
}: Property) {
  if (!flattenedNames || !flattenedNames.length) {
    return serializedName;
  }

  return flattenedNames
    .map(name => {
      // Escaping names
      ["."].forEach(character => {
        name = name.replace(character, `\\${character}`);
      });
      return name;
    })
    .join(".");
}

/**
 * Gets the discriminator value
 * The extension x-ms-discriminator-value can be used to override
 */
function getDiscriminatorValue(schema: ObjectSchema | Schema) {
  return (
    (schema.extensions && schema.extensions["x-ms-discriminator-value"]) ||
    (schema as ObjectSchema).discriminatorValue
  );
}

export function getMapperOrRef(
  schema: Schema,
  serializedName?: string,
  options: EntityOptions = {}
): Mapper {
  if (isSchemaType([SchemaType.Object], schema)) {
    // When the property is an object, we just need to reference the class
    // instead of building a mapper.
    const xmlMetadata = getXmlMetadata(schema, options);
    return {
      ...(serializedName && { serializedName }),
      ...xmlMetadata,
      type: {
        name: MapperType.Composite,
        className: getMapperClassName(schema)
      }
    };
  }

  return transformMapper({
    schema,
    options
  });
}

export function isSchemaType(matchSchemas: SchemaType[], { type }: Schema) {
  return matchSchemas.includes(type);
}

export function getMapperTypeFromSchema(type: SchemaType, format?: string) {
  switch (type) {
    case SchemaType.Array:
      return MapperType.Sequence;
    case SchemaType.Boolean:
      return MapperType.Boolean;
    case SchemaType.ByteArray:
      return MapperType.ByteArray;
    case SchemaType.Char:
    case SchemaType.Credential:
    case SchemaType.String:
    case SchemaType.Uri:
      return MapperType.String;
    case SchemaType.Choice:
      return MapperType.String;
    case SchemaType.SealedChoice:
      return MapperType.Enum;
    case SchemaType.Duration:
      return MapperType.TimeSpan;
    case SchemaType.DateTime:
      return format === "date-time-rfc1123"
        ? MapperType.DateTimeRfc1123
        : MapperType.DateTime;
    case SchemaType.UnixTime:
      return MapperType.UnixTime;
    case SchemaType.Date:
      return MapperType.Date;
    case SchemaType.Time:
      return MapperType.String;
    case SchemaType.Dictionary:
    case SchemaType.AnyObject:
      return MapperType.Dictionary;
    case SchemaType.Integer:
    case SchemaType.Number:
      return MapperType.Number;
    case SchemaType.Object:
      return MapperType.Object;
    case SchemaType.Any:
      return MapperTypes.any;
    case SchemaType.Uuid:
      return MapperTypes.Uuid;
    case SchemaType.Binary:
      return MapperType.Stream;
    default:
      throw new Error(`There is no known Mapper type for schema type ${type}`);
  }
}
