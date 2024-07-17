// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/arrayContext.js";
import {
  float32ValueGet,
  float32ValuePut,
} from "../../api/float32Value/index.js";
import {
  Float32ValueGetOptionalParams,
  Float32ValuePutOptionalParams,
} from "../../api/options.js";

/** Interface representing a Float32Value operations. */
export interface Float32ValueOperations {
  get: (options?: Float32ValueGetOptionalParams) => Promise<number[]>;
  put: (
    body: number[],
    options?: Float32ValuePutOptionalParams,
  ) => Promise<void>;
}

export function getFloat32Value(context: ArrayContext) {
  return {
    get: (options?: Float32ValueGetOptionalParams) =>
      float32ValueGet(context, options),
    put: (body: number[], options?: Float32ValuePutOptionalParams) =>
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
