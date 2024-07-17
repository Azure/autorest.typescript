import { SourceFile } from "ts-morph";
import { useBinder } from "./hooks/binder.js";
import { refkey as getRefKey } from "./refkey.js";

export function resolveReference(
  refkey: unknown,
  currentSourceFile: SourceFile
): string | undefined {
  const binder = useBinder();
  const stringRefkey = typeof refkey === "string" ? refkey : getRefKey(refkey);

  const declarationInfo = binder.resolveReference(
    stringRefkey,
    currentSourceFile
  )!;
  return declarationInfo.alias ?? declarationInfo.name;
}
