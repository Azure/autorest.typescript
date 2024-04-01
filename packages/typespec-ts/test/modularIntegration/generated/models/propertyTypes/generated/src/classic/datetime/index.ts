// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValueTypesContext } from "../../api/ValueTypesContext.js";
import { DatetimeProperty } from "../../models/models.js";
import { datetimeGet, datetimePut } from "../../api/datetime/index.js";
import { GetOptions, PutOptions } from "../../models/options.js";

export interface DatetimeOperations {
  get: (options?: GetOptions) => Promise<DatetimeProperty>;
  put: (body: DatetimeProperty, options?: PutOptions) => Promise<void>;
}

export function getDatetime(context: ValueTypesContext) {
  return {
    get: (options?: GetOptions) => datetimeGet(context, options),
    put: (body: DatetimeProperty, options?: PutOptions) =>
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
