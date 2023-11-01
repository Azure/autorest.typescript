// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatetimeContext } from "../../api/DatetimeContext.js";
import {
  queryDefault,
  queryRfc3339,
  queryRfc7231,
  queryUnixTimestamp,
  queryUnixTimestampArray,
} from "../../api/query/index.js";
import {
  QueryQueryDefaultOptions,
  QueryQueryRfc3339Options,
  QueryQueryRfc7231Options,
  QueryQueryUnixTimestampOptions,
  QueryQueryUnixTimestampArrayOptions,
} from "../../models/options.js";

export interface QueryOperations {
  queryDefault: (
    value: Date,
    options?: QueryQueryDefaultOptions
  ) => Promise<void>;
  queryRfc3339: (
    value: Date,
    options?: QueryQueryRfc3339Options
  ) => Promise<void>;
  queryRfc7231: (
    value: Date,
    options?: QueryQueryRfc7231Options
  ) => Promise<void>;
  queryUnixTimestamp: (
    value: Date,
    options?: QueryQueryUnixTimestampOptions
  ) => Promise<void>;
  queryUnixTimestampArray: (
    value: Date[],
    options?: QueryQueryUnixTimestampArrayOptions
  ) => Promise<void>;
}

export function getQuery(context: DatetimeContext) {
  return {
    queryDefault: (value: Date, options?: QueryQueryDefaultOptions) =>
      queryDefault(context, value, options),
    queryRfc3339: (value: Date, options?: QueryQueryRfc3339Options) =>
      queryRfc3339(context, value, options),
    queryRfc7231: (value: Date, options?: QueryQueryRfc7231Options) =>
      queryRfc7231(context, value, options),
    queryUnixTimestamp: (
      value: Date,
      options?: QueryQueryUnixTimestampOptions
    ) => queryUnixTimestamp(context, value, options),
    queryUnixTimestampArray: (
      value: Date[],
      options?: QueryQueryUnixTimestampArrayOptions
    ) => queryUnixTimestampArray(context, value, options),
  };
}

export function getQueryOperations(context: DatetimeContext): QueryOperations {
  return {
    ...getQuery(context),
  };
}
