// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Discriminator,
  Enum,
  EnumMember,
  getDiscriminator,
  getDoc,
  getEffectiveModelType,
  getFormat,
  getFriendlyName,
  getMaxLength,
  getMaxValue,
  getMinLength,
  getMinValue,
  getPattern,
  getProperty,
  getPropertyType,
  getSummary,
  getVisibility,
  isNeverType,
  isNumericType,
  isSecret,
  isStringType,
  isTemplateDeclaration,
  isUnknownType,
  Model,
  ModelProperty,
  Type,
  Union,
  isNullType,
  Scalar,
  UnionVariant,
  getProjectedName,
  StringLiteral,
  BooleanLiteral,
  NoTarget,
  NumericLiteral,
  Service,
  listServices,
  Program,
  getEncode,
  EncodeData,
  isRecordModelType,
  isArrayModelType
} from "@typespec/compiler";
import { reportDiagnostic } from "../lib.js";
import {
  ArraySchema,
  DictionarySchema,
  NameType,
  normalizeName,
  ObjectSchema,
  Schema,
  SchemaContext
} from "@azure-tools/rlc-common";
import {
  getHeaderFieldName,
  getPathParamName,
  getQueryParamName,
  isStatusCode,
  HttpOperation,
  createMetadataInfo,
  Visibility
} from "@typespec/http";
import { getPagedResult, isFixed } from "@azure-tools/typespec-azure-core";
import { extractPagedMetadataNested } from "./operationUtil.js";
import {
  getDefaultApiVersion,
  isApiVersion
} from "@azure-tools/typespec-client-generator-core";
import { SdkContext } from "./interfaces.js";
import { getModelNamespaceName } from "./namespaceUtils.js";

export function getBinaryType(usage: SchemaContext[]) {
  return usage.includes(SchemaContext.Output)
    ? "Uint8Array"
    : "string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream";
}

export function isByteOrByteUnion(dpgContext: SdkContext, type: Type) {
  const schema = getSchemaForType(dpgContext, type);
  return isByteType(schema) || isByteUnion(schema);
}

function isByteType(schema: any) {
  return (
    schema.type === "string" &&
    (schema.format === "byte" || schema.format === "binary")
  );
}

function isByteUnion(schema: any) {
  if (!Array.isArray(schema.enum)) {
    return false;
  }
  for (const ele of schema.enum) {
    if (isByteType(ele)) {
      return true;
    }
  }
  return false;
}

function refineByteType(schema: any) {
  schema.typeName = getBinaryType([
    SchemaContext.Input,
    SchemaContext.Exception
  ]);
  schema.outputTypeName = getBinaryType([SchemaContext.Output]);
  return schema;
}

export function enrichBinaryTypeInBody(schema: any) {
  if (isByteType(schema)) {
    refineByteType(schema);
  } else if (isByteUnion(schema)) {
    const inputType: string[] = [];
    for (const item of schema.enum) {
      if (isByteType(item)) {
        refineByteType(item);
      }
      // ignore the string type for input because we already have it in bytes union
      if (getTypeName(item, [SchemaContext.Input]) !== "string") {
        inputType.push(getTypeName(item, [SchemaContext.Input]));
      }
    }
    // refine the input type
    schema.typeName = inputType.join(" | ");
  }
  return schema;
}

