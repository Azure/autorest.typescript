// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ModelOutput {
  int32Property?: number;
  float32Property?: number;
  /** Possible values: "EnumValue1" */
  enumProperty?: EnumOutput;
}

export interface ActionResponseOutput {
  stringProperty: string;
  modelProperty?: ModelOutput;
  arrayProperty?: string[];
  recordProperty?: Record<string, string>;
}

/** Alias for EnumOutput */
export type EnumOutput = string;
