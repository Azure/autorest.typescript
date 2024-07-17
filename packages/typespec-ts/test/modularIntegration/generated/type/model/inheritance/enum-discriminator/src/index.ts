// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { EnumDiscriminatorClient } from "./enumDiscriminatorClient.js";
export {
  Dog,
  Golden,
  DogKind,
  Snake,
  Cobra,
  SnakeKind,
  DogUnion,
  SnakeUnion,
} from "./models/index.js";
export {
  EnumDiscriminatorClientOptionalParams,
  GetExtensibleModelOptionalParams,
  PutExtensibleModelOptionalParams,
  GetExtensibleModelMissingDiscriminatorOptionalParams,
  GetExtensibleModelWrongDiscriminatorOptionalParams,
  GetFixedModelOptionalParams,
  PutFixedModelOptionalParams,
  GetFixedModelMissingDiscriminatorOptionalParams,
  GetFixedModelWrongDiscriminatorOptionalParams,
} from "./api/index.js";
