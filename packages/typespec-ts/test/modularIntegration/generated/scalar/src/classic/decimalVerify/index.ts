// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/ScalarContext.js";
import {
  decimalVerifyPrepareVerify,
  decimalVerifyVerify,
} from "../../api/decimalVerify/index.js";
import {
  DecimalVerifyPrepareVerifyOptions,
  DecimalVerifyVerifyOptions,
} from "../../models/options.js";

export interface DecimalVerifyOperations {
  prepareVerify: (
    options?: DecimalVerifyPrepareVerifyOptions,
  ) => Promise<number[]>;
  verify: (body: number, options?: DecimalVerifyVerifyOptions) => Promise<void>;
}

export function getDecimalVerify(context: ScalarContext) {
  return {
    prepareVerify: (options?: DecimalVerifyPrepareVerifyOptions) =>
      decimalVerifyPrepareVerify(context, options),
    verify: (body: number, options?: DecimalVerifyVerifyOptions) =>
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
