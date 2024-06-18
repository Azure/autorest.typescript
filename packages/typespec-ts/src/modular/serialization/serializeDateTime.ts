import { SdkDatetimeType } from "@azure-tools/typespec-client-generator-core";
import { SerializeTypeOptions } from "./serializers.js";

export function serializeDatetime(
  options: SerializeTypeOptions<SdkDatetimeType>
): string {
  const { functionType, type, valueExpr } = options;
  if (functionType === "serialize") {
    switch (type.encode) {
      case "rfc7231":
        return `(${valueExpr}).toUTCString()`;
      case "unixTimestamp":
        return `(${valueExpr}).getTime()`;
      case "rfc3339":
      default:
        return `(${valueExpr}).toISOString()`;
    }
  } else {
    return `new Date(${valueExpr})`;
  }
}
