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
  DictionarySchema
} from "@azure-tools/codemodel";
import {
  BaseMapper,
  Mapper,
  MapperType,
  MapperConstraints,
  EnumMapper,
  SimpleMapperType,
  CompositeMapper,
  SequenceMapper
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

export interface EntityOptions {
  serializedName?: string;
  required?: boolean;
  readOnly?: boolean;
}

export interface MapperInput {
  schema: Schema;
  options?: EntityOptions;
}

const pipe = (
  ...fns: Array<(pipelineValue: PipelineValue) => PipelineValue>
) => (x: PipelineValue) => fns.reduce((v, f) => f(v), x);

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

export function getMapperClassName(schema: Schema): string {
  return normalizeName(
    getLanguageMetadata(schema.language).name,
    NameType.Class
  );
}

function transformPrimitiveMapper(pipelineValue: PipelineValue) {
  const { schema, options, isHandled } = pipelineValue;

  if (isHandled || !primitiveSchemaTypes.includes(schema.type)) {
    return pipelineValue;
  }

  const required = !!options && !!options.required;
  const serializedName =
    (options && options.serializedName) ||
    getLanguageMetadata(schema.language).name;

  const mapper: BaseMapper = {
    ...(serializedName && { serializedName }),
    type: {
      name: getMapperTypeFromSchema(schema.type)
    } as SimpleMapperType,
    ...(!!schema.defaultValue && {
      defaultValue: schema.defaultValue
    }),
    ...(required && { required })
  };

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformObjectMapper(pipelineValue: PipelineValue) {
  const { schema, options, isHandled } = pipelineValue;

  if (isHandled || schema.type !== SchemaType.Object) {
    return pipelineValue;
  }

  const required = !!options && !!options.required;
  const serializedName =
    (options && options.serializedName) ||
    getLanguageMetadata(schema.language).name;
  const objectSchema = schema as ObjectSchema;

  const mapper: CompositeMapper = {
    ...(serializedName && { serializedName }),
    ...(required && { required }),
    ...(!!schema.defaultValue && {
      defaultValue: schema.defaultValue
    }),
    type: {
      name: MapperType.Composite,
      modelProperties: processProperties(objectSchema.properties)
    }
  };

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

type ModelProperties = { [propertyName: string]: Mapper };

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
) {
  if (schema.type === SchemaType.Object) {
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

function transformDictionaryMapper(pipelineValue: PipelineValue) {
  const { schema, options, isHandled } = pipelineValue;

  if (isHandled || schema.type !== SchemaType.Dictionary) {
    return pipelineValue;
  }

  const required = !!options && !!options.required;
  const serializedName =
    (options && options.serializedName) ||
    getLanguageMetadata(schema.language).name;

  const dictionarySchema = schema as DictionarySchema;
  const elementSchema = dictionarySchema.elementType;
  const mapper: Mapper = {
    ...(serializedName && { serializedName }),
    type: {
      name: MapperType.Sequence,
      element: getMapperOrRef(elementSchema)
    },
    ...(!!schema.defaultValue && {
      defaultValue: schema.defaultValue
    }),
    ...(required && { required })
  };

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformArrayMapper(pipelineValue: PipelineValue) {
  const { schema, options, isHandled } = pipelineValue;

  if (isHandled || schema.type !== SchemaType.Array) {
    return pipelineValue;
  }

  const arraySchema = schema as ArraySchema;
  arraySchema.elementType;
  const required = !!options && !!options.required;
  const serializedName =
    (options && options.serializedName) ||
    getLanguageMetadata(schema.language).name;

  const hasConstraints =
    !isNil(arraySchema.maxItems) ||
    !isNil(arraySchema.minItems) ||
    !isNil(arraySchema.uniqueItems);

  const constraints: MapperConstraints = {
    MinItems: arraySchema.minItems,
    MaxItems: arraySchema.maxItems,
    UniqueItems: arraySchema.uniqueItems ? true : undefined
  };

  const elementSchema = arraySchema.elementType;
  const mapper: SequenceMapper = {
    ...(hasConstraints && { constraints }),
    ...(serializedName && { serializedName }),
    type: {
      name: MapperType.Sequence,
      element: getMapperOrRef(elementSchema)
    },
    ...(!!schema.defaultValue && {
      defaultValue: schema.defaultValue
    }),
    ...(required && { required })
  };

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformByteArrayMapper(pipelineValue: PipelineValue) {
  const { schema, options, isHandled } = pipelineValue;

  if (isHandled || schema.type !== SchemaType.ByteArray) {
    return pipelineValue;
  }

  const byteArraySchema = schema as ByteArraySchema;
  const schemaType =
    byteArraySchema.format === "base64url"
      ? MapperType.Base64Url
      : MapperType.ByteArray;

  const required = !!options && !!options.required;
  const serializedName =
    (options && options.serializedName) ||
    getLanguageMetadata(schema.language).name;

  const mapper: Mapper = {
    ...(serializedName && { serializedName }),
    type: {
      name: schemaType
    },
    ...(!!schema.defaultValue && {
      defaultValue: schema.defaultValue
    }),
    ...(required && { required })
  };

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformChoiceMapper(pipelineValue: PipelineValue) {
  const { schema, options, isHandled } = pipelineValue;

  if (
    isHandled ||
    ![SchemaType.Choice, SchemaType.SealedChoice].includes(schema.type)
  ) {
    return pipelineValue;
  }

  const choiceSchema = schema as ChoiceSchema;

  const required = !!options && !!options.required;
  const serializedName =
    (options && options.serializedName) ||
    getLanguageMetadata(schema.language).name;

  const mapper: EnumMapper = {
    ...(serializedName && { serializedName }),
    type: {
      name: MapperType.Enum,
      allowedValues: choiceSchema.choices.map(choice => choice.value)
    },
    ...(!!schema.defaultValue && {
      defaultValue: schema.defaultValue
    }),
    ...(required && { required })
  };

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformDateMapper(pipelineValue: PipelineValue) {
  const { schema, options, isHandled } = pipelineValue;

  if (
    isHandled ||
    ![SchemaType.Date, SchemaType.DateTime, SchemaType.UnixTime].includes(
      schema.type
    )
  ) {
    return pipelineValue;
  }

  const required = !!options && !!options.required;
  const serializedName =
    (options && options.serializedName) ||
    getLanguageMetadata(schema.language).name;

  const mapper: BaseMapper = {
    ...(serializedName && { serializedName }),
    type: { name: getMapperTypeFromSchema(schema.type) } as SimpleMapperType,
    ...(required && { required }),
    ...(!!schema.defaultValue && {
      defaultValue: schema.defaultValue
    })
  };

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformStringMapper(pipelineValue: PipelineValue) {
  const { schema, options, isHandled } = pipelineValue;

  if (isHandled || schema.type !== SchemaType.String) {
    return pipelineValue;
  }

  const required = !!options && !!options.required;
  const stringSchema = schema as StringSchema;
  const serializedName =
    (options && options.serializedName) ||
    getLanguageMetadata(schema.language || { default: { name: "" } }).name;
  const hasConstraints =
    !isNil(stringSchema.maxLength) ||
    !isNil(stringSchema.minLength) ||
    !isNil(stringSchema.pattern);

  const constraints: MapperConstraints = {
    MaxLength: stringSchema.maxLength,
    MinLength: stringSchema.minLength,
    Pattern: !!stringSchema.pattern
      ? new RegExp(stringSchema.pattern)
      : undefined
  };

  const mapper: BaseMapper = {
    type: { name: MapperType.String },
    ...(serializedName && { serializedName }),
    ...(required && { required }),
    ...(!!stringSchema.defaultValue && {
      defaultValue: stringSchema.defaultValue
    }),
    ...(hasConstraints && { constraints })
  };

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function transformConstantMapper(pipelineValue: PipelineValue): PipelineValue {
  const { schema, options, isHandled } = pipelineValue;

  if (isHandled || schema.type !== SchemaType.Constant) {
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
  const { schema, options, isHandled } = pipelineValue;

  if (isHandled || !isNumberSchema(schema)) {
    return pipelineValue;
  }

  const required = !!options && !!options.required;
  const serializedName =
    (options && options.serializedName) ||
    getLanguageMetadata(schema.language).name;
  const numberSchema = schema as NumberSchema;

  const hasConstraints =
    !isNil(numberSchema.multipleOf) ||
    !isNil(numberSchema.maximum) ||
    !isNil(numberSchema.minimum);

  const constraints: MapperConstraints = {
    InclusiveMaximum: numberSchema.maximum,
    InclusiveMinimum: numberSchema.minimum,
    // TODO: Handle exclusive min and max
    MultipleOf: numberSchema.multipleOf
  };

  const mapper: BaseMapper = {
    ...(serializedName && { serializedName }),
    type: { name: MapperType.Number },
    ...(required && { required }),
    ...(hasConstraints && { constraints })
  };

  return {
    schema,
    mapper,
    isHandled: true
  };
}

function getMapperTypeFromSchema(type: SchemaType) {
  switch (type) {
    case SchemaType.Boolean:
      return MapperType.Boolean;
    case SchemaType.ByteArray:
      return MapperType.ByteArray;
    case SchemaType.Char:
    case SchemaType.String:
      return MapperType.String;
    case SchemaType.Choice:
    case SchemaType.SealedChoice:
      return MapperType.Enum;
    case SchemaType.Duration:
      return MapperType.TimeSpan;
    case SchemaType.DateTime:
      return MapperType.DateTime;
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
