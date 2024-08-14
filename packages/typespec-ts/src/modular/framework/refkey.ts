const objectIds = new WeakMap<WeakKey, string>();
let objId = 0;

function getObjectKey(value: WeakKey) {
  if (objectIds.has(value)) {
    return `${objectIds.get(value)}`;
  }

  const key = `o${objId++}`;
  objectIds.set(value, key);

  return key;
}

declare const RefkeySym: unique symbol;
export type RefKey = string & { [RefkeySym]: true };

function getKey(value: unknown): RefKey {
  if (typeof value === "object" && value !== null) {
    return getObjectKey(value) as RefKey;
  } else {
    return `s${String(value)}` as RefKey;
  }
}

export function refkey(...args: unknown[]) {
  return args.map((v) => getKey(v)).join("\u2063");
}
