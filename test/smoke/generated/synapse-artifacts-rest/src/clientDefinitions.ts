// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  KqlScriptsGetAllParameters,
  KqlScriptCreateOrUpdateParameters,
  KqlScriptGetByNameParameters,
  KqlScriptDeleteByNameParameters,
  KqlScriptRenameParameters,
  MetastoreRegisterParameters,
  MetastoreGetDatabaseOperationsParameters,
  MetastoreUpdateParameters,
  MetastoreDeleteParameters,
  SparkConfigurationGetSparkConfigurationsByWorkspaceParameters,
  SparkConfigurationCreateOrUpdateSparkConfigurationParameters,
  SparkConfigurationGetSparkConfigurationParameters,
  SparkConfigurationDeleteSparkConfigurationParameters,
  SparkConfigurationRenameSparkConfigurationParameters,
  BigDataPoolsListParameters,
  BigDataPoolsGetParameters,
  DataFlowCreateOrUpdateDataFlowParameters,
  DataFlowGetDataFlowParameters,
  DataFlowDeleteDataFlowParameters,
  DataFlowRenameDataFlowParameters,
  DataFlowGetDataFlowsByWorkspaceParameters,
  DataFlowDebugSessionCreateDataFlowDebugSessionParameters,
  DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceParameters,
  DataFlowDebugSessionAddDataFlowParameters,
  DataFlowDebugSessionDeleteDataFlowDebugSessionParameters,
  DataFlowDebugSessionExecuteCommandParameters,
  DatasetGetDatasetsByWorkspaceParameters,
  DatasetCreateOrUpdateDatasetParameters,
  DatasetGetDatasetParameters,
  DatasetDeleteDatasetParameters,
  DatasetRenameDatasetParameters,
  WorkspaceGitRepoManagementGetGitHubAccessTokenParameters,
  IntegrationRuntimesListParameters,
  IntegrationRuntimesGetParameters,
  LibraryListParameters,
  LibraryFlushParameters,
  LibraryGetOperationResultParameters,
  LibraryDeleteParameters,
  LibraryGetParameters,
  LibraryCreateParameters,
  LibraryAppendParameters,
  LinkedServiceGetLinkedServicesByWorkspaceParameters,
  LinkedServiceCreateOrUpdateLinkedServiceParameters,
  LinkedServiceGetLinkedServiceParameters,
  LinkedServiceDeleteLinkedServiceParameters,
  LinkedServiceRenameLinkedServiceParameters,
  NotebookGetNotebooksByWorkspaceParameters,
  NotebookGetNotebookSummaryByWorkSpaceParameters,
  NotebookCreateOrUpdateNotebookParameters,
  NotebookGetNotebookParameters,
  NotebookDeleteNotebookParameters,
  NotebookRenameNotebookParameters,
  NotebookOperationResultGetParameters,
  PipelineGetPipelinesByWorkspaceParameters,
  PipelineCreateOrUpdatePipelineParameters,
  PipelineGetPipelineParameters,
  PipelineDeletePipelineParameters,
  PipelineRenamePipelineParameters,
  PipelineCreatePipelineRunParameters,
  PipelineRunQueryPipelineRunsByWorkspaceParameters,
  PipelineRunGetPipelineRunParameters,
  PipelineRunQueryActivityRunsParameters,
  PipelineRunCancelPipelineRunParameters,
  SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceParameters,
  SparkJobDefinitionCreateOrUpdateSparkJobDefinitionParameters,
  SparkJobDefinitionGetSparkJobDefinitionParameters,
  SparkJobDefinitionDeleteSparkJobDefinitionParameters,
  SparkJobDefinitionExecuteSparkJobDefinitionParameters,
  SparkJobDefinitionRenameSparkJobDefinitionParameters,
  SparkJobDefinitionDebugSparkJobDefinitionParameters,
  SqlPoolsListParameters,
  SqlPoolsGetParameters,
  SqlScriptGetSqlScriptsByWorkspaceParameters,
  SqlScriptCreateOrUpdateSqlScriptParameters,
  SqlScriptGetSqlScriptParameters,
  SqlScriptDeleteSqlScriptParameters,
  SqlScriptRenameSqlScriptParameters,
  TriggerGetTriggersByWorkspaceParameters,
  TriggerCreateOrUpdateTriggerParameters,
  TriggerGetTriggerParameters,
  TriggerDeleteTriggerParameters,
  TriggerSubscribeTriggerToEventsParameters,
  TriggerGetEventSubscriptionStatusParameters,
  TriggerUnsubscribeTriggerFromEventsParameters,
  TriggerStartTriggerParameters,
  TriggerStopTriggerParameters,
  TriggerRunRerunTriggerInstanceParameters,
  TriggerRunCancelTriggerInstanceParameters,
  TriggerRunQueryTriggerRunsByWorkspaceParameters,
  WorkspaceGetParameters
} from "./parameters";
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
  WorkspaceGitRepoManagementGetGitHubAccessToken200Response,
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
  LibraryAppend201Response,
  LibraryAppenddefaultResponse,
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
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for KqlScripts operations */
export interface KqlScriptsOperations {
  /** Get all KQL scripts */
  getAll(
    options?: KqlScriptsGetAllParameters
  ): StreamableMethod<
    KqlScriptsGetAll200Response | KqlScriptsGetAlldefaultResponse
  >;
}

/** Contains operations for KqlScript operations */
export interface KqlScriptOperations {
  /** Creates or updates a KQL Script */
  createOrUpdate(
    kqlScriptName: string,
    options: KqlScriptCreateOrUpdateParameters
  ): StreamableMethod<
    | KqlScriptCreateOrUpdate200Response
    | KqlScriptCreateOrUpdate202Response
    | KqlScriptCreateOrUpdatedefaultResponse
  >;
  /** Get KQL script by name */
  getByName(
    kqlScriptName: string,
    options?: KqlScriptGetByNameParameters
  ): StreamableMethod<
    KqlScriptGetByName200Response | KqlScriptGetByNamedefaultResponse
  >;
  /** Delete KQL script by name */
  deleteByName(
    kqlScriptName: string,
    options?: KqlScriptDeleteByNameParameters
  ): StreamableMethod<
    | KqlScriptDeleteByName200Response
    | KqlScriptDeleteByName202Response
    | KqlScriptDeleteByName204Response
    | KqlScriptDeleteByNamedefaultResponse
  >;
  /** Rename KQL script */
  rename(
    kqlScriptName: string,
    options: KqlScriptRenameParameters
  ): StreamableMethod<
    | KqlScriptRename200Response
    | KqlScriptRename202Response
    | KqlScriptRenamedefaultResponse
  >;
}

/** Contains operations for Metastore operations */
export interface MetastoreOperations {
  /** Register files in Syms */
  register(
    id: string,
    options: MetastoreRegisterParameters
  ): StreamableMethod<
    MetastoreRegister201Response | MetastoreRegisterdefaultResponse
  >;
  /** Gets status of the database */
  getDatabaseOperations(
    id: string,
    options?: MetastoreGetDatabaseOperationsParameters
  ): StreamableMethod<
    | MetastoreGetDatabaseOperations200Response
    | MetastoreGetDatabaseOperationsdefaultResponse
  >;
  /** Update files in Syms */
  update(
    id: string,
    options: MetastoreUpdateParameters
  ): StreamableMethod<
    MetastoreUpdate201Response | MetastoreUpdatedefaultResponse
  >;
  /** Remove files in Syms */
  delete(
    id: string,
    options?: MetastoreDeleteParameters
  ): StreamableMethod<
    MetastoreDelete204Response | MetastoreDeletedefaultResponse
  >;
}

/** Contains operations for SparkConfiguration operations */
export interface SparkConfigurationOperations {
  /** Lists sparkconfigurations. */
  getSparkConfigurationsByWorkspace(
    options?: SparkConfigurationGetSparkConfigurationsByWorkspaceParameters
  ): StreamableMethod<
    | SparkConfigurationGetSparkConfigurationsByWorkspace200Response
    | SparkConfigurationGetSparkConfigurationsByWorkspacedefaultResponse
  >;
  /** Creates or updates a sparkconfiguration. */
  createOrUpdateSparkConfiguration(
    sparkConfigurationName: string,
    options: SparkConfigurationCreateOrUpdateSparkConfigurationParameters
  ): StreamableMethod<
    | SparkConfigurationCreateOrUpdateSparkConfiguration200Response
    | SparkConfigurationCreateOrUpdateSparkConfiguration202Response
    | SparkConfigurationCreateOrUpdateSparkConfigurationdefaultResponse
  >;
  /** Gets a sparkConfiguration. */
  getSparkConfiguration(
    sparkConfigurationName: string,
    options?: SparkConfigurationGetSparkConfigurationParameters
  ): StreamableMethod<
    | SparkConfigurationGetSparkConfiguration200Response
    | SparkConfigurationGetSparkConfiguration304Response
    | SparkConfigurationGetSparkConfigurationdefaultResponse
  >;
  /** Deletes a sparkConfiguration. */
  deleteSparkConfiguration(
    sparkConfigurationName: string,
    options?: SparkConfigurationDeleteSparkConfigurationParameters
  ): StreamableMethod<
    | SparkConfigurationDeleteSparkConfiguration200Response
    | SparkConfigurationDeleteSparkConfiguration202Response
    | SparkConfigurationDeleteSparkConfiguration204Response
    | SparkConfigurationDeleteSparkConfigurationdefaultResponse
  >;
  /** Renames a sparkConfiguration. */
  renameSparkConfiguration(
    sparkConfigurationName: string,
    options: SparkConfigurationRenameSparkConfigurationParameters
  ): StreamableMethod<
    | SparkConfigurationRenameSparkConfiguration200Response
    | SparkConfigurationRenameSparkConfiguration202Response
    | SparkConfigurationRenameSparkConfigurationdefaultResponse
  >;
}

