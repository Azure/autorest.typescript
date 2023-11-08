// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryContext } from "../../api/DictionaryContext.js";
import {
  datetimeValueGet,
  datetimeValuePut,
} from "../../api/datetimeValue/index.js";
import {
  DatetimeValueGetOptions,
  DatetimeValuePutOptions,
} from "../../models/options.js";

export interface DatetimeValueOperations {
  get: (options?: DatetimeValueGetOptions) => Promise<Record<string, Date>>;
  put: (
    body: Record<string, Date>,
    options?: DatetimeValuePutOptions
  ) => Promise<void>;
}

export function getDatetimeValue(context: DictionaryContext) {
  return {
    get: (options?: DatetimeValueGetOptions) =>
      datetimeValueGet(context, options),
    put: (body: Record<string, Date>, options?: DatetimeValuePutOptions) =>
      datetimeValuePut(context, body, options),
  };
}

export function getDatetimeValueOperations(
  context: DictionaryContext
): DatetimeValueOperations {
  return {
    ...getDatetimeValue(context),
  };
}
