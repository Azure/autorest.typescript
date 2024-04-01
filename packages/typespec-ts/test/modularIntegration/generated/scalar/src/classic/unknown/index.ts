// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/ScalarContext.js";
import { unknownGet, unknownPut } from "../../api/unknown/index.js";
import { UnknownGetOptions, UnknownPutOptions } from "../../models/options.js";

export interface UnknownOperations {
  get: (options?: UnknownGetOptions) => Promise<unknown>;
  put: (body: unknown, options?: UnknownPutOptions) => Promise<void>;
}

export function getUnknown(context: ScalarContext) {
  return {
    get: (options?: UnknownGetOptions) => unknownGet(context, options),
    put: (body: unknown, options?: UnknownPutOptions) =>
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
