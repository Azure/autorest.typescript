// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/ArrayContext.js";
import {
  datetimeValueGet,
  datetimeValuePut,
} from "../../api/datetimeValue/index.js";
import {
  DatetimeValueGetOptions,
  DatetimeValuePutOptions,
} from "../../models/options.js";

export interface DatetimeValueOperations {
  get: (options?: DatetimeValueGetOptions) => Promise<Date[]>;
  put: (body: Date[], options?: DatetimeValuePutOptions) => Promise<void>;
}

export function getDatetimeValue(context: ArrayContext) {
  return {
    get: (options?: DatetimeValueGetOptions) =>
      datetimeValueGet(context, options),
    put: (body: Date[], options?: DatetimeValuePutOptions) =>
      datetimeValuePut(context, body, options),
  };
}

export function getDatetimeValueOperations(
  context: ArrayContext,
): DatetimeValueOperations {
  return {
    ...getDatetimeValue(context),
  };
}
