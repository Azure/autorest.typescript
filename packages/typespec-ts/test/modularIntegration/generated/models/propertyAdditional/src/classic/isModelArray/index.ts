// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { ModelForRecord } from "../../models/models.js";
import { get, put } from "../../api/isModelArray/index.js";
import {
  IsModelArrayGetOptionalParams,
  IsModelArrayPutOptionalParams,
} from "../../models/options.js";

export interface IsModelArrayOperations {
  get: (
    options?: IsModelArrayGetOptionalParams,
  ) => Promise<Record<string, ModelForRecord[]>>;
  put: (
    body: Record<string, ModelForRecord[]>,
    options?: IsModelArrayPutOptionalParams,
  ) => Promise<void>;
}

export function getIsModelArray(context: AdditionalPropertiesContext) {
  return {
    get: (options?: IsModelArrayGetOptionalParams) => get(context, options),
    put: (
      body: Record<string, ModelForRecord[]>,
      options?: IsModelArrayPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getIsModelArrayOperations(
  context: AdditionalPropertiesContext,
): IsModelArrayOperations {
  return {
    ...getIsModelArray(context),
  };
}
