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
  ResponseHeaderDefaultOptions,
  ResponseHeaderRfc3339Options,
  ResponseHeaderRfc7231Options,
  ResponseHeaderUnixTimestampOptions,
} from "../../models/options.js";

export interface ResponseHeaderOperations {
  default: (options?: ResponseHeaderDefaultOptions) => Promise<void>;
  rfc3339: (options?: ResponseHeaderRfc3339Options) => Promise<void>;
  rfc7231: (options?: ResponseHeaderRfc7231Options) => Promise<void>;
  unixTimestamp: (
    options?: ResponseHeaderUnixTimestampOptions,
  ) => Promise<void>;
}

export function getResponseHeader(context: DatetimeContext) {
  return {
    default: (options?: ResponseHeaderDefaultOptions) =>
      responseHeaderDefault(context, options),
    rfc3339: (options?: ResponseHeaderRfc3339Options) =>
      responseHeaderRfc3339(context, options),
    rfc7231: (options?: ResponseHeaderRfc7231Options) =>
      responseHeaderRfc7231(context, options),
    unixTimestamp: (options?: ResponseHeaderUnixTimestampOptions) =>
      responseHeaderUnixTimestamp(context, options),
  };
}

export function getResponseHeaderOperations(
  context: DatetimeContext,
): ResponseHeaderOperations {
  return {
    ...getResponseHeader(context),
  };
}
