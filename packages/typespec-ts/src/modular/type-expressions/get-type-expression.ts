import { SdkType } from "@azure-tools/typespec-client-generator-core";
import { getCredentialExpression } from "./get-credential-expression.js";
import { getEnumExpression } from "./get-enum-expression.js";
import { getModelExpression } from "./get-model-expression.js";
import { getUnionExpression } from "./get-union-expression.js";

export interface EmitTypeOptions {
  emitInline?: boolean;
}

export function getTypeExpression(
  type: SdkType,
  options?: EmitTypeOptions
): string {
  switch (type.kind) {
    case "array": {
      const valueType = getTypeExpression(type.valueType, options);
      return `(${valueType})[]`;
    }
    case "enum":
      return getEnumExpression(type, options);
    case "any":
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
      if (getTypeExpression(type.valueType) === "string") {
        return `"${type.value}"`;
      }
      return String(type.value);
    case "duration":
      return getTypeExpression(type.wireType, options);
    case "credential":
      // Credential comes from @useAuth decorator
      return getCredentialExpression(type);
    case "dict": {
      const valueType = getTypeExpression(type.valueType, options);
      return `Record<string, ${valueType}>`;
    }
    case "enumvalue":
      if (getTypeExpression(type.valueType) === "string") {
        return `"${type.value}"`;
      }
      return String(type.value);
    case "model":
      return getModelExpression(type, options);
    case "nullable": {
      const nonNullableType = getTypeExpression(type.type, options);
      return `(${nonNullableType}) | null`;
    }
    case "offsetDateTime":
      return "string";
    case "tuple": {
      const types = type.values
        .map((v) => getTypeExpression(v, options))
        .join(", ");
      return `[${types}]`;
    }
    case "union":
      return getUnionExpression(type, options);
    case "utcDateTime":
      return "Date";

    default:
      return "any";
  }
}
