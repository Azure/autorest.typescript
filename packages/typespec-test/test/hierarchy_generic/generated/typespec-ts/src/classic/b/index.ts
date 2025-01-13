// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../api/fooContext.js";
import { op1 } from "../../api/b/index.js";
import { Ba } from "../../models/models.js";
import { BOp1OptionalParams } from "../../api/options.js";
import { BCOperations, getBCOperations } from "./c/index.js";
import { BEOperations, getBEOperations } from "./e/index.js";

/** Interface representing a B operations. */
export interface BOperations {
  op1: (body: Ba, options?: BOp1OptionalParams) => Promise<void>;
  c: BCOperations;
  e: BEOperations;
}

function _getB(context: FooContext) {
  return {
    op1: (body: Ba, options?: BOp1OptionalParams) =>
      op1(context, body, options),
  };
}

export function getBOperations(context: FooContext): BOperations {
  return {
    ..._getB(context),
    c: getBCOperations(context),
    e: getBEOperations(context),
  };
}
