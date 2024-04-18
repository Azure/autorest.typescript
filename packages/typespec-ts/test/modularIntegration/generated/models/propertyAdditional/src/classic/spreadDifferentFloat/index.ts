// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { get, put } from "../../api/spreadDifferentFloat/index.js";
import {
  SpreadDifferentFloatGetOptionalParams,
  SpreadDifferentFloatPutOptionalParams,
} from "../../models/options.js";

export interface SpreadDifferentFloatOperations {
  get: (
    options?: SpreadDifferentFloatGetOptionalParams,
  ) => Promise<Record<string, number>>;
  put: (
    body: Record<string, number>,
    options?: SpreadDifferentFloatPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadDifferentFloat(context: AdditionalPropertiesContext) {
  return {
    get: (options?: SpreadDifferentFloatGetOptionalParams) =>
      get(context, options),
    put: (
      body: Record<string, number>,
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
