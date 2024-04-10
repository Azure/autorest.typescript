// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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

export function buildPipeCollection(items: string[] | number[]): string {
  return items.join("|");
}

export function buildSsvCollection(items: string[] | number[]): string {
  return items.join(" ");
}

export function buildTsvCollection(items: string[] | number[]): string {
  return items.join("\t");
}

export function buildCsvCollection(items: string[] | number[]): string {
  return items.join(",");
}
