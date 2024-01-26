// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** extension */
export interface ExtensionOutput extends ElementOutput {
  level: number;
}

/** element */
export interface ElementOutput {
  extension?: Array<ExtensionOutput>;
}
