// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is the model with one level of flattening. */
export interface FlattenModel {
  name: string;
  properties: ChildModel;
}

/** This is the child model to be flattened. */
export interface ChildModel {
  description: string;
  age: number;
}

/** This is the model with two levels of flattening. */
export interface NestedFlattenModel {
  name: string;
  properties: ChildFlattenModel;
}

/** This is the child model to be flattened. And it has flattened property as well. */
export interface ChildFlattenModel {
  summary: string;
  properties: ChildModel;
}
