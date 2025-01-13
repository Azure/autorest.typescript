// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../api/fooContext.js";
import { op1 } from "../../api/b/index.js";
import { BA } from "../../models/models.js";
import { BOp1OptionalParams } from "../../api/options.js";
import { BCOperations, getBCOperations } from "./c/index.js";
import { BEOperations, getBEOperations } from "./e/index.js";

/** Interface representing a B operations. */
export interface BOperations {
  op1: (body: BA, options?: BOp1OptionalParams) => Promise<void>;
  c: BCOperations;
  e: BEOperations;
}

export function getB(context: FooContext) {
  return {
    op1: (body: BA, options?: BOp1OptionalParams) =>
      op1(context, body, options),
  };
}

export function getBOperations(context: FooContext): BOperations {
  return {
    ...getB(context),
    c: getBCOperations(context),
    e: getBEOperations(context),
  };
}
