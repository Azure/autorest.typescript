// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../api/fooContext.js";
import { cOp1 } from "../../api/c/index.js";
import { Ba, Bea } from "../../models/models.js";
import { COp1OptionalParams } from "../../api/options.js";

/** Interface representing a C operations. */
export interface COperations {
  op1: (body: Bea, options?: COp1OptionalParams) => Promise<void>;
  op1: (body: Ba, options?: COp1OptionalParams) => Promise<void>;
}

export function getC(context: FooContext) {
  return {
    op1: (body: Bea, options?: COp1OptionalParams) =>
      cOp1(context, body, options),
    op1: (body: Ba, options?: COp1OptionalParams) =>
      cOp1(context, body, options),
  };
}

export function getCOperations(context: FooContext): COperations {
  return {
    ...getC(context),
  };
}
