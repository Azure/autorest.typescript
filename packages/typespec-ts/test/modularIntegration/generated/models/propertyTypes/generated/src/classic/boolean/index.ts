// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { BooleanProperty } from "../../models/models.js";
import { booleanGet, booleanPut } from "../../api/boolean/index.js";
import { BooleanGetOptions, BooleanPutOptions } from "../../models/options.js";

export interface BooleanOperations {
  get: (options?: BooleanGetOptions) => Promise<BooleanProperty>;
  put: (body: BooleanProperty, options?: BooleanPutOptions) => Promise<void>;
}

export function getBoolean(context: ValueTypesContext) {
  return {
    get: (options?: BooleanGetOptions) => booleanGet(context, options),
    put: (body: BooleanProperty, options?: BooleanPutOptions) =>
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
