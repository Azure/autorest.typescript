// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { IntProperty } from "../../models/models.js";
import { intGet, intPut } from "../../api/int/index.js";
import {
  IntGetOptionalParams,
  IntPutOptionalParams,
} from "../../models/options.js";

export interface IntOperations {
  get: (options?: IntGetOptionalParams) => Promise<IntProperty>;
  put: (body: IntProperty, options?: IntPutOptionalParams) => Promise<void>;
}

export function getInt(context: ValueTypesContext) {
  return {
    get: (options?: IntGetOptionalParams) => intGet(context, options),
    put: (body: IntProperty, options?: IntPutOptionalParams) =>
      intPut(context, body, options),
  };
}

export function getIntOperations(context: ValueTypesContext): IntOperations {
  return {
    ...getInt(context),
  };
}
