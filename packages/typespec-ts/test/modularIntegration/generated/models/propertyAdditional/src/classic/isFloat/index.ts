// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { IsFloatAdditionalProperties } from "../../models/models.js";
import { get, put } from "../../api/isFloat/index.js";
import {
  IsFloatGetOptionalParams,
  IsFloatPutOptionalParams,
} from "../../models/options.js";

export interface IsFloatOperations {
  get: (
    options?: IsFloatGetOptionalParams,
  ) => Promise<IsFloatAdditionalProperties>;
  put: (
    body: IsFloatAdditionalProperties,
    options?: IsFloatPutOptionalParams,
  ) => Promise<void>;
}

export function getIsFloat(context: AdditionalPropertiesContext) {
  return {
    get: (options?: IsFloatGetOptionalParams) => get(context, options),
    put: (
      body: IsFloatAdditionalProperties,
      options?: IsFloatPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getIsFloatOperations(
  context: AdditionalPropertiesContext,
): IsFloatOperations {
  return {
    ...getIsFloat(context),
  };
}
