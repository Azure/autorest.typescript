// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../../api/fooContext.js";
import { op1, BCOp1OptionalParams } from "../../../api/b/c/index.js";
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
