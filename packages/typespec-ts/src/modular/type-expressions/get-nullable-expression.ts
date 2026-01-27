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
  // Check if we should ignore null for optional properties (Azure services default behavior)
  const ignoreNullableOnOptional =
    context.rlcOptions?.ignoreNullableOnOptional ?? false;
  const isOptional = options.isOptional ?? false;

  // If the property is optional and we should ignore nullable, just return the non-nullable type
  if (ignoreNullableOnOptional && isOptional) {
    return getTypeExpression(context, type.type, options);
  }

  if (shouldEmitInline(type, options)) {
    const nonNullableType = getTypeExpression(context, type.type, options);
    return `(${nonNullableType}) | null`;
  } else {
    return resolveReference(type);
  }
}
