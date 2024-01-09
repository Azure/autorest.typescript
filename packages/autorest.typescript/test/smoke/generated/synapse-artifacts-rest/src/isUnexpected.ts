// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  KqlScriptsGetAll200Response,
  KqlScriptsGetAllDefaultResponse,
  KqlScriptCreateOrUpdate200Response,
  KqlScriptCreateOrUpdate202Response,
  KqlScriptCreateOrUpdateDefaultResponse,
  KqlScriptGetByName200Response,
  KqlScriptGetByNameDefaultResponse,
  KqlScriptDeleteByName200Response,
  KqlScriptDeleteByName202Response,
  KqlScriptDeleteByName204Response,
  KqlScriptDeleteByNameDefaultResponse,
  KqlScriptRename200Response,
  KqlScriptRename202Response,
  KqlScriptRenameDefaultResponse,
  MetastoreRegister201Response,
  MetastoreRegisterDefaultResponse,
  MetastoreGetDatabaseOperations200Response,
  MetastoreGetDatabaseOperationsDefaultResponse,
  MetastoreUpdate201Response,
  MetastoreUpdateDefaultResponse,
  MetastoreDelete204Response,
  MetastoreDeleteDefaultResponse,
  SparkConfigurationGetSparkConfigurationsByWorkspace200Response,
  SparkConfigurationGetSparkConfigurationsByWorkspaceDefaultResponse,
  SparkConfigurationCreateOrUpdateSparkConfiguration200Response,
  SparkConfigurationCreateOrUpdateSparkConfiguration202Response,
  SparkConfigurationCreateOrUpdateSparkConfigurationDefaultResponse,
  SparkConfigurationGetSparkConfiguration200Response,
  SparkConfigurationGetSparkConfiguration304Response,
  SparkConfigurationGetSparkConfigurationDefaultResponse,
  SparkConfigurationDeleteSparkConfiguration200Response,
  SparkConfigurationDeleteSparkConfiguration202Response,
  SparkConfigurationDeleteSparkConfiguration204Response,
  SparkConfigurationDeleteSparkConfigurationDefaultResponse,
  SparkConfigurationRenameSparkConfiguration200Response,
  SparkConfigurationRenameSparkConfiguration202Response,
  SparkConfigurationRenameSparkConfigurationDefaultResponse,
  BigDataPoolsList200Response,
  BigDataPoolsListDefaultResponse,
  BigDataPoolsGet200Response,
  BigDataPoolsGetDefaultResponse,
  DataFlowCreateOrUpdateDataFlow200Response,
  DataFlowCreateOrUpdateDataFlow202Response,
  DataFlowCreateOrUpdateDataFlowDefaultResponse,
  DataFlowGetDataFlow200Response,
  DataFlowGetDataFlowDefaultResponse,
  DataFlowDeleteDataFlow200Response,
  DataFlowDeleteDataFlow202Response,
  DataFlowDeleteDataFlow204Response,
  DataFlowDeleteDataFlowDefaultResponse,
  DataFlowRenameDataFlow200Response,
  DataFlowRenameDataFlow202Response,
  DataFlowRenameDataFlowDefaultResponse,
  DataFlowGetDataFlowsByWorkspace200Response,
  DataFlowGetDataFlowsByWorkspaceDefaultResponse,
  DataFlowDebugSessionCreateDataFlowDebugSession200Response,
  DataFlowDebugSessionCreateDataFlowDebugSession202Response,
  DataFlowDebugSessionCreateDataFlowDebugSessionDefaultResponse,
  DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspace200Response,
  DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceDefaultResponse,
  DataFlowDebugSessionAddDataFlow200Response,
  DataFlowDebugSessionAddDataFlowDefaultResponse,
  DataFlowDebugSessionDeleteDataFlowDebugSession200Response,
  DataFlowDebugSessionDeleteDataFlowDebugSessionDefaultResponse,
  DataFlowDebugSessionExecuteCommand200Response,
  DataFlowDebugSessionExecuteCommand202Response,
  DataFlowDebugSessionExecuteCommandDefaultResponse,
  DatasetGetDatasetsByWorkspace200Response,
  DatasetGetDatasetsByWorkspaceDefaultResponse,
  DatasetCreateOrUpdateDataset200Response,
  DatasetCreateOrUpdateDataset202Response,
  DatasetCreateOrUpdateDatasetDefaultResponse,
  DatasetGetDataset200Response,
  DatasetGetDataset304Response,
  DatasetGetDatasetDefaultResponse,
  DatasetDeleteDataset200Response,
  DatasetDeleteDataset202Response,
  DatasetDeleteDataset204Response,
  DatasetDeleteDatasetDefaultResponse,
  DatasetRenameDataset200Response,
  DatasetRenameDataset202Response,
  DatasetRenameDatasetDefaultResponse,
  IntegrationRuntimesList200Response,
  IntegrationRuntimesListDefaultResponse,
  IntegrationRuntimesGet200Response,
  IntegrationRuntimesGetDefaultResponse,
  LibraryList200Response,
  LibraryListDefaultResponse,
  LibraryFlush200Response,
  LibraryFlush202Response,
  LibraryFlushDefaultResponse,
  LibraryGetOperationResult200Response,
  LibraryGetOperationResult202Response,
  LibraryGetOperationResultDefaultResponse,
  LibraryDelete200Response,
  LibraryDelete202Response,
  LibraryDelete409Response,
  LibraryDeleteDefaultResponse,
  LibraryGet200Response,
  LibraryGet304Response,
  LibraryGetDefaultResponse,
  LibraryCreate200Response,
  LibraryCreate202Response,
  LibraryAppend201Response,
  LibraryCreateDefaultResponse,
  LinkedServiceGetLinkedServicesByWorkspace200Response,
  LinkedServiceGetLinkedServicesByWorkspaceDefaultResponse,
  LinkedServiceCreateOrUpdateLinkedService200Response,
  LinkedServiceCreateOrUpdateLinkedService202Response,
  LinkedServiceCreateOrUpdateLinkedServiceDefaultResponse,
  LinkedServiceGetLinkedService200Response,
  LinkedServiceGetLinkedService304Response,
  LinkedServiceGetLinkedServiceDefaultResponse,
  LinkedServiceDeleteLinkedService200Response,
  LinkedServiceDeleteLinkedService202Response,
  LinkedServiceDeleteLinkedService204Response,
  LinkedServiceDeleteLinkedServiceDefaultResponse,
  LinkedServiceRenameLinkedService200Response,
  LinkedServiceRenameLinkedService202Response,
  LinkedServiceRenameLinkedServiceDefaultResponse,
  NotebookGetNotebooksByWorkspace200Response,
  NotebookGetNotebooksByWorkspaceDefaultResponse,
  NotebookGetNotebookSummaryByWorkSpace200Response,
  NotebookGetNotebookSummaryByWorkSpaceDefaultResponse,
  NotebookCreateOrUpdateNotebook200Response,
  NotebookCreateOrUpdateNotebook202Response,
  NotebookCreateOrUpdateNotebookDefaultResponse,
  NotebookGetNotebook200Response,
  NotebookGetNotebook304Response,
  NotebookGetNotebookDefaultResponse,
  NotebookDeleteNotebook200Response,
  NotebookDeleteNotebook202Response,
  NotebookDeleteNotebook204Response,
  NotebookDeleteNotebookDefaultResponse,
  NotebookRenameNotebook200Response,
  NotebookRenameNotebook202Response,
  NotebookRenameNotebookDefaultResponse,
  NotebookOperationResultGet200Response,
  NotebookOperationResultGet201Response,
  NotebookOperationResultGet202Response,
  NotebookOperationResultGet204Response,
  NotebookOperationResultGetDefaultResponse,
  PipelineGetPipelinesByWorkspace200Response,
  PipelineGetPipelinesByWorkspaceDefaultResponse,
  PipelineCreateOrUpdatePipeline200Response,
  PipelineCreateOrUpdatePipeline202Response,
  PipelineCreateOrUpdatePipelineDefaultResponse,
  PipelineGetPipeline200Response,
  PipelineGetPipeline304Response,
  PipelineGetPipelineDefaultResponse,
  PipelineDeletePipeline200Response,
  PipelineDeletePipeline202Response,
  PipelineDeletePipeline204Response,
  PipelineDeletePipelineDefaultResponse,
  PipelineRenamePipeline200Response,
  PipelineRenamePipeline202Response,
  PipelineRenamePipelineDefaultResponse,
  PipelineCreatePipelineRun202Response,
  PipelineCreatePipelineRunDefaultResponse,
  PipelineRunQueryPipelineRunsByWorkspace200Response,
  PipelineRunQueryPipelineRunsByWorkspaceDefaultResponse,
  PipelineRunGetPipelineRun200Response,
  PipelineRunGetPipelineRunDefaultResponse,
  PipelineRunQueryActivityRuns200Response,
  PipelineRunQueryActivityRunsDefaultResponse,
  PipelineRunCancelPipelineRun200Response,
  PipelineRunCancelPipelineRunDefaultResponse,
  SparkJobDefinitionGetSparkJobDefinitionsByWorkspace200Response,
  SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceDefaultResponse,
  SparkJobDefinitionCreateOrUpdateSparkJobDefinition200Response,
  SparkJobDefinitionCreateOrUpdateSparkJobDefinition202Response,
  SparkJobDefinitionCreateOrUpdateSparkJobDefinitionDefaultResponse,
  SparkJobDefinitionGetSparkJobDefinition200Response,
  SparkJobDefinitionGetSparkJobDefinition304Response,
  SparkJobDefinitionGetSparkJobDefinitionDefaultResponse,
  SparkJobDefinitionDeleteSparkJobDefinition200Response,
  SparkJobDefinitionDeleteSparkJobDefinition202Response,
  SparkJobDefinitionDeleteSparkJobDefinition204Response,
  SparkJobDefinitionDeleteSparkJobDefinitionDefaultResponse,
  SparkJobDefinitionExecuteSparkJobDefinition200Response,
  SparkJobDefinitionExecuteSparkJobDefinition202Response,
  SparkJobDefinitionExecuteSparkJobDefinitionDefaultResponse,
  SparkJobDefinitionRenameSparkJobDefinition200Response,
  SparkJobDefinitionRenameSparkJobDefinition202Response,
  SparkJobDefinitionRenameSparkJobDefinitionDefaultResponse,
  SparkJobDefinitionDebugSparkJobDefinition200Response,
  SparkJobDefinitionDebugSparkJobDefinition202Response,
  SparkJobDefinitionDebugSparkJobDefinitionDefaultResponse,
  SqlPoolsList200Response,
  SqlPoolsListDefaultResponse,
  SqlPoolsGet200Response,
  SqlPoolsGetDefaultResponse,
  SqlScriptGetSqlScriptsByWorkspace200Response,
  SqlScriptGetSqlScriptsByWorkspaceDefaultResponse,
  SqlScriptCreateOrUpdateSqlScript200Response,
  SqlScriptCreateOrUpdateSqlScript202Response,
  SqlScriptCreateOrUpdateSqlScriptDefaultResponse,
  SqlScriptGetSqlScript200Response,
  SqlScriptGetSqlScript304Response,
  SqlScriptGetSqlScriptDefaultResponse,
  SqlScriptDeleteSqlScript200Response,
  SqlScriptDeleteSqlScript202Response,
  SqlScriptDeleteSqlScript204Response,
  SqlScriptDeleteSqlScriptDefaultResponse,
  SqlScriptRenameSqlScript200Response,
  SqlScriptRenameSqlScript202Response,
  SqlScriptRenameSqlScriptDefaultResponse,
  TriggerGetTriggersByWorkspace200Response,
  TriggerGetTriggersByWorkspaceDefaultResponse,
  TriggerCreateOrUpdateTrigger200Response,
  TriggerCreateOrUpdateTrigger202Response,
  TriggerCreateOrUpdateTriggerDefaultResponse,
  TriggerGetTrigger200Response,
  TriggerGetTrigger304Response,
  TriggerGetTriggerDefaultResponse,
  TriggerDeleteTrigger200Response,
  TriggerDeleteTrigger202Response,
  TriggerDeleteTrigger204Response,
  TriggerDeleteTriggerDefaultResponse,
  TriggerSubscribeTriggerToEvents200Response,
  TriggerSubscribeTriggerToEvents202Response,
  TriggerSubscribeTriggerToEventsDefaultResponse,
  TriggerGetEventSubscriptionStatus200Response,
  TriggerGetEventSubscriptionStatusDefaultResponse,
  TriggerUnsubscribeTriggerFromEvents200Response,
  TriggerUnsubscribeTriggerFromEvents202Response,
  TriggerUnsubscribeTriggerFromEventsDefaultResponse,
  TriggerStartTrigger200Response,
  TriggerStartTriggerDefaultResponse,
  TriggerStopTrigger200Response,
  TriggerStopTriggerDefaultResponse,
  TriggerRunRerunTriggerInstance200Response,
  TriggerRunRerunTriggerInstanceDefaultResponse,
  TriggerRunCancelTriggerInstance200Response,
  TriggerRunCancelTriggerInstanceDefaultResponse,
  TriggerRunQueryTriggerRunsByWorkspace200Response,
  TriggerRunQueryTriggerRunsByWorkspaceDefaultResponse,
  WorkspaceGet200Response,
  WorkspaceGetDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /kqlScripts": ["200"],
  "PUT /kqlScripts/{kqlScriptName}": ["200", "202"],
  "GET /kqlScripts/{kqlScriptName}": ["200"],
  "DELETE /kqlScripts/{kqlScriptName}": ["200", "202", "204"],
  "POST /kqlScripts/{kqlScriptName}/rename": ["200", "202"],
  "GET /kqlScripts/{kqlScriptName}/rename": ["200", "202"],
  "PUT /metastore/create-database-operations/{id}": ["201"],
  "GET /metastore/create-database-operations/{id}": ["200"],
  "PUT /metastore/update-database-operations/{id}": ["201"],
  "DELETE /metastore/databases/{id}": ["204"],
  "GET /sparkconfigurations": ["200"],
  "PUT /sparkconfigurations/{sparkConfigurationName}": ["200", "202"],
  "GET /sparkconfigurations/{sparkConfigurationName}": ["200", "304"],
  "DELETE /sparkconfigurations/{sparkConfigurationName}": ["200", "202", "204"],
  "POST /sparkconfigurations/{sparkConfigurationName}/rename": ["200", "202"],
  "GET /sparkconfigurations/{sparkConfigurationName}/rename": ["200", "202"],
  "GET /bigDataPools": ["200"],
  "GET /bigDataPools/{bigDataPoolName}": ["200"],
  "PUT /dataflows/{dataFlowName}": ["200", "202"],
  "GET /dataflows/{dataFlowName}": ["200"],
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
  "GET /datasets/{datasetName}": ["200", "304"],
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
  "GET /libraries/{libraryName}": ["200", "304"],
  "PUT /libraries/{libraryName}": ["200", "202"],
  "GET /linkedservices": ["200"],
  "PUT /linkedservices/{linkedServiceName}": ["200", "202"],
  "GET /linkedservices/{linkedServiceName}": ["200", "304"],
  "DELETE /linkedservices/{linkedServiceName}": ["200", "202", "204"],
  "POST /linkedservices/{linkedServiceName}/rename": ["200", "202"],
  "GET /linkedservices/{linkedServiceName}/rename": ["200", "202"],
  "GET /notebooks": ["200"],
  "GET /notebooksSummary": ["200"],
  "PUT /notebooks/{notebookName}": ["200", "202"],
  "GET /notebooks/{notebookName}": ["200", "304"],
  "DELETE /notebooks/{notebookName}": ["200", "202", "204"],
  "POST /notebooks/{notebookName}/rename": ["200", "202"],
  "GET /notebooks/{notebookName}/rename": ["200", "202"],
  "GET /notebookOperationResults/{operationId}": ["200", "201", "202", "204"],
  "GET /pipelines": ["200"],
  "PUT /pipelines/{pipelineName}": ["200", "202"],
  "GET /pipelines/{pipelineName}": ["200", "304"],
  "DELETE /pipelines/{pipelineName}": ["200", "202", "204"],
  "POST /pipelines/{pipelineName}/rename": ["200", "202"],
  "GET /pipelines/{pipelineName}/rename": ["200", "202"],
  "POST /pipelines/{pipelineName}/createRun": ["202"],
  "POST /queryPipelineRuns": ["200"],
  "GET /pipelineruns/{runId}": ["200"],
  "POST /pipelines/{pipelineName}/pipelineruns/{runId}/queryActivityruns": [
    "200",
  ],
  "POST /pipelineruns/{runId}/cancel": ["200"],
  "GET /sparkJobDefinitions": ["200"],
  "PUT /sparkJobDefinitions/{sparkJobDefinitionName}": ["200", "202"],
  "GET /sparkJobDefinitions/{sparkJobDefinitionName}": ["200", "304"],
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
  "GET /sqlScripts/{sqlScriptName}": ["200", "304"],
  "DELETE /sqlScripts/{sqlScriptName}": ["200", "202", "204"],
  "POST /sqlScripts/{sqlScriptName}/rename": ["200", "202"],
  "GET /sqlScripts/{sqlScriptName}/rename": ["200", "202"],
  "GET /triggers": ["200"],
  "PUT /triggers/{triggerName}": ["200", "202"],
  "GET /triggers/{triggerName}": ["200", "304"],
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
  "GET /workspace": ["200"],
};

