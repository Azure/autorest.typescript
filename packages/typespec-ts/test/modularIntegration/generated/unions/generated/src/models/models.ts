// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ModelWithSimpleUnionProperty {
  simpleUnion: number | number[];
}

export interface ModelWithNamedUnionProperty {
  namedUnion: Model1 | Model2;
}

/** This is a base model. */
export interface BaseModel {
  name: string;
}

/** The first one of the unioned model type. */
export interface Model1 extends BaseModel {
  prop1: number;
}

/** The second one of the unioned model type. */
export interface Model2 extends BaseModel {
  prop2: number;
}

export interface ModelWithSimpleUnionPropertyInResponse {
  simpleUnion: string | number[];
}

export interface ModelWithNamedUnionPropertyInResponse {
  namedUnion: Model1 | Model2;
}
