// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../api/fooContext.js";
import { BA } from "../../models/b/models.js";
import { BOp1OptionalParams } from "../../api/b/options.js";
import { op1 } from "../../api/b/operations.js";

/** Interface representing a B operations. */
export interface BOperations {
  op1: (body: BA, options?: BOp1OptionalParams) => Promise<void>;
  c: BCOperations;
  e: BEOperations;
}

function _getB(context: FooContext) {
  return {
    op1: (body: BA, options?: BOp1OptionalParams) =>
      op1(context, body, options),
  };
}

export function _getBOperations(context: FooContext): BOperations {
  return {
    ..._getB(context),
    c: _getBCOperations(context),
    e: _getBEOperations(context),
  };
}