/** Contains operations for BigDataPools operations */
export interface BigDataPoolsOperations {
  /** List Big Data Pools */
  list(
    options?: BigDataPoolsListParameters
  ): StreamableMethod<
    BigDataPoolsList200Response | BigDataPoolsListdefaultResponse
  >;
  /** Get Big Data Pool */
  get(
    bigDataPoolName: string,
    options?: BigDataPoolsGetParameters
  ): StreamableMethod<
    BigDataPoolsGet200Response | BigDataPoolsGetdefaultResponse
  >;
}

/** Contains operations for DataFlow operations */
export interface DataFlowOperations {
  /** Creates or updates a data flow. */
  createOrUpdateDataFlow(
    dataFlowName: string,
    options: DataFlowCreateOrUpdateDataFlowParameters
  ): StreamableMethod<
    | DataFlowCreateOrUpdateDataFlow200Response
    | DataFlowCreateOrUpdateDataFlow202Response
    | DataFlowCreateOrUpdateDataFlowdefaultResponse
  >;
  /** Gets a data flow. */
  getDataFlow(
    dataFlowName: string,
    options?: DataFlowGetDataFlowParameters
  ): StreamableMethod<
    DataFlowGetDataFlow200Response | DataFlowGetDataFlowdefaultResponse
  >;
  /** Deletes a data flow. */
  deleteDataFlow(
    dataFlowName: string,
    options?: DataFlowDeleteDataFlowParameters
  ): StreamableMethod<
    | DataFlowDeleteDataFlow200Response
    | DataFlowDeleteDataFlow202Response
    | DataFlowDeleteDataFlow204Response
    | DataFlowDeleteDataFlowdefaultResponse
  >;
  /** Renames a dataflow. */
  renameDataFlow(
    dataFlowName: string,
    options: DataFlowRenameDataFlowParameters
  ): StreamableMethod<
    | DataFlowRenameDataFlow200Response
    | DataFlowRenameDataFlow202Response
    | DataFlowRenameDataFlowdefaultResponse
  >;
  /** Lists data flows. */
  getDataFlowsByWorkspace(
    options?: DataFlowGetDataFlowsByWorkspaceParameters
  ): StreamableMethod<
    | DataFlowGetDataFlowsByWorkspace200Response
    | DataFlowGetDataFlowsByWorkspacedefaultResponse
  >;
}

/** Contains operations for DataFlowDebugSession operations */
export interface DataFlowDebugSessionOperations {
  /** Creates a data flow debug session. */
  createDataFlowDebugSession(
    options: DataFlowDebugSessionCreateDataFlowDebugSessionParameters
  ): StreamableMethod<
    | DataFlowDebugSessionCreateDataFlowDebugSession200Response
    | DataFlowDebugSessionCreateDataFlowDebugSession202Response
    | DataFlowDebugSessionCreateDataFlowDebugSessiondefaultResponse
  >;
  /** Query all active data flow debug sessions. */
  queryDataFlowDebugSessionsByWorkspace(
    options?: DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceParameters
  ): StreamableMethod<
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspace200Response
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspacedefaultResponse
  >;
  /** Add a data flow into debug session. */
  addDataFlow(
    options: DataFlowDebugSessionAddDataFlowParameters
  ): StreamableMethod<
    | DataFlowDebugSessionAddDataFlow200Response
    | DataFlowDebugSessionAddDataFlowdefaultResponse
  >;
  /** Deletes a data flow debug session. */
  deleteDataFlowDebugSession(
    options: DataFlowDebugSessionDeleteDataFlowDebugSessionParameters
  ): StreamableMethod<
    | DataFlowDebugSessionDeleteDataFlowDebugSession200Response
    | DataFlowDebugSessionDeleteDataFlowDebugSessiondefaultResponse
  >;
  /** Execute a data flow debug command. */
  executeCommand(
    options: DataFlowDebugSessionExecuteCommandParameters
  ): StreamableMethod<
    | DataFlowDebugSessionExecuteCommand200Response
    | DataFlowDebugSessionExecuteCommand202Response
    | DataFlowDebugSessionExecuteCommanddefaultResponse
  >;
}

/** Contains operations for Dataset operations */
export interface DatasetOperations {
  /** Lists datasets. */
  getDatasetsByWorkspace(
    options?: DatasetGetDatasetsByWorkspaceParameters
  ): StreamableMethod<
    | DatasetGetDatasetsByWorkspace200Response
    | DatasetGetDatasetsByWorkspacedefaultResponse
  >;
  /** Creates or updates a dataset. */
  createOrUpdateDataset(
    datasetName: string,
    options: DatasetCreateOrUpdateDatasetParameters
  ): StreamableMethod<
    | DatasetCreateOrUpdateDataset200Response
    | DatasetCreateOrUpdateDataset202Response
    | DatasetCreateOrUpdateDatasetdefaultResponse
  >;
  /** Gets a dataset. */
  getDataset(
    datasetName: string,
    options?: DatasetGetDatasetParameters
  ): StreamableMethod<
    | DatasetGetDataset200Response
    | DatasetGetDataset304Response
    | DatasetGetDatasetdefaultResponse
  >;
  /** Deletes a dataset. */
  deleteDataset(
    datasetName: string,
    options?: DatasetDeleteDatasetParameters
  ): StreamableMethod<
    | DatasetDeleteDataset200Response
    | DatasetDeleteDataset202Response
    | DatasetDeleteDataset204Response
    | DatasetDeleteDatasetdefaultResponse
  >;
  /** Renames a dataset. */
  renameDataset(
    datasetName: string,
    options: DatasetRenameDatasetParameters
  ): StreamableMethod<
    | DatasetRenameDataset200Response
    | DatasetRenameDataset202Response
    | DatasetRenameDatasetdefaultResponse
  >;
}

/** Contains operations for WorkspaceGitRepoManagement operations */
export interface WorkspaceGitRepoManagementOperations {
  /** Get the GitHub access token. */
  getGitHubAccessToken(
    options: WorkspaceGitRepoManagementGetGitHubAccessTokenParameters
  ): StreamableMethod<
    WorkspaceGitRepoManagementGetGitHubAccessToken200Response
  >;
}

/** Contains operations for IntegrationRuntimes operations */
export interface IntegrationRuntimesOperations {
  /** List Integration Runtimes */
  list(
    options?: IntegrationRuntimesListParameters
  ): StreamableMethod<
    IntegrationRuntimesList200Response | IntegrationRuntimesListdefaultResponse
  >;
  /** Get Integration Runtime */
  get(
    integrationRuntimeName: string,
    options?: IntegrationRuntimesGetParameters
  ): StreamableMethod<
    IntegrationRuntimesGet200Response | IntegrationRuntimesGetdefaultResponse
  >;
}

/** Contains operations for Library operations */
export interface LibraryOperations {
  /** Lists Library. */
  list(
    options?: LibraryListParameters
  ): StreamableMethod<LibraryList200Response | LibraryListdefaultResponse>;
  /** Flush Library */
  flush(
    libraryName: string,
    options?: LibraryFlushParameters
  ): StreamableMethod<
    | LibraryFlush200Response
    | LibraryFlush202Response
    | LibraryFlushdefaultResponse
  >;
  /** Get Operation result for Library */
  getOperationResult(
    operationId: string,
    options?: LibraryGetOperationResultParameters
  ): StreamableMethod<
    | LibraryGetOperationResult200Response
    | LibraryGetOperationResult202Response
    | LibraryGetOperationResultdefaultResponse
  >;
  /** Delete Library */
  delete(
    libraryName: string,
    options?: LibraryDeleteParameters
  ): StreamableMethod<
    | LibraryDelete200Response
    | LibraryDelete202Response
    | LibraryDelete409Response
    | LibraryDeletedefaultResponse
  >;
  /** Get Library */
  get(
    libraryName: string,
    options?: LibraryGetParameters
  ): StreamableMethod<
    LibraryGet200Response | LibraryGet304Response | LibraryGetdefaultResponse
  >;
  /** Creates a library with the library name. */
  create(
    libraryName: string,
    options?: LibraryCreateParameters | LibraryAppendParameters
  ):
    | StreamableMethod<
        | LibraryCreate200Response
        | LibraryCreate202Response
        | LibraryCreatedefaultResponse
      >
    | StreamableMethod<LibraryAppend201Response | LibraryAppenddefaultResponse>;
  /** Creates a library with the library name. */
  append(
    libraryName: string,
    options?: LibraryCreateParameters | LibraryAppendParameters
  ):
    | StreamableMethod<
        | LibraryCreate200Response
        | LibraryCreate202Response
        | LibraryCreatedefaultResponse
      >
    | StreamableMethod<LibraryAppend201Response | LibraryAppenddefaultResponse>;
}

/** Contains operations for LinkedService operations */
export interface LinkedServiceOperations {
  /** Lists linked services. */
  getLinkedServicesByWorkspace(
    options?: LinkedServiceGetLinkedServicesByWorkspaceParameters
  ): StreamableMethod<
    | LinkedServiceGetLinkedServicesByWorkspace200Response
    | LinkedServiceGetLinkedServicesByWorkspacedefaultResponse
  >;
  /** Creates or updates a linked service. */
  createOrUpdateLinkedService(
    linkedServiceName: string,
    options: LinkedServiceCreateOrUpdateLinkedServiceParameters
  ): StreamableMethod<
    | LinkedServiceCreateOrUpdateLinkedService200Response
    | LinkedServiceCreateOrUpdateLinkedService202Response
    | LinkedServiceCreateOrUpdateLinkedServicedefaultResponse
  >;
  /** Gets a linked service. */
  getLinkedService(
    linkedServiceName: string,
    options?: LinkedServiceGetLinkedServiceParameters
  ): StreamableMethod<
    | LinkedServiceGetLinkedService200Response
    | LinkedServiceGetLinkedService304Response
    | LinkedServiceGetLinkedServicedefaultResponse
  >;
  /** Deletes a linked service. */
  deleteLinkedService(
    linkedServiceName: string,
    options?: LinkedServiceDeleteLinkedServiceParameters
  ): StreamableMethod<
    | LinkedServiceDeleteLinkedService200Response
    | LinkedServiceDeleteLinkedService202Response
    | LinkedServiceDeleteLinkedService204Response
    | LinkedServiceDeleteLinkedServicedefaultResponse
  >;
  /** Renames a linked service. */
  renameLinkedService(
    linkedServiceName: string,
    options: LinkedServiceRenameLinkedServiceParameters
  ): StreamableMethod<
    | LinkedServiceRenameLinkedService200Response
    | LinkedServiceRenameLinkedService202Response
    | LinkedServiceRenameLinkedServicedefaultResponse
  >;
}

