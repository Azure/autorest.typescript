// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ModelWithSimpleUnionProperty {
  simpleUnion: number | number[];
}

export interface ModelWithNamedUnionProperty {
  namedUnion: Model1 | Model2;
}
