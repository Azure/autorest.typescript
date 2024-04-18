// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { get, put } from "../../api/spreadFloat/index.js";
import {
  SpreadFloatGetOptionalParams,
  SpreadFloatPutOptionalParams,
} from "../../models/options.js";

export interface SpreadFloatOperations {
  get: (
    options?: SpreadFloatGetOptionalParams,
  ) => Promise<Record<string, number>>;
  put: (
    body: Record<string, number>,
    options?: SpreadFloatPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadFloat(context: AdditionalPropertiesContext) {
  return {
    get: (options?: SpreadFloatGetOptionalParams) => get(context, options),
    put: (
      body: Record<string, number>,
      options?: SpreadFloatPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getSpreadFloatOperations(
  context: AdditionalPropertiesContext,
): SpreadFloatOperations {
  return {
    ...getSpreadFloat(context),
  };
}
