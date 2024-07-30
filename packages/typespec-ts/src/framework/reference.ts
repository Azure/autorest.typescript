import { useBinder } from "./hooks/binder.js";
import { refkey as getRefkey } from "./refkey.js";
import { ReferenceableSymbol } from "./dependency.js";

export function resolveReference(refkey: unknown): string | undefined {
  const binder = useBinder();

  let key = refkey;
  if (isReferenceableSymbol(key)) {
    key = getRefkey(key);
  }

  const stringRefkey = typeof key === "string" ? key : getRefkey(key);

  return binder.resolveReference(stringRefkey);
}
function isReferenceableSymbol(obj: any): obj is ReferenceableSymbol {
  return obj?.kind === "externalDependency";
}
