// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { IsModelArrayAdditionalProperties } from "../../models/models.js";
import { get, put } from "../../api/isModelArray/index.js";
import {
  IsModelArrayGetOptionalParams,
  IsModelArrayPutOptionalParams,
} from "../../models/options.js";

export interface IsModelArrayOperations {
  get: (
    options?: IsModelArrayGetOptionalParams,
  ) => Promise<IsModelArrayAdditionalProperties>;
  put: (
    body: IsModelArrayAdditionalProperties,
    options?: IsModelArrayPutOptionalParams,
  ) => Promise<void>;
}

export function getIsModelArray(context: AdditionalPropertiesContext) {
  return {
    get: (options?: IsModelArrayGetOptionalParams) => get(context, options),
    put: (
      body: IsModelArrayAdditionalProperties,
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
