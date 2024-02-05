// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/ScalarContext.js";
import { booleanGet, booleanPut } from "../../api/boolean/index.js";
import { BooleanGetOptions, BooleanPutOptions } from "../../models/options.js";

export interface BooleanOperations {
  get: (options?: BooleanGetOptions) => Promise<boolean>;
  put: (body: boolean, options?: BooleanPutOptions) => Promise<void>;
}

export function getBoolean(context: ScalarContext) {
  return {
    get: (options?: BooleanGetOptions) => booleanGet(context, options),
    put: (body: boolean, options?: BooleanPutOptions) =>
      booleanPut(context, body, options),
  };
}

export function getBooleanOperations(
  context: ScalarContext,
): BooleanOperations {
  return {
    ...getBoolean(context),
  };
}
