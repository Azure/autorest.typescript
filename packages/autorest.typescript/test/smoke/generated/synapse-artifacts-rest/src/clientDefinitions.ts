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
  WorkspaceGetParameters,
} from "./parameters";
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
  WorkspaceGitRepoManagementGetGitHubAccessToken200Response,
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
  LibraryCreateDefaultResponse,
  LibraryAppend201Response,
  LibraryAppendDefaultResponse,
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
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for KqlScripts operations */
export interface KqlScriptsOperations {
  /** Get all KQL scripts */
  getAll(
    options?: KqlScriptsGetAllParameters,
  ): StreamableMethod<
    KqlScriptsGetAll200Response | KqlScriptsGetAllDefaultResponse
  >;
}

/** Contains operations for KqlScript operations */
export interface KqlScriptOperations {
  /** Creates or updates a KQL Script */
  createOrUpdate(
    kqlScriptName: string,
    options: KqlScriptCreateOrUpdateParameters,
  ): StreamableMethod<
    | KqlScriptCreateOrUpdate200Response
    | KqlScriptCreateOrUpdate202Response
    | KqlScriptCreateOrUpdateDefaultResponse
  >;
  /** Get KQL script by name */
  getByName(
    kqlScriptName: string,
    options?: KqlScriptGetByNameParameters,
  ): StreamableMethod<
    KqlScriptGetByName200Response | KqlScriptGetByNameDefaultResponse
  >;
  /** Delete KQL script by name */
  deleteByName(
    kqlScriptName: string,
    options?: KqlScriptDeleteByNameParameters,
  ): StreamableMethod<
    | KqlScriptDeleteByName200Response
    | KqlScriptDeleteByName202Response
    | KqlScriptDeleteByName204Response
    | KqlScriptDeleteByNameDefaultResponse
  >;
  /** Rename KQL script */
  rename(
    kqlScriptName: string,
    options: KqlScriptRenameParameters,
  ): StreamableMethod<
    | KqlScriptRename200Response
    | KqlScriptRename202Response
    | KqlScriptRenameDefaultResponse
  >;
}

/** Contains operations for Metastore operations */
export interface MetastoreOperations {
  /** Register files in Syms */
  register(
    id: string,
    options: MetastoreRegisterParameters,
  ): StreamableMethod<
    MetastoreRegister201Response | MetastoreRegisterDefaultResponse
  >;
  /** Gets status of the database */
  getDatabaseOperations(
    id: string,
    options?: MetastoreGetDatabaseOperationsParameters,
  ): StreamableMethod<
    | MetastoreGetDatabaseOperations200Response
    | MetastoreGetDatabaseOperationsDefaultResponse
  >;
  /** Update files in Syms */
  update(
    id: string,
    options: MetastoreUpdateParameters,
  ): StreamableMethod<
    MetastoreUpdate201Response | MetastoreUpdateDefaultResponse
  >;
  /** Remove files in Syms */
  delete(
    id: string,
    options?: MetastoreDeleteParameters,
  ): StreamableMethod<
    MetastoreDelete204Response | MetastoreDeleteDefaultResponse
  >;
}

/** Contains operations for SparkConfiguration operations */
export interface SparkConfigurationOperations {
  /** Lists sparkconfigurations. */
  getSparkConfigurationsByWorkspace(
    options?: SparkConfigurationGetSparkConfigurationsByWorkspaceParameters,
  ): StreamableMethod<
    | SparkConfigurationGetSparkConfigurationsByWorkspace200Response
    | SparkConfigurationGetSparkConfigurationsByWorkspaceDefaultResponse
  >;
  /** Creates or updates a sparkconfiguration. */
  createOrUpdateSparkConfiguration(
    sparkConfigurationName: string,
    options: SparkConfigurationCreateOrUpdateSparkConfigurationParameters,
  ): StreamableMethod<
    | SparkConfigurationCreateOrUpdateSparkConfiguration200Response
    | SparkConfigurationCreateOrUpdateSparkConfiguration202Response
    | SparkConfigurationCreateOrUpdateSparkConfigurationDefaultResponse
  >;
  /** Gets a sparkConfiguration. */
  getSparkConfiguration(
    sparkConfigurationName: string,
    options?: SparkConfigurationGetSparkConfigurationParameters,
  ): StreamableMethod<
    | SparkConfigurationGetSparkConfiguration200Response
    | SparkConfigurationGetSparkConfiguration304Response
    | SparkConfigurationGetSparkConfigurationDefaultResponse
  >;
  /** Deletes a sparkConfiguration. */
  deleteSparkConfiguration(
    sparkConfigurationName: string,
    options?: SparkConfigurationDeleteSparkConfigurationParameters,
  ): StreamableMethod<
    | SparkConfigurationDeleteSparkConfiguration200Response
    | SparkConfigurationDeleteSparkConfiguration202Response
    | SparkConfigurationDeleteSparkConfiguration204Response
    | SparkConfigurationDeleteSparkConfigurationDefaultResponse
  >;
  /** Renames a sparkConfiguration. */
  renameSparkConfiguration(
    sparkConfigurationName: string,
    options: SparkConfigurationRenameSparkConfigurationParameters,
  ): StreamableMethod<
    | SparkConfigurationRenameSparkConfiguration200Response
    | SparkConfigurationRenameSparkConfiguration202Response
    | SparkConfigurationRenameSparkConfigurationDefaultResponse
  >;
}

/** Contains operations for BigDataPools operations */
export interface BigDataPoolsOperations {
  /** List Big Data Pools */
  list(
    options?: BigDataPoolsListParameters,
  ): StreamableMethod<
    BigDataPoolsList200Response | BigDataPoolsListDefaultResponse
  >;
  /** Get Big Data Pool */
  get(
    bigDataPoolName: string,
    options?: BigDataPoolsGetParameters,
  ): StreamableMethod<
    BigDataPoolsGet200Response | BigDataPoolsGetDefaultResponse
  >;
}

/** Contains operations for DataFlow operations */
export interface DataFlowOperations {
  /** Creates or updates a data flow. */
  createOrUpdateDataFlow(
    dataFlowName: string,
    options: DataFlowCreateOrUpdateDataFlowParameters,
  ): StreamableMethod<
    | DataFlowCreateOrUpdateDataFlow200Response
    | DataFlowCreateOrUpdateDataFlow202Response
    | DataFlowCreateOrUpdateDataFlowDefaultResponse
  >;
  /** Gets a data flow. */
  getDataFlow(
    dataFlowName: string,
    options?: DataFlowGetDataFlowParameters,
  ): StreamableMethod<
    DataFlowGetDataFlow200Response | DataFlowGetDataFlowDefaultResponse
  >;
  /** Deletes a data flow. */
  deleteDataFlow(
    dataFlowName: string,
    options?: DataFlowDeleteDataFlowParameters,
  ): StreamableMethod<
    | DataFlowDeleteDataFlow200Response
    | DataFlowDeleteDataFlow202Response
    | DataFlowDeleteDataFlow204Response
    | DataFlowDeleteDataFlowDefaultResponse
  >;
  /** Renames a dataflow. */
  renameDataFlow(
    dataFlowName: string,
    options: DataFlowRenameDataFlowParameters,
  ): StreamableMethod<
    | DataFlowRenameDataFlow200Response
    | DataFlowRenameDataFlow202Response
    | DataFlowRenameDataFlowDefaultResponse
  >;
  /** Lists data flows. */
  getDataFlowsByWorkspace(
    options?: DataFlowGetDataFlowsByWorkspaceParameters,
  ): StreamableMethod<
    | DataFlowGetDataFlowsByWorkspace200Response
    | DataFlowGetDataFlowsByWorkspaceDefaultResponse
  >;
}

/** Contains operations for DataFlowDebugSession operations */
export interface DataFlowDebugSessionOperations {
  /** Creates a data flow debug session. */
  createDataFlowDebugSession(
    options: DataFlowDebugSessionCreateDataFlowDebugSessionParameters,
  ): StreamableMethod<
    | DataFlowDebugSessionCreateDataFlowDebugSession200Response
    | DataFlowDebugSessionCreateDataFlowDebugSession202Response
    | DataFlowDebugSessionCreateDataFlowDebugSessionDefaultResponse
  >;
  /** Query all active data flow debug sessions. */
  queryDataFlowDebugSessionsByWorkspace(
    options?: DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceParameters,
  ): StreamableMethod<
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspace200Response
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceDefaultResponse
  >;
  /** Add a data flow into debug session. */
  addDataFlow(
    options: DataFlowDebugSessionAddDataFlowParameters,
  ): StreamableMethod<
    | DataFlowDebugSessionAddDataFlow200Response
    | DataFlowDebugSessionAddDataFlowDefaultResponse
  >;
  /** Deletes a data flow debug session. */
  deleteDataFlowDebugSession(
    options: DataFlowDebugSessionDeleteDataFlowDebugSessionParameters,
  ): StreamableMethod<
    | DataFlowDebugSessionDeleteDataFlowDebugSession200Response
    | DataFlowDebugSessionDeleteDataFlowDebugSessionDefaultResponse
  >;
  /** Execute a data flow debug command. */
  executeCommand(
    options: DataFlowDebugSessionExecuteCommandParameters,
  ): StreamableMethod<
    | DataFlowDebugSessionExecuteCommand200Response
    | DataFlowDebugSessionExecuteCommand202Response
    | DataFlowDebugSessionExecuteCommandDefaultResponse
  >;
}

