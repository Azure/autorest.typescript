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
  DateTimeSchema
} from "@azure-tools/codemodel";
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

let uberParents: string[] = [];

export type ModelProperties = { [propertyName: string]: Mapper | string[] };

export interface EntityOptions {
  serializedName?: string;
  required?: boolean;
  readOnly?: boolean;
}

export interface MapperInput {
  schema: Schema;
  options?: EntityOptions;
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
    transformChoiceMapper,
    transformPrimitiveMapper,
    transformByteArrayMapper,
    transformObjectMapper,
    transformArrayMapper,
    transformDictionaryMapper
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
    NameType.Class
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
  options?: EntityOptions
): Mapper {
  const required = !!options && !!options.required;
  const readOnly = !!options && !!options.readOnly;
  // Handle x-ms-discriminator-value Extension. More info:
  // https://github.com/Azure/autorest/tree/master/docs/extensions/swagger-extensions-examples/x-ms-discriminator-value
  const msDiscriminatorValue =
    schema.extensions && schema.extensions["x-ms-discriminator-value"];
  const serializedName =
    msDiscriminatorValue ||
    (options && options.serializedName) ||
    getLanguageMetadata(schema.language).name;
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
    ...(numberSchema.maximum && { InclusiveMaximum: numberSchema.maximum }),
    ...(numberSchema.minimum && { InclusiveMinimum: numberSchema.minimum }),
    // TODO: Handle number exclusive min and max
    ...(numberSchema.multipleOf && { MultipleOf: numberSchema.multipleOf })
  };

  const mappeType = type as MapperType;
  return {
    ...{ type: mappeType },
    ...(serializedName && { serializedName }),
    ...(!!schema.defaultValue && {
      defaultValue: schema.defaultValue
    }),
    ...(required && { required }),
    ...(readOnly && { readOnly }),
    ...(hasConstraints && { constraints })
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

// TODO: Make sure this is the correct way to handle additionalProperties
function getAdditionalProperties(
  immediateParents: Schema[]
): Mapper | undefined {
  return immediateParents.some(p => p.type === SchemaType.Dictionary)
    ? {
        type: {
          name: MapperType.Object
        }
      }
    : undefined;
}

function isUberParent(objectSchema: ObjectSchema) {
  const { discriminator, parents, children } = objectSchema;
  return (
    discriminator && !parents && children && children.all && children.all.length
  );
}

function transformObjectMapper(pipelineValue: PipelineValue) {
  const { schema, options } = pipelineValue;

  if (!isSchemaType([SchemaType.Object], schema)) {
    return pipelineValue;
  }
  const className = getMapperClassName(schema);
  const objectSchema = schema as ObjectSchema;
  const { discriminator, discriminatorValue } = objectSchema;

  let modelProperties = processProperties(objectSchema.properties);
  const parents = objectSchema.parents ? objectSchema.parents.all : [];
  const immediateParents = objectSchema.parents
    ? objectSchema.parents.immediate
    : [];
  const parentsRefs = immediateParents
    .map(p => getMapperClassName(p))
    .filter(p => p !== className);

  const additionalProperties = getAdditionalProperties(immediateParents);

  modelProperties = {
    ...modelProperties,
    ...(parentsRefs && parentsRefs.length && { parentsRefs })
  };

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
          clientName: discriminator!.property.serializedName
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

  if (!isSchemaType([SchemaType.Dictionary], schema)) {
    return pipelineValue;
  }

  const dictionarySchema = schema as DictionarySchema;
  const elementSchema = dictionarySchema.elementType;
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

  if (!isSchemaType([SchemaType.SealedChoice], schema)) {
    return pipelineValue;
  }

  const choiceSchema = schema as ChoiceSchema;

  const mapper = buildMapper(
    schema,
    {
      name: MapperType.Enum,
      allowedValues: choiceSchema.choices.map(choice => choice.value)
    },
    options
  );

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

function transformStringMapper(pipelineValue: PipelineValue) {
  const { schema, options } = pipelineValue;

  if (!isSchemaType([SchemaType.String, SchemaType.Choice], schema)) {
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
    getLanguageMetadata(schema.language).name;
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

function processProperties(properties: Property[] = []) {
  let modelProperties: ModelProperties = {};
  properties.forEach(prop => {
    const name = normalizeName(prop.serializedName, NameType.Property);
    modelProperties[name] = extractObjectPropertyMapper(prop);
  });

  return modelProperties;
}

function extractObjectPropertyMapper({
  serializedName,
  schema,
  required,
  readOnly
}: Property): Mapper {
  return getMapperOrRef(schema, serializedName, {
    required,
    readOnly,
    serializedName
  });
}

function getMapperOrRef(
  schema: Schema,
  serializedName?: string,
  options?: EntityOptions
): Mapper {
  if (isSchemaType([SchemaType.Object], schema)) {
    return {
      ...(serializedName && { serializedName }),
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

function isSchemaType(matchSchemas: SchemaType[], { type }: Schema) {
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
    case SchemaType.String:
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
    case SchemaType.Dictionary:
      return MapperType.Dictionary;
    case SchemaType.Integer:
    case SchemaType.Number:
      return MapperType.Number;
    case SchemaType.Object:
      return MapperType.Object;
    default:
      throw new Error(`There is no known Mapper type for schema type ${type}`);
  }
}
