// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../api/fooContext.js";
import { op1 } from "../../api/b/index.js";
import { Ba } from "../../models/b/models.js";
import { BOp1OptionalParams } from "../../api/options.js";
import { BCOperations, _getBCOperations } from "./c/index.js";
import { BEOperations, _getBEOperations } from "./e/index.js";

/** Interface representing a B operations. */
export interface BOperations {
  op1: (body: Ba, options?: BOp1OptionalParams) => Promise<void>;
  c: BCOperations;
  e: BEOperations;
}

function _getB(context: FooContext) {
  return {
    op1: (body: Ba, options?: BOp1OptionalParams) =>
      bOp1(context, body, options),
  };
}

export function _getBOperations(context: FooContext): BOperations {
  return {
    ..._getB(context),
    c: _getBCOperations(context),
    e: _getBEOperations(context),
  };
}
