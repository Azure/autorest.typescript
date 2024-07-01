// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { SpreadModelArrayRecord } from "../../models/models.js";
import { get, put } from "../../api/spreadModelArray/index.js";
import {
  SpreadModelArrayGetOptionalParams,
  SpreadModelArrayPutOptionalParams,
} from "../../models/options.js";

/** Interface representing a SpreadModelArray operations. */
export interface SpreadModelArrayOperations {
  /** Get call */
  get: (
    options?: SpreadModelArrayGetOptionalParams,
  ) => Promise<SpreadModelArrayRecord>;
  /** Put operation */
  put: (
    body: SpreadModelArrayRecord,
    options?: SpreadModelArrayPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadModelArray(context: AdditionalPropertiesContext) {
  return {
    get: (options?: SpreadModelArrayGetOptionalParams) => get(context, options),
    put: (
      body: SpreadModelArrayRecord,
      options?: SpreadModelArrayPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getSpreadModelArrayOperations(
  context: AdditionalPropertiesContext,
): SpreadModelArrayOperations {
  return {
    ...getSpreadModelArray(context),
  };
}