export function getSchemaForType(
  dpgContext: SdkContext,
  typeInput: Type,
  usage?: SchemaContext[],
  needRef: boolean = false,
  relevantProperty?: ModelProperty
) {
  const program = dpgContext.program;
  const type = getEffectiveModelFromType(program, typeInput);

  const builtinType = getSchemaForLiteral(type);
  if (builtinType !== undefined) {
    // add in description elements for types derived from primitive types (SecureString, etc.)
    const doc = getDoc(program, type);
    if (doc) {
      builtinType.description = doc;
    }
    return builtinType;
  }
  if (type.kind === "Model") {
    const schema = getSchemaForModel(dpgContext, type, usage, needRef) as any;
    if (isAnonymousObjectSchema(schema)) {
      if (Object.keys(schema.properties ?? {}).length === 0) {
        // Handle empty anonymous model as Record
        schema.typeName =
          schema.type === "object" ? "Record<string, unknown>" : "unknown";
        if (usage && usage.includes(SchemaContext.Output)) {
          schema.outputTypeName =
            schema.type === "object" ? "Record<string, any>" : "any";
        }
        schema.type = "unknown";
      } else {
        // Handle non-empty anonymous model as inline model
        if (usage && usage.includes(SchemaContext.Output)) {
          schema.outputTypeName = getModelInlineSigniture(schema, {
            usage: [SchemaContext.Output]
          });
        }
        schema.typeName = getModelInlineSigniture(schema, {
          usage: [SchemaContext.Input]
        });
        schema.type = "object";
      }
    } else if (
      !isArrayModelType(program, type) &&
      !isRecordModelType(program, type)
    ) {
      if (usage && usage.includes(SchemaContext.Output)) {
        schema.outputTypeName = `${schema.name}Output`;
      }
      schema.typeName = `${schema.name}`;
    }
    schema.usage = usage;
    return schema;
  } else if (type.kind === "Union") {
    return getSchemaForUnion(dpgContext, type, usage);
  } else if (type.kind === "UnionVariant") {
    return getSchemaForUnionVariant(dpgContext, type, usage);
  } else if (type.kind === "Enum") {
    return getSchemaForEnum(dpgContext, type);
  } else if (type.kind === "Scalar") {
    return getSchemaForScalar(dpgContext, type, relevantProperty);
  } else if (type.kind === "EnumMember") {
    return getSchemaForEnumMember(program, type);
  }
  if (isUnknownType(type)) {
    const returnType: any = { type: "unknown" };
    if (usage && usage.includes(SchemaContext.Output)) {
      returnType.outputTypeName = "any";
      returnType.typeName = "unknown";
    }
    return returnType;
  }
  if (isNeverType(type)) {
    return { type: "never" };
  }
  if (isNullType(type)) {
    return { type: "null" };
  }
  reportDiagnostic(program, {
    code: "invalid-schema",
    format: { type: type.kind },
    target: type
  });
  return undefined;
}
export function getEffectiveModelFromType(program: Program, type: Type): Type {
  if (type.kind === "Model") {
    const effective = getEffectiveModelType(program, type, isSchemaProperty);
    if (effective.name) {
      return effective;
    }
  }
  function isSchemaProperty(property: ModelProperty) {
    const headerInfo = getHeaderFieldName(program, property);
    const queryInfo = getQueryParamName(program, property);
    const pathInfo = getPathParamName(program, property);
    const statusCodeInfo = isStatusCode(program, property);
    return !(headerInfo || queryInfo || pathInfo || statusCodeInfo);
  }
  return type;
}
export function includeDerivedModel(model: Model): boolean {
  return (
    !isTemplateDeclaration(model) &&
    (!model.templateMapper ||
      !model.templateMapper.args ||
      model.templateMapper.args?.length === 0 ||
      model.derivedModels.length > 0)
  );
}

function applyEncoding(
  dpgContext: SdkContext,
  typespecType: Scalar | ModelProperty,
  target: any = {}
) {
  const encodeData = getEncode(dpgContext.program, typespecType);
  if (encodeData) {
    const newTarget = { ...target };
    const newType = getSchemaForScalar(dpgContext, encodeData.type);
    newTarget["type"] = newType["type"];
    newTarget["typeName"] = newType["typeName"];
    newTarget["outputTypeName"] = newType["outputTypeName"];
    // If the target already has a format it takes priority. (e.g. int32)
    newTarget["format"] = mergeFormatAndEncoding(
      newTarget.format,
      encodeData.encoding,
      newType["format"]
    );
    return newTarget;
  }
  return target;
}

function mergeFormatAndEncoding(
  format: string | undefined,
  encoding: string,
  encodeAsFormat: string | undefined
): string {
  switch (format) {
    case undefined:
      return encodeAsFormat ?? encoding;
    case "date-time":
      return encoding;
    case "duration":
    default:
      return encodeAsFormat ?? encoding;
  }
}

function getSchemaForScalar(
  dpgContext: SdkContext,
  scalar: Scalar,
  relevantProperty?: ModelProperty
) {
  let result = {};
  const isStd = dpgContext.program.checker.isStdType(scalar);
  if (isStd) {
    result = getSchemaForStdScalar(
      dpgContext.program,
      scalar,
      relevantProperty
    );
  } else if (scalar.baseScalar) {
    result = getSchemaForScalar(dpgContext, scalar.baseScalar);
  }
  const withDecorators = applyEncoding(
    dpgContext,
    scalar,
    result
      ? applyIntrinsicDecorators(dpgContext.program, scalar, result)
      : undefined
  );
  if (withDecorators.type === "string" && withDecorators.format === "binary") {
    withDecorators.typeName =
      "string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream";
    withDecorators.outputTypeName = "Uint8Array";
  }
  return withDecorators;
}

function getSchemaForUnion(
  dpgContext: SdkContext,
  union: Union,
  usage?: SchemaContext[]
) {
  const variants = Array.from(union.variants.values());
  const values = [];

  for (const variant of variants) {
    // We already know it's not a model type
    values.push(getSchemaForType(dpgContext, variant.type, usage));
  }

  const schema: any = {};
  if (values.length > 0) {
    schema.enum = values;
    const unionAlias = values
      .map((item) => `${getTypeName(item, [SchemaContext.Input]) ?? item}`)
      .join(" | ");
    const outputUnionAlias = values
      .map((item) => `${getTypeName(item, [SchemaContext.Output]) ?? item}`)
      .join(" | ");
    if (!union.expression) {
      schema.name = union.name;
      schema.type = "object";
      schema.typeName = union.name;
      schema.outputTypeName = union.name + "Output";
      schema.alias = unionAlias;
      schema.outputAlias = outputUnionAlias;
    } else if (union.expression && !union.name) {
      schema.type = "union";
      schema.typeName = unionAlias;
      schema.outputTypeName = outputUnionAlias;
    } else {
      schema.type = "union";
      schema.typeName = union.name ?? unionAlias;
    }
  }

  return schema;
}

