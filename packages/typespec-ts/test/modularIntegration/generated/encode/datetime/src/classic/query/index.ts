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
  QueryDefaultOptions,
  QueryRfc3339Options,
  QueryRfc7231Options,
  QueryUnixTimestampOptions,
  QueryUnixTimestampArrayOptions,
} from "../../models/options.js";

export interface QueryOperations {
  default: (value: Date, options?: QueryDefaultOptions) => Promise<void>;
  rfc3339: (value: Date, options?: QueryRfc3339Options) => Promise<void>;
  rfc7231: (value: Date, options?: QueryRfc7231Options) => Promise<void>;
  unixTimestamp: (
    value: Date,
    options?: QueryUnixTimestampOptions,
  ) => Promise<void>;
  unixTimestampArray: (
    value: Date[],
    options?: QueryUnixTimestampArrayOptions,
  ) => Promise<void>;
}

export function getQuery(context: DatetimeContext) {
  return {
    default: (value: Date, options?: QueryDefaultOptions) =>
      queryDefault(context, value, options),
    rfc3339: (value: Date, options?: QueryRfc3339Options) =>
      queryRfc3339(context, value, options),
    rfc7231: (value: Date, options?: QueryRfc7231Options) =>
      queryRfc7231(context, value, options),
    unixTimestamp: (value: Date, options?: QueryUnixTimestampOptions) =>
      queryUnixTimestamp(context, value, options),
    unixTimestampArray: (
      value: Date[],
      options?: QueryUnixTimestampArrayOptions,
    ) => queryUnixTimestampArray(context, value, options),
  };
}

export function getQueryOperations(context: DatetimeContext): QueryOperations {
  return {
    ...getQuery(context),
  };
}
