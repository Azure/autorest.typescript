// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  getModel,
  putModel,
  getRecursiveModel,
  putRecursiveModel,
  getMissingDiscriminator,
  getWrongDiscriminator,
  getLegacyModel,
} from "./operations.js";
export {
  GetModelOptionalParams,
  PutModelOptionalParams,
  GetRecursiveModelOptionalParams,
  PutRecursiveModelOptionalParams,
  GetMissingDiscriminatorOptionalParams,
  GetWrongDiscriminatorOptionalParams,
  GetLegacyModelOptionalParams,
} from "./options.js";
export {
  createSingleDiscriminator,
  SingleDiscriminatorClientOptionalParams,
  SingleDiscriminatorContext,
} from "./singleDiscriminatorContext.js";
