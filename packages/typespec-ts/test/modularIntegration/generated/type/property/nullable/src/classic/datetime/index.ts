// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NullableContext } from "../../api/nullableContext.js";
import { DatetimeProperty } from "../../models/models.js";
import {
  getNonNull,
  getNull,
  patchNonNull,
  patchNull,
} from "../../api/datetime/index.js";
import {
  DatetimeGetNonNullOptionalParams,
  DatetimeGetNullOptionalParams,
  DatetimePatchNonNullOptionalParams,
  DatetimePatchNullOptionalParams,
} from "../../models/options.js";

export interface DatetimeOperations {
  getNonNull: (
    options?: DatetimeGetNonNullOptionalParams,
  ) => Promise<DatetimeProperty>;
  getNull: (
    options?: DatetimeGetNullOptionalParams,
  ) => Promise<DatetimeProperty>;
  patchNonNull: (
    body: DatetimeProperty,
    options?: DatetimePatchNonNullOptionalParams,
  ) => Promise<void>;
  patchNull: (
    body: DatetimeProperty,
    options?: DatetimePatchNullOptionalParams,
  ) => Promise<void>;
}

export function getDatetime(context: NullableContext) {
  return {
    getNonNull: (options?: DatetimeGetNonNullOptionalParams) =>
      getNonNull(context, options),
    getNull: (options?: DatetimeGetNullOptionalParams) =>
      getNull(context, options),
    patchNonNull: (
      body: DatetimeProperty,
      options?: DatetimePatchNonNullOptionalParams,
    ) => patchNonNull(context, body, options),
    patchNull: (
      body: DatetimeProperty,
      options?: DatetimePatchNullOptionalParams,
    ) => patchNull(context, body, options),
  };
}

export function getDatetimeOperations(
  context: NullableContext,
): DatetimeOperations {
  return {
    ...getDatetime(context),
  };
}
