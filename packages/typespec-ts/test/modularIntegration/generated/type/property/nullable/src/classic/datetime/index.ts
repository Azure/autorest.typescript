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

/** Interface representing a Datetime operations. */
export interface DatetimeOperations {
  /** Get models that will return all properties in the model */
  getNonNull: (
    options?: DatetimeGetNonNullOptionalParams,
  ) => Promise<DatetimeProperty>;
  /** Get models that will return the default object */
  getNull: (
    options?: DatetimeGetNullOptionalParams,
  ) => Promise<DatetimeProperty>;
  /** Put a body with all properties present. */
  patchNonNull: (
    body: DatetimeProperty,
    options?: DatetimePatchNonNullOptionalParams,
  ) => Promise<void>;
  /** Put a body with default properties. */
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
