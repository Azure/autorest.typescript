// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createBatch,
  BatchContext,
  BatchClientOptionalParams,
} from "./api/index.js";
import {
  listNodeFiles,
  getNodeFileProperties,
  getNodeFile,
  deleteNodeFile,
  listNodeExtensions,
  getNodeExtension,
  listNodes,
  uploadNodeLogs,
  getNodeRemoteDesktopFile,
  getNodeRemoteLoginSettings,
  enableNodeScheduling,
  disableNodeScheduling,
  reimageNode,
  rebootNode,
  getNode,
  replaceNodeUser,
  deleteNodeUser,
  createNodeUser,
  listTaskFiles,
  getTaskFileProperties,
  getTaskFile,
  deleteTaskFile,
  reactivateTask,
  terminateTask,
  listSubTasks,
  replaceTask,
  getTask,
  deleteTask,
  createTaskCollection,
  listTasks,
  createTask,
  listJobSchedules,
  createJobSchedule,
  terminateJobSchedule,
  enableJobSchedule,
  disableJobSchedule,
  replaceJobSchedule,
  updateJobSchedule,
  getJobSchedule,
  deleteJobSchedule,
  jobScheduleExists,
  getCertificate,
  deleteCertificate,
  cancelCertificateDeletion,
  listCertificates,
  createCertificate,
  getJobTaskCounts,
  listJobPreparationAndReleaseTaskStatus,
  listJobsFromSchedule,
  listJobs,
  createJob,
  terminateJob,
  enableJob,
  disableJob,
  replaceJob,
  updateJob,
  getJob,
  deleteJob,
  listPoolNodeCounts,
  listSupportedImages,
  removeNodes,
  replacePoolProperties,
  stopPoolResize,
  resizePool,
  evaluatePoolAutoScale,
  enablePoolAutoScale,
  disablePoolAutoScale,
  updatePool,
  getPool,
  poolExists,
  deletePool,
  listPools,
  createPool,
  listPoolUsageMetrics,
  getApplication,
  listApplications,
} from "./api/operations.js";
import {
  ListNodeFilesOptionalParams,
  GetNodeFilePropertiesOptionalParams,
  GetNodeFileOptionalParams,
  DeleteNodeFileOptionalParams,
  ListNodeExtensionsOptionalParams,
  GetNodeExtensionOptionalParams,
  ListNodesOptionalParams,
  UploadNodeLogsOptionalParams,
  GetNodeRemoteDesktopFileOptionalParams,
  GetNodeRemoteLoginSettingsOptionalParams,
  EnableNodeSchedulingOptionalParams,
  DisableNodeSchedulingOptionalParams,
  ReimageNodeOptionalParams,
  RebootNodeOptionalParams,
  GetNodeOptionalParams,
  ReplaceNodeUserOptionalParams,
  DeleteNodeUserOptionalParams,
  CreateNodeUserOptionalParams,
  ListTaskFilesOptionalParams,
  GetTaskFilePropertiesOptionalParams,
  GetTaskFileOptionalParams,
  DeleteTaskFileOptionalParams,
  ReactivateTaskOptionalParams,
  TerminateTaskOptionalParams,
  ListSubTasksOptionalParams,
  ReplaceTaskOptionalParams,
  GetTaskOptionalParams,
  DeleteTaskOptionalParams,
  CreateTaskCollectionOptionalParams,
  ListTasksOptionalParams,
  CreateTaskOptionalParams,
  ListJobSchedulesOptionalParams,
  CreateJobScheduleOptionalParams,
  TerminateJobScheduleOptionalParams,
  EnableJobScheduleOptionalParams,
  DisableJobScheduleOptionalParams,
  ReplaceJobScheduleOptionalParams,
  UpdateJobScheduleOptionalParams,
  GetJobScheduleOptionalParams,
  DeleteJobScheduleOptionalParams,
  JobScheduleExistsOptionalParams,
  GetCertificateOptionalParams,
  DeleteCertificateOptionalParams,
  CancelCertificateDeletionOptionalParams,
  ListCertificatesOptionalParams,
  CreateCertificateOptionalParams,
  GetJobTaskCountsOptionalParams,
  ListJobPreparationAndReleaseTaskStatusOptionalParams,
  ListJobsFromScheduleOptionalParams,
  ListJobsOptionalParams,
  CreateJobOptionalParams,
  TerminateJobOptionalParams,
  EnableJobOptionalParams,
  DisableJobOptionalParams,
  ReplaceJobOptionalParams,
  UpdateJobOptionalParams,
  GetJobOptionalParams,
  DeleteJobOptionalParams,
  ListPoolNodeCountsOptionalParams,
  ListSupportedImagesOptionalParams,
  RemoveNodesOptionalParams,
  ReplacePoolPropertiesOptionalParams,
  StopPoolResizeOptionalParams,
  ResizePoolOptionalParams,
  EvaluatePoolAutoScaleOptionalParams,
  EnablePoolAutoScaleOptionalParams,
  DisablePoolAutoScaleOptionalParams,
  UpdatePoolOptionalParams,
  GetPoolOptionalParams,
  PoolExistsOptionalParams,
  DeletePoolOptionalParams,
  ListPoolsOptionalParams,
  CreatePoolOptionalParams,
  ListPoolUsageMetricsOptionalParams,
  GetApplicationOptionalParams,
  ListApplicationsOptionalParams,
} from "./api/options.js";
import {
  BatchApplication,
  PoolUsageMetrics,
  BatchPoolCreateOptions,
  BatchPool,
  AutoScaleRun,
  BatchPoolUpdateOptions,
  BatchPoolEnableAutoScaleOptions,
  BatchPoolEvaluateAutoScaleOptions,
  BatchPoolResizeOptions,
  BatchPoolReplaceOptions,
  NodeRemoveOptions,
  ImageInformation,
  PoolNodeCounts,
  BatchJob,
  BatchJobUpdateOptions,
  BatchJobDisableOptions,
  BatchJobCreateOptions,
  JobPreparationAndReleaseTaskExecutionInformation,
  TaskCountsResult,
  BatchCertificate,
  BatchJobSchedule,
  BatchJobScheduleUpdateOptions,
  BatchJobScheduleCreateOptions,
  BatchTaskCreateOptions,
  BatchTask,
  BatchTaskCollection,
  TaskAddCollectionResult,
  BatchTaskListSubtasksResult,
  NodeFile,
  BatchNodeUserCreateOptions,
  BatchNodeUserUpdateOptions,
  BatchNode,
  BatchNodeRemoteLoginSettingsResult,
  UploadBatchServiceLogsOptions,
  UploadBatchServiceLogsResult,
  NodeVMExtension,
} from "./models/models.js";
import { PagedAsyncIterableIterator } from "./static-helpers/pagingHelpers.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { BatchClientOptionalParams } from "./api/batchContext.js";

