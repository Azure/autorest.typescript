// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/scalarContext.js";
import {
  decimalVerifyPrepareVerify,
  decimalVerifyVerify,
} from "../../api/decimalVerify/index.js";
import {
  DecimalVerifyPrepareVerifyOptionalParams,
  DecimalVerifyVerifyOptionalParams,
} from "../../models/options.js";

export interface DecimalVerifyOperations {
  prepareVerify: (
    options?: DecimalVerifyPrepareVerifyOptionalParams,
  ) => Promise<number[]>;
  verify: (
    body: number,
    options?: DecimalVerifyVerifyOptionalParams,
  ) => Promise<void>;
}

export function getDecimalVerify(context: ScalarContext) {
  return {
    prepareVerify: (options?: DecimalVerifyPrepareVerifyOptionalParams) =>
      decimalVerifyPrepareVerify(context, options),
    verify: (body: number, options?: DecimalVerifyVerifyOptionalParams) =>
      decimalVerifyVerify(context, body, options),
  };
}

export function getDecimalVerifyOperations(
  context: ScalarContext,
): DecimalVerifyOperations {
  return {
    ...getDecimalVerify(context),
  };
}
