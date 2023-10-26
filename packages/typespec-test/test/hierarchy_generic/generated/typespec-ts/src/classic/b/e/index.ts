// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FooContext } from "../../../api/FooContext.js";
import { BECOperations, getBECOperations } from "./c/index.js";

export interface BEOperations {
  c: BECOperations;
}

export function getBEOperations(context: FooContext): BEOperations {
  return {
    c: getBECOperations(context),
  };
}
