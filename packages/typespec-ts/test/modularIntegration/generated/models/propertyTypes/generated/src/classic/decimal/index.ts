// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { DecimalProperty } from "../../models/models.js";
import { decimalGet, decimalPut } from "../../api/decimal/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface DecimalOperations {
  get: (options?: GetOptions) => Promise<DecimalProperty>;
  put: (body: DecimalProperty, options?: PutOptions) => Promise<void>;
}

export function getDecimal(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => decimalGet(context, options),
    put: (body: DecimalProperty, options?: PutOptions) =>
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
