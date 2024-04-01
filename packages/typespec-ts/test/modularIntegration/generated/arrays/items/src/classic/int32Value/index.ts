// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import { int32ValueGet, int32ValuePut } from "../../api/int32Value/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface Int32ValueOperations {
  get: (options?: GetOptions) => Promise<number[]>;
  put: (body: number[], options?: PutOptions) => Promise<void>;
}

export function getInt32Value(context: ArrayContext) {
  return {
    get: (options?: GetOptions) => int32ValueGet(context, options),
    put: (body: number[], options?: PutOptions) =>
      int32ValuePut(context, body, options),
  };
}

export function getInt32ValueOperations(
  context: ArrayContext,
): Int32ValueOperations {
  return {
    ...getInt32Value(context),
  };
}
