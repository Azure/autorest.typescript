// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/ScalarContext.js";
import {
  decimal128VerifyPrepareVerify,
  decimal128VerifyVerify,
} from "../../api/decimal128Verify/index.js";
import {
  Decimal128VerifyPrepareVerifyOptions,
  Decimal128VerifyVerifyOptions,
} from "../../models/options.js";

export interface Decimal128VerifyOperations {
  prepareVerify: (
    options?: Decimal128VerifyPrepareVerifyOptions,
  ) => Promise<number[]>;
  verify: (
    body: number,
    options?: Decimal128VerifyVerifyOptions,
  ) => Promise<void>;
}

export function getDecimal128Verify(context: ScalarContext) {
  return {
    prepareVerify: (options?: Decimal128VerifyPrepareVerifyOptions) =>
      decimal128VerifyPrepareVerify(context, options),
    verify: (body: number, options?: Decimal128VerifyVerifyOptions) =>
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
