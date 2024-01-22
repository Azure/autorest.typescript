// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/OptionalContext.js";
import { DatetimeProperty } from "../../models/models.js";
import {
  datetimeGetAll,
  datetimeGetDefault,
  datetimePutAll,
  datetimePutDefault,
} from "../../api/datetime/index.js";
import {
  DatetimeGetAllOptions,
  DatetimeGetDefaultOptions,
  DatetimePutAllOptions,
  DatetimePutDefaultOptions,
} from "../../models/options.js";

export interface DatetimeOperations {
  getAll: (options?: DatetimeGetAllOptions) => Promise<DatetimeProperty>;
  getDefault: (
    options?: DatetimeGetDefaultOptions,
  ) => Promise<DatetimeProperty>;
  putAll: (
    body: DatetimeProperty,
    options?: DatetimePutAllOptions,
  ) => Promise<void>;
  putDefault: (
    body: DatetimeProperty,
    options?: DatetimePutDefaultOptions,
  ) => Promise<void>;
}

export function getDatetime(context: OptionalContext) {
  return {
    getAll: (options?: DatetimeGetAllOptions) =>
      datetimeGetAll(context, options),
    getDefault: (options?: DatetimeGetDefaultOptions) =>
      datetimeGetDefault(context, options),
    putAll: (body: DatetimeProperty, options?: DatetimePutAllOptions) =>
      datetimePutAll(context, body, options),
    putDefault: (body: DatetimeProperty, options?: DatetimePutDefaultOptions) =>
      datetimePutDefault(context, body, options),
  };
}

export function getDatetimeOperations(
  context: OptionalContext,
): DatetimeOperations {
  return {
    ...getDatetime(context),
  };
}
