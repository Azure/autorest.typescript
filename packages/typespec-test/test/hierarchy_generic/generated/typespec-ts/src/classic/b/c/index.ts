// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../../api/fooContext.js";
import { op1 } from "../../../api/b/c/operations.js";
import { BCOp1OptionalParams } from "../../../api/b/c/options.js";
import { BA } from "../../../models/b/models.js";

/** Interface representing a BC operations. */
export interface BCOperations {
  op1: (body: BA, options?: BCOp1OptionalParams) => Promise<void>;
}

function _getBC(context: FooContext) {
  return {
    op1: (body: BA, options?: BCOp1OptionalParams) =>
      op1(context, body, options),
  };
}

export function _getBCOperations(context: FooContext): BCOperations {
  return {
    ..._getBC(context),
  };
}
