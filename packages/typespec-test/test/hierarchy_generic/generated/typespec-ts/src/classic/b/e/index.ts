// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../../api/fooContext.js";
import { BECOperations, getBECOperations } from "./c/index.js";

/** Interface representing a BE operations. */
export interface BEOperations {
  c: BECOperations;
}

export function getBEOperations(context: FooContext): BEOperations {
  return {
    c: getBECOperations(context),
  };
}
