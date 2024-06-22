// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  dogUnionSerializer,
  dogSerializer,
  goldenSerializer,
  snakeUnionSerializer,
  snakeSerializer,
  cobraSerializer,
  Dog,
  Golden,
  DogKind,
  Snake,
  Cobra,
  SnakeKind,
  DogUnion,
  SnakeUnion,
} from "./models.js";
export {
  GetExtensibleModelOptionalParams,
  PutExtensibleModelOptionalParams,
  GetExtensibleModelMissingDiscriminatorOptionalParams,
  GetExtensibleModelWrongDiscriminatorOptionalParams,
  GetFixedModelOptionalParams,
  PutFixedModelOptionalParams,
  GetFixedModelMissingDiscriminatorOptionalParams,
  GetFixedModelWrongDiscriminatorOptionalParams,
} from "./options.js";
