// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is the model with one level of flattening. */
export interface FlattenModelOutput {
  name: string;
  properties: ChildModelOutput;
}

/** This is the child model to be flattened. */
export interface ChildModelOutput {
  description: string;
  age: number;
}

/** This is the model with two levels of flattening. */
export interface NestedFlattenModelOutput {
  name: string;
  properties: ChildFlattenModelOutput;
}

/** This is the child model to be flattened. And it has flattened property as well. */
export interface ChildFlattenModelOutput {
  summary: string;
  properties: ChildModelOutput;
}
