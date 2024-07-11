// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  ModelSpreadAsRequestBodyOptionalParams,
  ModelSpreadCompositeRequestOnlyWithBodyOptionalParams,
  ModelSpreadCompositeRequestWithoutBodyOptionalParams,
  ModelSpreadCompositeRequestOptionalParams,
  ModelSpreadCompositeRequestMixOptionalParams,
  AliasSpreadAsRequestBodyOptionalParams,
  AliasSpreadAsRequestParameterOptionalParams,
  AliasSpreadWithMultipleParametersOptionalParams,
} from "./options.js";
export {
  createSpread,
  SpreadClientOptions,
  SpreadContext,
} from "./spreadContext.js";
export {
  aliasSpreadAsRequestBody,
  aliasSpreadAsRequestParameter,
  aliasSpreadWithMultipleParameters,
} from "./alias/index.js";
export {
  modelSpreadAsRequestBody,
  modelSpreadCompositeRequestOnlyWithBody,
  modelSpreadCompositeRequestWithoutBody,
  modelSpreadCompositeRequest,
  modelSpreadCompositeRequestMix,
} from "./model/index.js";
