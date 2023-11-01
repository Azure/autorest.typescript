// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatetimeContext } from "../../api/DatetimeContext.js";
import {
  headerDefault,
  headerRfc3339,
  headerRfc7231,
  headerUnixTimestamp,
  headerUnixTimestampArray,
} from "../../api/header/index.js";
import {
  HeaderHeaderDefaultOptions,
  HeaderHeaderRfc3339Options,
  HeaderHeaderRfc7231Options,
  HeaderHeaderUnixTimestampOptions,
  HeaderHeaderUnixTimestampArrayOptions,
} from "../../models/options.js";

export interface HeaderOperations {
  headerDefault: (
    value: Date,
    options?: HeaderHeaderDefaultOptions
  ) => Promise<void>;
  headerRfc3339: (
    value: Date,
    options?: HeaderHeaderRfc3339Options
  ) => Promise<void>;
  headerRfc7231: (
    value: Date,
    options?: HeaderHeaderRfc7231Options
  ) => Promise<void>;
  headerUnixTimestamp: (
    value: Date,
    options?: HeaderHeaderUnixTimestampOptions
  ) => Promise<void>;
  headerUnixTimestampArray: (
    value: Date[],
    options?: HeaderHeaderUnixTimestampArrayOptions
  ) => Promise<void>;
}

export function getHeader(context: DatetimeContext) {
  return {
    headerDefault: (value: Date, options?: HeaderHeaderDefaultOptions) =>
      headerDefault(context, value, options),
    headerRfc3339: (value: Date, options?: HeaderHeaderRfc3339Options) =>
      headerRfc3339(context, value, options),
    headerRfc7231: (value: Date, options?: HeaderHeaderRfc7231Options) =>
      headerRfc7231(context, value, options),
    headerUnixTimestamp: (
      value: Date,
      options?: HeaderHeaderUnixTimestampOptions
    ) => headerUnixTimestamp(context, value, options),
    headerUnixTimestampArray: (
      value: Date[],
      options?: HeaderHeaderUnixTimestampArrayOptions
    ) => headerUnixTimestampArray(context, value, options),
  };
}

export function getHeaderOperations(
  context: DatetimeContext
): HeaderOperations {
  return {
    ...getHeader(context),
  };
}
