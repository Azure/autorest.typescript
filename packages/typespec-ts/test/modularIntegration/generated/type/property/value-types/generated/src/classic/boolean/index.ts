// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { BooleanProperty } from "../../models/models.js";
import { booleanGet, booleanPut } from "../../api/boolean/index.js";
import {
  BooleanGetOptionalParams,
  BooleanPutOptionalParams,
} from "../../models/options.js";

/** Interface representing a Boolean operations. */
export interface BooleanOperations {
  /** Get call */
  get: (options?: BooleanGetOptionalParams) => Promise<BooleanProperty>;
  /** Put operation */
  put: (
    body: BooleanProperty,
    options?: BooleanPutOptionalParams,
  ) => Promise<void>;
}

export function getBoolean(context: ValueTypesContext) {
  return {
    get: (options?: BooleanGetOptionalParams) => booleanGet(context, options),
    put: (body: BooleanProperty, options?: BooleanPutOptionalParams) =>
      booleanPut(context, body, options),
  };
}

export function getBooleanOperations(
  context: ValueTypesContext,
): BooleanOperations {
  return {
    ...getBoolean(context),
  };
}