/** Contains operations for Dataset operations */
export interface DatasetOperations {
  /** Lists datasets. */
  getDatasetsByWorkspace(
    options?: DatasetGetDatasetsByWorkspaceParameters,
  ): StreamableMethod<
    | DatasetGetDatasetsByWorkspace200Response
    | DatasetGetDatasetsByWorkspaceDefaultResponse
  >;
  /** Creates or updates a dataset. */
  createOrUpdateDataset(
    datasetName: string,
    options: DatasetCreateOrUpdateDatasetParameters,
  ): StreamableMethod<
    | DatasetCreateOrUpdateDataset200Response
    | DatasetCreateOrUpdateDataset202Response
    | DatasetCreateOrUpdateDatasetDefaultResponse
  >;
  /** Gets a dataset. */
  getDataset(
    datasetName: string,
    options?: DatasetGetDatasetParameters,
  ): StreamableMethod<
    | DatasetGetDataset200Response
    | DatasetGetDataset304Response
    | DatasetGetDatasetDefaultResponse
  >;
  /** Deletes a dataset. */
  deleteDataset(
    datasetName: string,
    options?: DatasetDeleteDatasetParameters,
  ): StreamableMethod<
    | DatasetDeleteDataset200Response
    | DatasetDeleteDataset202Response
    | DatasetDeleteDataset204Response
    | DatasetDeleteDatasetDefaultResponse
  >;
  /** Renames a dataset. */
  renameDataset(
    datasetName: string,
    options: DatasetRenameDatasetParameters,
  ): StreamableMethod<
    | DatasetRenameDataset200Response
    | DatasetRenameDataset202Response
    | DatasetRenameDatasetDefaultResponse
  >;
}

/** Contains operations for WorkspaceGitRepoManagement operations */
export interface WorkspaceGitRepoManagementOperations {
  /** Get the GitHub access token. */
  getGitHubAccessToken(
    options: WorkspaceGitRepoManagementGetGitHubAccessTokenParameters,
  ): StreamableMethod<WorkspaceGitRepoManagementGetGitHubAccessToken200Response>;
}

/** Contains operations for IntegrationRuntimes operations */
export interface IntegrationRuntimesOperations {
  /** List Integration Runtimes */
  list(
    options?: IntegrationRuntimesListParameters,
  ): StreamableMethod<
    IntegrationRuntimesList200Response | IntegrationRuntimesListDefaultResponse
  >;
  /** Get Integration Runtime */
  get(
    integrationRuntimeName: string,
    options?: IntegrationRuntimesGetParameters,
  ): StreamableMethod<
    IntegrationRuntimesGet200Response | IntegrationRuntimesGetDefaultResponse
  >;
}

/** Contains operations for Library operations */
export interface LibraryOperations {
  /** Lists Library. */
  list(
    options?: LibraryListParameters,
  ): StreamableMethod<LibraryList200Response | LibraryListDefaultResponse>;
  /** Flush Library */
  flush(
    libraryName: string,
    options?: LibraryFlushParameters,
  ): StreamableMethod<
    | LibraryFlush200Response
    | LibraryFlush202Response
    | LibraryFlushDefaultResponse
  >;
  /** Get Operation result for Library */
  getOperationResult(
    operationId: string,
    options?: LibraryGetOperationResultParameters,
  ): StreamableMethod<
    | LibraryGetOperationResult200Response
    | LibraryGetOperationResult202Response
    | LibraryGetOperationResultDefaultResponse
  >;
  /** Delete Library */
  delete(
    libraryName: string,
    options?: LibraryDeleteParameters,
  ): StreamableMethod<
    | LibraryDelete200Response
    | LibraryDelete202Response
    | LibraryDelete409Response
    | LibraryDeleteDefaultResponse
  >;
  /** Get Library */
  get(
    libraryName: string,
    options?: LibraryGetParameters,
  ): StreamableMethod<
    LibraryGet200Response | LibraryGet304Response | LibraryGetDefaultResponse
  >;
  /** Creates a library with the library name. */
  create(
    libraryName: string,
    options?: LibraryCreateParameters,
  ): StreamableMethod<
    | LibraryCreate200Response
    | LibraryCreate202Response
    | LibraryCreateDefaultResponse
  >;
  /** Append the content to the library resource created using the create operation. The maximum content size is 4MiB. Content larger than 4MiB must be appended in 4MiB chunks */
  append(
    libraryName: string,
    options: LibraryAppendParameters,
  ): StreamableMethod<LibraryAppend201Response | LibraryAppendDefaultResponse>;
}

/** Contains operations for LinkedService operations */
export interface LinkedServiceOperations {
  /** Lists linked services. */
  getLinkedServicesByWorkspace(
    options?: LinkedServiceGetLinkedServicesByWorkspaceParameters,
  ): StreamableMethod<
    | LinkedServiceGetLinkedServicesByWorkspace200Response
    | LinkedServiceGetLinkedServicesByWorkspaceDefaultResponse
  >;
  /** Creates or updates a linked service. */
  createOrUpdateLinkedService(
    linkedServiceName: string,
    options: LinkedServiceCreateOrUpdateLinkedServiceParameters,
  ): StreamableMethod<
    | LinkedServiceCreateOrUpdateLinkedService200Response
    | LinkedServiceCreateOrUpdateLinkedService202Response
    | LinkedServiceCreateOrUpdateLinkedServiceDefaultResponse
  >;
  /** Gets a linked service. */
  getLinkedService(
    linkedServiceName: string,
    options?: LinkedServiceGetLinkedServiceParameters,
  ): StreamableMethod<
    | LinkedServiceGetLinkedService200Response
    | LinkedServiceGetLinkedService304Response
    | LinkedServiceGetLinkedServiceDefaultResponse
  >;
  /** Deletes a linked service. */
  deleteLinkedService(
    linkedServiceName: string,
    options?: LinkedServiceDeleteLinkedServiceParameters,
  ): StreamableMethod<
    | LinkedServiceDeleteLinkedService200Response
    | LinkedServiceDeleteLinkedService202Response
    | LinkedServiceDeleteLinkedService204Response
    | LinkedServiceDeleteLinkedServiceDefaultResponse
  >;
  /** Renames a linked service. */
  renameLinkedService(
    linkedServiceName: string,
    options: LinkedServiceRenameLinkedServiceParameters,
  ): StreamableMethod<
    | LinkedServiceRenameLinkedService200Response
    | LinkedServiceRenameLinkedService202Response
    | LinkedServiceRenameLinkedServiceDefaultResponse
  >;
}

/** Contains operations for Notebook operations */
export interface NotebookOperations {
  /** Lists Notebooks. */
  getNotebooksByWorkspace(
    options?: NotebookGetNotebooksByWorkspaceParameters,
  ): StreamableMethod<
    | NotebookGetNotebooksByWorkspace200Response
    | NotebookGetNotebooksByWorkspaceDefaultResponse
  >;
  /** Lists a summary of Notebooks. */
  getNotebookSummaryByWorkSpace(
    options?: NotebookGetNotebookSummaryByWorkSpaceParameters,
  ): StreamableMethod<
    | NotebookGetNotebookSummaryByWorkSpace200Response
    | NotebookGetNotebookSummaryByWorkSpaceDefaultResponse
  >;
  /** Creates or updates a Note Book. */
  createOrUpdateNotebook(
    notebookName: string,
    options: NotebookCreateOrUpdateNotebookParameters,
  ): StreamableMethod<
    | NotebookCreateOrUpdateNotebook200Response
    | NotebookCreateOrUpdateNotebook202Response
    | NotebookCreateOrUpdateNotebookDefaultResponse
  >;
  /** Gets a Note Book. */
  getNotebook(
    notebookName: string,
    options?: NotebookGetNotebookParameters,
  ): StreamableMethod<
    | NotebookGetNotebook200Response
    | NotebookGetNotebook304Response
    | NotebookGetNotebookDefaultResponse
  >;
  /** Deletes a Note book. */
  deleteNotebook(
    notebookName: string,
    options?: NotebookDeleteNotebookParameters,
  ): StreamableMethod<
    | NotebookDeleteNotebook200Response
    | NotebookDeleteNotebook202Response
    | NotebookDeleteNotebook204Response
    | NotebookDeleteNotebookDefaultResponse
  >;
  /** Renames a notebook. */
  renameNotebook(
    notebookName: string,
    options: NotebookRenameNotebookParameters,
  ): StreamableMethod<
    | NotebookRenameNotebook200Response
    | NotebookRenameNotebook202Response
    | NotebookRenameNotebookDefaultResponse
  >;
}

/** Contains operations for NotebookOperationResult operations */
export interface NotebookOperationResultOperations {
  /** Get notebook operation result */
  get(
    operationId: string,
    options?: NotebookOperationResultGetParameters,
  ): StreamableMethod<
    | NotebookOperationResultGet200Response
    | NotebookOperationResultGet201Response
    | NotebookOperationResultGet202Response
    | NotebookOperationResultGet204Response
    | NotebookOperationResultGetDefaultResponse
  >;
}

