// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  EnumMemberType,
  EnumType,
  getDoc,
  getFormat,
  getFriendlyName,
  getIntrinsicModelName,
  getKnownValues,
  getMaxLength,
  getMaxValue,
  getMinLength,
  getMinValue,
  getPattern,
  getProperty,
  getPropertyType,
  getSummary,
  getVisibility,
  isIntrinsic,
  isNeverType,
  isNumericType,
  isSecret,
  isStringType,
  isTemplateDeclaration,
  ModelType,
  ModelTypeProperty,
  Program,
  Type,
  UnionType
} from "@cadl-lang/compiler";
import { Discriminator, getDiscriminator } from "@cadl-lang/rest";
import { reportDiagnostic } from "./lib.js";
import {
  NameType,
  normalizeName,
  ObjectSchema,
  Schema,
  SchemaContext
} from "@azure-tools/rlc-codegen";
import {
  getHeaderFieldName,
  getPathParamName,
  getQueryParamName,
  isStatusCode
} from "@cadl-lang/rest/http";

export function getBinaryType(usage: SchemaContext[]) {
  return usage.includes(SchemaContext.Output)
    ? "Uint8Array"
    : "string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream";
}

export function getSchemaForType(
  program: Program,
  typeInput: Type,
  usage?: SchemaContext[],
  needRef?: boolean
) {
  const type = getEffectiveModelType(typeInput);
  const builtinType = mapCadlTypeToTypeScript(program, type, usage);
  if (builtinType !== undefined) {
    // add in description elements for types derived from primitive types (SecureString, etc.)
    const doc = getDoc(program, type);
    if (doc) {
      builtinType.description = doc;
    }
    return builtinType;
  }
  if (type.kind === "Model") {
    const schema = getSchemaForModel(program, type, usage, needRef) as any;
    if (usage && usage.includes(SchemaContext.Output)) {
      schema.outputTypeName = `${schema.name}Output`;
      schema.typeName = `${schema.name}`;
    }
    schema.usage = usage;
    return schema;
  } else if (type.kind === "Union") {
    return getSchemaForUnion(program, type, usage);
  } else if (type.kind === "Enum") {
    return getSchemaForEnum(program, type);
  }
  function getEffectiveModelType(type: Type) {
    if (type.kind === "Model") {
      const effective = program.checker.getEffectiveModelType(
        type,
        isSchemaProperty
      );
      if (effective.name) {
        return effective;
      }
    }
    function isSchemaProperty(property: ModelTypeProperty) {
      const headerInfo = getHeaderFieldName(program, property);
      const queryInfo = getQueryParamName(program, property);
      const pathInfo = getPathParamName(program, property);
      const statusCodeInfo = isStatusCode(program, property);
      return !(headerInfo || queryInfo || pathInfo || statusCodeInfo);
    }
    return type;
  }
  reportDiagnostic(program, {
    code: "invalid-schema",
    format: { type: type.kind },
    target: type
  });
  return undefined;
}
export function includeDerivedModel(model: ModelType): boolean {
  return (
    !isTemplateDeclaration(model) &&
    (model.templateArguments === undefined ||
      model.templateArguments?.length === 0 ||
      model.derivedModels.length > 0)
  );
}

function isNullType(program: Program, type: Type): boolean {
  return (
    isIntrinsic(program, type) &&
    getIntrinsicModelName(program, type) === "null"
  );
}

function getSchemaForUnion(
  program: Program,
  union: UnionType,
  usage?: SchemaContext[]
) {
  let type: string;
  const nonNullOptions = union.options.filter((t) => !isNullType(program, t));
  const nullable = union.options.length != nonNullOptions.length;
  if (nonNullOptions.length === 0 || nonNullOptions[0] === undefined) {
    reportDiagnostic(program, { code: "union-null", target: union });
    return {};
  }

  const kind = nonNullOptions[0].kind;
  switch (kind) {
    case "String":
      type = "string";
      break;
    case "Number":
      type = "number";
      break;
    case "Boolean":
      type = "boolean";
      break;
    case "Model":
      type = "model";
      break;
    default:
      reportInvalidUnionForTypescript();
      return {};
  }

  const values = [];
  if (type === "model" || type === "array") {
    // Model unions can only ever be a model type with 'null'
    if (nonNullOptions.length === 1) {
      // Get the schema for the model type
      const schema: any = getSchemaForType(program, nonNullOptions[0], usage);
      if (schema) {
        schema["x-nullable"] = nullable;
      }

      return schema;
    } else {
      reportDiagnostic(program, {
        code: "union-unsupported",
        messageId: "null",
        target: union
      });
      return {};
    }
  }

  for (const option of nonNullOptions) {
    if (option.kind != kind) {
      reportInvalidUnionForTypescript();
    }

    // We already know it's not a model type
    values.push((option as any).value);
  }

  const schema: any = { type };
  if (values.length > 0) {
    schema.enum = values;
    schema.type =
      type === "string"
        ? values.map((item) => `"${item}"`).join(" | ")
        : values.join(" | ");
  }
  if (nullable) {
    schema["x-nullable"] = true;
  }

  return schema;

  function reportInvalidUnionForTypescript() {
    reportDiagnostic(program, {
      code: "union-unsupported",
      target: union
    });
  }
}

