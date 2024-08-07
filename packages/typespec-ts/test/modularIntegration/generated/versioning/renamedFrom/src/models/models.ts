// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface NewModel {
  newProp: string;
  enumProp: NewEnum;
  unionProp: NewUnion;
}

export function newModelSerializer(item: NewModel): Record<string, unknown> {
  return {
    newProp: item["newProp"],
    enumProp: item["enumProp"],
    unionProp: item["unionProp"],
  };
}

/** Type of NewEnum */
export type NewEnum = "newEnumMember";
/** The version of the API. */
export type Versions = "v1" | "v2";
/** Alias for NewUnion */
export type NewUnion = string | number;
