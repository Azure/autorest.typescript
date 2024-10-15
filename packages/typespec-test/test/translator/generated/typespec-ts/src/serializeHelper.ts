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

export function buildExplodedFormStyleValue<ValueType>(value: ValueType) {
  return {
    explode: true,
    style: "form",
    value,
  } as const;
}