/** Contains operations for Pipeline operations */
export interface PipelineOperations {
  /** Lists pipelines. */
  getPipelinesByWorkspace(
    options?: PipelineGetPipelinesByWorkspaceParameters,
  ): StreamableMethod<
    | PipelineGetPipelinesByWorkspace200Response
    | PipelineGetPipelinesByWorkspaceDefaultResponse
  >;
  /** Creates or updates a pipeline. */
  createOrUpdatePipeline(
    pipelineName: string,
    options: PipelineCreateOrUpdatePipelineParameters,
  ): StreamableMethod<
    | PipelineCreateOrUpdatePipeline200Response
    | PipelineCreateOrUpdatePipeline202Response
    | PipelineCreateOrUpdatePipelineDefaultResponse
  >;
  /** Gets a pipeline. */
  getPipeline(
    pipelineName: string,
    options?: PipelineGetPipelineParameters,
  ): StreamableMethod<
    | PipelineGetPipeline200Response
    | PipelineGetPipeline304Response
    | PipelineGetPipelineDefaultResponse
  >;
  /** Deletes a pipeline. */
  deletePipeline(
    pipelineName: string,
    options?: PipelineDeletePipelineParameters,
  ): StreamableMethod<
    | PipelineDeletePipeline200Response
    | PipelineDeletePipeline202Response
    | PipelineDeletePipeline204Response
    | PipelineDeletePipelineDefaultResponse
  >;
  /** Renames a pipeline. */
  renamePipeline(
    pipelineName: string,
    options: PipelineRenamePipelineParameters,
  ): StreamableMethod<
    | PipelineRenamePipeline200Response
    | PipelineRenamePipeline202Response
    | PipelineRenamePipelineDefaultResponse
  >;
  /** Creates a run of a pipeline. */
  createPipelineRun(
    pipelineName: string,
    options?: PipelineCreatePipelineRunParameters,
  ): StreamableMethod<
    | PipelineCreatePipelineRun202Response
    | PipelineCreatePipelineRunDefaultResponse
  >;
}

/** Contains operations for PipelineRun operations */
export interface PipelineRunOperations {
  /** Query pipeline runs in the workspace based on input filter conditions. */
  queryPipelineRunsByWorkspace(
    options: PipelineRunQueryPipelineRunsByWorkspaceParameters,
  ): StreamableMethod<
    | PipelineRunQueryPipelineRunsByWorkspace200Response
    | PipelineRunQueryPipelineRunsByWorkspaceDefaultResponse
  >;
  /** Get a pipeline run by its run ID. */
  getPipelineRun(
    runId: string,
    options?: PipelineRunGetPipelineRunParameters,
  ): StreamableMethod<
    | PipelineRunGetPipelineRun200Response
    | PipelineRunGetPipelineRunDefaultResponse
  >;
  /** Query activity runs based on input filter conditions. */
  queryActivityRuns(
    pipelineName: string,
    runId: string,
    options: PipelineRunQueryActivityRunsParameters,
  ): StreamableMethod<
    | PipelineRunQueryActivityRuns200Response
    | PipelineRunQueryActivityRunsDefaultResponse
  >;
  /** Cancel a pipeline run by its run ID. */
  cancelPipelineRun(
    runId: string,
    options?: PipelineRunCancelPipelineRunParameters,
  ): StreamableMethod<
    | PipelineRunCancelPipelineRun200Response
    | PipelineRunCancelPipelineRunDefaultResponse
  >;
}

/** Contains operations for SparkJobDefinition operations */
export interface SparkJobDefinitionOperations {
  /** Lists spark job definitions. */
  getSparkJobDefinitionsByWorkspace(
    options?: SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceParameters,
  ): StreamableMethod<
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspace200Response
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceDefaultResponse
  >;
  /** Creates or updates a Spark Job Definition. */
  createOrUpdateSparkJobDefinition(
    sparkJobDefinitionName: string,
    options: SparkJobDefinitionCreateOrUpdateSparkJobDefinitionParameters,
  ): StreamableMethod<
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition200Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition202Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinitionDefaultResponse
  >;
  /** Gets a Spark Job Definition. */
  getSparkJobDefinition(
    sparkJobDefinitionName: string,
    options?: SparkJobDefinitionGetSparkJobDefinitionParameters,
  ): StreamableMethod<
    | SparkJobDefinitionGetSparkJobDefinition200Response
    | SparkJobDefinitionGetSparkJobDefinition304Response
    | SparkJobDefinitionGetSparkJobDefinitionDefaultResponse
  >;
  /** Deletes a Spark Job Definition. */
  deleteSparkJobDefinition(
    sparkJobDefinitionName: string,
    options?: SparkJobDefinitionDeleteSparkJobDefinitionParameters,
  ): StreamableMethod<
    | SparkJobDefinitionDeleteSparkJobDefinition200Response
    | SparkJobDefinitionDeleteSparkJobDefinition202Response
    | SparkJobDefinitionDeleteSparkJobDefinition204Response
    | SparkJobDefinitionDeleteSparkJobDefinitionDefaultResponse
  >;
  /** Executes the spark job definition. */
  executeSparkJobDefinition(
    sparkJobDefinitionName: string,
    options?: SparkJobDefinitionExecuteSparkJobDefinitionParameters,
  ): StreamableMethod<
    | SparkJobDefinitionExecuteSparkJobDefinition200Response
    | SparkJobDefinitionExecuteSparkJobDefinition202Response
    | SparkJobDefinitionExecuteSparkJobDefinitionDefaultResponse
  >;
  /** Renames a sparkJobDefinition. */
  renameSparkJobDefinition(
    sparkJobDefinitionName: string,
    options: SparkJobDefinitionRenameSparkJobDefinitionParameters,
  ): StreamableMethod<
    | SparkJobDefinitionRenameSparkJobDefinition200Response
    | SparkJobDefinitionRenameSparkJobDefinition202Response
    | SparkJobDefinitionRenameSparkJobDefinitionDefaultResponse
  >;
  /** Debug the spark job definition. */
  debugSparkJobDefinition(
    options: SparkJobDefinitionDebugSparkJobDefinitionParameters,
  ): StreamableMethod<
    | SparkJobDefinitionDebugSparkJobDefinition200Response
    | SparkJobDefinitionDebugSparkJobDefinition202Response
    | SparkJobDefinitionDebugSparkJobDefinitionDefaultResponse
  >;
}

/** Contains operations for SqlPools operations */
export interface SqlPoolsOperations {
  /** List Sql Pools */
  list(
    options?: SqlPoolsListParameters,
  ): StreamableMethod<SqlPoolsList200Response | SqlPoolsListDefaultResponse>;
  /** Get Sql Pool */
  get(
    sqlPoolName: string,
    options?: SqlPoolsGetParameters,
  ): StreamableMethod<SqlPoolsGet200Response | SqlPoolsGetDefaultResponse>;
}

/** Contains operations for SqlScript operations */
export interface SqlScriptOperations {
  /** Lists sql scripts. */
  getSqlScriptsByWorkspace(
    options?: SqlScriptGetSqlScriptsByWorkspaceParameters,
  ): StreamableMethod<
    | SqlScriptGetSqlScriptsByWorkspace200Response
    | SqlScriptGetSqlScriptsByWorkspaceDefaultResponse
  >;
  /** Creates or updates a Sql Script. */
  createOrUpdateSqlScript(
    sqlScriptName: string,
    options: SqlScriptCreateOrUpdateSqlScriptParameters,
  ): StreamableMethod<
    | SqlScriptCreateOrUpdateSqlScript200Response
    | SqlScriptCreateOrUpdateSqlScript202Response
    | SqlScriptCreateOrUpdateSqlScriptDefaultResponse
  >;
  /** Gets a sql script. */
  getSqlScript(
    sqlScriptName: string,
    options?: SqlScriptGetSqlScriptParameters,
  ): StreamableMethod<
    | SqlScriptGetSqlScript200Response
    | SqlScriptGetSqlScript304Response
    | SqlScriptGetSqlScriptDefaultResponse
  >;
  /** Deletes a Sql Script. */
  deleteSqlScript(
    sqlScriptName: string,
    options?: SqlScriptDeleteSqlScriptParameters,
  ): StreamableMethod<
    | SqlScriptDeleteSqlScript200Response
    | SqlScriptDeleteSqlScript202Response
    | SqlScriptDeleteSqlScript204Response
    | SqlScriptDeleteSqlScriptDefaultResponse
  >;
  /** Renames a sqlScript. */
  renameSqlScript(
    sqlScriptName: string,
    options: SqlScriptRenameSqlScriptParameters,
  ): StreamableMethod<
    | SqlScriptRenameSqlScript200Response
    | SqlScriptRenameSqlScript202Response
    | SqlScriptRenameSqlScriptDefaultResponse
  >;
}

