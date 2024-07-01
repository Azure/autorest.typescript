// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatetimeContext } from "../../api/datetimeContext.js";
import {
  responseHeaderDefault,
  responseHeaderRfc3339,
  responseHeaderRfc7231,
  responseHeaderUnixTimestamp,
} from "../../api/responseHeader/index.js";
import {
  ResponseHeaderDefaultOptionalParams,
  ResponseHeaderRfc3339OptionalParams,
  ResponseHeaderRfc7231OptionalParams,
  ResponseHeaderUnixTimestampOptionalParams,
} from "../../models/options.js";

/** Interface representing a ResponseHeader operations. */
export interface ResponseHeaderOperations {
  default: (options?: ResponseHeaderDefaultOptionalParams) => Promise<void>;
  rfc3339: (options?: ResponseHeaderRfc3339OptionalParams) => Promise<void>;
  rfc7231: (options?: ResponseHeaderRfc7231OptionalParams) => Promise<void>;
  unixTimestamp: (
    options?: ResponseHeaderUnixTimestampOptionalParams,
  ) => Promise<void>;
}

export function getResponseHeader(context: DatetimeContext) {
  return {
    default: (options?: ResponseHeaderDefaultOptionalParams) =>
      responseHeaderDefault(context, options),
    rfc3339: (options?: ResponseHeaderRfc3339OptionalParams) =>
      responseHeaderRfc3339(context, options),
    rfc7231: (options?: ResponseHeaderRfc7231OptionalParams) =>
      responseHeaderRfc7231(context, options),
    unixTimestamp: (options?: ResponseHeaderUnixTimestampOptionalParams) =>
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
