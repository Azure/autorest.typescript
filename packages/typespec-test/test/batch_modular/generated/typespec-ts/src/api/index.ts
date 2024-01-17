// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createBatch,
  BatchClientOptions,
  BatchContext,
} from "./BatchContext.js";
export { listSupportedImages, listPoolNodeCounts } from "./accounts/index.js";
export { listApplications, getApplication } from "./applications/index.js";
export {
  createCertificate,
  listCertificates,
  cancelCertificateDeletion,
  deleteCertificate,
  getCertificate,
} from "./certificates/index.js";
export {
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
} from "./jobs/index.js";
export {
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
} from "./jobSchedules/index.js";
export {
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
} from "./nodes/index.js";
export {
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
} from "./pools/index.js";
export {
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
} from "./tasks/index.js";
