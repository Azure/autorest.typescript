// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FooContext } from "../../../api/FooContext.js";
import { BA } from "../../../models/models.js";
import { op1 } from "../../../api/b/c/index.js";
import { BCOp1Options } from "../../../models/options.js";

export interface BCOperations {
  c: {
    op1: (body: BA, options?: BCOp1Options) => Promise<void>;
  };
}

export function getBC(context: FooContext) {
  return {
    op1: (body: BA, options?: BCOp1Options) => op1(context, body, options),
  };
}

export function getBCOperations(context: FooContext): BCOperations {
  return {
    c: getBC(context),
  };
}
