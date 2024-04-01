// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import {
  float32ValueGet,
  float32ValuePut,
} from "../../api/float32Value/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface Float32ValueOperations {
  get: (options?: GetOptions) => Promise<number[]>;
  put: (body: number[], options?: PutOptions) => Promise<void>;
}

export function getFloat32Value(context: ArrayContext) {
  return {
    get: (options?: GetOptions) => float32ValueGet(context, options),
    put: (body: number[], options?: PutOptions) =>
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
