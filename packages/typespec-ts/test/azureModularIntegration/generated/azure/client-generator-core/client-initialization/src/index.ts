// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { HeaderParamClient } from "./headerParam/headerParamClient.js";
export { Input, BlobProperties } from "./models/index.js";
export {
  HeaderParamClientOptionalParams,
  WithBodyOptionalParams,
  WithQueryOptionalParams,
} from "./headerParam/api/index.js";
export { MultipleParamsClient } from "./multipleParams/multipleParamsClient.js";
export {
  MultipleParamsClientOptionalParams,
  WithBodyOptionalParams as MultipleParamsClientWithBodyOptionalParams,
  WithQueryOptionalParams as MultipleParamsClientWithQueryOptionalParams,
} from "./multipleParams/api/index.js";
export { MixedParamsClient } from "./mixedParams/mixedParamsClient.js";
export {
  MixedParamsClientOptionalParams,
  WithBodyOptionalParams as MixedParamsClientWithBodyOptionalParams,
  WithQueryOptionalParams as MixedParamsClientWithQueryOptionalParams,
} from "./mixedParams/api/index.js";
export { PathParamClient } from "./pathParam/pathParamClient.js";
export {
  DeleteStandaloneOptionalParams,
  GetStandaloneOptionalParams,
  WithQueryOptionalParams as PathParamClientWithQueryOptionalParams,
  PathParamClientOptionalParams,
} from "./pathParam/api/index.js";
export { ParamAliasClient } from "./paramAlias/paramAliasClient.js";
export {
  WithOriginalNameOptionalParams,
  WithAliasedNameOptionalParams,
  ParamAliasClientOptionalParams,
} from "./paramAlias/api/index.js";
export { ParentClient } from "./parent/parentClient.js";
export { ParentClientOptionalParams } from "./parent/api/index.js";
export { ChildClient } from "./parent/child/childClient.js";
export {
  ChildClientOptionalParams,
  DeleteStandaloneOptionalParams as ChildClientDeleteStandaloneOptionalParams,
  GetStandaloneOptionalParams as ChildClientGetStandaloneOptionalParams,
  WithQueryOptionalParams as ChildClientWithQueryOptionalParams,
} from "./parent/child/api/index.js";
