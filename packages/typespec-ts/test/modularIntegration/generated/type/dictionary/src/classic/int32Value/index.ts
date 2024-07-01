// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/dictionaryContext.js";
import { get, put } from "../../api/int32Value/index.js";
import {
  Int32ValueGetOptionalParams,
  Int32ValuePutOptionalParams,
} from "../../models/options.js";

/** Interface representing a Int32Value operations. */
export interface Int32ValueOperations {
  get: (
    options?: Int32ValueGetOptionalParams,
  ) => Promise<Record<string, number>>;
  put: (
    body: Record<string, number>,
    options?: Int32ValuePutOptionalParams,
  ) => Promise<void>;
}

export function getInt32Value(context: DictionaryContext) {
  return {
    get: (options?: Int32ValueGetOptionalParams) => get(context, options),
    put: (
      body: Record<string, number>,
      options?: Int32ValuePutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getInt32ValueOperations(
  context: DictionaryContext,
): Int32ValueOperations {
  return {
    ...getInt32Value(context),
  };
}
