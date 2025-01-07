// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ArraySchema,
  DictionarySchema,
  NameType,
  ObjectSchema,
  Schema,
  SchemaContext,
  isArraySchema,
  normalizeName
} from "@azure-tools/rlc-common";
import {
  BooleanLiteral,
  Discriminator,
  EncodeData,
  Enum,
  EnumMember,
  Model,
  ModelProperty,
  NoTarget,
  NumericLiteral,
  Program,
  Scalar,
  Service,
  StringLiteral,
  Type,
  Union,
  UnionVariant,
  getDiscriminator,
  getDoc,
  getEffectiveModelType,
  getEncode,
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
  isArrayModelType,
  isNeverType,
  isNullType,
  isNumericType,
  isRecordModelType,
  isSecret,
  isStringType,
  isTemplateDeclaration,
  isType,
  isUnknownType,
  listServices
} from "@typespec/compiler";
import { GetSchemaOptions, SdkContext } from "./interfaces.js";
import {
  HttpOperation,
  HttpOperationParameters,
  getHeaderFieldName,
  getPathParamName,
  getQueryParamName,
  isStatusCode
} from "@typespec/http";
import {
  KnownMediaType,
  hasMediaType,
  isMediaTypeMultipartFormData
} from "./mediaTypes.js";
import {
  getDefaultApiVersion,
  getWireName,
  isApiVersion
} from "@azure-tools/typespec-client-generator-core";
import {
  getPagedResult,
  getUnionAsEnum
} from "@azure-tools/typespec-azure-core";

import { getModelNamespaceName } from "./namespaceUtils.js";
import { reportDiagnostic } from "../lib.js";

export const BINARY_TYPE_UNION =
  "string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream";

export const BINARY_AND_FILE_TYPE_UNION = `${BINARY_TYPE_UNION} | File`;

export function getBinaryType(usage: SchemaContext[]) {
  return usage.includes(SchemaContext.Output)
    ? "Uint8Array"
    : BINARY_TYPE_UNION;
}

export function isByteOrByteUnion(dpgContext: SdkContext, type: Type) {
  const schema = getSchemaForType(dpgContext, type);
  return isBytesType(schema) || isBytesUnion(schema);
}

function isBytesType(schema: any) {
  return (
    schema.type === "string" &&
    (schema.format === "bytes" || schema.format === "binary")
  );
}

