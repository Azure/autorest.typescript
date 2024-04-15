// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { DecimalProperty } from "../../models/models.js";
import { decimalGet, decimalPut } from "../../api/decimal/index.js";
import {
  DecimalGetOptionalParams,
  DecimalPutOptionalParams,
} from "../../models/options.js";

export interface DecimalOperations {
  get: (options?: DecimalGetOptionalParams) => Promise<DecimalProperty>;
  put: (
    body: DecimalProperty,
    options?: DecimalPutOptionalParams,
  ) => Promise<void>;
}

export function getDecimal(context: ValueTypesContext) {
  return {
    get: (options?: DecimalGetOptionalParams) => decimalGet(context, options),
    put: (body: DecimalProperty, options?: DecimalPutOptionalParams) =>
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
