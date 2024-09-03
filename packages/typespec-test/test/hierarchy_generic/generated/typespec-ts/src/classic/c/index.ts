// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../api/fooContext.js";
import { BA, BEA } from "../../models/models.js";
import { cOp1 } from "../../api/c/index.js";
import { COp1OptionalParams } from "../../models/options.js";

/** Interface representing a C operations. */
export interface COperations {
  op1: (body: BEA, options?: COp1OptionalParams) => Promise<void>;
  op1: (body: BA, options?: COp1OptionalParams) => Promise<void>;
}

export function getC(context: FooContext) {
  return {
    op1: (body: BEA, options?: COp1OptionalParams) =>
      cOp1(context, body, options),
    op1: (body: BA, options?: COp1OptionalParams) =>
      cOp1(context, body, options),
  };
}

export function getCOperations(context: FooContext): COperations {
  return {
    ...getC(context),
  };
}
