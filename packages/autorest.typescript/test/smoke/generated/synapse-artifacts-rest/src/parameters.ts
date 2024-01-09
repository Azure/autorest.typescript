// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  KqlScriptResource,
  ArtifactRenameRequest,
  MetastoreRegisterObject,
  MetastoreUpdateObject,
  SparkConfigurationResource,
  DataFlowResource,
  CreateDataFlowDebugSessionRequest,
  DataFlowDebugPackage,
  DeleteDataFlowDebugSessionRequest,
  DataFlowDebugCommandRequest,
  DatasetResource,
  GitHubAccessTokenRequest,
  LinkedServiceResource,
  NotebookResource,
  PipelineResource,
  RunFilterParameters,
  SparkJobDefinitionResource,
  SqlScriptResource,
  TriggerResource,
} from "./models";

export type KqlScriptsGetAllParameters = RequestParameters;

export interface KqlScriptCreateOrUpdateBodyParam {
  /** KQL script */
  body: KqlScriptResource;
}

export interface KqlScriptCreateOrUpdateMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type KqlScriptCreateOrUpdateParameters =
  KqlScriptCreateOrUpdateMediaTypesParam &
    KqlScriptCreateOrUpdateBodyParam &
    RequestParameters;
export type KqlScriptGetByNameParameters = RequestParameters;
export type KqlScriptDeleteByNameParameters = RequestParameters;

export interface KqlScriptRenameBodyParam {
  /** Rename request */
  body: ArtifactRenameRequest;
}

export interface KqlScriptRenameMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type KqlScriptRenameParameters = KqlScriptRenameMediaTypesParam &
  KqlScriptRenameBodyParam &
  RequestParameters;

export interface MetastoreRegisterBodyParam {
  /** The body for the register request */
  body: MetastoreRegisterObject;
}

export interface MetastoreRegisterMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type MetastoreRegisterParameters = MetastoreRegisterMediaTypesParam &
  MetastoreRegisterBodyParam &
  RequestParameters;
export type MetastoreGetDatabaseOperationsParameters = RequestParameters;

export interface MetastoreUpdateBodyParam {
  /** The body for the update request */
  body: MetastoreUpdateObject;
}

export interface MetastoreUpdateMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type MetastoreUpdateParameters = MetastoreUpdateMediaTypesParam &
  MetastoreUpdateBodyParam &
  RequestParameters;
export type MetastoreDeleteParameters = RequestParameters;
export type SparkConfigurationGetSparkConfigurationsByWorkspaceParameters =
  RequestParameters;

export interface SparkConfigurationCreateOrUpdateSparkConfigurationHeaders {
  /** ETag of the sparkConfiguration entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  "If-Match"?: string;
}

export interface SparkConfigurationCreateOrUpdateSparkConfigurationBodyParam {
  /** SparkConfiguration resource definition. */
  body: SparkConfigurationResource;
}

export interface SparkConfigurationCreateOrUpdateSparkConfigurationHeaderParam {
  headers?: RawHttpHeadersInput &
    SparkConfigurationCreateOrUpdateSparkConfigurationHeaders;
}

export interface SparkConfigurationCreateOrUpdateSparkConfigurationMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type SparkConfigurationCreateOrUpdateSparkConfigurationParameters =
  SparkConfigurationCreateOrUpdateSparkConfigurationHeaderParam &
    SparkConfigurationCreateOrUpdateSparkConfigurationMediaTypesParam &
    SparkConfigurationCreateOrUpdateSparkConfigurationBodyParam &
    RequestParameters;

export interface SparkConfigurationGetSparkConfigurationHeaders {
  /** ETag of the sparkConfiguration entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  "If-None-Match"?: string;
}

export interface SparkConfigurationGetSparkConfigurationHeaderParam {
  headers?: RawHttpHeadersInput &
    SparkConfigurationGetSparkConfigurationHeaders;
}

export type SparkConfigurationGetSparkConfigurationParameters =
  SparkConfigurationGetSparkConfigurationHeaderParam & RequestParameters;
export type SparkConfigurationDeleteSparkConfigurationParameters =
  RequestParameters;

export interface SparkConfigurationRenameSparkConfigurationBodyParam {
  /** proposed new name. */
  body: ArtifactRenameRequest;
}

export interface SparkConfigurationRenameSparkConfigurationMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type SparkConfigurationRenameSparkConfigurationParameters =
  SparkConfigurationRenameSparkConfigurationMediaTypesParam &
    SparkConfigurationRenameSparkConfigurationBodyParam &
    RequestParameters;
export type BigDataPoolsListParameters = RequestParameters;
export type BigDataPoolsGetParameters = RequestParameters;

export interface DataFlowCreateOrUpdateDataFlowHeaders {
  /** ETag of the data flow entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  "If-Match"?: string;
}

export interface DataFlowCreateOrUpdateDataFlowBodyParam {
  /** Data flow resource definition. */
  body: DataFlowResource;
}

export interface DataFlowCreateOrUpdateDataFlowHeaderParam {
  headers?: RawHttpHeadersInput & DataFlowCreateOrUpdateDataFlowHeaders;
}

export interface DataFlowCreateOrUpdateDataFlowMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DataFlowCreateOrUpdateDataFlowParameters =
  DataFlowCreateOrUpdateDataFlowHeaderParam &
    DataFlowCreateOrUpdateDataFlowMediaTypesParam &
    DataFlowCreateOrUpdateDataFlowBodyParam &
    RequestParameters;

export interface DataFlowGetDataFlowHeaders {
  /** ETag of the data flow entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  "If-None-Match"?: string;
}

export interface DataFlowGetDataFlowHeaderParam {
  headers?: RawHttpHeadersInput & DataFlowGetDataFlowHeaders;
}

export type DataFlowGetDataFlowParameters = DataFlowGetDataFlowHeaderParam &
  RequestParameters;
export type DataFlowDeleteDataFlowParameters = RequestParameters;

export interface DataFlowRenameDataFlowBodyParam {
  /** proposed new name. */
  body: ArtifactRenameRequest;
}

export interface DataFlowRenameDataFlowMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DataFlowRenameDataFlowParameters =
  DataFlowRenameDataFlowMediaTypesParam &
    DataFlowRenameDataFlowBodyParam &
    RequestParameters;
export type DataFlowGetDataFlowsByWorkspaceParameters = RequestParameters;

export interface DataFlowDebugSessionCreateDataFlowDebugSessionBodyParam {
  /** Data flow debug session definition */
  body: CreateDataFlowDebugSessionRequest;
}

export interface DataFlowDebugSessionCreateDataFlowDebugSessionMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DataFlowDebugSessionCreateDataFlowDebugSessionParameters =
  DataFlowDebugSessionCreateDataFlowDebugSessionMediaTypesParam &
    DataFlowDebugSessionCreateDataFlowDebugSessionBodyParam &
    RequestParameters;
export type DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceParameters =
  RequestParameters;

export interface DataFlowDebugSessionAddDataFlowBodyParam {
  /** Data flow debug session definition with debug content. */
  body: DataFlowDebugPackage;
}

export interface DataFlowDebugSessionAddDataFlowMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DataFlowDebugSessionAddDataFlowParameters =
  DataFlowDebugSessionAddDataFlowMediaTypesParam &
    DataFlowDebugSessionAddDataFlowBodyParam &
    RequestParameters;

export interface DataFlowDebugSessionDeleteDataFlowDebugSessionBodyParam {
  /** Data flow debug session definition for deletion */
  body: DeleteDataFlowDebugSessionRequest;
}

export interface DataFlowDebugSessionDeleteDataFlowDebugSessionMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DataFlowDebugSessionDeleteDataFlowDebugSessionParameters =
  DataFlowDebugSessionDeleteDataFlowDebugSessionMediaTypesParam &
    DataFlowDebugSessionDeleteDataFlowDebugSessionBodyParam &
    RequestParameters;

