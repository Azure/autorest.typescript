// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** element */
export interface Element {
  extension?: Extension[];
}

/** extension */
export interface Extension extends Element {
  level: number;
}
