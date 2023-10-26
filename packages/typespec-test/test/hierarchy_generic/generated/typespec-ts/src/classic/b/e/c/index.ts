// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FooContext } from "../../../../api/FooContext.js";
import { op1, Op1Options } from "../../../../api/b/e/c/index.js";
import { BEA } from "../../../../models/models.js";

export interface BECOperations {
  c: {
    op1: (body: BEA, options?: Op1Options) => Promise<void>;
  };
}

export function getBEC(context: FooContext) {
  return {
    op1: (body: BEA, options?: Op1Options) => op1(context, body, options),
  };
}

export function getBECOperations(context: FooContext): BECOperations {
  return {
    c: getBEC(context),
  };
}
