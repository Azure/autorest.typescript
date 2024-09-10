// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../api/fooContext.js";
import { BEA } from "../../models/models.js";
import { cOpBEC } from "../../api/c/index.js";
import { COpBECOptionalParams } from "../../models/options.js";

/** Interface representing a C operations. */
export interface COperations {
  opBEC: (
    body: BEA,
    options?: COpBECOptionalParams,
  ) => Promise<Record<string, any>>;
}

export function getC(context: FooContext) {
  return {
    opBEC: (body: BEA, options?: COpBECOptionalParams) =>
      cOpBEC(context, body, options),
  };
}

export function getCOperations(context: FooContext): COperations {
  return {
    ...getC(context),
  };
}
