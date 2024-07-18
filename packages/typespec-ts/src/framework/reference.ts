import { useBinder } from "./hooks/binder.js";
import { refkey as getRefKey } from "./refkey.js";

export function resolveReference(refkey: unknown): string | undefined {
  const binder = useBinder();
  const stringRefkey = typeof refkey === "string" ? refkey : getRefKey(refkey);

  return binder.resolveReference(stringRefkey);
}
