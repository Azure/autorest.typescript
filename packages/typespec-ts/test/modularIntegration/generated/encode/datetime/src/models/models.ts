// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface DefaultDatetimeProperty {
  value: Date;
}

export function defaultDatetimePropertySerializer(
  item: DefaultDatetimeProperty,
): Record<string, unknown> {
  return {
    value: item["value"].toISOString(),
  };
}

export interface Rfc3339DatetimeProperty {
  value: Date;
}

export function rfc3339DatetimePropertySerializer(
  item: Rfc3339DatetimeProperty,
): Record<string, unknown> {
  return {
    value: item["value"].toISOString(),
  };
}

export interface Rfc7231DatetimeProperty {
  value: Date;
}

export function rfc7231DatetimePropertySerializer(
  item: Rfc7231DatetimeProperty,
): Record<string, unknown> {
  return {
    value: item["value"].toUTCString(),
  };
}

export interface UnixTimestampDatetimeProperty {
  value: Date;
}

export function unixTimestampDatetimePropertySerializer(
  item: UnixTimestampDatetimeProperty,
): Record<string, unknown> {
  return {
    value: item["value"].getTime(),
  };
}

export interface UnixTimestampArrayDatetimeProperty {
  value: Date[];
}

export function unixTimestampArrayDatetimePropertySerializer(
  item: UnixTimestampArrayDatetimeProperty,
): Record<string, unknown> {
  return {
    value: item["value"].map((p) => p.getTime()),
  };
}
