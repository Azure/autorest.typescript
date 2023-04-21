// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "./common/interfaces.js";
import {
  listSupportedImages,
  listPoolNodeCounts,
  AccountListSupportedImagesOptions,
  AccountListPoolNodeCountsOptions,
  listApplications,
  get,
  ApplicationsListApplicationsOptions,
  ApplicationsGetOptions,
  createBatchService,
  BatchServiceContext,
  addCertificate,
  listCertificates,
  cancelCertificateDeletion,
  deleteCertificate,
  getCertificate,
  CertificatesAddCertificateOptions,
  CertificatesListCertificatesOptions,
  CertificatesCancelCertificateDeletionOptions,
  CertificatesDeleteCertificateOptions,
  CertificatesGetCertificateOptions,
  getComputeNodeExtensions,
  listComputeNodeExtensions,
  ComputeNodeExtensionsGetComputeNodeExtensionsOptions,
  ComputeNodeExtensionsListComputeNodeExtensionsOptions,
  addUser,
  deleteUser,
  updateUser,
  getComputeNode,
  rebootComputeNode,
  reimageComputeNode,
  disableScheduling,
  enableScheduling,
  getRemoteLoginSettings,
  getRemoteDesktop,
  uploadBatchServiceLogs,
  list,
  ComputeNodesAddUserOptions,
  ComputeNodesDeleteUserOptions,
  ComputeNodesUpdateUserOptions,
  ComputeNodesGetComputeNodeOptions,
  ComputeNodesRebootComputeNodeOptions,
  ComputeNodesReimageComputeNodeOptions,
  ComputeNodesDisableSchedulingOptions,
  ComputeNodesEnableSchedulingOptions,
  ComputeNodesGetRemoteLoginSettingsOptions,
  ComputeNodesGetRemoteDesktopOptions,
  ComputeNodesUploadBatchServiceLogsOptions,
  ComputeNodesListOptions,
  deleteFromTask,
  getFromTask,
  getPropertiesFromTask,
  deleteFromComputeNode,
  getFromComputeNode,
  getPropertiesFromComputeNode,
  listFromTask,
  listFromComputeNode,
  FileDeleteFromTaskOptions,
  FileGetFromTaskOptions,
  FileGetPropertiesFromTaskOptions,
  FileDeleteFromComputeNodeOptions,
  FileGetFromComputeNodeOptions,
  FileGetPropertiesFromComputeNodeOptions,
  FileListFromTaskOptions,
  FileListFromComputeNodeOptions,
  getAllJobLifetimeStatistics,
  deleteJob,
  getJob,
  patchJob,
  updateJob,
  disableJob,
  enableJob,
  terminateJob,
  addJob,
  listJobs,
  listFromJobSchedule,
  listPreparationAndReleaseTaskStatus,
  getTaskCounts,
  JobGetAllJobLifetimeStatisticsOptions,
  JobDeleteJobOptions,
  JobGetJobOptions,
  JobPatchJobOptions,
  JobUpdateJobOptions,
  JobDisableJobOptions,
  JobEnableJobOptions,
  JobTerminateJobOptions,
  JobAddJobOptions,
  JobListJobsOptions,
  JobListFromJobScheduleOptions,
  JobListPreparationAndReleaseTaskStatusOptions,
  JobGetTaskCountsOptions,
  jobScheduleExists,
  deleteJobSchedule,
  getJobSchedule,
  patchJobSchedule,
  updateJobSchedule,
  disableJobSchedule,
  enableJobSchedule,
  terminateJobSchedule,
  addJobSchedule,
  listJobSchedules,
  JobScheduleJobScheduleExistsOptions,
  JobScheduleDeleteJobScheduleOptions,
  JobScheduleGetJobScheduleOptions,
  JobSchedulePatchJobScheduleOptions,
  JobScheduleUpdateJobScheduleOptions,
  JobScheduleDisableJobScheduleOptions,
  JobScheduleEnableJobScheduleOptions,
  JobScheduleTerminateJobScheduleOptions,
  JobScheduleAddJobScheduleOptions,
  JobScheduleListJobSchedulesOptions,
  ApplicationListResult,
  Application,
  CustomPage,
  PoolStatistics,
  BatchPool,
  AutoScaleRun,
  BatchPoolListResult,
  AccountListSupportedImagesResult,
  PoolNodeCountsListResult,
  JobStatistics,
  BatchJob,
  DisableJobOption,
  BatchJobListResult,
  BatchJobListPreparationAndReleaseTaskStatusResult,
  TaskCountsResult,
  Certificate,
  CertificateListResult,
  NodeFileListResult,
  BatchJobSchedule,
  BatchJobScheduleListResult,
  BatchTask,
  BatchTaskListResult,
  TaskAddCollectionResult,
  BatchTaskListSubtasksResult,
  ComputeNode,
  ComputeNodeGetRemoteLoginSettingsResult,
  UploadBatchServiceLogsResult,
  ComputeNodeListResult,
  NodeVMExtension,
  NodeVMExtensionList,
  listUsageMetrics,
  getAllPoolLifetimeStatistics,
  addPool,
  listPools,
  deletePool,
  exists,
  getPool,
  patchPool,
  disableAutoScale,
  enableAutoScale,
  evaluateAutoScale,
  resize,
  stopResize,
  updateProperties,
  removeNodes,
  PoolListUsageMetricsOptions,
  PoolGetAllPoolLifetimeStatisticsOptions,
  PoolAddPoolOptions,
  PoolListPoolsOptions,
  PoolDeletePoolOptions,
  PoolExistsOptions,
  PoolGetPoolOptions,
  PoolPatchPoolOptions,
  PoolDisableAutoScaleOptions,
  PoolEnableAutoScaleOptions,
  PoolEvaluateAutoScaleOptions,
  PoolResizeOptions,
  PoolStopResizeOptions,
  PoolUpdatePropertiesOptions,
  PoolRemoveNodesOptions,
  addTask,
  listTasks,
  addTaskCollection,
  deleteTaskCollection,
  getTaskCollection,
  updateTaskCollection,
  listSubtasks,
  terminateTaskCollection,
  reactivateTaskCollection,
  TaskAddTaskOptions,
  TaskListTasksOptions,
  TaskAddTaskCollectionOptions,
  TaskDeleteTaskCollectionOptions,
  TaskGetTaskCollectionOptions,
  TaskUpdateTaskCollectionOptions,
  TaskListSubtasksOptions,
  TaskTerminateTaskCollectionOptions,
  TaskReactivateTaskCollectionOptions,
} from "./api/index.js";

