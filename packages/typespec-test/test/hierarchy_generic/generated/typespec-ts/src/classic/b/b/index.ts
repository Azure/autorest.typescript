// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { bbOp1 } from "../../../api/b/b/index.js";
import { FooContext } from "../../../api/FooContext.js";
import { BA } from "../../../models/models.js";
import { BBOp1Options } from "../../../models/options.js";

export interface BBOperations {
  b: {
    op1: (body: BA, options?: BBOp1Options) => Promise<void>;
  };
}

export function getBB(context: FooContext) {
  return {
    op1: (body: BA, options?: BBOp1Options) => bbOp1(context, body, options),
  };
}

export function getBBOperations(context: FooContext): BBOperations {
  return {
    b: getBB(context),
  };
}
