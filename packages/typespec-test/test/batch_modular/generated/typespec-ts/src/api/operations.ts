// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  BatchNodeUserCreateOptions,
  BatchNodeUserUpdateOptions,
  BatchNode,
  NodeRebootOptions,
  NodeReimageOptions,
  NodeDisableSchedulingOptions,
  BatchNodeRemoteLoginSettingsResult,
  UploadBatchServiceLogsOptions,
  UploadBatchServiceLogsResult,
  BatchNodeListResult,
  NodeVMExtension,
  NodeVMExtensionList,
  NodeFileListResult,
  NodeFile,
  BatchTaskCreateOptions,
  BatchTaskListResult,
  BatchTask,
  BatchTaskCollection,
  TaskAddCollectionResult,
  BatchTaskListSubtasksResult,
  BatchJobSchedule,
  BatchJobScheduleUpdateOptions,
  BatchJobScheduleCreateOptions,
  BatchJobScheduleListResult,
  BatchCertificate,
  CertificateListResult,
  BatchJob,
  BatchJobUpdateOptions,
  BatchJobDisableOptions,
  BatchJobTerminateOptions,
  BatchJobCreateOptions,
  BatchJobListResult,
  BatchJobListPreparationAndReleaseTaskStatusResult,
  JobPreparationAndReleaseTaskExecutionInformation,
  TaskCountsResult,
  AccountListSupportedImagesResult,
  ImageInformation,
  PoolNodeCountsListResult,
  PoolNodeCounts,
  PoolListUsageMetricsResult,
  PoolUsageMetrics,
  BatchPoolCreateOptions,
  BatchPoolListResult,
  BatchPool,
  AutoScaleRun,
  BatchPoolUpdateOptions,
  BatchPoolEnableAutoScaleOptions,
  BatchPoolEvaluateAutoScaleOptions,
  BatchPoolResizeOptions,
  BatchPoolReplaceOptions,
  NodeRemoveOptions,
  ApplicationListResult,
  BatchApplication,
} from "../models/models.js";
import {
  serializeBatchNodeUserCreateOptions,
  serializeBatchNodeUserUpdateOptions,
  deserializeBatchNode,
  serializeNodeRebootOptions,
  serializeNodeReimageOptions,
  serializeNodeDisableSchedulingOptions,
  deserializeBatchNodeRemoteLoginSettingsResult,
  serializeUploadBatchServiceLogsOptions,
  deserializeUploadBatchServiceLogsResult,
  deserializeBatchNodeListResult,
  deserializeNodeVMExtension,
  deserializeNodeVMExtensionList,
  deserializeNodeFileListResult,
  serializeBatchTaskCreateOptions,
  deserializeBatchTaskListResult,
  serializeBatchTask,
  deserializeBatchTask,
  serializeBatchTaskCollection,
  deserializeTaskAddCollectionResult,
  deserializeBatchTaskListSubtasksResult,
  serializeBatchJobSchedule,
  deserializeBatchJobSchedule,
  serializeBatchJobScheduleUpdateOptions,
  serializeBatchJobScheduleCreateOptions,
  deserializeBatchJobScheduleListResult,
  serializeBatchCertificate,
  deserializeBatchCertificate,
  deserializeCertificateListResult,
  serializeBatchJob,
  deserializeBatchJob,
  serializeBatchJobUpdateOptions,
  serializeBatchJobDisableOptions,
  serializeBatchJobTerminateOptions,
  serializeBatchJobCreateOptions,
  deserializeBatchJobListResult,
  deserializeBatchJobListPreparationAndReleaseTaskStatusResult,
  deserializeTaskCountsResult,
  deserializeAccountListSupportedImagesResult,
  deserializePoolNodeCountsListResult,
  deserializePoolListUsageMetricsResult,
  serializeBatchPoolCreateOptions,
  deserializeBatchPoolListResult,
  deserializeBatchPool,
  deserializeAutoScaleRun,
  serializeBatchPoolUpdateOptions,
  serializeBatchPoolEnableAutoScaleOptions,
  serializeBatchPoolEvaluateAutoScaleOptions,
  serializeBatchPoolResizeOptions,
  serializeBatchPoolReplaceOptions,
  serializeNodeRemoveOptions,
  deserializeApplicationListResult,
  deserializeBatchApplication,
} from "../utils/serializeUtil.js";
import { PagedAsyncIterableIterator } from "../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "./pagingHelpers.js";
import {
  isUnexpected,
  BatchContext as Client,
  CancelCertificateDeletion204Response,
  CancelCertificateDeletionDefaultResponse,
  CreateCertificate201Response,
  CreateCertificateDefaultResponse,
  CreateJob201Response,
  CreateJobDefaultResponse,
  CreateJobSchedule201Response,
  CreateJobScheduleDefaultResponse,
  CreateNodeUser201Response,
  CreateNodeUserDefaultResponse,
  CreatePool201Response,
  CreatePoolDefaultResponse,
  CreateTask201Response,
  CreateTaskCollection200Response,
  CreateTaskCollectionDefaultResponse,
  CreateTaskDefaultResponse,
  DeleteCertificate202Response,
  DeleteCertificateDefaultResponse,
  DeleteJob202Response,
  DeleteJobDefaultResponse,
  DeleteJobSchedule202Response,
  DeleteJobScheduleDefaultResponse,
  DeleteNodeFile200Response,
  DeleteNodeFileDefaultResponse,
  DeleteNodeUser200Response,
  DeleteNodeUserDefaultResponse,
  DeletePool202Response,
  DeletePoolDefaultResponse,
  DeleteTask200Response,
  DeleteTaskDefaultResponse,
  DeleteTaskFile200Response,
  DeleteTaskFileDefaultResponse,
  DisableJob202Response,
  DisableJobDefaultResponse,
  DisableJobSchedule204Response,
  DisableJobScheduleDefaultResponse,
  DisableNodeScheduling200Response,
  DisableNodeSchedulingDefaultResponse,
  DisablePoolAutoScale200Response,
  DisablePoolAutoScaleDefaultResponse,
  EnableJob202Response,
  EnableJobDefaultResponse,
  EnableJobSchedule204Response,
  EnableJobScheduleDefaultResponse,
  EnableNodeScheduling200Response,
  EnableNodeSchedulingDefaultResponse,
  EnablePoolAutoScale200Response,
  EnablePoolAutoScaleDefaultResponse,
  EvaluatePoolAutoScale200Response,
  EvaluatePoolAutoScaleDefaultResponse,
  GetApplication200Response,
  GetApplicationDefaultResponse,
  GetCertificate200Response,
  GetCertificateDefaultResponse,
  GetJob200Response,
  GetJobDefaultResponse,
  GetJobSchedule200Response,
  GetJobScheduleDefaultResponse,
  GetJobTaskCounts200Response,
  GetJobTaskCountsDefaultResponse,
  GetNode200Response,
  GetNodeDefaultResponse,
  GetNodeExtension200Response,
  GetNodeExtensionDefaultResponse,
  GetNodeFile200Response,
  GetNodeFileDefaultResponse,
  GetNodeFileProperties200Response,
  GetNodeFilePropertiesDefaultResponse,
  GetNodeRemoteDesktopFile200Response,
  GetNodeRemoteDesktopFileDefaultResponse,
  GetNodeRemoteLoginSettings200Response,
  GetNodeRemoteLoginSettingsDefaultResponse,
  GetPool200Response,
  GetPoolDefaultResponse,
  GetTask200Response,
  GetTaskDefaultResponse,
  GetTaskFile200Response,
  GetTaskFileDefaultResponse,
  GetTaskFileProperties200Response,
  GetTaskFilePropertiesDefaultResponse,
  JobScheduleExists200Response,
  JobScheduleExists404Response,
  JobScheduleExistsDefaultResponse,
  ListApplications200Response,
  ListApplicationsDefaultResponse,
  ListCertificates200Response,
  ListCertificatesDefaultResponse,
  ListJobPreparationAndReleaseTaskStatus200Response,
  ListJobPreparationAndReleaseTaskStatusDefaultResponse,
  ListJobs200Response,
  ListJobSchedules200Response,
  ListJobSchedulesDefaultResponse,
  ListJobsDefaultResponse,
  ListJobsFromSchedule200Response,
  ListJobsFromScheduleDefaultResponse,
  ListNodeExtensions200Response,
  ListNodeExtensionsDefaultResponse,
  ListNodeFiles200Response,
  ListNodeFilesDefaultResponse,
  ListNodes200Response,
  ListNodesDefaultResponse,
  ListPoolNodeCounts200Response,
  ListPoolNodeCountsDefaultResponse,
  ListPools200Response,
  ListPoolsDefaultResponse,
  ListPoolUsageMetrics200Response,
  ListPoolUsageMetricsDefaultResponse,
  ListSubTasks200Response,
  ListSubTasksDefaultResponse,
  ListSupportedImages200Response,
  ListSupportedImagesDefaultResponse,
  ListTaskFiles200Response,
  ListTaskFilesDefaultResponse,
  ListTasks200Response,
  ListTasksDefaultResponse,
  PoolExists200Response,
  PoolExists404Response,
  PoolExistsDefaultResponse,
  ReactivateTask204Response,
  ReactivateTaskDefaultResponse,
  RebootNode202Response,
  RebootNodeDefaultResponse,
  ReimageNode202Response,
  ReimageNodeDefaultResponse,
  RemoveNodes202Response,
  RemoveNodesDefaultResponse,
  ReplaceJob200Response,
  ReplaceJobDefaultResponse,
  ReplaceJobSchedule200Response,
  ReplaceJobScheduleDefaultResponse,
  ReplaceNodeUser200Response,
  ReplaceNodeUserDefaultResponse,
  ReplacePoolProperties204Response,
  ReplacePoolPropertiesDefaultResponse,
  ReplaceTask200Response,
  ReplaceTaskDefaultResponse,
  ResizePool202Response,
  ResizePoolDefaultResponse,
  StopPoolResize202Response,
  StopPoolResizeDefaultResponse,
  TerminateJob202Response,
  TerminateJobDefaultResponse,
  TerminateJobSchedule202Response,
  TerminateJobScheduleDefaultResponse,
  TerminateTask204Response,
  TerminateTaskDefaultResponse,
  UpdateJob200Response,
  UpdateJobDefaultResponse,
  UpdateJobSchedule200Response,
  UpdateJobScheduleDefaultResponse,
  UpdatePool200Response,
  UpdatePoolDefaultResponse,
  UploadNodeLogs200Response,
  UploadNodeLogsDefaultResponse,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array } from "@azure/core-util";
