// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FooContext } from "../../../../api/FooContext.js";
import { BEA } from "../../../../models/models.js";
import { op1 } from "../../../../api/b/e/c/index.js";
import { BECOp1Options } from "../../../../models/options.js";

export interface BECOperations {
  c: {
    op1: (body: BEA, options?: BECOp1Options) => Promise<void>;
  };
}

export function getBEC(context: FooContext) {
  return {
    op1: (body: BEA, options?: BECOp1Options) => op1(context, body, options),
  };
}

export function getBECOperations(context: FooContext): BECOperations {
  return {
    c: getBEC(context),
  };
}
