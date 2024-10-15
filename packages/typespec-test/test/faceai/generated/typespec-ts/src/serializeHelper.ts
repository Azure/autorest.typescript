// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export function buildNonExplodedAndFormStyleValue<ValueType>(value: ValueType) {
  return {
    explode: false,
    style: "form",
    value,
  } as const;
}
