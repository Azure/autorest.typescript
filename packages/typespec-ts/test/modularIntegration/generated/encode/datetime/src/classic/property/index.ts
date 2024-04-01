// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatetimeContext } from "../../api/DatetimeContext.js";
import {
  DefaultDatetimeProperty,
  Rfc3339DatetimeProperty,
  Rfc7231DatetimeProperty,
  UnixTimestampDatetimeProperty,
  UnixTimestampArrayDatetimeProperty,
} from "../../models/models.js";
import {
  propertyDefault,
  propertyRfc3339,
  propertyRfc7231,
  propertyUnixTimestamp,
  propertyUnixTimestampArray,
} from "../../api/property/index.js";
import {
  DefaultOptions,
  Rfc3339Options,
  Rfc7231Options,
  UnixTimestampOptions,
  UnixTimestampArrayOptions,
} from "../../models/options.js";

export interface PropertyOperations {
  default: (
    body: DefaultDatetimeProperty,
    options?: DefaultOptions,
  ) => Promise<DefaultDatetimeProperty>;
  rfc3339: (
    body: Rfc3339DatetimeProperty,
    options?: Rfc3339Options,
  ) => Promise<Rfc3339DatetimeProperty>;
  rfc7231: (
    body: Rfc7231DatetimeProperty,
    options?: Rfc7231Options,
  ) => Promise<Rfc7231DatetimeProperty>;
  unixTimestamp: (
    body: UnixTimestampDatetimeProperty,
    options?: UnixTimestampOptions,
  ) => Promise<UnixTimestampDatetimeProperty>;
  unixTimestampArray: (
    body: UnixTimestampArrayDatetimeProperty,
    options?: UnixTimestampArrayOptions,
  ) => Promise<UnixTimestampArrayDatetimeProperty>;
}

export function getProperty(context: DatetimeContext) {
  return {
    default: (body: DefaultDatetimeProperty, options?: DefaultOptions) =>
      propertyDefault(context, body, options),
    rfc3339: (body: Rfc3339DatetimeProperty, options?: Rfc3339Options) =>
      propertyRfc3339(context, body, options),
    rfc7231: (body: Rfc7231DatetimeProperty, options?: Rfc7231Options) =>
      propertyRfc7231(context, body, options),
    unixTimestamp: (
      body: UnixTimestampDatetimeProperty,
      options?: UnixTimestampOptions,
    ) => propertyUnixTimestamp(context, body, options),
    unixTimestampArray: (
      body: UnixTimestampArrayDatetimeProperty,
      options?: UnixTimestampArrayOptions,
    ) => propertyUnixTimestampArray(context, body, options),
  };
}

export function getPropertyOperations(
  context: DatetimeContext,
): PropertyOperations {
  return {
    ...getProperty(context),
  };
}
