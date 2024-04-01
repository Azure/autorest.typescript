// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { Decimal128Property } from "../../models/models.js";
import { decimal128Get, decimal128Put } from "../../api/decimal128/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface Decimal128Operations {
  get: (options?: GetOptions) => Promise<Decimal128Property>;
  put: (body: Decimal128Property, options?: PutOptions) => Promise<void>;
}

export function getDecimal128(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => decimal128Get(context, options),
    put: (body: Decimal128Property, options?: PutOptions) =>
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