import {
  ListApplicationsOptionalParams,
  GetApplicationOptionalParams,
  ListPoolUsageMetricsOptionalParams,
  CreatePoolOptionalParams,
  ListPoolsOptionalParams,
  DeletePoolOptionalParams,
  PoolExistsOptionalParams,
  GetPoolOptionalParams,
  UpdatePoolOptionalParams,
  DisablePoolAutoScaleOptionalParams,
  EnablePoolAutoScaleOptionalParams,
  EvaluatePoolAutoScaleOptionalParams,
  ResizePoolOptionalParams,
  StopPoolResizeOptionalParams,
  ReplacePoolPropertiesOptionalParams,
  RemoveNodesOptionalParams,
  ListSupportedImagesOptionalParams,
  ListPoolNodeCountsOptionalParams,
  DeleteJobOptionalParams,
  GetJobOptionalParams,
  UpdateJobOptionalParams,
  ReplaceJobOptionalParams,
  DisableJobOptionalParams,
  EnableJobOptionalParams,
  TerminateJobOptionalParams,
  CreateJobOptionalParams,
  ListJobsOptionalParams,
  ListJobsFromScheduleOptionalParams,
  ListJobPreparationAndReleaseTaskStatusOptionalParams,
  GetJobTaskCountsOptionalParams,
  CreateCertificateOptionalParams,
  ListCertificatesOptionalParams,
  CancelCertificateDeletionOptionalParams,
  DeleteCertificateOptionalParams,
  GetCertificateOptionalParams,
  JobScheduleExistsOptionalParams,
  DeleteJobScheduleOptionalParams,
  GetJobScheduleOptionalParams,
  UpdateJobScheduleOptionalParams,
  ReplaceJobScheduleOptionalParams,
  DisableJobScheduleOptionalParams,
  EnableJobScheduleOptionalParams,
  TerminateJobScheduleOptionalParams,
  CreateJobScheduleOptionalParams,
  ListJobSchedulesOptionalParams,
  CreateTaskOptionalParams,
  ListTasksOptionalParams,
  CreateTaskCollectionOptionalParams,
  DeleteTaskOptionalParams,
  GetTaskOptionalParams,
  ReplaceTaskOptionalParams,
  ListSubTasksOptionalParams,
  TerminateTaskOptionalParams,
  ReactivateTaskOptionalParams,
  DeleteTaskFileOptionalParams,
  GetTaskFileOptionalParams,
  GetTaskFilePropertiesOptionalParams,
  ListTaskFilesOptionalParams,
  CreateNodeUserOptionalParams,
  DeleteNodeUserOptionalParams,
  ReplaceNodeUserOptionalParams,
  GetNodeOptionalParams,
  RebootNodeOptionalParams,
  ReimageNodeOptionalParams,
  DisableNodeSchedulingOptionalParams,
  EnableNodeSchedulingOptionalParams,
  GetNodeRemoteLoginSettingsOptionalParams,
  GetNodeRemoteDesktopFileOptionalParams,
  UploadNodeLogsOptionalParams,
  ListNodesOptionalParams,
  GetNodeExtensionOptionalParams,
  ListNodeExtensionsOptionalParams,
  DeleteNodeFileOptionalParams,
  GetNodeFileOptionalParams,
  GetNodeFilePropertiesOptionalParams,
  ListNodeFilesOptionalParams,
} from "../models/options.js";

