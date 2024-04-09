// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/ScalarContext.js";
import { booleanGet, booleanPut } from "../../api/boolean/index.js";
import {
  BooleanGetOptionalParams,
  BooleanPutOptionalParams,
} from "../../models/options.js";

export interface BooleanOperations {
  get: (options?: BooleanGetOptionalParams) => Promise<boolean>;
  put: (body: boolean, options?: BooleanPutOptionalParams) => Promise<void>;
}

export function getBoolean(context: ScalarContext) {
  return {
    get: (options?: BooleanGetOptionalParams) => booleanGet(context, options),
    put: (body: boolean, options?: BooleanPutOptionalParams) =>
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
