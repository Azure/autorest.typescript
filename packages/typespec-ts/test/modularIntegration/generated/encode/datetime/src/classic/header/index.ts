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
  DefaultOptions,
  Rfc3339Options,
  Rfc7231Options,
  UnixTimestampOptions,
  UnixTimestampArrayOptions,
} from "../../models/options.js";

export interface HeaderOperations {
  default: (value: Date, options?: DefaultOptions) => Promise<void>;
  rfc3339: (value: Date, options?: Rfc3339Options) => Promise<void>;
  rfc7231: (value: Date, options?: Rfc7231Options) => Promise<void>;
  unixTimestamp: (value: Date, options?: UnixTimestampOptions) => Promise<void>;
  unixTimestampArray: (
    value: Date[],
    options?: UnixTimestampArrayOptions,
  ) => Promise<void>;
}

export function getHeader(context: DatetimeContext) {
  return {
    default: (value: Date, options?: DefaultOptions) =>
      headerDefault(context, value, options),
    rfc3339: (value: Date, options?: Rfc3339Options) =>
      headerRfc3339(context, value, options),
    rfc7231: (value: Date, options?: Rfc7231Options) =>
      headerRfc7231(context, value, options),
    unixTimestamp: (value: Date, options?: UnixTimestampOptions) =>
      headerUnixTimestamp(context, value, options),
    unixTimestampArray: (value: Date[], options?: UnixTimestampArrayOptions) =>
      headerUnixTimestampArray(context, value, options),
  };
}

export function getHeaderOperations(
  context: DatetimeContext,
): HeaderOperations {
  return {
    ...getHeader(context),
  };
}