/** Contains operations for Notebook operations */
export interface NotebookOperations {
  /** Lists Notebooks. */
  getNotebooksByWorkspace(
    options?: NotebookGetNotebooksByWorkspaceParameters
  ): StreamableMethod<
    | NotebookGetNotebooksByWorkspace200Response
    | NotebookGetNotebooksByWorkspacedefaultResponse
  >;
  /** Lists a summary of Notebooks. */
  getNotebookSummaryByWorkSpace(
    options?: NotebookGetNotebookSummaryByWorkSpaceParameters
  ): StreamableMethod<
    | NotebookGetNotebookSummaryByWorkSpace200Response
    | NotebookGetNotebookSummaryByWorkSpacedefaultResponse
  >;
  /** Creates or updates a Note Book. */
  createOrUpdateNotebook(
    notebookName: string,
    options: NotebookCreateOrUpdateNotebookParameters
  ): StreamableMethod<
    | NotebookCreateOrUpdateNotebook200Response
    | NotebookCreateOrUpdateNotebook202Response
    | NotebookCreateOrUpdateNotebookdefaultResponse
  >;
  /** Gets a Note Book. */
  getNotebook(
    notebookName: string,
    options?: NotebookGetNotebookParameters
  ): StreamableMethod<
    | NotebookGetNotebook200Response
    | NotebookGetNotebook304Response
    | NotebookGetNotebookdefaultResponse
  >;
  /** Deletes a Note book. */
  deleteNotebook(
    notebookName: string,
    options?: NotebookDeleteNotebookParameters
  ): StreamableMethod<
    | NotebookDeleteNotebook200Response
    | NotebookDeleteNotebook202Response
    | NotebookDeleteNotebook204Response
    | NotebookDeleteNotebookdefaultResponse
  >;
  /** Renames a notebook. */
  renameNotebook(
    notebookName: string,
    options: NotebookRenameNotebookParameters
  ): StreamableMethod<
    | NotebookRenameNotebook200Response
    | NotebookRenameNotebook202Response
    | NotebookRenameNotebookdefaultResponse
  >;
}

/** Contains operations for NotebookOperationResult operations */
export interface NotebookOperationResultOperations {
  /** Get notebook operation result */
  get(
    operationId: string,
    options?: NotebookOperationResultGetParameters
  ): StreamableMethod<
    | NotebookOperationResultGet200Response
    | NotebookOperationResultGet201Response
    | NotebookOperationResultGet202Response
    | NotebookOperationResultGet204Response
    | NotebookOperationResultGetdefaultResponse
  >;
}

/** Contains operations for PipelineOperations operations */
export interface PipelineOperationsOperations {
  /** Lists pipelines. */
  getPipelinesByWorkspace(
    options?: PipelineGetPipelinesByWorkspaceParameters
  ): StreamableMethod<
    | PipelineGetPipelinesByWorkspace200Response
    | PipelineGetPipelinesByWorkspacedefaultResponse
  >;
  /** Creates or updates a pipeline. */
  createOrUpdatePipeline(
    pipelineName: string,
    options: PipelineCreateOrUpdatePipelineParameters
  ): StreamableMethod<
    | PipelineCreateOrUpdatePipeline200Response
    | PipelineCreateOrUpdatePipeline202Response
    | PipelineCreateOrUpdatePipelinedefaultResponse
  >;
  /** Gets a pipeline. */
  getPipeline(
    pipelineName: string,
    options?: PipelineGetPipelineParameters
  ): StreamableMethod<
    | PipelineGetPipeline200Response
    | PipelineGetPipeline304Response
    | PipelineGetPipelinedefaultResponse
  >;
  /** Deletes a pipeline. */
  deletePipeline(
    pipelineName: string,
    options?: PipelineDeletePipelineParameters
  ): StreamableMethod<
    | PipelineDeletePipeline200Response
    | PipelineDeletePipeline202Response
    | PipelineDeletePipeline204Response
    | PipelineDeletePipelinedefaultResponse
  >;
  /** Renames a pipeline. */
  renamePipeline(
    pipelineName: string,
    options: PipelineRenamePipelineParameters
  ): StreamableMethod<
    | PipelineRenamePipeline200Response
    | PipelineRenamePipeline202Response
    | PipelineRenamePipelinedefaultResponse
  >;
  /** Creates a run of a pipeline. */
  createPipelineRun(
    pipelineName: string,
    options?: PipelineCreatePipelineRunParameters
  ): StreamableMethod<
    | PipelineCreatePipelineRun202Response
    | PipelineCreatePipelineRundefaultResponse
  >;
}

/** Contains operations for PipelineRun operations */
export interface PipelineRunOperations {
  /** Query pipeline runs in the workspace based on input filter conditions. */
  queryPipelineRunsByWorkspace(
    options: PipelineRunQueryPipelineRunsByWorkspaceParameters
  ): StreamableMethod<
    | PipelineRunQueryPipelineRunsByWorkspace200Response
    | PipelineRunQueryPipelineRunsByWorkspacedefaultResponse
  >;
  /** Get a pipeline run by its run ID. */
  getPipelineRun(
    runId: string,
    options?: PipelineRunGetPipelineRunParameters
  ): StreamableMethod<
    | PipelineRunGetPipelineRun200Response
    | PipelineRunGetPipelineRundefaultResponse
  >;
  /** Query activity runs based on input filter conditions. */
  queryActivityRuns(
    pipelineName: string,
    runId: string,
    options: PipelineRunQueryActivityRunsParameters
  ): StreamableMethod<
    | PipelineRunQueryActivityRuns200Response
    | PipelineRunQueryActivityRunsdefaultResponse
  >;
  /** Cancel a pipeline run by its run ID. */
  cancelPipelineRun(
    runId: string,
    options?: PipelineRunCancelPipelineRunParameters
  ): StreamableMethod<
    | PipelineRunCancelPipelineRun200Response
    | PipelineRunCancelPipelineRundefaultResponse
  >;
}

/** Contains operations for SparkJobDefinition operations */
export interface SparkJobDefinitionOperations {
  /** Lists spark job definitions. */
  getSparkJobDefinitionsByWorkspace(
    options?: SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceParameters
  ): StreamableMethod<
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspace200Response
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspacedefaultResponse
  >;
  /** Creates or updates a Spark Job Definition. */
  createOrUpdateSparkJobDefinition(
    sparkJobDefinitionName: string,
    options: SparkJobDefinitionCreateOrUpdateSparkJobDefinitionParameters
  ): StreamableMethod<
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition200Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition202Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinitiondefaultResponse
  >;
  /** Gets a Spark Job Definition. */
  getSparkJobDefinition(
    sparkJobDefinitionName: string,
    options?: SparkJobDefinitionGetSparkJobDefinitionParameters
  ): StreamableMethod<
    | SparkJobDefinitionGetSparkJobDefinition200Response
    | SparkJobDefinitionGetSparkJobDefinition304Response
    | SparkJobDefinitionGetSparkJobDefinitiondefaultResponse
  >;
  /** Deletes a Spark Job Definition. */
  deleteSparkJobDefinition(
    sparkJobDefinitionName: string,
    options?: SparkJobDefinitionDeleteSparkJobDefinitionParameters
  ): StreamableMethod<
    | SparkJobDefinitionDeleteSparkJobDefinition200Response
    | SparkJobDefinitionDeleteSparkJobDefinition202Response
    | SparkJobDefinitionDeleteSparkJobDefinition204Response
    | SparkJobDefinitionDeleteSparkJobDefinitiondefaultResponse
  >;
  /** Executes the spark job definition. */
  executeSparkJobDefinition(
    sparkJobDefinitionName: string,
    options?: SparkJobDefinitionExecuteSparkJobDefinitionParameters
  ): StreamableMethod<
    | SparkJobDefinitionExecuteSparkJobDefinition200Response
    | SparkJobDefinitionExecuteSparkJobDefinition202Response
    | SparkJobDefinitionExecuteSparkJobDefinitiondefaultResponse
  >;
  /** Renames a sparkJobDefinition. */
  renameSparkJobDefinition(
    sparkJobDefinitionName: string,
    options: SparkJobDefinitionRenameSparkJobDefinitionParameters
  ): StreamableMethod<
    | SparkJobDefinitionRenameSparkJobDefinition200Response
    | SparkJobDefinitionRenameSparkJobDefinition202Response
    | SparkJobDefinitionRenameSparkJobDefinitiondefaultResponse
  >;
  /** Debug the spark job definition. */
  debugSparkJobDefinition(
    options: SparkJobDefinitionDebugSparkJobDefinitionParameters
  ): StreamableMethod<
    | SparkJobDefinitionDebugSparkJobDefinition200Response
    | SparkJobDefinitionDebugSparkJobDefinition202Response
    | SparkJobDefinitionDebugSparkJobDefinitiondefaultResponse
  >;
}

/** Contains operations for SqlPools operations */
export interface SqlPoolsOperations {
  /** List Sql Pools */
  list(
    options?: SqlPoolsListParameters
  ): StreamableMethod<SqlPoolsList200Response | SqlPoolsListdefaultResponse>;
  /** Get Sql Pool */
  get(
    sqlPoolName: string,
    options?: SqlPoolsGetParameters
  ): StreamableMethod<SqlPoolsGet200Response | SqlPoolsGetdefaultResponse>;
}

