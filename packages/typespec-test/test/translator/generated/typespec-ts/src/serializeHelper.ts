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

export function withExplodedAndFormStyle(
  value: string[] | Record<string, unknown>,
) {
  return {
    explode: true,
    style: "form",
    value: value as any,
  } as const;
}
