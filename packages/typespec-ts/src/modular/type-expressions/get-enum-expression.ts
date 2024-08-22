import { SdkEnumType } from "@azure-tools/typespec-client-generator-core";
import { resolveReference } from "../../framework/reference.js";
import { getTypeExpression, EmitTypeOptions } from "./get-type-expression.js";
import { shouldEmitInline } from "./utils.js";

export function getEnumExpression(
  type: SdkEnumType,
  options: EmitTypeOptions = {}
): string {
  if (shouldEmitInline(type, options)) {
    return `(${type.values
      .map((v) => `${getTypeExpression(v, options)}`)
      .join(" | ")})`;
  } else {
    return resolveReference(type);
  }
}
