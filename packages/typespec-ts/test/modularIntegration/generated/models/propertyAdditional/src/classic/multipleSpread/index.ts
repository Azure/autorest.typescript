// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { get, put } from "../../api/multipleSpread/index.js";
import {
  MultipleSpreadGetOptionalParams,
  MultipleSpreadPutOptionalParams,
} from "../../models/options.js";

export interface MultipleSpreadOperations {
  get: (
    options?: MultipleSpreadGetOptionalParams,
  ) => Promise<Record<string, string | number>>;
  put: (
    body: Record<string, string | number>,
    options?: MultipleSpreadPutOptionalParams,
  ) => Promise<void>;
}

export function getMultipleSpread(context: AdditionalPropertiesContext) {
  return {
    get: (options?: MultipleSpreadGetOptionalParams) => get(context, options),
    put: (
      body: Record<string, string | number>,
      options?: MultipleSpreadPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getMultipleSpreadOperations(
  context: AdditionalPropertiesContext,
): MultipleSpreadOperations {
  return {
    ...getMultipleSpread(context),
  };
}
