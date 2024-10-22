// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EncodingType, uint8ArrayToString } from "@typespec/ts-http-runtime";
export const serializeRecord = withNullChecks(
  (
    item: Record<string, any>,
    serializer?: (item: any) => any,
  ): Record<string, any> => {
    return Object.keys(item).reduce((acc, key) => {
      if (isPassthroughElement(item[key])) {
        acc[key] = item[key] as any;
      } else if (serializer) {
        const value = item[key];
        if (value !== undefined) {
          acc[key] = serializer(value);
        }
      } else {
        console.warn(`Don't know how to serialize ${item[key]}`);
        acc[key] = item[key] as any;
      }
      return acc;
    }, {});
  },
);

export const serializePassthrough = withNullChecks(<T,>(item: T): T => item);

export const serializeArray = withNullChecks(
  <T,>(items: T[], serializer: (item: T) => unknown): unknown[] => {
    return items.map((item) => {
      if (isPassthroughElement(item)) {
        return item;
      }
      return serializer(item);
    });
  },
);

export const serializeUtcDateTime = withNullChecks((date: Date): string => {
  // todo support encoding?
  return date.toISOString();
});

export const serializeBytes = withNullChecks(
  (bytes: Uint8Array, encoding: EncodingType): string => {
    return uint8ArrayToString(bytes, encoding);
  },
);

export function withNullChecks(fn: (input: any, ...args: any) => unknown) {
  return function (input: any | null | undefined, ...args: any) {
    if (input === null || input === undefined) {
      return input;
    }

    return fn(input, ...args);
  };
}

export function isPassthroughElement(t: any) {
  return ["number", "string", "boolean", "null"].includes(typeof t);
}
