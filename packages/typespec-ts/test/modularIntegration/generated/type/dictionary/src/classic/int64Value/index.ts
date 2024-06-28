// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/dictionaryContext.js";
import { get, put } from "../../api/int64Value/index.js";
import {
  Int64ValueGetOptionalParams,
  Int64ValuePutOptionalParams,
} from "../../models/options.js";

export interface Int64ValueOperations {
  get: (
    options?: Int64ValueGetOptionalParams,
  ) => Promise<Record<string, number>>;
  put: (
    body: Record<string, number>,
    options?: Int64ValuePutOptionalParams,
  ) => Promise<void>;
}

export function getInt64Value(context: DictionaryContext) {
  return {
    get: (options?: Int64ValueGetOptionalParams) => get(context, options),
    put: (
      body: Record<string, number>,
      options?: Int64ValuePutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getInt64ValueOperations(
  context: DictionaryContext,
): Int64ValueOperations {
  return {
    ...getInt64Value(context),
  };
}
