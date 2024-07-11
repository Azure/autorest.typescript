// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/dictionaryContext.js";
import { get, put } from "../../api/datetimeValue/index.js";
import {
  DatetimeValueGetOptionalParams,
  DatetimeValuePutOptionalParams,
} from "../../api/options.js";

/** Interface representing a DatetimeValue operations. */
export interface DatetimeValueOperations {
  get: (
    options?: DatetimeValueGetOptionalParams,
  ) => Promise<Record<string, Date>>;
  put: (
    body: Record<string, Date>,
    options?: DatetimeValuePutOptionalParams,
  ) => Promise<void>;
}

export function getDatetimeValue(context: DictionaryContext) {
  return {
    get: (options?: DatetimeValueGetOptionalParams) => get(context, options),
    put: (
      body: Record<string, Date>,
      options?: DatetimeValuePutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getDatetimeValueOperations(
  context: DictionaryContext,
): DatetimeValueOperations {
  return {
    ...getDatetimeValue(context),
  };
}