function getSchemaForUnionVariant(
  dpgContext: SdkContext,
  variant: UnionVariant,
  usage?: SchemaContext[]
): Schema {
  return getSchemaForType(dpgContext, variant, usage);
}

// An openapi "string" can be defined in several different ways in typespec
function isOasString(type: Type): boolean {
  if (type.kind === "String") {
    // A string literal
    return true;
  } else if (type.kind === "Model" && type.name === "string") {
    // string type
    return true;
  } else if (type.kind === "Union") {
    // A union where all variants are an OasString
    return type.options.every((o) => isOasString(o));
  }
  return false;
}

function isStringLiteral(type: Type): boolean {
  return (
    type.kind === "String" ||
    (type.kind === "Union" && type.options.every((o) => o.kind === "String")) ||
    (type.kind === "EnumMember" &&
      typeof (type.value ?? type.name) === "string")
  );
}

// Return any string literal values for type
function getStringValues(type: Type): string[] {
  switch (type.kind) {
    case "String":
      return [type.value];
    case "Union":
      return [...type.variants.values()]
        .flatMap((x) => getStringValues(x.type))
        .filter((x) => x !== undefined);
    case "EnumMember":
      return typeof type.value !== "number" ? [type.value ?? type.name] : [];
    default:
      return [];
  }
}
function validateDiscriminator(
  program: Program,
  discriminator: Discriminator,
  derivedModels: readonly Model[]
): boolean {
  const { propertyName } = discriminator;
  const retVals = derivedModels.map((t) => {
    const prop = getProperty(t, propertyName);
    if (!prop) {
      reportDiagnostic(program, {
        code: "discriminator",
        messageId: "missing",
        target: t
      });
      return false;
    }
    let retval = true;
    if (
      !isOasString(prop.type) &&
      prop.type.kind !== "EnumMember" &&
      prop.type.kind !== "Enum"
    ) {
      reportDiagnostic(program, {
        code: "discriminator",
        messageId: "type",
        target: prop
      });
      retval = false;
    }
    if (prop.optional) {
      reportDiagnostic(program, {
        code: "discriminator",
        messageId: "required",
        target: prop
      });
      retval = false;
    }
    return retval;
  });
  // Map of discriminator value to the model in which it is declared
  const discriminatorValues = new Map<string, string>();
  for (const t of derivedModels) {
    // Get the discriminator property directly in the child model
    const prop = t.properties?.get(propertyName);
    // Issue warning diagnostic if discriminator property missing or is not a string literal
    if (!prop || !isStringLiteral(prop.type)) {
      reportDiagnostic(program, {
        code: "discriminator-value",
        messageId: "literal",
        target: prop || t
      });
    }
    if (prop) {
      const vals = getStringValues(prop.type);
      vals.forEach((val) => {
        if (discriminatorValues.has(val)) {
          reportDiagnostic(program, {
            code: "discriminator",
            messageId: "duplicate",
            format: {
              val: val,
              model1: discriminatorValues.get(val)!,
              model2: t.name
            },
            target: prop
          });
          retVals.push(false);
        } else {
          discriminatorValues.set(val, t.name);
        }
      });
    }
  }
  return retVals.every((v) => v);
}
/**
 * A "schema property" here is a property that is emitted to OpenAPI schema.
 *
 * Headers, parameters, status codes are not schema properties even they are
 * represented as properties in typespec.
 */
function isSchemaProperty(program: Program, property: ModelProperty) {
  const headerInfo = getHeaderFieldName(program, property);
  const queryInfo = getQueryParamName(program, property);
  const pathInfo = getPathParamName(program, property);
  const statusCodeinfo = isStatusCode(program, property);
  return !(headerInfo || queryInfo || pathInfo || statusCodeinfo);
}

