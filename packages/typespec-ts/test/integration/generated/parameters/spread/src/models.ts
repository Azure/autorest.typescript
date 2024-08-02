// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** This is a simple model. */
export interface BodyParameter {
  name: string;
}

/** This is a model with non-body http request decorator. */
export interface CompositeRequestMix {
  prop: string;
}

export interface InnerModel {
  name: string;
}