// An openapi "string" can be defined in several different ways in Cadl
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
    (type.kind === "Union" && type.options.every((o) => o.kind === "String"))
  );
}

// Return any string literal values for type
function getStringValues(type: Type): string[] {
  if (type.kind === "String") {
    return [type.value];
  } else if (type.kind === "Union") {
    return type.options.flatMap(getStringValues).filter((v) => v);
  }
  return [];
}
function validateDiscriminator(
  program: Program,
  discriminator: Discriminator,
  derivedModels: readonly ModelType[]
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
    if (!isOasString(prop.type)) {
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
 * represented as properties in Cadl.
 */
function isSchemaProperty(program: Program, property: ModelTypeProperty) {
  const headerInfo = getHeaderFieldName(program, property);
  const queryInfo = getQueryParamName(program, property);
  const pathInfo = getPathParamName(program, property);
  const statusCodeinfo = isStatusCode(program, property);
  return !(headerInfo || queryInfo || pathInfo || statusCodeinfo);
}

// function getDefaultValue(program: Program, type: Type): any {
//   switch (type.kind) {
//     case "String":
//       return type.value;
//     case "Number":
//       return type.value;
//     case "Boolean":
//       return type.value;
//     case "Tuple":
//       return type.values.map(item => getDefaultValue(program, item));
//     default:
//       reportDiagnostic(program, {
//         code: "invalid-default",
//         format: { type: type.kind },
//         target: type,
//       });
//   }
// }
function getSchemaForModel(
  program: Program,
  model: ModelType,
  usage?: SchemaContext[],
  needRef?: boolean
) {
  const friendlyName = getFriendlyName(program, model);
  let name = model.name;
  if (
    !friendlyName &&
    model.templateArguments &&
    model.templateArguments.length > 0
  ) {
    name =
      model.name +
      model.templateArguments
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
        .join("");
  }
  let modelSchema: ObjectSchema = {
    name: friendlyName ?? name,
    type: "object",
    description: getDoc(program, model) ?? ""
  };
  // normalized the output name
  modelSchema.name = normalizeName(
    modelSchema.name,
    NameType.Interface,
    true /** shouldGuard */
  );

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
    const childSchema = getSchemaForType(program, child, usage, true);
    for (const [name, prop] of child.properties) {
      if (name === discriminator?.propertyName) {
        const propSchema = getSchemaForType(program, prop.type, usage, true);
        childSchema.discriminatorValue = propSchema.type.replace(/"/g, "");
        break;
      }
    }
    modelSchema.children?.all?.push(childSchema);
    modelSchema.children?.immediate?.push(childSchema);
  }

  if (discriminator) {
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
  for (const [name, prop] of model.properties) {
    if (!isSchemaProperty(program, prop)) {
      continue;
    }

    const description = getDoc(program, prop);
    const propSchema = getSchemaForType(program, prop.type, usage, true);
    if (propSchema === undefined) {
      continue;
    }
    if (!prop.optional) {
      propSchema.required = true;
    }
    propSchema.usage = usage;
    modelSchema.properties[name] = propSchema;
    // if this property is a discriminator property, remove it to keep autorest validation happy
    if (model.baseModel) {
      const { propertyName } = getDiscriminator(program, model.baseModel) || {};
      if (name === propertyName) {
        continue;
      }
    }

    // Apply decorators on the property to the type's schema
    const newPropSchema = applyIntrinsicDecorators(program, prop, propSchema);
    if (newPropSchema === undefined) {
      continue;
    }
    if (description) {
      newPropSchema["description"] = description;
    }
    modelSchema.properties[name] = newPropSchema;

    if (prop.default) {
      // modelSchema.properties[name]['default'] = getDefaultValue(program, prop.default);
    }

    // Should the property be marked as readOnly?
    const vis = getVisibility(program, prop);
    if (vis && vis.includes("read")) {
      const mutability = [];
      if (vis.includes("read")) {
        if (vis.length > 1) {
          mutability.push(SchemaContext.Output);
        } else {
          // modelSchema.properties[name]['readOnly'] = true;
        }
      }
      if (vis.includes("write") || vis.includes("create")) {
        mutability.push(SchemaContext.Input);
      }

      if (mutability.length > 0) {
        // modelSchema.properties[name]["usage"] = mutability;
      }
    }
  }

  // Special case: if a model type extends a single *templated* base type and
  // has no properties of its own, absorb the definition of the base model
  // into this schema definition.  The assumption here is that any model type
  // defined like this is just meant to rename the underlying instance of a
  // templated type.
  if (
    model.baseModel &&
    model.baseModel.templateArguments &&
    model.baseModel.templateArguments.length > 0 &&
    modelSchema.properties &&
    Object.keys(modelSchema.properties).length === 0
  ) {
    // Take the base model schema but carry across the documentation property
    // that we set before
    const baseSchema = getSchemaForType(program, model.baseModel, usage);
    modelSchema = {
      ...baseSchema,
      description: modelSchema.description
    };
  } else if (model.baseModel) {
    modelSchema.parents = {
      all: [getSchemaForType(program, model.baseModel, usage, true)],
      immediate: [getSchemaForType(program, model.baseModel, usage, true)]
    };
  }
  return modelSchema;
}
// Map an Cadl type to an OA schema. Returns undefined when the resulting
// OA schema is just a regular object schema.
function mapCadlTypeToTypeScript(
  program: Program,
  cadlType: Type,
  usage?: SchemaContext[]
): any {
  switch (cadlType.kind) {
    case "Number":
      return { type: `${cadlType.value}` };
    case "String":
      return { type: `"${cadlType.value}"` };
    case "Boolean":
      return { type: `${cadlType.value}` };
    case "Model":
    case "ModelProperty":
      return mapCadlIntrinsicModelToTypeScript(program, cadlType, usage);
  }
}
function applyIntrinsicDecorators(
  program: Program,
  cadlType: ModelType | ModelTypeProperty,
  target: any
): any {
  const newTarget = { ...target };
  const docStr = getDoc(program, cadlType);
  const isString = isStringType(program, getPropertyType(cadlType));
  const isNumeric = isNumericType(program, getPropertyType(cadlType));

  if (isString && !target.documentation && docStr) {
    newTarget.description = docStr;
  }

  const friendlyName = getFriendlyName(program, cadlType);
  if (friendlyName) {
    newTarget.name = friendlyName;
  }

  const summaryStr = getSummary(program, cadlType);
  if (isString && !target.summary && summaryStr) {
    newTarget.summary = summaryStr;
  }

  const formatStr = getFormat(program, cadlType);
  if (isString && !target.format && formatStr) {
    newTarget.format = formatStr;
  }

  const pattern = getPattern(program, cadlType);
  if (isString && !target.pattern && pattern) {
    newTarget.pattern = pattern;
  }

  const minLength = getMinLength(program, cadlType);
  if (isString && !target.minLength && minLength !== undefined) {
    newTarget.minLength = minLength;
  }

  const maxLength = getMaxLength(program, cadlType);
  if (isString && !target.maxLength && maxLength !== undefined) {
    newTarget.maxLength = maxLength;
  }

  const minValue = getMinValue(program, cadlType);
  if (isNumeric && !target.minimum && minValue !== undefined) {
    newTarget.minimum = minValue;
  }

  const maxValue = getMaxValue(program, cadlType);
  if (isNumeric && !target.maximum && maxValue !== undefined) {
    newTarget.maximum = maxValue;
  }

  if (isSecret(program, cadlType)) {
    newTarget.format = "password";
    newTarget["x-ms-secret"] = true;
  }

  if (isString) {
    const values = getKnownValues(program, cadlType);
    if (values) {
      const enumSchema = { ...newTarget, ...getSchemaForEnum(program, values) };
      enumSchema.name = "string";
      return enumSchema;
    }
  }

  return newTarget;
}
function getSchemaForEnum(program: Program, e: EnumType) {
  const values = [];
  if (e.members[0] === undefined) {
    reportDiagnostic(program, { code: "union-unsupported", target: e });
    return;
  }
  const type = enumMemberType(e.members[0]);
  for (const option of e.members) {
    if (type !== enumMemberType(option)) {
      reportDiagnostic(program, { code: "union-unsupported", target: e });
      continue;
    }

    values.push(option.value ? option.value : option.name);
  }

  const schema: any = { type, description: getDoc(program, e) };
  if (values.length > 0) {
    schema.enum = values;
    schema.type =
      type === "string"
        ? values.map((item) => `"${item}"`).join("|")
        : values.join("|");
  }

  return schema;
  function enumMemberType(member: EnumMemberType) {
    if (!member.value || typeof member.value === "string") return "string";
    return "number";
  }
}
/**
 * Map Cadl intrinsic models to open api definitions
 */
function mapCadlIntrinsicModelToTypeScript(
  program: Program,
  cadlType: ModelType | ModelTypeProperty,
  usage?: SchemaContext[]
): any | undefined {
  const indexer = (cadlType as ModelType).indexer;
  if (indexer !== undefined) {
    if (!isNeverType(indexer.key)) {
      const name = getIntrinsicModelName(program, indexer.key);
      let schema: any = {};
      if (name === "string") {
        const valueType = getSchemaForType(
          program,
          indexer.value!,
          usage,
          true
        );
        schema = {
          type: "dictionary",
          additionalProperties: valueType,
          description: getDoc(program, cadlType)
        };
        if (!isIntrinsic(program, indexer.value)) {
          schema.typeName = `Record<string, ${valueType.name}>`;
          if (usage && usage.includes(SchemaContext.Output)) {
            schema.outputTypeName = `Record<string, ${valueType.name}Output>`;
          }
        } else {
          schema.typeName = `Record<string, ${valueType.type}>`;
        }
      } else if (name === "integer") {
        schema = {
          type: "array",
          items: getSchemaForType(program, indexer.value!, usage, true),
          description: getDoc(program, cadlType)
        };
        if (!isIntrinsic(program, indexer.value)) {
          schema.typeName = `Array<${schema.items.name}>`;
          if (usage && usage.includes(SchemaContext.Output)) {
            schema.outputTypeName = `Array<${schema.items.name}Output>`;
          }
        } else {
          if (schema.items.typeName) {
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
          } else {
            schema.typeName = `${schema.items.type}[]`;
          }
        }
      }

      schema.usage = usage;
      return schema;
    }
  }
  if (!isIntrinsic(program, cadlType)) {
    return undefined;
  }
  const name = getIntrinsicModelName(program, cadlType);
  const description = getSummary(program, cadlType);
  switch (name) {
    case "bytes":
      return { type: "string", format: "byte", description };
    case "int8":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "number",
        format: "int8"
      });
    case "int16":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "number",
        format: "int16"
      });
    case "int32":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "number",
        format: "int32"
      });
    case "int64":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "number",
        format: "int64"
      });
    case "safeint":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "number",
        format: "int64"
      });
    case "uint8":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "number",
        format: "uint8"
      });
    case "uint16":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "number",
        format: "uint16"
      });
    case "uint32":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "number",
        format: "uint32"
      });
    case "uint64":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "number",
        format: "uint64"
      });
    case "float64":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "number",
        format: "double"
      });
    case "float32":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "number",
        format: "float"
      });
    case "string":
      return applyIntrinsicDecorators(program, cadlType, { type: "string" });
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
    case "zonedDateTime":
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

export function getTypeName(schema: Schema): string {
  // TODO: Handle more cases
  return getPriorityName(schema) ?? schema.type ?? "any";
}

export function getImportedModelName(schema: Schema): string[] | undefined {
  // TODO: Handle more type cases
  switch (schema.type) {
    case "array":
      return (schema as any).items
        .filter((i: Schema) => i.type === "object")
        .map((i: Schema) => i.outputTypeName);
    case "object":
      return getPriorityName(schema) ? [getPriorityName(schema)] : undefined;
    default:
      return;
  }
}

function getPriorityName(schema: Schema): string {
  return schema.outputTypeName ?? schema.name;
}
