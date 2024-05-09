// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createEnumDiscriminator,
  EnumDiscriminatorClientOptions,
  EnumDiscriminatorContext,
} from "./enumDiscriminatorContext.js";
export {
  getExtensibleModel,
  putExtensibleModel,
  getExtensibleModelMissingDiscriminator,
  getExtensibleModelWrongDiscriminator,
  getFixedModel,
  putFixedModel,
  getFixedModelMissingDiscriminator,
  getFixedModelWrongDiscriminator,
} from "./operations.js";
