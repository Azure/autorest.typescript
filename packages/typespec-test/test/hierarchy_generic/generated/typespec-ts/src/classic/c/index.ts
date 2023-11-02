// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FooContext } from "../../api/FooContext.js";
import { BA, BEA } from "../../models/models.js";
import { op1 } from "../../api/c/index.js";
import { COp1Options } from "../../models/options.js";

export interface COperations {
  op1: (body: BEA, options?: COp1Options) => Promise<void>;
  op1: (body: BA, options?: COp1Options) => Promise<void>;
}

export function getC(context: FooContext) {
  return {
    op1: (body: BEA, options?: COp1Options) => op1(context, body, options),
    op1: (body: BA, options?: COp1Options) => op1(context, body, options),
  };
}

export function getCOperations(context: FooContext): COperations {
  return {
    ...getC(context),
  };
}
