// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ErrorModel {
  status?: number;
  message?: string;
}

export interface RefColorConstant {
  /** Referenced Color Constant Description. */
  colorConstant: "green-color";
  /** Sample string. */
  field1?: string;
}
