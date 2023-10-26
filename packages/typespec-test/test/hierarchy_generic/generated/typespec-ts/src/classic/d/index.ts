// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FooContext } from "../../api/FooContext.js";
import { op1, Op1Options } from "../../api/d/index.js";
import { A } from "../../models/models.js";

export interface DOperations {
  d: {
    op1: (body: A, options?: Op1Options) => Promise<void>;
  };
}

export function getD(context: FooContext) {
  return {
    op1: (body: A, options?: Op1Options) => op1(context, body, options),
  };
}

export function getDOperations(context: FooContext): DOperations {
  return {
    d: getD(context),
  };
}
