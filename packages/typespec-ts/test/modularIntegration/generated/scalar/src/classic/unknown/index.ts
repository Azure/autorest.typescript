// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/ScalarContext.js";
import { unknownGet, unknownPut } from "../../api/unknown/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface UnknownOperations {
  get: (options?: GetOptions) => Promise<unknown>;
  put: (body: unknown, options?: PutOptions) => Promise<void>;
}

export function getUnknown(context: ScalarContext) {
  return {
    get: (options?: GetOptions) => unknownGet(context, options),
    put: (body: unknown, options?: PutOptions) =>
      unknownPut(context, body, options),
  };
}

export function getUnknownOperations(
  context: ScalarContext,
): UnknownOperations {
  return {
    ...getUnknown(context),
  };
}
