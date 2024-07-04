// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DefaultDatetimeProperty as DefaultDatetimePropertyRest,
  Rfc3339DatetimeProperty as Rfc3339DatetimePropertyRest,
  Rfc7231DatetimeProperty as Rfc7231DatetimePropertyRest,
  UnixTimestampDatetimeProperty as UnixTimestampDatetimePropertyRest,
  UnixTimestampArrayDatetimeProperty as UnixTimestampArrayDatetimePropertyRest,
} from "../rest/index.js";

export interface DefaultDatetimeProperty {
  value: Date;
}

export function defaultDatetimePropertySerializer(
  item: DefaultDatetimeProperty,
): DefaultDatetimePropertyRest {
  return {
    value: item["value"].toISOString(),
  };
}

export interface Rfc3339DatetimeProperty {
  value: Date;
}

export function rfc3339DatetimePropertySerializer(
  item: Rfc3339DatetimeProperty,
): Rfc3339DatetimePropertyRest {
  return {
    value: item["value"].toISOString(),
  };
}

export interface Rfc7231DatetimeProperty {
  value: Date;
}

export function rfc7231DatetimePropertySerializer(
  item: Rfc7231DatetimeProperty,
): Rfc7231DatetimePropertyRest {
  return {
    value: item["value"].toUTCString(),
  };
}

export interface UnixTimestampDatetimeProperty {
  value: Date;
}

export function unixTimestampDatetimePropertySerializer(
  item: UnixTimestampDatetimeProperty,
): UnixTimestampDatetimePropertyRest {
  return {
    value: item["value"].getTime(),
  };
}

export interface UnixTimestampArrayDatetimeProperty {
  value: Date[];
}

export function unixTimestampArrayDatetimePropertySerializer(
  item: UnixTimestampArrayDatetimeProperty,
): UnixTimestampArrayDatetimePropertyRest {
  return {
    value: item["value"].map((p) => p.getTime()),
  };
}