/** Contains operations for Trigger operations */
export interface TriggerOperations {
  /** Lists triggers. */
  getTriggersByWorkspace(
    options?: TriggerGetTriggersByWorkspaceParameters,
  ): StreamableMethod<
    | TriggerGetTriggersByWorkspace200Response
    | TriggerGetTriggersByWorkspaceDefaultResponse
  >;
  /** Creates or updates a trigger. */
  createOrUpdateTrigger(
    triggerName: string,
    options: TriggerCreateOrUpdateTriggerParameters,
  ): StreamableMethod<
    | TriggerCreateOrUpdateTrigger200Response
    | TriggerCreateOrUpdateTrigger202Response
    | TriggerCreateOrUpdateTriggerDefaultResponse
  >;
  /** Gets a trigger. */
  getTrigger(
    triggerName: string,
    options?: TriggerGetTriggerParameters,
  ): StreamableMethod<
    | TriggerGetTrigger200Response
    | TriggerGetTrigger304Response
    | TriggerGetTriggerDefaultResponse
  >;
  /** Deletes a trigger. */
  deleteTrigger(
    triggerName: string,
    options?: TriggerDeleteTriggerParameters,
  ): StreamableMethod<
    | TriggerDeleteTrigger200Response
    | TriggerDeleteTrigger202Response
    | TriggerDeleteTrigger204Response
    | TriggerDeleteTriggerDefaultResponse
  >;
  /** Subscribe event trigger to events. */
  subscribeTriggerToEvents(
    triggerName: string,
    options?: TriggerSubscribeTriggerToEventsParameters,
  ): StreamableMethod<
    | TriggerSubscribeTriggerToEvents200Response
    | TriggerSubscribeTriggerToEvents202Response
    | TriggerSubscribeTriggerToEventsDefaultResponse
  >;
  /** Get a trigger's event subscription status. */
  getEventSubscriptionStatus(
    triggerName: string,
    options?: TriggerGetEventSubscriptionStatusParameters,
  ): StreamableMethod<
    | TriggerGetEventSubscriptionStatus200Response
    | TriggerGetEventSubscriptionStatusDefaultResponse
  >;
  /** Unsubscribe event trigger from events. */
  unsubscribeTriggerFromEvents(
    triggerName: string,
    options?: TriggerUnsubscribeTriggerFromEventsParameters,
  ): StreamableMethod<
    | TriggerUnsubscribeTriggerFromEvents200Response
    | TriggerUnsubscribeTriggerFromEvents202Response
    | TriggerUnsubscribeTriggerFromEventsDefaultResponse
  >;
  /** Starts a trigger. */
  startTrigger(
    triggerName: string,
    options?: TriggerStartTriggerParameters,
  ): StreamableMethod<
    TriggerStartTrigger200Response | TriggerStartTriggerDefaultResponse
  >;
  /** Stops a trigger. */
  stopTrigger(
    triggerName: string,
    options?: TriggerStopTriggerParameters,
  ): StreamableMethod<
    TriggerStopTrigger200Response | TriggerStopTriggerDefaultResponse
  >;
}

/** Contains operations for TriggerRun operations */
export interface TriggerRunOperations {
  /** Rerun single trigger instance by runId. */
  rerunTriggerInstance(
    triggerName: string,
    runId: string,
    options?: TriggerRunRerunTriggerInstanceParameters,
  ): StreamableMethod<
    | TriggerRunRerunTriggerInstance200Response
    | TriggerRunRerunTriggerInstanceDefaultResponse
  >;
  /** Cancel single trigger instance by runId. */
  cancelTriggerInstance(
    triggerName: string,
    runId: string,
    options?: TriggerRunCancelTriggerInstanceParameters,
  ): StreamableMethod<
    | TriggerRunCancelTriggerInstance200Response
    | TriggerRunCancelTriggerInstanceDefaultResponse
  >;
  /** Query trigger runs. */
  queryTriggerRunsByWorkspace(
    options: TriggerRunQueryTriggerRunsByWorkspaceParameters,
  ): StreamableMethod<
    | TriggerRunQueryTriggerRunsByWorkspace200Response
    | TriggerRunQueryTriggerRunsByWorkspaceDefaultResponse
  >;
}

/** Contains operations for Workspace operations */
export interface WorkspaceOperations {
  /** Get Workspace */
  get(
    options?: WorkspaceGetParameters,
  ): StreamableMethod<WorkspaceGet200Response | WorkspaceGetDefaultResponse>;
}

export interface KqlScriptsGetAll {
  /** Get all KQL scripts */
  get(
    options?: KqlScriptsGetAllParameters,
  ): StreamableMethod<
    KqlScriptsGetAll200Response | KqlScriptsGetAllDefaultResponse
  >;
}

export interface KqlScriptCreateOrUpdate {
  /** Creates or updates a KQL Script */
  put(
    options: KqlScriptCreateOrUpdateParameters,
  ): StreamableMethod<
    | KqlScriptCreateOrUpdate200Response
    | KqlScriptCreateOrUpdate202Response
    | KqlScriptCreateOrUpdateDefaultResponse
  >;
  /** Get KQL script by name */
  get(
    options?: KqlScriptGetByNameParameters,
  ): StreamableMethod<
    KqlScriptGetByName200Response | KqlScriptGetByNameDefaultResponse
  >;
  /** Delete KQL script by name */
  delete(
    options?: KqlScriptDeleteByNameParameters,
  ): StreamableMethod<
    | KqlScriptDeleteByName200Response
    | KqlScriptDeleteByName202Response
    | KqlScriptDeleteByName204Response
    | KqlScriptDeleteByNameDefaultResponse
  >;
}

export interface KqlScriptRename {
  /** Rename KQL script */
  post(
    options: KqlScriptRenameParameters,
  ): StreamableMethod<
    | KqlScriptRename200Response
    | KqlScriptRename202Response
    | KqlScriptRenameDefaultResponse
  >;
}

export interface MetastoreRegister {
  /** Register files in Syms */
  put(
    options: MetastoreRegisterParameters,
  ): StreamableMethod<
    MetastoreRegister201Response | MetastoreRegisterDefaultResponse
  >;
  /** Gets status of the database */
  get(
    options?: MetastoreGetDatabaseOperationsParameters,
  ): StreamableMethod<
    | MetastoreGetDatabaseOperations200Response
    | MetastoreGetDatabaseOperationsDefaultResponse
  >;
}

export interface MetastoreUpdate {
  /** Update files in Syms */
  put(
    options: MetastoreUpdateParameters,
  ): StreamableMethod<
    MetastoreUpdate201Response | MetastoreUpdateDefaultResponse
  >;
}

export interface MetastoreDelete {
  /** Remove files in Syms */
  delete(
    options?: MetastoreDeleteParameters,
  ): StreamableMethod<
    MetastoreDelete204Response | MetastoreDeleteDefaultResponse
  >;
}

export interface SparkConfigurationGetSparkConfigurationsByWorkspace {
  /** Lists sparkconfigurations. */
  get(
    options?: SparkConfigurationGetSparkConfigurationsByWorkspaceParameters,
  ): StreamableMethod<
    | SparkConfigurationGetSparkConfigurationsByWorkspace200Response
    | SparkConfigurationGetSparkConfigurationsByWorkspaceDefaultResponse
  >;
}

export interface SparkConfigurationCreateOrUpdateSparkConfiguration {
  /** Creates or updates a sparkconfiguration. */
  put(
    options: SparkConfigurationCreateOrUpdateSparkConfigurationParameters,
  ): StreamableMethod<
    | SparkConfigurationCreateOrUpdateSparkConfiguration200Response
    | SparkConfigurationCreateOrUpdateSparkConfiguration202Response
    | SparkConfigurationCreateOrUpdateSparkConfigurationDefaultResponse
  >;
  /** Gets a sparkConfiguration. */
  get(
    options?: SparkConfigurationGetSparkConfigurationParameters,
  ): StreamableMethod<
    | SparkConfigurationGetSparkConfiguration200Response
    | SparkConfigurationGetSparkConfiguration304Response
    | SparkConfigurationGetSparkConfigurationDefaultResponse
  >;
  /** Deletes a sparkConfiguration. */
  delete(
    options?: SparkConfigurationDeleteSparkConfigurationParameters,
  ): StreamableMethod<
    | SparkConfigurationDeleteSparkConfiguration200Response
    | SparkConfigurationDeleteSparkConfiguration202Response
    | SparkConfigurationDeleteSparkConfiguration204Response
    | SparkConfigurationDeleteSparkConfigurationDefaultResponse
  >;
}

export interface SparkConfigurationRenameSparkConfiguration {
  /** Renames a sparkConfiguration. */
  post(
    options: SparkConfigurationRenameSparkConfigurationParameters,
  ): StreamableMethod<
    | SparkConfigurationRenameSparkConfiguration200Response
    | SparkConfigurationRenameSparkConfiguration202Response
    | SparkConfigurationRenameSparkConfigurationDefaultResponse
  >;
}

export interface BigDataPoolsList {
  /** List Big Data Pools */
  get(
    options?: BigDataPoolsListParameters,
  ): StreamableMethod<
    BigDataPoolsList200Response | BigDataPoolsListDefaultResponse
  >;
}

export interface BigDataPoolsGet {
  /** Get Big Data Pool */
  get(
    options?: BigDataPoolsGetParameters,
  ): StreamableMethod<
    BigDataPoolsGet200Response | BigDataPoolsGetDefaultResponse
  >;
}

