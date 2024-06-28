// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScalarContext } from "../../api/scalarContext.js";
import { unknownGet, unknownPut } from "../../api/unknown/index.js";
import {
  UnknownGetOptionalParams,
  UnknownPutOptionalParams,
} from "../../models/options.js";

/** Interface representing a Unknown operations. */
export interface UnknownOperations {
  /** get unknown value */
  get: (options?: UnknownGetOptionalParams) => Promise<any>;
  /** put unknown value */
  put: (body: any, options?: UnknownPutOptionalParams) => Promise<void>;
}

export function getUnknown(context: ScalarContext) {
  return {
    get: (options?: UnknownGetOptionalParams) => unknownGet(context, options),
    put: (body: any, options?: UnknownPutOptionalParams) =>
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
