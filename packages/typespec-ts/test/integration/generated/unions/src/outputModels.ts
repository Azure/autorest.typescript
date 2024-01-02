// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The first one of the unioned model type. */
export interface Model1Output extends BaseModelOutput {
  prop1: number;
}

/** This is a base model. */
export interface BaseModelOutput {
  name: string;
}

/** The second one of the unioned model type. */
export interface Model2Output extends BaseModelOutput {
  prop2: number;
}

export interface ModelWithSimpleUnionPropertyInResponseOutput {
  simpleUnion: string | number[];
}

export interface ModelWithNamedUnionPropertyInResponseOutput {
  namedUnion: MyNamedUnionOutput;
}

export type MyNamedUnionOutput = Model1Output | Model2Output;
