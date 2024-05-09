// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { DatetimeProperty } from "../../models/models.js";
import {
  datetimeGetAll,
  datetimeGetDefault,
  datetimePutAll,
  datetimePutDefault,
} from "../../api/datetime/index.js";
import {
  DatetimeGetAllOptionalParams,
  DatetimeGetDefaultOptionalParams,
  DatetimePutAllOptionalParams,
  DatetimePutDefaultOptionalParams,
} from "../../models/options.js";

export interface DatetimeOperations {
  getAll: (options?: DatetimeGetAllOptionalParams) => Promise<DatetimeProperty>;
  getDefault: (
    options?: DatetimeGetDefaultOptionalParams,
  ) => Promise<DatetimeProperty>;
  putAll: (
    body: DatetimeProperty,
    options?: DatetimePutAllOptionalParams,
  ) => Promise<void>;
  putDefault: (
    body: DatetimeProperty,
    options?: DatetimePutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getDatetime(context: OptionalContext) {
  return {
    getAll: (options?: DatetimeGetAllOptionalParams) =>
      datetimeGetAll(context, options),
    getDefault: (options?: DatetimeGetDefaultOptionalParams) =>
      datetimeGetDefault(context, options),
    putAll: (body: DatetimeProperty, options?: DatetimePutAllOptionalParams) =>
      datetimePutAll(context, body, options),
    putDefault: (
      body: DatetimeProperty,
      options?: DatetimePutDefaultOptionalParams,
    ) => datetimePutDefault(context, body, options),
  };
}

export function getDatetimeOperations(
  context: OptionalContext,
): DatetimeOperations {
  return {
    ...getDatetime(context),
  };
}
