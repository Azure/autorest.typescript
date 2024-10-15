// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export function buildExplodedFormStyleValue<ValueType>(value: ValueType) {
  return {
    explode: true,
    style: "form",
    value,
  } as const;
}
