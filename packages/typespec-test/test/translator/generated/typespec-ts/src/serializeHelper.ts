// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export function buildMultiCollection(
  items: string[],
  parameterName: string,
): string {
  return items
    .map((item, index) => {
      if (index === 0) {
        return item;
      }
      return `${parameterName}=${item}`;
    })
    .join("&");
}

/**
 * The helper to build a wrapper object for a value with explode as true and form style.
 */
export function buildExplodedFormStyle<ValueType>(value: ValueType): {
  explode: true;
  style: "form";
  value: ValueType;
} {
  return {
    explode: true,
    style: "form",
    value,
  };
}
