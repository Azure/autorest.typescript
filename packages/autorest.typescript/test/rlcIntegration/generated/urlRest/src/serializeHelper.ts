// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export function buildPipeCollection(items: string[]): string {
  return items.join("|");
}

export function buildSsvCollection(items: string[]): string {
  return items.join(" ");
}

export function buildTsvCollection(items: string[]) {
  return items.join("\t");
}