export class BatchClient {
  private _client: BatchContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure Batch provides Cloud-scale job scheduling and compute management. */
  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: BatchClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createBatch(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Lists all of the files in Task directories on the specified Compute Node. */
  listNodeFiles(
    poolId: string,
    nodeId: string,
    options: ListNodeFilesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<NodeFile> {
    return listNodeFiles(this._client, poolId, nodeId, options);
  }

  /** Gets the properties of the specified Compute Node file. */
  getNodeFileProperties(
    poolId: string,
    nodeId: string,
    filePath: string,
    options: GetNodeFilePropertiesOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return getNodeFileProperties(
      this._client,
      poolId,
      nodeId,
      filePath,
      options,
    );
  }

  /** Returns the content of the specified Compute Node file. */
  getNodeFile(
    poolId: string,
    nodeId: string,
    filePath: string,
    options: GetNodeFileOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getNodeFile(this._client, poolId, nodeId, filePath, options);
  }

  /** Deletes the specified file from the Compute Node. */
  deleteNodeFile(
    poolId: string,
    nodeId: string,
    filePath: string,
    options: DeleteNodeFileOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteNodeFile(this._client, poolId, nodeId, filePath, options);
  }

  /** Lists the Compute Nodes Extensions in the specified Pool. */
  listNodeExtensions(
    poolId: string,
    nodeId: string,
    options: ListNodeExtensionsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<NodeVMExtension> {
    return listNodeExtensions(this._client, poolId, nodeId, options);
  }

  /** Gets information about the specified Compute Node Extension. */
  getNodeExtension(
    poolId: string,
    nodeId: string,
    extensionName: string,
    options: GetNodeExtensionOptionalParams = { requestOptions: {} },
  ): Promise<NodeVMExtension> {
    return getNodeExtension(
      this._client,
      poolId,
      nodeId,
      extensionName,
      options,
    );
  }

  /** Lists the Compute Nodes in the specified Pool. */
  listNodes(
    poolId: string,
    options: ListNodesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchNode> {
    return listNodes(this._client, poolId, options);
  }

  /**
   * This is for gathering Azure Batch service log files in an automated fashion
   * from Compute Nodes if you are experiencing an error and wish to escalate to
   * Azure support. The Azure Batch service log files should be shared with Azure
   * support to aid in debugging issues with the Batch service.
   */
  uploadNodeLogs(
    poolId: string,
    nodeId: string,
    body: UploadBatchServiceLogsOptions,
    options: UploadNodeLogsOptionalParams = { requestOptions: {} },
  ): Promise<UploadBatchServiceLogsResult> {
    return uploadNodeLogs(this._client, poolId, nodeId, body, options);
  }

  /**
   * Before you can access a Compute Node by using the RDP file, you must create a
   * user Account on the Compute Node. This API can only be invoked on Pools created
   * with a cloud service configuration. For Pools created with a virtual machine
   * configuration, see the GetRemoteLoginSettings API.
   */
  getNodeRemoteDesktopFile(
    poolId: string,
    nodeId: string,
    options: GetNodeRemoteDesktopFileOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getNodeRemoteDesktopFile(this._client, poolId, nodeId, options);
  }

  /**
   * Before you can remotely login to a Compute Node using the remote login
   * settings, you must create a user Account on the Compute Node. This API can be
   * invoked only on Pools created with the virtual machine configuration property.
   * For Pools created with a cloud service configuration, see the GetRemoteDesktop
   * API.
   */
  getNodeRemoteLoginSettings(
    poolId: string,
    nodeId: string,
    options: GetNodeRemoteLoginSettingsOptionalParams = { requestOptions: {} },
  ): Promise<BatchNodeRemoteLoginSettingsResult> {
    return getNodeRemoteLoginSettings(this._client, poolId, nodeId, options);
  }

  /**
   * You can enable Task scheduling on a Compute Node only if its current scheduling
   * state is disabled
   */
  enableNodeScheduling(
    poolId: string,
    nodeId: string,
    options: EnableNodeSchedulingOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return enableNodeScheduling(this._client, poolId, nodeId, options);
  }

  /**
   * You can disable Task scheduling on a Compute Node only if its current
   * scheduling state is enabled.
   */
  disableNodeScheduling(
    poolId: string,
    nodeId: string,
    options: DisableNodeSchedulingOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return disableNodeScheduling(this._client, poolId, nodeId, options);
  }

  /**
   * You can reinstall the operating system on a Compute Node only if it is in an
   * idle or running state. This API can be invoked only on Pools created with the
   * cloud service configuration property.
   */
  reimageNode(
    poolId: string,
    nodeId: string,
    options: ReimageNodeOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return reimageNode(this._client, poolId, nodeId, options);
  }

  /** You can restart a Compute Node only if it is in an idle or running state. */
  rebootNode(
    poolId: string,
    nodeId: string,
    options: RebootNodeOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return rebootNode(this._client, poolId, nodeId, options);
  }

  /** Gets information about the specified Compute Node. */
  getNode(
    poolId: string,
    nodeId: string,
    options: GetNodeOptionalParams = { requestOptions: {} },
  ): Promise<BatchNode> {
    return getNode(this._client, poolId, nodeId, options);
  }

  /**
   * This operation replaces of all the updatable properties of the Account. For
   * example, if the expiryTime element is not specified, the current value is
   * replaced with the default value, not left unmodified. You can update a user
   * Account on a Compute Node only when it is in the idle or running state.
   */
  replaceNodeUser(
    poolId: string,
    nodeId: string,
    userName: string,
    body: BatchNodeUserUpdateOptions,
    options: ReplaceNodeUserOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return replaceNodeUser(
      this._client,
      poolId,
      nodeId,
      userName,
      body,
      options,
    );
  }

  /**
   * You can delete a user Account to a Compute Node only when it is in the idle or
   * running state.
   */
  deleteNodeUser(
    poolId: string,
    nodeId: string,
    userName: string,
    options: DeleteNodeUserOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteNodeUser(this._client, poolId, nodeId, userName, options);
  }

  /**
   * You can add a user Account to a Compute Node only when it is in the idle or
   * running state.
   */
  createNodeUser(
    poolId: string,
    nodeId: string,
    body: BatchNodeUserCreateOptions,
    options: CreateNodeUserOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return createNodeUser(this._client, poolId, nodeId, body, options);
  }

  /** Lists the files in a Task's directory on its Compute Node. */
  listTaskFiles(
    jobId: string,
    taskId: string,
    options: ListTaskFilesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<NodeFile> {
    return listTaskFiles(this._client, jobId, taskId, options);
  }

  /** Gets the properties of the specified Task file. */
  getTaskFileProperties(
    jobId: string,
    taskId: string,
    filePath: string,
    options: GetTaskFilePropertiesOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return getTaskFileProperties(
      this._client,
      jobId,
      taskId,
      filePath,
      options,
    );
  }

  /** Returns the content of the specified Task file. */
  getTaskFile(
    jobId: string,
    taskId: string,
    filePath: string,
    options: GetTaskFileOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getTaskFile(this._client, jobId, taskId, filePath, options);
  }

  /** Deletes the specified Task file from the Compute Node where the Task ran. */
  deleteTaskFile(
    jobId: string,
    taskId: string,
    filePath: string,
    options: DeleteTaskFileOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteTaskFile(this._client, jobId, taskId, filePath, options);
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
  reactivateTask(
    jobId: string,
    taskId: string,
    options: ReactivateTaskOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return reactivateTask(this._client, jobId, taskId, options);
  }

  /**
   * When the Task has been terminated, it moves to the completed state. For
   * multi-instance Tasks, the terminate Task operation applies synchronously to the
   * primary task; subtasks are then terminated asynchronously in the background.
   */
  terminateTask(
    jobId: string,
    taskId: string,
    options: TerminateTaskOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return terminateTask(this._client, jobId, taskId, options);
  }

  /** If the Task is not a multi-instance Task then this returns an empty collection. */
  listSubTasks(
    jobId: string,
    taskId: string,
    options: ListSubTasksOptionalParams = { requestOptions: {} },
  ): Promise<BatchTaskListSubtasksResult> {
    return listSubTasks(this._client, jobId, taskId, options);
  }

  /** Updates the properties of the specified Task. */
  replaceTask(
    jobId: string,
    taskId: string,
    body: BatchTask,
    options: ReplaceTaskOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return replaceTask(this._client, jobId, taskId, body, options);
  }

  /**
   * For multi-instance Tasks, information such as affinityId, executionInfo and
   * nodeInfo refer to the primary Task. Use the list subtasks API to retrieve
   * information about subtasks.
   */
  getTask(
    jobId: string,
    taskId: string,
    options: GetTaskOptionalParams = { requestOptions: {} },
  ): Promise<BatchTask> {
    return getTask(this._client, jobId, taskId, options);
  }

  /**
   * When a Task is deleted, all of the files in its directory on the Compute Node
   * where it ran are also deleted (regardless of the retention time). For
   * multi-instance Tasks, the delete Task operation applies synchronously to the
   * primary task; subtasks and their files are then deleted asynchronously in the
   * background.
   */
  deleteTask(
    jobId: string,
    taskId: string,
    options: DeleteTaskOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteTask(this._client, jobId, taskId, options);
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
  createTaskCollection(
    jobId: string,
    collection: BatchTaskCollection,
    options: CreateTaskCollectionOptionalParams = { requestOptions: {} },
  ): Promise<TaskAddCollectionResult> {
    return createTaskCollection(this._client, jobId, collection, options);
  }

  /**
   * For multi-instance Tasks, information such as affinityId, executionInfo and
   * nodeInfo refer to the primary Task. Use the list subtasks API to retrieve
   * information about subtasks.
   */
  listTasks(
    jobId: string,
    options: ListTasksOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchTask> {
    return listTasks(this._client, jobId, options);
  }

  /**
   * The maximum lifetime of a Task from addition to completion is 180 days. If a
   * Task has not completed within 180 days of being added it will be terminated by
   * the Batch service and left in whatever state it was in at that time.
   */
  createTask(
    jobId: string,
    body: BatchTaskCreateOptions,
    options: CreateTaskOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return createTask(this._client, jobId, body, options);
  }

  /** Lists all of the Job Schedules in the specified Account. */
  listJobSchedules(
    options: ListJobSchedulesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchJobSchedule> {
    return listJobSchedules(this._client, options);
  }

  /** Creates a Job Schedule to the specified Account. */
  createJobSchedule(
    body: BatchJobScheduleCreateOptions,
    options: CreateJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return createJobSchedule(this._client, body, options);
  }

  /** Terminates a Job Schedule. */
  terminateJobSchedule(
    jobScheduleId: string,
    options: TerminateJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return terminateJobSchedule(this._client, jobScheduleId, options);
  }

  /** Enables a Job Schedule. */
  enableJobSchedule(
    jobScheduleId: string,
    options: EnableJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return enableJobSchedule(this._client, jobScheduleId, options);
  }

  /** No new Jobs will be created until the Job Schedule is enabled again. */
  disableJobSchedule(
    jobScheduleId: string,
    options: DisableJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return disableJobSchedule(this._client, jobScheduleId, options);
  }

  /**
   * This fully replaces all the updatable properties of the Job Schedule. For
   * example, if the schedule property is not specified with this request, then the
   * Batch service will remove the existing schedule. Changes to a Job Schedule only
   * impact Jobs created by the schedule after the update has taken place; currently
   * running Jobs are unaffected.
   */
  replaceJobSchedule(
    jobScheduleId: string,
    body: BatchJobSchedule,
    options: ReplaceJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return replaceJobSchedule(this._client, jobScheduleId, body, options);
  }

  /**
   * This replaces only the Job Schedule properties specified in the request. For
   * example, if the schedule property is not specified with this request, then the
   * Batch service will keep the existing schedule. Changes to a Job Schedule only
   * impact Jobs created by the schedule after the update has taken place; currently
   * running Jobs are unaffected.
   */
  updateJobSchedule(
    jobScheduleId: string,
    body: BatchJobScheduleUpdateOptions,
    options: UpdateJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return updateJobSchedule(this._client, jobScheduleId, body, options);
  }

  /** Gets information about the specified Job Schedule. */
  getJobSchedule(
    jobScheduleId: string,
    options: GetJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<BatchJobSchedule> {
    return getJobSchedule(this._client, jobScheduleId, options);
  }

  /**
   * When you delete a Job Schedule, this also deletes all Jobs and Tasks under that
   * schedule. When Tasks are deleted, all the files in their working directories on
   * the Compute Nodes are also deleted (the retention period is ignored). The Job
   * Schedule statistics are no longer accessible once the Job Schedule is deleted,
   * though they are still counted towards Account lifetime statistics.
   */
  deleteJobSchedule(
    jobScheduleId: string,
    options: DeleteJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteJobSchedule(this._client, jobScheduleId, options);
  }

  /** Checks the specified Job Schedule exists. */
  jobScheduleExists(
    jobScheduleId: string,
    options: JobScheduleExistsOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return jobScheduleExists(this._client, jobScheduleId, options);
  }

  /** Gets information about the specified Certificate. */
  getCertificate(
    thumbprintAlgorithm: string,
    thumbprint: string,
    options: GetCertificateOptionalParams = { requestOptions: {} },
  ): Promise<BatchCertificate> {
    return getCertificate(
      this._client,
      thumbprintAlgorithm,
      thumbprint,
      options,
    );
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
  deleteCertificate(
    thumbprintAlgorithm: string,
    thumbprint: string,
    options: DeleteCertificateOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteCertificate(
      this._client,
      thumbprintAlgorithm,
      thumbprint,
      options,
    );
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
  cancelCertificateDeletion(
    thumbprintAlgorithm: string,
    thumbprint: string,
    options: CancelCertificateDeletionOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return cancelCertificateDeletion(
      this._client,
      thumbprintAlgorithm,
      thumbprint,
      options,
    );
  }

  /** Lists all of the Certificates that have been added to the specified Account. */
  listCertificates(
    options: ListCertificatesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchCertificate> {
    return listCertificates(this._client, options);
  }

  /** Creates a Certificate to the specified Account. */
  createCertificate(
    body: BatchCertificate,
    options: CreateCertificateOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return createCertificate(this._client, body, options);
  }

  /**
   * Task counts provide a count of the Tasks by active, running or completed Task
   * state, and a count of Tasks which succeeded or failed. Tasks in the preparing
   * state are counted as running. Note that the numbers returned may not always be
   * up to date. If you need exact task counts, use a list query.
   */
  getJobTaskCounts(
    jobId: string,
    options: GetJobTaskCountsOptionalParams = { requestOptions: {} },
  ): Promise<TaskCountsResult> {
    return getJobTaskCounts(this._client, jobId, options);
  }

  /**
   * This API returns the Job Preparation and Job Release Task status on all Compute
   * Nodes that have run the Job Preparation or Job Release Task. This includes
   * Compute Nodes which have since been removed from the Pool. If this API is
   * invoked on a Job which has no Job Preparation or Job Release Task, the Batch
   * service returns HTTP status code 409 (Conflict) with an error code of
   * JobPreparationTaskNotSpecified.
   */
  listJobPreparationAndReleaseTaskStatus(
    jobId: string,
    options: ListJobPreparationAndReleaseTaskStatusOptionalParams = {
      requestOptions: {},
    },
  ): PagedAsyncIterableIterator<JobPreparationAndReleaseTaskExecutionInformation> {
    return listJobPreparationAndReleaseTaskStatus(this._client, jobId, options);
  }

  /** Lists the Jobs that have been created under the specified Job Schedule. */
  listJobsFromSchedule(
    jobScheduleId: string,
    options: ListJobsFromScheduleOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchJob> {
    return listJobsFromSchedule(this._client, jobScheduleId, options);
  }

  /** Lists all of the Jobs in the specified Account. */
  listJobs(
    options: ListJobsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchJob> {
    return listJobs(this._client, options);
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
  createJob(
    body: BatchJobCreateOptions,
    options: CreateJobOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return createJob(this._client, body, options);
  }

  /**
   * When a Terminate Job request is received, the Batch service sets the Job to the
   * terminating state. The Batch service then terminates any running Tasks
   * associated with the Job and runs any required Job release Tasks. Then the Job
   * moves into the completed state. If there are any Tasks in the Job in the active
   * state, they will remain in the active state. Once a Job is terminated, new
   * Tasks cannot be added and any remaining active Tasks will not be scheduled.
   */
  terminateJob(
    jobId: string,
    options: TerminateJobOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return terminateJob(this._client, jobId, options);
  }

  /**
   * When you call this API, the Batch service sets a disabled Job to the enabling
   * state. After the this operation is completed, the Job moves to the active
   * state, and scheduling of new Tasks under the Job resumes. The Batch service
   * does not allow a Task to remain in the active state for more than 180 days.
   * Therefore, if you enable a Job containing active Tasks which were added more
   * than 180 days ago, those Tasks will not run.
   */
  enableJob(
    jobId: string,
    options: EnableJobOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return enableJob(this._client, jobId, options);
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
  disableJob(
    jobId: string,
    body: BatchJobDisableOptions,
    options: DisableJobOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return disableJob(this._client, jobId, body, options);
  }

  /**
   * This fully replaces all the updatable properties of the Job. For example, if
   * the Job has constraints associated with it and if constraints is not specified
   * with this request, then the Batch service will remove the existing constraints.
   */
  replaceJob(
    jobId: string,
    body: BatchJob,
    options: ReplaceJobOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return replaceJob(this._client, jobId, body, options);
  }

  /**
   * This replaces only the Job properties specified in the request. For example, if
   * the Job has constraints, and a request does not specify the constraints
   * element, then the Job keeps the existing constraints.
   */
  updateJob(
    jobId: string,
    body: BatchJobUpdateOptions,
    options: UpdateJobOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return updateJob(this._client, jobId, body, options);
  }

  /** Gets information about the specified Job. */
  getJob(
    jobId: string,
    options: GetJobOptionalParams = { requestOptions: {} },
  ): Promise<BatchJob> {
    return getJob(this._client, jobId, options);
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
  deleteJob(
    jobId: string,
    options: DeleteJobOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteJob(this._client, jobId, options);
  }

  /**
   * Gets the number of Compute Nodes in each state, grouped by Pool. Note that the
   * numbers returned may not always be up to date. If you need exact node counts,
   * use a list query.
   */
  listPoolNodeCounts(
    options: ListPoolNodeCountsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<PoolNodeCounts> {
    return listPoolNodeCounts(this._client, options);
  }

  /** Lists all Virtual Machine Images supported by the Azure Batch service. */
  listSupportedImages(
    options: ListSupportedImagesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<ImageInformation> {
    return listSupportedImages(this._client, options);
  }

  /**
   * This operation can only run when the allocation state of the Pool is steady.
   * When this operation runs, the allocation state changes from steady to resizing.
   * Each request may remove up to 100 nodes.
   */
  removeNodes(
    poolId: string,
    body: NodeRemoveOptions,
    options: RemoveNodesOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return removeNodes(this._client, poolId, body, options);
  }

  /**
   * This fully replaces all the updatable properties of the Pool. For example, if
   * the Pool has a StartTask associated with it and if StartTask is not specified
   * with this request, then the Batch service will remove the existing StartTask.
   */
  replacePoolProperties(
    poolId: string,
    body: BatchPoolReplaceOptions,
    options: ReplacePoolPropertiesOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return replacePoolProperties(this._client, poolId, body, options);
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
  stopPoolResize(
    poolId: string,
    options: StopPoolResizeOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return stopPoolResize(this._client, poolId, options);
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
  resizePool(
    poolId: string,
    body: BatchPoolResizeOptions,
    options: ResizePoolOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return resizePool(this._client, poolId, body, options);
  }

  /**
   * This API is primarily for validating an autoscale formula, as it simply returns
   * the result without applying the formula to the Pool. The Pool must have auto
   * scaling enabled in order to evaluate a formula.
   */
  evaluatePoolAutoScale(
    poolId: string,
    body: BatchPoolEvaluateAutoScaleOptions,
    options: EvaluatePoolAutoScaleOptionalParams = { requestOptions: {} },
  ): Promise<AutoScaleRun> {
    return evaluatePoolAutoScale(this._client, poolId, body, options);
  }

  /**
   * You cannot enable automatic scaling on a Pool if a resize operation is in
   * progress on the Pool. If automatic scaling of the Pool is currently disabled,
   * you must specify a valid autoscale formula as part of the request. If automatic
   * scaling of the Pool is already enabled, you may specify a new autoscale formula
   * and/or a new evaluation interval. You cannot call this API for the same Pool
   * more than once every 30 seconds.
   */
  enablePoolAutoScale(
    poolId: string,
    body: BatchPoolEnableAutoScaleOptions,
    options: EnablePoolAutoScaleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return enablePoolAutoScale(this._client, poolId, body, options);
  }

  /** Disables automatic scaling for a Pool. */
  disablePoolAutoScale(
    poolId: string,
    options: DisablePoolAutoScaleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return disablePoolAutoScale(this._client, poolId, options);
  }

  /**
   * This only replaces the Pool properties specified in the request. For example,
   * if the Pool has a StartTask associated with it, and a request does not specify
   * a StartTask element, then the Pool keeps the existing StartTask.
   */
  updatePool(
    poolId: string,
    body: BatchPoolUpdateOptions,
    options: UpdatePoolOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return updatePool(this._client, poolId, body, options);
  }

  /** Gets information about the specified Pool. */
  getPool(
    poolId: string,
    options: GetPoolOptionalParams = { requestOptions: {} },
  ): Promise<BatchPool> {
    return getPool(this._client, poolId, options);
  }

  /** Gets basic properties of a Pool. */
  poolExists(
    poolId: string,
    options: PoolExistsOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return poolExists(this._client, poolId, options);
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
  deletePool(
    poolId: string,
    options: DeletePoolOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deletePool(this._client, poolId, options);
  }

  /** Lists all of the Pools in the specified Account. */
  listPools(
    options: ListPoolsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchPool> {
    return listPools(this._client, options);
  }

  /**
   * When naming Pools, avoid including sensitive information such as user names or
   * secret project names. This information may appear in telemetry logs accessible
   * to Microsoft Support engineers.
   */
  createPool(
    body: BatchPoolCreateOptions,
    options: CreatePoolOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return createPool(this._client, body, options);
  }

  /**
   * If you do not specify a $filter clause including a poolId, the response
   * includes all Pools that existed in the Account in the time range of the
   * returned aggregation intervals. If you do not specify a $filter clause
   * including a startTime or endTime these filters default to the start and end
   * times of the last aggregation interval currently available; that is, only the
   * last aggregation interval is returned.
   */
  listPoolUsageMetrics(
    options: ListPoolUsageMetricsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<PoolUsageMetrics> {
    return listPoolUsageMetrics(this._client, options);
  }

  /**
   * This operation returns only Applications and versions that are available for
   * use on Compute Nodes; that is, that can be used in an Package reference. For
   * administrator information about Applications and versions that are not yet
   * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
   * API.
   */
  getApplication(
    applicationId: string,
    options: GetApplicationOptionalParams = { requestOptions: {} },
  ): Promise<BatchApplication> {
    return getApplication(this._client, applicationId, options);
  }

  /**
   * This operation returns only Applications and versions that are available for
   * use on Compute Nodes; that is, that can be used in an Package reference. For
   * administrator information about applications and versions that are not yet
   * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
   * API.
   */
  listApplications(
    options: ListApplicationsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchApplication> {
    return listApplications(this._client, options);
  }
}
