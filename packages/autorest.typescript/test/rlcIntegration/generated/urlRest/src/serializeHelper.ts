// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export function buildPipeCollection(items: string[] | number[]): string {
  return items.join("|");
}

export function buildSsvCollection(items: string[] | number[]): string {
  return items.join(" ");
}

export function buildTsvCollection(items: string[] | number[]): string {
  return items.join("\t");
}
