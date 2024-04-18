// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { get, put } from "../../api/spreadDifferentString/index.js";
import {
  SpreadDifferentStringGetOptionalParams,
  SpreadDifferentStringPutOptionalParams,
} from "../../models/options.js";

export interface SpreadDifferentStringOperations {
  get: (
    options?: SpreadDifferentStringGetOptionalParams,
  ) => Promise<Record<string, string>>;
  put: (
    body: Record<string, string>,
    options?: SpreadDifferentStringPutOptionalParams,
  ) => Promise<void>;
}

export function getSpreadDifferentString(context: AdditionalPropertiesContext) {
  return {
    get: (options?: SpreadDifferentStringGetOptionalParams) =>
      get(context, options),
    put: (
      body: Record<string, string>,
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
