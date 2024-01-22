// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NullableContext } from "../../api/NullableContext.js";
import { DatetimeProperty } from "../../models/models.js";
import {
  datetimeGetNonNull,
  datetimeGetNull,
  datetimePatchNonNull,
  datetimePatchNull,
} from "../../api/datetime/index.js";
import {
  DatetimeGetNonNullOptions,
  DatetimeGetNullOptions,
  DatetimePatchNonNullOptions,
  DatetimePatchNullOptions,
} from "../../models/options.js";

export interface DatetimeOperations {
  getNonNull: (
    options?: DatetimeGetNonNullOptions,
  ) => Promise<DatetimeProperty>;
  getNull: (options?: DatetimeGetNullOptions) => Promise<DatetimeProperty>;
  patchNonNull: (
    body: DatetimeProperty,
    options?: DatetimePatchNonNullOptions,
  ) => Promise<void>;
  patchNull: (
    body: DatetimeProperty,
    options?: DatetimePatchNullOptions,
  ) => Promise<void>;
}

export function getDatetime(context: NullableContext) {
  return {
    getNonNull: (options?: DatetimeGetNonNullOptions) =>
      datetimeGetNonNull(context, options),
    getNull: (options?: DatetimeGetNullOptions) =>
      datetimeGetNull(context, options),
    patchNonNull: (
      body: DatetimeProperty,
      options?: DatetimePatchNonNullOptions,
    ) => datetimePatchNonNull(context, body, options),
    patchNull: (body: DatetimeProperty, options?: DatetimePatchNullOptions) =>
      datetimePatchNull(context, body, options),
  };
}

export function getDatetimeOperations(
  context: NullableContext,
): DatetimeOperations {
  return {
    ...getDatetime(context),
  };
}