export interface DataFlowDebugSessionExecuteCommandBodyParam {
  /** Data flow debug command definition. */
  body: DataFlowDebugCommandRequest;
}

export interface DataFlowDebugSessionExecuteCommandMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DataFlowDebugSessionExecuteCommandParameters =
  DataFlowDebugSessionExecuteCommandMediaTypesParam &
    DataFlowDebugSessionExecuteCommandBodyParam &
    RequestParameters;
export type DatasetGetDatasetsByWorkspaceParameters = RequestParameters;

export interface DatasetCreateOrUpdateDatasetHeaders {
  /** ETag of the dataset entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  "If-Match"?: string;
}

export interface DatasetCreateOrUpdateDatasetBodyParam {
  /** Dataset resource definition. */
  body: DatasetResource;
}

export interface DatasetCreateOrUpdateDatasetHeaderParam {
  headers?: RawHttpHeadersInput & DatasetCreateOrUpdateDatasetHeaders;
}

export interface DatasetCreateOrUpdateDatasetMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DatasetCreateOrUpdateDatasetParameters =
  DatasetCreateOrUpdateDatasetHeaderParam &
    DatasetCreateOrUpdateDatasetMediaTypesParam &
    DatasetCreateOrUpdateDatasetBodyParam &
    RequestParameters;

export interface DatasetGetDatasetHeaders {
  /** ETag of the dataset entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  "If-None-Match"?: string;
}

export interface DatasetGetDatasetHeaderParam {
  headers?: RawHttpHeadersInput & DatasetGetDatasetHeaders;
}

export type DatasetGetDatasetParameters = DatasetGetDatasetHeaderParam &
  RequestParameters;
export type DatasetDeleteDatasetParameters = RequestParameters;

export interface DatasetRenameDatasetBodyParam {
  /** proposed new name. */
  body: ArtifactRenameRequest;
}

export interface DatasetRenameDatasetMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type DatasetRenameDatasetParameters =
  DatasetRenameDatasetMediaTypesParam &
    DatasetRenameDatasetBodyParam &
    RequestParameters;

export interface WorkspaceGitRepoManagementGetGitHubAccessTokenHeaders {
  /** Can provide a guid, which is helpful for debugging and to provide better customer support */
  "x-ms-client-request-id"?: string;
}

export interface WorkspaceGitRepoManagementGetGitHubAccessTokenBodyParam {
  body: GitHubAccessTokenRequest;
}

export interface WorkspaceGitRepoManagementGetGitHubAccessTokenHeaderParam {
  headers?: RawHttpHeadersInput &
    WorkspaceGitRepoManagementGetGitHubAccessTokenHeaders;
}

export interface WorkspaceGitRepoManagementGetGitHubAccessTokenMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type WorkspaceGitRepoManagementGetGitHubAccessTokenParameters =
  WorkspaceGitRepoManagementGetGitHubAccessTokenHeaderParam &
    WorkspaceGitRepoManagementGetGitHubAccessTokenMediaTypesParam &
    WorkspaceGitRepoManagementGetGitHubAccessTokenBodyParam &
    RequestParameters;
export type IntegrationRuntimesListParameters = RequestParameters;
export type IntegrationRuntimesGetParameters = RequestParameters;
export type LibraryListParameters = RequestParameters;
export type LibraryFlushParameters = RequestParameters;
export type LibraryGetOperationResultParameters = RequestParameters;
export type LibraryDeleteParameters = RequestParameters;
export type LibraryGetParameters = RequestParameters;
export type LibraryCreateParameters = RequestParameters;

export interface LibraryAppendHeaders {
  /** Set this header to a byte offset at which the block is expected to be appended. The request succeeds only if the current offset matches this value. Otherwise, the request fails with the AppendPositionConditionNotMet error (HTTP status code 412 – Precondition Failed) */
  "x-ms-blob-condition-appendpos"?: number;
}

