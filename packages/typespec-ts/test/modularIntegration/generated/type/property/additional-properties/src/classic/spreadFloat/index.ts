// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { SpreadFloatRecord } from "../../models/models.js";
import { get, put } from "../../api/spreadFloat/index.js";
import {
  SpreadFloatGetOptionalParams,
  SpreadFloatPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a SpreadFloat operations. */
export interface SpreadFloatOperations {
  /** Get call */
  get: (options?: SpreadFloatGetOptionalParams) => Promise<SpreadFloatRecord>;
  /** Put operation */
  put: (
    body: SpreadFloatRecord,
    options?: SpreadFloatPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadFloat(context: AdditionalPropertiesContext) {
  return {
    get: (options?: SpreadFloatGetOptionalParams) => get(context, options),
    put: (body: SpreadFloatRecord, options?: SpreadFloatPutOptionalParams) =>
      put(context, body, options),
  };
}

export function getSpreadFloatOperations(
  context: AdditionalPropertiesContext,
): SpreadFloatOperations {
  return {
    ...getSpreadFloat(context),
  };
}