export interface DataFlowCreateOrUpdateDataFlow {
  /** Creates or updates a data flow. */
  put(
    options: DataFlowCreateOrUpdateDataFlowParameters,
  ): StreamableMethod<
    | DataFlowCreateOrUpdateDataFlow200Response
    | DataFlowCreateOrUpdateDataFlow202Response
    | DataFlowCreateOrUpdateDataFlowDefaultResponse
  >;
  /** Gets a data flow. */
  get(
    options?: DataFlowGetDataFlowParameters,
  ): StreamableMethod<
    DataFlowGetDataFlow200Response | DataFlowGetDataFlowDefaultResponse
  >;
  /** Deletes a data flow. */
  delete(
    options?: DataFlowDeleteDataFlowParameters,
  ): StreamableMethod<
    | DataFlowDeleteDataFlow200Response
    | DataFlowDeleteDataFlow202Response
    | DataFlowDeleteDataFlow204Response
    | DataFlowDeleteDataFlowDefaultResponse
  >;
}

export interface DataFlowRenameDataFlow {
  /** Renames a dataflow. */
  post(
    options: DataFlowRenameDataFlowParameters,
  ): StreamableMethod<
    | DataFlowRenameDataFlow200Response
    | DataFlowRenameDataFlow202Response
    | DataFlowRenameDataFlowDefaultResponse
  >;
}

export interface DataFlowGetDataFlowsByWorkspace {
  /** Lists data flows. */
  get(
    options?: DataFlowGetDataFlowsByWorkspaceParameters,
  ): StreamableMethod<
    | DataFlowGetDataFlowsByWorkspace200Response
    | DataFlowGetDataFlowsByWorkspaceDefaultResponse
  >;
}

export interface DataFlowDebugSessionCreateDataFlowDebugSession {
  /** Creates a data flow debug session. */
  post(
    options: DataFlowDebugSessionCreateDataFlowDebugSessionParameters,
  ): StreamableMethod<
    | DataFlowDebugSessionCreateDataFlowDebugSession200Response
    | DataFlowDebugSessionCreateDataFlowDebugSession202Response
    | DataFlowDebugSessionCreateDataFlowDebugSessionDefaultResponse
  >;
}

export interface DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspace {
  /** Query all active data flow debug sessions. */
  post(
    options?: DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceParameters,
  ): StreamableMethod<
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspace200Response
    | DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceDefaultResponse
  >;
}

export interface DataFlowDebugSessionAddDataFlow {
  /** Add a data flow into debug session. */
  post(
    options: DataFlowDebugSessionAddDataFlowParameters,
  ): StreamableMethod<
    | DataFlowDebugSessionAddDataFlow200Response
    | DataFlowDebugSessionAddDataFlowDefaultResponse
  >;
}

export interface DataFlowDebugSessionDeleteDataFlowDebugSession {
  /** Deletes a data flow debug session. */
  post(
    options: DataFlowDebugSessionDeleteDataFlowDebugSessionParameters,
  ): StreamableMethod<
    | DataFlowDebugSessionDeleteDataFlowDebugSession200Response
    | DataFlowDebugSessionDeleteDataFlowDebugSessionDefaultResponse
  >;
}

export interface DataFlowDebugSessionExecuteCommand {
  /** Execute a data flow debug command. */
  post(
    options: DataFlowDebugSessionExecuteCommandParameters,
  ): StreamableMethod<
    | DataFlowDebugSessionExecuteCommand200Response
    | DataFlowDebugSessionExecuteCommand202Response
    | DataFlowDebugSessionExecuteCommandDefaultResponse
  >;
}

export interface DatasetGetDatasetsByWorkspace {
  /** Lists datasets. */
  get(
    options?: DatasetGetDatasetsByWorkspaceParameters,
  ): StreamableMethod<
    | DatasetGetDatasetsByWorkspace200Response
    | DatasetGetDatasetsByWorkspaceDefaultResponse
  >;
}

export interface DatasetCreateOrUpdateDataset {
  /** Creates or updates a dataset. */
  put(
    options: DatasetCreateOrUpdateDatasetParameters,
  ): StreamableMethod<
    | DatasetCreateOrUpdateDataset200Response
    | DatasetCreateOrUpdateDataset202Response
    | DatasetCreateOrUpdateDatasetDefaultResponse
  >;
  /** Gets a dataset. */
  get(
    options?: DatasetGetDatasetParameters,
  ): StreamableMethod<
    | DatasetGetDataset200Response
    | DatasetGetDataset304Response
    | DatasetGetDatasetDefaultResponse
  >;
  /** Deletes a dataset. */
  delete(
    options?: DatasetDeleteDatasetParameters,
  ): StreamableMethod<
    | DatasetDeleteDataset200Response
    | DatasetDeleteDataset202Response
    | DatasetDeleteDataset204Response
    | DatasetDeleteDatasetDefaultResponse
  >;
}

export interface DatasetRenameDataset {
  /** Renames a dataset. */
  post(
    options: DatasetRenameDatasetParameters,
  ): StreamableMethod<
    | DatasetRenameDataset200Response
    | DatasetRenameDataset202Response
    | DatasetRenameDatasetDefaultResponse
  >;
}

export interface WorkspaceGitRepoManagementGetGitHubAccessToken {
  /** Get the GitHub access token. */
  post(
    options: WorkspaceGitRepoManagementGetGitHubAccessTokenParameters,
  ): StreamableMethod<WorkspaceGitRepoManagementGetGitHubAccessToken200Response>;
}

export interface IntegrationRuntimesList {
  /** List Integration Runtimes */
  get(
    options?: IntegrationRuntimesListParameters,
  ): StreamableMethod<
    IntegrationRuntimesList200Response | IntegrationRuntimesListDefaultResponse
  >;
}

export interface IntegrationRuntimesGet {
  /** Get Integration Runtime */
  get(
    options?: IntegrationRuntimesGetParameters,
  ): StreamableMethod<
    IntegrationRuntimesGet200Response | IntegrationRuntimesGetDefaultResponse
  >;
}

export interface LibraryList {
  /** Lists Library. */
  get(
    options?: LibraryListParameters,
  ): StreamableMethod<LibraryList200Response | LibraryListDefaultResponse>;
}

export interface LibraryFlush {
  /** Flush Library */
  post(
    options?: LibraryFlushParameters,
  ): StreamableMethod<
    | LibraryFlush200Response
    | LibraryFlush202Response
    | LibraryFlushDefaultResponse
  >;
}

export interface LibraryGetOperationResult {
  /** Get Operation result for Library */
  get(
    options?: LibraryGetOperationResultParameters,
  ): StreamableMethod<
    | LibraryGetOperationResult200Response
    | LibraryGetOperationResult202Response
    | LibraryGetOperationResultDefaultResponse
  >;
}

export interface LibraryDelete {
  /** Delete Library */
  delete(
    options?: LibraryDeleteParameters,
  ): StreamableMethod<
    | LibraryDelete200Response
    | LibraryDelete202Response
    | LibraryDelete409Response
    | LibraryDeleteDefaultResponse
  >;
  /** Get Library */
  get(
    options?: LibraryGetParameters,
  ): StreamableMethod<
    LibraryGet200Response | LibraryGet304Response | LibraryGetDefaultResponse
  >;
  /** Creates a library with the library name. */
  put(
    options?: LibraryCreateParameters,
  ): StreamableMethod<
    | LibraryCreate200Response
    | LibraryCreate202Response
    | LibraryCreateDefaultResponse
  >;
  /** Append the content to the library resource created using the create operation. The maximum content size is 4MiB. Content larger than 4MiB must be appended in 4MiB chunks */
  put(
    options: LibraryAppendParameters,
  ): StreamableMethod<LibraryAppend201Response | LibraryAppendDefaultResponse>;
}

export interface LinkedServiceGetLinkedServicesByWorkspace {
  /** Lists linked services. */
  get(
    options?: LinkedServiceGetLinkedServicesByWorkspaceParameters,
  ): StreamableMethod<
    | LinkedServiceGetLinkedServicesByWorkspace200Response
    | LinkedServiceGetLinkedServicesByWorkspaceDefaultResponse
  >;
}

export interface LinkedServiceCreateOrUpdateLinkedService {
  /** Creates or updates a linked service. */
  put(
    options: LinkedServiceCreateOrUpdateLinkedServiceParameters,
  ): StreamableMethod<
    | LinkedServiceCreateOrUpdateLinkedService200Response
    | LinkedServiceCreateOrUpdateLinkedService202Response
    | LinkedServiceCreateOrUpdateLinkedServiceDefaultResponse
  >;
  /** Gets a linked service. */
  get(
    options?: LinkedServiceGetLinkedServiceParameters,
  ): StreamableMethod<
    | LinkedServiceGetLinkedService200Response
    | LinkedServiceGetLinkedService304Response
    | LinkedServiceGetLinkedServiceDefaultResponse
  >;
  /** Deletes a linked service. */
  delete(
    options?: LinkedServiceDeleteLinkedServiceParameters,
  ): StreamableMethod<
    | LinkedServiceDeleteLinkedService200Response
    | LinkedServiceDeleteLinkedService202Response
    | LinkedServiceDeleteLinkedService204Response
    | LinkedServiceDeleteLinkedServiceDefaultResponse
  >;
}

export interface LinkedServiceRenameLinkedService {
  /** Renames a linked service. */
  post(
    options: LinkedServiceRenameLinkedServiceParameters,
  ): StreamableMethod<
    | LinkedServiceRenameLinkedService200Response
    | LinkedServiceRenameLinkedService202Response
    | LinkedServiceRenameLinkedServiceDefaultResponse
  >;
}

