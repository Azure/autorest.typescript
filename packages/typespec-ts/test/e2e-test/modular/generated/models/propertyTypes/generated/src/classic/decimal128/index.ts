// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { Decimal128Property } from "../../models/models.js";
import { decimal128Get, decimal128Put } from "../../api/decimal128/index.js";
import {
  Decimal128GetOptionalParams,
  Decimal128PutOptionalParams,
} from "../../models/options.js";

export interface Decimal128Operations {
  get: (options?: Decimal128GetOptionalParams) => Promise<Decimal128Property>;
  put: (
    body: Decimal128Property,
    options?: Decimal128PutOptionalParams,
  ) => Promise<void>;
}

export function getDecimal128(context: ValueTypesContext) {
  return {
    get: (options?: Decimal128GetOptionalParams) =>
      decimal128Get(context, options),
    put: (body: Decimal128Property, options?: Decimal128PutOptionalParams) =>
      decimal128Put(context, body, options),
  };
}

export function getDecimal128Operations(
  context: ValueTypesContext,
): Decimal128Operations {
  return {
    ...getDecimal128(context),
  };
}
