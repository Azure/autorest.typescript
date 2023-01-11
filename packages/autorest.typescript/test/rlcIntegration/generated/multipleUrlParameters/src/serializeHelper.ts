// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export function buildMultiCollection(
  oriArray: string[],
  parameterName: string
) {
  return oriArray
    .map((item, index) => {
      if (index === 0) {
        return item;
      }
      return `${parameterName}=${item}`;
    })
    .join("&");
}