export function isUnexpected(
  response: KqlScriptsGetAll200Response | KqlScriptsGetAllDefaultResponse,
): response is KqlScriptsGetAllDefaultResponse;
export function isUnexpected(
  response:
    | KqlScriptCreateOrUpdate200Response
    | KqlScriptCreateOrUpdate202Response
    | KqlScriptCreateOrUpdateDefaultResponse,
): response is KqlScriptCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: KqlScriptGetByName200Response | KqlScriptGetByNameDefaultResponse,
): response is KqlScriptGetByNameDefaultResponse;
export function isUnexpected(
  response:
    | KqlScriptDeleteByName200Response
    | KqlScriptDeleteByName202Response
    | KqlScriptDeleteByName204Response
    | KqlScriptDeleteByNameDefaultResponse,
): response is KqlScriptDeleteByNameDefaultResponse;
export function isUnexpected(
  response:
    | KqlScriptRename200Response
    | KqlScriptRename202Response
    | KqlScriptRenameDefaultResponse,
): response is KqlScriptRenameDefaultResponse;
export function isUnexpected(
  response: MetastoreRegister201Response | MetastoreRegisterDefaultResponse,
): response is MetastoreRegisterDefaultResponse;
export function isUnexpected(
  response:
    | MetastoreGetDatabaseOperations200Response
    | MetastoreGetDatabaseOperationsDefaultResponse,
): response is MetastoreGetDatabaseOperationsDefaultResponse;
export function isUnexpected(
  response: MetastoreUpdate201Response | MetastoreUpdateDefaultResponse,
): response is MetastoreUpdateDefaultResponse;
export function isUnexpected(
  response: MetastoreDelete204Response | MetastoreDeleteDefaultResponse,
): response is MetastoreDeleteDefaultResponse;
export function isUnexpected(
  response:
    | SparkConfigurationGetSparkConfigurationsByWorkspace200Response
    | SparkConfigurationGetSparkConfigurationsByWorkspaceDefaultResponse,
): response is SparkConfigurationGetSparkConfigurationsByWorkspaceDefaultResponse;
export function isUnexpected(
  response:
    | SparkConfigurationCreateOrUpdateSparkConfiguration200Response
    | SparkConfigurationCreateOrUpdateSparkConfiguration202Response
    | SparkConfigurationCreateOrUpdateSparkConfigurationDefaultResponse,
): response is SparkConfigurationCreateOrUpdateSparkConfigurationDefaultResponse;
export function isUnexpected(
  response:
    | SparkConfigurationGetSparkConfiguration200Response
    | SparkConfigurationGetSparkConfiguration304Response
    | SparkConfigurationGetSparkConfigurationDefaultResponse,
): response is SparkConfigurationGetSparkConfigurationDefaultResponse;
export function isUnexpected(
  response:
    | SparkConfigurationDeleteSparkConfiguration200Response
    | SparkConfigurationDeleteSparkConfiguration202Response
    | SparkConfigurationDeleteSparkConfiguration204Response
    | SparkConfigurationDeleteSparkConfigurationDefaultResponse,
): response is SparkConfigurationDeleteSparkConfigurationDefaultResponse;
export function isUnexpected(
  response:
    | SparkConfigurationRenameSparkConfiguration200Response
    | SparkConfigurationRenameSparkConfiguration202Response
    | SparkConfigurationRenameSparkConfigurationDefaultResponse,
): response is SparkConfigurationRenameSparkConfigurationDefaultResponse;
export function isUnexpected(
  response: BigDataPoolsList200Response | BigDataPoolsListDefaultResponse,
): response is BigDataPoolsListDefaultResponse;
export function isUnexpected(
  response: BigDataPoolsGet200Response | BigDataPoolsGetDefaultResponse,
): response is BigDataPoolsGetDefaultResponse;
export function isUnexpected(
  response:
    | DataFlowCreateOrUpdateDataFlow200Response
    | DataFlowCreateOrUpdateDataFlow202Response
    | DataFlowCreateOrUpdateDataFlowDefaultResponse,
): response is DataFlowCreateOrUpdateDataFlowDefaultResponse;
export function isUnexpected(
  response: DataFlowGetDataFlow200Response | DataFlowGetDataFlowDefaultResponse,
): response is DataFlowGetDataFlowDefaultResponse;
export function isUnexpected(
  response:
    | DataFlowDeleteDataFlow200Response
    | DataFlowDeleteDataFlow202Response
    | DataFlowDeleteDataFlow204Response
    | DataFlowDeleteDataFlowDefaultResponse,
): response is DataFlowDeleteDataFlowDefaultResponse;
export function isUnexpected(
  response:
    | DataFlowRenameDataFlow200Response
    | DataFlowRenameDataFlow202Response
    | DataFlowRenameDataFlowDefaultResponse,
): response is DataFlowRenameDataFlowDefaultResponse;
export function isUnexpected(
  response:
    | DataFlowGetDataFlowsByWorkspace200Response
    | DataFlowGetDataFlowsByWorkspaceDefaultResponse,
): response is DataFlowGetDataFlowsByWorkspaceDefaultResponse;
export function isUnexpected(
  response:
    | DataFlowDebugSessionCreateDataFlowDebugSession200Response
    | DataFlowDebugSessionCreateDataFlowDebugSession202Response
    | DataFlowDebugSessionCreateDataFlowDebugSessionDefaultResponse,
): response is DataFlowDebugSessionCreateDataFlowDebugSessionDefaultResponse;
export function isUnexpected(
  response:
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspace200Response
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceDefaultResponse,
): response is DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceDefaultResponse;
export function isUnexpected(
  response:
    | DataFlowDebugSessionAddDataFlow200Response
    | DataFlowDebugSessionAddDataFlowDefaultResponse,
): response is DataFlowDebugSessionAddDataFlowDefaultResponse;
export function isUnexpected(
  response:
    | DataFlowDebugSessionDeleteDataFlowDebugSession200Response
    | DataFlowDebugSessionDeleteDataFlowDebugSessionDefaultResponse,
): response is DataFlowDebugSessionDeleteDataFlowDebugSessionDefaultResponse;
export function isUnexpected(
  response:
    | DataFlowDebugSessionExecuteCommand200Response
    | DataFlowDebugSessionExecuteCommand202Response
    | DataFlowDebugSessionExecuteCommandDefaultResponse,
): response is DataFlowDebugSessionExecuteCommandDefaultResponse;
export function isUnexpected(
  response:
    | DatasetGetDatasetsByWorkspace200Response
    | DatasetGetDatasetsByWorkspaceDefaultResponse,
): response is DatasetGetDatasetsByWorkspaceDefaultResponse;
export function isUnexpected(
  response:
    | DatasetCreateOrUpdateDataset200Response
    | DatasetCreateOrUpdateDataset202Response
    | DatasetCreateOrUpdateDatasetDefaultResponse,
): response is DatasetCreateOrUpdateDatasetDefaultResponse;
export function isUnexpected(
  response:
    | DatasetGetDataset200Response
    | DatasetGetDataset304Response
    | DatasetGetDatasetDefaultResponse,
): response is DatasetGetDatasetDefaultResponse;
export function isUnexpected(
  response:
    | DatasetDeleteDataset200Response
    | DatasetDeleteDataset202Response
    | DatasetDeleteDataset204Response
    | DatasetDeleteDatasetDefaultResponse,
): response is DatasetDeleteDatasetDefaultResponse;
export function isUnexpected(
  response:
    | DatasetRenameDataset200Response
    | DatasetRenameDataset202Response
    | DatasetRenameDatasetDefaultResponse,
): response is DatasetRenameDatasetDefaultResponse;
export function isUnexpected(
  response:
    | IntegrationRuntimesList200Response
    | IntegrationRuntimesListDefaultResponse,
): response is IntegrationRuntimesListDefaultResponse;
export function isUnexpected(
  response:
    | IntegrationRuntimesGet200Response
    | IntegrationRuntimesGetDefaultResponse,
): response is IntegrationRuntimesGetDefaultResponse;
export function isUnexpected(
  response: LibraryList200Response | LibraryListDefaultResponse,
): response is LibraryListDefaultResponse;
export function isUnexpected(
  response:
    | LibraryFlush200Response
    | LibraryFlush202Response
    | LibraryFlushDefaultResponse,
): response is LibraryFlushDefaultResponse;
export function isUnexpected(
  response:
    | LibraryGetOperationResult200Response
    | LibraryGetOperationResult202Response
    | LibraryGetOperationResultDefaultResponse,
): response is LibraryGetOperationResultDefaultResponse;
export function isUnexpected(
  response:
    | LibraryDelete200Response
    | LibraryDelete202Response
    | LibraryDelete409Response
    | LibraryDeleteDefaultResponse,
): response is LibraryDeleteDefaultResponse;
export function isUnexpected(
  response:
    | LibraryGet200Response
    | LibraryGet304Response
    | LibraryGetDefaultResponse,
): response is LibraryGetDefaultResponse;
export function isUnexpected(
  response:
    | LibraryCreate200Response
    | LibraryCreate202Response
    | LibraryAppend201Response
    | LibraryCreateDefaultResponse,
): response is LibraryCreateDefaultResponse;
export function isUnexpected(
  response:
    | LinkedServiceGetLinkedServicesByWorkspace200Response
    | LinkedServiceGetLinkedServicesByWorkspaceDefaultResponse,
): response is LinkedServiceGetLinkedServicesByWorkspaceDefaultResponse;
export function isUnexpected(
  response:
    | LinkedServiceCreateOrUpdateLinkedService200Response
    | LinkedServiceCreateOrUpdateLinkedService202Response
    | LinkedServiceCreateOrUpdateLinkedServiceDefaultResponse,
): response is LinkedServiceCreateOrUpdateLinkedServiceDefaultResponse;
export function isUnexpected(
  response:
    | LinkedServiceGetLinkedService200Response
    | LinkedServiceGetLinkedService304Response
    | LinkedServiceGetLinkedServiceDefaultResponse,
): response is LinkedServiceGetLinkedServiceDefaultResponse;
export function isUnexpected(
  response:
    | LinkedServiceDeleteLinkedService200Response
    | LinkedServiceDeleteLinkedService202Response
    | LinkedServiceDeleteLinkedService204Response
    | LinkedServiceDeleteLinkedServiceDefaultResponse,
): response is LinkedServiceDeleteLinkedServiceDefaultResponse;
export function isUnexpected(
  response:
    | LinkedServiceRenameLinkedService200Response
    | LinkedServiceRenameLinkedService202Response
    | LinkedServiceRenameLinkedServiceDefaultResponse,
): response is LinkedServiceRenameLinkedServiceDefaultResponse;
export function isUnexpected(
  response:
    | NotebookGetNotebooksByWorkspace200Response
    | NotebookGetNotebooksByWorkspaceDefaultResponse,
): response is NotebookGetNotebooksByWorkspaceDefaultResponse;
export function isUnexpected(
  response:
    | NotebookGetNotebookSummaryByWorkSpace200Response
    | NotebookGetNotebookSummaryByWorkSpaceDefaultResponse,
): response is NotebookGetNotebookSummaryByWorkSpaceDefaultResponse;
export function isUnexpected(
  response:
    | NotebookCreateOrUpdateNotebook200Response
    | NotebookCreateOrUpdateNotebook202Response
    | NotebookCreateOrUpdateNotebookDefaultResponse,
): response is NotebookCreateOrUpdateNotebookDefaultResponse;
export function isUnexpected(
  response:
    | NotebookGetNotebook200Response
    | NotebookGetNotebook304Response
    | NotebookGetNotebookDefaultResponse,
): response is NotebookGetNotebookDefaultResponse;
export function isUnexpected(
  response:
    | NotebookDeleteNotebook200Response
    | NotebookDeleteNotebook202Response
    | NotebookDeleteNotebook204Response
    | NotebookDeleteNotebookDefaultResponse,
): response is NotebookDeleteNotebookDefaultResponse;
export function isUnexpected(
  response:
    | NotebookRenameNotebook200Response
    | NotebookRenameNotebook202Response
    | NotebookRenameNotebookDefaultResponse,
): response is NotebookRenameNotebookDefaultResponse;
export function isUnexpected(
  response:
    | NotebookOperationResultGet200Response
    | NotebookOperationResultGet201Response
    | NotebookOperationResultGet202Response
    | NotebookOperationResultGet204Response
    | NotebookOperationResultGetDefaultResponse,
): response is NotebookOperationResultGetDefaultResponse;
export function isUnexpected(
  response:
    | PipelineGetPipelinesByWorkspace200Response
    | PipelineGetPipelinesByWorkspaceDefaultResponse,
): response is PipelineGetPipelinesByWorkspaceDefaultResponse;
export function isUnexpected(
  response:
    | PipelineCreateOrUpdatePipeline200Response
    | PipelineCreateOrUpdatePipeline202Response
    | PipelineCreateOrUpdatePipelineDefaultResponse,
): response is PipelineCreateOrUpdatePipelineDefaultResponse;
export function isUnexpected(
  response:
    | PipelineGetPipeline200Response
    | PipelineGetPipeline304Response
    | PipelineGetPipelineDefaultResponse,
): response is PipelineGetPipelineDefaultResponse;
export function isUnexpected(
  response:
    | PipelineDeletePipeline200Response
    | PipelineDeletePipeline202Response
    | PipelineDeletePipeline204Response
    | PipelineDeletePipelineDefaultResponse,
): response is PipelineDeletePipelineDefaultResponse;
export function isUnexpected(
  response:
    | PipelineRenamePipeline200Response
    | PipelineRenamePipeline202Response
    | PipelineRenamePipelineDefaultResponse,
): response is PipelineRenamePipelineDefaultResponse;
export function isUnexpected(
  response:
    | PipelineCreatePipelineRun202Response
    | PipelineCreatePipelineRunDefaultResponse,
): response is PipelineCreatePipelineRunDefaultResponse;
export function isUnexpected(
  response:
    | PipelineRunQueryPipelineRunsByWorkspace200Response
    | PipelineRunQueryPipelineRunsByWorkspaceDefaultResponse,
): response is PipelineRunQueryPipelineRunsByWorkspaceDefaultResponse;
export function isUnexpected(
  response:
    | PipelineRunGetPipelineRun200Response
    | PipelineRunGetPipelineRunDefaultResponse,
): response is PipelineRunGetPipelineRunDefaultResponse;
export function isUnexpected(
  response:
    | PipelineRunQueryActivityRuns200Response
    | PipelineRunQueryActivityRunsDefaultResponse,
): response is PipelineRunQueryActivityRunsDefaultResponse;
export function isUnexpected(
  response:
    | PipelineRunCancelPipelineRun200Response
    | PipelineRunCancelPipelineRunDefaultResponse,
): response is PipelineRunCancelPipelineRunDefaultResponse;
export function isUnexpected(
  response:
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspace200Response
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceDefaultResponse,
): response is SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceDefaultResponse;
export function isUnexpected(
  response:
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition200Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition202Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinitionDefaultResponse,
): response is SparkJobDefinitionCreateOrUpdateSparkJobDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | SparkJobDefinitionGetSparkJobDefinition200Response
    | SparkJobDefinitionGetSparkJobDefinition304Response
    | SparkJobDefinitionGetSparkJobDefinitionDefaultResponse,
): response is SparkJobDefinitionGetSparkJobDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | SparkJobDefinitionDeleteSparkJobDefinition200Response
    | SparkJobDefinitionDeleteSparkJobDefinition202Response
    | SparkJobDefinitionDeleteSparkJobDefinition204Response
    | SparkJobDefinitionDeleteSparkJobDefinitionDefaultResponse,
): response is SparkJobDefinitionDeleteSparkJobDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | SparkJobDefinitionExecuteSparkJobDefinition200Response
    | SparkJobDefinitionExecuteSparkJobDefinition202Response
    | SparkJobDefinitionExecuteSparkJobDefinitionDefaultResponse,
): response is SparkJobDefinitionExecuteSparkJobDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | SparkJobDefinitionRenameSparkJobDefinition200Response
    | SparkJobDefinitionRenameSparkJobDefinition202Response
    | SparkJobDefinitionRenameSparkJobDefinitionDefaultResponse,
): response is SparkJobDefinitionRenameSparkJobDefinitionDefaultResponse;
export function isUnexpected(
  response:
    | SparkJobDefinitionDebugSparkJobDefinition200Response
    | SparkJobDefinitionDebugSparkJobDefinition202Response
    | SparkJobDefinitionDebugSparkJobDefinitionDefaultResponse,
): response is SparkJobDefinitionDebugSparkJobDefinitionDefaultResponse;
export function isUnexpected(
  response: SqlPoolsList200Response | SqlPoolsListDefaultResponse,
): response is SqlPoolsListDefaultResponse;
export function isUnexpected(
  response: SqlPoolsGet200Response | SqlPoolsGetDefaultResponse,
): response is SqlPoolsGetDefaultResponse;
export function isUnexpected(
  response:
    | SqlScriptGetSqlScriptsByWorkspace200Response
    | SqlScriptGetSqlScriptsByWorkspaceDefaultResponse,
): response is SqlScriptGetSqlScriptsByWorkspaceDefaultResponse;
export function isUnexpected(
  response:
    | SqlScriptCreateOrUpdateSqlScript200Response
    | SqlScriptCreateOrUpdateSqlScript202Response
    | SqlScriptCreateOrUpdateSqlScriptDefaultResponse,
): response is SqlScriptCreateOrUpdateSqlScriptDefaultResponse;
export function isUnexpected(
  response:
    | SqlScriptGetSqlScript200Response
    | SqlScriptGetSqlScript304Response
    | SqlScriptGetSqlScriptDefaultResponse,
): response is SqlScriptGetSqlScriptDefaultResponse;
export function isUnexpected(
  response:
    | SqlScriptDeleteSqlScript200Response
    | SqlScriptDeleteSqlScript202Response
    | SqlScriptDeleteSqlScript204Response
    | SqlScriptDeleteSqlScriptDefaultResponse,
): response is SqlScriptDeleteSqlScriptDefaultResponse;
export function isUnexpected(
  response:
    | SqlScriptRenameSqlScript200Response
    | SqlScriptRenameSqlScript202Response
    | SqlScriptRenameSqlScriptDefaultResponse,
): response is SqlScriptRenameSqlScriptDefaultResponse;
export function isUnexpected(
  response:
    | TriggerGetTriggersByWorkspace200Response
    | TriggerGetTriggersByWorkspaceDefaultResponse,
): response is TriggerGetTriggersByWorkspaceDefaultResponse;
export function isUnexpected(
  response:
    | TriggerCreateOrUpdateTrigger200Response
    | TriggerCreateOrUpdateTrigger202Response
    | TriggerCreateOrUpdateTriggerDefaultResponse,
): response is TriggerCreateOrUpdateTriggerDefaultResponse;
export function isUnexpected(
  response:
    | TriggerGetTrigger200Response
    | TriggerGetTrigger304Response
    | TriggerGetTriggerDefaultResponse,
): response is TriggerGetTriggerDefaultResponse;
export function isUnexpected(
  response:
    | TriggerDeleteTrigger200Response
    | TriggerDeleteTrigger202Response
    | TriggerDeleteTrigger204Response
    | TriggerDeleteTriggerDefaultResponse,
): response is TriggerDeleteTriggerDefaultResponse;
export function isUnexpected(
  response:
    | TriggerSubscribeTriggerToEvents200Response
    | TriggerSubscribeTriggerToEvents202Response
    | TriggerSubscribeTriggerToEventsDefaultResponse,
): response is TriggerSubscribeTriggerToEventsDefaultResponse;
export function isUnexpected(
  response:
    | TriggerGetEventSubscriptionStatus200Response
    | TriggerGetEventSubscriptionStatusDefaultResponse,
): response is TriggerGetEventSubscriptionStatusDefaultResponse;
export function isUnexpected(
  response:
    | TriggerUnsubscribeTriggerFromEvents200Response
    | TriggerUnsubscribeTriggerFromEvents202Response
    | TriggerUnsubscribeTriggerFromEventsDefaultResponse,
): response is TriggerUnsubscribeTriggerFromEventsDefaultResponse;
export function isUnexpected(
  response: TriggerStartTrigger200Response | TriggerStartTriggerDefaultResponse,
): response is TriggerStartTriggerDefaultResponse;
export function isUnexpected(
  response: TriggerStopTrigger200Response | TriggerStopTriggerDefaultResponse,
): response is TriggerStopTriggerDefaultResponse;
export function isUnexpected(
  response:
    | TriggerRunRerunTriggerInstance200Response
    | TriggerRunRerunTriggerInstanceDefaultResponse,
): response is TriggerRunRerunTriggerInstanceDefaultResponse;
export function isUnexpected(
  response:
    | TriggerRunCancelTriggerInstance200Response
    | TriggerRunCancelTriggerInstanceDefaultResponse,
): response is TriggerRunCancelTriggerInstanceDefaultResponse;
export function isUnexpected(
  response:
    | TriggerRunQueryTriggerRunsByWorkspace200Response
    | TriggerRunQueryTriggerRunsByWorkspaceDefaultResponse,
): response is TriggerRunQueryTriggerRunsByWorkspaceDefaultResponse;
export function isUnexpected(
  response: WorkspaceGet200Response | WorkspaceGetDefaultResponse,
): response is WorkspaceGetDefaultResponse;
export function isUnexpected(
  response:
    | KqlScriptsGetAll200Response
    | KqlScriptsGetAllDefaultResponse
    | KqlScriptCreateOrUpdate200Response
    | KqlScriptCreateOrUpdate202Response
    | KqlScriptCreateOrUpdateDefaultResponse
    | KqlScriptGetByName200Response
    | KqlScriptGetByNameDefaultResponse
    | KqlScriptDeleteByName200Response
    | KqlScriptDeleteByName202Response
    | KqlScriptDeleteByName204Response
    | KqlScriptDeleteByNameDefaultResponse
    | KqlScriptRename200Response
    | KqlScriptRename202Response
    | KqlScriptRenameDefaultResponse
    | MetastoreRegister201Response
    | MetastoreRegisterDefaultResponse
    | MetastoreGetDatabaseOperations200Response
    | MetastoreGetDatabaseOperationsDefaultResponse
    | MetastoreUpdate201Response
    | MetastoreUpdateDefaultResponse
    | MetastoreDelete204Response
    | MetastoreDeleteDefaultResponse
    | SparkConfigurationGetSparkConfigurationsByWorkspace200Response
    | SparkConfigurationGetSparkConfigurationsByWorkspaceDefaultResponse
    | SparkConfigurationCreateOrUpdateSparkConfiguration200Response
    | SparkConfigurationCreateOrUpdateSparkConfiguration202Response
    | SparkConfigurationCreateOrUpdateSparkConfigurationDefaultResponse
    | SparkConfigurationGetSparkConfiguration200Response
    | SparkConfigurationGetSparkConfiguration304Response
    | SparkConfigurationGetSparkConfigurationDefaultResponse
    | SparkConfigurationDeleteSparkConfiguration200Response
    | SparkConfigurationDeleteSparkConfiguration202Response
    | SparkConfigurationDeleteSparkConfiguration204Response
    | SparkConfigurationDeleteSparkConfigurationDefaultResponse
    | SparkConfigurationRenameSparkConfiguration200Response
    | SparkConfigurationRenameSparkConfiguration202Response
    | SparkConfigurationRenameSparkConfigurationDefaultResponse
    | BigDataPoolsList200Response
    | BigDataPoolsListDefaultResponse
    | BigDataPoolsGet200Response
    | BigDataPoolsGetDefaultResponse
    | DataFlowCreateOrUpdateDataFlow200Response
    | DataFlowCreateOrUpdateDataFlow202Response
    | DataFlowCreateOrUpdateDataFlowDefaultResponse
    | DataFlowGetDataFlow200Response
    | DataFlowGetDataFlowDefaultResponse
    | DataFlowDeleteDataFlow200Response
    | DataFlowDeleteDataFlow202Response
    | DataFlowDeleteDataFlow204Response
    | DataFlowDeleteDataFlowDefaultResponse
    | DataFlowRenameDataFlow200Response
    | DataFlowRenameDataFlow202Response
    | DataFlowRenameDataFlowDefaultResponse
    | DataFlowGetDataFlowsByWorkspace200Response
    | DataFlowGetDataFlowsByWorkspaceDefaultResponse
    | DataFlowDebugSessionCreateDataFlowDebugSession200Response
    | DataFlowDebugSessionCreateDataFlowDebugSession202Response
    | DataFlowDebugSessionCreateDataFlowDebugSessionDefaultResponse
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspace200Response
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceDefaultResponse
    | DataFlowDebugSessionAddDataFlow200Response
    | DataFlowDebugSessionAddDataFlowDefaultResponse
    | DataFlowDebugSessionDeleteDataFlowDebugSession200Response
    | DataFlowDebugSessionDeleteDataFlowDebugSessionDefaultResponse
    | DataFlowDebugSessionExecuteCommand200Response
    | DataFlowDebugSessionExecuteCommand202Response
    | DataFlowDebugSessionExecuteCommandDefaultResponse
    | DatasetGetDatasetsByWorkspace200Response
    | DatasetGetDatasetsByWorkspaceDefaultResponse
    | DatasetCreateOrUpdateDataset200Response
    | DatasetCreateOrUpdateDataset202Response
    | DatasetCreateOrUpdateDatasetDefaultResponse
    | DatasetGetDataset200Response
    | DatasetGetDataset304Response
    | DatasetGetDatasetDefaultResponse
    | DatasetDeleteDataset200Response
    | DatasetDeleteDataset202Response
    | DatasetDeleteDataset204Response
    | DatasetDeleteDatasetDefaultResponse
    | DatasetRenameDataset200Response
    | DatasetRenameDataset202Response
    | DatasetRenameDatasetDefaultResponse
    | IntegrationRuntimesList200Response
    | IntegrationRuntimesListDefaultResponse
    | IntegrationRuntimesGet200Response
    | IntegrationRuntimesGetDefaultResponse
    | LibraryList200Response
    | LibraryListDefaultResponse
    | LibraryFlush200Response
    | LibraryFlush202Response
    | LibraryFlushDefaultResponse
    | LibraryGetOperationResult200Response
    | LibraryGetOperationResult202Response
    | LibraryGetOperationResultDefaultResponse
    | LibraryDelete200Response
    | LibraryDelete202Response
    | LibraryDelete409Response
    | LibraryDeleteDefaultResponse
    | LibraryGet200Response
    | LibraryGet304Response
    | LibraryGetDefaultResponse
    | LibraryCreate200Response
    | LibraryCreate202Response
    | LibraryAppend201Response
    | LibraryCreateDefaultResponse
    | LinkedServiceGetLinkedServicesByWorkspace200Response
    | LinkedServiceGetLinkedServicesByWorkspaceDefaultResponse
    | LinkedServiceCreateOrUpdateLinkedService200Response
    | LinkedServiceCreateOrUpdateLinkedService202Response
    | LinkedServiceCreateOrUpdateLinkedServiceDefaultResponse
    | LinkedServiceGetLinkedService200Response
    | LinkedServiceGetLinkedService304Response
    | LinkedServiceGetLinkedServiceDefaultResponse
    | LinkedServiceDeleteLinkedService200Response
    | LinkedServiceDeleteLinkedService202Response
    | LinkedServiceDeleteLinkedService204Response
    | LinkedServiceDeleteLinkedServiceDefaultResponse
    | LinkedServiceRenameLinkedService200Response
    | LinkedServiceRenameLinkedService202Response
    | LinkedServiceRenameLinkedServiceDefaultResponse
    | NotebookGetNotebooksByWorkspace200Response
    | NotebookGetNotebooksByWorkspaceDefaultResponse
    | NotebookGetNotebookSummaryByWorkSpace200Response
    | NotebookGetNotebookSummaryByWorkSpaceDefaultResponse
    | NotebookCreateOrUpdateNotebook200Response
    | NotebookCreateOrUpdateNotebook202Response
    | NotebookCreateOrUpdateNotebookDefaultResponse
    | NotebookGetNotebook200Response
    | NotebookGetNotebook304Response
    | NotebookGetNotebookDefaultResponse
    | NotebookDeleteNotebook200Response
    | NotebookDeleteNotebook202Response
    | NotebookDeleteNotebook204Response
    | NotebookDeleteNotebookDefaultResponse
    | NotebookRenameNotebook200Response
    | NotebookRenameNotebook202Response
    | NotebookRenameNotebookDefaultResponse
    | NotebookOperationResultGet200Response
    | NotebookOperationResultGet201Response
    | NotebookOperationResultGet202Response
    | NotebookOperationResultGet204Response
    | NotebookOperationResultGetDefaultResponse
    | PipelineGetPipelinesByWorkspace200Response
    | PipelineGetPipelinesByWorkspaceDefaultResponse
    | PipelineCreateOrUpdatePipeline200Response
    | PipelineCreateOrUpdatePipeline202Response
    | PipelineCreateOrUpdatePipelineDefaultResponse
    | PipelineGetPipeline200Response
    | PipelineGetPipeline304Response
    | PipelineGetPipelineDefaultResponse
    | PipelineDeletePipeline200Response
    | PipelineDeletePipeline202Response
    | PipelineDeletePipeline204Response
    | PipelineDeletePipelineDefaultResponse
    | PipelineRenamePipeline200Response
    | PipelineRenamePipeline202Response
    | PipelineRenamePipelineDefaultResponse
    | PipelineCreatePipelineRun202Response
    | PipelineCreatePipelineRunDefaultResponse
    | PipelineRunQueryPipelineRunsByWorkspace200Response
    | PipelineRunQueryPipelineRunsByWorkspaceDefaultResponse
    | PipelineRunGetPipelineRun200Response
    | PipelineRunGetPipelineRunDefaultResponse
    | PipelineRunQueryActivityRuns200Response
    | PipelineRunQueryActivityRunsDefaultResponse
    | PipelineRunCancelPipelineRun200Response
    | PipelineRunCancelPipelineRunDefaultResponse
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspace200Response
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceDefaultResponse
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition200Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition202Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinitionDefaultResponse
    | SparkJobDefinitionGetSparkJobDefinition200Response
    | SparkJobDefinitionGetSparkJobDefinition304Response
    | SparkJobDefinitionGetSparkJobDefinitionDefaultResponse
    | SparkJobDefinitionDeleteSparkJobDefinition200Response
    | SparkJobDefinitionDeleteSparkJobDefinition202Response
    | SparkJobDefinitionDeleteSparkJobDefinition204Response
    | SparkJobDefinitionDeleteSparkJobDefinitionDefaultResponse
    | SparkJobDefinitionExecuteSparkJobDefinition200Response
    | SparkJobDefinitionExecuteSparkJobDefinition202Response
    | SparkJobDefinitionExecuteSparkJobDefinitionDefaultResponse
    | SparkJobDefinitionRenameSparkJobDefinition200Response
    | SparkJobDefinitionRenameSparkJobDefinition202Response
    | SparkJobDefinitionRenameSparkJobDefinitionDefaultResponse
    | SparkJobDefinitionDebugSparkJobDefinition200Response
    | SparkJobDefinitionDebugSparkJobDefinition202Response
    | SparkJobDefinitionDebugSparkJobDefinitionDefaultResponse
    | SqlPoolsList200Response
    | SqlPoolsListDefaultResponse
    | SqlPoolsGet200Response
    | SqlPoolsGetDefaultResponse
    | SqlScriptGetSqlScriptsByWorkspace200Response
    | SqlScriptGetSqlScriptsByWorkspaceDefaultResponse
    | SqlScriptCreateOrUpdateSqlScript200Response
    | SqlScriptCreateOrUpdateSqlScript202Response
    | SqlScriptCreateOrUpdateSqlScriptDefaultResponse
    | SqlScriptGetSqlScript200Response
    | SqlScriptGetSqlScript304Response
    | SqlScriptGetSqlScriptDefaultResponse
    | SqlScriptDeleteSqlScript200Response
    | SqlScriptDeleteSqlScript202Response
    | SqlScriptDeleteSqlScript204Response
    | SqlScriptDeleteSqlScriptDefaultResponse
    | SqlScriptRenameSqlScript200Response
    | SqlScriptRenameSqlScript202Response
    | SqlScriptRenameSqlScriptDefaultResponse
    | TriggerGetTriggersByWorkspace200Response
    | TriggerGetTriggersByWorkspaceDefaultResponse
    | TriggerCreateOrUpdateTrigger200Response
    | TriggerCreateOrUpdateTrigger202Response
    | TriggerCreateOrUpdateTriggerDefaultResponse
    | TriggerGetTrigger200Response
    | TriggerGetTrigger304Response
    | TriggerGetTriggerDefaultResponse
    | TriggerDeleteTrigger200Response
    | TriggerDeleteTrigger202Response
    | TriggerDeleteTrigger204Response
    | TriggerDeleteTriggerDefaultResponse
    | TriggerSubscribeTriggerToEvents200Response
    | TriggerSubscribeTriggerToEvents202Response
    | TriggerSubscribeTriggerToEventsDefaultResponse
    | TriggerGetEventSubscriptionStatus200Response
    | TriggerGetEventSubscriptionStatusDefaultResponse
    | TriggerUnsubscribeTriggerFromEvents200Response
    | TriggerUnsubscribeTriggerFromEvents202Response
    | TriggerUnsubscribeTriggerFromEventsDefaultResponse
    | TriggerStartTrigger200Response
    | TriggerStartTriggerDefaultResponse
    | TriggerStopTrigger200Response
    | TriggerStopTriggerDefaultResponse
    | TriggerRunRerunTriggerInstance200Response
    | TriggerRunRerunTriggerInstanceDefaultResponse
    | TriggerRunCancelTriggerInstance200Response
    | TriggerRunCancelTriggerInstanceDefaultResponse
    | TriggerRunQueryTriggerRunsByWorkspace200Response
    | TriggerRunQueryTriggerRunsByWorkspaceDefaultResponse
    | WorkspaceGet200Response
    | WorkspaceGetDefaultResponse,
): response is
  | KqlScriptsGetAllDefaultResponse
  | KqlScriptCreateOrUpdateDefaultResponse
  | KqlScriptGetByNameDefaultResponse
  | KqlScriptDeleteByNameDefaultResponse
  | KqlScriptRenameDefaultResponse
  | MetastoreRegisterDefaultResponse
  | MetastoreGetDatabaseOperationsDefaultResponse
  | MetastoreUpdateDefaultResponse
  | MetastoreDeleteDefaultResponse
  | SparkConfigurationGetSparkConfigurationsByWorkspaceDefaultResponse
  | SparkConfigurationCreateOrUpdateSparkConfigurationDefaultResponse
  | SparkConfigurationGetSparkConfigurationDefaultResponse
  | SparkConfigurationDeleteSparkConfigurationDefaultResponse
  | SparkConfigurationRenameSparkConfigurationDefaultResponse
  | BigDataPoolsListDefaultResponse
  | BigDataPoolsGetDefaultResponse
  | DataFlowCreateOrUpdateDataFlowDefaultResponse
  | DataFlowGetDataFlowDefaultResponse
  | DataFlowDeleteDataFlowDefaultResponse
  | DataFlowRenameDataFlowDefaultResponse
  | DataFlowGetDataFlowsByWorkspaceDefaultResponse
  | DataFlowDebugSessionCreateDataFlowDebugSessionDefaultResponse
  | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceDefaultResponse
  | DataFlowDebugSessionAddDataFlowDefaultResponse
  | DataFlowDebugSessionDeleteDataFlowDebugSessionDefaultResponse
  | DataFlowDebugSessionExecuteCommandDefaultResponse
  | DatasetGetDatasetsByWorkspaceDefaultResponse
  | DatasetCreateOrUpdateDatasetDefaultResponse
  | DatasetGetDatasetDefaultResponse
  | DatasetDeleteDatasetDefaultResponse
  | DatasetRenameDatasetDefaultResponse
  | IntegrationRuntimesListDefaultResponse
  | IntegrationRuntimesGetDefaultResponse
  | LibraryListDefaultResponse
  | LibraryFlushDefaultResponse
  | LibraryGetOperationResultDefaultResponse
  | LibraryDeleteDefaultResponse
  | LibraryGetDefaultResponse
  | LibraryCreateDefaultResponse
  | LinkedServiceGetLinkedServicesByWorkspaceDefaultResponse
  | LinkedServiceCreateOrUpdateLinkedServiceDefaultResponse
  | LinkedServiceGetLinkedServiceDefaultResponse
  | LinkedServiceDeleteLinkedServiceDefaultResponse
  | LinkedServiceRenameLinkedServiceDefaultResponse
  | NotebookGetNotebooksByWorkspaceDefaultResponse
  | NotebookGetNotebookSummaryByWorkSpaceDefaultResponse
  | NotebookCreateOrUpdateNotebookDefaultResponse
  | NotebookGetNotebookDefaultResponse
  | NotebookDeleteNotebookDefaultResponse
  | NotebookRenameNotebookDefaultResponse
  | NotebookOperationResultGetDefaultResponse
  | PipelineGetPipelinesByWorkspaceDefaultResponse
  | PipelineCreateOrUpdatePipelineDefaultResponse
  | PipelineGetPipelineDefaultResponse
  | PipelineDeletePipelineDefaultResponse
  | PipelineRenamePipelineDefaultResponse
  | PipelineCreatePipelineRunDefaultResponse
  | PipelineRunQueryPipelineRunsByWorkspaceDefaultResponse
  | PipelineRunGetPipelineRunDefaultResponse
  | PipelineRunQueryActivityRunsDefaultResponse
  | PipelineRunCancelPipelineRunDefaultResponse
  | SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceDefaultResponse
  | SparkJobDefinitionCreateOrUpdateSparkJobDefinitionDefaultResponse
  | SparkJobDefinitionGetSparkJobDefinitionDefaultResponse
  | SparkJobDefinitionDeleteSparkJobDefinitionDefaultResponse
  | SparkJobDefinitionExecuteSparkJobDefinitionDefaultResponse
  | SparkJobDefinitionRenameSparkJobDefinitionDefaultResponse
  | SparkJobDefinitionDebugSparkJobDefinitionDefaultResponse
  | SqlPoolsListDefaultResponse
  | SqlPoolsGetDefaultResponse
  | SqlScriptGetSqlScriptsByWorkspaceDefaultResponse
  | SqlScriptCreateOrUpdateSqlScriptDefaultResponse
  | SqlScriptGetSqlScriptDefaultResponse
  | SqlScriptDeleteSqlScriptDefaultResponse
  | SqlScriptRenameSqlScriptDefaultResponse
  | TriggerGetTriggersByWorkspaceDefaultResponse
  | TriggerCreateOrUpdateTriggerDefaultResponse
  | TriggerGetTriggerDefaultResponse
  | TriggerDeleteTriggerDefaultResponse
  | TriggerSubscribeTriggerToEventsDefaultResponse
  | TriggerGetEventSubscriptionStatusDefaultResponse
  | TriggerUnsubscribeTriggerFromEventsDefaultResponse
  | TriggerStartTriggerDefaultResponse
  | TriggerStopTriggerDefaultResponse
  | TriggerRunRerunTriggerInstanceDefaultResponse
  | TriggerRunCancelTriggerInstanceDefaultResponse
  | TriggerRunQueryTriggerRunsByWorkspaceDefaultResponse
  | WorkspaceGetDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
