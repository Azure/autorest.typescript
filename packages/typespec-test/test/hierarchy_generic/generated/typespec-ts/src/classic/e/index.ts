// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../api/fooContext.js";
import { BEA } from "../../models/models.js";
import { eFoo } from "../../api/e/index.js";
import { EFooOptionalParams } from "../../models/options.js";

/** Interface representing a E operations. */
export interface EOperations {
  foo: (
    body: BEA,
    options?: EFooOptionalParams,
  ) => Promise<Record<string, any>>;
}

export function getE(context: FooContext) {
  return {
    foo: (body: BEA, options?: EFooOptionalParams) =>
      eFoo(context, body, options),
  };
}

export function getEOperations(context: FooContext): EOperations {
  return {
    ...getE(context),
  };
}
