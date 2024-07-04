// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DatetimeContext } from "../../api/datetimeContext.js";
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
  PropertyDefaultOptionalParams,
  PropertyRfc3339OptionalParams,
  PropertyRfc7231OptionalParams,
  PropertyUnixTimestampOptionalParams,
  PropertyUnixTimestampArrayOptionalParams,
} from "../../models/options.js";

/** Interface representing a Property operations. */
export interface PropertyOperations {
  default: (
    body: DefaultDatetimeProperty,
    options?: PropertyDefaultOptionalParams,
  ) => Promise<DefaultDatetimeProperty>;
  rfc3339: (
    body: Rfc3339DatetimeProperty,
    options?: PropertyRfc3339OptionalParams,
  ) => Promise<Rfc3339DatetimeProperty>;
  rfc7231: (
    body: Rfc7231DatetimeProperty,
    options?: PropertyRfc7231OptionalParams,
  ) => Promise<Rfc7231DatetimeProperty>;
  unixTimestamp: (
    body: UnixTimestampDatetimeProperty,
    options?: PropertyUnixTimestampOptionalParams,
  ) => Promise<UnixTimestampDatetimeProperty>;
  unixTimestampArray: (
    body: UnixTimestampArrayDatetimeProperty,
    options?: PropertyUnixTimestampArrayOptionalParams,
  ) => Promise<UnixTimestampArrayDatetimeProperty>;
}

export function getProperty(context: DatetimeContext) {
  return {
    default: (
      body: DefaultDatetimeProperty,
      options?: PropertyDefaultOptionalParams,
    ) => propertyDefault(context, body, options),
    rfc3339: (
      body: Rfc3339DatetimeProperty,
      options?: PropertyRfc3339OptionalParams,
    ) => propertyRfc3339(context, body, options),
    rfc7231: (
      body: Rfc7231DatetimeProperty,
      options?: PropertyRfc7231OptionalParams,
    ) => propertyRfc7231(context, body, options),
    unixTimestamp: (
      body: UnixTimestampDatetimeProperty,
      options?: PropertyUnixTimestampOptionalParams,
    ) => propertyUnixTimestamp(context, body, options),
    unixTimestampArray: (
      body: UnixTimestampArrayDatetimeProperty,
      options?: PropertyUnixTimestampArrayOptionalParams,
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
