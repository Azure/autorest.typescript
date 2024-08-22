import { EmitTypeOptions } from "./get-type-expression.js";

export function shouldEmitInline(
  type: { isGeneratedName?: boolean },
  options: EmitTypeOptions = {}
): boolean {
  const emitInline = options.emitInline;

  if (emitInline === undefined && "isGeneratedName" in type) {
    // If not explicitly set, default to emitting inline for anonymous types
    return Boolean(type.isGeneratedName);
  }

  return Boolean(emitInline);
}
