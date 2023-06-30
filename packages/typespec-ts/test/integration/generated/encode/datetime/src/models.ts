// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface DefaultDatetimeProperty {
  value: Date | string;
}

export interface Rfc3339DatetimeProperty {
  value: Date | string;
}

export interface Rfc7231DatetimeProperty {
  value: Date | string;
}

export interface UnixTimestampDatetimeProperty {
  value: number;
}

export interface UnixTimestampArrayDatetimeProperty {
  value: number[];
}