function getSchemaForModel(
  dpgContext: SdkContext,
  model: Model,
  usage?: SchemaContext[],
  needRef?: boolean
) {
  if (isArrayModelType(dpgContext.program, model)) {
    return getSchemaForArrayModel(dpgContext, model, usage!);
  }

  const program = dpgContext.program;
  const overridedModelName =
    getFriendlyName(program, model) ?? getProjectedName(program, model, "json");
  const fullNamespaceName =
    overridedModelName ??
    getModelNamespaceName(dpgContext, model.namespace!)
      .map((nsName) => {
        return normalizeName(nsName, NameType.Interface);
      })
      .join("") + model.name;
  let name = dpgContext.rlcOptions?.enableModelNamespace
    ? fullNamespaceName
    : model.name;
  if (
    !overridedModelName &&
    model.templateMapper &&
    model.templateMapper.args &&
    model.templateMapper.args.length > 0 &&
    getPagedResult(program, model)
  ) {
    name =
      model.templateMapper.args
        .map((it) => {
          switch (it.kind) {
            case "Model":
              return it.name;
            case "String":
              return it.value;
            default:
              return "";
          }
        })
        .join("") + "List";
  }

  const modelSchema: ObjectSchema = {
    name: overridedModelName ?? name,
    type: "object",
    description: getDoc(program, model) ?? ""
  };
  // normalized the output name
  modelSchema.name = normalizeName(
    modelSchema.name,
    NameType.Interface,
    true /** shouldGuard */
  );

  if (modelSchema.name === "Record" && isRecordModelType(program, model)) {
    return getSchemaForRecordModel(dpgContext, model, usage!);
  }
  modelSchema.typeName = modelSchema.name;
  if (usage && usage.includes(SchemaContext.Output)) {
    modelSchema.outputTypeName = modelSchema.name + "Output";
  }

  if (isAzureCoreErrorType(model)) {
    modelSchema.fromCore = true;
  }

  if (getPagedResult(program, model)) {
    const paged = extractPagedMetadataNested(program, model);
    if (paged && paged.itemsProperty) {
      const items = paged.itemsProperty as unknown as Model;
      if (items && items.templateMapper && items.templateMapper.args) {
        const templateName = items.templateMapper.args
          ?.map((it) => {
            switch (it.kind) {
              case "Model":
                return it.name;
              case "String":
                return it.value;
              default:
                return "";
            }
          })
          .join("");
        if (
          paged.itemsProperty.name === "value" &&
          paged.nextLinkProperty?.name === "nextLink"
        ) {
          modelSchema.alias = `Paged<${templateName}>`;
          modelSchema.outputAlias = `Paged<${templateName}Output>`;
        }
      }
    }
  }
  modelSchema.properties = {};

  const derivedModels = model.derivedModels.filter(includeDerivedModel);

  // getSchemaOrRef on all children to push them into components.schemas
  const discriminator = getDiscriminator(program, model);
  if (derivedModels.length > 0) {
    modelSchema.children = {
      all: [],
      immediate: []
    };
  }
  for (const child of derivedModels) {
    const childSchema = getSchemaForType(dpgContext, child, usage, true);
    for (const [name, prop] of child.properties) {
      if (name === discriminator?.propertyName) {
        const propSchema = getSchemaForType(
          dpgContext,
          prop.type,
          usage,
          !isAnonymousModelType(prop.type),
          prop
        );
        childSchema.discriminatorValue = propSchema.type.replace(/"/g, "");
        break;
      }
    }
    modelSchema.children?.all?.push(childSchema);
    modelSchema.children?.immediate?.push(childSchema);
  }

  // Enable option `isPolyParent` and discriminator only when it has valid children
  if (
    discriminator &&
    modelSchema?.children?.all?.length &&
    modelSchema?.children?.all?.length > 0
  ) {
    if (!validateDiscriminator(program, discriminator, derivedModels)) {
      // appropriate diagnostic is generated in the validate function
      return {};
    }

    const { propertyName } = discriminator;

    modelSchema.discriminator = {
      name: propertyName,
      type: "string",
      description: `Discriminator property for ${model.name}.`
    };
    modelSchema.discriminatorValue = propertyName;

    modelSchema.isPolyParent = true;
  }

  // applyExternalDocs(model, modelSchema);
  if (needRef) {
    return modelSchema;
  }
  if (isRecordModelType(program, model)) {
    modelSchema.parents = {
      all: [getSchemaForRecordModel(dpgContext, model, usage!)],
      immediate: [getSchemaForRecordModel(dpgContext, model, usage!)]
    };
  }
  for (const [propName, prop] of model.properties) {
    const restApiName = getProjectedName(program, prop, "json");
    const name = `"${restApiName ?? propName}"`;
    if (!isSchemaProperty(program, prop)) {
      continue;
    }

    const propSchema = getSchemaForType(
      dpgContext,
      prop.type,
      usage,
      isAnonymousModelType(prop.type) ? false : true,
      prop
    );

    if (propSchema === undefined) {
      continue;
    }
    if (!prop.optional) {
      propSchema.required = true;
    }
    const propertyDescription = getFormattedPropertyDoc(
      program,
      prop,
      propSchema
    );
    propSchema.usage = usage;
    // Use the description from ModelProperty not derived from Model Type
    propSchema.description = propertyDescription;
    modelSchema.properties[name] = propSchema;
    // if this property is a discriminator property, remove it to keep autorest validation happy
    const { propertyName } = getDiscriminator(program, model) || {};
    if (
      propertyName &&
      name === `"${propertyName}"` &&
      modelSchema.discriminator
    ) {
      modelSchema.discriminator.type = propSchema.typeName ?? propSchema.type;
      continue;
    }

    // Apply decorators on the property to the type's schema
    const newPropSchema = applyIntrinsicDecorators(program, prop, propSchema);
    if (newPropSchema === undefined) {
      continue;
    }
    // Use the description from ModelProperty not devired from Model Type
    newPropSchema.description = propertyDescription;

    // Should the property be marked as readOnly?
    const vis = getVisibility(program, prop);
    if (vis && vis.includes("read")) {
      const mutability = [];
      if (vis.includes("read")) {
        if (vis.length > 1) {
          mutability.push(SchemaContext.Output);
        } else {
          newPropSchema["readOnly"] = true;
        }
      }
      if (vis.includes("write") || vis.includes("create")) {
        mutability.push(SchemaContext.Input);
      }

      if (mutability.length > 0) {
        newPropSchema["usage"] = mutability;
      }
    }
    modelSchema.properties[name] = newPropSchema;
  }

  if (model.baseModel) {
    modelSchema.parents = {
      all: [getSchemaForType(dpgContext, model.baseModel, usage, true)],
      immediate: [getSchemaForType(dpgContext, model.baseModel, usage, true)]
    };
  }
  return modelSchema;
}
// Map an typespec type to an OA schema. Returns undefined when the resulting
// OA schema is just a regular object schema.
function getSchemaForLiteral(type: Type): any {
  switch (type.kind) {
    case "Number":
      return { type: `${type.value}`, isConstant: true };
    case "String":
      return { type: `"${type.value}"`, isConstant: true };
    case "Boolean":
      return { type: `${type.value}`, isConstant: true };
  }
  if (type.kind === undefined) {
    if (typeof type === "string") {
      return { type: `"${type}"` };
    } else if (typeof type === "number" || typeof type === "boolean") {
      return { type: `${type}` };
    }
  }
  return undefined;
}
function applyIntrinsicDecorators(
  program: Program,
  type: Scalar | ModelProperty,
  target: any
): any {
  const newTarget = { ...target };
  const docStr = getDoc(program, type);
  const isString = isStringType(program, getPropertyType(type));
  const isNumeric = isNumericType(program, getPropertyType(type));

  if (isString && !target?.documentation && docStr) {
    newTarget.description = docStr;
  }

  const restApiName = getProjectedName(program, type, "json");
  if (restApiName) {
    newTarget.name = restApiName;
  }

  const summaryStr = getSummary(program, type);
  if (isString && !target.summary && summaryStr) {
    newTarget.summary = summaryStr;
  }

  const formatStr = getFormat(program, type);
  if (isString && !target.format && formatStr) {
    newTarget.format = formatStr;
  }

  const pattern = getPattern(program, type);
  if (isString && !target.pattern && pattern) {
    newTarget.pattern = pattern;
  }

  const minLength = getMinLength(program, type);
  if (isString && !target.minLength && minLength !== undefined) {
    newTarget.minLength = minLength;
  }

  const maxLength = getMaxLength(program, type);
  if (isString && !target.maxLength && maxLength !== undefined) {
    newTarget.maxLength = maxLength;
  }

  const minValue = getMinValue(program, type);
  if (isNumeric && !target.minimum && minValue !== undefined) {
    newTarget.minimum = minValue;
  }

  const maxValue = getMaxValue(program, type);
  if (isNumeric && !target.maximum && maxValue !== undefined) {
    newTarget.maximum = maxValue;
  }

  if (isSecret(program, type)) {
    newTarget.format = "password";
    newTarget["x-ms-secret"] = true;
  }

  return newTarget;
}

function getSchemaForEnumMember(program: Program, e: EnumMember) {
  const value = e.value ?? e.name;
  const type = enumMemberType(e) === "string" ? `"${value}"` : `${value}`;
  return { type, description: getDoc(program, e), isConstant: true };
}

function getSchemaForEnum(dpgContext: SdkContext, e: Enum) {
  const values = [];
  const type = enumMemberType(e.members.values().next().value);
  for (const option of e.members.values()) {
    if (type !== enumMemberType(option)) {
      reportDiagnostic(dpgContext.program, {
        code: "union-unsupported",
        target: e
      });
      continue;
    }

    values.push(getSchemaForType(dpgContext, option));
  }

  const schema: any = { type, description: getDoc(dpgContext.program, e) };
  if (values.length > 0) {
    schema.enum = values;
    schema.type = values
      .map((item) => `${getTypeName(item, [SchemaContext.Input]) ?? item}`)
      .join(" | ");
    if (!isFixed(dpgContext.program, e)) {
      schema.name = "string";
      schema.typeName = "string";
    }
  }
  return schema;
}

function enumMemberType(member: EnumMember) {
  if (typeof member.value === "number") {
    return "number";
  }
  return "string";
}
/**
 * Map TypeSpec intrinsic models to open api definitions
 */
function getSchemaForArrayModel(
  dpgContext: SdkContext,
  type: Model,
  usage: SchemaContext[]
) {
  const { program } = dpgContext;
  const { indexer } = type;
  let schema: any = {};
  if (!indexer) {
    return schema;
  }
  if (isArrayModelType(program, type)) {
    schema = {
      type: "array",
      items: getSchemaForType(
        dpgContext,
        indexer.value!,
        usage,
        !isAnonymousModelType(indexer.value!)
      ),
      description: getDoc(program, type)
    };
    if (
      !program.checker.isStdType(indexer.value) &&
      !isUnknownType(indexer.value!) &&
      indexer.value?.kind &&
      schema.items.name &&
      !schema.items.enum
    ) {
      schema.typeName = `Array<${schema.items.name}>`;
      if (usage && usage.includes(SchemaContext.Output)) {
        schema.outputTypeName = `Array<${schema.items.name}Output>`;
      }
    } else {
      if (schema.items.typeName) {
        if (schema.items.type === "dictionary") {
          schema.typeName = `${schema.items.typeName}[]`;
        } else if (schema.items.type === "union") {
          schema.typeName = `(${schema.items.typeName})[]`;
        } else if (
          schema.items.format === "binary" &&
          schema.items.type === "string"
        ) {
          schema.typeName = `Array<${schema.items.typeName}>`;
          if (usage && usage.includes(SchemaContext.Output)) {
            schema.outputTypeName = `Array<${schema.items.outputTypeName}>`;
          }
        } else if (isAnonymousObjectSchema(schema.items)) {
          schema.typeName = `${schema.items.typeName}[]`;
          if (usage && usage.includes(SchemaContext.Output)) {
            schema.outputTypeName = `${schema.items.outputTypeName}[]`;
          }
        } else {
          schema.typeName = schema.items.typeName
            .split("|")
            .map((typeName: string) => {
              return `${typeName}[]`;
            })
            .join(" | ");
          if (
            schema.items.outputTypeName &&
            usage &&
            usage.includes(SchemaContext.Output)
          ) {
            schema.outputTypeName = schema.items.outputTypeName
              .split("|")
              .map((typeName: string) => {
                return `${typeName}[]`;
              })
              .join(" | ");
          }
        }
      } else if (schema.items.type.includes("|")) {
        schema.typeName = `(${schema.items.type})[]`;
      } else {
        schema.typeName = `${schema.items.type}[]`;
      }
    }
    schema.usage = usage;
    return schema;
  }
}

function getSchemaForRecordModel(
  dpgContext: SdkContext,
  type: Model,
  usage: SchemaContext[]
) {
  const { program } = dpgContext;
  const { indexer } = type;
  let schema: any = {};
  if (!indexer) {
    return schema;
  }
  if (isRecordModelType(program, type)) {
    const valueType = getSchemaForType(
      dpgContext,
      indexer?.value,
      usage,
      !isAnonymousModelType(indexer.value)
    );
    schema = {
      type: "dictionary",
      additionalProperties: valueType,
      description: getDoc(program, type)
    };
    if (
      !program.checker.isStdType(indexer.value) &&
      !isUnknownType(indexer.value!) &&
      !isUnionType(indexer.value!)
    ) {
      schema.typeName = `Record<string, ${valueType.typeName}>`;
      schema.valueTypeName = valueType.name;
      if (usage && usage.includes(SchemaContext.Output)) {
        schema.outputTypeName = `Record<string, ${valueType.outputTypeName}>`;
        schema.outputValueTypeName = `${valueType.outputTypeName}`;
      }
    } else if (isUnknownType(indexer.value!)) {
      schema.typeName = `Record<string, ${
        valueType.typeName ?? valueType.type
      }>`;
      if (usage && usage.includes(SchemaContext.Output)) {
        schema.outputTypeName = `Record<string, ${
          valueType.outputTypeName ?? valueType.type
        }>`;
      }
    } else {
      schema.typeName = `Record<string, ${getTypeName(valueType, [
        SchemaContext.Input
      ])}>`;
      schema.outputTypeName = `Record<string, ${getTypeName(valueType, [
        SchemaContext.Output
      ])}>`;
    }
    schema.usage = usage;
    return schema;
  }
}

function isUnionType(type: Type) {
  return type.kind === "Union";
}

function getSchemaForStdScalar(
  program: Program,
  type: Scalar,
  relevantProperty?: ModelProperty
) {
  if (!program.checker.isStdType(type)) {
    return undefined;
  }

  /**
   * lookup for @encode decorator
   *  if absent use typespec type (or default way of serializing that type)
   *  if present respect type provided in @encode
   */
  let format = undefined;
  if (relevantProperty) {
    const encodeData = getEncode(program, relevantProperty);
    if (encodeData && isEncodeTypeEffective(type, encodeData)) {
      type = encodeData.type;
      format = encodeData.encoding;
    }
  }
  const name = type.name;
  const description = getSummary(program, type);
  switch (name) {
    case "bytes":
      return { type: "string", format: "byte", description };
    case "integer":
      return applyIntrinsicDecorators(program, type, {
        type: "number"
      });
    case "int8":
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "int8"
      });
    case "int16":
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "int16"
      });
    case "int32":
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "int32"
      });
    case "int64":
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "int64"
      });
    case "safeint":
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "safeint"
      });
    case "uint8":
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "uint8"
      });
    case "uint16":
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "uint16"
      });
    case "uint32":
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "uint32"
      });
    case "uint64":
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "uint64"
      });
    case "float64":
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "float64"
      });
    case "float32":
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "float32"
      });
    case "float":
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "float"
      });
    case "decimal":
      reportDiagnostic(program, {
        code: "decimal-to-number",
        format: {
          propertyName: relevantProperty?.name ?? ""
        },
        target: relevantProperty ?? type
      });
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "decimal",
        description: "decimal"
      });
    case "decimal128":
      reportDiagnostic(program, {
        code: "decimal-to-number",
        format: {
          propertyName: relevantProperty?.name ?? ""
        },
        target: relevantProperty ?? type
      });
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "decimal128",
        description: "decimal128"
      });
    case "string":
      if (format === "binary") {
        return {
          type: "string",
          format: "binary",
          description,
          typeName:
            "string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream",
          outputTypeName: "Uint8Array"
        };
      }
      return applyIntrinsicDecorators(program, type, {
        type: "string"
      });
    case "boolean":
      return { type: "boolean", description };
    case "plainDate":
      return {
        type: "string",
        format,
        description,
        typeName: "Date | string",
        outputTypeName: "string"
      };
    case "utcDateTime":
      return {
        type: "string",
        format,
        description,
        typeName: "Date | string",
        outputTypeName: "string"
      };
    case "offsetDateTime":
      return {
        type: "string",
        format: "date-time",
        description,
        typeName: "string",
        outputTypeName: "string"
      };
    case "plainTime":
      return {
        type: "string",
        format: "time",
        description,
        typeName: "Date | string",
        outputTypeName: "string"
      };
    case "duration":
      return { type: "string", format, description };
    case "url":
      return { type: "string", format: "uri" };
  }
}

