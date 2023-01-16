// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export function buildPipeCollection(queryParameters: string[]): string {
  return queryParameters.join("|");
}

export function buildSsvCollection(queryParameters: string[]): string {
  return queryParameters.join(" ");
}

export function buildTsvCollection(queryParameters: string[]) {
  return queryParameters.join("\t");
}
