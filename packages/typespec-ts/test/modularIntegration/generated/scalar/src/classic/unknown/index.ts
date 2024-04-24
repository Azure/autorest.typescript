// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/scalarContext.js";
import { unknownGet, unknownPut } from "../../api/unknown/index.js";
import {
  UnknownGetOptionalParams,
  UnknownPutOptionalParams,
} from "../../models/options.js";

export interface UnknownOperations {
  get: (options?: UnknownGetOptionalParams) => Promise<unknown>;
  put: (body: unknown, options?: UnknownPutOptionalParams) => Promise<void>;
}

export function getUnknown(context: ScalarContext) {
  return {
    get: (options?: UnknownGetOptionalParams) => unknownGet(context, options),
    put: (body: unknown, options?: UnknownPutOptionalParams) =>
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
