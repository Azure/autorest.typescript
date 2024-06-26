// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ModelV2 as ModelV2Rest } from "../rest/index.js";

export interface ModelV2 {
  prop: string;
  enumProp: EnumV2;
  unionProp: UnionV2;
}

export function modelV2Serializer(item: ModelV2): ModelV2Rest {
  return {
    prop: item["prop"],
    enumProp: item["enumProp"],
    unionProp: item["unionProp"],
  };
}

export type EnumV2 = "enumMemberV2";
/** The version of the API. */
export type Versions = "v1" | "v2";
/** Alias for UnionV2 */
export type UnionV2 = string | number;