function isEncodeTypeEffective(
  type: Scalar,
  encodeData: EncodeData | undefined
) {
  if (!encodeData) {
    return false;
  }
  const datetimeTypes = [
    "plaindate",
    "utcdatetime",
    "offsetdatetime",
    "plaintime"
  ];
  if (
    datetimeTypes.includes(type.name.toLowerCase()) &&
    encodeData.type.name === "string"
  ) {
    return false;
  }
  return true;
}

export function getTypeName(schema: Schema, usage?: SchemaContext[]): string {
  // TODO: Handle more cases
  return getPriorityName(schema, usage) ?? schema.type ?? "any";
}

export function getSerializeTypeName(
  program: Program,
  schema: Schema,
  usage?: SchemaContext[]
): string {
  const typeName = getTypeName(schema, usage);
  const formattedName = (schema.alias ?? typeName).replace(
    "Date | string",
    "string"
  );
  const canSerialize = schema.enum
    ? schema.enum.every((type) => {
        return isSerializable(type) || type.type === "null";
      })
    : isSerializable(schema);
  if (canSerialize) {
    return schema.alias ? typeName : formattedName;
  }
  reportDiagnostic(program, {
    code: "unable-serialized-type",
    format: { type: typeName },
    target: NoTarget
  });
  return "string";
  function isSerializable(type: any) {
    return (
      ["string", "number", "boolean"].includes(type.type) || type.isConstant
    );
  }
}