/** Contains operations for SqlScript operations */
export interface SqlScriptOperations {
  /** Lists sql scripts. */
  getSqlScriptsByWorkspace(
    options?: SqlScriptGetSqlScriptsByWorkspaceParameters
  ): StreamableMethod<
    | SqlScriptGetSqlScriptsByWorkspace200Response
    | SqlScriptGetSqlScriptsByWorkspacedefaultResponse
  >;
  /** Creates or updates a Sql Script. */
  createOrUpdateSqlScript(
    sqlScriptName: string,
    options: SqlScriptCreateOrUpdateSqlScriptParameters
  ): StreamableMethod<
    | SqlScriptCreateOrUpdateSqlScript200Response
    | SqlScriptCreateOrUpdateSqlScript202Response
    | SqlScriptCreateOrUpdateSqlScriptdefaultResponse
  >;
  /** Gets a sql script. */
  getSqlScript(
    sqlScriptName: string,
    options?: SqlScriptGetSqlScriptParameters
  ): StreamableMethod<
    | SqlScriptGetSqlScript200Response
    | SqlScriptGetSqlScript304Response
    | SqlScriptGetSqlScriptdefaultResponse
  >;
  /** Deletes a Sql Script. */
  deleteSqlScript(
    sqlScriptName: string,
    options?: SqlScriptDeleteSqlScriptParameters
  ): StreamableMethod<
    | SqlScriptDeleteSqlScript200Response
    | SqlScriptDeleteSqlScript202Response
    | SqlScriptDeleteSqlScript204Response
    | SqlScriptDeleteSqlScriptdefaultResponse
  >;
  /** Renames a sqlScript. */
  renameSqlScript(
    sqlScriptName: string,
    options: SqlScriptRenameSqlScriptParameters
  ): StreamableMethod<
    | SqlScriptRenameSqlScript200Response
    | SqlScriptRenameSqlScript202Response
    | SqlScriptRenameSqlScriptdefaultResponse
  >;
}

/** Contains operations for Trigger operations */
export interface TriggerOperations {
  /** Lists triggers. */
  getTriggersByWorkspace(
    options?: TriggerGetTriggersByWorkspaceParameters
  ): StreamableMethod<
    | TriggerGetTriggersByWorkspace200Response
    | TriggerGetTriggersByWorkspacedefaultResponse
  >;
  /** Creates or updates a trigger. */
  createOrUpdateTrigger(
    triggerName: string,
    options: TriggerCreateOrUpdateTriggerParameters
  ): StreamableMethod<
    | TriggerCreateOrUpdateTrigger200Response
    | TriggerCreateOrUpdateTrigger202Response
    | TriggerCreateOrUpdateTriggerdefaultResponse
  >;
  /** Gets a trigger. */
  getTrigger(
    triggerName: string,
    options?: TriggerGetTriggerParameters
  ): StreamableMethod<
    | TriggerGetTrigger200Response
    | TriggerGetTrigger304Response
    | TriggerGetTriggerdefaultResponse
  >;
  /** Deletes a trigger. */
  deleteTrigger(
    triggerName: string,
    options?: TriggerDeleteTriggerParameters
  ): StreamableMethod<
    | TriggerDeleteTrigger200Response
    | TriggerDeleteTrigger202Response
    | TriggerDeleteTrigger204Response
    | TriggerDeleteTriggerdefaultResponse
  >;
  /** Subscribe event trigger to events. */
  subscribeTriggerToEvents(
    triggerName: string,
    options?: TriggerSubscribeTriggerToEventsParameters
  ): StreamableMethod<
    | TriggerSubscribeTriggerToEvents200Response
    | TriggerSubscribeTriggerToEvents202Response
    | TriggerSubscribeTriggerToEventsdefaultResponse
  >;
  /** Get a trigger's event subscription status. */
  getEventSubscriptionStatus(
    triggerName: string,
    options?: TriggerGetEventSubscriptionStatusParameters
  ): StreamableMethod<
    | TriggerGetEventSubscriptionStatus200Response
    | TriggerGetEventSubscriptionStatusdefaultResponse
  >;
  /** Unsubscribe event trigger from events. */
  unsubscribeTriggerFromEvents(
    triggerName: string,
    options?: TriggerUnsubscribeTriggerFromEventsParameters
  ): StreamableMethod<
    | TriggerUnsubscribeTriggerFromEvents200Response
    | TriggerUnsubscribeTriggerFromEvents202Response
    | TriggerUnsubscribeTriggerFromEventsdefaultResponse
  >;
  /** Starts a trigger. */
  startTrigger(
    triggerName: string,
    options?: TriggerStartTriggerParameters
  ): StreamableMethod<
    TriggerStartTrigger200Response | TriggerStartTriggerdefaultResponse
  >;
  /** Stops a trigger. */
  stopTrigger(
    triggerName: string,
    options?: TriggerStopTriggerParameters
  ): StreamableMethod<
    TriggerStopTrigger200Response | TriggerStopTriggerdefaultResponse
  >;
}

/** Contains operations for TriggerRun operations */
export interface TriggerRunOperations {
  /** Rerun single trigger instance by runId. */
  rerunTriggerInstance(
    triggerName: string,
    runId: string,
    options?: TriggerRunRerunTriggerInstanceParameters
  ): StreamableMethod<
    | TriggerRunRerunTriggerInstance200Response
    | TriggerRunRerunTriggerInstancedefaultResponse
  >;
  /** Cancel single trigger instance by runId. */
  cancelTriggerInstance(
    triggerName: string,
    runId: string,
    options?: TriggerRunCancelTriggerInstanceParameters
  ): StreamableMethod<
    | TriggerRunCancelTriggerInstance200Response
    | TriggerRunCancelTriggerInstancedefaultResponse
  >;
  /** Query trigger runs. */
  queryTriggerRunsByWorkspace(
    options: TriggerRunQueryTriggerRunsByWorkspaceParameters
  ): StreamableMethod<
    | TriggerRunQueryTriggerRunsByWorkspace200Response
    | TriggerRunQueryTriggerRunsByWorkspacedefaultResponse
  >;
}

/** Contains operations for Workspace operations */
export interface WorkspaceOperations {
  /** Get Workspace */
  get(
    options?: WorkspaceGetParameters
  ): StreamableMethod<WorkspaceGet200Response | WorkspaceGetdefaultResponse>;
}

export interface KqlScriptsGetAll {
  /** Get all KQL scripts */
  get(
    options?: KqlScriptsGetAllParameters
  ): StreamableMethod<
    KqlScriptsGetAll200Response | KqlScriptsGetAlldefaultResponse
  >;
}

export interface KqlScriptCreateOrUpdate {
  /** Creates or updates a KQL Script */
  put(
    options: KqlScriptCreateOrUpdateParameters
  ): StreamableMethod<
    | KqlScriptCreateOrUpdate200Response
    | KqlScriptCreateOrUpdate202Response
    | KqlScriptCreateOrUpdatedefaultResponse
  >;
  /** Get KQL script by name */
  get(
    options?: KqlScriptGetByNameParameters
  ): StreamableMethod<
    KqlScriptGetByName200Response | KqlScriptGetByNamedefaultResponse
  >;
  /** Delete KQL script by name */
  delete(
    options?: KqlScriptDeleteByNameParameters
  ): StreamableMethod<
    | KqlScriptDeleteByName200Response
    | KqlScriptDeleteByName202Response
    | KqlScriptDeleteByName204Response
    | KqlScriptDeleteByNamedefaultResponse
  >;
}

export interface KqlScriptRename {
  /** Rename KQL script */
  post(
    options: KqlScriptRenameParameters
  ): StreamableMethod<
    | KqlScriptRename200Response
    | KqlScriptRename202Response
    | KqlScriptRenamedefaultResponse
  >;
}

export interface MetastoreRegister {
  /** Register files in Syms */
  put(
    options: MetastoreRegisterParameters
  ): StreamableMethod<
    MetastoreRegister201Response | MetastoreRegisterdefaultResponse
  >;
  /** Gets status of the database */
  get(
    options?: MetastoreGetDatabaseOperationsParameters
  ): StreamableMethod<
    | MetastoreGetDatabaseOperations200Response
    | MetastoreGetDatabaseOperationsdefaultResponse
  >;
}

export interface MetastoreUpdate {
  /** Update files in Syms */
  put(
    options: MetastoreUpdateParameters
  ): StreamableMethod<
    MetastoreUpdate201Response | MetastoreUpdatedefaultResponse
  >;
}

export interface MetastoreDelete {
  /** Remove files in Syms */
  delete(
    options?: MetastoreDeleteParameters
  ): StreamableMethod<
    MetastoreDelete204Response | MetastoreDeletedefaultResponse
  >;
}

export interface SparkConfigurationGetSparkConfigurationsByWorkspace {
  /** Lists sparkconfigurations. */
  get(
    options?: SparkConfigurationGetSparkConfigurationsByWorkspaceParameters
  ): StreamableMethod<
    | SparkConfigurationGetSparkConfigurationsByWorkspace200Response
    | SparkConfigurationGetSparkConfigurationsByWorkspacedefaultResponse
  >;
}

export interface SparkConfigurationCreateOrUpdateSparkConfiguration {
  /** Creates or updates a sparkconfiguration. */
  put(
    options: SparkConfigurationCreateOrUpdateSparkConfigurationParameters
  ): StreamableMethod<
    | SparkConfigurationCreateOrUpdateSparkConfiguration200Response
    | SparkConfigurationCreateOrUpdateSparkConfiguration202Response
    | SparkConfigurationCreateOrUpdateSparkConfigurationdefaultResponse
  >;
  /** Gets a sparkConfiguration. */
  get(
    options?: SparkConfigurationGetSparkConfigurationParameters
  ): StreamableMethod<
    | SparkConfigurationGetSparkConfiguration200Response
    | SparkConfigurationGetSparkConfiguration304Response
    | SparkConfigurationGetSparkConfigurationdefaultResponse
  >;
  /** Deletes a sparkConfiguration. */
  delete(
    options?: SparkConfigurationDeleteSparkConfigurationParameters
  ): StreamableMethod<
    | SparkConfigurationDeleteSparkConfiguration200Response
    | SparkConfigurationDeleteSparkConfiguration202Response
    | SparkConfigurationDeleteSparkConfiguration204Response
    | SparkConfigurationDeleteSparkConfigurationdefaultResponse
  >;
}

