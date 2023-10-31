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
  default: (value: Date, options?: QueryQueryDefaultOptions) => Promise<void>;
  rfc3339: (value: Date, options?: QueryQueryRfc3339Options) => Promise<void>;
  rfc7231: (value: Date, options?: QueryQueryRfc7231Options) => Promise<void>;
  unixTimestamp: (
    value: Date,
    options?: QueryQueryUnixTimestampOptions
  ) => Promise<void>;
  unixTimestampArray: (
    value: Date[],
    options?: QueryQueryUnixTimestampArrayOptions
  ) => Promise<void>;
}

export function getQuery(context: DatetimeContext) {
  return {
    default: (value: Date, options?: QueryQueryDefaultOptions) =>
      queryDefault(context, value, options),
    rfc3339: (value: Date, options?: QueryQueryRfc3339Options) =>
      queryRfc3339(context, value, options),
    rfc7231: (value: Date, options?: QueryQueryRfc7231Options) =>
      queryRfc7231(context, value, options),
    unixTimestamp: (value: Date, options?: QueryQueryUnixTimestampOptions) =>
      queryUnixTimestamp(context, value, options),
    unixTimestampArray: (
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
