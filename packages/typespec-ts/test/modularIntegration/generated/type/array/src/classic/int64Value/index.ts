// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/arrayContext.js";
import { int64ValueGet, int64ValuePut } from "../../api/int64Value/index.js";
import {
  Int64ValueGetOptionalParams,
  Int64ValuePutOptionalParams,
} from "../../models/options.js";

/** Interface representing a Int64Value operations. */
export interface Int64ValueOperations {
  get: (options?: Int64ValueGetOptionalParams) => Promise<number[]>;
  put: (body: number[], options?: Int64ValuePutOptionalParams) => Promise<void>;
}

export function getInt64Value(context: ArrayContext) {
  return {
    get: (options?: Int64ValueGetOptionalParams) =>
      int64ValueGet(context, options),
    put: (body: number[], options?: Int64ValuePutOptionalParams) =>
      int64ValuePut(context, body, options),
  };
}

export function getInt64ValueOperations(
  context: ArrayContext,
): Int64ValueOperations {
  return {
    ...getInt64Value(context),
  };
}
