// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { DifferentSpreadStringRecord } from "../../models/models.js";
import { get, put } from "../../api/spreadDifferentString/index.js";
import {
  SpreadDifferentStringGetOptionalParams,
  SpreadDifferentStringPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a SpreadDifferentString operations. */
export interface SpreadDifferentStringOperations {
  /** Get call */
  get: (
    options?: SpreadDifferentStringGetOptionalParams,
  ) => Promise<DifferentSpreadStringRecord>;
  /** Put operation */
  put: (
    body: DifferentSpreadStringRecord,
    options?: SpreadDifferentStringPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadDifferentString(context: AdditionalPropertiesContext) {
  return {
    get: (options?: SpreadDifferentStringGetOptionalParams) =>
      get(context, options),
    put: (
      body: DifferentSpreadStringRecord,
      options?: SpreadDifferentStringPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getSpreadDifferentStringOperations(
  context: AdditionalPropertiesContext,
): SpreadDifferentStringOperations {
  return {
    ...getSpreadDifferentString(context),
  };
}
