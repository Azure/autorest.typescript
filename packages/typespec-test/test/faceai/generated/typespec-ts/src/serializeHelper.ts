// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export function buildUnexplodedFormStyleValue<ValueType>(value: ValueType) {
  return {
    explode: false,
    style: "form",
    value,
  } as const;
}
