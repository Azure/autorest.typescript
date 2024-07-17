// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { NestedDiscriminatorClient } from "./nestedDiscriminatorClient.js";
export {
  Fish,
  Shark,
  SawShark,
  GoblinShark,
  Salmon,
  FishUnion,
  SharkUnion,
} from "./models/index.js";
export {
  NestedDiscriminatorClientOptionalParams,
  GetModelOptionalParams,
  PutModelOptionalParams,
  GetRecursiveModelOptionalParams,
  PutRecursiveModelOptionalParams,
  GetMissingDiscriminatorOptionalParams,
  GetWrongDiscriminatorOptionalParams,
} from "./api/index.js";
