// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../../../api/fooContext.js";
import { BEA } from "../../../../models/models.js";
import { opBEC } from "../../../../api/b/e/c/index.js";
import { BECOpBECOptionalParams } from "../../../../models/options.js";

/** Interface representing a BEC operations. */
export interface BECOperations {
  opBEC: (
    body: BEA,
    options?: BECOpBECOptionalParams,
  ) => Promise<Record<string, any>>;
}

export function getBEC(context: FooContext) {
  return {
    opBEC: (body: BEA, options?: BECOpBECOptionalParams) =>
      opBEC(context, body, options),
  };
}

export function getBECOperations(context: FooContext): BECOperations {
  return {
    ...getBEC(context),
  };
}
