// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { DifferentSpreadFloatRecord } from "../../models/models.js";
import { get, put } from "../../api/spreadDifferentFloat/index.js";
import {
  SpreadDifferentFloatGetOptionalParams,
  SpreadDifferentFloatPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a SpreadDifferentFloat operations. */
export interface SpreadDifferentFloatOperations {
  /** Get call */
  get: (
    options?: SpreadDifferentFloatGetOptionalParams,
  ) => Promise<DifferentSpreadFloatRecord>;
  /** Put operation */
  put: (
    body: DifferentSpreadFloatRecord,
    options?: SpreadDifferentFloatPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadDifferentFloat(context: AdditionalPropertiesContext) {
  return {
    get: (options?: SpreadDifferentFloatGetOptionalParams) =>
      get(context, options),
    put: (
      body: DifferentSpreadFloatRecord,
      options?: SpreadDifferentFloatPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getSpreadDifferentFloatOperations(
  context: AdditionalPropertiesContext,
): SpreadDifferentFloatOperations {
  return {
    ...getSpreadDifferentFloat(context),
  };
}