export function _listApplicationsSend(
  context: Client,
  options: ListApplicationsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ListApplications200Response | ListApplicationsDefaultResponse
> {
  return context
    .path("/applications")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.maxresults,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _listApplicationsDeserialize(
  result: ListApplications200Response | ListApplicationsDefaultResponse,
): Promise<ApplicationListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeApplicationListResult(result.body);
}

/**
 * This operation returns only Applications and versions that are available for
 * use on Compute Nodes; that is, that can be used in an Package reference. For
 * administrator information about applications and versions that are not yet
 * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
 * API.
 */
export function listApplications(
  context: Client,
  options: ListApplicationsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchApplication> {
  return buildPagedAsyncIterator(
    context,
    () => _listApplicationsSend(context, options),
    _listApplicationsDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _getApplicationSend(
  context: Client,
  applicationId: string,
  options: GetApplicationOptionalParams = { requestOptions: {} },
): StreamableMethod<GetApplication200Response | GetApplicationDefaultResponse> {
  return context
    .path("/applications/{applicationId}", applicationId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _getApplicationDeserialize(
  result: GetApplication200Response | GetApplicationDefaultResponse,
): Promise<BatchApplication> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchApplication(result.body);
}

/**
 * This operation returns only Applications and versions that are available for
 * use on Compute Nodes; that is, that can be used in an Package reference. For
 * administrator information about Applications and versions that are not yet
 * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
 * API.
 */
export async function getApplication(
  context: Client,
  applicationId: string,
  options: GetApplicationOptionalParams = { requestOptions: {} },
): Promise<BatchApplication> {
  const result = await _getApplicationSend(context, applicationId, options);
  return _getApplicationDeserialize(result);
}

export function _listPoolUsageMetricsSend(
  context: Client,
  options: ListPoolUsageMetricsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ListPoolUsageMetrics200Response | ListPoolUsageMetricsDefaultResponse
> {
  return context
    .path("/poolusagemetrics")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.maxresults,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: (options?.starttime).toISOString(),
      queryParameters: (options?.endtime).toISOString(),
      queryParameters: options?.$filter,
    });
}

export async function _listPoolUsageMetricsDeserialize(
  result: ListPoolUsageMetrics200Response | ListPoolUsageMetricsDefaultResponse,
): Promise<PoolListUsageMetricsResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializePoolListUsageMetricsResult(result.body);
}

/**
 * If you do not specify a $filter clause including a poolId, the response
 * includes all Pools that existed in the Account in the time range of the
 * returned aggregation intervals. If you do not specify a $filter clause
 * including a startTime or endTime these filters default to the start and end
 * times of the last aggregation interval currently available; that is, only the
 * last aggregation interval is returned.
 */
export function listPoolUsageMetrics(
  context: Client,
  options: ListPoolUsageMetricsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<PoolUsageMetrics> {
  return buildPagedAsyncIterator(
    context,
    () => _listPoolUsageMetricsSend(context, options),
    _listPoolUsageMetricsDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _createPoolSend(
  context: Client,
  body: BatchPoolCreateOptions,
  options: CreatePoolOptionalParams = { requestOptions: {} },
): StreamableMethod<CreatePool201Response | CreatePoolDefaultResponse> {
  return context
    .path("/pools")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchPoolCreateOptions(body),
    });
}

export async function _createPoolDeserialize(
  result: CreatePool201Response | CreatePoolDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * When naming Pools, avoid including sensitive information such as user names or
 * secret project names. This information may appear in telemetry logs accessible
 * to Microsoft Support engineers.
 */
export async function createPool(
  context: Client,
  body: BatchPoolCreateOptions,
  options: CreatePoolOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createPoolSend(context, body, options);
  return _createPoolDeserialize(result);
}

export function _listPoolsSend(
  context: Client,
  options: ListPoolsOptionalParams = { requestOptions: {} },
): StreamableMethod<ListPools200Response | ListPoolsDefaultResponse> {
  return context
    .path("/pools")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.maxresults,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$filter,
      queryParameters: options?.$select,
      queryParameters: options?.$expand,
    });
}

export async function _listPoolsDeserialize(
  result: ListPools200Response | ListPoolsDefaultResponse,
): Promise<BatchPoolListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchPoolListResult(result.body);
}

/** Lists all of the Pools in the specified Account. */
export function listPools(
  context: Client,
  options: ListPoolsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchPool> {
  return buildPagedAsyncIterator(
    context,
    () => _listPoolsSend(context, options),
    _listPoolsDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _deletePoolSend(
  context: Client,
  poolId: string,
  options: DeletePoolOptionalParams = { requestOptions: {} },
): StreamableMethod<DeletePool202Response | DeletePoolDefaultResponse> {
  return context
    .path("/pools/{poolId}", poolId)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _deletePoolDeserialize(
  result: DeletePool202Response | DeletePoolDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * When you request that a Pool be deleted, the following actions occur: the Pool
 * state is set to deleting; any ongoing resize operation on the Pool are stopped;
 * the Batch service starts resizing the Pool to zero Compute Nodes; any Tasks
 * running on existing Compute Nodes are terminated and requeued (as if a resize
 * Pool operation had been requested with the default requeue option); finally,
 * the Pool is removed from the system. Because running Tasks are requeued, the
 * user can rerun these Tasks by updating their Job to target a different Pool.
 * The Tasks can then run on the new Pool. If you want to override the requeue
 * behavior, then you should call resize Pool explicitly to shrink the Pool to
 * zero size before deleting the Pool. If you call an Update, Patch or Delete API
 * on a Pool in the deleting state, it will fail with HTTP status code 409 with
 * error code PoolBeingDeleted.
 */
export async function deletePool(
  context: Client,
  poolId: string,
  options: DeletePoolOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deletePoolSend(context, poolId, options);
  return _deletePoolDeserialize(result);
}

export function _poolExistsSend(
  context: Client,
  poolId: string,
  options: PoolExistsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  PoolExists200Response | PoolExists404Response | PoolExistsDefaultResponse
> {
  return context
    .path("/pools/{poolId}", poolId)
    .head({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _poolExistsDeserialize(
  result:
    | PoolExists200Response
    | PoolExists404Response
    | PoolExistsDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Gets basic properties of a Pool. */
export async function poolExists(
  context: Client,
  poolId: string,
  options: PoolExistsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _poolExistsSend(context, poolId, options);
  return _poolExistsDeserialize(result);
}

export function _getPoolSend(
  context: Client,
  poolId: string,
  options: GetPoolOptionalParams = { requestOptions: {} },
): StreamableMethod<GetPool200Response | GetPoolDefaultResponse> {
  return context
    .path("/pools/{poolId}", poolId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$select,
      queryParameters: options?.$expand,
    });
}

export async function _getPoolDeserialize(
  result: GetPool200Response | GetPoolDefaultResponse,
): Promise<BatchPool> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchPool(result.body);
}

/** Gets information about the specified Pool. */
export async function getPool(
  context: Client,
  poolId: string,
  options: GetPoolOptionalParams = { requestOptions: {} },
): Promise<BatchPool> {
  const result = await _getPoolSend(context, poolId, options);
  return _getPoolDeserialize(result);
}

export function _updatePoolSend(
  context: Client,
  poolId: string,
  body: BatchPoolUpdateOptions,
  options: UpdatePoolOptionalParams = { requestOptions: {} },
): StreamableMethod<UpdatePool200Response | UpdatePoolDefaultResponse> {
  return context
    .path("/pools/{poolId}", poolId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchPoolUpdateOptions(body),
    });
}

export async function _updatePoolDeserialize(
  result: UpdatePool200Response | UpdatePoolDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * This only replaces the Pool properties specified in the request. For example,
 * if the Pool has a StartTask associated with it, and a request does not specify
 * a StartTask element, then the Pool keeps the existing StartTask.
 */
export async function updatePool(
  context: Client,
  poolId: string,
  body: BatchPoolUpdateOptions,
  options: UpdatePoolOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _updatePoolSend(context, poolId, body, options);
  return _updatePoolDeserialize(result);
}

export function _disablePoolAutoScaleSend(
  context: Client,
  poolId: string,
  options: DisablePoolAutoScaleOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DisablePoolAutoScale200Response | DisablePoolAutoScaleDefaultResponse
> {
  return context
    .path("/pools/{poolId}/disableautoscale", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _disablePoolAutoScaleDeserialize(
  result: DisablePoolAutoScale200Response | DisablePoolAutoScaleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Disables automatic scaling for a Pool. */
export async function disablePoolAutoScale(
  context: Client,
  poolId: string,
  options: DisablePoolAutoScaleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _disablePoolAutoScaleSend(context, poolId, options);
  return _disablePoolAutoScaleDeserialize(result);
}

export function _enablePoolAutoScaleSend(
  context: Client,
  poolId: string,
  body: BatchPoolEnableAutoScaleOptions,
  options: EnablePoolAutoScaleOptionalParams = { requestOptions: {} },
): StreamableMethod<
  EnablePoolAutoScale200Response | EnablePoolAutoScaleDefaultResponse
> {
  return context
    .path("/pools/{poolId}/enableautoscale", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchPoolEnableAutoScaleOptions(body),
    });
}

export async function _enablePoolAutoScaleDeserialize(
  result: EnablePoolAutoScale200Response | EnablePoolAutoScaleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * You cannot enable automatic scaling on a Pool if a resize operation is in
 * progress on the Pool. If automatic scaling of the Pool is currently disabled,
 * you must specify a valid autoscale formula as part of the request. If automatic
 * scaling of the Pool is already enabled, you may specify a new autoscale formula
 * and/or a new evaluation interval. You cannot call this API for the same Pool
 * more than once every 30 seconds.
 */
export async function enablePoolAutoScale(
  context: Client,
  poolId: string,
  body: BatchPoolEnableAutoScaleOptions,
  options: EnablePoolAutoScaleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _enablePoolAutoScaleSend(context, poolId, body, options);
  return _enablePoolAutoScaleDeserialize(result);
}

export function _evaluatePoolAutoScaleSend(
  context: Client,
  poolId: string,
  body: BatchPoolEvaluateAutoScaleOptions,
  options: EvaluatePoolAutoScaleOptionalParams = { requestOptions: {} },
): StreamableMethod<
  EvaluatePoolAutoScale200Response | EvaluatePoolAutoScaleDefaultResponse
> {
  return context
    .path("/pools/{poolId}/evaluateautoscale", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchPoolEvaluateAutoScaleOptions(body),
    });
}

export async function _evaluatePoolAutoScaleDeserialize(
  result:
    | EvaluatePoolAutoScale200Response
    | EvaluatePoolAutoScaleDefaultResponse,
): Promise<AutoScaleRun> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeAutoScaleRun(result.body);
}

/**
 * This API is primarily for validating an autoscale formula, as it simply returns
 * the result without applying the formula to the Pool. The Pool must have auto
 * scaling enabled in order to evaluate a formula.
 */
export async function evaluatePoolAutoScale(
  context: Client,
  poolId: string,
  body: BatchPoolEvaluateAutoScaleOptions,
  options: EvaluatePoolAutoScaleOptionalParams = { requestOptions: {} },
): Promise<AutoScaleRun> {
  const result = await _evaluatePoolAutoScaleSend(
    context,
    poolId,
    body,
    options,
  );
  return _evaluatePoolAutoScaleDeserialize(result);
}

export function _resizePoolSend(
  context: Client,
  poolId: string,
  body: BatchPoolResizeOptions,
  options: ResizePoolOptionalParams = { requestOptions: {} },
): StreamableMethod<ResizePool202Response | ResizePoolDefaultResponse> {
  return context
    .path("/pools/{poolId}/resize", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchPoolResizeOptions(body),
    });
}

export async function _resizePoolDeserialize(
  result: ResizePool202Response | ResizePoolDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * You can only resize a Pool when its allocation state is steady. If the Pool is
 * already resizing, the request fails with status code 409. When you resize a
 * Pool, the Pool's allocation state changes from steady to resizing. You cannot
 * resize Pools which are configured for automatic scaling. If you try to do this,
 * the Batch service returns an error 409. If you resize a Pool downwards, the
 * Batch service chooses which Compute Nodes to remove. To remove specific Compute
 * Nodes, use the Pool remove Compute Nodes API instead.
 */
export async function resizePool(
  context: Client,
  poolId: string,
  body: BatchPoolResizeOptions,
  options: ResizePoolOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _resizePoolSend(context, poolId, body, options);
  return _resizePoolDeserialize(result);
}

export function _stopPoolResizeSend(
  context: Client,
  poolId: string,
  options: StopPoolResizeOptionalParams = { requestOptions: {} },
): StreamableMethod<StopPoolResize202Response | StopPoolResizeDefaultResponse> {
  return context
    .path("/pools/{poolId}/stopresize", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _stopPoolResizeDeserialize(
  result: StopPoolResize202Response | StopPoolResizeDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * This does not restore the Pool to its previous state before the resize
 * operation: it only stops any further changes being made, and the Pool maintains
 * its current state. After stopping, the Pool stabilizes at the number of Compute
 * Nodes it was at when the stop operation was done. During the stop operation,
 * the Pool allocation state changes first to stopping and then to steady. A
 * resize operation need not be an explicit resize Pool request; this API can also
 * be used to halt the initial sizing of the Pool when it is created.
 */
export async function stopPoolResize(
  context: Client,
  poolId: string,
  options: StopPoolResizeOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stopPoolResizeSend(context, poolId, options);
  return _stopPoolResizeDeserialize(result);
}

export function _replacePoolPropertiesSend(
  context: Client,
  poolId: string,
  body: BatchPoolReplaceOptions,
  options: ReplacePoolPropertiesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ReplacePoolProperties204Response | ReplacePoolPropertiesDefaultResponse
> {
  return context
    .path("/pools/{poolId}/updateproperties", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchPoolReplaceOptions(body),
    });
}

export async function _replacePoolPropertiesDeserialize(
  result:
    | ReplacePoolProperties204Response
    | ReplacePoolPropertiesDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * This fully replaces all the updatable properties of the Pool. For example, if
 * the Pool has a StartTask associated with it and if StartTask is not specified
 * with this request, then the Batch service will remove the existing StartTask.
 */
export async function replacePoolProperties(
  context: Client,
  poolId: string,
  body: BatchPoolReplaceOptions,
  options: ReplacePoolPropertiesOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _replacePoolPropertiesSend(
    context,
    poolId,
    body,
    options,
  );
  return _replacePoolPropertiesDeserialize(result);
}

export function _removeNodesSend(
  context: Client,
  poolId: string,
  body: NodeRemoveOptions,
  options: RemoveNodesOptionalParams = { requestOptions: {} },
): StreamableMethod<RemoveNodes202Response | RemoveNodesDefaultResponse> {
  return context
    .path("/pools/{poolId}/removenodes", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeNodeRemoveOptions(body),
    });
}

export async function _removeNodesDeserialize(
  result: RemoveNodes202Response | RemoveNodesDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * This operation can only run when the allocation state of the Pool is steady.
 * When this operation runs, the allocation state changes from steady to resizing.
 * Each request may remove up to 100 nodes.
 */
export async function removeNodes(
  context: Client,
  poolId: string,
  body: NodeRemoveOptions,
  options: RemoveNodesOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _removeNodesSend(context, poolId, body, options);
  return _removeNodesDeserialize(result);
}

export function _listSupportedImagesSend(
  context: Client,
  options: ListSupportedImagesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ListSupportedImages200Response | ListSupportedImagesDefaultResponse
> {
  return context
    .path("/supportedimages")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.maxresults,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$filter,
    });
}

export async function _listSupportedImagesDeserialize(
  result: ListSupportedImages200Response | ListSupportedImagesDefaultResponse,
): Promise<AccountListSupportedImagesResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeAccountListSupportedImagesResult(result.body);
}

/** Lists all Virtual Machine Images supported by the Azure Batch service. */
export function listSupportedImages(
  context: Client,
  options: ListSupportedImagesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ImageInformation> {
  return buildPagedAsyncIterator(
    context,
    () => _listSupportedImagesSend(context, options),
    _listSupportedImagesDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _listPoolNodeCountsSend(
  context: Client,
  options: ListPoolNodeCountsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ListPoolNodeCounts200Response | ListPoolNodeCountsDefaultResponse
> {
  return context
    .path("/nodecounts")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.maxresults,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$filter,
    });
}

export async function _listPoolNodeCountsDeserialize(
  result: ListPoolNodeCounts200Response | ListPoolNodeCountsDefaultResponse,
): Promise<PoolNodeCountsListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializePoolNodeCountsListResult(result.body);
}

/**
 * Gets the number of Compute Nodes in each state, grouped by Pool. Note that the
 * numbers returned may not always be up to date. If you need exact node counts,
 * use a list query.
 */
export function listPoolNodeCounts(
  context: Client,
  options: ListPoolNodeCountsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<PoolNodeCounts> {
  return buildPagedAsyncIterator(
    context,
    () => _listPoolNodeCountsSend(context, options),
    _listPoolNodeCountsDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _deleteJobSend(
  context: Client,
  jobId: string,
  options: DeleteJobOptionalParams = { requestOptions: {} },
): StreamableMethod<DeleteJob202Response | DeleteJobDefaultResponse> {
  return context
    .path("/jobs/{jobId}", jobId)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _deleteJobDeserialize(
  result: DeleteJob202Response | DeleteJobDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * Deleting a Job also deletes all Tasks that are part of that Job, and all Job
 * statistics. This also overrides the retention period for Task data; that is, if
 * the Job contains Tasks which are still retained on Compute Nodes, the Batch
 * services deletes those Tasks' working directories and all their contents.  When
 * a Delete Job request is received, the Batch service sets the Job to the
 * deleting state. All update operations on a Job that is in deleting state will
 * fail with status code 409 (Conflict), with additional information indicating
 * that the Job is being deleted.
 */
export async function deleteJob(
  context: Client,
  jobId: string,
  options: DeleteJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteJobSend(context, jobId, options);
  return _deleteJobDeserialize(result);
}

export function _getJobSend(
  context: Client,
  jobId: string,
  options: GetJobOptionalParams = { requestOptions: {} },
): StreamableMethod<GetJob200Response | GetJobDefaultResponse> {
  return context
    .path("/jobs/{jobId}", jobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$select,
      queryParameters: options?.$expand,
    });
}

export async function _getJobDeserialize(
  result: GetJob200Response | GetJobDefaultResponse,
): Promise<BatchJob> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchJob(result.body);
}

/** Gets information about the specified Job. */
export async function getJob(
  context: Client,
  jobId: string,
  options: GetJobOptionalParams = { requestOptions: {} },
): Promise<BatchJob> {
  const result = await _getJobSend(context, jobId, options);
  return _getJobDeserialize(result);
}

export function _updateJobSend(
  context: Client,
  jobId: string,
  body: BatchJobUpdateOptions,
  options: UpdateJobOptionalParams = { requestOptions: {} },
): StreamableMethod<UpdateJob200Response | UpdateJobDefaultResponse> {
  return context
    .path("/jobs/{jobId}", jobId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchJobUpdateOptions(body),
    });
}

export async function _updateJobDeserialize(
  result: UpdateJob200Response | UpdateJobDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * This replaces only the Job properties specified in the request. For example, if
 * the Job has constraints, and a request does not specify the constraints
 * element, then the Job keeps the existing constraints.
 */
export async function updateJob(
  context: Client,
  jobId: string,
  body: BatchJobUpdateOptions,
  options: UpdateJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _updateJobSend(context, jobId, body, options);
  return _updateJobDeserialize(result);
}

export function _replaceJobSend(
  context: Client,
  jobId: string,
  body: BatchJob,
  options: ReplaceJobOptionalParams = { requestOptions: {} },
): StreamableMethod<ReplaceJob200Response | ReplaceJobDefaultResponse> {
  return context
    .path("/jobs/{jobId}", jobId)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchJob(body),
    });
}

export async function _replaceJobDeserialize(
  result: ReplaceJob200Response | ReplaceJobDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * This fully replaces all the updatable properties of the Job. For example, if
 * the Job has constraints associated with it and if constraints is not specified
 * with this request, then the Batch service will remove the existing constraints.
 */
export async function replaceJob(
  context: Client,
  jobId: string,
  body: BatchJob,
  options: ReplaceJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _replaceJobSend(context, jobId, body, options);
  return _replaceJobDeserialize(result);
}

export function _disableJobSend(
  context: Client,
  jobId: string,
  body: BatchJobDisableOptions,
  options: DisableJobOptionalParams = { requestOptions: {} },
): StreamableMethod<DisableJob202Response | DisableJobDefaultResponse> {
  return context
    .path("/jobs/{jobId}/disable", jobId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchJobDisableOptions(body),
    });
}

export async function _disableJobDeserialize(
  result: DisableJob202Response | DisableJobDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * The Batch Service immediately moves the Job to the disabling state. Batch then
 * uses the disableTasks parameter to determine what to do with the currently
 * running Tasks of the Job. The Job remains in the disabling state until the
 * disable operation is completed and all Tasks have been dealt with according to
 * the disableTasks option; the Job then moves to the disabled state. No new Tasks
 * are started under the Job until it moves back to active state. If you try to
 * disable a Job that is in any state other than active, disabling, or disabled,
 * the request fails with status code 409.
 */
export async function disableJob(
  context: Client,
  jobId: string,
  body: BatchJobDisableOptions,
  options: DisableJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _disableJobSend(context, jobId, body, options);
  return _disableJobDeserialize(result);
}

export function _enableJobSend(
  context: Client,
  jobId: string,
  options: EnableJobOptionalParams = { requestOptions: {} },
): StreamableMethod<EnableJob202Response | EnableJobDefaultResponse> {
  return context
    .path("/jobs/{jobId}/enable", jobId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _enableJobDeserialize(
  result: EnableJob202Response | EnableJobDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * When you call this API, the Batch service sets a disabled Job to the enabling
 * state. After the this operation is completed, the Job moves to the active
 * state, and scheduling of new Tasks under the Job resumes. The Batch service
 * does not allow a Task to remain in the active state for more than 180 days.
 * Therefore, if you enable a Job containing active Tasks which were added more
 * than 180 days ago, those Tasks will not run.
 */
export async function enableJob(
  context: Client,
  jobId: string,
  options: EnableJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _enableJobSend(context, jobId, options);
  return _enableJobDeserialize(result);
}

export function _terminateJobSend(
  context: Client,
  jobId: string,
  body?: BatchJobTerminateOptions,
  options: TerminateJobOptionalParams = { requestOptions: {} },
): StreamableMethod<TerminateJob202Response | TerminateJobDefaultResponse> {
  return context
    .path("/jobs/{jobId}/terminate", jobId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
        a: [options?.requestOptions?.customHeaders , options?.ifMatch , options?.ifNoneMatch , options?.ifModifiedSince , options?.ifUnmodifiedSince],
        //  ...(
        //   [options?.requestOptions?.customHeaders , options?.ifMatch , options?.ifNoneMatch , options?.ifModifiedSince , options?.ifUnmodifiedSince].some(isDefined) 
        //   ? {headers: {
        //   ...(options?.requestOptions?.customHeaders ?? {}),
        //   ...(options?.ifMatch ? {ifMatch: options.ifMatch} : {}),
        //   ...(options?.ifNoneMatch ? {ifNoneMatch: options.ifNoneMatch} : {}),
        //   ...(options?.ifModifiedSince ? {ifModifiedSince: options.ifModifiedSince.toUTCString()} : {}),
        //   ...(options?.ifUnmodifiedSince ? {ifUnmodifiedSince: options.ifUnmodifiedSince.toUTCString()} : {}),
        // }} 
        // : {}),
        // ...([options?.apiVersion, options?.timeOutInSeconds].some(isDefined)
        //  ? {queryParameters: {...(options?.apiVersion ? {apiVersion: options.apiVersion} : {}), ...(options?.timeOutInSeconds ? {timeOutInSeconds: options.timeOutInSeconds} : {})}} 
        //  : {}),
      body: serializeBatchJobTerminateOptions(body),
    });
}

export async function _terminateJobDeserialize(
  result: TerminateJob202Response | TerminateJobDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * When a Terminate Job request is received, the Batch service sets the Job to the
 * terminating state. The Batch service then terminates any running Tasks
 * associated with the Job and runs any required Job release Tasks. Then the Job
 * moves into the completed state. If there are any Tasks in the Job in the active
 * state, they will remain in the active state. Once a Job is terminated, new
 * Tasks cannot be added and any remaining active Tasks will not be scheduled.
 */
export async function terminateJob(
  context: Client,
  jobId: string,
  body?: BatchJobTerminateOptions,
  options: TerminateJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _terminateJobSend(context, jobId, body, options);
  return _terminateJobDeserialize(result);
}

export function _createJobSend(
  context: Client,
  body: BatchJobCreateOptions,
  options: CreateJobOptionalParams = { requestOptions: {} },
): StreamableMethod<CreateJob201Response | CreateJobDefaultResponse> {
  return context
    .path("/jobs")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchJobCreateOptions(body),
    });
}

export async function _createJobDeserialize(
  result: CreateJob201Response | CreateJobDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * The Batch service supports two ways to control the work done as part of a Job.
 * In the first approach, the user specifies a Job Manager Task. The Batch service
 * launches this Task when it is ready to start the Job. The Job Manager Task
 * controls all other Tasks that run under this Job, by using the Task APIs. In
 * the second approach, the user directly controls the execution of Tasks under an
 * active Job, by using the Task APIs. Also note: when naming Jobs, avoid
 * including sensitive information such as user names or secret project names.
 * This information may appear in telemetry logs accessible to Microsoft Support
 * engineers.
 */
export async function createJob(
  context: Client,
  body: BatchJobCreateOptions,
  options: CreateJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createJobSend(context, body, options);
  return _createJobDeserialize(result);
}

export function _listJobsSend(
  context: Client,
  options: ListJobsOptionalParams = { requestOptions: {} },
): StreamableMethod<ListJobs200Response | ListJobsDefaultResponse> {
  return context
    .path("/jobs")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.maxresults,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$filter,
      queryParameters: options?.$select,
      queryParameters: options?.$expand,
    });
}

export async function _listJobsDeserialize(
  result: ListJobs200Response | ListJobsDefaultResponse,
): Promise<BatchJobListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchJobListResult(result.body);
}

/** Lists all of the Jobs in the specified Account. */
export function listJobs(
  context: Client,
  options: ListJobsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchJob> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobsSend(context, options),
    _listJobsDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _listJobsFromScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: ListJobsFromScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ListJobsFromSchedule200Response | ListJobsFromScheduleDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}/jobs", jobScheduleId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.maxresults,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$filter,
      queryParameters: options?.$select,
      queryParameters: options?.$expand,
    });
}

export async function _listJobsFromScheduleDeserialize(
  result: ListJobsFromSchedule200Response | ListJobsFromScheduleDefaultResponse,
): Promise<BatchJobListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchJobListResult(result.body);
}

/** Lists the Jobs that have been created under the specified Job Schedule. */
export function listJobsFromSchedule(
  context: Client,
  jobScheduleId: string,
  options: ListJobsFromScheduleOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchJob> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobsFromScheduleSend(context, jobScheduleId, options),
    _listJobsFromScheduleDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _listJobPreparationAndReleaseTaskStatusSend(
  context: Client,
  jobId: string,
  options: ListJobPreparationAndReleaseTaskStatusOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ListJobPreparationAndReleaseTaskStatus200Response
  | ListJobPreparationAndReleaseTaskStatusDefaultResponse
> {
  return context
    .path("/jobs/{jobId}/jobpreparationandreleasetaskstatus", jobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.maxresults,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$filter,
      queryParameters: options?.$select,
    });
}

export async function _listJobPreparationAndReleaseTaskStatusDeserialize(
  result:
    | ListJobPreparationAndReleaseTaskStatus200Response
    | ListJobPreparationAndReleaseTaskStatusDefaultResponse,
): Promise<BatchJobListPreparationAndReleaseTaskStatusResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchJobListPreparationAndReleaseTaskStatusResult(
    result.body,
  );
}

/**
 * This API returns the Job Preparation and Job Release Task status on all Compute
 * Nodes that have run the Job Preparation or Job Release Task. This includes
 * Compute Nodes which have since been removed from the Pool. If this API is
 * invoked on a Job which has no Job Preparation or Job Release Task, the Batch
 * service returns HTTP status code 409 (Conflict) with an error code of
 * JobPreparationTaskNotSpecified.
 */
export function listJobPreparationAndReleaseTaskStatus(
  context: Client,
  jobId: string,
  options: ListJobPreparationAndReleaseTaskStatusOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<JobPreparationAndReleaseTaskExecutionInformation> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobPreparationAndReleaseTaskStatusSend(context, jobId, options),
    _listJobPreparationAndReleaseTaskStatusDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _getJobTaskCountsSend(
  context: Client,
  jobId: string,
  options: GetJobTaskCountsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  GetJobTaskCounts200Response | GetJobTaskCountsDefaultResponse
> {
  return context
    .path("/jobs/{jobId}/taskcounts", jobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _getJobTaskCountsDeserialize(
  result: GetJobTaskCounts200Response | GetJobTaskCountsDefaultResponse,
): Promise<TaskCountsResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeTaskCountsResult(result.body);
}

/**
 * Task counts provide a count of the Tasks by active, running or completed Task
 * state, and a count of Tasks which succeeded or failed. Tasks in the preparing
 * state are counted as running. Note that the numbers returned may not always be
 * up to date. If you need exact task counts, use a list query.
 */
export async function getJobTaskCounts(
  context: Client,
  jobId: string,
  options: GetJobTaskCountsOptionalParams = { requestOptions: {} },
): Promise<TaskCountsResult> {
  const result = await _getJobTaskCountsSend(context, jobId, options);
  return _getJobTaskCountsDeserialize(result);
}

export function _createCertificateSend(
  context: Client,
  body: BatchCertificate,
  options: CreateCertificateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  CreateCertificate201Response | CreateCertificateDefaultResponse
> {
  return context
    .path("/certificates")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchCertificate(body),
    });
}

export async function _createCertificateDeserialize(
  result: CreateCertificate201Response | CreateCertificateDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Creates a Certificate to the specified Account. */
export async function createCertificate(
  context: Client,
  body: BatchCertificate,
  options: CreateCertificateOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createCertificateSend(context, body, options);
  return _createCertificateDeserialize(result);
}

export function _listCertificatesSend(
  context: Client,
  options: ListCertificatesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ListCertificates200Response | ListCertificatesDefaultResponse
> {
  return context
    .path("/certificates")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.maxresults,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$filter,
      queryParameters: options?.$select,
    });
}

export async function _listCertificatesDeserialize(
  result: ListCertificates200Response | ListCertificatesDefaultResponse,
): Promise<CertificateListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeCertificateListResult(result.body);
}

/** Lists all of the Certificates that have been added to the specified Account. */
export function listCertificates(
  context: Client,
  options: ListCertificatesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchCertificate> {
  return buildPagedAsyncIterator(
    context,
    () => _listCertificatesSend(context, options),
    _listCertificatesDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _cancelCertificateDeletionSend(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: CancelCertificateDeletionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CancelCertificateDeletion204Response
  | CancelCertificateDeletionDefaultResponse
> {
  return context
    .path(
      "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete",
      thumbprintAlgorithm,
      thumbprint,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _cancelCertificateDeletionDeserialize(
  result:
    | CancelCertificateDeletion204Response
    | CancelCertificateDeletionDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * If you try to delete a Certificate that is being used by a Pool or Compute
 * Node, the status of the Certificate changes to deleteFailed. If you decide that
 * you want to continue using the Certificate, you can use this operation to set
 * the status of the Certificate back to active. If you intend to delete the
 * Certificate, you do not need to run this operation after the deletion failed.
 * You must make sure that the Certificate is not being used by any resources, and
 * then you can try again to delete the Certificate.
 */
export async function cancelCertificateDeletion(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: CancelCertificateDeletionOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _cancelCertificateDeletionSend(
    context,
    thumbprintAlgorithm,
    thumbprint,
    options,
  );
  return _cancelCertificateDeletionDeserialize(result);
}

export function _deleteCertificateSend(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: DeleteCertificateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DeleteCertificate202Response | DeleteCertificateDefaultResponse
> {
  return context
    .path(
      "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})",
      thumbprintAlgorithm,
      thumbprint,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _deleteCertificateDeserialize(
  result: DeleteCertificate202Response | DeleteCertificateDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * You cannot delete a Certificate if a resource (Pool or Compute Node) is using
 * it. Before you can delete a Certificate, you must therefore make sure that the
 * Certificate is not associated with any existing Pools, the Certificate is not
 * installed on any Nodes (even if you remove a Certificate from a Pool, it is not
 * removed from existing Compute Nodes in that Pool until they restart), and no
 * running Tasks depend on the Certificate. If you try to delete a Certificate
 * that is in use, the deletion fails. The Certificate status changes to
 * deleteFailed. You can use Cancel Delete Certificate to set the status back to
 * active if you decide that you want to continue using the Certificate.
 */
export async function deleteCertificate(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: DeleteCertificateOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteCertificateSend(
    context,
    thumbprintAlgorithm,
    thumbprint,
    options,
  );
  return _deleteCertificateDeserialize(result);
}

export function _getCertificateSend(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: GetCertificateOptionalParams = { requestOptions: {} },
): StreamableMethod<GetCertificate200Response | GetCertificateDefaultResponse> {
  return context
    .path(
      "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})",
      thumbprintAlgorithm,
      thumbprint,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$select,
    });
}

export async function _getCertificateDeserialize(
  result: GetCertificate200Response | GetCertificateDefaultResponse,
): Promise<BatchCertificate> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchCertificate(result.body);
}

/** Gets information about the specified Certificate. */
export async function getCertificate(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: GetCertificateOptionalParams = { requestOptions: {} },
): Promise<BatchCertificate> {
  const result = await _getCertificateSend(
    context,
    thumbprintAlgorithm,
    thumbprint,
    options,
  );
  return _getCertificateDeserialize(result);
}

export function _jobScheduleExistsSend(
  context: Client,
  jobScheduleId: string,
  options: JobScheduleExistsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | JobScheduleExists200Response
  | JobScheduleExists404Response
  | JobScheduleExistsDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .head({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _jobScheduleExistsDeserialize(
  result:
    | JobScheduleExists200Response
    | JobScheduleExists404Response
    | JobScheduleExistsDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Checks the specified Job Schedule exists. */
export async function jobScheduleExists(
  context: Client,
  jobScheduleId: string,
  options: JobScheduleExistsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _jobScheduleExistsSend(context, jobScheduleId, options);
  return _jobScheduleExistsDeserialize(result);
}

export function _deleteJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: DeleteJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DeleteJobSchedule202Response | DeleteJobScheduleDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _deleteJobScheduleDeserialize(
  result: DeleteJobSchedule202Response | DeleteJobScheduleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * When you delete a Job Schedule, this also deletes all Jobs and Tasks under that
 * schedule. When Tasks are deleted, all the files in their working directories on
 * the Compute Nodes are also deleted (the retention period is ignored). The Job
 * Schedule statistics are no longer accessible once the Job Schedule is deleted,
 * though they are still counted towards Account lifetime statistics.
 */
export async function deleteJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: DeleteJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteJobScheduleSend(context, jobScheduleId, options);
  return _deleteJobScheduleDeserialize(result);
}

export function _getJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: GetJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod<GetJobSchedule200Response | GetJobScheduleDefaultResponse> {
  return context
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$select,
      queryParameters: options?.$expand,
    });
}

export async function _getJobScheduleDeserialize(
  result: GetJobSchedule200Response | GetJobScheduleDefaultResponse,
): Promise<BatchJobSchedule> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchJobSchedule(result.body);
}

/** Gets information about the specified Job Schedule. */
export async function getJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: GetJobScheduleOptionalParams = { requestOptions: {} },
): Promise<BatchJobSchedule> {
  const result = await _getJobScheduleSend(context, jobScheduleId, options);
  return _getJobScheduleDeserialize(result);
}

export function _updateJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  body: BatchJobScheduleUpdateOptions,
  options: UpdateJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod<
  UpdateJobSchedule200Response | UpdateJobScheduleDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchJobScheduleUpdateOptions(body),
    });
}

export async function _updateJobScheduleDeserialize(
  result: UpdateJobSchedule200Response | UpdateJobScheduleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * This replaces only the Job Schedule properties specified in the request. For
 * example, if the schedule property is not specified with this request, then the
 * Batch service will keep the existing schedule. Changes to a Job Schedule only
 * impact Jobs created by the schedule after the update has taken place; currently
 * running Jobs are unaffected.
 */
export async function updateJobSchedule(
  context: Client,
  jobScheduleId: string,
  body: BatchJobScheduleUpdateOptions,
  options: UpdateJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _updateJobScheduleSend(
    context,
    jobScheduleId,
    body,
    options,
  );
  return _updateJobScheduleDeserialize(result);
}

export function _replaceJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  body: BatchJobSchedule,
  options: ReplaceJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ReplaceJobSchedule200Response | ReplaceJobScheduleDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchJobSchedule(body),
    });
}

export async function _replaceJobScheduleDeserialize(
  result: ReplaceJobSchedule200Response | ReplaceJobScheduleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * This fully replaces all the updatable properties of the Job Schedule. For
 * example, if the schedule property is not specified with this request, then the
 * Batch service will remove the existing schedule. Changes to a Job Schedule only
 * impact Jobs created by the schedule after the update has taken place; currently
 * running Jobs are unaffected.
 */
export async function replaceJobSchedule(
  context: Client,
  jobScheduleId: string,
  body: BatchJobSchedule,
  options: ReplaceJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _replaceJobScheduleSend(
    context,
    jobScheduleId,
    body,
    options,
  );
  return _replaceJobScheduleDeserialize(result);
}

export function _disableJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: DisableJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DisableJobSchedule204Response | DisableJobScheduleDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}/disable", jobScheduleId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _disableJobScheduleDeserialize(
  result: DisableJobSchedule204Response | DisableJobScheduleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** No new Jobs will be created until the Job Schedule is enabled again. */
export async function disableJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: DisableJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _disableJobScheduleSend(context, jobScheduleId, options);
  return _disableJobScheduleDeserialize(result);
}

export function _enableJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: EnableJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod<
  EnableJobSchedule204Response | EnableJobScheduleDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}/enable", jobScheduleId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _enableJobScheduleDeserialize(
  result: EnableJobSchedule204Response | EnableJobScheduleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Enables a Job Schedule. */
export async function enableJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: EnableJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _enableJobScheduleSend(context, jobScheduleId, options);
  return _enableJobScheduleDeserialize(result);
}

export function _terminateJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: TerminateJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod<
  TerminateJobSchedule202Response | TerminateJobScheduleDefaultResponse
> {
  return context
    .path("/jobschedules/{jobScheduleId}/terminate", jobScheduleId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _terminateJobScheduleDeserialize(
  result: TerminateJobSchedule202Response | TerminateJobScheduleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Terminates a Job Schedule. */
export async function terminateJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: TerminateJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _terminateJobScheduleSend(
    context,
    jobScheduleId,
    options,
  );
  return _terminateJobScheduleDeserialize(result);
}

export function _createJobScheduleSend(
  context: Client,
  body: BatchJobScheduleCreateOptions,
  options: CreateJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod<
  CreateJobSchedule201Response | CreateJobScheduleDefaultResponse
> {
  return context
    .path("/jobschedules")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchJobScheduleCreateOptions(body),
    });
}

export async function _createJobScheduleDeserialize(
  result: CreateJobSchedule201Response | CreateJobScheduleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Creates a Job Schedule to the specified Account. */
export async function createJobSchedule(
  context: Client,
  body: BatchJobScheduleCreateOptions,
  options: CreateJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createJobScheduleSend(context, body, options);
  return _createJobScheduleDeserialize(result);
}

export function _listJobSchedulesSend(
  context: Client,
  options: ListJobSchedulesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ListJobSchedules200Response | ListJobSchedulesDefaultResponse
> {
  return context
    .path("/jobschedules")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.maxresults,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$filter,
      queryParameters: options?.$select,
      queryParameters: options?.$expand,
    });
}

export async function _listJobSchedulesDeserialize(
  result: ListJobSchedules200Response | ListJobSchedulesDefaultResponse,
): Promise<BatchJobScheduleListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchJobScheduleListResult(result.body);
}

/** Lists all of the Job Schedules in the specified Account. */
export function listJobSchedules(
  context: Client,
  options: ListJobSchedulesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchJobSchedule> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobSchedulesSend(context, options),
    _listJobSchedulesDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _createTaskSend(
  context: Client,
  jobId: string,
  body: BatchTaskCreateOptions,
  options: CreateTaskOptionalParams = { requestOptions: {} },
): StreamableMethod<CreateTask201Response | CreateTaskDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks", jobId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchTaskCreateOptions(body),
    });
}

export async function _createTaskDeserialize(
  result: CreateTask201Response | CreateTaskDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * The maximum lifetime of a Task from addition to completion is 180 days. If a
 * Task has not completed within 180 days of being added it will be terminated by
 * the Batch service and left in whatever state it was in at that time.
 */
export async function createTask(
  context: Client,
  jobId: string,
  body: BatchTaskCreateOptions,
  options: CreateTaskOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createTaskSend(context, jobId, body, options);
  return _createTaskDeserialize(result);
}

export function _listTasksSend(
  context: Client,
  jobId: string,
  options: ListTasksOptionalParams = { requestOptions: {} },
): StreamableMethod<ListTasks200Response | ListTasksDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks", jobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.maxresults,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$filter,
      queryParameters: options?.$select,
      queryParameters: options?.$expand,
    });
}

export async function _listTasksDeserialize(
  result: ListTasks200Response | ListTasksDefaultResponse,
): Promise<BatchTaskListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchTaskListResult(result.body);
}

/**
 * For multi-instance Tasks, information such as affinityId, executionInfo and
 * nodeInfo refer to the primary Task. Use the list subtasks API to retrieve
 * information about subtasks.
 */
export function listTasks(
  context: Client,
  jobId: string,
  options: ListTasksOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchTask> {
  return buildPagedAsyncIterator(
    context,
    () => _listTasksSend(context, jobId, options),
    _listTasksDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _createTaskCollectionSend(
  context: Client,
  jobId: string,
  collection: BatchTaskCollection,
  options: CreateTaskCollectionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  CreateTaskCollection200Response | CreateTaskCollectionDefaultResponse
> {
  return context
    .path("/jobs/{jobId}/addtaskcollection", jobId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchTaskCollection(collection),
    });
}

export async function _createTaskCollectionDeserialize(
  result: CreateTaskCollection200Response | CreateTaskCollectionDefaultResponse,
): Promise<TaskAddCollectionResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeTaskAddCollectionResult(result.body);
}

/**
 * Note that each Task must have a unique ID. The Batch service may not return the
 * results for each Task in the same order the Tasks were submitted in this
 * request. If the server times out or the connection is closed during the
 * request, the request may have been partially or fully processed, or not at all.
 * In such cases, the user should re-issue the request. Note that it is up to the
 * user to correctly handle failures when re-issuing a request. For example, you
 * should use the same Task IDs during a retry so that if the prior operation
 * succeeded, the retry will not create extra Tasks unexpectedly. If the response
 * contains any Tasks which failed to add, a client can retry the request. In a
 * retry, it is most efficient to resubmit only Tasks that failed to add, and to
 * omit Tasks that were successfully added on the first attempt. The maximum
 * lifetime of a Task from addition to completion is 180 days. If a Task has not
 * completed within 180 days of being added it will be terminated by the Batch
 * service and left in whatever state it was in at that time.
 */
export async function createTaskCollection(
  context: Client,
  jobId: string,
  collection: BatchTaskCollection,
  options: CreateTaskCollectionOptionalParams = { requestOptions: {} },
): Promise<TaskAddCollectionResult> {
  const result = await _createTaskCollectionSend(
    context,
    jobId,
    collection,
    options,
  );
  return _createTaskCollectionDeserialize(result);
}

export function _deleteTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: DeleteTaskOptionalParams = { requestOptions: {} },
): StreamableMethod<DeleteTask200Response | DeleteTaskDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}", jobId, taskId)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _deleteTaskDeserialize(
  result: DeleteTask200Response | DeleteTaskDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * When a Task is deleted, all of the files in its directory on the Compute Node
 * where it ran are also deleted (regardless of the retention time). For
 * multi-instance Tasks, the delete Task operation applies synchronously to the
 * primary task; subtasks and their files are then deleted asynchronously in the
 * background.
 */
export async function deleteTask(
  context: Client,
  jobId: string,
  taskId: string,
  options: DeleteTaskOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTaskSend(context, jobId, taskId, options);
  return _deleteTaskDeserialize(result);
}

export function _getTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: GetTaskOptionalParams = { requestOptions: {} },
): StreamableMethod<GetTask200Response | GetTaskDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}", jobId, taskId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$select,
      queryParameters: options?.$expand,
    });
}

export async function _getTaskDeserialize(
  result: GetTask200Response | GetTaskDefaultResponse,
): Promise<BatchTask> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchTask(result.body);
}

/**
 * For multi-instance Tasks, information such as affinityId, executionInfo and
 * nodeInfo refer to the primary Task. Use the list subtasks API to retrieve
 * information about subtasks.
 */
export async function getTask(
  context: Client,
  jobId: string,
  taskId: string,
  options: GetTaskOptionalParams = { requestOptions: {} },
): Promise<BatchTask> {
  const result = await _getTaskSend(context, jobId, taskId, options);
  return _getTaskDeserialize(result);
}

export function _replaceTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  body: BatchTask,
  options: ReplaceTaskOptionalParams = { requestOptions: {} },
): StreamableMethod<ReplaceTask200Response | ReplaceTaskDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}", jobId, taskId)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchTask(body),
    });
}

