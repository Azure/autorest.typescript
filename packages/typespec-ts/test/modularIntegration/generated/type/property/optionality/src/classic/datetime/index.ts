// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OptionalContext } from "../../api/optionalContext.js";
import { DatetimeProperty } from "../../models/models.js";
import {
  getAll,
  getDefault,
  putAll,
  putDefault,
} from "../../api/datetime/index.js";
import {
  DatetimeGetAllOptionalParams,
  DatetimeGetDefaultOptionalParams,
  DatetimePutAllOptionalParams,
  DatetimePutDefaultOptionalParams,
} from "../../models/options.js";

/** Interface representing a Datetime operations. */
export interface DatetimeOperations {
  /** Get models that will return all properties in the model */
  getAll: (options?: DatetimeGetAllOptionalParams) => Promise<DatetimeProperty>;
  /** Get models that will return the default object */
  getDefault: (
    options?: DatetimeGetDefaultOptionalParams,
  ) => Promise<DatetimeProperty>;
  /** Put a body with all properties present. */
  putAll: (
    body: DatetimeProperty,
    options?: DatetimePutAllOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
  putDefault: (
    body: DatetimeProperty,
    options?: DatetimePutDefaultOptionalParams,
  ) => Promise<void>;
}

export function getDatetime(context: OptionalContext) {
  return {
    getAll: (options?: DatetimeGetAllOptionalParams) =>
      getAll(context, options),
    getDefault: (options?: DatetimeGetDefaultOptionalParams) =>
      getDefault(context, options),
    putAll: (body: DatetimeProperty, options?: DatetimePutAllOptionalParams) =>
      putAll(context, body, options),
    putDefault: (
      body: DatetimeProperty,
      options?: DatetimePutDefaultOptionalParams,
    ) => putDefault(context, body, options),
  };
}

export function getDatetimeOperations(
  context: OptionalContext,
): DatetimeOperations {
  return {
    ...getDatetime(context),
  };
}
