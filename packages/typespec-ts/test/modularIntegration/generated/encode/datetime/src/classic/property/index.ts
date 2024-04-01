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
  PropertyDefaultOptions,
  PropertyRfc3339Options,
  PropertyRfc7231Options,
  PropertyUnixTimestampOptions,
  PropertyUnixTimestampArrayOptions,
} from "../../models/options.js";

export interface PropertyOperations {
  default: (
    body: DefaultDatetimeProperty,
    options?: PropertyDefaultOptions,
  ) => Promise<DefaultDatetimeProperty>;
  rfc3339: (
    body: Rfc3339DatetimeProperty,
    options?: PropertyRfc3339Options,
  ) => Promise<Rfc3339DatetimeProperty>;
  rfc7231: (
    body: Rfc7231DatetimeProperty,
    options?: PropertyRfc7231Options,
  ) => Promise<Rfc7231DatetimeProperty>;
  unixTimestamp: (
    body: UnixTimestampDatetimeProperty,
    options?: PropertyUnixTimestampOptions,
  ) => Promise<UnixTimestampDatetimeProperty>;
  unixTimestampArray: (
    body: UnixTimestampArrayDatetimeProperty,
    options?: PropertyUnixTimestampArrayOptions,
  ) => Promise<UnixTimestampArrayDatetimeProperty>;
}

export function getProperty(context: DatetimeContext) {
  return {
    default: (
      body: DefaultDatetimeProperty,
      options?: PropertyDefaultOptions,
    ) => propertyDefault(context, body, options),
    rfc3339: (
      body: Rfc3339DatetimeProperty,
      options?: PropertyRfc3339Options,
    ) => propertyRfc3339(context, body, options),
    rfc7231: (
      body: Rfc7231DatetimeProperty,
      options?: PropertyRfc7231Options,
    ) => propertyRfc7231(context, body, options),
    unixTimestamp: (
      body: UnixTimestampDatetimeProperty,
      options?: PropertyUnixTimestampOptions,
    ) => propertyUnixTimestamp(context, body, options),
    unixTimestampArray: (
      body: UnixTimestampArrayDatetimeProperty,
      options?: PropertyUnixTimestampArrayOptions,
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