export interface LibraryAppendBodyParam {
  /**
   * Library file chunk.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface LibraryAppendQueryParamProperties {
  comp: "appendblock";
}

export interface LibraryAppendQueryParam {
  queryParameters: LibraryAppendQueryParamProperties;
}

export interface LibraryAppendHeaderParam {
  headers?: RawHttpHeadersInput & LibraryAppendHeaders;
}

export interface LibraryAppendMediaTypesParam {
  /** Request content type */
  contentType?: "application/octet-stream";
}

export type LibraryAppendParameters = LibraryAppendQueryParam &
  LibraryAppendHeaderParam &
  LibraryAppendMediaTypesParam &
  LibraryAppendBodyParam &
  RequestParameters;
export type LinkedServiceGetLinkedServicesByWorkspaceParameters =
  RequestParameters;

export interface LinkedServiceCreateOrUpdateLinkedServiceHeaders {
  /** ETag of the linkedService entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  "If-Match"?: string;
}

export interface LinkedServiceCreateOrUpdateLinkedServiceBodyParam {
  /** Linked service resource definition. */
  body: LinkedServiceResource;
}

export interface LinkedServiceCreateOrUpdateLinkedServiceHeaderParam {
  headers?: RawHttpHeadersInput &
    LinkedServiceCreateOrUpdateLinkedServiceHeaders;
}

export interface LinkedServiceCreateOrUpdateLinkedServiceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LinkedServiceCreateOrUpdateLinkedServiceParameters =
  LinkedServiceCreateOrUpdateLinkedServiceHeaderParam &
    LinkedServiceCreateOrUpdateLinkedServiceMediaTypesParam &
    LinkedServiceCreateOrUpdateLinkedServiceBodyParam &
    RequestParameters;

export interface LinkedServiceGetLinkedServiceHeaders {
  /** ETag of the linked service entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  "If-None-Match"?: string;
}

export interface LinkedServiceGetLinkedServiceHeaderParam {
  headers?: RawHttpHeadersInput & LinkedServiceGetLinkedServiceHeaders;
}

export type LinkedServiceGetLinkedServiceParameters =
  LinkedServiceGetLinkedServiceHeaderParam & RequestParameters;
export type LinkedServiceDeleteLinkedServiceParameters = RequestParameters;

export interface LinkedServiceRenameLinkedServiceBodyParam {
  /** proposed new name. */
  body: ArtifactRenameRequest;
}

export interface LinkedServiceRenameLinkedServiceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LinkedServiceRenameLinkedServiceParameters =
  LinkedServiceRenameLinkedServiceMediaTypesParam &
    LinkedServiceRenameLinkedServiceBodyParam &
    RequestParameters;
export type NotebookGetNotebooksByWorkspaceParameters = RequestParameters;
export type NotebookGetNotebookSummaryByWorkSpaceParameters = RequestParameters;

export interface NotebookCreateOrUpdateNotebookHeaders {
  /** ETag of the Note book entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  "If-Match"?: string;
}

export interface NotebookCreateOrUpdateNotebookBodyParam {
  /** Note book resource definition. */
  body: NotebookResource;
}

export interface NotebookCreateOrUpdateNotebookHeaderParam {
  headers?: RawHttpHeadersInput & NotebookCreateOrUpdateNotebookHeaders;
}

export interface NotebookCreateOrUpdateNotebookMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type NotebookCreateOrUpdateNotebookParameters =
  NotebookCreateOrUpdateNotebookHeaderParam &
    NotebookCreateOrUpdateNotebookMediaTypesParam &
    NotebookCreateOrUpdateNotebookBodyParam &
    RequestParameters;

export interface NotebookGetNotebookHeaders {
  /** ETag of the Notebook entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  "If-None-Match"?: string;
}

export interface NotebookGetNotebookHeaderParam {
  headers?: RawHttpHeadersInput & NotebookGetNotebookHeaders;
}

export type NotebookGetNotebookParameters = NotebookGetNotebookHeaderParam &
  RequestParameters;
export type NotebookDeleteNotebookParameters = RequestParameters;

export interface NotebookRenameNotebookBodyParam {
  /** proposed new name. */
  body: ArtifactRenameRequest;
}

