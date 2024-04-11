// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatetimeContext } from "../../api/datetimeContext.js";
import {
  headerDefault,
  headerRfc3339,
  headerRfc7231,
  headerUnixTimestamp,
  headerUnixTimestampArray,
} from "../../api/header/index.js";
import {
  HeaderDefaultOptionalParams,
  HeaderRfc3339OptionalParams,
  HeaderRfc7231OptionalParams,
  HeaderUnixTimestampOptionalParams,
  HeaderUnixTimestampArrayOptionalParams,
} from "../../models/options.js";

export interface HeaderOperations {
  default: (
    value: Date,
    options?: HeaderDefaultOptionalParams,
  ) => Promise<void>;
  rfc3339: (
    value: Date,
    options?: HeaderRfc3339OptionalParams,
  ) => Promise<void>;
  rfc7231: (
    value: Date,
    options?: HeaderRfc7231OptionalParams,
  ) => Promise<void>;
  unixTimestamp: (
    value: Date,
    options?: HeaderUnixTimestampOptionalParams,
  ) => Promise<void>;
  unixTimestampArray: (
    value: Date[],
    options?: HeaderUnixTimestampArrayOptionalParams,
  ) => Promise<void>;
}

export function getHeader(context: DatetimeContext) {
  return {
    default: (value: Date, options?: HeaderDefaultOptionalParams) =>
      headerDefault(context, value, options),
    rfc3339: (value: Date, options?: HeaderRfc3339OptionalParams) =>
      headerRfc3339(context, value, options),
    rfc7231: (value: Date, options?: HeaderRfc7231OptionalParams) =>
      headerRfc7231(context, value, options),
    unixTimestamp: (value: Date, options?: HeaderUnixTimestampOptionalParams) =>
      headerUnixTimestamp(context, value, options),
    unixTimestampArray: (
      value: Date[],
      options?: HeaderUnixTimestampArrayOptionalParams,
    ) => headerUnixTimestampArray(context, value, options),
  };
}

export function getHeaderOperations(
  context: DatetimeContext,
): HeaderOperations {
  return {
    ...getHeader(context),
  };
}
