// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  KqlScriptsGetAll200Response,
  KqlScriptsGetAlldefaultResponse,
  KqlScriptCreateOrUpdate200Response,
  KqlScriptCreateOrUpdate202Response,
  KqlScriptCreateOrUpdatedefaultResponse,
  KqlScriptGetByName200Response,
  KqlScriptGetByNamedefaultResponse,
  KqlScriptDeleteByName200Response,
  KqlScriptDeleteByName202Response,
  KqlScriptDeleteByName204Response,
  KqlScriptDeleteByNamedefaultResponse,
  KqlScriptRename200Response,
  KqlScriptRename202Response,
  KqlScriptRenamedefaultResponse,
  MetastoreRegister201Response,
  MetastoreRegisterdefaultResponse,
  MetastoreGetDatabaseOperations200Response,
  MetastoreGetDatabaseOperationsdefaultResponse,
  MetastoreUpdate201Response,
  MetastoreUpdatedefaultResponse,
  MetastoreDelete204Response,
  MetastoreDeletedefaultResponse,
  SparkConfigurationGetSparkConfigurationsByWorkspace200Response,
  SparkConfigurationGetSparkConfigurationsByWorkspacedefaultResponse,
  SparkConfigurationCreateOrUpdateSparkConfiguration200Response,
  SparkConfigurationCreateOrUpdateSparkConfiguration202Response,
  SparkConfigurationCreateOrUpdateSparkConfigurationdefaultResponse,
  SparkConfigurationGetSparkConfiguration200Response,
  SparkConfigurationGetSparkConfiguration304Response,
  SparkConfigurationGetSparkConfigurationdefaultResponse,
  SparkConfigurationDeleteSparkConfiguration200Response,
  SparkConfigurationDeleteSparkConfiguration202Response,
  SparkConfigurationDeleteSparkConfiguration204Response,
  SparkConfigurationDeleteSparkConfigurationdefaultResponse,
  SparkConfigurationRenameSparkConfiguration200Response,
  SparkConfigurationRenameSparkConfiguration202Response,
  SparkConfigurationRenameSparkConfigurationdefaultResponse,
  BigDataPoolsList200Response,
  BigDataPoolsListdefaultResponse,
  BigDataPoolsGet200Response,
  BigDataPoolsGetdefaultResponse,
  DataFlowCreateOrUpdateDataFlow200Response,
  DataFlowCreateOrUpdateDataFlow202Response,
  DataFlowCreateOrUpdateDataFlowdefaultResponse,
  DataFlowGetDataFlow200Response,
  DataFlowGetDataFlowdefaultResponse,
  DataFlowDeleteDataFlow200Response,
  DataFlowDeleteDataFlow202Response,
  DataFlowDeleteDataFlow204Response,
  DataFlowDeleteDataFlowdefaultResponse,
  DataFlowRenameDataFlow200Response,
  DataFlowRenameDataFlow202Response,
  DataFlowRenameDataFlowdefaultResponse,
  DataFlowGetDataFlowsByWorkspace200Response,
  DataFlowGetDataFlowsByWorkspacedefaultResponse,
  DataFlowDebugSessionCreateDataFlowDebugSession200Response,
  DataFlowDebugSessionCreateDataFlowDebugSession202Response,
  DataFlowDebugSessionCreateDataFlowDebugSessiondefaultResponse,
  DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspace200Response,
  DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspacedefaultResponse,
  DataFlowDebugSessionAddDataFlow200Response,
  DataFlowDebugSessionAddDataFlowdefaultResponse,
  DataFlowDebugSessionDeleteDataFlowDebugSession200Response,
  DataFlowDebugSessionDeleteDataFlowDebugSessiondefaultResponse,
  DataFlowDebugSessionExecuteCommand200Response,
  DataFlowDebugSessionExecuteCommand202Response,
  DataFlowDebugSessionExecuteCommanddefaultResponse,
  DatasetGetDatasetsByWorkspace200Response,
  DatasetGetDatasetsByWorkspacedefaultResponse,
  DatasetCreateOrUpdateDataset200Response,
  DatasetCreateOrUpdateDataset202Response,
  DatasetCreateOrUpdateDatasetdefaultResponse,
  DatasetGetDataset200Response,
  DatasetGetDataset304Response,
  DatasetGetDatasetdefaultResponse,
  DatasetDeleteDataset200Response,
  DatasetDeleteDataset202Response,
  DatasetDeleteDataset204Response,
  DatasetDeleteDatasetdefaultResponse,
  DatasetRenameDataset200Response,
  DatasetRenameDataset202Response,
  DatasetRenameDatasetdefaultResponse,
  IntegrationRuntimesList200Response,
  IntegrationRuntimesListdefaultResponse,
  IntegrationRuntimesGet200Response,
  IntegrationRuntimesGetdefaultResponse,
  LibraryList200Response,
  LibraryListdefaultResponse,
  LibraryFlush200Response,
  LibraryFlush202Response,
  LibraryFlushdefaultResponse,
  LibraryGetOperationResult200Response,
  LibraryGetOperationResult202Response,
  LibraryGetOperationResultdefaultResponse,
  LibraryDelete200Response,
  LibraryDelete202Response,
  LibraryDelete409Response,
  LibraryDeletedefaultResponse,
  LibraryGet200Response,
  LibraryGet304Response,
  LibraryGetdefaultResponse,
  LibraryCreate200Response,
  LibraryCreate202Response,
  LibraryCreatedefaultResponse,
  LinkedServiceGetLinkedServicesByWorkspace200Response,
  LinkedServiceGetLinkedServicesByWorkspacedefaultResponse,
  LinkedServiceCreateOrUpdateLinkedService200Response,
  LinkedServiceCreateOrUpdateLinkedService202Response,
  LinkedServiceCreateOrUpdateLinkedServicedefaultResponse,
  LinkedServiceGetLinkedService200Response,
  LinkedServiceGetLinkedService304Response,
  LinkedServiceGetLinkedServicedefaultResponse,
  LinkedServiceDeleteLinkedService200Response,
  LinkedServiceDeleteLinkedService202Response,
  LinkedServiceDeleteLinkedService204Response,
  LinkedServiceDeleteLinkedServicedefaultResponse,
  LinkedServiceRenameLinkedService200Response,
  LinkedServiceRenameLinkedService202Response,
  LinkedServiceRenameLinkedServicedefaultResponse,
  NotebookGetNotebooksByWorkspace200Response,
  NotebookGetNotebooksByWorkspacedefaultResponse,
  NotebookGetNotebookSummaryByWorkSpace200Response,
  NotebookGetNotebookSummaryByWorkSpacedefaultResponse,
  NotebookCreateOrUpdateNotebook200Response,
  NotebookCreateOrUpdateNotebook202Response,
  NotebookCreateOrUpdateNotebookdefaultResponse,
  NotebookGetNotebook200Response,
  NotebookGetNotebook304Response,
  NotebookGetNotebookdefaultResponse,
  NotebookDeleteNotebook200Response,
  NotebookDeleteNotebook202Response,
  NotebookDeleteNotebook204Response,
  NotebookDeleteNotebookdefaultResponse,
  NotebookRenameNotebook200Response,
  NotebookRenameNotebook202Response,
  NotebookRenameNotebookdefaultResponse,
  NotebookOperationResultGet200Response,
  NotebookOperationResultGet201Response,
  NotebookOperationResultGet202Response,
  NotebookOperationResultGet204Response,
  NotebookOperationResultGetdefaultResponse,
  PipelineGetPipelinesByWorkspace200Response,
  PipelineGetPipelinesByWorkspacedefaultResponse,
  PipelineCreateOrUpdatePipeline200Response,
  PipelineCreateOrUpdatePipeline202Response,
  PipelineCreateOrUpdatePipelinedefaultResponse,
  PipelineGetPipeline200Response,
  PipelineGetPipeline304Response,
  PipelineGetPipelinedefaultResponse,
  PipelineDeletePipeline200Response,
  PipelineDeletePipeline202Response,
  PipelineDeletePipeline204Response,
  PipelineDeletePipelinedefaultResponse,
  PipelineRenamePipeline200Response,
  PipelineRenamePipeline202Response,
  PipelineRenamePipelinedefaultResponse,
  PipelineCreatePipelineRun202Response,
  PipelineCreatePipelineRundefaultResponse,
  PipelineRunQueryPipelineRunsByWorkspace200Response,
  PipelineRunQueryPipelineRunsByWorkspacedefaultResponse,
  PipelineRunGetPipelineRun200Response,
  PipelineRunGetPipelineRundefaultResponse,
  PipelineRunQueryActivityRuns200Response,
  PipelineRunQueryActivityRunsdefaultResponse,
  PipelineRunCancelPipelineRun200Response,
  PipelineRunCancelPipelineRundefaultResponse,
  SparkJobDefinitionGetSparkJobDefinitionsByWorkspace200Response,
  SparkJobDefinitionGetSparkJobDefinitionsByWorkspacedefaultResponse,
  SparkJobDefinitionCreateOrUpdateSparkJobDefinition200Response,
  SparkJobDefinitionCreateOrUpdateSparkJobDefinition202Response,
  SparkJobDefinitionCreateOrUpdateSparkJobDefinitiondefaultResponse,
  SparkJobDefinitionGetSparkJobDefinition200Response,
  SparkJobDefinitionGetSparkJobDefinition304Response,
  SparkJobDefinitionGetSparkJobDefinitiondefaultResponse,
  SparkJobDefinitionDeleteSparkJobDefinition200Response,
  SparkJobDefinitionDeleteSparkJobDefinition202Response,
  SparkJobDefinitionDeleteSparkJobDefinition204Response,
  SparkJobDefinitionDeleteSparkJobDefinitiondefaultResponse,
  SparkJobDefinitionExecuteSparkJobDefinition200Response,
  SparkJobDefinitionExecuteSparkJobDefinition202Response,
  SparkJobDefinitionExecuteSparkJobDefinitiondefaultResponse,
  SparkJobDefinitionRenameSparkJobDefinition200Response,
  SparkJobDefinitionRenameSparkJobDefinition202Response,
  SparkJobDefinitionRenameSparkJobDefinitiondefaultResponse,
  SparkJobDefinitionDebugSparkJobDefinition200Response,
  SparkJobDefinitionDebugSparkJobDefinition202Response,
  SparkJobDefinitionDebugSparkJobDefinitiondefaultResponse,
  SqlPoolsList200Response,
  SqlPoolsListdefaultResponse,
  SqlPoolsGet200Response,
  SqlPoolsGetdefaultResponse,
  SqlScriptGetSqlScriptsByWorkspace200Response,
  SqlScriptGetSqlScriptsByWorkspacedefaultResponse,
  SqlScriptCreateOrUpdateSqlScript200Response,
  SqlScriptCreateOrUpdateSqlScript202Response,
  SqlScriptCreateOrUpdateSqlScriptdefaultResponse,
  SqlScriptGetSqlScript200Response,
  SqlScriptGetSqlScript304Response,
  SqlScriptGetSqlScriptdefaultResponse,
  SqlScriptDeleteSqlScript200Response,
  SqlScriptDeleteSqlScript202Response,
  SqlScriptDeleteSqlScript204Response,
  SqlScriptDeleteSqlScriptdefaultResponse,
  SqlScriptRenameSqlScript200Response,
  SqlScriptRenameSqlScript202Response,
  SqlScriptRenameSqlScriptdefaultResponse,
  TriggerGetTriggersByWorkspace200Response,
  TriggerGetTriggersByWorkspacedefaultResponse,
  TriggerCreateOrUpdateTrigger200Response,
  TriggerCreateOrUpdateTrigger202Response,
  TriggerCreateOrUpdateTriggerdefaultResponse,
  TriggerGetTrigger200Response,
  TriggerGetTrigger304Response,
  TriggerGetTriggerdefaultResponse,
  TriggerDeleteTrigger200Response,
  TriggerDeleteTrigger202Response,
  TriggerDeleteTrigger204Response,
  TriggerDeleteTriggerdefaultResponse,
  TriggerSubscribeTriggerToEvents200Response,
  TriggerSubscribeTriggerToEvents202Response,
  TriggerSubscribeTriggerToEventsdefaultResponse,
  TriggerGetEventSubscriptionStatus200Response,
  TriggerGetEventSubscriptionStatusdefaultResponse,
  TriggerUnsubscribeTriggerFromEvents200Response,
  TriggerUnsubscribeTriggerFromEvents202Response,
  TriggerUnsubscribeTriggerFromEventsdefaultResponse,
  TriggerStartTrigger200Response,
  TriggerStartTriggerdefaultResponse,
  TriggerStopTrigger200Response,
  TriggerStopTriggerdefaultResponse,
  TriggerRunRerunTriggerInstance200Response,
  TriggerRunRerunTriggerInstancedefaultResponse,
  TriggerRunCancelTriggerInstance200Response,
  TriggerRunCancelTriggerInstancedefaultResponse,
  TriggerRunQueryTriggerRunsByWorkspace200Response,
  TriggerRunQueryTriggerRunsByWorkspacedefaultResponse,
  WorkspaceGet200Response,
  WorkspaceGetdefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /kqlScripts": ["200"],
  "PUT /kqlScripts/{kqlScriptName}": ["200", "202"],
  "GET /kqlScripts/{kqlScriptName}": ["200", "202", "204"],
  "DELETE /kqlScripts/{kqlScriptName}": ["200", "202", "204"],
  "POST /kqlScripts/{kqlScriptName}/rename": ["200", "202"],
  "GET /kqlScripts/{kqlScriptName}/rename": ["200", "202"],
  "PUT /metastore/create-database-operations/{id}": ["201"],
  "GET /metastore/create-database-operations/{id}": ["200"],
  "PUT /metastore/update-database-operations/{id}": ["201"],
  "DELETE /metastore/databases/{id}": ["204"],
  "GET /sparkconfigurations": ["200"],
  "PUT /sparkconfigurations/{sparkConfigurationName}": ["200", "202"],
  "GET /sparkconfigurations/{sparkConfigurationName}": ["200", "202", "204"],
  "DELETE /sparkconfigurations/{sparkConfigurationName}": ["200", "202", "204"],
  "POST /sparkconfigurations/{sparkConfigurationName}/rename": ["200", "202"],
  "GET /sparkconfigurations/{sparkConfigurationName}/rename": ["200", "202"],
  "GET /bigDataPools": ["200"],
  "GET /bigDataPools/{bigDataPoolName}": ["200"],
  "PUT /dataflows/{dataFlowName}": ["200", "202"],
  "GET /dataflows/{dataFlowName}": ["200", "202", "204"],
  "DELETE /dataflows/{dataFlowName}": ["200", "202", "204"],
  "POST /dataflows/{dataFlowName}/rename": ["200", "202"],
  "GET /dataflows/{dataFlowName}/rename": ["200", "202"],
  "GET /dataflows": ["200"],
  "POST /createDataFlowDebugSession": ["200", "202"],
  "GET /createDataFlowDebugSession": ["200", "202"],
  "POST /queryDataFlowDebugSessions": ["200"],
  "POST /addDataFlowToDebugSession": ["200"],
  "POST /deleteDataFlowDebugSession": ["200"],
  "POST /executeDataFlowDebugCommand": ["200", "202"],
  "GET /executeDataFlowDebugCommand": ["200", "202"],
  "GET /datasets": ["200"],
  "PUT /datasets/{datasetName}": ["200", "202"],
  "GET /datasets/{datasetName}": ["200", "202", "204"],
  "DELETE /datasets/{datasetName}": ["200", "202", "204"],
  "POST /datasets/{datasetName}/rename": ["200", "202"],
  "GET /datasets/{datasetName}/rename": ["200", "202"],
  "POST /getGitHubAccessToken": ["200"],
  "GET /integrationRuntimes": ["200"],
  "GET /integrationRuntimes/{integrationRuntimeName}": ["200"],
  "GET /libraries": ["200"],
  "POST /libraries/{libraryName}/flush": ["200", "202"],
  "GET /libraries/{libraryName}/flush": ["200", "202"],
  "GET /libraryOperationResults/{operationId}": ["200", "202"],
  "DELETE /libraries/{libraryName}": ["200", "202", "409"],
  "GET /libraries/{libraryName}": ["200", "202"],
  "PUT /libraries/{libraryName}": ["200", "202"],
  "GET /linkedservices": ["200"],
  "PUT /linkedservices/{linkedServiceName}": ["200", "202"],
  "GET /linkedservices/{linkedServiceName}": ["200", "202", "204"],
  "DELETE /linkedservices/{linkedServiceName}": ["200", "202", "204"],
  "POST /linkedservices/{linkedServiceName}/rename": ["200", "202"],
  "GET /linkedservices/{linkedServiceName}/rename": ["200", "202"],
  "GET /notebooks": ["200"],
  "GET /notebooksSummary": ["200"],
  "PUT /notebooks/{notebookName}": ["200", "202"],
  "GET /notebooks/{notebookName}": ["200", "202", "204"],
  "DELETE /notebooks/{notebookName}": ["200", "202", "204"],
  "POST /notebooks/{notebookName}/rename": ["200", "202"],
  "GET /notebooks/{notebookName}/rename": ["200", "202"],
  "GET /notebookOperationResults/{operationId}": ["200", "201", "202", "204"],
  "GET /pipelines": ["200"],
  "PUT /pipelines/{pipelineName}": ["200", "202"],
  "GET /pipelines/{pipelineName}": ["200", "202", "204"],
  "DELETE /pipelines/{pipelineName}": ["200", "202", "204"],
  "POST /pipelines/{pipelineName}/rename": ["200", "202"],
  "GET /pipelines/{pipelineName}/rename": ["200", "202"],
  "POST /pipelines/{pipelineName}/createRun": ["202"],
  "POST /queryPipelineRuns": ["200"],
  "GET /pipelineruns/{runId}": ["200"],
  "POST /pipelines/{pipelineName}/pipelineruns/{runId}/queryActivityruns": [
    "200"
  ],
  "POST /pipelineruns/{runId}/cancel": ["200"],
  "GET /sparkJobDefinitions": ["200"],
  "PUT /sparkJobDefinitions/{sparkJobDefinitionName}": ["200", "202"],
  "GET /sparkJobDefinitions/{sparkJobDefinitionName}": ["200", "202", "204"],
  "DELETE /sparkJobDefinitions/{sparkJobDefinitionName}": ["200", "202", "204"],
  "POST /sparkJobDefinitions/{sparkJobDefinitionName}/execute": ["200", "202"],
  "GET /sparkJobDefinitions/{sparkJobDefinitionName}/execute": ["200", "202"],
  "POST /sparkJobDefinitions/{sparkJobDefinitionName}/rename": ["200", "202"],
  "GET /sparkJobDefinitions/{sparkJobDefinitionName}/rename": ["200", "202"],
  "POST /debugSparkJobDefinition": ["200", "202"],
  "GET /debugSparkJobDefinition": ["200", "202"],
  "GET /sqlPools": ["200"],
  "GET /sqlPools/{sqlPoolName}": ["200"],
  "GET /sqlScripts": ["200"],
  "PUT /sqlScripts/{sqlScriptName}": ["200", "202"],
  "GET /sqlScripts/{sqlScriptName}": ["200", "202", "204"],
  "DELETE /sqlScripts/{sqlScriptName}": ["200", "202", "204"],
  "POST /sqlScripts/{sqlScriptName}/rename": ["200", "202"],
  "GET /sqlScripts/{sqlScriptName}/rename": ["200", "202"],
  "GET /triggers": ["200"],
  "PUT /triggers/{triggerName}": ["200", "202"],
  "GET /triggers/{triggerName}": ["200", "202", "204"],
  "DELETE /triggers/{triggerName}": ["200", "202", "204"],
  "POST /triggers/{triggerName}/subscribeToEvents": ["200", "202"],
  "GET /triggers/{triggerName}/subscribeToEvents": ["200", "202"],
  "POST /triggers/{triggerName}/getEventSubscriptionStatus": ["200"],
  "POST /triggers/{triggerName}/unsubscribeFromEvents": ["200", "202"],
  "GET /triggers/{triggerName}/unsubscribeFromEvents": ["200", "202"],
  "POST /triggers/{triggerName}/start": ["200"],
  "GET /triggers/{triggerName}/start": ["200"],
  "POST /triggers/{triggerName}/stop": ["200"],
  "GET /triggers/{triggerName}/stop": ["200"],
  "POST /triggers/{triggerName}/triggerRuns/{runId}/rerun": ["200"],
  "POST /triggers/{triggerName}/triggerRuns/{runId}/cancel": ["200"],
  "POST /queryTriggerRuns": ["200"],
  "GET /workspace": ["200"]
};

