// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createBatch,
  BatchContext,
  BatchClientOptionalParams,
} from "./batchContext.js";
export {
  listApplications,
  getApplication,
  listPoolUsageMetrics,
  createPool,
  listPools,
  deletePool,
  poolExists,
  getPool,
  updatePool,
  disablePoolAutoScale,
  enablePoolAutoScale,
  evaluatePoolAutoScale,
  resizePool,
  stopPoolResize,
  replacePoolProperties,
  removeNodes,
  listSupportedImages,
  listPoolNodeCounts,
  deleteJob,
  getJob,
  updateJob,
  replaceJob,
  disableJob,
  enableJob,
  terminateJob,
  createJob,
  listJobs,
  listJobsFromSchedule,
  listJobPreparationAndReleaseTaskStatus,
  getJobTaskCounts,
  createCertificate,
  listCertificates,
  cancelCertificateDeletion,
  deleteCertificate,
  getCertificate,
  jobScheduleExists,
  deleteJobSchedule,
  getJobSchedule,
  updateJobSchedule,
  replaceJobSchedule,
  disableJobSchedule,
  enableJobSchedule,
  terminateJobSchedule,
  createJobSchedule,
  listJobSchedules,
  createTask,
  listTasks,
  createTaskCollection,
  deleteTask,
  getTask,
  replaceTask,
  listSubTasks,
  terminateTask,
  reactivateTask,
  deleteTaskFile,
  getTaskFile,
  getTaskFileProperties,
  listTaskFiles,
  createNodeUser,
  deleteNodeUser,
  replaceNodeUser,
  getNode,
  rebootNode,
  reimageNode,
  disableNodeScheduling,
  enableNodeScheduling,
  getNodeRemoteLoginSettings,
  getNodeRemoteDesktopFile,
  uploadNodeLogs,
  listNodes,
  getNodeExtension,
  listNodeExtensions,
  deleteNodeFile,
  getNodeFile,
  getNodeFileProperties,
  listNodeFiles,
} from "./operations.js";
export {
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
} from "./options.js";
