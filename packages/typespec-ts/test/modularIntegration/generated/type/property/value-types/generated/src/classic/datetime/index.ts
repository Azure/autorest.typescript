// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/valueTypesContext.js";
import { DatetimeProperty } from "../../models/models.js";
import { datetimeGet, datetimePut } from "../../api/datetime/index.js";
import {
  DatetimeGetOptionalParams,
  DatetimePutOptionalParams,
} from "../../api/options.js";

/** Interface representing a Datetime operations. */
export interface DatetimeOperations {
  /** Get call */
  get: (options?: DatetimeGetOptionalParams) => Promise<DatetimeProperty>;
  /** Put operation */
  put: (
    body: DatetimeProperty,
    options?: DatetimePutOptionalParams,
  ) => Promise<void>;
}

export function getDatetime(context: ValueTypesContext) {
  return {
    get: (options?: DatetimeGetOptionalParams) => datetimeGet(context, options),
    put: (body: DatetimeProperty, options?: DatetimePutOptionalParams) =>
      datetimePut(context, body, options),
  };
}

export function getDatetimeOperations(
  context: ValueTypesContext,
): DatetimeOperations {
  return {
    ...getDatetime(context),
  };
}