export interface NotebookRenameNotebookMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type NotebookRenameNotebookParameters =
  NotebookRenameNotebookMediaTypesParam &
    NotebookRenameNotebookBodyParam &
    RequestParameters;
export type NotebookOperationResultGetParameters = RequestParameters;
export type PipelineGetPipelinesByWorkspaceParameters = RequestParameters;

export interface PipelineCreateOrUpdatePipelineHeaders {
  /** ETag of the pipeline entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  "If-Match"?: string;
}

export interface PipelineCreateOrUpdatePipelineBodyParam {
  /** Pipeline resource definition. */
  body: PipelineResource;
}

export interface PipelineCreateOrUpdatePipelineHeaderParam {
  headers?: RawHttpHeadersInput & PipelineCreateOrUpdatePipelineHeaders;
}

export interface PipelineCreateOrUpdatePipelineMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PipelineCreateOrUpdatePipelineParameters =
  PipelineCreateOrUpdatePipelineHeaderParam &
    PipelineCreateOrUpdatePipelineMediaTypesParam &
    PipelineCreateOrUpdatePipelineBodyParam &
    RequestParameters;

export interface PipelineGetPipelineHeaders {
  /** ETag of the pipeline entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  "If-None-Match"?: string;
}

export interface PipelineGetPipelineHeaderParam {
  headers?: RawHttpHeadersInput & PipelineGetPipelineHeaders;
}

export type PipelineGetPipelineParameters = PipelineGetPipelineHeaderParam &
  RequestParameters;
export type PipelineDeletePipelineParameters = RequestParameters;

export interface PipelineRenamePipelineBodyParam {
  /** proposed new name. */
  body: ArtifactRenameRequest;
}

export interface PipelineRenamePipelineMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PipelineRenamePipelineParameters =
  PipelineRenamePipelineMediaTypesParam &
    PipelineRenamePipelineBodyParam &
    RequestParameters;

export interface PipelineCreatePipelineRunBodyParam {
  /** Parameters of the pipeline run. These parameters will be used only if the runId is not specified. */
  body?: Record<string, any>;
}

export interface PipelineCreatePipelineRunQueryParamProperties {
  /** The pipeline run identifier. If run ID is specified the parameters of the specified run will be used to create a new run. */
  referencePipelineRunId?: string;
  /** Recovery mode flag. If recovery mode is set to true, the specified referenced pipeline run and the new run will be grouped under the same groupId. */
  isRecovery?: boolean;
  /** In recovery mode, the rerun will start from this activity. If not specified, all activities will run. */
  startActivityName?: string;
}

export interface PipelineCreatePipelineRunQueryParam {
  queryParameters?: PipelineCreatePipelineRunQueryParamProperties;
}

export interface PipelineCreatePipelineRunMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PipelineCreatePipelineRunParameters =
  PipelineCreatePipelineRunQueryParam &
    PipelineCreatePipelineRunMediaTypesParam &
    PipelineCreatePipelineRunBodyParam &
    RequestParameters;

export interface PipelineRunQueryPipelineRunsByWorkspaceBodyParam {
  /** Parameters to filter the pipeline run. */
  body: RunFilterParameters;
}

export interface PipelineRunQueryPipelineRunsByWorkspaceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PipelineRunQueryPipelineRunsByWorkspaceParameters =
  PipelineRunQueryPipelineRunsByWorkspaceMediaTypesParam &
    PipelineRunQueryPipelineRunsByWorkspaceBodyParam &
    RequestParameters;
export type PipelineRunGetPipelineRunParameters = RequestParameters;

export interface PipelineRunQueryActivityRunsBodyParam {
  /** Parameters to filter the activity runs. */
  body: RunFilterParameters;
}

export interface PipelineRunQueryActivityRunsMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type PipelineRunQueryActivityRunsParameters =
  PipelineRunQueryActivityRunsMediaTypesParam &
    PipelineRunQueryActivityRunsBodyParam &
    RequestParameters;

export interface PipelineRunCancelPipelineRunQueryParamProperties {
  /** If true, cancel all the Child pipelines that are triggered by the current pipeline. */
  isRecursive?: boolean;
}

export interface PipelineRunCancelPipelineRunQueryParam {
  queryParameters?: PipelineRunCancelPipelineRunQueryParamProperties;
}

export type PipelineRunCancelPipelineRunParameters =
  PipelineRunCancelPipelineRunQueryParam & RequestParameters;
export type SparkJobDefinitionGetSparkJobDefinitionsByWorkspaceParameters =
  RequestParameters;

export interface SparkJobDefinitionCreateOrUpdateSparkJobDefinitionHeaders {
  /** ETag of the Spark Job Definition entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  "If-Match"?: string;
}

export interface SparkJobDefinitionCreateOrUpdateSparkJobDefinitionBodyParam {
  /** Spark Job Definition resource definition. */
  body: SparkJobDefinitionResource;
}

export interface SparkJobDefinitionCreateOrUpdateSparkJobDefinitionHeaderParam {
  headers?: RawHttpHeadersInput &
    SparkJobDefinitionCreateOrUpdateSparkJobDefinitionHeaders;
}

export interface SparkJobDefinitionCreateOrUpdateSparkJobDefinitionMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type SparkJobDefinitionCreateOrUpdateSparkJobDefinitionParameters =
  SparkJobDefinitionCreateOrUpdateSparkJobDefinitionHeaderParam &
    SparkJobDefinitionCreateOrUpdateSparkJobDefinitionMediaTypesParam &
    SparkJobDefinitionCreateOrUpdateSparkJobDefinitionBodyParam &
    RequestParameters;

export interface SparkJobDefinitionGetSparkJobDefinitionHeaders {
  /** ETag of the Spark Job Definition entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  "If-None-Match"?: string;
}

export interface SparkJobDefinitionGetSparkJobDefinitionHeaderParam {
  headers?: RawHttpHeadersInput &
    SparkJobDefinitionGetSparkJobDefinitionHeaders;
}

export type SparkJobDefinitionGetSparkJobDefinitionParameters =
  SparkJobDefinitionGetSparkJobDefinitionHeaderParam & RequestParameters;
export type SparkJobDefinitionDeleteSparkJobDefinitionParameters =
  RequestParameters;
export type SparkJobDefinitionExecuteSparkJobDefinitionParameters =
  RequestParameters;

export interface SparkJobDefinitionRenameSparkJobDefinitionBodyParam {
  /** proposed new name. */
  body: ArtifactRenameRequest;
}

export interface SparkJobDefinitionRenameSparkJobDefinitionMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type SparkJobDefinitionRenameSparkJobDefinitionParameters =
  SparkJobDefinitionRenameSparkJobDefinitionMediaTypesParam &
    SparkJobDefinitionRenameSparkJobDefinitionBodyParam &
    RequestParameters;

export interface SparkJobDefinitionDebugSparkJobDefinitionBodyParam {
  /** Spark Job Definition resource definition. */
  body: SparkJobDefinitionResource;
}

export interface SparkJobDefinitionDebugSparkJobDefinitionMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type SparkJobDefinitionDebugSparkJobDefinitionParameters =
  SparkJobDefinitionDebugSparkJobDefinitionMediaTypesParam &
    SparkJobDefinitionDebugSparkJobDefinitionBodyParam &
    RequestParameters;
export type SqlPoolsListParameters = RequestParameters;
export type SqlPoolsGetParameters = RequestParameters;
export type SqlScriptGetSqlScriptsByWorkspaceParameters = RequestParameters;

export interface SqlScriptCreateOrUpdateSqlScriptHeaders {
  /** ETag of the SQL script entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  "If-Match"?: string;
}

export interface SqlScriptCreateOrUpdateSqlScriptBodyParam {
  /** Sql Script resource definition. */
  body: SqlScriptResource;
}

