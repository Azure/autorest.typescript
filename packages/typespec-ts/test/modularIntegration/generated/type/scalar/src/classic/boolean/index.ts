// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/scalarContext.js";
import { booleanGet, booleanPut } from "../../api/boolean/index.js";
import {
  BooleanGetOptionalParams,
  BooleanPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a Boolean operations. */
export interface BooleanOperations {
  /** get boolean value */
  get: (options?: BooleanGetOptionalParams) => Promise<boolean>;
  /** put boolean value */
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
