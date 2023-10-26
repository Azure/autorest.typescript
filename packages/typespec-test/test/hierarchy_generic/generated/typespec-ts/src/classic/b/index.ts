// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { FooContext } from "../../api/FooContext.js";
import { BBOperations, getBBOperations } from "./b/index.js";
import { BCOperations, getBCOperations } from "./c/index.js";
import { BEOperations, getBEOperations } from "./e/index.js";

export interface BOperations {
  b: BBOperations;
  e: BEOperations;
  c: BCOperations;
}

export function getBOperations(context: FooContext): BOperations {
  return {
    b: getBBOperations(context),
    e: getBEOperations(context),
    c: getBCOperations(context),
  };
}
