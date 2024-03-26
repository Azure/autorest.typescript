// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  UnixTimestampArrayDatetimeProperty,
  UnixTimestampDatetimeProperty,
  Rfc7231DatetimeProperty,
  Rfc3339DatetimeProperty,
  DefaultDatetimeProperty,
} from "../models/models.js";
import {
  UnixTimestampArrayDatetimeProperty as RestUnixTimestampArrayDatetimeProperty,
  UnixTimestampDatetimeProperty as RestUnixTimestampDatetimeProperty,
  Rfc7231DatetimeProperty as RestRfc7231DatetimeProperty,
  Rfc3339DatetimeProperty as RestRfc3339DatetimeProperty,
  DefaultDatetimeProperty as RestDefaultDatetimeProperty,
} from "../rest/index.js";

export function serializeUnixTimestampArrayDatetimeProperty(
  o: UnixTimestampArrayDatetimeProperty,
): RestUnixTimestampArrayDatetimeProperty {
  return {
    value: o["value"].map((e: undefined) => e.getTime()),
  };
}

export function deserializeUnixTimestampArrayDatetimeProperty(
  o: RestUnixTimestampArrayDatetimeProperty,
): UnixTimestampArrayDatetimeProperty {
  return {
    value: o["value"].map(Date),
  };
}

export function serializeUnixTimestampDatetimeProperty(
  o: UnixTimestampDatetimeProperty,
): RestUnixTimestampDatetimeProperty {
  return {
    value: o["value"].getTime(),
  };
}

export function deserializeUnixTimestampDatetimeProperty(
  o: RestUnixTimestampDatetimeProperty,
): UnixTimestampDatetimeProperty {
  return {
    value: new Date(o["value"]),
  };
}

export function serializeRfc7231DatetimeProperty(
  o: Rfc7231DatetimeProperty,
): RestRfc7231DatetimeProperty {
  return {
    value: o["value"].toUTCString(),
  };
}

export function deserializeRfc7231DatetimeProperty(
  o: RestRfc7231DatetimeProperty,
): Rfc7231DatetimeProperty {
  return {
    value: new Date(o["value"]),
  };
}

export function serializeRfc3339DatetimeProperty(
  o: Rfc3339DatetimeProperty,
): RestRfc3339DatetimeProperty {
  return {
    value: o["value"].toISOString(),
  };
}

export function deserializeRfc3339DatetimeProperty(
  o: RestRfc3339DatetimeProperty,
): Rfc3339DatetimeProperty {
  return {
    value: new Date(o["value"]),
  };
}

export function serializeDefaultDatetimeProperty(
  o: DefaultDatetimeProperty,
): RestDefaultDatetimeProperty {
  return {
    value: o["value"].toISOString(),
  };
}

export function deserializeDefaultDatetimeProperty(
  o: RestDefaultDatetimeProperty,
): DefaultDatetimeProperty {
  return {
    value: new Date(o["value"]),
  };
}