export async function _replaceTaskDeserialize(
  result: ReplaceTask200Response | ReplaceTaskDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Updates the properties of the specified Task. */
export async function replaceTask(
  context: Client,
  jobId: string,
  taskId: string,
  body: BatchTask,
  options: ReplaceTaskOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _replaceTaskSend(context, jobId, taskId, body, options);
  return _replaceTaskDeserialize(result);
}

export function _listSubTasksSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: ListSubTasksOptionalParams = { requestOptions: {} },
): StreamableMethod<ListSubTasks200Response | ListSubTasksDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}/subtasksinfo", jobId, taskId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$select,
    });
}

export async function _listSubTasksDeserialize(
  result: ListSubTasks200Response | ListSubTasksDefaultResponse,
): Promise<BatchTaskListSubtasksResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchTaskListSubtasksResult(result.body);
}

/** If the Task is not a multi-instance Task then this returns an empty collection. */
export async function listSubTasks(
  context: Client,
  jobId: string,
  taskId: string,
  options: ListSubTasksOptionalParams = { requestOptions: {} },
): Promise<BatchTaskListSubtasksResult> {
  const result = await _listSubTasksSend(context, jobId, taskId, options);
  return _listSubTasksDeserialize(result);
}

export function _terminateTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: TerminateTaskOptionalParams = { requestOptions: {} },
): StreamableMethod<TerminateTask204Response | TerminateTaskDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}/terminate", jobId, taskId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _terminateTaskDeserialize(
  result: TerminateTask204Response | TerminateTaskDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * When the Task has been terminated, it moves to the completed state. For
 * multi-instance Tasks, the terminate Task operation applies synchronously to the
 * primary task; subtasks are then terminated asynchronously in the background.
 */
