// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createSpread,
  SpreadClientOptions,
  SpreadContext,
} from "./SpreadContext.js";
export {
  aliasSpreadAsRequestBody,
  aliasSpreadAsRequestParameter,
  aliasSpreadWithMultipleParameters,
} from "./alias/index.js";
export { modelSpreadAsRequestBody } from "./model/index.js";
