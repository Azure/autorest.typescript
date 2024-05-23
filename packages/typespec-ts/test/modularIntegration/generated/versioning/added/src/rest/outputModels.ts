// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ModelV1Output {
  prop: string;
  enumProp: EnumV1Output;
  unionProp: UnionV1Output;
}

export interface ModelV2Output {
  prop: string;
  enumProp: EnumV2Output;
  unionProp: UnionV2Output;
}

/** Alias for EnumV1Output */
export type EnumV1Output = "enumMemberV1" | "enumMemberV2";
/** Alias for UnionV1Output */
export type UnionV1Output = string | number;
/** Alias for EnumV2Output */
export type EnumV2Output = "enumMember";
/** Alias for UnionV2Output */
export type UnionV2Output = string | number;