export async function terminateTask(
  context: Client,
  jobId: string,
  taskId: string,
  options: TerminateTaskOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _terminateTaskSend(context, jobId, taskId, options);
  return _terminateTaskDeserialize(result);
}

export function _reactivateTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: ReactivateTaskOptionalParams = { requestOptions: {} },
): StreamableMethod<ReactivateTask204Response | ReactivateTaskDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}/reactivate", jobId, taskId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: options?.ifMatch,
      headers: options?.ifNoneMatch,
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _reactivateTaskDeserialize(
  result: ReactivateTask204Response | ReactivateTaskDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * Reactivation makes a Task eligible to be retried again up to its maximum retry
 * count. The Task's state is changed to active. As the Task is no longer in the
 * completed state, any previous exit code or failure information is no longer
 * available after reactivation. Each time a Task is reactivated, its retry count
 * is reset to 0. Reactivation will fail for Tasks that are not completed or that
 * previously completed successfully (with an exit code of 0). Additionally, it
 * will fail if the Job has completed (or is terminating or deleting).
 */
export async function reactivateTask(
  context: Client,
  jobId: string,
  taskId: string,
  options: ReactivateTaskOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _reactivateTaskSend(context, jobId, taskId, options);
  return _reactivateTaskDeserialize(result);
}

export function _deleteTaskFileSend(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: DeleteTaskFileOptionalParams = { requestOptions: {} },
): StreamableMethod<DeleteTaskFile200Response | DeleteTaskFileDefaultResponse> {
  return context
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.recursive,
    });
}

