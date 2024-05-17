// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ModelV2Output {
  prop: string;
  enumProp: EnumV2Output;
  unionProp: UnionV2Output;
}

/** Alias for EnumV2Output */
export type EnumV2Output = "enumMemberV2";
/** Alias for UnionV2Output */
export type UnionV2Output = string | number;
