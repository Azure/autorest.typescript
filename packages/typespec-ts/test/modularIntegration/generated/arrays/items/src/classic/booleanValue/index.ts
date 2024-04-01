// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import {
  booleanValueGet,
  booleanValuePut,
} from "../../api/booleanValue/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface BooleanValueOperations {
  get: (options?: GetOptions) => Promise<boolean[]>;
  put: (body: boolean[], options?: PutOptions) => Promise<void>;
}

export function getBooleanValue(context: ArrayContext) {
  return {
    get: (options?: GetOptions) => booleanValueGet(context, options),
    put: (body: boolean[], options?: PutOptions) =>
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
