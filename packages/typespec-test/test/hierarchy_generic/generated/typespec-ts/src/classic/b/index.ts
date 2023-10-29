// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FooContext } from "../../api/FooContext.js";
import { BA } from "../../models/models.js";
import { op1 } from "../../api/b/index.js";
import { BOp1Options } from "../../models/options.js";
import { BCOperations, getBCOperations } from "./c/index.js";
import { BEOperations, getBEOperations } from "./e/index.js";

export interface BOperations {
  b: {
    op1: (body: BA, options?: BOp1Options) => Promise<void>;
  };
  e: BEOperations;
  c: BCOperations;
}

export function getB(context: FooContext) {
  return {
    op1: (body: BA, options?: BOp1Options) => op1(context, body, options),
  };
}

export function getBOperations(context: FooContext): BOperations {
  return {
    b: getB(context),
    e: getBEOperations(context),
    c: getBCOperations(context),
  };
}
