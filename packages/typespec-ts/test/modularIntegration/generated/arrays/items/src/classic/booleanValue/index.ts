// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import {
  booleanValueGet,
  booleanValuePut,
} from "../../api/booleanValue/index.js";
import {
  BooleanValueGetOptionalParams,
  BooleanValuePutOptionalParams,
} from "../../models/options.js";

export interface BooleanValueOperations {
  get: (options?: BooleanValueGetOptionalParams) => Promise<boolean[]>;
  put: (
    body: boolean[],
    options?: BooleanValuePutOptionalParams,
  ) => Promise<void>;
}

export function getBooleanValue(context: ArrayContext) {
  return {
    get: (options?: BooleanValueGetOptionalParams) =>
      booleanValueGet(context, options),
    put: (body: boolean[], options?: BooleanValuePutOptionalParams) =>
      booleanValuePut(context, body, options),
  };
}

export function getBooleanValueOperations(
  context: ArrayContext,
): BooleanValueOperations {
  return {
    ...getBooleanValue(context),
  };
}