export interface SqlScriptCreateOrUpdateSqlScriptHeaderParam {
  headers?: RawHttpHeadersInput & SqlScriptCreateOrUpdateSqlScriptHeaders;
}

export interface SqlScriptCreateOrUpdateSqlScriptMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type SqlScriptCreateOrUpdateSqlScriptParameters =
  SqlScriptCreateOrUpdateSqlScriptHeaderParam &
    SqlScriptCreateOrUpdateSqlScriptMediaTypesParam &
    SqlScriptCreateOrUpdateSqlScriptBodyParam &
    RequestParameters;

export interface SqlScriptGetSqlScriptHeaders {
  /** ETag of the sql compute entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  "If-None-Match"?: string;
}

export interface SqlScriptGetSqlScriptHeaderParam {
  headers?: RawHttpHeadersInput & SqlScriptGetSqlScriptHeaders;
}

export type SqlScriptGetSqlScriptParameters = SqlScriptGetSqlScriptHeaderParam &
  RequestParameters;
export type SqlScriptDeleteSqlScriptParameters = RequestParameters;

export interface SqlScriptRenameSqlScriptBodyParam {
  /** proposed new name. */
  body: ArtifactRenameRequest;
}

export interface SqlScriptRenameSqlScriptMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type SqlScriptRenameSqlScriptParameters =
  SqlScriptRenameSqlScriptMediaTypesParam &
    SqlScriptRenameSqlScriptBodyParam &
    RequestParameters;
export type TriggerGetTriggersByWorkspaceParameters = RequestParameters;

export interface TriggerCreateOrUpdateTriggerHeaders {
  /** ETag of the trigger entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  "If-Match"?: string;
}

export interface TriggerCreateOrUpdateTriggerBodyParam {
  /** Trigger resource definition. */
  body: TriggerResource;
}

export interface TriggerCreateOrUpdateTriggerHeaderParam {
  headers?: RawHttpHeadersInput & TriggerCreateOrUpdateTriggerHeaders;
}

export interface TriggerCreateOrUpdateTriggerMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type TriggerCreateOrUpdateTriggerParameters =
  TriggerCreateOrUpdateTriggerHeaderParam &
    TriggerCreateOrUpdateTriggerMediaTypesParam &
    TriggerCreateOrUpdateTriggerBodyParam &
    RequestParameters;

export interface TriggerGetTriggerHeaders {
  /** ETag of the trigger entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  "If-None-Match"?: string;
}

export interface TriggerGetTriggerHeaderParam {
  headers?: RawHttpHeadersInput & TriggerGetTriggerHeaders;
}

export type TriggerGetTriggerParameters = TriggerGetTriggerHeaderParam &
  RequestParameters;
export type TriggerDeleteTriggerParameters = RequestParameters;
export type TriggerSubscribeTriggerToEventsParameters = RequestParameters;
export type TriggerGetEventSubscriptionStatusParameters = RequestParameters;
export type TriggerUnsubscribeTriggerFromEventsParameters = RequestParameters;
export type TriggerStartTriggerParameters = RequestParameters;
export type TriggerStopTriggerParameters = RequestParameters;
export type TriggerRunRerunTriggerInstanceParameters = RequestParameters;
export type TriggerRunCancelTriggerInstanceParameters = RequestParameters;

export interface TriggerRunQueryTriggerRunsByWorkspaceBodyParam {
  /** Parameters to filter the pipeline run. */
  body: RunFilterParameters;
}

export interface TriggerRunQueryTriggerRunsByWorkspaceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type TriggerRunQueryTriggerRunsByWorkspaceParameters =
  TriggerRunQueryTriggerRunsByWorkspaceMediaTypesParam &
    TriggerRunQueryTriggerRunsByWorkspaceBodyParam &
    RequestParameters;
export type WorkspaceGetParameters = RequestParameters;
