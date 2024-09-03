// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../api/fooContext.js";
import { BA } from "../../models/models.js";
import { bOp1 } from "../../api/b/index.js";
import { BOp1OptionalParams } from "../../models/options.js";

/** Interface representing a B operations. */
export interface BOperations {
  op1: (body: BA, options?: BOp1OptionalParams) => Promise<void>;
}

export function getB(context: FooContext) {
  return {
    op1: (body: BA, options?: BOp1OptionalParams) =>
      bOp1(context, body, options),
  };
}

export function getBOperations(context: FooContext): BOperations {
  return {
    ...getB(context),
  };
}
