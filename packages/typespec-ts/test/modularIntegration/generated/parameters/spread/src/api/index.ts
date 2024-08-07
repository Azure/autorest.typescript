// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createSpread,
  SpreadContext,
  SpreadClientOptionalParams,
} from "./spreadContext.js";
export {
  aliasSpreadAsRequestBody,
  aliasSpreadParameterWithInnerModel,
  aliasSpreadAsRequestParameter,
  aliasSpreadWithMultipleParameters,
  aliasSpreadParameterWithInnerAlias,
} from "./alias/index.js";
export {
  modelSpreadAsRequestBody,
  modelSpreadCompositeRequestOnlyWithBody,
  modelSpreadCompositeRequestWithoutBody,
  modelSpreadCompositeRequest,
  modelSpreadCompositeRequestMix,
} from "./model/index.js";
