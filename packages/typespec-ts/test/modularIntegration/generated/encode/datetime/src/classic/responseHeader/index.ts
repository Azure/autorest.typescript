// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatetimeContext } from "../../api/DatetimeContext.js";
import {
  responseHeaderDefault,
  responseHeaderRfc3339,
  responseHeaderRfc7231,
  responseHeaderUnixTimestamp,
} from "../../api/responseHeader/index.js";
import {
  ResponseHeaderResponseHeaderDefaultOptions,
  ResponseHeaderResponseHeaderRfc3339Options,
  ResponseHeaderResponseHeaderRfc7231Options,
  ResponseHeaderResponseHeaderUnixTimestampOptions,
} from "../../models/options.js";

export interface ResponseHeaderOperations {
  default: (
    options?: ResponseHeaderResponseHeaderDefaultOptions
  ) => Promise<void>;
  rfc3339: (
    options?: ResponseHeaderResponseHeaderRfc3339Options
  ) => Promise<void>;
  rfc7231: (
    options?: ResponseHeaderResponseHeaderRfc7231Options
  ) => Promise<void>;
  unixTimestamp: (
    options?: ResponseHeaderResponseHeaderUnixTimestampOptions
  ) => Promise<void>;
}

export function getResponseHeader(context: DatetimeContext) {
  return {
    default: (options?: ResponseHeaderResponseHeaderDefaultOptions) =>
      responseHeaderDefault(context, options),
    rfc3339: (options?: ResponseHeaderResponseHeaderRfc3339Options) =>
      responseHeaderRfc3339(context, options),
    rfc7231: (options?: ResponseHeaderResponseHeaderRfc7231Options) =>
      responseHeaderRfc7231(context, options),
    unixTimestamp: (
      options?: ResponseHeaderResponseHeaderUnixTimestampOptions
    ) => responseHeaderUnixTimestamp(context, options),
  };
}

export function getResponseHeaderOperations(
  context: DatetimeContext
): ResponseHeaderOperations {
  return {
    ...getResponseHeader(context),
  };
}
