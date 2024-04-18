// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { ModelForRecord } from "../../models/models.js";
import { get, put } from "../../api/spreadModelArray/index.js";
import {
  SpreadModelArrayGetOptionalParams,
  SpreadModelArrayPutOptionalParams,
} from "../../models/options.js";

export interface SpreadModelArrayOperations {
  get: (
    options?: SpreadModelArrayGetOptionalParams,
  ) => Promise<Record<string, ModelForRecord[]>>;
  put: (
    body: Record<string, ModelForRecord[]>,
    options?: SpreadModelArrayPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadModelArray(context: AdditionalPropertiesContext) {
  return {
    get: (options?: SpreadModelArrayGetOptionalParams) => get(context, options),
    put: (
      body: Record<string, ModelForRecord[]>,
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