export function getImportedModelName(
  schema: Schema,
  usage?: SchemaContext[]
): string[] {
  switch (schema.type) {
    case "array": {
      const ret = new Set<string>();
      [(schema as ArraySchema).items]
        .filter((i?: Schema) => !!i && i.type === "object")
        .forEach((i?: Schema) =>
          getImportedModelName(i!, usage).forEach((it) => ret.add(it))
        );
      return [...ret];
    }
    case "object": {
      if (isAnonymousObjectSchema(schema)) {
        const ret = new Set<string>();
        const properties = (schema as ObjectSchema).properties ?? {};
        for (const name in properties) {
          if (!properties[name]) {
            continue;
          }
          getImportedModelName(properties[name]!, usage).forEach((it) =>
            ret.add(it)
          );
        }
        return [...ret];
      }
      return getPriorityName(schema, usage)
        ? [getPriorityName(schema, usage)]
        : [];
    }
    case "dictionary": {
      const ret = new Set<string>();
      [(schema as DictionarySchema).additionalProperties]
        .filter((i?: Schema) => !!i && i.type === "object")
        .forEach((i?: Schema) =>
          getImportedModelName(i!, usage).forEach((it) => ret.add(it))
        );

      return [...ret];
    }
    case "union": {
      const ret = new Set<string>();
      ((schema as Schema).enum ?? [])
        .filter((i?: Schema) => !!i && i.type === "object")
        .forEach((i?: Schema) =>
          getImportedModelName(i!, usage).forEach((it) => ret.add(it))
        );

      return [...ret];
    }
    default:
      return [];
  }
}

