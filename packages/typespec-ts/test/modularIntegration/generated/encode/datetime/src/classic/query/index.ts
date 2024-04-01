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
  DefaultOptions,
  Rfc3339Options,
  Rfc7231Options,
  UnixTimestampOptions,
  UnixTimestampArrayOptions,
} from "../../models/options.js";

export interface QueryOperations {
  default: (value: Date, options?: DefaultOptions) => Promise<void>;
  rfc3339: (value: Date, options?: Rfc3339Options) => Promise<void>;
  rfc7231: (value: Date, options?: Rfc7231Options) => Promise<void>;
  unixTimestamp: (value: Date, options?: UnixTimestampOptions) => Promise<void>;
  unixTimestampArray: (
    value: Date[],
    options?: UnixTimestampArrayOptions,
  ) => Promise<void>;
}

export function getQuery(context: DatetimeContext) {
  return {
    default: (value: Date, options?: DefaultOptions) =>
      queryDefault(context, value, options),
    rfc3339: (value: Date, options?: Rfc3339Options) =>
      queryRfc3339(context, value, options),
    rfc7231: (value: Date, options?: Rfc7231Options) =>
      queryRfc7231(context, value, options),
    unixTimestamp: (value: Date, options?: UnixTimestampOptions) =>
      queryUnixTimestamp(context, value, options),
    unixTimestampArray: (value: Date[], options?: UnixTimestampArrayOptions) =>
      queryUnixTimestampArray(context, value, options),
  };
}

export function getQueryOperations(context: DatetimeContext): QueryOperations {
  return {
    ...getQuery(context),
  };
}