export interface SparkConfigurationRenameSparkConfiguration {
  /** Renames a sparkConfiguration. */
  post(
    options: SparkConfigurationRenameSparkConfigurationParameters
  ): StreamableMethod<
    | SparkConfigurationRenameSparkConfiguration200Response
    | SparkConfigurationRenameSparkConfiguration202Response
    | SparkConfigurationRenameSparkConfigurationdefaultResponse
  >;
}

export interface BigDataPoolsList {
  /** List Big Data Pools */
  get(
    options?: BigDataPoolsListParameters
  ): StreamableMethod<
    BigDataPoolsList200Response | BigDataPoolsListdefaultResponse
  >;
}

export interface BigDataPoolsGet {
  /** Get Big Data Pool */
  get(
    options?: BigDataPoolsGetParameters
  ): StreamableMethod<
    BigDataPoolsGet200Response | BigDataPoolsGetdefaultResponse
  >;
}

export interface DataFlowCreateOrUpdateDataFlow {
  /** Creates or updates a data flow. */
  put(
    options: DataFlowCreateOrUpdateDataFlowParameters
  ): StreamableMethod<
    | DataFlowCreateOrUpdateDataFlow200Response
    | DataFlowCreateOrUpdateDataFlow202Response
    | DataFlowCreateOrUpdateDataFlowdefaultResponse
  >;
  /** Gets a data flow. */
  get(
    options?: DataFlowGetDataFlowParameters
  ): StreamableMethod<
    DataFlowGetDataFlow200Response | DataFlowGetDataFlowdefaultResponse
  >;
  /** Deletes a data flow. */
  delete(
    options?: DataFlowDeleteDataFlowParameters
  ): StreamableMethod<
    | DataFlowDeleteDataFlow200Response
    | DataFlowDeleteDataFlow202Response
    | DataFlowDeleteDataFlow204Response
    | DataFlowDeleteDataFlowdefaultResponse
  >;
}

export interface DataFlowRenameDataFlow {
  /** Renames a dataflow. */
  post(
    options: DataFlowRenameDataFlowParameters
  ): StreamableMethod<
    | DataFlowRenameDataFlow200Response
    | DataFlowRenameDataFlow202Response
    | DataFlowRenameDataFlowdefaultResponse
  >;
}

export interface DataFlowGetDataFlowsByWorkspace {
  /** Lists data flows. */
  get(
    options?: DataFlowGetDataFlowsByWorkspaceParameters
  ): StreamableMethod<
    | DataFlowGetDataFlowsByWorkspace200Response
    | DataFlowGetDataFlowsByWorkspacedefaultResponse
  >;
}

export interface DataFlowDebugSessionCreateDataFlowDebugSession {
  /** Creates a data flow debug session. */
  post(
    options: DataFlowDebugSessionCreateDataFlowDebugSessionParameters
  ): StreamableMethod<
    | DataFlowDebugSessionCreateDataFlowDebugSession200Response
    | DataFlowDebugSessionCreateDataFlowDebugSession202Response
    | DataFlowDebugSessionCreateDataFlowDebugSessiondefaultResponse
  >;
}

export interface DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspace {
  /** Query all active data flow debug sessions. */
  post(
    options?: DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceParameters
  ): StreamableMethod<
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspace200Response
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspacedefaultResponse
  >;
}

export interface DataFlowDebugSessionAddDataFlow {
  /** Add a data flow into debug session. */
  post(
    options: DataFlowDebugSessionAddDataFlowParameters
  ): StreamableMethod<
    | DataFlowDebugSessionAddDataFlow200Response
    | DataFlowDebugSessionAddDataFlowdefaultResponse
  >;
}

export interface DataFlowDebugSessionDeleteDataFlowDebugSession {
  /** Deletes a data flow debug session. */
  post(
    options: DataFlowDebugSessionDeleteDataFlowDebugSessionParameters
  ): StreamableMethod<
    | DataFlowDebugSessionDeleteDataFlowDebugSession200Response
    | DataFlowDebugSessionDeleteDataFlowDebugSessiondefaultResponse
  >;
}

export interface DataFlowDebugSessionExecuteCommand {
  /** Execute a data flow debug command. */
  post(
    options: DataFlowDebugSessionExecuteCommandParameters
  ): StreamableMethod<
    | DataFlowDebugSessionExecuteCommand200Response
    | DataFlowDebugSessionExecuteCommand202Response
    | DataFlowDebugSessionExecuteCommanddefaultResponse
  >;
}

export interface DatasetGetDatasetsByWorkspace {
  /** Lists datasets. */
  get(
    options?: DatasetGetDatasetsByWorkspaceParameters
  ): StreamableMethod<
    | DatasetGetDatasetsByWorkspace200Response
    | DatasetGetDatasetsByWorkspacedefaultResponse
  >;
}

export interface DatasetCreateOrUpdateDataset {
  /** Creates or updates a dataset. */
  put(
    options: DatasetCreateOrUpdateDatasetParameters
  ): StreamableMethod<
    | DatasetCreateOrUpdateDataset200Response
    | DatasetCreateOrUpdateDataset202Response
    | DatasetCreateOrUpdateDatasetdefaultResponse
  >;
  /** Gets a dataset. */
  get(
    options?: DatasetGetDatasetParameters
  ): StreamableMethod<
    | DatasetGetDataset200Response
    | DatasetGetDataset304Response
    | DatasetGetDatasetdefaultResponse
  >;
  /** Deletes a dataset. */
  delete(
    options?: DatasetDeleteDatasetParameters
  ): StreamableMethod<
    | DatasetDeleteDataset200Response
    | DatasetDeleteDataset202Response
    | DatasetDeleteDataset204Response
    | DatasetDeleteDatasetdefaultResponse
  >;
}

export interface DatasetRenameDataset {
  /** Renames a dataset. */
  post(
    options: DatasetRenameDatasetParameters
  ): StreamableMethod<
    | DatasetRenameDataset200Response
    | DatasetRenameDataset202Response
    | DatasetRenameDatasetdefaultResponse
  >;
}

export interface WorkspaceGitRepoManagementGetGitHubAccessToken {
  /** Get the GitHub access token. */
  post(
    options: WorkspaceGitRepoManagementGetGitHubAccessTokenParameters
  ): StreamableMethod<
    WorkspaceGitRepoManagementGetGitHubAccessToken200Response
  >;
}

export interface IntegrationRuntimesList {
  /** List Integration Runtimes */
  get(
    options?: IntegrationRuntimesListParameters
  ): StreamableMethod<
    IntegrationRuntimesList200Response | IntegrationRuntimesListdefaultResponse
  >;
}

export interface IntegrationRuntimesGet {
  /** Get Integration Runtime */
  get(
    options?: IntegrationRuntimesGetParameters
  ): StreamableMethod<
    IntegrationRuntimesGet200Response | IntegrationRuntimesGetdefaultResponse
  >;
}

export interface LibraryList {
  /** Lists Library. */
  get(
    options?: LibraryListParameters
  ): StreamableMethod<LibraryList200Response | LibraryListdefaultResponse>;
}

export interface LibraryFlush {
  /** Flush Library */
  post(
    options?: LibraryFlushParameters
  ): StreamableMethod<
    | LibraryFlush200Response
    | LibraryFlush202Response
    | LibraryFlushdefaultResponse
  >;
}

export interface LibraryGetOperationResult {
  /** Get Operation result for Library */
  get(
    options?: LibraryGetOperationResultParameters
  ): StreamableMethod<
    | LibraryGetOperationResult200Response
    | LibraryGetOperationResult202Response
    | LibraryGetOperationResultdefaultResponse
  >;
}

export interface LibraryDelete {
  /** Delete Library */
  delete(
    options?: LibraryDeleteParameters
  ): StreamableMethod<
    | LibraryDelete200Response
    | LibraryDelete202Response
    | LibraryDelete409Response
    | LibraryDeletedefaultResponse
  >;
  /** Get Library */
  get(
    options?: LibraryGetParameters
  ): StreamableMethod<
    LibraryGet200Response | LibraryGet304Response | LibraryGetdefaultResponse
  >;
  /** Creates a library with the library name. */
  put(
    options?: LibraryCreateParameters | LibraryAppendParameters
  ):
    | StreamableMethod<
        | LibraryCreate200Response
        | LibraryCreate202Response
        | LibraryCreatedefaultResponse
      >
    | StreamableMethod<LibraryAppend201Response | LibraryAppenddefaultResponse>;
}

export interface LinkedServiceGetLinkedServicesByWorkspace {
  /** Lists linked services. */
  get(
    options?: LinkedServiceGetLinkedServicesByWorkspaceParameters
  ): StreamableMethod<
    | LinkedServiceGetLinkedServicesByWorkspace200Response
    | LinkedServiceGetLinkedServicesByWorkspacedefaultResponse
  >;
}

export interface LinkedServiceCreateOrUpdateLinkedService {
  /** Creates or updates a linked service. */
  put(
    options: LinkedServiceCreateOrUpdateLinkedServiceParameters
  ): StreamableMethod<
    | LinkedServiceCreateOrUpdateLinkedService200Response
    | LinkedServiceCreateOrUpdateLinkedService202Response
    | LinkedServiceCreateOrUpdateLinkedServicedefaultResponse
  >;
  /** Gets a linked service. */
  get(
    options?: LinkedServiceGetLinkedServiceParameters
  ): StreamableMethod<
    | LinkedServiceGetLinkedService200Response
    | LinkedServiceGetLinkedService304Response
    | LinkedServiceGetLinkedServicedefaultResponse
  >;
  /** Deletes a linked service. */
  delete(
    options?: LinkedServiceDeleteLinkedServiceParameters
  ): StreamableMethod<
    | LinkedServiceDeleteLinkedService200Response
    | LinkedServiceDeleteLinkedService202Response
    | LinkedServiceDeleteLinkedService204Response
    | LinkedServiceDeleteLinkedServicedefaultResponse
  >;
}

