// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../api/fooContext.js";
import { A } from "../../models/models.js";
import { foo } from "../../api/b/index.js";
import { BFooOptionalParams } from "../../models/options.js";
import { BEOperations, getBEOperations } from "./e/index.js";

/** Interface representing a B operations. */
export interface BOperations {
  foo: (body: A, options?: BFooOptionalParams) => Promise<Record<string, any>>;
  e: BEOperations;
  e: BEOperations;
}

export function getB(context: FooContext) {
  return {
    foo: (body: A, options?: BFooOptionalParams) => foo(context, body, options),
  };
}

export function getBOperations(context: FooContext): BOperations {
  return {
    ...getB(context),
    e: getBEOperations(context),
    e: getBEOperations(context),
  };
}
