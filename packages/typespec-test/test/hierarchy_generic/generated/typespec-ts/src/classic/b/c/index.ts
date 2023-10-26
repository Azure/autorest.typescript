// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FooContext } from "../../../api/FooContext.js";
import { op1, Op1Options } from "../../../api/b/c/index.js";
import { BA } from "../../../models/models.js";

export interface BCOperations {
  c: {
    op1: (body: BA, options?: Op1Options) => Promise<void>;
  };
}

export function getBC(context: FooContext) {
  return {
    op1: (body: BA, options?: Op1Options) => op1(context, body, options),
  };
}

export function getBCOperations(context: FooContext): BCOperations {
  return {
    c: getBC(context),
  };
}