export interface LinkedServiceRenameLinkedService {
  /** Renames a linked service. */
  post(
    options: LinkedServiceRenameLinkedServiceParameters
  ): StreamableMethod<
    | LinkedServiceRenameLinkedService200Response
    | LinkedServiceRenameLinkedService202Response
    | LinkedServiceRenameLinkedServicedefaultResponse
  >;
}

export interface NotebookGetNotebooksByWorkspace {
  /** Lists Notebooks. */
  get(
    options?: NotebookGetNotebooksByWorkspaceParameters
  ): StreamableMethod<
    | NotebookGetNotebooksByWorkspace200Response
    | NotebookGetNotebooksByWorkspacedefaultResponse
  >;
}

export interface NotebookGetNotebookSummaryByWorkSpace {
  /** Lists a summary of Notebooks. */
  get(
    options?: NotebookGetNotebookSummaryByWorkSpaceParameters
  ): StreamableMethod<
    | NotebookGetNotebookSummaryByWorkSpace200Response
    | NotebookGetNotebookSummaryByWorkSpacedefaultResponse
  >;
}

export interface NotebookCreateOrUpdateNotebook {
  /** Creates or updates a Note Book. */
  put(
    options: NotebookCreateOrUpdateNotebookParameters
  ): StreamableMethod<
    | NotebookCreateOrUpdateNotebook200Response
    | NotebookCreateOrUpdateNotebook202Response
    | NotebookCreateOrUpdateNotebookdefaultResponse
  >;
  /** Gets a Note Book. */
  get(
    options?: NotebookGetNotebookParameters
  ): StreamableMethod<
    | NotebookGetNotebook200Response
    | NotebookGetNotebook304Response
    | NotebookGetNotebookdefaultResponse
  >;
  /** Deletes a Note book. */
  delete(
    options?: NotebookDeleteNotebookParameters
  ): StreamableMethod<
    | NotebookDeleteNotebook200Response
    | NotebookDeleteNotebook202Response
    | NotebookDeleteNotebook204Response
    | NotebookDeleteNotebookdefaultResponse
  >;
}

export interface NotebookRenameNotebook {
  /** Renames a notebook. */
  post(
    options: NotebookRenameNotebookParameters
  ): StreamableMethod<
    | NotebookRenameNotebook200Response
    | NotebookRenameNotebook202Response
    | NotebookRenameNotebookdefaultResponse
  >;
}

export interface NotebookOperationResultGet {
  /** Get notebook operation result */
  get(
    options?: NotebookOperationResultGetParameters
  ): StreamableMethod<
    | NotebookOperationResultGet200Response
    | NotebookOperationResultGet201Response
    | NotebookOperationResultGet202Response
    | NotebookOperationResultGet204Response
    | NotebookOperationResultGetdefaultResponse
  >;
}

export interface PipelineGetPipelinesByWorkspace {
  /** Lists pipelines. */
  get(
    options?: PipelineGetPipelinesByWorkspaceParameters
  ): StreamableMethod<
    | PipelineGetPipelinesByWorkspace200Response
    | PipelineGetPipelinesByWorkspacedefaultResponse
  >;
}

export interface PipelineCreateOrUpdatePipeline {
  /** Creates or updates a pipeline. */
  put(
    options: PipelineCreateOrUpdatePipelineParameters
  ): StreamableMethod<
    | PipelineCreateOrUpdatePipeline200Response
    | PipelineCreateOrUpdatePipeline202Response
    | PipelineCreateOrUpdatePipelinedefaultResponse
  >;
  /** Gets a pipeline. */
  get(
    options?: PipelineGetPipelineParameters
  ): StreamableMethod<
    | PipelineGetPipeline200Response
    | PipelineGetPipeline304Response
    | PipelineGetPipelinedefaultResponse
  >;
  /** Deletes a pipeline. */
  delete(
    options?: PipelineDeletePipelineParameters
  ): StreamableMethod<
    | PipelineDeletePipeline200Response
    | PipelineDeletePipeline202Response
    | PipelineDeletePipeline204Response
    | PipelineDeletePipelinedefaultResponse
  >;
}

export interface PipelineRenamePipeline {
  /** Renames a pipeline. */
  post(
    options: PipelineRenamePipelineParameters
  ): StreamableMethod<
    | PipelineRenamePipeline200Response
    | PipelineRenamePipeline202Response
    | PipelineRenamePipelinedefaultResponse
  >;
}

export interface PipelineCreatePipelineRun {
  /** Creates a run of a pipeline. */
  post(
    options?: PipelineCreatePipelineRunParameters
  ): StreamableMethod<
    | PipelineCreatePipelineRun202Response
    | PipelineCreatePipelineRundefaultResponse
  >;
}

export interface PipelineRunQueryPipelineRunsByWorkspace {
  /** Query pipeline runs in the workspace based on input filter conditions. */
  post(
    options: PipelineRunQueryPipelineRunsByWorkspaceParameters
  ): StreamableMethod<
    | PipelineRunQueryPipelineRunsByWorkspace200Response
    | PipelineRunQueryPipelineRunsByWorkspacedefaultResponse
  >;
}

export interface PipelineRunGetPipelineRun {
  /** Get a pipeline run by its run ID. */
  get(
    options?: PipelineRunGetPipelineRunParameters
  ): StreamableMethod<
    | PipelineRunGetPipelineRun200Response
    | PipelineRunGetPipelineRundefaultResponse
  >;
}

export interface PipelineRunQueryActivityRuns {
  /** Query activity runs based on input filter conditions. */
  post(
    options: PipelineRunQueryActivityRunsParameters
  ): StreamableMethod<
    | PipelineRunQueryActivityRuns200Response
    | PipelineRunQueryActivityRunsdefaultResponse
  >;
}

export interface PipelineRunCancelPipelineRun {
  /** Cancel a pipeline run by its run ID. */
  post(
    options?: PipelineRunCancelPipelineRunParameters
  ): StreamableMethod<
    | PipelineRunCancelPipelineRun200Response
    | PipelineRunCancelPipelineRundefaultResponse
  >;
}

export interface SparkJobDefinitionGetSparkJobDefinitionsByWorkspace {
  /** Lists spark job definitions. */
  get(
    options?: SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceParameters
  ): StreamableMethod<
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspace200Response
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspacedefaultResponse
  >;
}

export interface SparkJobDefinitionCreateOrUpdateSparkJobDefinition {
  /** Creates or updates a Spark Job Definition. */
  put(
    options: SparkJobDefinitionCreateOrUpdateSparkJobDefinitionParameters
  ): StreamableMethod<
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition200Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition202Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinitiondefaultResponse
  >;
  /** Gets a Spark Job Definition. */
  get(
    options?: SparkJobDefinitionGetSparkJobDefinitionParameters
  ): StreamableMethod<
    | SparkJobDefinitionGetSparkJobDefinition200Response
    | SparkJobDefinitionGetSparkJobDefinition304Response
    | SparkJobDefinitionGetSparkJobDefinitiondefaultResponse
  >;
  /** Deletes a Spark Job Definition. */
  delete(
    options?: SparkJobDefinitionDeleteSparkJobDefinitionParameters
  ): StreamableMethod<
    | SparkJobDefinitionDeleteSparkJobDefinition200Response
    | SparkJobDefinitionDeleteSparkJobDefinition202Response
    | SparkJobDefinitionDeleteSparkJobDefinition204Response
    | SparkJobDefinitionDeleteSparkJobDefinitiondefaultResponse
  >;
}

export interface SparkJobDefinitionExecuteSparkJobDefinition {
  /** Executes the spark job definition. */
  post(
    options?: SparkJobDefinitionExecuteSparkJobDefinitionParameters
  ): StreamableMethod<
    | SparkJobDefinitionExecuteSparkJobDefinition200Response
    | SparkJobDefinitionExecuteSparkJobDefinition202Response
    | SparkJobDefinitionExecuteSparkJobDefinitiondefaultResponse
  >;
}

export interface SparkJobDefinitionRenameSparkJobDefinition {
  /** Renames a sparkJobDefinition. */
  post(
    options: SparkJobDefinitionRenameSparkJobDefinitionParameters
  ): StreamableMethod<
    | SparkJobDefinitionRenameSparkJobDefinition200Response
    | SparkJobDefinitionRenameSparkJobDefinition202Response
    | SparkJobDefinitionRenameSparkJobDefinitiondefaultResponse
  >;
}

export interface SparkJobDefinitionDebugSparkJobDefinition {
  /** Debug the spark job definition. */
  post(
    options: SparkJobDefinitionDebugSparkJobDefinitionParameters
  ): StreamableMethod<
    | SparkJobDefinitionDebugSparkJobDefinition200Response
    | SparkJobDefinitionDebugSparkJobDefinition202Response
    | SparkJobDefinitionDebugSparkJobDefinitiondefaultResponse
  >;
}

export interface SqlPoolsList {
  /** List Sql Pools */
  get(
    options?: SqlPoolsListParameters
  ): StreamableMethod<SqlPoolsList200Response | SqlPoolsListdefaultResponse>;
}

export interface SqlPoolsGet {
  /** Get Sql Pool */
  get(
    options?: SqlPoolsGetParameters
  ): StreamableMethod<SqlPoolsGet200Response | SqlPoolsGetdefaultResponse>;
}

export interface SqlScriptGetSqlScriptsByWorkspace {
  /** Lists sql scripts. */
  get(
    options?: SqlScriptGetSqlScriptsByWorkspaceParameters
  ): StreamableMethod<
    | SqlScriptGetSqlScriptsByWorkspace200Response
    | SqlScriptGetSqlScriptsByWorkspacedefaultResponse
  >;
}

