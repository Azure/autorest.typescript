// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";
import { FileContents } from "./static-helpers/multipartHelpers.js";

export { AzureAIClient } from "./azureAIClient.js";
export {
  AzureAIClientOptionalParams,
  EvaluationsDeleteScheduleOptionalParams,
  EvaluationsListScheduleOptionalParams,
  EvaluationsCreateOrReplaceScheduleOptionalParams,
  EvaluationsGetScheduleOptionalParams,
  EvaluationsUpdateOptionalParams,
  EvaluationsListOptionalParams,
  EvaluationsCreateOptionalParams,
  EvaluationsGetOptionalParams,
  ConnectionsListSecretsOptionalParams,
  ConnectionsGetOptionalParams,
  ConnectionsListOptionalParams,
  AgentsListVectorStoreFileBatchFilesOptionalParams,
  AgentsCancelVectorStoreFileBatchOptionalParams,
  AgentsGetVectorStoreFileBatchOptionalParams,
  AgentsCreateVectorStoreFileBatchOptionalParams,
  AgentsDeleteVectorStoreFileOptionalParams,
  AgentsGetVectorStoreFileOptionalParams,
  AgentsCreateVectorStoreFileOptionalParams,
  AgentsListVectorStoreFilesOptionalParams,
  AgentsDeleteVectorStoreOptionalParams,
  AgentsModifyVectorStoreOptionalParams,
  AgentsGetVectorStoreOptionalParams,
  AgentsCreateVectorStoreOptionalParams,
  AgentsListVectorStoresOptionalParams,
  AgentsGetFileContentOptionalParams,
  AgentsGetFileOptionalParams,
  AgentsDeleteFileOptionalParams,
  AgentsUploadFileOptionalParams,
  AgentsListFilesOptionalParams,
  AgentsListRunStepsOptionalParams,
  AgentsGetRunStepOptionalParams,
  AgentsCreateThreadAndRunOptionalParams,
  AgentsCancelRunOptionalParams,
  AgentsSubmitToolOutputsToRunOptionalParams,
  AgentsUpdateRunOptionalParams,
  AgentsGetRunOptionalParams,
  AgentsListRunsOptionalParams,
  AgentsCreateRunOptionalParams,
  AgentsUpdateMessageOptionalParams,
  AgentsGetMessageOptionalParams,
  AgentsListMessagesOptionalParams,
  AgentsCreateMessageOptionalParams,
  AgentsDeleteThreadOptionalParams,
  AgentsUpdateThreadOptionalParams,
  AgentsGetThreadOptionalParams,
  AgentsCreateThreadOptionalParams,
  AgentsDeleteAgentOptionalParams,
  AgentsUpdateAgentOptionalParams,
  AgentsGetAgentOptionalParams,
  AgentsListAgentsOptionalParams,
  AgentsCreateAgentOptionalParams,
} from "./api/index.js";
export {
  AgentsOperations,
  ConnectionsOperations,
  EvaluationsOperations,
} from "./classic/index.js";
export { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export { FileContents };