export async function _deleteTaskFileDeserialize(
  result: DeleteTaskFile200Response | DeleteTaskFileDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Deletes the specified Task file from the Compute Node where the Task ran. */
export async function deleteTaskFile(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: DeleteTaskFileOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTaskFileSend(
    context,
    jobId,
    taskId,
    filePath,
    options,
  );
  return _deleteTaskFileDeserialize(result);
}

export function _getTaskFileSend(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: GetTaskFileOptionalParams = { requestOptions: {} },
): StreamableMethod<GetTaskFile200Response | GetTaskFileDefaultResponse> {
  return context
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      headers: options?.ocpRange,
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _getTaskFileDeserialize(
  result: GetTaskFile200Response | GetTaskFileDefaultResponse,
): Promise<Uint8Array> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return typeof result.body === "string"
    ? stringToUint8Array(result.body, "base64")
    : result.body;
}

/** Returns the content of the specified Task file. */
export async function getTaskFile(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: GetTaskFileOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getTaskFileSend(
    context,
    jobId,
    taskId,
    filePath,
    options,
  );
  return _getTaskFileDeserialize(result);
}

export function _getTaskFilePropertiesSend(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: GetTaskFilePropertiesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  GetTaskFileProperties200Response | GetTaskFilePropertiesDefaultResponse
> {
  return context
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath,
    )
    .head({
      ...operationOptionsToRequestParameters(options),
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _getTaskFilePropertiesDeserialize(
  result:
    | GetTaskFileProperties200Response
    | GetTaskFilePropertiesDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Gets the properties of the specified Task file. */
export async function getTaskFileProperties(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: GetTaskFilePropertiesOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getTaskFilePropertiesSend(
    context,
    jobId,
    taskId,
    filePath,
    options,
  );
  return _getTaskFilePropertiesDeserialize(result);
}

export function _listTaskFilesSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: ListTaskFilesOptionalParams = { requestOptions: {} },
): StreamableMethod<ListTaskFiles200Response | ListTaskFilesDefaultResponse> {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}/files", jobId, taskId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.maxresults,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$filter,
      queryParameters: options?.recursive,
    });
}

export async function _listTaskFilesDeserialize(
  result: ListTaskFiles200Response | ListTaskFilesDefaultResponse,
): Promise<NodeFileListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeNodeFileListResult(result.body);
}

