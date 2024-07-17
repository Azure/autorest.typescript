// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/dictionaryContext.js";
import { get, put } from "../../api/unknownValue/index.js";
import {
  UnknownValueGetOptionalParams,
  UnknownValuePutOptionalParams,
} from "../../api/options.js";

/** Interface representing a UnknownValue operations. */
export interface UnknownValueOperations {
  get: (
    options?: UnknownValueGetOptionalParams,
  ) => Promise<Record<string, any>>;
  put: (
    body: Record<string, any>,
    options?: UnknownValuePutOptionalParams,
  ) => Promise<void>;
}

export function getUnknownValue(context: DictionaryContext) {
  return {
    get: (options?: UnknownValueGetOptionalParams) => get(context, options),
    put: (body: Record<string, any>, options?: UnknownValuePutOptionalParams) =>
      put(context, body, options),
  };
}

export function getUnknownValueOperations(
  context: DictionaryContext,
): UnknownValueOperations {
  return {
    ...getUnknownValue(context),
  };
}
