// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { ModelForRecord } from "../../models/models.js";
import { get, put } from "../../api/spreadDifferentModelArray/index.js";
import {
  SpreadDifferentModelArrayGetOptionalParams,
  SpreadDifferentModelArrayPutOptionalParams,
} from "../../models/options.js";

export interface SpreadDifferentModelArrayOperations {
  get: (
    options?: SpreadDifferentModelArrayGetOptionalParams,
  ) => Promise<Record<string, ModelForRecord[]>>;
  put: (
    body: Record<string, ModelForRecord[]>,
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
      body: Record<string, ModelForRecord[]>,
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
