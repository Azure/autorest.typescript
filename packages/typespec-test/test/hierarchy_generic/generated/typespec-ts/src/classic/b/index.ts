// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FooContext } from "../../api/FooContext.js";
import { BA } from "../../models/models.js";
import { op1 } from "../../api/b/index.js";
import { BOp1Options } from "../../models/options.js";

export interface BOperations {
  op1: (body: BA, options?: BOp1Options) => Promise<void>;
}

export function getB(context: FooContext) {
  return {
    op1: (body: BA, options?: BOp1Options) => op1(context, body, options),
  };
}

export function getBOperations(context: FooContext): BOperations {
  return {
    ...getB(context),
  };
}
