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
  responseHeaderDefault: (
    options?: ResponseHeaderResponseHeaderDefaultOptions
  ) => Promise<void>;
  responseHeaderRfc3339: (
    options?: ResponseHeaderResponseHeaderRfc3339Options
  ) => Promise<void>;
  responseHeaderRfc7231: (
    options?: ResponseHeaderResponseHeaderRfc7231Options
  ) => Promise<void>;
  responseHeaderUnixTimestamp: (
    options?: ResponseHeaderResponseHeaderUnixTimestampOptions
  ) => Promise<void>;
}

export function getResponseHeader(context: DatetimeContext) {
  return {
    responseHeaderDefault: (
      options?: ResponseHeaderResponseHeaderDefaultOptions
    ) => responseHeaderDefault(context, options),
    responseHeaderRfc3339: (
      options?: ResponseHeaderResponseHeaderRfc3339Options
    ) => responseHeaderRfc3339(context, options),
    responseHeaderRfc7231: (
      options?: ResponseHeaderResponseHeaderRfc7231Options
    ) => responseHeaderRfc7231(context, options),
    responseHeaderUnixTimestamp: (
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
