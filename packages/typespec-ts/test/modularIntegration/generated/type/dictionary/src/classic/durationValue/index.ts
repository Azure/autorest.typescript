// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/dictionaryContext.js";
import { get, put } from "../../api/durationValue/index.js";
import {
  DurationValueGetOptionalParams,
  DurationValuePutOptionalParams,
} from "../../api/options.js";

/** Interface representing a DurationValue operations. */
export interface DurationValueOperations {
  get: (
    options?: DurationValueGetOptionalParams,
  ) => Promise<Record<string, string>>;
  put: (
    body: Record<string, string>,
    options?: DurationValuePutOptionalParams,
  ) => Promise<void>;
}

export function getDurationValue(context: DictionaryContext) {
  return {
    get: (options?: DurationValueGetOptionalParams) => get(context, options),
    put: (
      body: Record<string, string>,
      options?: DurationValuePutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getDurationValueOperations(
  context: DictionaryContext,
): DurationValueOperations {
  return {
    ...getDurationValue(context),
  };
}
