// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { SingleDiscriminatorClient } from "./singleDiscriminatorClient.js";
export {
  Bird,
  SeaGull,
  Sparrow,
  Goose,
  Eagle,
  Dinosaur,
  TRex,
  BirdUnion,
  DinosaurUnion,
} from "./models/index.js";
export {
  GetModelOptionalParams,
  PutModelOptionalParams,
  GetRecursiveModelOptionalParams,
  PutRecursiveModelOptionalParams,
  GetMissingDiscriminatorOptionalParams,
  GetWrongDiscriminatorOptionalParams,
  GetLegacyModelOptionalParams,
  SingleDiscriminatorClientOptionalParams,
} from "./api/index.js";