function getPriorityName(schema: Schema, usage?: SchemaContext[]): string {
  return usage &&
    usage.includes(SchemaContext.Input) &&
    !usage.includes(SchemaContext.Output)
    ? schema.typeName ?? schema.name
    : schema.outputTypeName ?? schema.typeName ?? schema.name;
}

function getEnumStringDescription(type: any) {
  if (type.name === "string" && type.enum && type.enum.length > 0) {
    return `Possible values: ${type.enum
      .map((e: Schema) => {
        return e.type;
      })
      .join(", ")}`;
  }
  return undefined;
}

function getDecimalDescription(type: any) {
  if (
    (type.format === "decimal" || type.format === "decimal128") &&
    type.type === "number"
  ) {
    return `NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
   `;
  }
  return undefined;
}

export function getFormattedPropertyDoc(
  program: Program,
  type: ModelProperty | Type,
  schemaType: any,
  sperator: string = "\n\n"
) {
  const propertyDoc = getDoc(program, type);
  const enhancedDocFromType =
    getEnumStringDescription(schemaType) ?? getDecimalDescription(schemaType);
  if (propertyDoc && enhancedDocFromType) {
    return `${propertyDoc}${sperator}${enhancedDocFromType}`;
  }
  return propertyDoc ?? enhancedDocFromType;
}