export function isUnexpected(
  response: KqlScriptsGetAll200Response | KqlScriptsGetAlldefaultResponse
): response is KqlScriptsGetAlldefaultResponse;
export function isUnexpected(
  response:
    | KqlScriptCreateOrUpdate200Response
    | KqlScriptCreateOrUpdate202Response
    | KqlScriptCreateOrUpdatedefaultResponse
): response is KqlScriptCreateOrUpdatedefaultResponse;
export function isUnexpected(
  response: KqlScriptGetByName200Response | KqlScriptGetByNamedefaultResponse
): response is KqlScriptGetByNamedefaultResponse;
export function isUnexpected(
  response:
    | KqlScriptDeleteByName200Response
    | KqlScriptDeleteByName202Response
    | KqlScriptDeleteByName204Response
    | KqlScriptDeleteByNamedefaultResponse
): response is KqlScriptDeleteByNamedefaultResponse;
export function isUnexpected(
  response:
    | KqlScriptRename200Response
    | KqlScriptRename202Response
    | KqlScriptRenamedefaultResponse
): response is KqlScriptRenamedefaultResponse;
export function isUnexpected(
  response: MetastoreRegister201Response | MetastoreRegisterdefaultResponse
): response is MetastoreRegisterdefaultResponse;
export function isUnexpected(
  response:
    | MetastoreGetDatabaseOperations200Response
    | MetastoreGetDatabaseOperationsdefaultResponse
): response is MetastoreGetDatabaseOperationsdefaultResponse;
export function isUnexpected(
  response: MetastoreUpdate201Response | MetastoreUpdatedefaultResponse
): response is MetastoreUpdatedefaultResponse;
export function isUnexpected(
  response: MetastoreDelete204Response | MetastoreDeletedefaultResponse
): response is MetastoreDeletedefaultResponse;
export function isUnexpected(
  response:
    | SparkConfigurationGetSparkConfigurationsByWorkspace200Response
    | SparkConfigurationGetSparkConfigurationsByWorkspacedefaultResponse
): response is SparkConfigurationGetSparkConfigurationsByWorkspacedefaultResponse;
export function isUnexpected(
  response:
    | SparkConfigurationCreateOrUpdateSparkConfiguration200Response
    | SparkConfigurationCreateOrUpdateSparkConfiguration202Response
    | SparkConfigurationCreateOrUpdateSparkConfigurationdefaultResponse
): response is SparkConfigurationCreateOrUpdateSparkConfigurationdefaultResponse;
export function isUnexpected(
  response:
    | SparkConfigurationGetSparkConfiguration200Response
    | SparkConfigurationGetSparkConfiguration304Response
    | SparkConfigurationGetSparkConfigurationdefaultResponse
): response is SparkConfigurationGetSparkConfigurationdefaultResponse;
export function isUnexpected(
  response:
    | SparkConfigurationDeleteSparkConfiguration200Response
    | SparkConfigurationDeleteSparkConfiguration202Response
    | SparkConfigurationDeleteSparkConfiguration204Response
    | SparkConfigurationDeleteSparkConfigurationdefaultResponse
): response is SparkConfigurationDeleteSparkConfigurationdefaultResponse;
export function isUnexpected(
  response:
    | SparkConfigurationRenameSparkConfiguration200Response
    | SparkConfigurationRenameSparkConfiguration202Response
    | SparkConfigurationRenameSparkConfigurationdefaultResponse
): response is SparkConfigurationRenameSparkConfigurationdefaultResponse;
export function isUnexpected(
  response: BigDataPoolsList200Response | BigDataPoolsListdefaultResponse
): response is BigDataPoolsListdefaultResponse;
export function isUnexpected(
  response: BigDataPoolsGet200Response | BigDataPoolsGetdefaultResponse
): response is BigDataPoolsGetdefaultResponse;
export function isUnexpected(
  response:
    | DataFlowCreateOrUpdateDataFlow200Response
    | DataFlowCreateOrUpdateDataFlow202Response
    | DataFlowCreateOrUpdateDataFlowdefaultResponse
): response is DataFlowCreateOrUpdateDataFlowdefaultResponse;
export function isUnexpected(
  response: DataFlowGetDataFlow200Response | DataFlowGetDataFlowdefaultResponse
): response is DataFlowGetDataFlowdefaultResponse;
export function isUnexpected(
  response:
    | DataFlowDeleteDataFlow200Response
    | DataFlowDeleteDataFlow202Response
    | DataFlowDeleteDataFlow204Response
    | DataFlowDeleteDataFlowdefaultResponse
): response is DataFlowDeleteDataFlowdefaultResponse;
export function isUnexpected(
  response:
    | DataFlowRenameDataFlow200Response
    | DataFlowRenameDataFlow202Response
    | DataFlowRenameDataFlowdefaultResponse
): response is DataFlowRenameDataFlowdefaultResponse;
export function isUnexpected(
  response:
    | DataFlowGetDataFlowsByWorkspace200Response
    | DataFlowGetDataFlowsByWorkspacedefaultResponse
): response is DataFlowGetDataFlowsByWorkspacedefaultResponse;
export function isUnexpected(
  response:
    | DataFlowDebugSessionCreateDataFlowDebugSession200Response
    | DataFlowDebugSessionCreateDataFlowDebugSession202Response
    | DataFlowDebugSessionCreateDataFlowDebugSessiondefaultResponse
): response is DataFlowDebugSessionCreateDataFlowDebugSessiondefaultResponse;
export function isUnexpected(
  response:
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspace200Response
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspacedefaultResponse
): response is DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspacedefaultResponse;
export function isUnexpected(
  response:
    | DataFlowDebugSessionAddDataFlow200Response
    | DataFlowDebugSessionAddDataFlowdefaultResponse
): response is DataFlowDebugSessionAddDataFlowdefaultResponse;
export function isUnexpected(
  response:
    | DataFlowDebugSessionDeleteDataFlowDebugSession200Response
    | DataFlowDebugSessionDeleteDataFlowDebugSessiondefaultResponse
): response is DataFlowDebugSessionDeleteDataFlowDebugSessiondefaultResponse;
export function isUnexpected(
  response:
    | DataFlowDebugSessionExecuteCommand200Response
    | DataFlowDebugSessionExecuteCommand202Response
    | DataFlowDebugSessionExecuteCommanddefaultResponse
): response is DataFlowDebugSessionExecuteCommanddefaultResponse;
export function isUnexpected(
  response:
    | DatasetGetDatasetsByWorkspace200Response
    | DatasetGetDatasetsByWorkspacedefaultResponse
): response is DatasetGetDatasetsByWorkspacedefaultResponse;
export function isUnexpected(
  response:
    | DatasetCreateOrUpdateDataset200Response
    | DatasetCreateOrUpdateDataset202Response
    | DatasetCreateOrUpdateDatasetdefaultResponse
): response is DatasetCreateOrUpdateDatasetdefaultResponse;
export function isUnexpected(
  response:
    | DatasetGetDataset200Response
    | DatasetGetDataset304Response
    | DatasetGetDatasetdefaultResponse
): response is DatasetGetDatasetdefaultResponse;
export function isUnexpected(
  response:
    | DatasetDeleteDataset200Response
    | DatasetDeleteDataset202Response
    | DatasetDeleteDataset204Response
    | DatasetDeleteDatasetdefaultResponse
): response is DatasetDeleteDatasetdefaultResponse;
export function isUnexpected(
  response:
    | DatasetRenameDataset200Response
    | DatasetRenameDataset202Response
    | DatasetRenameDatasetdefaultResponse
): response is DatasetRenameDatasetdefaultResponse;
export function isUnexpected(
  response:
    | IntegrationRuntimesList200Response
    | IntegrationRuntimesListdefaultResponse
): response is IntegrationRuntimesListdefaultResponse;
export function isUnexpected(
  response:
    | IntegrationRuntimesGet200Response
    | IntegrationRuntimesGetdefaultResponse
): response is IntegrationRuntimesGetdefaultResponse;
export function isUnexpected(
  response: LibraryList200Response | LibraryListdefaultResponse
): response is LibraryListdefaultResponse;
export function isUnexpected(
  response:
    | LibraryFlush200Response
    | LibraryFlush202Response
    | LibraryFlushdefaultResponse
): response is LibraryFlushdefaultResponse;
export function isUnexpected(
  response:
    | LibraryGetOperationResult200Response
    | LibraryGetOperationResult202Response
    | LibraryGetOperationResultdefaultResponse
): response is LibraryGetOperationResultdefaultResponse;
export function isUnexpected(
  response:
    | LibraryDelete200Response
    | LibraryDelete202Response
    | LibraryDelete409Response
    | LibraryDeletedefaultResponse
): response is LibraryDeletedefaultResponse;
export function isUnexpected(
  response:
    | LibraryGet200Response
    | LibraryGet304Response
    | LibraryGetdefaultResponse
): response is LibraryGetdefaultResponse;
export function isUnexpected(
  response:
    | LibraryCreate200Response
    | LibraryCreate202Response
    | LibraryCreatedefaultResponse
): response is LibraryCreatedefaultResponse;
export function isUnexpected(
  response:
    | LinkedServiceGetLinkedServicesByWorkspace200Response
    | LinkedServiceGetLinkedServicesByWorkspacedefaultResponse
): response is LinkedServiceGetLinkedServicesByWorkspacedefaultResponse;
export function isUnexpected(
  response:
    | LinkedServiceCreateOrUpdateLinkedService200Response
    | LinkedServiceCreateOrUpdateLinkedService202Response
    | LinkedServiceCreateOrUpdateLinkedServicedefaultResponse
): response is LinkedServiceCreateOrUpdateLinkedServicedefaultResponse;
export function isUnexpected(
  response:
    | LinkedServiceGetLinkedService200Response
    | LinkedServiceGetLinkedService304Response
    | LinkedServiceGetLinkedServicedefaultResponse
): response is LinkedServiceGetLinkedServicedefaultResponse;
export function isUnexpected(
  response:
    | LinkedServiceDeleteLinkedService200Response
    | LinkedServiceDeleteLinkedService202Response
    | LinkedServiceDeleteLinkedService204Response
    | LinkedServiceDeleteLinkedServicedefaultResponse
): response is LinkedServiceDeleteLinkedServicedefaultResponse;
export function isUnexpected(
  response:
    | LinkedServiceRenameLinkedService200Response
    | LinkedServiceRenameLinkedService202Response
    | LinkedServiceRenameLinkedServicedefaultResponse
): response is LinkedServiceRenameLinkedServicedefaultResponse;
export function isUnexpected(
  response:
    | NotebookGetNotebooksByWorkspace200Response
    | NotebookGetNotebooksByWorkspacedefaultResponse
): response is NotebookGetNotebooksByWorkspacedefaultResponse;
export function isUnexpected(
  response:
    | NotebookGetNotebookSummaryByWorkSpace200Response
    | NotebookGetNotebookSummaryByWorkSpacedefaultResponse
): response is NotebookGetNotebookSummaryByWorkSpacedefaultResponse;
export function isUnexpected(
  response:
    | NotebookCreateOrUpdateNotebook200Response
    | NotebookCreateOrUpdateNotebook202Response
    | NotebookCreateOrUpdateNotebookdefaultResponse
): response is NotebookCreateOrUpdateNotebookdefaultResponse;
export function isUnexpected(
  response:
    | NotebookGetNotebook200Response
    | NotebookGetNotebook304Response
    | NotebookGetNotebookdefaultResponse
): response is NotebookGetNotebookdefaultResponse;
export function isUnexpected(
  response:
    | NotebookDeleteNotebook200Response
    | NotebookDeleteNotebook202Response
    | NotebookDeleteNotebook204Response
    | NotebookDeleteNotebookdefaultResponse
): response is NotebookDeleteNotebookdefaultResponse;
export function isUnexpected(
  response:
    | NotebookRenameNotebook200Response
    | NotebookRenameNotebook202Response
    | NotebookRenameNotebookdefaultResponse
): response is NotebookRenameNotebookdefaultResponse;
export function isUnexpected(
  response:
    | NotebookOperationResultGet200Response
    | NotebookOperationResultGet201Response
    | NotebookOperationResultGet202Response
    | NotebookOperationResultGet204Response
    | NotebookOperationResultGetdefaultResponse
): response is NotebookOperationResultGetdefaultResponse;
export function isUnexpected(
  response:
    | PipelineGetPipelinesByWorkspace200Response
    | PipelineGetPipelinesByWorkspacedefaultResponse
): response is PipelineGetPipelinesByWorkspacedefaultResponse;
export function isUnexpected(
  response:
    | PipelineCreateOrUpdatePipeline200Response
    | PipelineCreateOrUpdatePipeline202Response
    | PipelineCreateOrUpdatePipelinedefaultResponse
): response is PipelineCreateOrUpdatePipelinedefaultResponse;
export function isUnexpected(
  response:
    | PipelineGetPipeline200Response
    | PipelineGetPipeline304Response
    | PipelineGetPipelinedefaultResponse
): response is PipelineGetPipelinedefaultResponse;
export function isUnexpected(
  response:
    | PipelineDeletePipeline200Response
    | PipelineDeletePipeline202Response
    | PipelineDeletePipeline204Response
    | PipelineDeletePipelinedefaultResponse
): response is PipelineDeletePipelinedefaultResponse;
export function isUnexpected(
  response:
    | PipelineRenamePipeline200Response
    | PipelineRenamePipeline202Response
    | PipelineRenamePipelinedefaultResponse
): response is PipelineRenamePipelinedefaultResponse;
export function isUnexpected(
  response:
    | PipelineCreatePipelineRun202Response
    | PipelineCreatePipelineRundefaultResponse
): response is PipelineCreatePipelineRundefaultResponse;
export function isUnexpected(
  response:
    | PipelineRunQueryPipelineRunsByWorkspace200Response
    | PipelineRunQueryPipelineRunsByWorkspacedefaultResponse
): response is PipelineRunQueryPipelineRunsByWorkspacedefaultResponse;
export function isUnexpected(
  response:
    | PipelineRunGetPipelineRun200Response
    | PipelineRunGetPipelineRundefaultResponse
): response is PipelineRunGetPipelineRundefaultResponse;
export function isUnexpected(
  response:
    | PipelineRunQueryActivityRuns200Response
    | PipelineRunQueryActivityRunsdefaultResponse
): response is PipelineRunQueryActivityRunsdefaultResponse;
export function isUnexpected(
  response:
    | PipelineRunCancelPipelineRun200Response
    | PipelineRunCancelPipelineRundefaultResponse
): response is PipelineRunCancelPipelineRundefaultResponse;
export function isUnexpected(
  response:
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspace200Response
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspacedefaultResponse
): response is SparkJobDefinitionGetSparkJobDefinitionsByWorkspacedefaultResponse;
export function isUnexpected(
  response:
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition200Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition202Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinitiondefaultResponse
): response is SparkJobDefinitionCreateOrUpdateSparkJobDefinitiondefaultResponse;
export function isUnexpected(
  response:
    | SparkJobDefinitionGetSparkJobDefinition200Response
    | SparkJobDefinitionGetSparkJobDefinition304Response
    | SparkJobDefinitionGetSparkJobDefinitiondefaultResponse
): response is SparkJobDefinitionGetSparkJobDefinitiondefaultResponse;
export function isUnexpected(
  response:
    | SparkJobDefinitionDeleteSparkJobDefinition200Response
    | SparkJobDefinitionDeleteSparkJobDefinition202Response
    | SparkJobDefinitionDeleteSparkJobDefinition204Response
    | SparkJobDefinitionDeleteSparkJobDefinitiondefaultResponse
): response is SparkJobDefinitionDeleteSparkJobDefinitiondefaultResponse;
export function isUnexpected(
  response:
    | SparkJobDefinitionExecuteSparkJobDefinition200Response
    | SparkJobDefinitionExecuteSparkJobDefinition202Response
    | SparkJobDefinitionExecuteSparkJobDefinitiondefaultResponse
): response is SparkJobDefinitionExecuteSparkJobDefinitiondefaultResponse;
export function isUnexpected(
  response:
    | SparkJobDefinitionRenameSparkJobDefinition200Response
    | SparkJobDefinitionRenameSparkJobDefinition202Response
    | SparkJobDefinitionRenameSparkJobDefinitiondefaultResponse
): response is SparkJobDefinitionRenameSparkJobDefinitiondefaultResponse;
export function isUnexpected(
  response:
    | SparkJobDefinitionDebugSparkJobDefinition200Response
    | SparkJobDefinitionDebugSparkJobDefinition202Response
    | SparkJobDefinitionDebugSparkJobDefinitiondefaultResponse
): response is SparkJobDefinitionDebugSparkJobDefinitiondefaultResponse;
export function isUnexpected(
  response: SqlPoolsList200Response | SqlPoolsListdefaultResponse
): response is SqlPoolsListdefaultResponse;
export function isUnexpected(
  response: SqlPoolsGet200Response | SqlPoolsGetdefaultResponse
): response is SqlPoolsGetdefaultResponse;
export function isUnexpected(
  response:
    | SqlScriptGetSqlScriptsByWorkspace200Response
    | SqlScriptGetSqlScriptsByWorkspacedefaultResponse
): response is SqlScriptGetSqlScriptsByWorkspacedefaultResponse;
export function isUnexpected(
  response:
    | SqlScriptCreateOrUpdateSqlScript200Response
    | SqlScriptCreateOrUpdateSqlScript202Response
    | SqlScriptCreateOrUpdateSqlScriptdefaultResponse
): response is SqlScriptCreateOrUpdateSqlScriptdefaultResponse;
export function isUnexpected(
  response:
    | SqlScriptGetSqlScript200Response
    | SqlScriptGetSqlScript304Response
    | SqlScriptGetSqlScriptdefaultResponse
): response is SqlScriptGetSqlScriptdefaultResponse;
export function isUnexpected(
  response:
    | SqlScriptDeleteSqlScript200Response
    | SqlScriptDeleteSqlScript202Response
    | SqlScriptDeleteSqlScript204Response
    | SqlScriptDeleteSqlScriptdefaultResponse
): response is SqlScriptDeleteSqlScriptdefaultResponse;
export function isUnexpected(
  response:
    | SqlScriptRenameSqlScript200Response
    | SqlScriptRenameSqlScript202Response
    | SqlScriptRenameSqlScriptdefaultResponse
): response is SqlScriptRenameSqlScriptdefaultResponse;
export function isUnexpected(
  response:
    | TriggerGetTriggersByWorkspace200Response
    | TriggerGetTriggersByWorkspacedefaultResponse
): response is TriggerGetTriggersByWorkspacedefaultResponse;
export function isUnexpected(
  response:
    | TriggerCreateOrUpdateTrigger200Response
    | TriggerCreateOrUpdateTrigger202Response
    | TriggerCreateOrUpdateTriggerdefaultResponse
): response is TriggerCreateOrUpdateTriggerdefaultResponse;
export function isUnexpected(
  response:
    | TriggerGetTrigger200Response
    | TriggerGetTrigger304Response
    | TriggerGetTriggerdefaultResponse
): response is TriggerGetTriggerdefaultResponse;
export function isUnexpected(
  response:
    | TriggerDeleteTrigger200Response
    | TriggerDeleteTrigger202Response
    | TriggerDeleteTrigger204Response
    | TriggerDeleteTriggerdefaultResponse
): response is TriggerDeleteTriggerdefaultResponse;
export function isUnexpected(
  response:
    | TriggerSubscribeTriggerToEvents200Response
    | TriggerSubscribeTriggerToEvents202Response
    | TriggerSubscribeTriggerToEventsdefaultResponse
): response is TriggerSubscribeTriggerToEventsdefaultResponse;
export function isUnexpected(
  response:
    | TriggerGetEventSubscriptionStatus200Response
    | TriggerGetEventSubscriptionStatusdefaultResponse
): response is TriggerGetEventSubscriptionStatusdefaultResponse;
export function isUnexpected(
  response:
    | TriggerUnsubscribeTriggerFromEvents200Response
    | TriggerUnsubscribeTriggerFromEvents202Response
    | TriggerUnsubscribeTriggerFromEventsdefaultResponse
): response is TriggerUnsubscribeTriggerFromEventsdefaultResponse;
export function isUnexpected(
  response: TriggerStartTrigger200Response | TriggerStartTriggerdefaultResponse
): response is TriggerStartTriggerdefaultResponse;
export function isUnexpected(
  response: TriggerStopTrigger200Response | TriggerStopTriggerdefaultResponse
): response is TriggerStopTriggerdefaultResponse;
export function isUnexpected(
  response:
    | TriggerRunRerunTriggerInstance200Response
    | TriggerRunRerunTriggerInstancedefaultResponse
): response is TriggerRunRerunTriggerInstancedefaultResponse;
export function isUnexpected(
  response:
    | TriggerRunCancelTriggerInstance200Response
    | TriggerRunCancelTriggerInstancedefaultResponse
): response is TriggerRunCancelTriggerInstancedefaultResponse;
export function isUnexpected(
  response:
    | TriggerRunQueryTriggerRunsByWorkspace200Response
    | TriggerRunQueryTriggerRunsByWorkspacedefaultResponse
): response is TriggerRunQueryTriggerRunsByWorkspacedefaultResponse;
export function isUnexpected(
  response: WorkspaceGet200Response | WorkspaceGetdefaultResponse
): response is WorkspaceGetdefaultResponse;
export function isUnexpected(
  response:
    | KqlScriptsGetAll200Response
    | KqlScriptsGetAlldefaultResponse
    | KqlScriptCreateOrUpdate200Response
    | KqlScriptCreateOrUpdate202Response
    | KqlScriptCreateOrUpdatedefaultResponse
    | KqlScriptGetByName200Response
    | KqlScriptGetByNamedefaultResponse
    | KqlScriptDeleteByName200Response
    | KqlScriptDeleteByName202Response
    | KqlScriptDeleteByName204Response
    | KqlScriptDeleteByNamedefaultResponse
    | KqlScriptRename200Response
    | KqlScriptRename202Response
    | KqlScriptRenamedefaultResponse
    | MetastoreRegister201Response
    | MetastoreRegisterdefaultResponse
    | MetastoreGetDatabaseOperations200Response
    | MetastoreGetDatabaseOperationsdefaultResponse
    | MetastoreUpdate201Response
    | MetastoreUpdatedefaultResponse
    | MetastoreDelete204Response
    | MetastoreDeletedefaultResponse
    | SparkConfigurationGetSparkConfigurationsByWorkspace200Response
    | SparkConfigurationGetSparkConfigurationsByWorkspacedefaultResponse
    | SparkConfigurationCreateOrUpdateSparkConfiguration200Response
    | SparkConfigurationCreateOrUpdateSparkConfiguration202Response
    | SparkConfigurationCreateOrUpdateSparkConfigurationdefaultResponse
    | SparkConfigurationGetSparkConfiguration200Response
    | SparkConfigurationGetSparkConfiguration304Response
    | SparkConfigurationGetSparkConfigurationdefaultResponse
    | SparkConfigurationDeleteSparkConfiguration200Response
    | SparkConfigurationDeleteSparkConfiguration202Response
    | SparkConfigurationDeleteSparkConfiguration204Response
    | SparkConfigurationDeleteSparkConfigurationdefaultResponse
    | SparkConfigurationRenameSparkConfiguration200Response
    | SparkConfigurationRenameSparkConfiguration202Response
    | SparkConfigurationRenameSparkConfigurationdefaultResponse
    | BigDataPoolsList200Response
    | BigDataPoolsListdefaultResponse
    | BigDataPoolsGet200Response
    | BigDataPoolsGetdefaultResponse
    | DataFlowCreateOrUpdateDataFlow200Response
    | DataFlowCreateOrUpdateDataFlow202Response
    | DataFlowCreateOrUpdateDataFlowdefaultResponse
    | DataFlowGetDataFlow200Response
    | DataFlowGetDataFlowdefaultResponse
    | DataFlowDeleteDataFlow200Response
    | DataFlowDeleteDataFlow202Response
    | DataFlowDeleteDataFlow204Response
    | DataFlowDeleteDataFlowdefaultResponse
    | DataFlowRenameDataFlow200Response
    | DataFlowRenameDataFlow202Response
    | DataFlowRenameDataFlowdefaultResponse
    | DataFlowGetDataFlowsByWorkspace200Response
    | DataFlowGetDataFlowsByWorkspacedefaultResponse
    | DataFlowDebugSessionCreateDataFlowDebugSession200Response
    | DataFlowDebugSessionCreateDataFlowDebugSession202Response
    | DataFlowDebugSessionCreateDataFlowDebugSessiondefaultResponse
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspace200Response
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspacedefaultResponse
    | DataFlowDebugSessionAddDataFlow200Response
    | DataFlowDebugSessionAddDataFlowdefaultResponse
    | DataFlowDebugSessionDeleteDataFlowDebugSession200Response
    | DataFlowDebugSessionDeleteDataFlowDebugSessiondefaultResponse
    | DataFlowDebugSessionExecuteCommand200Response
    | DataFlowDebugSessionExecuteCommand202Response
    | DataFlowDebugSessionExecuteCommanddefaultResponse
    | DatasetGetDatasetsByWorkspace200Response
    | DatasetGetDatasetsByWorkspacedefaultResponse
    | DatasetCreateOrUpdateDataset200Response
    | DatasetCreateOrUpdateDataset202Response
    | DatasetCreateOrUpdateDatasetdefaultResponse
    | DatasetGetDataset200Response
    | DatasetGetDataset304Response
    | DatasetGetDatasetdefaultResponse
    | DatasetDeleteDataset200Response
    | DatasetDeleteDataset202Response
    | DatasetDeleteDataset204Response
    | DatasetDeleteDatasetdefaultResponse
    | DatasetRenameDataset200Response
    | DatasetRenameDataset202Response
    | DatasetRenameDatasetdefaultResponse
    | IntegrationRuntimesList200Response
    | IntegrationRuntimesListdefaultResponse
    | IntegrationRuntimesGet200Response
    | IntegrationRuntimesGetdefaultResponse
    | LibraryList200Response
    | LibraryListdefaultResponse
    | LibraryFlush200Response
    | LibraryFlush202Response
    | LibraryFlushdefaultResponse
    | LibraryGetOperationResult200Response
    | LibraryGetOperationResult202Response
    | LibraryGetOperationResultdefaultResponse
    | LibraryDelete200Response
    | LibraryDelete202Response
    | LibraryDelete409Response
    | LibraryDeletedefaultResponse
    | LibraryGet200Response
    | LibraryGet304Response
    | LibraryGetdefaultResponse
    | LibraryCreate200Response
    | LibraryCreate202Response
    | LibraryCreatedefaultResponse
    | LinkedServiceGetLinkedServicesByWorkspace200Response
    | LinkedServiceGetLinkedServicesByWorkspacedefaultResponse
    | LinkedServiceCreateOrUpdateLinkedService200Response
    | LinkedServiceCreateOrUpdateLinkedService202Response
    | LinkedServiceCreateOrUpdateLinkedServicedefaultResponse
    | LinkedServiceGetLinkedService200Response
    | LinkedServiceGetLinkedService304Response
    | LinkedServiceGetLinkedServicedefaultResponse
    | LinkedServiceDeleteLinkedService200Response
    | LinkedServiceDeleteLinkedService202Response
    | LinkedServiceDeleteLinkedService204Response
    | LinkedServiceDeleteLinkedServicedefaultResponse
    | LinkedServiceRenameLinkedService200Response
    | LinkedServiceRenameLinkedService202Response
    | LinkedServiceRenameLinkedServicedefaultResponse
    | NotebookGetNotebooksByWorkspace200Response
    | NotebookGetNotebooksByWorkspacedefaultResponse
    | NotebookGetNotebookSummaryByWorkSpace200Response
    | NotebookGetNotebookSummaryByWorkSpacedefaultResponse
    | NotebookCreateOrUpdateNotebook200Response
    | NotebookCreateOrUpdateNotebook202Response
    | NotebookCreateOrUpdateNotebookdefaultResponse
    | NotebookGetNotebook200Response
    | NotebookGetNotebook304Response
    | NotebookGetNotebookdefaultResponse
    | NotebookDeleteNotebook200Response
    | NotebookDeleteNotebook202Response
    | NotebookDeleteNotebook204Response
    | NotebookDeleteNotebookdefaultResponse
    | NotebookRenameNotebook200Response
    | NotebookRenameNotebook202Response
    | NotebookRenameNotebookdefaultResponse
    | NotebookOperationResultGet200Response
    | NotebookOperationResultGet201Response
    | NotebookOperationResultGet202Response
    | NotebookOperationResultGet204Response
    | NotebookOperationResultGetdefaultResponse
    | PipelineGetPipelinesByWorkspace200Response
    | PipelineGetPipelinesByWorkspacedefaultResponse
    | PipelineCreateOrUpdatePipeline200Response
    | PipelineCreateOrUpdatePipeline202Response
    | PipelineCreateOrUpdatePipelinedefaultResponse
    | PipelineGetPipeline200Response
    | PipelineGetPipeline304Response
    | PipelineGetPipelinedefaultResponse
    | PipelineDeletePipeline200Response
    | PipelineDeletePipeline202Response
    | PipelineDeletePipeline204Response
    | PipelineDeletePipelinedefaultResponse
    | PipelineRenamePipeline200Response
    | PipelineRenamePipeline202Response
    | PipelineRenamePipelinedefaultResponse
    | PipelineCreatePipelineRun202Response
    | PipelineCreatePipelineRundefaultResponse
    | PipelineRunQueryPipelineRunsByWorkspace200Response
    | PipelineRunQueryPipelineRunsByWorkspacedefaultResponse
    | PipelineRunGetPipelineRun200Response
    | PipelineRunGetPipelineRundefaultResponse
    | PipelineRunQueryActivityRuns200Response
    | PipelineRunQueryActivityRunsdefaultResponse
    | PipelineRunCancelPipelineRun200Response
    | PipelineRunCancelPipelineRundefaultResponse
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspace200Response
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspacedefaultResponse
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition200Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition202Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinitiondefaultResponse
    | SparkJobDefinitionGetSparkJobDefinition200Response
    | SparkJobDefinitionGetSparkJobDefinition304Response
    | SparkJobDefinitionGetSparkJobDefinitiondefaultResponse
    | SparkJobDefinitionDeleteSparkJobDefinition200Response
    | SparkJobDefinitionDeleteSparkJobDefinition202Response
    | SparkJobDefinitionDeleteSparkJobDefinition204Response
    | SparkJobDefinitionDeleteSparkJobDefinitiondefaultResponse
    | SparkJobDefinitionExecuteSparkJobDefinition200Response
    | SparkJobDefinitionExecuteSparkJobDefinition202Response
    | SparkJobDefinitionExecuteSparkJobDefinitiondefaultResponse
    | SparkJobDefinitionRenameSparkJobDefinition200Response
    | SparkJobDefinitionRenameSparkJobDefinition202Response
    | SparkJobDefinitionRenameSparkJobDefinitiondefaultResponse
    | SparkJobDefinitionDebugSparkJobDefinition200Response
    | SparkJobDefinitionDebugSparkJobDefinition202Response
    | SparkJobDefinitionDebugSparkJobDefinitiondefaultResponse
    | SqlPoolsList200Response
    | SqlPoolsListdefaultResponse
    | SqlPoolsGet200Response
    | SqlPoolsGetdefaultResponse
    | SqlScriptGetSqlScriptsByWorkspace200Response
    | SqlScriptGetSqlScriptsByWorkspacedefaultResponse
    | SqlScriptCreateOrUpdateSqlScript200Response
    | SqlScriptCreateOrUpdateSqlScript202Response
    | SqlScriptCreateOrUpdateSqlScriptdefaultResponse
    | SqlScriptGetSqlScript200Response
    | SqlScriptGetSqlScript304Response
    | SqlScriptGetSqlScriptdefaultResponse
    | SqlScriptDeleteSqlScript200Response
    | SqlScriptDeleteSqlScript202Response
    | SqlScriptDeleteSqlScript204Response
    | SqlScriptDeleteSqlScriptdefaultResponse
    | SqlScriptRenameSqlScript200Response
    | SqlScriptRenameSqlScript202Response
    | SqlScriptRenameSqlScriptdefaultResponse
    | TriggerGetTriggersByWorkspace200Response
    | TriggerGetTriggersByWorkspacedefaultResponse
    | TriggerCreateOrUpdateTrigger200Response
    | TriggerCreateOrUpdateTrigger202Response
    | TriggerCreateOrUpdateTriggerdefaultResponse
    | TriggerGetTrigger200Response
    | TriggerGetTrigger304Response
    | TriggerGetTriggerdefaultResponse
    | TriggerDeleteTrigger200Response
    | TriggerDeleteTrigger202Response
    | TriggerDeleteTrigger204Response
    | TriggerDeleteTriggerdefaultResponse
    | TriggerSubscribeTriggerToEvents200Response
    | TriggerSubscribeTriggerToEvents202Response
    | TriggerSubscribeTriggerToEventsdefaultResponse
    | TriggerGetEventSubscriptionStatus200Response
    | TriggerGetEventSubscriptionStatusdefaultResponse
    | TriggerUnsubscribeTriggerFromEvents200Response
    | TriggerUnsubscribeTriggerFromEvents202Response
    | TriggerUnsubscribeTriggerFromEventsdefaultResponse
    | TriggerStartTrigger200Response
    | TriggerStartTriggerdefaultResponse
    | TriggerStopTrigger200Response
    | TriggerStopTriggerdefaultResponse
    | TriggerRunRerunTriggerInstance200Response
    | TriggerRunRerunTriggerInstancedefaultResponse
    | TriggerRunCancelTriggerInstance200Response
    | TriggerRunCancelTriggerInstancedefaultResponse
    | TriggerRunQueryTriggerRunsByWorkspace200Response
    | TriggerRunQueryTriggerRunsByWorkspacedefaultResponse
    | WorkspaceGet200Response
    | WorkspaceGetdefaultResponse
): response is
  | KqlScriptsGetAlldefaultResponse
  | KqlScriptCreateOrUpdatedefaultResponse
  | KqlScriptGetByNamedefaultResponse
  | KqlScriptDeleteByNamedefaultResponse
  | KqlScriptRenamedefaultResponse
  | MetastoreRegisterdefaultResponse
  | MetastoreGetDatabaseOperationsdefaultResponse
  | MetastoreUpdatedefaultResponse
  | MetastoreDeletedefaultResponse
  | SparkConfigurationGetSparkConfigurationsByWorkspacedefaultResponse
  | SparkConfigurationCreateOrUpdateSparkConfigurationdefaultResponse
  | SparkConfigurationGetSparkConfigurationdefaultResponse
  | SparkConfigurationDeleteSparkConfigurationdefaultResponse
  | SparkConfigurationRenameSparkConfigurationdefaultResponse
  | BigDataPoolsListdefaultResponse
  | BigDataPoolsGetdefaultResponse
  | DataFlowCreateOrUpdateDataFlowdefaultResponse
  | DataFlowGetDataFlowdefaultResponse
  | DataFlowDeleteDataFlowdefaultResponse
  | DataFlowRenameDataFlowdefaultResponse
  | DataFlowGetDataFlowsByWorkspacedefaultResponse
  | DataFlowDebugSessionCreateDataFlowDebugSessiondefaultResponse
  | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspacedefaultResponse
  | DataFlowDebugSessionAddDataFlowdefaultResponse
  | DataFlowDebugSessionDeleteDataFlowDebugSessiondefaultResponse
  | DataFlowDebugSessionExecuteCommanddefaultResponse
  | DatasetGetDatasetsByWorkspacedefaultResponse
  | DatasetCreateOrUpdateDatasetdefaultResponse
  | DatasetGetDatasetdefaultResponse
  | DatasetDeleteDatasetdefaultResponse
  | DatasetRenameDatasetdefaultResponse
  | IntegrationRuntimesListdefaultResponse
  | IntegrationRuntimesGetdefaultResponse
  | LibraryListdefaultResponse
  | LibraryFlushdefaultResponse
  | LibraryGetOperationResultdefaultResponse
  | LibraryDeletedefaultResponse
  | LibraryGetdefaultResponse
  | LibraryCreatedefaultResponse
  | LinkedServiceGetLinkedServicesByWorkspacedefaultResponse
  | LinkedServiceCreateOrUpdateLinkedServicedefaultResponse
  | LinkedServiceGetLinkedServicedefaultResponse
  | LinkedServiceDeleteLinkedServicedefaultResponse
  | LinkedServiceRenameLinkedServicedefaultResponse
  | NotebookGetNotebooksByWorkspacedefaultResponse
  | NotebookGetNotebookSummaryByWorkSpacedefaultResponse
  | NotebookCreateOrUpdateNotebookdefaultResponse
  | NotebookGetNotebookdefaultResponse
  | NotebookDeleteNotebookdefaultResponse
  | NotebookRenameNotebookdefaultResponse
  | NotebookOperationResultGetdefaultResponse
  | PipelineGetPipelinesByWorkspacedefaultResponse
  | PipelineCreateOrUpdatePipelinedefaultResponse
  | PipelineGetPipelinedefaultResponse
  | PipelineDeletePipelinedefaultResponse
  | PipelineRenamePipelinedefaultResponse
  | PipelineCreatePipelineRundefaultResponse
  | PipelineRunQueryPipelineRunsByWorkspacedefaultResponse
  | PipelineRunGetPipelineRundefaultResponse
  | PipelineRunQueryActivityRunsdefaultResponse
  | PipelineRunCancelPipelineRundefaultResponse
  | SparkJobDefinitionGetSparkJobDefinitionsByWorkspacedefaultResponse
  | SparkJobDefinitionCreateOrUpdateSparkJobDefinitiondefaultResponse
  | SparkJobDefinitionGetSparkJobDefinitiondefaultResponse
  | SparkJobDefinitionDeleteSparkJobDefinitiondefaultResponse
  | SparkJobDefinitionExecuteSparkJobDefinitiondefaultResponse
  | SparkJobDefinitionRenameSparkJobDefinitiondefaultResponse
  | SparkJobDefinitionDebugSparkJobDefinitiondefaultResponse
  | SqlPoolsListdefaultResponse
  | SqlPoolsGetdefaultResponse
  | SqlScriptGetSqlScriptsByWorkspacedefaultResponse
  | SqlScriptCreateOrUpdateSqlScriptdefaultResponse
  | SqlScriptGetSqlScriptdefaultResponse
  | SqlScriptDeleteSqlScriptdefaultResponse
  | SqlScriptRenameSqlScriptdefaultResponse
  | TriggerGetTriggersByWorkspacedefaultResponse
  | TriggerCreateOrUpdateTriggerdefaultResponse
  | TriggerGetTriggerdefaultResponse
  | TriggerDeleteTriggerdefaultResponse
  | TriggerSubscribeTriggerToEventsdefaultResponse
  | TriggerGetEventSubscriptionStatusdefaultResponse
  | TriggerUnsubscribeTriggerFromEventsdefaultResponse
  | TriggerStartTriggerdefaultResponse
  | TriggerStopTriggerdefaultResponse
  | TriggerRunRerunTriggerInstancedefaultResponse
  | TriggerRunCancelTriggerInstancedefaultResponse
  | TriggerRunQueryTriggerRunsByWorkspacedefaultResponse
  | WorkspaceGetdefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = geParametrizedPathSuccess(url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function geParametrizedPathSuccess(path: string): string[] {
  const pathParts = path.split("/");

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // If the candidate and actual paths don't match in size
    // we move on to the next candidate path
    if (
      candidateParts.length === pathParts.length &&
      hasParametrizedPath(key)
    ) {
      // track if we have found a match to return the values found.
      let found = true;
      for (let i = 0; i < candidateParts.length; i++) {
        if (
          candidateParts[i].startsWith("{") &&
          candidateParts[i].endsWith("}")
        ) {
          // If the current part of the candidate is a "template" part
          // it is a match with the actual path part on hand
          // skip as the parameterized part can match anything
          continue;
        }

        // If the candidate part is not a template and
        // the parts don't match mark the candidate as not found
        // to move on with the next candidate path.
        if (candidateParts[i] !== pathParts[i]) {
          found = false;
          break;
        }
      }

      // We finished evaluating the current candidate parts
      // if all parts matched we return the success values form
      // the path mapping.
      if (found) {
        return value;
      }
    }
  }

  // No match was found, return an empty array.
  return [];
}

function hasParametrizedPath(path: string): boolean {
  return path.includes("/{");
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
