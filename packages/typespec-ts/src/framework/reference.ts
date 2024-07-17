import { SourceFile } from "ts-morph";
import { useBinder } from "./hooks/binder.js";

export function resolveReference(
  refkey: unknown,
  currentSourceFile: SourceFile
): string | undefined {
  const binder = useBinder();

  const declarationInfo = binder.resolveReference(refkey, currentSourceFile)!;
  return declarationInfo.alias ?? declarationInfo.name;
}
