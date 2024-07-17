// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createSpread,
  SpreadClientOptionalParams,
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
