// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../../../api/fooContext.js";
import { op1 } from "../../../../api/b/e/c/index.js";
import { Bea } from "../../../../models/b/e/models.js";
import { BECOp1OptionalParams } from "../../../../api/options.js";

/** Interface representing a BEC operations. */
export interface BECOperations {
  op1: (body: Bea, options?: BECOp1OptionalParams) => Promise<void>;
}

function _getBEC(context: FooContext) {
  return {
    op1: (body: Bea, options?: BECOp1OptionalParams) =>
      op1(context, body, options),
  };
}

export function getBECOperations(context: FooContext): BECOperations {
  return {
    ..._getBEC(context),
  };
}
