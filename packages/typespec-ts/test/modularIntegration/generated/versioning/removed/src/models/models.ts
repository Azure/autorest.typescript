// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ModelV2 {
  prop: string;
  enumProp: EnumV2;
  unionProp: UnionV2;
}

/** */
export type EnumV2 = "enumMemberV2";
/** The version of the API. */
/** */
export type Versions = "v1" | "v2";
/** Alias for UnionV2 */
export type UnionV2 = string | number;
