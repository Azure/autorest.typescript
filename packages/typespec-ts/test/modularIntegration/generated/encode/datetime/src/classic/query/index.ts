// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatetimeContext } from "../../api/datetimeContext.js";
import {
  queryDefault,
  queryRfc3339,
  queryRfc7231,
  queryUnixTimestamp,
  queryUnixTimestampArray,
} from "../../api/query/index.js";
import {
  QueryDefaultOptionalParams,
  QueryRfc3339OptionalParams,
  QueryRfc7231OptionalParams,
  QueryUnixTimestampOptionalParams,
  QueryUnixTimestampArrayOptionalParams,
} from "../../api/options.js";

/** Interface representing a Query operations. */
export interface QueryOperations {
  default: (value: Date, options?: QueryDefaultOptionalParams) => Promise<void>;
  rfc3339: (value: Date, options?: QueryRfc3339OptionalParams) => Promise<void>;
  rfc7231: (value: Date, options?: QueryRfc7231OptionalParams) => Promise<void>;
  unixTimestamp: (
    value: Date,
    options?: QueryUnixTimestampOptionalParams,
  ) => Promise<void>;
  unixTimestampArray: (
    value: Date[],
    options?: QueryUnixTimestampArrayOptionalParams,
  ) => Promise<void>;
}

export function getQuery(context: DatetimeContext) {
  return {
    default: (value: Date, options?: QueryDefaultOptionalParams) =>
      queryDefault(context, value, options),
    rfc3339: (value: Date, options?: QueryRfc3339OptionalParams) =>
      queryRfc3339(context, value, options),
    rfc7231: (value: Date, options?: QueryRfc7231OptionalParams) =>
      queryRfc7231(context, value, options),
    unixTimestamp: (value: Date, options?: QueryUnixTimestampOptionalParams) =>
      queryUnixTimestamp(context, value, options),
    unixTimestampArray: (
      value: Date[],
      options?: QueryUnixTimestampArrayOptionalParams,
    ) => queryUnixTimestampArray(context, value, options),
  };
}

export function getQueryOperations(context: DatetimeContext): QueryOperations {
  return {
    ...getQuery(context),
  };
}
