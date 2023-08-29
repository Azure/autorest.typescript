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
  EncodeData
} from "@typespec/compiler";
import { reportDiagnostic } from "../lib.js";
import {
  DictionarySchema,
  NameType,
  normalizeName,
  ObjectSchema,
  Schema,
  SchemaContext
} from "@azure-tools/rlc-common";
import { getResourceOperation } from "@typespec/rest";
import {
  getHeaderFieldName,
  getPathParamName,
  getQueryParamName,
  isStatusCode,
  HttpOperation
} from "@typespec/http";
import { getPagedResult, isFixed } from "@azure-tools/typespec-azure-core";
import { extractPagedMetadataNested } from "./operationUtil.js";
import {
  getDefaultApiVersion,
  isApiVersion
} from "@azure-tools/typespec-client-generator-core";
import { SdkContext } from "./interfaces.js";

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
  return schema.type === "string" && schema.format === "byte";
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

  const builtinType = mapTypeSpecTypeToTypeScript(dpgContext, type, usage);
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
    if (usage && usage.includes(SchemaContext.Output)) {
      if (!schema.name || schema.name === "") {
        //TODO: HANDLE ANONYMOUS
        schema.outputTypeName =
          schema.type === "object" ? "Record<string, any>" : "any";
        schema.typeName =
          schema.type === "object" ? "Record<string, unknown>" : "unknown";
        schema.type = "unknown";
      } else {
        schema.outputTypeName = `${schema.name}Output`;
        schema.typeName = `${schema.name}`;
      }
    }
    schema.usage = usage;
    return schema;
  } else if (type.kind === "Union") {
    return getSchemaForUnion(dpgContext, type, usage);
  } else if (type.kind === "UnionVariant") {
    return getSchemaForUnionVariant(dpgContext, type, usage);
  } else if (type.kind === "Enum") {
    return getSchemaForEnum(program, type);
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

function getSchemaForScalar(
  dpgContext: SdkContext,
  scalar: Scalar,
  relevantProperty?: ModelProperty
) {
  const program = dpgContext.program;
  const encodeData = getEncode(program, scalar);
  let result: any = encodeData
    ? getSchemaForScalar(dpgContext, encodeData.type)
    : getSchemaForStdScalar(program, scalar, relevantProperty);
  if (!result && scalar.baseScalar) {
    result = getSchemaForScalar(dpgContext, scalar.baseScalar);
  }
  return applyIntrinsicDecorators(program, scalar, result);
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
  const program = dpgContext.program;
  const overridedModelName =
    getFriendlyName(program, model) ?? getProjectedName(program, model, "json");
  let name = model.name;
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
  let modelSchema: ObjectSchema = {
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

  modelSchema.typeName = modelSchema.name;

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
          true,
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
      required: true,
      description: `Discriminator property for ${model.name}.`
    };

    modelSchema.isPolyParent = true;
  }

  // applyExternalDocs(model, modelSchema);
  if (needRef) {
    return modelSchema;
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
      true,
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
    // Use the description from ModelProperty not devired from Model Type
    propSchema.description = propertyDescription;
    modelSchema.properties[name] = propSchema;
    // if this property is a discriminator property, remove it to keep autorest validation happy
    if (model.baseModel) {
      const { propertyName } = getDiscriminator(program, model.baseModel) || {};
      if (propertyName && name === `"${propertyName}"`) {
        continue;
      }
    }

    // Apply decorators on the property to the type's schema
    const newPropSchema = applyIntrinsicDecorators(
      program,

      prop,
      propSchema
    );
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

  // Special case: if a model type extends a single *templated* base type and
  // has no properties of its own, absorb the definition of the base model
  // into this schema definition.  The assumption here is that any model type
  // defined like this is just meant to rename the underlying instance of a
  // templated type.
  if (
    model.baseModel &&
    model.baseModel.templateMapper &&
    model.baseModel.templateMapper.args &&
    model.baseModel.templateMapper.args.length > 0 &&
    modelSchema.properties &&
    Object.keys(modelSchema.properties).length === 0
  ) {
    // Take the base model schema but carry across the documentation property
    // that we set before
    const baseSchema = getSchemaForType(dpgContext, model.baseModel, usage);
    modelSchema = {
      ...baseSchema,
      description: modelSchema.description
    };
  } else if (model.baseModel) {
    modelSchema.parents = {
      all: [getSchemaForType(dpgContext, model.baseModel, usage, true)],
      immediate: [getSchemaForType(dpgContext, model.baseModel, usage, true)]
    };
  }
  return modelSchema;
}
// Map an typespec type to an OA schema. Returns undefined when the resulting
// OA schema is just a regular object schema.
function mapTypeSpecTypeToTypeScript(
  dpgContext: SdkContext,
  type: Type,
  usage?: SchemaContext[]
): any {
  switch (type.kind) {
    case "Number":
      return { type: `${type.value}` };
    case "String":
      return { type: `"${type.value}"` };
    case "Boolean":
      return { type: `${type.value}` };
    case "Model":
      return mapTypeSpecStdTypeToTypeScript(dpgContext, type, usage);
  }
  if (type.kind === undefined) {
    if (typeof type === "string") {
      return { type: `"${type}"` };
    } else if (typeof type === "number" || typeof type === "boolean") {
      return { type: `${type}` };
    }
  }
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

  if (isString && !target.documentation && docStr) {
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
  return { type, description: getDoc(program, e) };
}

function getSchemaForEnum(program: Program, e: Enum) {
  const values = [];
  const type = enumMemberType(e.members.values().next().value);
  for (const option of e.members.values()) {
    if (type !== enumMemberType(option)) {
      reportDiagnostic(program, { code: "union-unsupported", target: e });
      continue;
    }

    values.push(option.value ?? option.name);
  }

  const schema: any = { type, description: getDoc(program, e) };
  if (values.length > 0) {
    schema.enum = values;
    schema.type =
      type === "string"
        ? values.map((item) => `"${item}"`).join("|")
        : values.map((item) => `${item}`).join("|");
    if (!isFixed(program, e)) {
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
function mapTypeSpecStdTypeToTypeScript(
  dpgContext: SdkContext,
  type: Model,
  usage?: SchemaContext[]
): any | undefined {
  const program = dpgContext.program;
  const indexer = (type as Model).indexer;
  if (indexer !== undefined) {
    if (!isNeverType(indexer.key)) {
      const name = indexer.key.name;
      let schema: any = {};
      if (name === "string") {
        const valueType = getSchemaForType(
          dpgContext,
          indexer.value!,
          usage,
          true
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
      } else if (name === "integer") {
        schema = {
          type: "array",
          items: getSchemaForType(dpgContext, indexer.value!, usage, true),
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
      }

      schema.usage = usage;
      return schema;
    }
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
  if (relevantProperty) {
    const encodeData = getEncode(program, relevantProperty);
    if (encodeData && isEncodeTypeEffective(type, encodeData)) {
      type = encodeData.type;
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
        format: "int64"
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
        format: "double"
      });
    case "float32":
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "float"
      });
    case "float":
      return applyIntrinsicDecorators(program, type, {
        type: "number",
        format: "float"
      });
    case "string":
      return applyIntrinsicDecorators(program, type, {
        type: "string"
      });
    case "boolean":
      return { type: "boolean", description };
    case "plainDate":
      return {
        type: "string",
        format: "date",
        description,
        typeName: "Date | string",
        outputTypeName: "string"
      };
    case "utcDateTime":
      return {
        type: "string",
        format: "date-time",
        description,
        typeName: "Date | string",
        outputTypeName: "string"
      };
    case "offsetDateTime":
      return {
        type: "string",
        format: "date-time",
        description,
        typeName: "Date | string",
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
      return { type: "string", format: "duration", description };
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

export function getImportedModelName(schema: Schema): string[] | undefined {
  switch (schema.type) {
    case "array":
      return [(schema as any).items]
        .filter((i: Schema) => i.type === "object")
        .map((i: Schema) => getPriorityName(i) ?? "");
    case "object":
      return getPriorityName(schema) ? [getPriorityName(schema)] : undefined;
    case "dictionary": {
      const importName = getDictionaryValueName(schema as DictionarySchema);
      return importName ? [importName] : undefined;
    }
    case "union":
      return (schema as any).enum
        .filter((i: Schema) => i.type === "object")
        .map((i: Schema) => getPriorityName(i) ?? "");
    default:
      return;
  }
}

function getPriorityName(schema: Schema, usage?: SchemaContext[]): string {
  return usage &&
    usage.includes(SchemaContext.Input) &&
    !usage.includes(SchemaContext.Output)
    ? schema.typeName ?? schema.name
    : schema.outputTypeName ?? schema.typeName ?? schema.name;
}
function getDictionaryValueName(schema: DictionarySchema): string | undefined {
  return schema.outputValueTypeName ?? schema.valueTypeName ?? undefined;
}
function getEnumStringDescription(type: any) {
  if (type.name === "string" && type.enum && type.enum.length > 0) {
    return `Possible values: ${type.enum.join(", ")}`;
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
  const enhancedDocFromType = getEnumStringDescription(schemaType);
  if (propertyDoc && enhancedDocFromType) {
    return `${propertyDoc}${sperator}${enhancedDocFromType}`;
  }
  return propertyDoc ?? enhancedDocFromType;
}

export function getBodyType(
  program: Program,
  route: HttpOperation
): Type | undefined {
  let bodyModel = route.parameters.bodyType;
  if (bodyModel && bodyModel.kind === "Model" && route.operation) {
    const resourceType = getResourceOperation(
      program,
      route.operation
    )?.resourceType;
    if (resourceType && route.responses && route.responses.length > 0) {
      const resp = route.responses[0];
      if (resp && resp.responses && resp.responses.length > 0) {
        const responseBody = resp.responses[0]?.body;
        if (responseBody) {
          const bodyTypeInResponse = getEffectiveModelFromType(
            program,

            responseBody.type
          );
          // response body type is reosurce type, and request body type (if templated) contains resource type
          if (
            bodyTypeInResponse === resourceType &&
            bodyModel.templateMapper &&
            bodyModel.templateMapper.args &&
            bodyModel.templateMapper.args.some((it) => {
              return it.kind === "Model" || it.kind === "Union"
                ? it === bodyTypeInResponse
                : false;
            })
          ) {
            bodyModel = resourceType;
          }
        }
      }
    }
    if (resourceType && bodyModel.name === "") {
      bodyModel = resourceType;
    }
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