export class BatchServiceClient {
  private _client: BatchServiceContext;

  /** A client for issuing REST requests to the Azure Batch service. */
  constructor(
    endpoint: string,
    credential: TokenCredential,
    options: ClientOptions = {}
  ) {
    this._client = createBatchService(endpoint, credential, options);
  }

  applications = {
    listApplications: (
      options: ApplicationsListApplicationsOptions = { requestOptions: {} }
    ): Promise<ApplicationListResult> => {
      return listApplications(this._client, options);
    },
    get: (
      applicationId: string,
      options: ApplicationsGetOptions = { requestOptions: {} }
    ): Promise<Application> => {
      return get(this._client, applicationId, options);
    },
  };
  pool = {
    listUsageMetrics: (
      options: PoolListUsageMetricsOptions = { requestOptions: {} }
    ): Promise<CustomPage> => {
      return listUsageMetrics(this._client, options);
    },
    getAllPoolLifetimeStatistics: (
      options: PoolGetAllPoolLifetimeStatisticsOptions = { requestOptions: {} }
    ): Promise<PoolStatistics> => {
      return getAllPoolLifetimeStatistics(this._client, options);
    },
    addPool: (
      options: PoolAddPoolOptions = { requestOptions: {} }
    ): Promise<void> => {
      return addPool(this._client, options);
    },
    listPools: (
      options: PoolListPoolsOptions = { requestOptions: {} }
    ): Promise<BatchPoolListResult> => {
      return listPools(this._client, options);
    },
    deletePool: (
      poolId: string,
      options: PoolDeletePoolOptions = { requestOptions: {} }
    ): Promise<void> => {
      return deletePool(this._client, poolId, options);
    },
    exists: (
      poolId: string,
      options: PoolExistsOptions = { requestOptions: {} }
    ): Promise<void> => {
      return exists(this._client, poolId, options);
    },
    getPool: (
      poolId: string,
      options: PoolGetPoolOptions = { requestOptions: {} }
    ): Promise<BatchPool> => {
      return getPool(this._client, poolId, options);
    },
    patchPool: (
      poolId: string,
      options: PoolPatchPoolOptions = { requestOptions: {} }
    ): Promise<void> => {
      return patchPool(this._client, poolId, options);
    },
    disableAutoScale: (
      poolId: string,
      options: PoolDisableAutoScaleOptions = { requestOptions: {} }
    ): Promise<void> => {
      return disableAutoScale(this._client, poolId, options);
    },
    enableAutoScale: (
      poolId: string,
      options: PoolEnableAutoScaleOptions = { requestOptions: {} }
    ): Promise<void> => {
      return enableAutoScale(this._client, poolId, options);
    },
    evaluateAutoScale: (
      autoScaleFormula: string,
      poolId: string,
      options: PoolEvaluateAutoScaleOptions = { requestOptions: {} }
    ): Promise<AutoScaleRun> => {
      return evaluateAutoScale(this._client, autoScaleFormula, poolId, options);
    },
    resize: (
      poolId: string,
      options: PoolResizeOptions = { requestOptions: {} }
    ): Promise<void> => {
      return resize(this._client, poolId, options);
    },
    stopResize: (
      poolId: string,
      options: PoolStopResizeOptions = { requestOptions: {} }
    ): Promise<void> => {
      return stopResize(this._client, poolId, options);
    },
    updateProperties: (
      poolId: string,
      options: PoolUpdatePropertiesOptions = { requestOptions: {} }
    ): Promise<void> => {
      return updateProperties(this._client, poolId, options);
    },
    removeNodes: (
      nodeList: string[],
      poolId: string,
      options: PoolRemoveNodesOptions = { requestOptions: {} }
    ): Promise<void> => {
      return removeNodes(this._client, nodeList, poolId, options);
    },
  };
  account = {
    listSupportedImages: (
      options: AccountListSupportedImagesOptions = { requestOptions: {} }
    ): Promise<AccountListSupportedImagesResult> => {
      return listSupportedImages(this._client, options);
    },
    listPoolNodeCounts: (
      options: AccountListPoolNodeCountsOptions = { requestOptions: {} }
    ): Promise<PoolNodeCountsListResult> => {
      return listPoolNodeCounts(this._client, options);
    },
  };
  job = {
    getAllJobLifetimeStatistics: (
      options: JobGetAllJobLifetimeStatisticsOptions = { requestOptions: {} }
    ): Promise<JobStatistics> => {
      return getAllJobLifetimeStatistics(this._client, options);
    },
    deleteJob: (
      jobId: string,
      options: JobDeleteJobOptions = { requestOptions: {} }
    ): Promise<void> => {
      return deleteJob(this._client, jobId, options);
    },
    getJob: (
      jobId: string,
      options: JobGetJobOptions = { requestOptions: {} }
    ): Promise<BatchJob> => {
      return getJob(this._client, jobId, options);
    },
    patchJob: (
      jobId: string,
      options: JobPatchJobOptions = { requestOptions: {} }
    ): Promise<void> => {
      return patchJob(this._client, jobId, options);
    },
    updateJob: (
      jobId: string,
      options: JobUpdateJobOptions = { requestOptions: {} }
    ): Promise<void> => {
      return updateJob(this._client, jobId, options);
    },
    disableJob: (
      disableTasks: DisableJobOption,
      jobId: string,
      options: JobDisableJobOptions = { requestOptions: {} }
    ): Promise<void> => {
      return disableJob(this._client, disableTasks, jobId, options);
    },
    enableJob: (
      jobId: string,
      options: JobEnableJobOptions = { requestOptions: {} }
    ): Promise<void> => {
      return enableJob(this._client, jobId, options);
    },
    terminateJob: (
      jobId: string,
      options: JobTerminateJobOptions = { requestOptions: {} }
    ): Promise<void> => {
      return terminateJob(this._client, jobId, options);
    },
    addJob: (
      options: JobAddJobOptions = { requestOptions: {} }
    ): Promise<void> => {
      return addJob(this._client, options);
    },
    listJobs: (
      options: JobListJobsOptions = { requestOptions: {} }
    ): Promise<BatchJobListResult> => {
      return listJobs(this._client, options);
    },
    listFromJobSchedule: (
      jobScheduleId: string,
      options: JobListFromJobScheduleOptions = { requestOptions: {} }
    ): Promise<BatchJobListResult> => {
      return listFromJobSchedule(this._client, jobScheduleId, options);
    },
    listPreparationAndReleaseTaskStatus: (
      jobId: string,
      options: JobListPreparationAndReleaseTaskStatusOptions = {
        requestOptions: {},
      }
    ): Promise<BatchJobListPreparationAndReleaseTaskStatusResult> => {
      return listPreparationAndReleaseTaskStatus(this._client, jobId, options);
    },
    getTaskCounts: (
      jobId: string,
      options: JobGetTaskCountsOptions = { requestOptions: {} }
    ): Promise<TaskCountsResult> => {
      return getTaskCounts(this._client, jobId, options);
    },
  };
  certificates = {
    addCertificate: (
      options: CertificatesAddCertificateOptions = { requestOptions: {} }
    ): Promise<void> => {
      return addCertificate(this._client, options);
    },
    listCertificates: (
      options: CertificatesListCertificatesOptions = { requestOptions: {} }
    ): Promise<CertificateListResult> => {
      return listCertificates(this._client, options);
    },
    cancelCertificateDeletion: (
      thumbprintAlgorithm: string,
      thumbprint: string,
      options: CertificatesCancelCertificateDeletionOptions = {
        requestOptions: {},
      }
    ): Promise<void> => {
      return cancelCertificateDeletion(
        this._client,
        thumbprintAlgorithm,
        thumbprint,
        options
      );
    },
    deleteCertificate: (
      thumbprintAlgorithm: string,
      thumbprint: string,
      options: CertificatesDeleteCertificateOptions = { requestOptions: {} }
    ): Promise<void> => {
      return deleteCertificate(
        this._client,
        thumbprintAlgorithm,
        thumbprint,
        options
      );
    },
    getCertificate: (
      thumbprintAlgorithm: string,
      thumbprint: string,
      options: CertificatesGetCertificateOptions = { requestOptions: {} }
    ): Promise<Certificate> => {
      return getCertificate(
        this._client,
        thumbprintAlgorithm,
        thumbprint,
        options
      );
    },
  };
  file = {
    deleteFromTask: (
      jobId: string,
      taskId: string,
      filePath: string,
      options: FileDeleteFromTaskOptions = { requestOptions: {} }
    ): Promise<void> => {
      return deleteFromTask(this._client, jobId, taskId, filePath, options);
    },
    getFromTask: (
      jobId: string,
      taskId: string,
      filePath: string,
      options: FileGetFromTaskOptions = { requestOptions: {} }
    ): Promise<void> => {
      return getFromTask(this._client, jobId, taskId, filePath, options);
    },
    getPropertiesFromTask: (
      jobId: string,
      taskId: string,
      filePath: string,
      options: FileGetPropertiesFromTaskOptions = { requestOptions: {} }
    ): Promise<void> => {
      return getPropertiesFromTask(
        this._client,
        jobId,
        taskId,
        filePath,
        options
      );
    },
    deleteFromComputeNode: (
      poolId: string,
      nodeId: string,
      filePath: string,
      options: FileDeleteFromComputeNodeOptions = { requestOptions: {} }
    ): Promise<void> => {
      return deleteFromComputeNode(
        this._client,
        poolId,
        nodeId,
        filePath,
        options
      );
    },
    getFromComputeNode: (
      poolId: string,
      nodeId: string,
      filePath: string,
      options: FileGetFromComputeNodeOptions = { requestOptions: {} }
    ): Promise<void> => {
      return getFromComputeNode(
        this._client,
        poolId,
        nodeId,
        filePath,
        options
      );
    },
    getPropertiesFromComputeNode: (
      poolId: string,
      nodeId: string,
      filePath: string,
      options: FileGetPropertiesFromComputeNodeOptions = { requestOptions: {} }
    ): Promise<void> => {
      return getPropertiesFromComputeNode(
        this._client,
        poolId,
        nodeId,
        filePath,
        options
      );
    },
    listFromTask: (
      jobId: string,
      taskId: string,
      options: FileListFromTaskOptions = { requestOptions: {} }
    ): Promise<NodeFileListResult> => {
      return listFromTask(this._client, jobId, taskId, options);
    },
    listFromComputeNode: (
      poolId: string,
      nodeId: string,
      options: FileListFromComputeNodeOptions = { requestOptions: {} }
    ): Promise<NodeFileListResult> => {
      return listFromComputeNode(this._client, poolId, nodeId, options);
    },
  };
  jobSchedule = {
    jobScheduleExists: (
      jobScheduleId: string,
      options: JobScheduleJobScheduleExistsOptions = { requestOptions: {} }
    ): Promise<void> => {
      return jobScheduleExists(this._client, jobScheduleId, options);
    },
    deleteJobSchedule: (
      jobScheduleId: string,
      options: JobScheduleDeleteJobScheduleOptions = { requestOptions: {} }
    ): Promise<void> => {
      return deleteJobSchedule(this._client, jobScheduleId, options);
    },
    getJobSchedule: (
      jobScheduleId: string,
      options: JobScheduleGetJobScheduleOptions = { requestOptions: {} }
    ): Promise<BatchJobSchedule> => {
      return getJobSchedule(this._client, jobScheduleId, options);
    },
    patchJobSchedule: (
      jobScheduleId: string,
      options: JobSchedulePatchJobScheduleOptions = { requestOptions: {} }
    ): Promise<void> => {
      return patchJobSchedule(this._client, jobScheduleId, options);
    },
    updateJobSchedule: (
      jobScheduleId: string,
      options: JobScheduleUpdateJobScheduleOptions = { requestOptions: {} }
    ): Promise<void> => {
      return updateJobSchedule(this._client, jobScheduleId, options);
    },
    disableJobSchedule: (
      jobScheduleId: string,
      options: JobScheduleDisableJobScheduleOptions = { requestOptions: {} }
    ): Promise<void> => {
      return disableJobSchedule(this._client, jobScheduleId, options);
    },
    enableJobSchedule: (
      jobScheduleId: string,
      options: JobScheduleEnableJobScheduleOptions = { requestOptions: {} }
    ): Promise<void> => {
      return enableJobSchedule(this._client, jobScheduleId, options);
    },
    terminateJobSchedule: (
      jobScheduleId: string,
      options: JobScheduleTerminateJobScheduleOptions = { requestOptions: {} }
    ): Promise<void> => {
      return terminateJobSchedule(this._client, jobScheduleId, options);
    },
    addJobSchedule: (
      options: JobScheduleAddJobScheduleOptions = { requestOptions: {} }
    ): Promise<void> => {
      return addJobSchedule(this._client, options);
    },
    listJobSchedules: (
      options: JobScheduleListJobSchedulesOptions = { requestOptions: {} }
    ): Promise<BatchJobScheduleListResult> => {
      return listJobSchedules(this._client, options);
    },
  };
  task = {
    addTask: (
      jobId: string,
      options: TaskAddTaskOptions = { requestOptions: {} }
    ): Promise<void> => {
      return addTask(this._client, jobId, options);
    },
    listTasks: (
      jobId: string,
      options: TaskListTasksOptions = { requestOptions: {} }
    ): Promise<BatchTaskListResult> => {
      return listTasks(this._client, jobId, options);
    },
    addTaskCollection: (
      value: BatchTask[],
      jobId: string,
      options: TaskAddTaskCollectionOptions = { requestOptions: {} }
    ): Promise<TaskAddCollectionResult> => {
      return addTaskCollection(this._client, value, jobId, options);
    },
    deleteTaskCollection: (
      jobId: string,
      taskId: string,
      options: TaskDeleteTaskCollectionOptions = { requestOptions: {} }
    ): Promise<void> => {
      return deleteTaskCollection(this._client, jobId, taskId, options);
    },
    getTaskCollection: (
      jobId: string,
      taskId: string,
      options: TaskGetTaskCollectionOptions = { requestOptions: {} }
    ): Promise<BatchTask> => {
      return getTaskCollection(this._client, jobId, taskId, options);
    },
    updateTaskCollection: (
      jobId: string,
      taskId: string,
      options: TaskUpdateTaskCollectionOptions = { requestOptions: {} }
    ): Promise<void> => {
      return updateTaskCollection(this._client, jobId, taskId, options);
    },
    listSubtasks: (
      jobId: string,
      taskId: string,
      options: TaskListSubtasksOptions = { requestOptions: {} }
    ): Promise<BatchTaskListSubtasksResult> => {
      return listSubtasks(this._client, jobId, taskId, options);
    },
    terminateTaskCollection: (
      jobId: string,
      taskId: string,
      options: TaskTerminateTaskCollectionOptions = { requestOptions: {} }
    ): Promise<void> => {
      return terminateTaskCollection(this._client, jobId, taskId, options);
    },
    reactivateTaskCollection: (
      jobId: string,
      taskId: string,
      options: TaskReactivateTaskCollectionOptions = { requestOptions: {} }
    ): Promise<void> => {
      return reactivateTaskCollection(this._client, jobId, taskId, options);
    },
  };
  computeNodes = {
    addUser: (
      name: string,
      poolId: string,
      nodeId: string,
      options: ComputeNodesAddUserOptions = { requestOptions: {} }
    ): Promise<void> => {
      return addUser(this._client, name, poolId, nodeId, options);
    },
    deleteUser: (
      poolId: string,
      nodeId: string,
      userName: string,
      options: ComputeNodesDeleteUserOptions = { requestOptions: {} }
    ): Promise<void> => {
      return deleteUser(this._client, poolId, nodeId, userName, options);
    },
    updateUser: (
      poolId: string,
      nodeId: string,
      userName: string,
      options: ComputeNodesUpdateUserOptions = { requestOptions: {} }
    ): Promise<void> => {
      return updateUser(this._client, poolId, nodeId, userName, options);
    },
    getComputeNode: (
      poolId: string,
      nodeId: string,
      options: ComputeNodesGetComputeNodeOptions = { requestOptions: {} }
    ): Promise<ComputeNode> => {
      return getComputeNode(this._client, poolId, nodeId, options);
    },
    rebootComputeNode: (
      poolId: string,
      nodeId: string,
      options: ComputeNodesRebootComputeNodeOptions = { requestOptions: {} }
    ): Promise<void> => {
      return rebootComputeNode(this._client, poolId, nodeId, options);
    },
    reimageComputeNode: (
      poolId: string,
      nodeId: string,
      options: ComputeNodesReimageComputeNodeOptions = { requestOptions: {} }
    ): Promise<void> => {
      return reimageComputeNode(this._client, poolId, nodeId, options);
    },
    disableScheduling: (
      poolId: string,
      nodeId: string,
      options: ComputeNodesDisableSchedulingOptions = { requestOptions: {} }
    ): Promise<void> => {
      return disableScheduling(this._client, poolId, nodeId, options);
    },
    enableScheduling: (
      poolId: string,
      nodeId: string,
      options: ComputeNodesEnableSchedulingOptions = { requestOptions: {} }
    ): Promise<void> => {
      return enableScheduling(this._client, poolId, nodeId, options);
    },
    getRemoteLoginSettings: (
      poolId: string,
      nodeId: string,
      options: ComputeNodesGetRemoteLoginSettingsOptions = {
        requestOptions: {},
      }
    ): Promise<ComputeNodeGetRemoteLoginSettingsResult> => {
      return getRemoteLoginSettings(this._client, poolId, nodeId, options);
    },
    getRemoteDesktop: (
      poolId: string,
      nodeId: string,
      options: ComputeNodesGetRemoteDesktopOptions = { requestOptions: {} }
    ): Promise<void> => {
      return getRemoteDesktop(this._client, poolId, nodeId, options);
    },
    uploadBatchServiceLogs: (
      containerUrl: string,
      startTime: Date,
      poolId: string,
      nodeId: string,
      options: ComputeNodesUploadBatchServiceLogsOptions = {
        requestOptions: {},
      }
    ): Promise<UploadBatchServiceLogsResult> => {
      return uploadBatchServiceLogs(
        this._client,
        containerUrl,
        startTime,
        poolId,
        nodeId,
        options
      );
    },
    list: (
      poolId: string,
      options: ComputeNodesListOptions = { requestOptions: {} }
    ): Promise<ComputeNodeListResult> => {
      return list(this._client, poolId, options);
    },
  };
  computeNodeExtensions = {
    getComputeNodeExtensions: (
      poolId: string,
      nodeId: string,
      extensionName: string,
      options: ComputeNodeExtensionsGetComputeNodeExtensionsOptions = {
        requestOptions: {},
      }
    ): Promise<NodeVMExtension> => {
      return getComputeNodeExtensions(
        this._client,
        poolId,
        nodeId,
        extensionName,
        options
      );
    },
    listComputeNodeExtensions: (
      poolId: string,
      nodeId: string,
      options: ComputeNodeExtensionsListComputeNodeExtensionsOptions = {
        requestOptions: {},
      }
    ): Promise<NodeVMExtensionList> => {
      return listComputeNodeExtensions(this._client, poolId, nodeId, options);
    },
  };
}
