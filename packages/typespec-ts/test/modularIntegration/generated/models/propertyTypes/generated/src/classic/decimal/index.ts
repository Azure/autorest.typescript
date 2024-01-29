// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { DecimalProperty } from "../../models/models.js";
import { decimalGet, decimalPut } from "../../api/decimal/index.js";
import { DecimalGetOptions, DecimalPutOptions } from "../../models/options.js";

export interface DecimalOperations {
  get: (options?: DecimalGetOptions) => Promise<DecimalProperty>;
  put: (body: DecimalProperty, options?: DecimalPutOptions) => Promise<void>;
}

export function getDecimal(context: ValueTypesContext) {
  return {
    get: (options?: DecimalGetOptions) => decimalGet(context, options),
    put: (body: DecimalProperty, options?: DecimalPutOptions) =>
      decimalPut(context, body, options),
  };
}

export function getDecimalOperations(
  context: ValueTypesContext,
): DecimalOperations {
  return {
    ...getDecimal(context),
  };
}
