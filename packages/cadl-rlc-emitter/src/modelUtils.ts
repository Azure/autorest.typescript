import {
  ArrayType,
  EnumMemberType,
  EnumType,
  getDoc,
  getFormat,
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
  isNumericType,
  isSecret,
  isStringType,
  isTemplate,
  ModelType,
  ModelTypeProperty,
  Program,
  Type
} from "@cadl-lang/compiler";
import { Discriminator, getDiscriminator } from "@cadl-lang/rest/*";
import { reportDiagnostic } from "./lib.js";
import { ObjectSchema, SchemaContext } from "@azure-tools/rlc-codegen";
import {
  getHeaderFieldName,
  getPathParamName,
  getQueryParamName,
  isStatusCode
} from "@cadl-lang/rest/http";

export function getSchemaForType(program: Program, type: Type) {
  const builtinType = mapCadlTypeToTypeScript(program, type);
  if (builtinType !== undefined) {
    // add in description elements for types derived from primitive types (SecureString, etc.)
    const doc = getDoc(program, type);
    if (doc) {
      builtinType.description = doc;
    }
    return builtinType;
  }
  if (type.kind === "Array") {
    return getSchemaForArray(program, type);
  } else if (type.kind === "Model") {
    return getSchemaForModel(program, type);
    // } else if (type.kind === "Union") {
    //   return getSchemaForUnion(type);
  } else if (type.kind === "Enum") {
    return getSchemaForEnum(program, type);
  }

  reportDiagnostic(program, {
    code: "invalid-schema",
    format: { type: type.kind },
    target: type
  });
  return undefined;
}
function includeDerivedModel(model: ModelType): boolean {
  return (
    !isTemplate(model) &&
    (model.templateArguments === undefined ||
      model.templateArguments?.length === 0 ||
      model.derivedModels.length > 0)
  );
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
function getSchemaForModel(program: Program, model: ModelType) {
  let modelSchema: ObjectSchema = {
    name: model.name,
    type: "object",
    description: getDoc(program, model) ?? ""
  };
  modelSchema.properties = {};
  const derivedModels = model.derivedModels.filter(includeDerivedModel);

  // getSchemaOrRef on all children to push them into components.schemas
  for (const child of derivedModels) {
    getSchemaForType(program, child);
  }

  const discriminator = getDiscriminator(program, model);
  if (discriminator) {
    if (!validateDiscriminator(program, discriminator, derivedModels)) {
      // appropriate diagnostic is generated in the validate function
      return {};
    }

    const { propertyName } = discriminator;

    for (const child of derivedModels) {
      // Set x-ms-discriminator-value if only one value for the discriminator property
      const prop = getProperty(child, propertyName);
      if (prop) {
        const vals = getStringValues(prop.type);
        if (vals.length === 1 && vals[0]) {
          modelSchema.discriminatorValue = vals[0];
        }
      }
    }

    modelSchema.discriminator = {
      name: propertyName,
      type: "string"
    };
    // Push discriminator into base type, but only if it is not already there
    if (!model.properties?.get(propertyName)) {
      modelSchema.properties[propertyName] = {
        name: propertyName,
        type: "string",
        description: `Discriminator property for ${model.name}.`
      };
      // modelSchema.required = [propertyName];
    }
  }

  // applyExternalDocs(model, modelSchema);

  for (const [name, prop] of model.properties) {
    if (!isSchemaProperty(program, prop)) {
      continue;
    }

    const description = getDoc(program, prop);
    const propSchema = getSchemaForType(program, prop.type);
    if (propSchema === undefined) {
      continue;
    }
    modelSchema.properties[name] = propSchema;
    // if this property is a discriminator property, remove it to keep autorest validation happy
    if (model.baseModel) {
      const { propertyName } = getDiscriminator(program, model.baseModel) || {};
      if (name === propertyName) {
        continue;
      }
    }

    // if (!prop.optional) {
    //   if (!modelSchema.required) {
    //     modelSchema.required = [];
    //   }
    //   modelSchema.required.push(name);
    // }

    // Apply decorators on the property to the type's schema
    const newPropSchema = applyIntrinsicDecorators(program, prop, propSchema);
    if (newPropSchema === undefined) {
      continue;
    }
    modelSchema.properties[name] = newPropSchema;
    if (description) {
      // modelSchema.properties[name]['description'] = description;
    }

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
    const baseSchema = getSchemaForType(program, model.baseModel);
    modelSchema = {
      ...baseSchema,
      description: modelSchema.description
    };
  } else if (model.baseModel) {
    modelSchema.parents = {
      all: [getSchemaForType(program, model.baseModel)],
      immediate: [getSchemaForType(program, model.baseModel)]
    };
  }

  return modelSchema;
}
function getSchemaForArray(program: Program, array: ArrayType) {
  const target = array.elementType;
  const schema = {
    type: "array",
    items: getSchemaForType(program, target)
  } as any;
  return schema;
}
// Map an Cadl type to an OA schema. Returns undefined when the resulting
// OA schema is just a regular object schema.
function mapCadlTypeToTypeScript(program: Program, cadlType: Type): any {
  switch (cadlType.kind) {
    case "Number":
      return { type: "number", enum: [cadlType.value] };
    case "String":
      return { type: "string", enum: [cadlType.value] };
    case "Boolean":
      return { type: "boolean", enum: [cadlType.value] };
    case "Model":
      return mapCadlIntrinsicModelToTypeScript(program, cadlType);
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
      enumSchema["x-ms-enum"].modelAsString = true;
      enumSchema["x-ms-enum"].name = (
        getPropertyType(cadlType) as ModelType
      ).name;
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
    // addXMSEnum(e, schema);
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
  cadlType: ModelType
): any | undefined {
  if (!isIntrinsic(program, cadlType)) {
    return undefined;
  }
  const name = getIntrinsicModelName(program, cadlType);
  switch (name) {
    case "bytes":
      return { type: "string", format: "byte" };
    case "int8":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "integer",
        format: "int8"
      });
    case "int16":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "integer",
        format: "int16"
      });
    case "int32":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "integer",
        format: "int32"
      });
    case "int64":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "integer",
        format: "int64"
      });
    case "safeint":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "integer",
        format: "int64"
      });
    case "uint8":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "integer",
        format: "uint8"
      });
    case "uint16":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "integer",
        format: "uint16"
      });
    case "uint32":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "integer",
        format: "uint32"
      });
    case "uint64":
      return applyIntrinsicDecorators(program, cadlType, {
        type: "integer",
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
      return { type: "boolean" };
    case "plainDate":
      return { type: "string", format: "date" };
    case "zonedDateTime":
      return { type: "string", format: "date-time" };
    case "plainTime":
      return { type: "string", format: "time" };
    case "duration":
      return { type: "string", format: "duration" };
    case "Map":
      // We assert on valType because Map types always have a type
      const valType = cadlType.properties.get("v");
      return {
        type: "object",
        additionalProperties: getSchemaForType(program, valType!.type)
      };
  }
}
