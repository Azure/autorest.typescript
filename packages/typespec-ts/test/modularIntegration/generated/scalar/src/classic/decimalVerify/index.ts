// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/ScalarContext.js";
import {
  decimalVerifyPrepareVerify,
  decimalVerifyVerify,
} from "../../api/decimalVerify/index.js";
import { PrepareVerifyOptions, VerifyOptions } from "../../models/options.js";

export interface DecimalVerifyOperations {
  prepareVerify: (options?: PrepareVerifyOptions) => Promise<number[]>;
  verify: (body: number, options?: VerifyOptions) => Promise<void>;
}

export function getDecimalVerify(context: ScalarContext) {
  return {
    prepareVerify: (options?: PrepareVerifyOptions) =>
      decimalVerifyPrepareVerify(context, options),
    verify: (body: number, options?: VerifyOptions) =>
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
