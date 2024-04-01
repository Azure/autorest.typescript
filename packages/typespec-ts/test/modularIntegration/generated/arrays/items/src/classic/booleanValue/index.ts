// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import {
  booleanValueGet,
  booleanValuePut,
} from "../../api/booleanValue/index.js";
import {
  BooleanValueGetOptions,
  BooleanValuePutOptions,
} from "../../models/options.js";

export interface BooleanValueOperations {
  get: (options?: BooleanValueGetOptions) => Promise<boolean[]>;
  put: (body: boolean[], options?: BooleanValuePutOptions) => Promise<void>;
}

export function getBooleanValue(context: ArrayContext) {
  return {
    get: (options?: BooleanValueGetOptions) =>
      booleanValueGet(context, options),
    put: (body: boolean[], options?: BooleanValuePutOptions) =>
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
