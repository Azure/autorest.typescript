// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  FlattenModel as FlattenModelRest,
  ChildModel as ChildModelRest,
  NestedFlattenModel as NestedFlattenModelRest,
  ChildFlattenModel as ChildFlattenModelRest,
} from "../rest/index.js";

/** This is the model with one level of flattening. */
export interface FlattenModel {
  name: string;
  properties: ChildModel;
}

export function flattenModelSerializer(item: FlattenModel): FlattenModelRest {
  return {
    name: item["name"],
    properties: childModelSerializer(item.properties),
  };
}

/** This is the child model to be flattened. */
export interface ChildModel {
  description: string;
  age: number;
}

export function childModelSerializer(item: ChildModel): ChildModelRest {
  return {
    description: item["description"],
    age: item["age"],
  };
}

/** This is the model with two levels of flattening. */
export interface NestedFlattenModel {
  name: string;
  properties: ChildFlattenModel;
}

export function nestedFlattenModelSerializer(
  item: NestedFlattenModel,
): NestedFlattenModelRest {
  return {
    name: item["name"],
    properties: childFlattenModelSerializer(item.properties),
  };
}

/** This is the child model to be flattened. And it has flattened property as well. */
export interface ChildFlattenModel {
  summary: string;
  properties: ChildModel;
}

export function childFlattenModelSerializer(
  item: ChildFlattenModel,
): ChildFlattenModelRest {
  return {
    summary: item["summary"],
    properties: childModelSerializer(item.properties),
  };
}
