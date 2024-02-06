// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import {
  float32ValueGet,
  float32ValuePut,
} from "../../api/float32Value/index.js";
import {
  Float32ValueGetOptions,
  Float32ValuePutOptions,
} from "../../models/options.js";

export interface Float32ValueOperations {
  get: (options?: Float32ValueGetOptions) => Promise<number[]>;
  put: (body: number[], options?: Float32ValuePutOptions) => Promise<void>;
}

export function getFloat32Value(context: ArrayContext) {
  return {
    get: (options?: Float32ValueGetOptions) =>
      float32ValueGet(context, options),
    put: (body: number[], options?: Float32ValuePutOptions) =>
      float32ValuePut(context, body, options),
  };
}

export function getFloat32ValueOperations(
  context: ArrayContext,
): Float32ValueOperations {
  return {
    ...getFloat32Value(context),
  };
}