export function getBodyType(
  program: Program,
  route: HttpOperation
): Type | undefined {
  const bodyModel = route.parameters.body?.type;
  if (bodyModel) {
    const metadataInfo = createMetadataInfo(program);
    const payloadType = metadataInfo.getEffectivePayloadType(
      bodyModel,
      Visibility.All
    );
    return payloadType;
  }
  return bodyModel;
}

/**
 * Predict if the default value exists in param, we would follow the rules:
 * 1. If we have specific default literal in param
 * 2. If we take the default api-version value into considerations
 * @param program
 * @param dpgContext
 * @param param The param to predict
 * @returns
 */
export function predictDefaultValue(
  dpgContext: SdkContext,
  param?: ModelProperty
) {
  if (!param) {
    return;
  }
  const program = dpgContext.program;
  const specificDefault = param?.default;
  if (isLiteralValue(specificDefault)) {
    return specificDefault.value;
  }
  const serviceNamespace = getDefaultService(program)?.type;
  if (!serviceNamespace) {
    return;
  }
  const defaultApiVersion = getEnrichedDefaultApiVersion(program, dpgContext);
  if (param && isApiVersion(dpgContext, param) && defaultApiVersion) {
    return defaultApiVersion;
  }
  return;
}

function isLiteralValue(
  type?: Type
): type is StringLiteral | NumericLiteral | BooleanLiteral {
  if (!type) {
    return false;
  }

  if (
    type.kind === "Boolean" ||
    type.kind === "String" ||
    type.kind === "Number"
  ) {
    return type.value !== undefined;
  }

  return false;
}

export function getDefaultService(program: Program): Service | undefined {
  const services = listServices(program);
  if (!services || services.length === 0) {
    reportDiagnostic(program, {
      code: "no-service-defined",
      target: NoTarget
    });
  }
  if (services.length > 1) {
    reportDiagnostic(program, {
      code: "more-than-one-service",
      target: NoTarget
    });
  }
  return services[0];
}

/**
 * Get the default api-version both from versioned and service decorator
 * TODO: remember to switch to TCGC once the fix is done
 * @param program
 * @param dpgContext
 * @returns default api-version value
 */
export function getEnrichedDefaultApiVersion(
  program: Program,
  dpgContext: SdkContext
): string | undefined {
  const serviceNamespace = getDefaultService(program);
  if (!serviceNamespace) {
    return;
  }

  const defaultVersion = getDefaultApiVersion(
    dpgContext,
    serviceNamespace!.type
  );
  if (defaultVersion) {
    return defaultVersion.value;
  }
  return serviceNamespace.version;
}

export function trimUsage(model: any) {
  if (typeof model !== "object") {
    return model;
  }
  const tmpModel = Object.assign({}, model);
  const tmpModelKeys = Object.keys(tmpModel).filter((item) => {
    return item !== "usage";
  });
  const ordered = tmpModelKeys.sort().reduce((obj, key) => {
    (obj as any)[key] = trimUsage(tmpModel[key]);
    return obj;
  }, {});
  return ordered;
}

export function isAzureCoreErrorType(t?: Type): boolean {
  if (
    t?.kind !== "Model" ||
    !["error", "errorresponse", "innererror"].includes(t.name.toLowerCase())
  )
    return false;
  const namespaces = ".Azure.Core.Foundations".split(".");
  while (
    namespaces.length > 0 &&
    (t?.kind === "Model" || t?.kind === "Namespace") &&
    t.namespace?.name === namespaces.pop()
  ) {
    t = t.namespace;
  }
  return namespaces.length == 0;
}

// Check if the schema is an anonymous object
export function isAnonymousObjectSchema(schema: Schema) {
  return schema.name === "" && schema.type === "object";
}

// Check if the type is an anonymous model
export function isAnonymousModelType(type: Type) {
  if (type.kind === "Model") {
    return type.name === "";
  }
  return false;
}

/**
 * Get the inline signiture of the model
 * @param schema object schema detail
 * @param options other optional parameters
 * @returns
 */
export function getModelInlineSigniture(
  schema: ObjectSchema,
  options: { importedModels?: Set<string>; usage?: SchemaContext[] } = {}
) {
  let schemaSignature = `{`;
  for (const propName in schema.properties) {
    const propType = schema.properties[propName]!;
    const propTypeName = getTypeName(propType, options.usage);
    if (!propType || !propTypeName) {
      continue;
    }
    if (options.importedModels) {
      const importNames = getImportedModelName(propType);
      if (importNames) {
        importNames!.forEach(
          options.importedModels.add,
          options.importedModels
        );
      }
    }
    const isOptional = propType.required ? "" : "?";
    schemaSignature += `${propName}${isOptional}: ${propTypeName};`;
  }

  schemaSignature += `}`;
  return schemaSignature;
}
