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
  PropertyPropertyDefaultOptions,
  PropertyPropertyRfc3339Options,
  PropertyPropertyRfc7231Options,
  PropertyPropertyUnixTimestampOptions,
  PropertyPropertyUnixTimestampArrayOptions,
} from "../../models/options.js";

export interface PropertyOperations {
  propertyDefault: (
    body: DefaultDatetimeProperty,
    options?: PropertyPropertyDefaultOptions
  ) => Promise<DefaultDatetimeProperty>;
  propertyRfc3339: (
    body: Rfc3339DatetimeProperty,
    options?: PropertyPropertyRfc3339Options
  ) => Promise<Rfc3339DatetimeProperty>;
  propertyRfc7231: (
    body: Rfc7231DatetimeProperty,
    options?: PropertyPropertyRfc7231Options
  ) => Promise<Rfc7231DatetimeProperty>;
  propertyUnixTimestamp: (
    body: UnixTimestampDatetimeProperty,
    options?: PropertyPropertyUnixTimestampOptions
  ) => Promise<UnixTimestampDatetimeProperty>;
  propertyUnixTimestampArray: (
    body: UnixTimestampArrayDatetimeProperty,
    options?: PropertyPropertyUnixTimestampArrayOptions
  ) => Promise<UnixTimestampArrayDatetimeProperty>;
}

export function getProperty(context: DatetimeContext) {
  return {
    propertyDefault: (
      body: DefaultDatetimeProperty,
      options?: PropertyPropertyDefaultOptions
    ) => propertyDefault(context, body, options),
    propertyRfc3339: (
      body: Rfc3339DatetimeProperty,
      options?: PropertyPropertyRfc3339Options
    ) => propertyRfc3339(context, body, options),
    propertyRfc7231: (
      body: Rfc7231DatetimeProperty,
      options?: PropertyPropertyRfc7231Options
    ) => propertyRfc7231(context, body, options),
    propertyUnixTimestamp: (
      body: UnixTimestampDatetimeProperty,
      options?: PropertyPropertyUnixTimestampOptions
    ) => propertyUnixTimestamp(context, body, options),
    propertyUnixTimestampArray: (
      body: UnixTimestampArrayDatetimeProperty,
      options?: PropertyPropertyUnixTimestampArrayOptions
    ) => propertyUnixTimestampArray(context, body, options),
  };
}

export function getPropertyOperations(
  context: DatetimeContext
): PropertyOperations {
  return {
    ...getProperty(context),
  };
}