export interface NotebookGetNotebooksByWorkspace {
  /** Lists Notebooks. */
  get(
    options?: NotebookGetNotebooksByWorkspaceParameters,
  ): StreamableMethod<
    | NotebookGetNotebooksByWorkspace200Response
    | NotebookGetNotebooksByWorkspaceDefaultResponse
  >;
}

export interface NotebookGetNotebookSummaryByWorkSpace {
  /** Lists a summary of Notebooks. */
  get(
    options?: NotebookGetNotebookSummaryByWorkSpaceParameters,
  ): StreamableMethod<
    | NotebookGetNotebookSummaryByWorkSpace200Response
    | NotebookGetNotebookSummaryByWorkSpaceDefaultResponse
  >;
}

export interface NotebookCreateOrUpdateNotebook {
  /** Creates or updates a Note Book. */
  put(
    options: NotebookCreateOrUpdateNotebookParameters,
  ): StreamableMethod<
    | NotebookCreateOrUpdateNotebook200Response
    | NotebookCreateOrUpdateNotebook202Response
    | NotebookCreateOrUpdateNotebookDefaultResponse
  >;
  /** Gets a Note Book. */
  get(
    options?: NotebookGetNotebookParameters,
  ): StreamableMethod<
    | NotebookGetNotebook200Response
    | NotebookGetNotebook304Response
    | NotebookGetNotebookDefaultResponse
  >;
  /** Deletes a Note book. */
  delete(
    options?: NotebookDeleteNotebookParameters,
  ): StreamableMethod<
    | NotebookDeleteNotebook200Response
    | NotebookDeleteNotebook202Response
    | NotebookDeleteNotebook204Response
    | NotebookDeleteNotebookDefaultResponse
  >;
}

export interface NotebookRenameNotebook {
  /** Renames a notebook. */
  post(
    options: NotebookRenameNotebookParameters,
  ): StreamableMethod<
    | NotebookRenameNotebook200Response
    | NotebookRenameNotebook202Response
    | NotebookRenameNotebookDefaultResponse
  >;
}

export interface NotebookOperationResultGet {
  /** Get notebook operation result */
  get(
    options?: NotebookOperationResultGetParameters,
  ): StreamableMethod<
    | NotebookOperationResultGet200Response
    | NotebookOperationResultGet201Response
    | NotebookOperationResultGet202Response
    | NotebookOperationResultGet204Response
    | NotebookOperationResultGetDefaultResponse
  >;
}

export interface PipelineGetPipelinesByWorkspace {
  /** Lists pipelines. */
  get(
    options?: PipelineGetPipelinesByWorkspaceParameters,
  ): StreamableMethod<
    | PipelineGetPipelinesByWorkspace200Response
    | PipelineGetPipelinesByWorkspaceDefaultResponse
  >;
}

export interface PipelineCreateOrUpdatePipeline {
  /** Creates or updates a pipeline. */
  put(
    options: PipelineCreateOrUpdatePipelineParameters,
  ): StreamableMethod<
    | PipelineCreateOrUpdatePipeline200Response
    | PipelineCreateOrUpdatePipeline202Response
    | PipelineCreateOrUpdatePipelineDefaultResponse
  >;
  /** Gets a pipeline. */
  get(
    options?: PipelineGetPipelineParameters,
  ): StreamableMethod<
    | PipelineGetPipeline200Response
    | PipelineGetPipeline304Response
    | PipelineGetPipelineDefaultResponse
  >;
  /** Deletes a pipeline. */
  delete(
    options?: PipelineDeletePipelineParameters,
  ): StreamableMethod<
    | PipelineDeletePipeline200Response
    | PipelineDeletePipeline202Response
    | PipelineDeletePipeline204Response
    | PipelineDeletePipelineDefaultResponse
  >;
}

export interface PipelineRenamePipeline {
  /** Renames a pipeline. */
  post(
    options: PipelineRenamePipelineParameters,
  ): StreamableMethod<
    | PipelineRenamePipeline200Response
    | PipelineRenamePipeline202Response
    | PipelineRenamePipelineDefaultResponse
  >;
}

export interface PipelineCreatePipelineRun {
  /** Creates a run of a pipeline. */
  post(
    options?: PipelineCreatePipelineRunParameters,
  ): StreamableMethod<
    | PipelineCreatePipelineRun202Response
    | PipelineCreatePipelineRunDefaultResponse
  >;
}

export interface PipelineRunQueryPipelineRunsByWorkspace {
  /** Query pipeline runs in the workspace based on input filter conditions. */
  post(
    options: PipelineRunQueryPipelineRunsByWorkspaceParameters,
  ): StreamableMethod<
    | PipelineRunQueryPipelineRunsByWorkspace200Response
    | PipelineRunQueryPipelineRunsByWorkspaceDefaultResponse
  >;
}

export interface PipelineRunGetPipelineRun {
  /** Get a pipeline run by its run ID. */
  get(
    options?: PipelineRunGetPipelineRunParameters,
  ): StreamableMethod<
    | PipelineRunGetPipelineRun200Response
    | PipelineRunGetPipelineRunDefaultResponse
  >;
}

export interface PipelineRunQueryActivityRuns {
  /** Query activity runs based on input filter conditions. */
  post(
    options: PipelineRunQueryActivityRunsParameters,
  ): StreamableMethod<
    | PipelineRunQueryActivityRuns200Response
    | PipelineRunQueryActivityRunsDefaultResponse
  >;
}

export interface PipelineRunCancelPipelineRun {
  /** Cancel a pipeline run by its run ID. */
  post(
    options?: PipelineRunCancelPipelineRunParameters,
  ): StreamableMethod<
    | PipelineRunCancelPipelineRun200Response
    | PipelineRunCancelPipelineRunDefaultResponse
  >;
}

export interface SparkJobDefinitionGetSparkJobDefinitionsByWorkspace {
  /** Lists spark job definitions. */
  get(
    options?: SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceParameters,
  ): StreamableMethod<
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspace200Response
    | SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceDefaultResponse
  >;
}

export interface SparkJobDefinitionCreateOrUpdateSparkJobDefinition {
  /** Creates or updates a Spark Job Definition. */
  put(
    options: SparkJobDefinitionCreateOrUpdateSparkJobDefinitionParameters,
  ): StreamableMethod<
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition200Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinition202Response
    | SparkJobDefinitionCreateOrUpdateSparkJobDefinitionDefaultResponse
  >;
  /** Gets a Spark Job Definition. */
  get(
    options?: SparkJobDefinitionGetSparkJobDefinitionParameters,
  ): StreamableMethod<
    | SparkJobDefinitionGetSparkJobDefinition200Response
    | SparkJobDefinitionGetSparkJobDefinition304Response
    | SparkJobDefinitionGetSparkJobDefinitionDefaultResponse
  >;
  /** Deletes a Spark Job Definition. */
  delete(
    options?: SparkJobDefinitionDeleteSparkJobDefinitionParameters,
  ): StreamableMethod<
    | SparkJobDefinitionDeleteSparkJobDefinition200Response
    | SparkJobDefinitionDeleteSparkJobDefinition202Response
    | SparkJobDefinitionDeleteSparkJobDefinition204Response
    | SparkJobDefinitionDeleteSparkJobDefinitionDefaultResponse
  >;
}

export interface SparkJobDefinitionExecuteSparkJobDefinition {
  /** Executes the spark job definition. */
  post(
    options?: SparkJobDefinitionExecuteSparkJobDefinitionParameters,
  ): StreamableMethod<
    | SparkJobDefinitionExecuteSparkJobDefinition200Response
    | SparkJobDefinitionExecuteSparkJobDefinition202Response
    | SparkJobDefinitionExecuteSparkJobDefinitionDefaultResponse
  >;
}

export interface SparkJobDefinitionRenameSparkJobDefinition {
  /** Renames a sparkJobDefinition. */
  post(
    options: SparkJobDefinitionRenameSparkJobDefinitionParameters,
  ): StreamableMethod<
    | SparkJobDefinitionRenameSparkJobDefinition200Response
    | SparkJobDefinitionRenameSparkJobDefinition202Response
    | SparkJobDefinitionRenameSparkJobDefinitionDefaultResponse
  >;
}

export interface SparkJobDefinitionDebugSparkJobDefinition {
  /** Debug the spark job definition. */
  post(
    options: SparkJobDefinitionDebugSparkJobDefinitionParameters,
  ): StreamableMethod<
    | SparkJobDefinitionDebugSparkJobDefinition200Response
    | SparkJobDefinitionDebugSparkJobDefinition202Response
    | SparkJobDefinitionDebugSparkJobDefinitionDefaultResponse
  >;
}

export interface SqlPoolsList {
  /** List Sql Pools */
  get(
    options?: SqlPoolsListParameters,
  ): StreamableMethod<SqlPoolsList200Response | SqlPoolsListDefaultResponse>;
}

export interface SqlPoolsGet {
  /** Get Sql Pool */
  get(
    options?: SqlPoolsGetParameters,
  ): StreamableMethod<SqlPoolsGet200Response | SqlPoolsGetDefaultResponse>;
}

export interface SqlScriptGetSqlScriptsByWorkspace {
  /** Lists sql scripts. */
  get(
    options?: SqlScriptGetSqlScriptsByWorkspaceParameters,
  ): StreamableMethod<
    | SqlScriptGetSqlScriptsByWorkspace200Response
    | SqlScriptGetSqlScriptsByWorkspaceDefaultResponse
  >;
}

