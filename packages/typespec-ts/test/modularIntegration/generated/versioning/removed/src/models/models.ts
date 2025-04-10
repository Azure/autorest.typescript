// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** model interface ModelV2 */
export interface ModelV2 {
  prop: string;
  enumProp: EnumV2;
  unionProp: UnionV2;
}

export function modelV2Serializer(item: ModelV2): any {
  return {
    prop: item["prop"],
    enumProp: item["enumProp"],
    unionProp: unionV2Serializer(item["unionProp"]),
  };
}

export function modelV2Deserializer(item: any): ModelV2 {
  return {
    prop: item["prop"],
    enumProp: item["enumProp"],
    unionProp: unionV2Deserializer(item["unionProp"]),
  };
}

/** Type of EnumV2 */
export type EnumV2 = "enumMemberV2";
/** Alias for UnionV2 */
export type UnionV2 = string | number;

export function unionV2Serializer(item: UnionV2): any {
  return item;
}

export function unionV2Deserializer(item: any): UnionV2 {
  return item;
}

/** model interface ModelV3 */
export interface ModelV3 {
  id: string;
  enumProp: EnumV3;
}

export function modelV3Serializer(item: ModelV3): any {
  return { id: item["id"], enumProp: item["enumProp"] };
}

export function modelV3Deserializer(item: any): ModelV3 {
  return {
    id: item["id"],
    enumProp: item["enumProp"],
  };
}

/** Type of EnumV3 */
export type EnumV3 = "enumMemberV1" | "enumMemberV2Preview";
/** The version of the API. */
export type Versions = "v1" | "v2preview" | "v2";
