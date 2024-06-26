// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ModelV1 {
  prop: string;
  enumProp: EnumV1;
  unionProp: UnionV1;
}

export type EnumV1 = "enumMemberV1" | "enumMemberV2";

export interface ModelV2 {
  prop: string;
  enumProp: EnumV2;
  unionProp: UnionV2;
}

export type EnumV2 = "enumMember";
/** The version of the API. */
export type Versions = "v1" | "v2";
/** Alias for UnionV1 */
export type UnionV1 = string | number;
/** Alias for UnionV2 */
export type UnionV2 = string | number;
