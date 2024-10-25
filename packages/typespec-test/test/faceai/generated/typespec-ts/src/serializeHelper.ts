// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * The helper to build a wrapper object for a value with explode as false and form style.
 */
export function buildUnexplodedFormStyle<ValueType>(value: ValueType): {
  explode: false;
  style: "form";
  value: ValueType;
} {
  return {
    explode: false,
    style: "form",
    value,
  };
}
