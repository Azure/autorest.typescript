// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ArrayContext } from "../../api/arrayContext.js";
import {
  datetimeValueGet,
  datetimeValuePut,
} from "../../api/datetimeValue/index.js";
import {
  DatetimeValueGetOptionalParams,
  DatetimeValuePutOptionalParams,
} from "../../models/options.js";

/** Interface representing a DatetimeValue operations. */
export interface DatetimeValueOperations {
  get: (options?: DatetimeValueGetOptionalParams) => Promise<Date[]>;
  put: (
    body: Date[],
    options?: DatetimeValuePutOptionalParams,
  ) => Promise<void>;
}

export function getDatetimeValue(context: ArrayContext) {
  return {
    get: (options?: DatetimeValueGetOptionalParams) =>
      datetimeValueGet(context, options),
    put: (body: Date[], options?: DatetimeValuePutOptionalParams) =>
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
