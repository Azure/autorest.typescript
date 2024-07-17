// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/dictionaryContext.js";
import { get, put } from "../../api/stringValue/index.js";
import {
  StringValueGetOptionalParams,
  StringValuePutOptionalParams,
} from "../../api/options.js";

/** Interface representing a StringValue operations. */
export interface StringValueOperations {
  get: (
    options?: StringValueGetOptionalParams,
  ) => Promise<Record<string, string>>;
  put: (
    body: Record<string, string>,
    options?: StringValuePutOptionalParams,
  ) => Promise<void>;
}

export function getStringValue(context: DictionaryContext) {
  return {
    get: (options?: StringValueGetOptionalParams) => get(context, options),
    put: (
      body: Record<string, string>,
      options?: StringValuePutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getStringValueOperations(
  context: DictionaryContext,
): StringValueOperations {
  return {
    ...getStringValue(context),
  };
}
