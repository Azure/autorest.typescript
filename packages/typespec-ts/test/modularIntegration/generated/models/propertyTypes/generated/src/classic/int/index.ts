// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { IntProperty } from "../../models/models.js";
import { intGet, intPut } from "../../api/int/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface IntOperations {
  get: (options?: GetOptions) => Promise<IntProperty>;
  put: (body: IntProperty, options?: PutOptions) => Promise<void>;
}

export function getInt(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => intGet(context, options),
    put: (body: IntProperty, options?: PutOptions) =>
      intPut(context, body, options),
  };
}

export function getIntOperations(context: ValueTypesContext): IntOperations {
  return {
    ...getInt(context),
  };
}
