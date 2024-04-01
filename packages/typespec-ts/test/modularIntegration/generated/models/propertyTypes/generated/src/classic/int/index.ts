// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { IntProperty } from "../../models/models.js";
import { intGet, intPut } from "../../api/int/index.js";
import { IntGetOptions, IntPutOptions } from "../../models/options.js";

export interface IntOperations {
  get: (options?: IntGetOptions) => Promise<IntProperty>;
  put: (body: IntProperty, options?: IntPutOptions) => Promise<void>;
}

export function getInt(context: ValueTypesContext) {
  return {
    get: (options?: IntGetOptions) => intGet(context, options),
    put: (body: IntProperty, options?: IntPutOptions) =>
      intPut(context, body, options),
  };
}

export function getIntOperations(context: ValueTypesContext): IntOperations {
  return {
    ...getInt(context),
  };
}
