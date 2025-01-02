// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../../../api/fooContext.js";
import { op1 } from "../../../../api/b/e/c/index.js";
import { BEA } from "../../../../models/models.js";
import { BECOp1OptionalParams } from "../../../../api/options.js";

/** Interface representing a BEC operations. */
export interface BECOperations {
  op1: (body: BEA, options?: BECOp1OptionalParams) => Promise<void>;
}

export function getBEC(context: FooContext) {
  return {
    op1: (body: BEA, options?: BECOp1OptionalParams) =>
      op1(context, body, options),
  };
}

export function getBECOperations(context: FooContext): BECOperations {
  return {
    ...getBEC(context),
  };
}
