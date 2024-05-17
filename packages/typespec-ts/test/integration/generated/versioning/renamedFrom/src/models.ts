// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface NewModel {
  newProp: string;
  enumProp: NewEnum;
  unionProp: NewUnion;
}

/** Alias for NewEnum */
export type NewEnum = "newEnumMember";
/** Alias for NewUnion */
export type NewUnion = string | number;
/** The version of the API. */
export type Versions = "v1" | "v2";
