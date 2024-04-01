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
  DefaultOptions,
  Rfc3339Options,
  Rfc7231Options,
  UnixTimestampOptions,
} from "../../models/options.js";

export interface ResponseHeaderOperations {
  default: (options?: DefaultOptions) => Promise<void>;
  rfc3339: (options?: Rfc3339Options) => Promise<void>;
  rfc7231: (options?: Rfc7231Options) => Promise<void>;
  unixTimestamp: (options?: UnixTimestampOptions) => Promise<void>;
}

export function getResponseHeader(context: DatetimeContext) {
  return {
    default: (options?: DefaultOptions) =>
      responseHeaderDefault(context, options),
    rfc3339: (options?: Rfc3339Options) =>
      responseHeaderRfc3339(context, options),
    rfc7231: (options?: Rfc7231Options) =>
      responseHeaderRfc7231(context, options),
    unixTimestamp: (options?: UnixTimestampOptions) =>
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
