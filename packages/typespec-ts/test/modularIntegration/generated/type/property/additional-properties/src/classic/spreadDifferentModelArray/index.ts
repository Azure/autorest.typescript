// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { DifferentSpreadModelArrayRecord } from "../../models/models.js";
import { get, put } from "../../api/spreadDifferentModelArray/index.js";
import {
  SpreadDifferentModelArrayGetOptionalParams,
  SpreadDifferentModelArrayPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a SpreadDifferentModelArray operations. */
export interface SpreadDifferentModelArrayOperations {
  /** Get call */
  get: (
    options?: SpreadDifferentModelArrayGetOptionalParams,
  ) => Promise<DifferentSpreadModelArrayRecord>;
  /** Put operation */
  put: (
    body: DifferentSpreadModelArrayRecord,
    options?: SpreadDifferentModelArrayPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadDifferentModelArray(
  context: AdditionalPropertiesContext,
) {
  return {
    get: (options?: SpreadDifferentModelArrayGetOptionalParams) =>
      get(context, options),
    put: (
      body: DifferentSpreadModelArrayRecord,
      options?: SpreadDifferentModelArrayPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getSpreadDifferentModelArrayOperations(
  context: AdditionalPropertiesContext,
): SpreadDifferentModelArrayOperations {
  return {
    ...getSpreadDifferentModelArray(context),
  };
}
