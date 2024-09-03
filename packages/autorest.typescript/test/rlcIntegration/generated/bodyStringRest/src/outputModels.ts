// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface ErrorModelOutput {
  status?: number;
  message?: string;
}

export interface RefColorConstantOutput {
  /** Referenced Color Constant Description. */
  ColorConstant: "green-color";
  /** Sample string. */
  field1?: string;
}
