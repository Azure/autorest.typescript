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
  default: (value: Date, options?: HeaderHeaderDefaultOptions) => Promise<void>;
  rfc3339: (value: Date, options?: HeaderHeaderRfc3339Options) => Promise<void>;
  rfc7231: (value: Date, options?: HeaderHeaderRfc7231Options) => Promise<void>;
  unixTimestamp: (
    value: Date,
    options?: HeaderHeaderUnixTimestampOptions
  ) => Promise<void>;
  unixTimestampArray: (
    value: Date[],
    options?: HeaderHeaderUnixTimestampArrayOptions
  ) => Promise<void>;
}

export function getHeader(context: DatetimeContext) {
  return {
    default: (value: Date, options?: HeaderHeaderDefaultOptions) =>
      headerDefault(context, value, options),
    rfc3339: (value: Date, options?: HeaderHeaderRfc3339Options) =>
      headerRfc3339(context, value, options),
    rfc7231: (value: Date, options?: HeaderHeaderRfc7231Options) =>
      headerRfc7231(context, value, options),
    unixTimestamp: (value: Date, options?: HeaderHeaderUnixTimestampOptions) =>
      headerUnixTimestamp(context, value, options),
    unixTimestampArray: (
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
