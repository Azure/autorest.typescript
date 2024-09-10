// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../../api/fooContext.js";
import { BEA } from "../../../models/models.js";
import { foo } from "../../../api/b/e/index.js";
import { BEFooOptionalParams } from "../../../models/options.js";
import { BECOperations, getBECOperations } from "./c/index.js";

/** Interface representing a BE operations. */
export interface BEOperations {
  foo: (
    body: BEA,
    options?: BEFooOptionalParams,
  ) => Promise<Record<string, any>>;
  c: BECOperations;
}

export function getBE(context: FooContext) {
  return {
    foo: (body: BEA, options?: BEFooOptionalParams) =>
      foo(context, body, options),
  };
}

export function getBEOperations(context: FooContext): BEOperations {
  return {
    ...getBE(context),
    c: getBECOperations(context),
  };
}