export interface SqlScriptCreateOrUpdateSqlScript {
  /** Creates or updates a Sql Script. */
  put(
    options: SqlScriptCreateOrUpdateSqlScriptParameters
  ): StreamableMethod<
    | SqlScriptCreateOrUpdateSqlScript200Response
    | SqlScriptCreateOrUpdateSqlScript202Response
    | SqlScriptCreateOrUpdateSqlScriptdefaultResponse
  >;
  /** Gets a sql script. */
  get(
    options?: SqlScriptGetSqlScriptParameters
  ): StreamableMethod<
    | SqlScriptGetSqlScript200Response
    | SqlScriptGetSqlScript304Response
    | SqlScriptGetSqlScriptdefaultResponse
  >;
  /** Deletes a Sql Script. */
  delete(
    options?: SqlScriptDeleteSqlScriptParameters
  ): StreamableMethod<
    | SqlScriptDeleteSqlScript200Response
    | SqlScriptDeleteSqlScript202Response
    | SqlScriptDeleteSqlScript204Response
    | SqlScriptDeleteSqlScriptdefaultResponse
  >;
}

export interface SqlScriptRenameSqlScript {
  /** Renames a sqlScript. */
  post(
    options: SqlScriptRenameSqlScriptParameters
  ): StreamableMethod<
    | SqlScriptRenameSqlScript200Response
    | SqlScriptRenameSqlScript202Response
    | SqlScriptRenameSqlScriptdefaultResponse
  >;
}

export interface TriggerGetTriggersByWorkspace {
  /** Lists triggers. */
  get(
    options?: TriggerGetTriggersByWorkspaceParameters
  ): StreamableMethod<
    | TriggerGetTriggersByWorkspace200Response
    | TriggerGetTriggersByWorkspacedefaultResponse
  >;
}

export interface TriggerCreateOrUpdateTrigger {
  /** Creates or updates a trigger. */
  put(
    options: TriggerCreateOrUpdateTriggerParameters
  ): StreamableMethod<
    | TriggerCreateOrUpdateTrigger200Response
    | TriggerCreateOrUpdateTrigger202Response
    | TriggerCreateOrUpdateTriggerdefaultResponse
  >;
  /** Gets a trigger. */
  get(
    options?: TriggerGetTriggerParameters
  ): StreamableMethod<
    | TriggerGetTrigger200Response
    | TriggerGetTrigger304Response
    | TriggerGetTriggerdefaultResponse
  >;
  /** Deletes a trigger. */
  delete(
    options?: TriggerDeleteTriggerParameters
  ): StreamableMethod<
    | TriggerDeleteTrigger200Response
    | TriggerDeleteTrigger202Response
    | TriggerDeleteTrigger204Response
    | TriggerDeleteTriggerdefaultResponse
  >;
}

export interface TriggerSubscribeTriggerToEvents {
  /** Subscribe event trigger to events. */
  post(
    options?: TriggerSubscribeTriggerToEventsParameters
  ): StreamableMethod<
    | TriggerSubscribeTriggerToEvents200Response
    | TriggerSubscribeTriggerToEvents202Response
    | TriggerSubscribeTriggerToEventsdefaultResponse
  >;
}

export interface TriggerGetEventSubscriptionStatus {
  /** Get a trigger's event subscription status. */
  post(
    options?: TriggerGetEventSubscriptionStatusParameters
  ): StreamableMethod<
    | TriggerGetEventSubscriptionStatus200Response
    | TriggerGetEventSubscriptionStatusdefaultResponse
  >;
}

export interface TriggerUnsubscribeTriggerFromEvents {
  /** Unsubscribe event trigger from events. */
  post(
    options?: TriggerUnsubscribeTriggerFromEventsParameters
  ): StreamableMethod<
    | TriggerUnsubscribeTriggerFromEvents200Response
    | TriggerUnsubscribeTriggerFromEvents202Response
    | TriggerUnsubscribeTriggerFromEventsdefaultResponse
  >;
}

export interface TriggerStartTrigger {
  /** Starts a trigger. */
  post(
    options?: TriggerStartTriggerParameters
  ): StreamableMethod<
    TriggerStartTrigger200Response | TriggerStartTriggerdefaultResponse
  >;
}

export interface TriggerStopTrigger {
  /** Stops a trigger. */
  post(
    options?: TriggerStopTriggerParameters
  ): StreamableMethod<
    TriggerStopTrigger200Response | TriggerStopTriggerdefaultResponse
  >;
}

export interface TriggerRunRerunTriggerInstance {
  /** Rerun single trigger instance by runId. */
  post(
    options?: TriggerRunRerunTriggerInstanceParameters
  ): StreamableMethod<
    | TriggerRunRerunTriggerInstance200Response
    | TriggerRunRerunTriggerInstancedefaultResponse
  >;
}

export interface TriggerRunCancelTriggerInstance {
  /** Cancel single trigger instance by runId. */
  post(
    options?: TriggerRunCancelTriggerInstanceParameters
  ): StreamableMethod<
    | TriggerRunCancelTriggerInstance200Response
    | TriggerRunCancelTriggerInstancedefaultResponse
  >;
}

export interface TriggerRunQueryTriggerRunsByWorkspace {
  /** Query trigger runs. */
  post(
    options: TriggerRunQueryTriggerRunsByWorkspaceParameters
  ): StreamableMethod<
    | TriggerRunQueryTriggerRunsByWorkspace200Response
    | TriggerRunQueryTriggerRunsByWorkspacedefaultResponse
  >;
}

export interface WorkspaceGet {
  /** Get Workspace */
  get(
    options?: WorkspaceGetParameters
  ): StreamableMethod<WorkspaceGet200Response | WorkspaceGetdefaultResponse>;
}