/** Lists the files in a Task's directory on its Compute Node. */
export function listTaskFiles(
  context: Client,
  jobId: string,
  taskId: string,
  options: ListTaskFilesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<NodeFile> {
  return buildPagedAsyncIterator(
    context,
    () => _listTaskFilesSend(context, jobId, taskId, options),
    _listTaskFilesDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _createNodeUserSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body: BatchNodeUserCreateOptions,
  options: CreateNodeUserOptionalParams = { requestOptions: {} },
): StreamableMethod<CreateNodeUser201Response | CreateNodeUserDefaultResponse> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/users", poolId, nodeId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchNodeUserCreateOptions(body),
    });
}

export async function _createNodeUserDeserialize(
  result: CreateNodeUser201Response | CreateNodeUserDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * You can add a user Account to a Compute Node only when it is in the idle or
 * running state.
 */
export async function createNodeUser(
  context: Client,
  poolId: string,
  nodeId: string,
  body: BatchNodeUserCreateOptions,
  options: CreateNodeUserOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createNodeUserSend(
    context,
    poolId,
    nodeId,
    body,
    options,
  );
  return _createNodeUserDeserialize(result);
}

export function _deleteNodeUserSend(
  context: Client,
  poolId: string,
  nodeId: string,
  userName: string,
  options: DeleteNodeUserOptionalParams = { requestOptions: {} },
): StreamableMethod<DeleteNodeUser200Response | DeleteNodeUserDefaultResponse> {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/users/{userName}",
      poolId,
      nodeId,
      userName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _deleteNodeUserDeserialize(
  result: DeleteNodeUser200Response | DeleteNodeUserDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * You can delete a user Account to a Compute Node only when it is in the idle or
 * running state.
 */
export async function deleteNodeUser(
  context: Client,
  poolId: string,
  nodeId: string,
  userName: string,
  options: DeleteNodeUserOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteNodeUserSend(
    context,
    poolId,
    nodeId,
    userName,
    options,
  );
  return _deleteNodeUserDeserialize(result);
}

export function _replaceNodeUserSend(
  context: Client,
  poolId: string,
  nodeId: string,
  userName: string,
  body: BatchNodeUserUpdateOptions,
  options: ReplaceNodeUserOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ReplaceNodeUser200Response | ReplaceNodeUserDefaultResponse
> {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/users/{userName}",
      poolId,
      nodeId,
      userName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeBatchNodeUserUpdateOptions(body),
    });
}

export async function _replaceNodeUserDeserialize(
  result: ReplaceNodeUser200Response | ReplaceNodeUserDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * This operation replaces of all the updatable properties of the Account. For
 * example, if the expiryTime element is not specified, the current value is
 * replaced with the default value, not left unmodified. You can update a user
 * Account on a Compute Node only when it is in the idle or running state.
 */
export async function replaceNodeUser(
  context: Client,
  poolId: string,
  nodeId: string,
  userName: string,
  body: BatchNodeUserUpdateOptions,
  options: ReplaceNodeUserOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _replaceNodeUserSend(
    context,
    poolId,
    nodeId,
    userName,
    body,
    options,
  );
  return _replaceNodeUserDeserialize(result);
}

export function _getNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: GetNodeOptionalParams = { requestOptions: {} },
): StreamableMethod<GetNode200Response | GetNodeDefaultResponse> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}", poolId, nodeId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$select,
    });
}

export async function _getNodeDeserialize(
  result: GetNode200Response | GetNodeDefaultResponse,
): Promise<BatchNode> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchNode(result.body);
}

/** Gets information about the specified Compute Node. */
export async function getNode(
  context: Client,
  poolId: string,
  nodeId: string,
  options: GetNodeOptionalParams = { requestOptions: {} },
): Promise<BatchNode> {
  const result = await _getNodeSend(context, poolId, nodeId, options);
  return _getNodeDeserialize(result);
}

export function _rebootNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body?: NodeRebootOptions,
  options: RebootNodeOptionalParams = { requestOptions: {} },
): StreamableMethod<RebootNode202Response | RebootNodeDefaultResponse> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/reboot", poolId, nodeId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeNodeRebootOptions(body),
    });
}

export async function _rebootNodeDeserialize(
  result: RebootNode202Response | RebootNodeDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** You can restart a Compute Node only if it is in an idle or running state. */
export async function rebootNode(
  context: Client,
  poolId: string,
  nodeId: string,
  body?: NodeRebootOptions,
  options: RebootNodeOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _rebootNodeSend(context, poolId, nodeId, body, options);
  return _rebootNodeDeserialize(result);
}

export function _reimageNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body?: NodeReimageOptions,
  options: ReimageNodeOptionalParams = { requestOptions: {} },
): StreamableMethod<ReimageNode202Response | ReimageNodeDefaultResponse> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/reimage", poolId, nodeId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeNodeReimageOptions(body),
    });
}

export async function _reimageNodeDeserialize(
  result: ReimageNode202Response | ReimageNodeDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * You can reinstall the operating system on a Compute Node only if it is in an
 * idle or running state. This API can be invoked only on Pools created with the
 * cloud service configuration property.
 */
export async function reimageNode(
  context: Client,
  poolId: string,
  nodeId: string,
  body?: NodeReimageOptions,
  options: ReimageNodeOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _reimageNodeSend(context, poolId, nodeId, body, options);
  return _reimageNodeDeserialize(result);
}

export function _disableNodeSchedulingSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body?: NodeDisableSchedulingOptions,
  options: DisableNodeSchedulingOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DisableNodeScheduling200Response | DisableNodeSchedulingDefaultResponse
> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/disablescheduling", poolId, nodeId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeNodeDisableSchedulingOptions(body),
    });
}

export async function _disableNodeSchedulingDeserialize(
  result:
    | DisableNodeScheduling200Response
    | DisableNodeSchedulingDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * You can disable Task scheduling on a Compute Node only if its current
 * scheduling state is enabled.
 */
export async function disableNodeScheduling(
  context: Client,
  poolId: string,
  nodeId: string,
  body?: NodeDisableSchedulingOptions,
  options: DisableNodeSchedulingOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _disableNodeSchedulingSend(
    context,
    poolId,
    nodeId,
    body,
    options,
  );
  return _disableNodeSchedulingDeserialize(result);
}

export function _enableNodeSchedulingSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: EnableNodeSchedulingOptionalParams = { requestOptions: {} },
): StreamableMethod<
  EnableNodeScheduling200Response | EnableNodeSchedulingDefaultResponse
> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/enablescheduling", poolId, nodeId)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _enableNodeSchedulingDeserialize(
  result: EnableNodeScheduling200Response | EnableNodeSchedulingDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/**
 * You can enable Task scheduling on a Compute Node only if its current scheduling
 * state is disabled
 */
export async function enableNodeScheduling(
  context: Client,
  poolId: string,
  nodeId: string,
  options: EnableNodeSchedulingOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _enableNodeSchedulingSend(
    context,
    poolId,
    nodeId,
    options,
  );
  return _enableNodeSchedulingDeserialize(result);
}

export function _getNodeRemoteLoginSettingsSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: GetNodeRemoteLoginSettingsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | GetNodeRemoteLoginSettings200Response
  | GetNodeRemoteLoginSettingsDefaultResponse
> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/remoteloginsettings", poolId, nodeId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _getNodeRemoteLoginSettingsDeserialize(
  result:
    | GetNodeRemoteLoginSettings200Response
    | GetNodeRemoteLoginSettingsDefaultResponse,
): Promise<BatchNodeRemoteLoginSettingsResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchNodeRemoteLoginSettingsResult(result.body);
}

/**
 * Before you can remotely login to a Compute Node using the remote login
 * settings, you must create a user Account on the Compute Node. This API can be
 * invoked only on Pools created with the virtual machine configuration property.
 * For Pools created with a cloud service configuration, see the GetRemoteDesktop
 * API.
 */
export async function getNodeRemoteLoginSettings(
  context: Client,
  poolId: string,
  nodeId: string,
  options: GetNodeRemoteLoginSettingsOptionalParams = { requestOptions: {} },
): Promise<BatchNodeRemoteLoginSettingsResult> {
  const result = await _getNodeRemoteLoginSettingsSend(
    context,
    poolId,
    nodeId,
    options,
  );
  return _getNodeRemoteLoginSettingsDeserialize(result);
}

export function _getNodeRemoteDesktopFileSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: GetNodeRemoteDesktopFileOptionalParams = { requestOptions: {} },
): StreamableMethod<
  GetNodeRemoteDesktopFile200Response | GetNodeRemoteDesktopFileDefaultResponse
> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/rdp", poolId, nodeId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _getNodeRemoteDesktopFileDeserialize(
  result:
    | GetNodeRemoteDesktopFile200Response
    | GetNodeRemoteDesktopFileDefaultResponse,
): Promise<Uint8Array> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return typeof result.body === "string"
    ? stringToUint8Array(result.body, "base64")
    : result.body;
}

/**
 * Before you can access a Compute Node by using the RDP file, you must create a
 * user Account on the Compute Node. This API can only be invoked on Pools created
 * with a cloud service configuration. For Pools created with a virtual machine
 * configuration, see the GetRemoteLoginSettings API.
 */
export async function getNodeRemoteDesktopFile(
  context: Client,
  poolId: string,
  nodeId: string,
  options: GetNodeRemoteDesktopFileOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getNodeRemoteDesktopFileSend(
    context,
    poolId,
    nodeId,
    options,
  );
  return _getNodeRemoteDesktopFileDeserialize(result);
}

export function _uploadNodeLogsSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body: UploadBatchServiceLogsOptions,
  options: UploadNodeLogsOptionalParams = { requestOptions: {} },
): StreamableMethod<UploadNodeLogs200Response | UploadNodeLogsDefaultResponse> {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/uploadbatchservicelogs",
      poolId,
      nodeId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      body: serializeUploadBatchServiceLogsOptions(body),
    });
}

export async function _uploadNodeLogsDeserialize(
  result: UploadNodeLogs200Response | UploadNodeLogsDefaultResponse,
): Promise<UploadBatchServiceLogsResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeUploadBatchServiceLogsResult(result.body);
}

/**
 * This is for gathering Azure Batch service log files in an automated fashion
 * from Compute Nodes if you are experiencing an error and wish to escalate to
 * Azure support. The Azure Batch service log files should be shared with Azure
 * support to aid in debugging issues with the Batch service.
 */
export async function uploadNodeLogs(
  context: Client,
  poolId: string,
  nodeId: string,
  body: UploadBatchServiceLogsOptions,
  options: UploadNodeLogsOptionalParams = { requestOptions: {} },
): Promise<UploadBatchServiceLogsResult> {
  const result = await _uploadNodeLogsSend(
    context,
    poolId,
    nodeId,
    body,
    options,
  );
  return _uploadNodeLogsDeserialize(result);
}

export function _listNodesSend(
  context: Client,
  poolId: string,
  options: ListNodesOptionalParams = { requestOptions: {} },
): StreamableMethod<ListNodes200Response | ListNodesDefaultResponse> {
  return context
    .path("/pools/{poolId}/nodes", poolId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.maxresults,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$filter,
      queryParameters: options?.$select,
    });
}

export async function _listNodesDeserialize(
  result: ListNodes200Response | ListNodesDefaultResponse,
): Promise<BatchNodeListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeBatchNodeListResult(result.body);
}

/** Lists the Compute Nodes in the specified Pool. */
export function listNodes(
  context: Client,
  poolId: string,
  options: ListNodesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchNode> {
  return buildPagedAsyncIterator(
    context,
    () => _listNodesSend(context, poolId, options),
    _listNodesDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _getNodeExtensionSend(
  context: Client,
  poolId: string,
  nodeId: string,
  extensionName: string,
  options: GetNodeExtensionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  GetNodeExtension200Response | GetNodeExtensionDefaultResponse
> {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/extensions/{extensionName}",
      poolId,
      nodeId,
      extensionName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$select,
    });
}

export async function _getNodeExtensionDeserialize(
  result: GetNodeExtension200Response | GetNodeExtensionDefaultResponse,
): Promise<NodeVMExtension> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeNodeVMExtension(result.body);
}

/** Gets information about the specified Compute Node Extension. */
export async function getNodeExtension(
  context: Client,
  poolId: string,
  nodeId: string,
  extensionName: string,
  options: GetNodeExtensionOptionalParams = { requestOptions: {} },
): Promise<NodeVMExtension> {
  const result = await _getNodeExtensionSend(
    context,
    poolId,
    nodeId,
    extensionName,
    options,
  );
  return _getNodeExtensionDeserialize(result);
}

export function _listNodeExtensionsSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ListNodeExtensionsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ListNodeExtensions200Response | ListNodeExtensionsDefaultResponse
> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/extensions", poolId, nodeId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.maxresults,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$select,
    });
}

export async function _listNodeExtensionsDeserialize(
  result: ListNodeExtensions200Response | ListNodeExtensionsDefaultResponse,
): Promise<NodeVMExtensionList> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeNodeVMExtensionList(result.body);
}

/** Lists the Compute Nodes Extensions in the specified Pool. */
export function listNodeExtensions(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ListNodeExtensionsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<NodeVMExtension> {
  return buildPagedAsyncIterator(
    context,
    () => _listNodeExtensionsSend(context, poolId, nodeId, options),
    _listNodeExtensionsDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _deleteNodeFileSend(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: DeleteNodeFileOptionalParams = { requestOptions: {} },
): StreamableMethod<DeleteNodeFile200Response | DeleteNodeFileDefaultResponse> {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
      poolId,
      nodeId,
      filePath,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.recursive,
    });
}

export async function _deleteNodeFileDeserialize(
  result: DeleteNodeFile200Response | DeleteNodeFileDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Deletes the specified file from the Compute Node. */
export async function deleteNodeFile(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: DeleteNodeFileOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteNodeFileSend(
    context,
    poolId,
    nodeId,
    filePath,
    options,
  );
  return _deleteNodeFileDeserialize(result);
}

export function _getNodeFileSend(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: GetNodeFileOptionalParams = { requestOptions: {} },
): StreamableMethod<GetNodeFile200Response | GetNodeFileDefaultResponse> {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
      poolId,
      nodeId,
      filePath,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      headers: options?.ocpRange,
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _getNodeFileDeserialize(
  result: GetNodeFile200Response | GetNodeFileDefaultResponse,
): Promise<Uint8Array> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return typeof result.body === "string"
    ? stringToUint8Array(result.body, "base64")
    : result.body;
}

/** Returns the content of the specified Compute Node file. */
export async function getNodeFile(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: GetNodeFileOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getNodeFileSend(
    context,
    poolId,
    nodeId,
    filePath,
    options,
  );
  return _getNodeFileDeserialize(result);
}

export function _getNodeFilePropertiesSend(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: GetNodeFilePropertiesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  GetNodeFileProperties200Response | GetNodeFilePropertiesDefaultResponse
> {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
      poolId,
      nodeId,
      filePath,
    )
    .head({
      ...operationOptionsToRequestParameters(options),
      headers: (options?.ifModifiedSince).toUTCString(),
      headers: (options?.ifUnmodifiedSince).toUTCString(),
      queryParameters: options?.apiVersion,
      queryParameters: options?.timeOutInSeconds,
    });
}

export async function _getNodeFilePropertiesDeserialize(
  result:
    | GetNodeFileProperties200Response
    | GetNodeFilePropertiesDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return result.body;
}

/** Gets the properties of the specified Compute Node file. */
export async function getNodeFileProperties(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: GetNodeFilePropertiesOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getNodeFilePropertiesSend(
    context,
    poolId,
    nodeId,
    filePath,
    options,
  );
  return _getNodeFilePropertiesDeserialize(result);
}

export function _listNodeFilesSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ListNodeFilesOptionalParams = { requestOptions: {} },
): StreamableMethod<ListNodeFiles200Response | ListNodeFilesDefaultResponse> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/files", poolId, nodeId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.apiVersion,
      queryParameters: options?.maxresults,
      queryParameters: options?.timeOutInSeconds,
      queryParameters: options?.$filter,
      queryParameters: options?.recursive,
    });
}

export async function _listNodeFilesDeserialize(
  result: ListNodeFiles200Response | ListNodeFilesDefaultResponse,
): Promise<NodeFileListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeNodeFileListResult(result.body);
}

/** Lists all of the files in Task directories on the specified Compute Node. */
export function listNodeFiles(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ListNodeFilesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<NodeFile> {
  return buildPagedAsyncIterator(
    context,
    () => _listNodeFilesSend(context, poolId, nodeId, options),
    _listNodeFilesDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}
