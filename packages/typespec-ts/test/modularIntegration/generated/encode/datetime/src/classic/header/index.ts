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
  HeaderDefaultOptions,
  HeaderRfc3339Options,
  HeaderRfc7231Options,
  HeaderUnixTimestampOptions,
  HeaderUnixTimestampArrayOptions,
} from "../../models/options.js";

export interface HeaderOperations {
  default: (value: Date, options?: HeaderDefaultOptions) => Promise<void>;
  rfc3339: (value: Date, options?: HeaderRfc3339Options) => Promise<void>;
  rfc7231: (value: Date, options?: HeaderRfc7231Options) => Promise<void>;
  unixTimestamp: (
    value: Date,
    options?: HeaderUnixTimestampOptions,
  ) => Promise<void>;
  unixTimestampArray: (
    value: Date[],
    options?: HeaderUnixTimestampArrayOptions,
  ) => Promise<void>;
}

export function getHeader(context: DatetimeContext) {
  return {
    default: (value: Date, options?: HeaderDefaultOptions) =>
      headerDefault(context, value, options),
    rfc3339: (value: Date, options?: HeaderRfc3339Options) =>
      headerRfc3339(context, value, options),
    rfc7231: (value: Date, options?: HeaderRfc7231Options) =>
      headerRfc7231(context, value, options),
    unixTimestamp: (value: Date, options?: HeaderUnixTimestampOptions) =>
      headerUnixTimestamp(context, value, options),
    unixTimestampArray: (
      value: Date[],
      options?: HeaderUnixTimestampArrayOptions,
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
