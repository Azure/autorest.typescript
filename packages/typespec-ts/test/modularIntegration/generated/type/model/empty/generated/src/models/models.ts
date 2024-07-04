// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Empty model used in operation parameters */
export interface EmptyInput {}

export function emptyInputSerializer(item: EmptyInput) {
  return item as any;
}

/** Empty model used in operation return type */
export interface EmptyOutput {}

/** Empty model used in both parameter and return type */
export interface EmptyInputOutput {}

export function emptyInputOutputSerializer(item: EmptyInputOutput) {
  return item as any;
}