export interface Routes {
  /** Resource for '/kqlScripts' has methods for the following verbs: get */
  (path: "/kqlScripts"): KqlScriptsGetAll;
  /** Resource for '/kqlScripts/\{kqlScriptName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/kqlScripts/{kqlScriptName}",
    kqlScriptName: string
  ): KqlScriptCreateOrUpdate;
  /** Resource for '/kqlScripts/\{kqlScriptName\}/rename' has methods for the following verbs: post */
  (
    path: "/kqlScripts/{kqlScriptName}/rename",
    kqlScriptName: string
  ): KqlScriptRename;
  /** Resource for '/metastore/create-database-operations/\{id\}' has methods for the following verbs: put, get */
  (
    path: "/metastore/create-database-operations/{id}",
    id: string
  ): MetastoreRegister;
  /** Resource for '/metastore/update-database-operations/\{id\}' has methods for the following verbs: put */
  (
    path: "/metastore/update-database-operations/{id}",
    id: string
  ): MetastoreUpdate;
  /** Resource for '/metastore/databases/\{id\}' has methods for the following verbs: delete */
  (path: "/metastore/databases/{id}", id: string): MetastoreDelete;
  /** Resource for '/sparkconfigurations' has methods for the following verbs: get */
  (
    path: "/sparkconfigurations"
  ): SparkConfigurationGetSparkConfigurationsByWorkspace;
  /** Resource for '/sparkconfigurations/\{sparkConfigurationName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/sparkconfigurations/{sparkConfigurationName}",
    sparkConfigurationName: string
  ): SparkConfigurationCreateOrUpdateSparkConfiguration;
  /** Resource for '/sparkconfigurations/\{sparkConfigurationName\}/rename' has methods for the following verbs: post */
  (
    path: "/sparkconfigurations/{sparkConfigurationName}/rename",
    sparkConfigurationName: string
  ): SparkConfigurationRenameSparkConfiguration;
  /** Resource for '/bigDataPools' has methods for the following verbs: get */
  (path: "/bigDataPools"): BigDataPoolsList;
  /** Resource for '/bigDataPools/\{bigDataPoolName\}' has methods for the following verbs: get */
  (
    path: "/bigDataPools/{bigDataPoolName}",
    bigDataPoolName: string
  ): BigDataPoolsGet;
  /** Resource for '/dataflows/\{dataFlowName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/dataflows/{dataFlowName}",
    dataFlowName: string
  ): DataFlowCreateOrUpdateDataFlow;
  /** Resource for '/dataflows/\{dataFlowName\}/rename' has methods for the following verbs: post */
  (
    path: "/dataflows/{dataFlowName}/rename",
    dataFlowName: string
  ): DataFlowRenameDataFlow;
  /** Resource for '/dataflows' has methods for the following verbs: get */
  (path: "/dataflows"): DataFlowGetDataFlowsByWorkspace;
  /** Resource for '/createDataFlowDebugSession' has methods for the following verbs: post */
  (
    path: "/createDataFlowDebugSession"
  ): DataFlowDebugSessionCreateDataFlowDebugSession;
  /** Resource for '/queryDataFlowDebugSessions' has methods for the following verbs: post */
  (
    path: "/queryDataFlowDebugSessions"
  ): DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspace;
  /** Resource for '/addDataFlowToDebugSession' has methods for the following verbs: post */
  (path: "/addDataFlowToDebugSession"): DataFlowDebugSessionAddDataFlow;
  /** Resource for '/deleteDataFlowDebugSession' has methods for the following verbs: post */
  (
    path: "/deleteDataFlowDebugSession"
  ): DataFlowDebugSessionDeleteDataFlowDebugSession;
  /** Resource for '/executeDataFlowDebugCommand' has methods for the following verbs: post */
  (path: "/executeDataFlowDebugCommand"): DataFlowDebugSessionExecuteCommand;
  /** Resource for '/datasets' has methods for the following verbs: get */
  (path: "/datasets"): DatasetGetDatasetsByWorkspace;
  /** Resource for '/datasets/\{datasetName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/datasets/{datasetName}",
    datasetName: string
  ): DatasetCreateOrUpdateDataset;
  /** Resource for '/datasets/\{datasetName\}/rename' has methods for the following verbs: post */
  (
    path: "/datasets/{datasetName}/rename",
    datasetName: string
  ): DatasetRenameDataset;
  /** Resource for '/getGitHubAccessToken' has methods for the following verbs: post */
  (
    path: "/getGitHubAccessToken"
  ): WorkspaceGitRepoManagementGetGitHubAccessToken;
  /** Resource for '/integrationRuntimes' has methods for the following verbs: get */
  (path: "/integrationRuntimes"): IntegrationRuntimesList;
  /** Resource for '/integrationRuntimes/\{integrationRuntimeName\}' has methods for the following verbs: get */
  (
    path: "/integrationRuntimes/{integrationRuntimeName}",
    integrationRuntimeName: string
  ): IntegrationRuntimesGet;
  /** Resource for '/libraries' has methods for the following verbs: get */
  (path: "/libraries"): LibraryList;
  /** Resource for '/libraries/\{libraryName\}/flush' has methods for the following verbs: post */
  (path: "/libraries/{libraryName}/flush", libraryName: string): LibraryFlush;
  /** Resource for '/libraryOperationResults/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/libraryOperationResults/{operationId}",
    operationId: string
  ): LibraryGetOperationResult;
  /** Resource for '/libraries/\{libraryName\}' has methods for the following verbs: delete, get, put */
  (path: "/libraries/{libraryName}", libraryName: string): LibraryDelete;
  /** Resource for '/linkedservices' has methods for the following verbs: get */
  (path: "/linkedservices"): LinkedServiceGetLinkedServicesByWorkspace;
  /** Resource for '/linkedservices/\{linkedServiceName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/linkedservices/{linkedServiceName}",
    linkedServiceName: string
  ): LinkedServiceCreateOrUpdateLinkedService;
  /** Resource for '/linkedservices/\{linkedServiceName\}/rename' has methods for the following verbs: post */
  (
    path: "/linkedservices/{linkedServiceName}/rename",
    linkedServiceName: string
  ): LinkedServiceRenameLinkedService;
  /** Resource for '/notebooks' has methods for the following verbs: get */
  (path: "/notebooks"): NotebookGetNotebooksByWorkspace;
  /** Resource for '/notebooksSummary' has methods for the following verbs: get */
  (path: "/notebooksSummary"): NotebookGetNotebookSummaryByWorkSpace;
  /** Resource for '/notebooks/\{notebookName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/notebooks/{notebookName}",
    notebookName: string
  ): NotebookCreateOrUpdateNotebook;
  /** Resource for '/notebooks/\{notebookName\}/rename' has methods for the following verbs: post */
  (
    path: "/notebooks/{notebookName}/rename",
    notebookName: string
  ): NotebookRenameNotebook;
  /** Resource for '/notebookOperationResults/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/notebookOperationResults/{operationId}",
    operationId: string
  ): NotebookOperationResultGet;
  /** Resource for '/pipelines' has methods for the following verbs: get */
  (path: "/pipelines"): PipelineGetPipelinesByWorkspace;
  /** Resource for '/pipelines/\{pipelineName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/pipelines/{pipelineName}",
    pipelineName: string
  ): PipelineCreateOrUpdatePipeline;
  /** Resource for '/pipelines/\{pipelineName\}/rename' has methods for the following verbs: post */
  (
    path: "/pipelines/{pipelineName}/rename",
    pipelineName: string
  ): PipelineRenamePipeline;
  /** Resource for '/pipelines/\{pipelineName\}/createRun' has methods for the following verbs: post */
  (
    path: "/pipelines/{pipelineName}/createRun",
    pipelineName: string
  ): PipelineCreatePipelineRun;
  /** Resource for '/queryPipelineRuns' has methods for the following verbs: post */
  (path: "/queryPipelineRuns"): PipelineRunQueryPipelineRunsByWorkspace;
  /** Resource for '/pipelineruns/\{runId\}' has methods for the following verbs: get */
  (path: "/pipelineruns/{runId}", runId: string): PipelineRunGetPipelineRun;
  /** Resource for '/pipelines/\{pipelineName\}/pipelineruns/\{runId\}/queryActivityruns' has methods for the following verbs: post */
  (
    path: "/pipelines/{pipelineName}/pipelineruns/{runId}/queryActivityruns",
    pipelineName: string,
    runId: string
  ): PipelineRunQueryActivityRuns;
  /** Resource for '/pipelineruns/\{runId\}/cancel' has methods for the following verbs: post */
  (
    path: "/pipelineruns/{runId}/cancel",
    runId: string
  ): PipelineRunCancelPipelineRun;
  /** Resource for '/sparkJobDefinitions' has methods for the following verbs: get */
  (
    path: "/sparkJobDefinitions"
  ): SparkJobDefinitionGetSparkJobDefinitionsByWorkspace;
  /** Resource for '/sparkJobDefinitions/\{sparkJobDefinitionName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/sparkJobDefinitions/{sparkJobDefinitionName}",
    sparkJobDefinitionName: string
  ): SparkJobDefinitionCreateOrUpdateSparkJobDefinition;
  /** Resource for '/sparkJobDefinitions/\{sparkJobDefinitionName\}/execute' has methods for the following verbs: post */
  (
    path: "/sparkJobDefinitions/{sparkJobDefinitionName}/execute",
    sparkJobDefinitionName: string
  ): SparkJobDefinitionExecuteSparkJobDefinition;
  /** Resource for '/sparkJobDefinitions/\{sparkJobDefinitionName\}/rename' has methods for the following verbs: post */
  (
    path: "/sparkJobDefinitions/{sparkJobDefinitionName}/rename",
    sparkJobDefinitionName: string
  ): SparkJobDefinitionRenameSparkJobDefinition;
  /** Resource for '/debugSparkJobDefinition' has methods for the following verbs: post */
  (path: "/debugSparkJobDefinition"): SparkJobDefinitionDebugSparkJobDefinition;
  /** Resource for '/sqlPools' has methods for the following verbs: get */
  (path: "/sqlPools"): SqlPoolsList;
  /** Resource for '/sqlPools/\{sqlPoolName\}' has methods for the following verbs: get */
  (path: "/sqlPools/{sqlPoolName}", sqlPoolName: string): SqlPoolsGet;
  /** Resource for '/sqlScripts' has methods for the following verbs: get */
  (path: "/sqlScripts"): SqlScriptGetSqlScriptsByWorkspace;
  /** Resource for '/sqlScripts/\{sqlScriptName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/sqlScripts/{sqlScriptName}",
    sqlScriptName: string
  ): SqlScriptCreateOrUpdateSqlScript;
  /** Resource for '/sqlScripts/\{sqlScriptName\}/rename' has methods for the following verbs: post */
  (
    path: "/sqlScripts/{sqlScriptName}/rename",
    sqlScriptName: string
  ): SqlScriptRenameSqlScript;
  /** Resource for '/triggers' has methods for the following verbs: get */
  (path: "/triggers"): TriggerGetTriggersByWorkspace;
  /** Resource for '/triggers/\{triggerName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/triggers/{triggerName}",
    triggerName: string
  ): TriggerCreateOrUpdateTrigger;
  /** Resource for '/triggers/\{triggerName\}/subscribeToEvents' has methods for the following verbs: post */
  (
    path: "/triggers/{triggerName}/subscribeToEvents",
    triggerName: string
  ): TriggerSubscribeTriggerToEvents;
  /** Resource for '/triggers/\{triggerName\}/getEventSubscriptionStatus' has methods for the following verbs: post */
  (
    path: "/triggers/{triggerName}/getEventSubscriptionStatus",
    triggerName: string
  ): TriggerGetEventSubscriptionStatus;
  /** Resource for '/triggers/\{triggerName\}/unsubscribeFromEvents' has methods for the following verbs: post */
  (
    path: "/triggers/{triggerName}/unsubscribeFromEvents",
    triggerName: string
  ): TriggerUnsubscribeTriggerFromEvents;
  /** Resource for '/triggers/\{triggerName\}/start' has methods for the following verbs: post */
  (
    path: "/triggers/{triggerName}/start",
    triggerName: string
  ): TriggerStartTrigger;
  /** Resource for '/triggers/\{triggerName\}/stop' has methods for the following verbs: post */
  (
    path: "/triggers/{triggerName}/stop",
    triggerName: string
  ): TriggerStopTrigger;
  /** Resource for '/triggers/\{triggerName\}/triggerRuns/\{runId\}/rerun' has methods for the following verbs: post */
  (
    path: "/triggers/{triggerName}/triggerRuns/{runId}/rerun",
    triggerName: string,
    runId: string
  ): TriggerRunRerunTriggerInstance;
  /** Resource for '/triggers/\{triggerName\}/triggerRuns/\{runId\}/cancel' has methods for the following verbs: post */
  (
    path: "/triggers/{triggerName}/triggerRuns/{runId}/cancel",
    triggerName: string,
    runId: string
  ): TriggerRunCancelTriggerInstance;
  /** Resource for '/queryTriggerRuns' has methods for the following verbs: post */
  (path: "/queryTriggerRuns"): TriggerRunQueryTriggerRunsByWorkspace;
  /** Resource for '/workspace' has methods for the following verbs: get */
  (path: "/workspace"): WorkspaceGet;
}

export type SynapseArtifactsClient = Client & {
  path: Routes;
  kqlScripts: KqlScriptsOperations;
  kqlScript: KqlScriptOperations;
  metastore: MetastoreOperations;
  sparkConfiguration: SparkConfigurationOperations;
  bigDataPools: BigDataPoolsOperations;
  dataFlow: DataFlowOperations;
  dataFlowDebugSession: DataFlowDebugSessionOperations;
  dataset: DatasetOperations;
  workspaceGitRepoManagement: WorkspaceGitRepoManagementOperations;
  integrationRuntimes: IntegrationRuntimesOperations;
  library: LibraryOperations;
  linkedService: LinkedServiceOperations;
  notebook: NotebookOperations;
  notebookOperationResult: NotebookOperationResultOperations;
  pipelineOperations: PipelineOperationsOperations;
  pipelineRun: PipelineRunOperations;
  sparkJobDefinition: SparkJobDefinitionOperations;
  sqlPools: SqlPoolsOperations;
  sqlScript: SqlScriptOperations;
  trigger: TriggerOperations;
  triggerRun: TriggerRunOperations;
  workspace: WorkspaceOperations;
};
