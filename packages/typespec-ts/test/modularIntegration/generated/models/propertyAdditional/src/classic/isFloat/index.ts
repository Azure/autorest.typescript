// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { get, put } from "../../api/isFloat/index.js";
import {
  IsFloatGetOptionalParams,
  IsFloatPutOptionalParams,
} from "../../models/options.js";

export interface IsFloatOperations {
  get: (options?: IsFloatGetOptionalParams) => Promise<Record<string, number>>;
  put: (
    body: Record<string, number>,
    options?: IsFloatPutOptionalParams,
  ) => Promise<void>;
}

export function getIsFloat(context: AdditionalPropertiesContext) {
  return {
    get: (options?: IsFloatGetOptionalParams) => get(context, options),
    put: (body: Record<string, number>, options?: IsFloatPutOptionalParams) =>
      put(context, body, options),
  };
}

export function getIsFloatOperations(
  context: AdditionalPropertiesContext,
): IsFloatOperations {
  return {
    ...getIsFloat(context),
  };
}
