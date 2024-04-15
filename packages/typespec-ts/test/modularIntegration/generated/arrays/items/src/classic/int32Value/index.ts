// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/arrayContext.js";
import { int32ValueGet, int32ValuePut } from "../../api/int32Value/index.js";
import {
  Int32ValueGetOptionalParams,
  Int32ValuePutOptionalParams,
} from "../../models/options.js";

export interface Int32ValueOperations {
  get: (options?: Int32ValueGetOptionalParams) => Promise<number[]>;
  put: (body: number[], options?: Int32ValuePutOptionalParams) => Promise<void>;
}

export function getInt32Value(context: ArrayContext) {
  return {
    get: (options?: Int32ValueGetOptionalParams) =>
      int32ValueGet(context, options),
    put: (body: number[], options?: Int32ValuePutOptionalParams) =>
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