export interface SqlScriptCreateOrUpdateSqlScript {
  /** Creates or updates a Sql Script. */
  put(
    options: SqlScriptCreateOrUpdateSqlScriptParameters,
  ): StreamableMethod<
    | SqlScriptCreateOrUpdateSqlScript200Response
    | SqlScriptCreateOrUpdateSqlScript202Response
    | SqlScriptCreateOrUpdateSqlScriptDefaultResponse
  >;
  /** Gets a sql script. */
  get(
    options?: SqlScriptGetSqlScriptParameters,
  ): StreamableMethod<
    | SqlScriptGetSqlScript200Response
    | SqlScriptGetSqlScript304Response
    | SqlScriptGetSqlScriptDefaultResponse
  >;
  /** Deletes a Sql Script. */
  delete(
    options?: SqlScriptDeleteSqlScriptParameters,
  ): StreamableMethod<
    | SqlScriptDeleteSqlScript200Response
    | SqlScriptDeleteSqlScript202Response
    | SqlScriptDeleteSqlScript204Response
    | SqlScriptDeleteSqlScriptDefaultResponse
  >;
}

export interface SqlScriptRenameSqlScript {
  /** Renames a sqlScript. */
  post(
    options: SqlScriptRenameSqlScriptParameters,
  ): StreamableMethod<
    | SqlScriptRenameSqlScript200Response
    | SqlScriptRenameSqlScript202Response
    | SqlScriptRenameSqlScriptDefaultResponse
  >;
}

export interface TriggerGetTriggersByWorkspace {
  /** Lists triggers. */
  get(
    options?: TriggerGetTriggersByWorkspaceParameters,
  ): StreamableMethod<
    | TriggerGetTriggersByWorkspace200Response
    | TriggerGetTriggersByWorkspaceDefaultResponse
  >;
}

export interface TriggerCreateOrUpdateTrigger {
  /** Creates or updates a trigger. */
  put(
    options: TriggerCreateOrUpdateTriggerParameters,
  ): StreamableMethod<
    | TriggerCreateOrUpdateTrigger200Response
    | TriggerCreateOrUpdateTrigger202Response
    | TriggerCreateOrUpdateTriggerDefaultResponse
  >;
  /** Gets a trigger. */
  get(
    options?: TriggerGetTriggerParameters,
  ): StreamableMethod<
    | TriggerGetTrigger200Response
    | TriggerGetTrigger304Response
    | TriggerGetTriggerDefaultResponse
  >;
  /** Deletes a trigger. */
  delete(
    options?: TriggerDeleteTriggerParameters,
  ): StreamableMethod<
    | TriggerDeleteTrigger200Response
    | TriggerDeleteTrigger202Response
    | TriggerDeleteTrigger204Response
    | TriggerDeleteTriggerDefaultResponse
  >;
}

export interface TriggerSubscribeTriggerToEvents {
  /** Subscribe event trigger to events. */
  post(
    options?: TriggerSubscribeTriggerToEventsParameters,
  ): StreamableMethod<
    | TriggerSubscribeTriggerToEvents200Response
    | TriggerSubscribeTriggerToEvents202Response
    | TriggerSubscribeTriggerToEventsDefaultResponse
  >;
}

export interface TriggerGetEventSubscriptionStatus {
  /** Get a trigger's event subscription status. */
  post(
    options?: TriggerGetEventSubscriptionStatusParameters,
  ): StreamableMethod<
    | TriggerGetEventSubscriptionStatus200Response
    | TriggerGetEventSubscriptionStatusDefaultResponse
  >;
}

export interface TriggerUnsubscribeTriggerFromEvents {
  /** Unsubscribe event trigger from events. */
  post(
    options?: TriggerUnsubscribeTriggerFromEventsParameters,
  ): StreamableMethod<
    | TriggerUnsubscribeTriggerFromEvents200Response
    | TriggerUnsubscribeTriggerFromEvents202Response
    | TriggerUnsubscribeTriggerFromEventsDefaultResponse
  >;
}

export interface TriggerStartTrigger {
  /** Starts a trigger. */
  post(
    options?: TriggerStartTriggerParameters,
  ): StreamableMethod<
    TriggerStartTrigger200Response | TriggerStartTriggerDefaultResponse
  >;
}

export interface TriggerStopTrigger {
  /** Stops a trigger. */
  post(
    options?: TriggerStopTriggerParameters,
  ): StreamableMethod<
    TriggerStopTrigger200Response | TriggerStopTriggerDefaultResponse
  >;
}

export interface TriggerRunRerunTriggerInstance {
  /** Rerun single trigger instance by runId. */
  post(
    options?: TriggerRunRerunTriggerInstanceParameters,
  ): StreamableMethod<
    | TriggerRunRerunTriggerInstance200Response
    | TriggerRunRerunTriggerInstanceDefaultResponse
  >;
}

export interface TriggerRunCancelTriggerInstance {
  /** Cancel single trigger instance by runId. */
  post(
    options?: TriggerRunCancelTriggerInstanceParameters,
  ): StreamableMethod<
    | TriggerRunCancelTriggerInstance200Response
    | TriggerRunCancelTriggerInstanceDefaultResponse
  >;
}

export interface TriggerRunQueryTriggerRunsByWorkspace {
  /** Query trigger runs. */
  post(
    options: TriggerRunQueryTriggerRunsByWorkspaceParameters,
  ): StreamableMethod<
    | TriggerRunQueryTriggerRunsByWorkspace200Response
    | TriggerRunQueryTriggerRunsByWorkspaceDefaultResponse
  >;
}

export interface WorkspaceGet {
  /** Get Workspace */
  get(
    options?: WorkspaceGetParameters,
  ): StreamableMethod<WorkspaceGet200Response | WorkspaceGetDefaultResponse>;
}

