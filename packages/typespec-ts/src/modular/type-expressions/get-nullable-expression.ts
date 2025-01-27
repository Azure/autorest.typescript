import { SdkNullableType } from "@azure-tools/typespec-client-generator-core";
import { resolveReference } from "../../framework/reference.js";
import { getTypeExpression, EmitTypeOptions } from "./get-type-expression.js";
import { shouldEmitInline } from "./utils.js";
import { SdkContext } from "../../utils/interfaces.js";

export function getNullableExpression(
  context: SdkContext,
  type: SdkNullableType,
  options: EmitTypeOptions = {}
): string {
  if (shouldEmitInline(type, options)) {
    const nonNullableType = getTypeExpression(context, type.type, options);
    return `(${nonNullableType}) | null`;
  } else {
    return resolveReference(type);
  }
}
