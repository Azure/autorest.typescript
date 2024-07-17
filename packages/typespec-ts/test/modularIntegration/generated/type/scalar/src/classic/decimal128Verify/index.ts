// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/scalarContext.js";
import {
  decimal128VerifyPrepareVerify,
  decimal128VerifyVerify,
} from "../../api/decimal128Verify/index.js";
import {
  Decimal128VerifyPrepareVerifyOptionalParams,
  Decimal128VerifyVerifyOptionalParams,
} from "../../api/options.js";

/** Interface representing a Decimal128Verify operations. */
export interface Decimal128VerifyOperations {
  prepareVerify: (
    options?: Decimal128VerifyPrepareVerifyOptionalParams,
  ) => Promise<number[]>;
  verify: (
    body: number,
    options?: Decimal128VerifyVerifyOptionalParams,
  ) => Promise<void>;
}

export function getDecimal128Verify(context: ScalarContext) {
  return {
    prepareVerify: (options?: Decimal128VerifyPrepareVerifyOptionalParams) =>
      decimal128VerifyPrepareVerify(context, options),
    verify: (body: number, options?: Decimal128VerifyVerifyOptionalParams) =>
      decimal128VerifyVerify(context, body, options),
  };
}

export function getDecimal128VerifyOperations(
  context: ScalarContext,
): Decimal128VerifyOperations {
  return {
    ...getDecimal128Verify(context),
  };
}
