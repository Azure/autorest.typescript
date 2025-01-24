import {
  SdkModelPropertyType,
  SdkType
} from "@azure-tools/typespec-client-generator-core";
import { getCredentialExpression } from "./get-credential-expression.js";
import { getEnumExpression } from "./get-enum-expression.js";
import { getModelExpression } from "./get-model-expression.js";
import { getUnionExpression } from "./get-union-expression.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { SdkContext } from "../../utils/interfaces.js";
import { getNullableExpression } from "./get-nullable-expression.js";

export interface EmitTypeOptions {
  emitInline?: boolean;
}

export function normalizeModelPropertyName(
  context: SdkContext,
  property: SdkModelPropertyType
): string {
  const normalizedPropName = normalizeName(property.name, NameType.Property);
  return context.rlcOptions?.ignorePropertyNameNormalize
    ? `"${property.name}"`
    : `"${normalizedPropName}"`;
}

export function getTypeExpression(
  context: SdkContext,
  type: SdkType,
  options?: EmitTypeOptions
): string {
  switch (type.kind) {
    case "array": {
      const valueType = getTypeExpression(context, type.valueType, options);
      return `(${valueType})[]`;
    }
    case "enum":
      return getEnumExpression(context, type);
    case "unknown":
      return "any";
    case "boolean":
      return "boolean";
    case "decimal":
    case "decimal128":
    case "float":
    case "float32":
    case "float64":
    case "integer":
    case "int16":
    case "int32":
    case "int64":
    case "int8":
    case "uint16":
    case "uint32":
    case "uint64":
    case "uint8":
    case "numeric":
    case "safeint":
      if (type.encode === "string") {
        return "string";
      }
      return "number";
    case "endpoint":
    case "plainDate":
    case "plainTime":
    case "string":
    case "url":
      // TODO - what typespec produces uri, password?
      return "string";
    case "bytes":
      return "Uint8Array";
    case "constant":
    case "enumvalue":
      if (getTypeExpression(context, type.valueType) === "string") {
        return `"${type.value}"`;
      }
      return String(type.value);
    case "duration":
      if (type.encode === "seconds") {
        return "number";
      }
      return getTypeExpression(context, type.wireType, options);
    case "credential":
      // Credential comes from @useAuth decorator
      return getCredentialExpression(type);
    case "dict": {
      const valueType = getTypeExpression(context, type.valueType, options);
      return `Record<string, ${valueType}>`;
    }
    case "model":
      return getModelExpression(context, type);
    case "nullable": 
      return getNullableExpression(context, type, options);
    case "offsetDateTime":
      return "string";
    case "tuple": {
      const types = type.valueTypes
        .map((v) => getTypeExpression(context, v, options))
        .join(", ");
      return `[${types}]`;
    }
    case "union":
      return getUnionExpression(context, type, options);
    case "utcDateTime":
      return "Date";

    default:
      return "any";
  }
}
