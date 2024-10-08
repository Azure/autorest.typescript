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
