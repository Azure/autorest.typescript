// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export function withNonExplodedAndFormStyle(
  value: string[] | Record<string, unknown>,
) {
  return {
    explode: false,
    style: "form",
    value: value as any,
  } as const;
}
