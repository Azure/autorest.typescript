// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { BooleanProperty } from "../../models/models.js";
import { booleanGet, booleanPut } from "../../api/boolean/index.js";
import {
  BooleanGetOptionalParams,
  BooleanPutOptionalParams,
} from "../../models/options.js";

export interface BooleanOperations {
  get: (options?: BooleanGetOptionalParams) => Promise<BooleanProperty>;
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
