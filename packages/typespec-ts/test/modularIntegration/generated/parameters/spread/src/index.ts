// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { SpreadClient, SpreadClientOptions } from "./spreadClient.js";
export {
  bodyParameterSerializer,
  compositeRequestMixSerializer,
  BodyParameter,
  CompositeRequestMix,
  ModelSpreadAsRequestBodyOptionalParams,
  ModelSpreadCompositeRequestOnlyWithBodyOptionalParams,
  ModelSpreadCompositeRequestWithoutBodyOptionalParams,
  ModelSpreadCompositeRequestOptionalParams,
  ModelSpreadCompositeRequestMixOptionalParams,
  AliasSpreadAsRequestBodyOptionalParams,
  AliasSpreadAsRequestParameterOptionalParams,
  AliasSpreadWithMultipleParametersOptionalParams,
} from "./models/index.js";
export { AliasOperations, ModelOperations } from "./classic/index.js";
