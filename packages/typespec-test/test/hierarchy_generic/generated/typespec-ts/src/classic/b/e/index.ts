// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../../api/fooContext.js";
import { BECOperations, _getBECOperations } from "./c/index.js";

/** Interface representing a BE operations. */
export interface BEOperations {
  c: BECOperations;
}

export function _getBEOperations(context: FooContext): BEOperations {
  return {
    c: _getBECOperations(context),
  };
}
