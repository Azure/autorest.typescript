// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NewModel as NewModelRest } from "../rest/index.js";

export interface NewModel {
  newProp: string;
  enumProp: NewEnum;
  unionProp: NewUnion;
}

export function newModelSerializer(item: NewModel): NewModelRest {
  return {
    newProp: item["newProp"],
    enumProp: item["enumProp"],
    unionProp: item["unionProp"]
  };
}

export type NewEnum = "newEnumMember";
/** The version of the API. */
export type Versions = "v1" | "v2";
/** Alias for NewUnion */
export type NewUnion = string | number;
