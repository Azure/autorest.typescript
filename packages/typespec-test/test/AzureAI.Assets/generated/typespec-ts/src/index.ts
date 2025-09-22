// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { MachineLearningServicesClient } from "./machineLearningServicesClient.js";
export {
  Index,
  SystemData,
  VersionInfo,
  Prompt,
  KnownVersions,
} from "./models/index.js";
export { MachineLearningServicesClientOptionalParams } from "./api/index.js";
export {
  IndexesListLatestOptionalParams,
  IndexesGetNextVersionOptionalParams,
  IndexesGetLatestOptionalParams,
  IndexesListOptionalParams,
  IndexesCreateOrUpdateOptionalParams,
  IndexesGetOptionalParams,
} from "./api/indexes/index.js";
export {
  PromptsListLatestOptionalParams,
  PromptsGetNextVersionOptionalParams,
  PromptsGetLatestOptionalParams,
  PromptsListOptionalParams,
  PromptsCreateOrUpdateOptionalParams,
  PromptsGetOptionalParams,
} from "./api/prompts/index.js";
export { IndexesOperations, PromptsOperations } from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
