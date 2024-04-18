// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { DifferentSpreadStringRecord } from "../../models/models.js";
import { get, put } from "../../api/spreadDifferentString/index.js";
import {
  SpreadDifferentStringGetOptionalParams,
  SpreadDifferentStringPutOptionalParams,
} from "../../models/options.js";

export interface SpreadDifferentStringOperations {
  get: (
    options?: SpreadDifferentStringGetOptionalParams,
  ) => Promise<DifferentSpreadStringRecord>;
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
