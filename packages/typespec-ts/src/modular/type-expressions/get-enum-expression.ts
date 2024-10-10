import { SdkEnumType } from "@azure-tools/typespec-client-generator-core";
import { resolveReference } from "../../framework/reference.js";
import { getTypeExpression, EmitTypeOptions } from "./get-type-expression.js";
import { shouldEmitInline } from "./utils.js";
import { SdkContext } from "../../utils/interfaces.js";

export function getEnumExpression(
  context: SdkContext,
  type: SdkEnumType,
  options: EmitTypeOptions = {}
): string {
  if (shouldEmitInline(type, options)) {
    return !isExtensibleEnum(context, type)
      ? type.values.map((v) => getTypeExpression(context, v)).join(" | ")
      : getTypeExpression(context, type.valueType);
  } else {
    return resolveReference(type);
  }
}

export function isExtensibleEnum(
  context: SdkContext,
  type: SdkEnumType
): boolean {
  return (
    !type.isFixed && context.rlcOptions?.experimentalExtensibleEnums === true
  );
}
