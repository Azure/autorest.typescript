// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../api/fooContext.js";
import { A } from "../../models/models.js";
import { bFoo } from "../../api/b/index.js";
import { BFooOptionalParams } from "../../models/options.js";

/** Interface representing a B operations. */
export interface BOperations {
  foo: (body: A, options?: BFooOptionalParams) => Promise<Record<string, any>>;
}

export function getB(context: FooContext) {
  return {
    foo: (body: A, options?: BFooOptionalParams) =>
      bFoo(context, body, options),
  };
}

export function getBOperations(context: FooContext): BOperations {
  return {
    ...getB(context),
  };
}
