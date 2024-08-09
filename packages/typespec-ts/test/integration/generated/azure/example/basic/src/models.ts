// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ActionRequest {
  stringProperty: string;
  modelProperty?: Model;
  arrayProperty?: string[];
  recordProperty?: Record<string, string>;
}

export interface Model {
  int32Property?: number;
  float32Property?: number;
  /** Possible values: "EnumValue1" */
  enumProperty?: Enum;
}

/** Alias for Enum */
export type Enum = string;
