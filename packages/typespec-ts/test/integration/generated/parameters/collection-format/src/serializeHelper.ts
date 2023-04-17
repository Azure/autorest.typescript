// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export function buildMultiCollection(
  queryParameters: string[],
  parameterName: string
) {
  return queryParameters
    .map((item, index) => {
      if (index === 0) {
        return item;
      }
      return `${parameterName}=${item}`;
    })
    .join("&");
}

export function buildPipeCollection(queryParameters: string[]): string {
  return queryParameters.join("|");
}

export function buildSsvCollection(queryParameters: string[]): string {
  return queryParameters.join(" ");
}

export function buildTsvCollection(queryParameters: string[]) {
  return queryParameters.join("\t");
}