export interface Routes {
  /** Resource for '/kqlScripts' has methods for the following verbs: get */
  (path: "/kqlScripts"): KqlScriptsGetAll;
  /** Resource for '/kqlScripts/\{kqlScriptName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/kqlScripts/{kqlScriptName}",
    kqlScriptName: string,
  ): KqlScriptCreateOrUpdate;
  /** Resource for '/kqlScripts/\{kqlScriptName\}/rename' has methods for the following verbs: post */
  (
    path: "/kqlScripts/{kqlScriptName}/rename",
    kqlScriptName: string,
  ): KqlScriptRename;
  /** Resource for '/metastore/create-database-operations/\{id\}' has methods for the following verbs: put, get */
  (
    path: "/metastore/create-database-operations/{id}",
    id: string,
  ): MetastoreRegister;
  /** Resource for '/metastore/update-database-operations/\{id\}' has methods for the following verbs: put */
  (
    path: "/metastore/update-database-operations/{id}",
    id: string,
  ): MetastoreUpdate;
  /** Resource for '/metastore/databases/\{id\}' has methods for the following verbs: delete */
  (path: "/metastore/databases/{id}", id: string): MetastoreDelete;
  /** Resource for '/sparkconfigurations' has methods for the following verbs: get */
  (
    path: "/sparkconfigurations",
  ): SparkConfigurationGetSparkConfigurationsByWorkspace;
  /** Resource for '/sparkconfigurations/\{sparkConfigurationName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/sparkconfigurations/{sparkConfigurationName}",
    sparkConfigurationName: string,
  ): SparkConfigurationCreateOrUpdateSparkConfiguration;
  /** Resource for '/sparkconfigurations/\{sparkConfigurationName\}/rename' has methods for the following verbs: post */
  (
    path: "/sparkconfigurations/{sparkConfigurationName}/rename",
    sparkConfigurationName: string,
  ): SparkConfigurationRenameSparkConfiguration;
  /** Resource for '/bigDataPools' has methods for the following verbs: get */
  (path: "/bigDataPools"): BigDataPoolsList;
  /** Resource for '/bigDataPools/\{bigDataPoolName\}' has methods for the following verbs: get */
  (
    path: "/bigDataPools/{bigDataPoolName}",
    bigDataPoolName: string,
  ): BigDataPoolsGet;
  /** Resource for '/dataflows/\{dataFlowName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/dataflows/{dataFlowName}",
    dataFlowName: string,
  ): DataFlowCreateOrUpdateDataFlow;
  /** Resource for '/dataflows/\{dataFlowName\}/rename' has methods for the following verbs: post */
  (
    path: "/dataflows/{dataFlowName}/rename",
    dataFlowName: string,
  ): DataFlowRenameDataFlow;
  /** Resource for '/dataflows' has methods for the following verbs: get */
  (path: "/dataflows"): DataFlowGetDataFlowsByWorkspace;
  /** Resource for '/createDataFlowDebugSession' has methods for the following verbs: post */
  (
    path: "/createDataFlowDebugSession",
  ): DataFlowDebugSessionCreateDataFlowDebugSession;
  /** Resource for '/queryDataFlowDebugSessions' has methods for the following verbs: post */
  (
    path: "/queryDataFlowDebugSessions",
  ): DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspace;
  /** Resource for '/addDataFlowToDebugSession' has methods for the following verbs: post */
  (path: "/addDataFlowToDebugSession"): DataFlowDebugSessionAddDataFlow;
  /** Resource for '/deleteDataFlowDebugSession' has methods for the following verbs: post */
  (
    path: "/deleteDataFlowDebugSession",
  ): DataFlowDebugSessionDeleteDataFlowDebugSession;
  /** Resource for '/executeDataFlowDebugCommand' has methods for the following verbs: post */
  (path: "/executeDataFlowDebugCommand"): DataFlowDebugSessionExecuteCommand;
  /** Resource for '/datasets' has methods for the following verbs: get */
  (path: "/datasets"): DatasetGetDatasetsByWorkspace;
  /** Resource for '/datasets/\{datasetName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/datasets/{datasetName}",
    datasetName: string,
  ): DatasetCreateOrUpdateDataset;
  /** Resource for '/datasets/\{datasetName\}/rename' has methods for the following verbs: post */
  (
    path: "/datasets/{datasetName}/rename",
    datasetName: string,
  ): DatasetRenameDataset;
  /** Resource for '/getGitHubAccessToken' has methods for the following verbs: post */
  (
    path: "/getGitHubAccessToken",
  ): WorkspaceGitRepoManagementGetGitHubAccessToken;
  /** Resource for '/integrationRuntimes' has methods for the following verbs: get */
  (path: "/integrationRuntimes"): IntegrationRuntimesList;
  /** Resource for '/integrationRuntimes/\{integrationRuntimeName\}' has methods for the following verbs: get */
  (
    path: "/integrationRuntimes/{integrationRuntimeName}",
    integrationRuntimeName: string,
  ): IntegrationRuntimesGet;
  /** Resource for '/libraries' has methods for the following verbs: get */
  (path: "/libraries"): LibraryList;
  /** Resource for '/libraries/\{libraryName\}/flush' has methods for the following verbs: post */
  (path: "/libraries/{libraryName}/flush", libraryName: string): LibraryFlush;
  /** Resource for '/libraryOperationResults/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/libraryOperationResults/{operationId}",
    operationId: string,
  ): LibraryGetOperationResult;
  /** Resource for '/libraries/\{libraryName\}' has methods for the following verbs: delete, get, put */
  (path: "/libraries/{libraryName}", libraryName: string): LibraryDelete;
  /** Resource for '/linkedservices' has methods for the following verbs: get */
  (path: "/linkedservices"): LinkedServiceGetLinkedServicesByWorkspace;
  /** Resource for '/linkedservices/\{linkedServiceName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/linkedservices/{linkedServiceName}",
    linkedServiceName: string,
  ): LinkedServiceCreateOrUpdateLinkedService;
  /** Resource for '/linkedservices/\{linkedServiceName\}/rename' has methods for the following verbs: post */
  (
    path: "/linkedservices/{linkedServiceName}/rename",
    linkedServiceName: string,
  ): LinkedServiceRenameLinkedService;
  /** Resource for '/notebooks' has methods for the following verbs: get */
  (path: "/notebooks"): NotebookGetNotebooksByWorkspace;
  /** Resource for '/notebooksSummary' has methods for the following verbs: get */
  (path: "/notebooksSummary"): NotebookGetNotebookSummaryByWorkSpace;
  /** Resource for '/notebooks/\{notebookName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/notebooks/{notebookName}",
    notebookName: string,
  ): NotebookCreateOrUpdateNotebook;
  /** Resource for '/notebooks/\{notebookName\}/rename' has methods for the following verbs: post */
  (
    path: "/notebooks/{notebookName}/rename",
    notebookName: string,
  ): NotebookRenameNotebook;
  /** Resource for '/notebookOperationResults/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/notebookOperationResults/{operationId}",
    operationId: string,
  ): NotebookOperationResultGet;
  /** Resource for '/pipelines' has methods for the following verbs: get */
  (path: "/pipelines"): PipelineGetPipelinesByWorkspace;
  /** Resource for '/pipelines/\{pipelineName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/pipelines/{pipelineName}",
    pipelineName: string,
  ): PipelineCreateOrUpdatePipeline;
  /** Resource for '/pipelines/\{pipelineName\}/rename' has methods for the following verbs: post */
  (
    path: "/pipelines/{pipelineName}/rename",
    pipelineName: string,
  ): PipelineRenamePipeline;
  /** Resource for '/pipelines/\{pipelineName\}/createRun' has methods for the following verbs: post */
  (
    path: "/pipelines/{pipelineName}/createRun",
    pipelineName: string,
  ): PipelineCreatePipelineRun;
  /** Resource for '/queryPipelineRuns' has methods for the following verbs: post */
  (path: "/queryPipelineRuns"): PipelineRunQueryPipelineRunsByWorkspace;
  /** Resource for '/pipelineruns/\{runId\}' has methods for the following verbs: get */
  (path: "/pipelineruns/{runId}", runId: string): PipelineRunGetPipelineRun;
  /** Resource for '/pipelines/\{pipelineName\}/pipelineruns/\{runId\}/queryActivityruns' has methods for the following verbs: post */
  (
    path: "/pipelines/{pipelineName}/pipelineruns/{runId}/queryActivityruns",
    pipelineName: string,
    runId: string,
  ): PipelineRunQueryActivityRuns;
  /** Resource for '/pipelineruns/\{runId\}/cancel' has methods for the following verbs: post */
  (
    path: "/pipelineruns/{runId}/cancel",
    runId: string,
  ): PipelineRunCancelPipelineRun;
  /** Resource for '/sparkJobDefinitions' has methods for the following verbs: get */
  (
    path: "/sparkJobDefinitions",
  ): SparkJobDefinitionGetSparkJobDefinitionsByWorkspace;
  /** Resource for '/sparkJobDefinitions/\{sparkJobDefinitionName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/sparkJobDefinitions/{sparkJobDefinitionName}",
    sparkJobDefinitionName: string,
  ): SparkJobDefinitionCreateOrUpdateSparkJobDefinition;
  /** Resource for '/sparkJobDefinitions/\{sparkJobDefinitionName\}/execute' has methods for the following verbs: post */
  (
    path: "/sparkJobDefinitions/{sparkJobDefinitionName}/execute",
    sparkJobDefinitionName: string,
  ): SparkJobDefinitionExecuteSparkJobDefinition;
  /** Resource for '/sparkJobDefinitions/\{sparkJobDefinitionName\}/rename' has methods for the following verbs: post */
  (
    path: "/sparkJobDefinitions/{sparkJobDefinitionName}/rename",
    sparkJobDefinitionName: string,
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
    sqlScriptName: string,
  ): SqlScriptCreateOrUpdateSqlScript;
  /** Resource for '/sqlScripts/\{sqlScriptName\}/rename' has methods for the following verbs: post */
  (
    path: "/sqlScripts/{sqlScriptName}/rename",
    sqlScriptName: string,
  ): SqlScriptRenameSqlScript;
  /** Resource for '/triggers' has methods for the following verbs: get */
  (path: "/triggers"): TriggerGetTriggersByWorkspace;
  /** Resource for '/triggers/\{triggerName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/triggers/{triggerName}",
    triggerName: string,
  ): TriggerCreateOrUpdateTrigger;
  /** Resource for '/triggers/\{triggerName\}/subscribeToEvents' has methods for the following verbs: post */
  (
    path: "/triggers/{triggerName}/subscribeToEvents",
    triggerName: string,
  ): TriggerSubscribeTriggerToEvents;
  /** Resource for '/triggers/\{triggerName\}/getEventSubscriptionStatus' has methods for the following verbs: post */
  (
    path: "/triggers/{triggerName}/getEventSubscriptionStatus",
    triggerName: string,
  ): TriggerGetEventSubscriptionStatus;
  /** Resource for '/triggers/\{triggerName\}/unsubscribeFromEvents' has methods for the following verbs: post */
  (
    path: "/triggers/{triggerName}/unsubscribeFromEvents",
    triggerName: string,
  ): TriggerUnsubscribeTriggerFromEvents;
  /** Resource for '/triggers/\{triggerName\}/start' has methods for the following verbs: post */
  (
    path: "/triggers/{triggerName}/start",
    triggerName: string,
  ): TriggerStartTrigger;
  /** Resource for '/triggers/\{triggerName\}/stop' has methods for the following verbs: post */
  (
    path: "/triggers/{triggerName}/stop",
    triggerName: string,
  ): TriggerStopTrigger;
  /** Resource for '/triggers/\{triggerName\}/triggerRuns/\{runId\}/rerun' has methods for the following verbs: post */
  (
    path: "/triggers/{triggerName}/triggerRuns/{runId}/rerun",
    triggerName: string,
    runId: string,
  ): TriggerRunRerunTriggerInstance;
  /** Resource for '/triggers/\{triggerName\}/triggerRuns/\{runId\}/cancel' has methods for the following verbs: post */
  (
    path: "/triggers/{triggerName}/triggerRuns/{runId}/cancel",
    triggerName: string,
    runId: string,
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
  pipelineOperations: PipelineOperations;
  pipelineRun: PipelineRunOperations;
  sparkJobDefinition: SparkJobDefinitionOperations;
  sqlPools: SqlPoolsOperations;
  sqlScript: SqlScriptOperations;
  trigger: TriggerOperations;
  triggerRun: TriggerRunOperations;
  workspace: WorkspaceOperations;
};
