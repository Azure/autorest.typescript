// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ModelV2 {
  prop: string;
  enumProp: EnumV2;
  unionProp: UnionV2;
}

export function modelV2Serializer(item: ModelV2): Record<string, unknown> {
  return {
    prop: item["prop"],
    enumProp: item["enumProp"],
    unionProp: item["unionProp"],
  };
}

/** Type of EnumV2 */
export type EnumV2 = "enumMemberV2";
/** The version of the API. */
export type Versions = "v1" | "v2";
/** Alias for UnionV2 */
export type UnionV2 = string | number;
