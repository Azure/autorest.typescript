// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** extension */
export interface Extension extends Element {
  level: number;
}

/** element */
export interface Element {
  extension?: Array<Extension>;
}