function isBytesUnion(schema: any) {
  if (!Array.isArray(schema.enum)) {
    return false;
  }
  for (const ele of schema.enum) {
    if (isBytesType(ele)) {
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
  if (isBytesType(schema)) {
    refineByteType(schema);
  } else if (isBytesUnion(schema)) {
    const inputType: string[] = [];
    for (const item of schema.enum) {
      if (isBytesType(item)) {
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
  options?: GetSchemaOptions
) {
  const program = dpgContext.program;
  const { usage } = options ?? {};
  const type = getEffectiveModelFromType(dpgContext, typeInput);

  const builtinType = getSchemaForLiteral(type);
  if (builtinType !== undefined) {
    // add in description elements for types derived from primitive types (SecureString, etc.)
    const doc = getDoc(program, type);
    if (doc) {
      builtinType.description = doc;
    }
    return builtinType;
  }

  if (type.kind === "ModelProperty") {
    return getSchemaForType(dpgContext, type.type, options);
  }

  if (type.kind === "Model") {
    const schema = getSchemaForModel(dpgContext, type, options) as any;
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
          usage: [SchemaContext.Input],
          multipart:
            options?.isRequestBody &&
            isMediaTypeMultipartFormData(options?.mediaTypes ?? [])
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
    return getSchemaForUnion(dpgContext, type, options);
  } else if (type.kind === "UnionVariant") {
    return getSchemaForUnionVariant(dpgContext, type, options);
  } else if (type.kind === "Enum") {
    return getSchemaForEnum(dpgContext, type);
  } else if (type.kind === "Scalar") {
    return getSchemaForScalar(dpgContext, type, options);
  } else if (type.kind === "EnumMember") {
    return getSchemaForEnumMember(program, type);
  }
  if (isUnknownType(type)) {
    const returnType: any = { name: "unknown", type: "unknown" };
    if (usage && usage.includes(SchemaContext.Output)) {
      returnType.outputTypeName = "any";
      returnType.typeName = "unknown";
    }
    return returnType;
  }
  if (isNeverType(type)) {
    return { name: "never", type: "never" };
  }
  if (isNullType(type)) {
    return { name: "null", type: "null" };
  }
  reportDiagnostic(program, {
    code: "invalid-schema",
    format: {
      type: type.kind,
      property: options?.relevantProperty?.name ?? ""
    },
    target: type
  });
  return undefined;
}
export function getEffectiveModelFromType(
  context: SdkContext,
  type: Type
): Type {
  /**
   * If type is an anonymous model, tries to find a named model that has the same
   * set of properties when non-schema properties are excluded.
   */
  if (type.kind === "Model" && type.name === "") {
    const effective = getEffectiveModelType(context.program, type, (property) =>
      isSchemaProperty(context.program, property)
    );
    if (effective.name) {
      return effective;
    }
  }
  return type;
}
export function includeDerivedModel(
  model: Model,
  needRef: boolean = false
): boolean {
  return (
    !needRef &&
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
  encoding: string | undefined,
  encodeAsFormat: string | undefined
): string | undefined {
  switch (format) {
    case undefined:
      return encodeAsFormat ?? encoding ?? format;
    case "date-time":
      return encoding;
    case "duration":
    default:
      return encodeAsFormat ?? encoding ?? format;
  }
}

function getSchemaForScalar(
  dpgContext: SdkContext,
  scalar: Scalar,
  options?: GetSchemaOptions
) {
  let result = {} as any;
  const isStd = dpgContext.program.checker.isStdType(scalar);
  const {
    relevantProperty,
    isRequestBody,
    isParentRequestBody,
    mediaTypes: contentTypes
  } = options ?? {};
  if (isStd) {
    result = getSchemaForStdScalar(dpgContext.program, scalar, {
      relevantProperty
    });
  } else if (scalar.baseScalar) {
    result = getSchemaForScalar(dpgContext, scalar.baseScalar);
  }

  if (isBinaryAsRequestBody()) {
    // bytes in the body of application/octet-stream is the raw binary payload/file
    result.typeName = BINARY_TYPE_UNION;
    result.outputTypeName = "Uint8Array";
    return result;
  } else if (isFormDataBytesInRequestBody()) {
    // bytes inside a multipart part (for now) is assumed to be file
    result.typeName = BINARY_AND_FILE_TYPE_UNION;
    result.outputTypeName = "Uint8Array";
    return result;
  } else {
    // for other cases we would trust the @encode decorator if not present we would treat it as string
    const withDecorators = applyEncoding(
      dpgContext,
      scalar,
      result
        ? applyIntrinsicDecorators(dpgContext.program, scalar, result)
        : undefined
    );
    if (
      withDecorators.type === "string" &&
      withDecorators.format === "binary"
    ) {
      withDecorators.typeName = BINARY_TYPE_UNION;
      withDecorators.outputTypeName = "Uint8Array";
    }
    return withDecorators;
  }

  function isBinaryAsRequestBody() {
    return (
      hasMediaType(KnownMediaType.Binary, contentTypes) &&
      isRequestBody &&
      isBytesType(result)
    );
  }

  function isFormDataBytesInRequestBody() {
    return (
      hasMediaType(KnownMediaType.MultipartFormData, contentTypes) &&
      isParentRequestBody &&
      isBytesType(result)
    );
  }
}

function getSchemaForUnion(
  dpgContext: SdkContext,
  union: Union,
  options?: GetSchemaOptions
) {
  const [asEnum, _] = getUnionAsEnum(union);
  const variants = Array.from(union.variants.values());

  const values = [];
  let namedUnionMember = false;

  if (asEnum?.open && asEnum.members.size > 0) {
    for (const [_, member] of asEnum.members.entries()) {
      const memberType = getSchemaForType(dpgContext, member.type, {
        ...options,
        needRef: false
      });
      values.push(memberType);
      if (memberType.name) {
        namedUnionMember = true;
      }
    }
  } else {
    for (const variant of variants) {
      // We already know it's not a model type
      const variantType = getSchemaForType(dpgContext, variant.type, {
        ...options,
        needRef: false
      });
      values.push(variantType);
      if (variantType.typeName) {
        namedUnionMember = true;
      }
    }
  }
  const schema: any = {};
  if (values.length > 0) {
    schema.enum = values;
    const unionAlias =
      asEnum?.open && asEnum?.kind && !namedUnionMember
        ? asEnum.kind + (asEnum.nullable ? " | null" : "")
        : values
            .map(
              (item) => `${getTypeName(item, [SchemaContext.Input]) ?? item}`
            )
            .join(" | ");
    const outputUnionAlias =
      asEnum?.open && asEnum?.kind && !namedUnionMember
        ? asEnum.kind + (asEnum.nullable ? " | null" : "")
        : values
            .map(
              (item) => `${getTypeName(item, [SchemaContext.Output]) ?? item}`
            )
            .join(" | ");
    if (!union.expression) {
      const unionName = union.name
        ? normalizeName(union.name, NameType.Interface)
        : undefined;
      schema.name = unionName;
      schema.type = "object";
      schema.typeName = unionName;
      schema.outputTypeName = unionName + "Output";
      schema.alias = unionAlias;
      schema.outputAlias = outputUnionAlias;
    } else if (union.expression && !union.name) {
      schema.type = "union";
      schema.typeName = unionAlias;
      schema.outputTypeName = outputUnionAlias;
    } else {
      schema.type = "union";
      schema.typeName = union.name ?? unionAlias;
      schema.outputTypeName = union.name
        ? union.name + "Output"
        : outputUnionAlias;
    }
  }

  return schema;
}

function getSchemaForUnionVariant(
  dpgContext: SdkContext,
  variant: UnionVariant,
  options?: GetSchemaOptions
): Schema {
  return getSchemaForType(dpgContext, variant.type, options);
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
  } else if (type.kind === "UnionVariant") {
    // A union variant where the type is an OasString
    return isOasString(type.type);
  }
  return false;
}

function isStringLiteral(type: Type): boolean {
  return (
    type.kind === "String" ||
    (type.kind === "Union" && type.options.every((o) => o.kind === "String")) ||
    (type.kind === "EnumMember" &&
      typeof (type.value ?? type.name) === "string") ||
    (type.kind === "UnionVariant" && type.type.kind === "String")
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
    case "UnionVariant":
      return getStringValues(type.type);
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

function getSchemaForModel(
  dpgContext: SdkContext,
  model: Model,
  options?: GetSchemaOptions
) {
  const {
    usage,
    needRef,
    isRequestBody,
    mediaTypes: contentTypes
  } = options ?? {};
  if (isArrayModelType(dpgContext.program, model)) {
    return getSchemaForArrayModel(dpgContext, model, options);
  }

  const program = dpgContext.program;
  const overridedModelName =
    getFriendlyName(program, model) ?? getWireName(dpgContext, model);
  const fullNamespaceName =
    getModelNamespaceName(dpgContext, model.namespace!)
      .map((nsName) => {
        return normalizeName(nsName, NameType.Interface);
      })
      .join("") + model.name;
  let name = model.name;
  if (
    !overridedModelName &&
    model.templateMapper &&
    model.templateMapper.args &&
    model.templateMapper.args.length > 0 &&
    getPagedResult(program, model)
  ) {
    const templateTypes = model.templateMapper.args.filter((it) =>
      isType(it)
    ) as Type[];
    name =
      templateTypes
        .map((it: Type) => {
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

  const isMultipartBody = isMediaTypeMultipartFormData(contentTypes ?? []);

  const isCoreModel = isAzureCoreErrorType(program, model);
  const modelSchema: ObjectSchema = {
    name: isCoreModel
      ? name
      : overridedModelName !== name
        ? overridedModelName
        : dpgContext.rlcOptions?.enableModelNamespace
          ? fullNamespaceName
          : name,
    type: "object",
    isMultipartBody,
    description: getDoc(program, model) ?? "",
    fromCore: isCoreModel
  };
  // normalized the output name
  modelSchema.name = normalizeName(
    modelSchema.name,
    NameType.Interface,
    true /** shouldGuard */
  );

  if (model.name === "Record" && isRecordModelType(program, model)) {
    return getSchemaForRecordModel(dpgContext, model, { usage });
  }
  modelSchema.typeName = modelSchema.name;
  if (usage && usage.includes(SchemaContext.Output)) {
    modelSchema.outputTypeName = modelSchema.name + "Output";
  }

  modelSchema.properties = {};

  // getSchemaOrRef on all children to push them into components.schemas
  const discriminator = getDiscriminator(program, model);
  // should respect needRef for derived models unless there's a discriminator in base model
  const derivedModels = model.derivedModels.filter((dm) => {
    return includeDerivedModel(dm, discriminator ? false : needRef);
  });
  if (derivedModels.length > 0) {
    modelSchema.children = {
      all: [],
      immediate: []
    };
  }
  for (const child of derivedModels) {
    const childSchema = getSchemaForType(dpgContext, child, {
      usage,
      needRef: true
    });
    for (const [name, prop] of child.properties) {
      if (name === discriminator?.propertyName) {
        const propSchema = getSchemaForType(dpgContext, prop.type, {
          usage,
          needRef: !isAnonymousModelType(prop.type),
          relevantProperty: prop
        });
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
      all: [getSchemaForRecordModel(dpgContext, model, { usage })],
      immediate: [getSchemaForRecordModel(dpgContext, model, { usage })]
    };
  }
  for (const [propName, prop] of model.properties) {
    const restApiName = getWireName(dpgContext, prop);
    const name = `"${restApiName ?? propName}"`;
    if (!isSchemaProperty(program, prop)) {
      continue;
    }

    const propSchema = getSchemaForType(dpgContext, prop.type, {
      usage,
      needRef: isAnonymousModelType(prop.type) ? false : true,
      relevantProperty: prop,
      isParentRequestBody: isRequestBody,
      isRequestBody: false,
      mediaTypes: contentTypes
    });

    if (propSchema === undefined) {
      continue;
    }
    if (!prop.optional) {
      propSchema.required = true;
    }
    if (name === '"propBoolean"') {
      prop;
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
      modelSchema.discriminator = {
        ...modelSchema.discriminator,
        ...{
          type: propSchema.typeName ?? propSchema.type,
          typeName: propSchema.typeName,
          outputTypeName: propSchema.outputTypeName
        }
      };
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
    if (modelSchema.parents === undefined) {
      modelSchema.parents = {
        all: [],
        immediate: []
      };
    }
    modelSchema.parents.all?.push(
      getSchemaForType(dpgContext, model.baseModel, {
        usage,
        needRef: true
      })
    );
    modelSchema.parents.immediate?.push(
      getSchemaForType(dpgContext, model.baseModel, {
        usage,
        needRef: true
      })
    );
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
  const memberValues = Array.from(e.members.values());
  if (memberValues.length === 0) {
    return {};
  }
  const type = enumMemberType(memberValues[0]!);
  for (const option of memberValues) {
    if (type !== enumMemberType(option)) {
      reportDiagnostic(dpgContext.program, {
        code: "union-unsupported",
        target: e
      });
      continue;
    }

    values.push(getSchemaForType(dpgContext, option));
  }

  const schema: any = {
    type: "object",
    name: e.name,
    typeName: normalizeName(e.name, NameType.Interface),
    outputTypeName: normalizeName(e.name, NameType.Interface) + "Output",
    description: getDoc(dpgContext.program, e),
    memberType: type
  };

  if (values.length > 0) {
    schema.enum = values;
    const unionAlias = values
      .map((item) => `${getTypeName(item, [SchemaContext.Input]) ?? item}`)
      .join(" | ");
    schema.alias = unionAlias;
    schema.outputAlias = unionAlias;
  }
  return schema;
}

function enumMemberType(member: EnumMember) {
  const memberValue = member.value;
  if (typeof memberValue === "number") {
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
  options?: GetSchemaOptions
) {
  const { program } = dpgContext;
  const { indexer } = type;
  const {
    usage,
    isParentRequestBody,
    mediaTypes: contentTypes
  } = options ?? {};
  let schema: any = {};
  if (!indexer) {
    return schema;
  }
  if (isArrayModelType(program, type)) {
    schema = {
      type: "array",
      items: getSchemaForType(dpgContext, indexer.value!, {
        usage,
        isRequestBody: false,
        mediaTypes: contentTypes,
        // special handling for array in formdata
        isParentRequestBody: hasMediaType(
          KnownMediaType.MultipartFormData,
          contentTypes
        )
          ? isParentRequestBody
          : false,
        needRef: !isAnonymousModelType(indexer.value!)
      }),
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
          if (usage && usage.includes(SchemaContext.Output)) {
            schema.outputTypeName = `(${schema.items.outputTypeName})[]`;
          }
        } else if (schema.items.type === "union") {
          schema.typeName = `(${schema.items.typeName})[]`;
          if (usage && usage.includes(SchemaContext.Output)) {
            schema.outputTypeName = `(${schema.items.outputTypeName})[]`;
          }
        } else if (
          schema.items.typeName.includes(BINARY_TYPE_UNION) &&
          schema.items.type === "string"
        ) {
          schema.typeName = `(${schema.items.typeName})[]`;
          if (usage && usage.includes(SchemaContext.Output)) {
            schema.outputTypeName = `(${schema.items.outputTypeName})[]`;
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
  options?: GetSchemaOptions
) {
  const { program } = dpgContext;
  const { indexer } = type;
  const { usage } = options ?? {};
  let schema: any = {};
  if (!indexer) {
    return schema;
  }
  if (isRecordModelType(program, type)) {
    const valueType = getSchemaForType(dpgContext, indexer?.value, {
      usage,
      needRef: !isAnonymousModelType(indexer.value)
    });
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

export function isObjectOrDictType(schema: Schema) {
  return (
    (schema.type === "object" &&
      (schema as ObjectSchema).properties !== undefined) ||
    schema.type === "dictionary"
  );
}

export function isArrayType(schema: Schema) {
  return schema.type === "array";
}

function getSchemaForStdScalar(
  program: Program,
  type: Scalar,
  options?: GetSchemaOptions
) {
  const { relevantProperty } = options ?? {};
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
      return { type: "string", format: "bytes", description };
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
        target: relevantProperty ?? NoTarget
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
        target: relevantProperty ?? NoTarget
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
          typeName: BINARY_TYPE_UNION,
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
        typeName: "string",
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
        typeName: "string",
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

export function getImportedModelName(
  schema: Schema,
  usage?: SchemaContext[]
): string[] {
  switch (schema.type) {
    case "array": {
      const ret = new Set<string>();
      [(schema as ArraySchema).items]
        .filter((i?: Schema) => !!i)
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
        .filter((i?: Schema) => !!i)
        .forEach((i?: Schema) =>
          getImportedModelName(i!, usage).forEach((it) => ret.add(it))
        );

      return [...ret];
    }
    case "union": {
      const ret = new Set<string>();
      ((schema as Schema).enum ?? [])
        .filter((i?: Schema) => !!i)
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
    ? (schema.typeName ?? schema.name)
    : (schema.outputTypeName ?? schema.typeName ?? schema.name);
}

function getEnumStringDescription(type: any) {
  if (
    (type.name === "string" ||
      type.alias === "string" ||
      type.name === "number" ||
      type.alias === "number" ||
      type.name === "boolean" ||
      type.alias === "boolean") &&
    type.enum &&
    type.enum.length > 0
  ) {
    return `Possible values: ${type.enum
      .map((e: Schema) => {
        return e.type;
      })
      .join(", ")}`;
  }
  return undefined;
}

function getBinaryDescription(type: any) {
  if (type?.typeName?.includes(BINARY_TYPE_UNION)) {
    return `Value may contain any sequence of octets`;
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
    getEnumStringDescription(schemaType) ??
    getDecimalDescription(schemaType) ??
    getBinaryDescription(schemaType);
  if (propertyDoc && enhancedDocFromType) {
    return `${propertyDoc}${sperator}${enhancedDocFromType}`;
  }
  return propertyDoc ?? enhancedDocFromType;
}

export function getBodyType(route: HttpOperation): Type | undefined {
  const bodyModel = route.parameters.body?.type;
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
  const defaultApiVersion = getDefaultApiVersionString(dpgContext);
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
 * Return the default api version from the program; undefined if no default
 */
export function getDefaultApiVersionString(
  dpgContext: SdkContext
): string | undefined {
  const program = dpgContext.program;
  return getDefaultService(program)
    ? getDefaultApiVersion(dpgContext, getDefaultService(program)!.type)?.value
    : undefined;
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

export function buildCoreTypeInfo(program: Program, t?: Type) {
  return isAzureCoreErrorType(program, t)
    ? "ErrorType"
    : isAzureCoreLroType(t)
      ? "LroType"
      : undefined;
}

export function isAzureCoreErrorType(program: Program, t?: Type): boolean {
  if (!t || t.kind !== "Model") {
    return false;
  }
  const effective = getEffectiveSchemaType(program, t);
  if (
    !["error", "errorresponse", "innererror"].includes(
      effective.name.toLowerCase()
    )
  ) {
    return false;
  }
  return isAzureCoreFoundationsNamespace(effective);
}

// Check if the type in the Azure.Core.Foundations has an LRO type in core
export function isAzureCoreLroType(t?: Type): boolean {
  if (
    !(
      ((t?.kind === "Enum" || t?.kind === "Union") &&
        ["operationstate"].includes((t.name ?? "").toLowerCase())) ||
      (t?.kind === "Model" &&
        ["resourceoperationstatus", "operationstatus"].includes(
          t.name.toLowerCase()
        ))
    )
  ) {
    return false;
  }
  return (
    isAzureCoreFoundationsNamespace(t) ||
    isAzureCoreFoundationsNamespace(t, true)
  );
}

function isAzureCoreFoundationsNamespace(
  t?: Type,
  skipFoundation: boolean = false
): boolean {
  const namespaces = (
    skipFoundation ? ".Azure.Core" : ".Azure.Core.Foundations"
  ).split(".");
  while (
    namespaces.length > 0 &&
    (t?.kind === "Model" ||
      t?.kind === "Enum" ||
      t?.kind === "Union" ||
      t?.kind === "Namespace") &&
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
  options: {
    importedModels?: Set<string>;
    usage?: SchemaContext[];
    multipart?: boolean;
  } = {}
) {
  if (options.multipart) {
    return getMultipartInlineSignature(
      schema,
      options.importedModels,
      options.usage
    );
  }

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

function getMultipartInlineSignature(
  schema: ObjectSchema,
  importedModels?: Set<string>,
  usage?: SchemaContext[]
): string {
  const types = Object.entries(schema.properties ?? {})
    .map(([propertyName, property]) => {
      let schema: Schema;

      // Flatten arrays for file uploads
      if (
        isArraySchema(property) &&
        property.items &&
        getTypeName(property.items, usage).includes(BINARY_AND_FILE_TYPE_UNION)
      ) {
        schema = property.items;
      } else {
        schema = property;
      }

      const typeName = getTypeName(schema, usage);
      if (!typeName) {
        return undefined;
      }

      const importNames = getImportedModelName(schema);
      if (importedModels && importNames) {
        importNames.forEach(importedModels.add.bind(importedModels));
      }

      if (typeName.includes("File")) {
        return `{ name: ${propertyName}, body: ${typeName}, filename?: string, contentType?: string }`;
      } else {
        return `{ name: ${propertyName}, body: ${typeName} }`;
      }
    })
    .filter(Boolean)
    .join(" | ");

  return `FormData | Array<${types}>`;
}

/**
 * A "schema property" here is a property that is emitted to OpenAPI schema.
 *
 * Headers, parameters, status codes are not schema properties even they are
 * represented as properties in typespec.
 */
export function isSchemaProperty(
  program: Program,
  property: ModelProperty
): boolean {
  const headerInfo = getHeaderFieldName(program, property);
  const queryInfo = getQueryParamName(program, property);
  const pathInfo = getPathParamName(program, property);
  const statusCodeInfo = isStatusCode(program, property);
  const isNonVisibility = getVisibility(program, property)?.includes("none");
  return !(
    headerInfo ||
    queryInfo ||
    pathInfo ||
    statusCodeInfo ||
    isNonVisibility
  );
}

export function getEffectiveSchemaType(
  program: Program,
  type: Model | Union
): Model {
  // If type is an anonymous model, tries to find a named model that has the same properties
  let effective: Model | undefined = undefined;
  if (type.kind === "Union") {
    const nonNullOptions = [...type.variants.values()]
      .map((x) => x.type)
      .filter((t) => !isNullType(t));
    if (
      nonNullOptions.length === 1 &&
      nonNullOptions[0]?.kind === "Model" &&
      nonNullOptions[0]?.name === ""
    ) {
      effective = getEffectiveModelType(program, nonNullOptions[0]);
    }
    return type as any;
  } else if (type.name === "") {
    effective = getEffectiveModelType(program, type, (property) =>
      isSchemaProperty(program, property)
    );
  }

  if (effective?.name) {
    return effective;
  }
  return type as Model;
}

export function isBodyRequired(parameter: HttpOperationParameters) {
  return parameter.body?.type && parameter.body?.property?.optional !== true
    ? true
    : false;
}
