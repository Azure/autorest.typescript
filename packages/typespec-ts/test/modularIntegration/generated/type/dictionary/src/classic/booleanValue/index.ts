// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/dictionaryContext.js";
import { get, put } from "../../api/booleanValue/index.js";
import {
  BooleanValueGetOptionalParams,
  BooleanValuePutOptionalParams,
} from "../../models/options.js";

export interface BooleanValueOperations {
  get: (
    options?: BooleanValueGetOptionalParams,
  ) => Promise<Record<string, boolean>>;
  put: (
    body: Record<string, boolean>,
    options?: BooleanValuePutOptionalParams,
  ) => Promise<void>;
}

export function getBooleanValue(context: DictionaryContext) {
  return {
    get: (options?: BooleanValueGetOptionalParams) => get(context, options),
    put: (
      body: Record<string, boolean>,
      options?: BooleanValuePutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getBooleanValueOperations(
  context: DictionaryContext,
): BooleanValueOperations {
  return {
    ...getBooleanValue(context),
  };
}
