// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ApplicationsListApplications200Response,
  ApplicationsListApplicationsDefaultResponse,
  ApplicationsGet200Response,
  ApplicationsGetDefaultResponse,
  PoolListUsageMetrics200Response,
  PoolListUsageMetricsDefaultResponse,
  PoolGetAllPoolLifetimeStatistics200Response,
  PoolGetAllPoolLifetimeStatisticsDefaultResponse,
  PoolAddPool201Response,
  PoolAddPoolDefaultResponse,
  PoolListPools200Response,
  PoolListPoolsDefaultResponse,
  PoolDeletePool202Response,
  PoolDeletePoolDefaultResponse,
  PoolExists200Response,
  PoolExists404Response,
  PoolExistsDefaultResponse,
  PoolGetPool200Response,
  PoolGetPoolDefaultResponse,
  PoolPatchPool200Response,
  PoolPatchPoolDefaultResponse,
  PoolDisableAutoScale200Response,
  PoolDisableAutoScaleDefaultResponse,
  PoolEnableAutoScale200Response,
  PoolEnableAutoScaleDefaultResponse,
  PoolEvaluateAutoScale200Response,
  PoolEvaluateAutoScaleDefaultResponse,
  PoolResize202Response,
  PoolResizeDefaultResponse,
  PoolStopResize202Response,
  PoolStopResizeDefaultResponse,
  PoolUpdateProperties204Response,
  PoolUpdatePropertiesDefaultResponse,
  PoolRemoveNodes202Response,
  PoolRemoveNodesDefaultResponse,
  AccountListSupportedImages200Response,
  AccountListSupportedImagesDefaultResponse,
  AccountListPoolNodeCounts200Response,
  AccountListPoolNodeCountsDefaultResponse,
  JobGetAllJobLifetimeStatistics200Response,
  JobGetAllJobLifetimeStatisticsDefaultResponse,
  JobDeleteJob202Response,
  JobDeleteJobDefaultResponse,
  JobGetJob200Response,
  JobGetJobDefaultResponse,
  JobPatchJob200Response,
  JobPatchJobDefaultResponse,
  JobUpdateJob200Response,
  JobUpdateJobDefaultResponse,
  JobDisableJob202Response,
  JobDisableJobDefaultResponse,
  JobEnableJob202Response,
  JobEnableJobDefaultResponse,
  JobTerminateJob202Response,
  JobTerminateJobDefaultResponse,
  JobAddJob201Response,
  JobAddJobDefaultResponse,
  JobListJobs200Response,
  JobListJobsDefaultResponse,
  JobListFromJobSchedule200Response,
  JobListFromJobScheduleDefaultResponse,
  JobListPreparationAndReleaseTaskStatus200Response,
  JobListPreparationAndReleaseTaskStatusDefaultResponse,
  JobGetTaskCounts200Response,
  JobGetTaskCountsDefaultResponse,
  CertificatesAddCertificate201Response,
  CertificatesAddCertificateDefaultResponse,
  CertificatesListCertificates200Response,
  CertificatesListCertificatesDefaultResponse,
  CertificatesCancelCertificateDeletion204Response,
  CertificatesCancelCertificateDeletionDefaultResponse,
  CertificatesDeleteCertificate202Response,
  CertificatesDeleteCertificateDefaultResponse,
  CertificatesGetCertificate200Response,
  CertificatesGetCertificateDefaultResponse,
  FileDeleteFromTask200Response,
  FileDeleteFromTaskDefaultResponse,
  FileGetFromTask200Response,
  FileGetFromTaskDefaultResponse,
  FileGetPropertiesFromTask200Response,
  FileGetPropertiesFromTaskDefaultResponse,
  FileDeleteFromComputeNode200Response,
  FileDeleteFromComputeNodeDefaultResponse,
  FileGetFromComputeNode200Response,
  FileGetFromComputeNodeDefaultResponse,
  FileGetPropertiesFromComputeNode200Response,
  FileGetPropertiesFromComputeNodeDefaultResponse,
  FileListFromTask200Response,
  FileListFromTaskDefaultResponse,
  FileListFromComputeNode200Response,
  FileListFromComputeNodeDefaultResponse,
  JobScheduleJobScheduleExists200Response,
  JobScheduleJobScheduleExists404Response,
  JobScheduleJobScheduleExistsDefaultResponse,
  JobScheduleDeleteJobSchedule202Response,
  JobScheduleDeleteJobScheduleDefaultResponse,
  JobScheduleGetJobSchedule200Response,
  JobScheduleGetJobScheduleDefaultResponse,
  JobSchedulePatchJobSchedule200Response,
  JobSchedulePatchJobScheduleDefaultResponse,
  JobScheduleUpdateJobSchedule200Response,
  JobScheduleUpdateJobScheduleDefaultResponse,
  JobScheduleDisableJobSchedule204Response,
  JobScheduleDisableJobScheduleDefaultResponse,
  JobScheduleEnableJobSchedule204Response,
  JobScheduleEnableJobScheduleDefaultResponse,
  JobScheduleTerminateJobSchedule202Response,
  JobScheduleTerminateJobScheduleDefaultResponse,
  JobScheduleAddJobSchedule201Response,
  JobScheduleAddJobScheduleDefaultResponse,
  JobScheduleListJobSchedules200Response,
  JobScheduleListJobSchedulesDefaultResponse,
  TaskAddTask201Response,
  TaskAddTaskDefaultResponse,
  TaskListTasks200Response,
  TaskListTasksDefaultResponse,
  TaskAddTaskCollection200Response,
  TaskAddTaskCollectionDefaultResponse,
  TaskDeleteTaskCollection200Response,
  TaskDeleteTaskCollectionDefaultResponse,
  TaskGetTaskCollection200Response,
  TaskGetTaskCollectionDefaultResponse,
  TaskUpdateTaskCollection200Response,
  TaskUpdateTaskCollectionDefaultResponse,
  TaskListSubtasks200Response,
  TaskListSubtasksDefaultResponse,
  TaskTerminateTaskCollection204Response,
  TaskTerminateTaskCollectionDefaultResponse,
  TaskReactivateTaskCollection204Response,
  TaskReactivateTaskCollectionDefaultResponse,
  ComputeNodesAddUser201Response,
  ComputeNodesAddUserDefaultResponse,
  ComputeNodesDeleteUser200Response,
  ComputeNodesDeleteUserDefaultResponse,
  ComputeNodesUpdateUser200Response,
  ComputeNodesUpdateUserDefaultResponse,
  ComputeNodesGetComputeNode200Response,
  ComputeNodesGetComputeNodeDefaultResponse,
  ComputeNodesRebootComputeNode202Response,
  ComputeNodesRebootComputeNodeDefaultResponse,
  ComputeNodesReimageComputeNode202Response,
  ComputeNodesReimageComputeNodeDefaultResponse,
  ComputeNodesDisableScheduling200Response,
  ComputeNodesDisableSchedulingDefaultResponse,
  ComputeNodesEnableScheduling200Response,
  ComputeNodesEnableSchedulingDefaultResponse,
  ComputeNodesGetRemoteLoginSettings200Response,
  ComputeNodesGetRemoteLoginSettingsDefaultResponse,
  ComputeNodesGetRemoteDesktop200Response,
  ComputeNodesGetRemoteDesktopDefaultResponse,
  ComputeNodesUploadBatchServiceLogs200Response,
  ComputeNodesUploadBatchServiceLogsDefaultResponse,
  ComputeNodesList200Response,
  ComputeNodesListDefaultResponse,
  ComputeNodeExtensionsGetComputeNodeExtensions200Response,
  ComputeNodeExtensionsGetComputeNodeExtensionsDefaultResponse,
  ComputeNodeExtensionsListComputeNodeExtensions200Response,
  ComputeNodeExtensionsListComputeNodeExtensionsDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /applications": ["200"],
  "GET /applications/{applicationId}": ["200"],
  "GET /poolusagemetrics": ["200"],
  "GET /lifetimepoolstats": ["200"],
  "POST /pools": ["201"],
  "GET /pools": ["200"],
  "DELETE /pools/{poolId}": ["202"],
  "HEAD /pools/{poolId}": ["200", "404"],
  "GET /pools/{poolId}": ["200"],
  "PATCH /pools/{poolId}": ["200"],
  "POST /pools/{poolId}/disableautoscale": ["200"],
  "POST /pools/{poolId}/enableautoscale": ["200"],
  "POST /pools/{poolId}/evaluateautoscale": ["200"],
  "POST /pools/{poolId}/resize": ["202"],
  "POST /pools/{poolId}/stopresize": ["202"],
  "POST /pools/{poolId}/updateproperties": ["204"],
  "POST /pools/{poolId}/removenodes": ["202"],
  "GET /supportedimages": ["200"],
  "GET /nodecounts": ["200"],
  "GET /lifetimejobstats": ["200"],
  "DELETE /jobs/{jobId}": ["202"],
  "GET /jobs/{jobId}": ["200"],
  "PATCH /jobs/{jobId}": ["200"],
  "PUT /jobs/{jobId}": ["200"],
  "POST /jobs/{jobId}/disable": ["202"],
  "POST /jobs/{jobId}/enable": ["202"],
  "POST /jobs/{jobId}/terminate": ["202"],
  "POST /jobs": ["201"],
  "GET /jobs": ["200"],
  "GET /jobschedules/{jobScheduleId}/jobs": ["200"],
  "GET /jobs/{jobId}/jobpreparationandreleasetaskstatus": ["200"],
  "GET /jobs/{jobId}/taskcounts": ["200"],
  "POST /certificates": ["201"],
  "GET /certificates": ["200"],
  "POST /certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete":
    ["204"],
  "DELETE /certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})":
    ["202"],
  "GET /certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})":
    ["200"],
  "DELETE /jobs/{jobId}/tasks/{taskId}/files/{filePath}": ["200"],
  "GET /jobs/{jobId}/tasks/{taskId}/files/{filePath}": ["200"],
  "HEAD /jobs/{jobId}/tasks/{taskId}/files/{filePath}": ["200"],
  "DELETE /pools/{poolId}/nodes/{nodeId}/files/{filePath}": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/files/{filePath}": ["200"],
  "HEAD /pools/{poolId}/nodes/{nodeId}/files/{filePath}": ["200"],
  "GET /jobs/{jobId}/tasks/{taskId}/files": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/files": ["200"],
  "HEAD /jobschedules/{jobScheduleId}": ["200", "404"],
  "DELETE /jobschedules/{jobScheduleId}": ["202"],
  "GET /jobschedules/{jobScheduleId}": ["200"],
  "PATCH /jobschedules/{jobScheduleId}": ["200"],
  "PUT /jobschedules/{jobScheduleId}": ["200"],
  "POST /jobschedules/{jobScheduleId}/disable": ["204"],
  "POST /jobschedules/{jobScheduleId}/enable": ["204"],
  "POST /jobschedules/{jobScheduleId}/terminate": ["202"],
  "POST /jobschedules": ["201"],
  "GET /jobschedules": ["200"],
  "POST /jobs/{jobId}/tasks": ["201"],
  "GET /jobs/{jobId}/tasks": ["200"],
  "POST /jobs/{jobId}/addtaskcollection": ["200"],
  "DELETE /jobs/{jobId}/tasks/{taskId}": ["200"],
  "GET /jobs/{jobId}/tasks/{taskId}": ["200"],
  "PUT /jobs/{jobId}/tasks/{taskId}": ["200"],
  "GET /jobs/{jobId}/tasks/{taskId}/subtasksinfo": ["200"],
  "POST /jobs/{jobId}/tasks/{taskId}/terminate": ["204"],
  "POST /jobs/{jobId}/tasks/{taskId}/reactivate": ["204"],
  "POST /pools/{poolId}/nodes/{nodeId}/users": ["201"],
  "DELETE /pools/{poolId}/nodes/{nodeId}/users/{userName}": ["200"],
  "PUT /pools/{poolId}/nodes/{nodeId}/users/{userName}": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}": ["200"],
  "POST /pools/{poolId}/nodes/{nodeId}/reboot": ["202"],
  "POST /pools/{poolId}/nodes/{nodeId}/reimage": ["202"],
  "POST /pools/{poolId}/nodes/{nodeId}/disablescheduling": ["200"],
  "POST /pools/{poolId}/nodes/{nodeId}/enablescheduling": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/remoteloginsettings": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/rdp": ["200"],
  "POST /pools/{poolId}/nodes/{nodeId}/uploadbatchservicelogs": ["200"],
  "GET /pools/{poolId}/nodes": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/extensions/{extensionName}": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/extensions": ["200"],
};

export function isUnexpected(
  response:
    | ApplicationsListApplications200Response
    | ApplicationsListApplicationsDefaultResponse
): response is ApplicationsListApplicationsDefaultResponse;
export function isUnexpected(
  response: ApplicationsGet200Response | ApplicationsGetDefaultResponse
): response is ApplicationsGetDefaultResponse;
export function isUnexpected(
  response:
    | PoolListUsageMetrics200Response
    | PoolListUsageMetricsDefaultResponse
): response is PoolListUsageMetricsDefaultResponse;
export function isUnexpected(
  response:
    | PoolGetAllPoolLifetimeStatistics200Response
    | PoolGetAllPoolLifetimeStatisticsDefaultResponse
): response is PoolGetAllPoolLifetimeStatisticsDefaultResponse;
export function isUnexpected(
  response: PoolAddPool201Response | PoolAddPoolDefaultResponse
): response is PoolAddPoolDefaultResponse;
export function isUnexpected(
  response: PoolListPools200Response | PoolListPoolsDefaultResponse
): response is PoolListPoolsDefaultResponse;
export function isUnexpected(
  response: PoolDeletePool202Response | PoolDeletePoolDefaultResponse
): response is PoolDeletePoolDefaultResponse;
export function isUnexpected(
  response:
    | PoolExists200Response
    | PoolExists404Response
    | PoolExistsDefaultResponse
): response is PoolExistsDefaultResponse;
export function isUnexpected(
  response: PoolGetPool200Response | PoolGetPoolDefaultResponse
): response is PoolGetPoolDefaultResponse;
export function isUnexpected(
  response: PoolPatchPool200Response | PoolPatchPoolDefaultResponse
): response is PoolPatchPoolDefaultResponse;
export function isUnexpected(
  response:
    | PoolDisableAutoScale200Response
    | PoolDisableAutoScaleDefaultResponse
): response is PoolDisableAutoScaleDefaultResponse;
export function isUnexpected(
  response: PoolEnableAutoScale200Response | PoolEnableAutoScaleDefaultResponse
): response is PoolEnableAutoScaleDefaultResponse;
export function isUnexpected(
  response:
    | PoolEvaluateAutoScale200Response
    | PoolEvaluateAutoScaleDefaultResponse
): response is PoolEvaluateAutoScaleDefaultResponse;
export function isUnexpected(
  response: PoolResize202Response | PoolResizeDefaultResponse
): response is PoolResizeDefaultResponse;
export function isUnexpected(
  response: PoolStopResize202Response | PoolStopResizeDefaultResponse
): response is PoolStopResizeDefaultResponse;
export function isUnexpected(
  response:
    | PoolUpdateProperties204Response
    | PoolUpdatePropertiesDefaultResponse
): response is PoolUpdatePropertiesDefaultResponse;
export function isUnexpected(
  response: PoolRemoveNodes202Response | PoolRemoveNodesDefaultResponse
): response is PoolRemoveNodesDefaultResponse;
export function isUnexpected(
  response:
    | AccountListSupportedImages200Response
    | AccountListSupportedImagesDefaultResponse
): response is AccountListSupportedImagesDefaultResponse;
export function isUnexpected(
  response:
    | AccountListPoolNodeCounts200Response
    | AccountListPoolNodeCountsDefaultResponse
): response is AccountListPoolNodeCountsDefaultResponse;
export function isUnexpected(
  response:
    | JobGetAllJobLifetimeStatistics200Response
    | JobGetAllJobLifetimeStatisticsDefaultResponse
): response is JobGetAllJobLifetimeStatisticsDefaultResponse;
export function isUnexpected(
  response: JobDeleteJob202Response | JobDeleteJobDefaultResponse
): response is JobDeleteJobDefaultResponse;
export function isUnexpected(
  response: JobGetJob200Response | JobGetJobDefaultResponse
): response is JobGetJobDefaultResponse;
export function isUnexpected(
  response: JobPatchJob200Response | JobPatchJobDefaultResponse
): response is JobPatchJobDefaultResponse;
export function isUnexpected(
  response: JobUpdateJob200Response | JobUpdateJobDefaultResponse
): response is JobUpdateJobDefaultResponse;
export function isUnexpected(
  response: JobDisableJob202Response | JobDisableJobDefaultResponse
): response is JobDisableJobDefaultResponse;
export function isUnexpected(
  response: JobEnableJob202Response | JobEnableJobDefaultResponse
): response is JobEnableJobDefaultResponse;
export function isUnexpected(
  response: JobTerminateJob202Response | JobTerminateJobDefaultResponse
): response is JobTerminateJobDefaultResponse;
export function isUnexpected(
  response: JobAddJob201Response | JobAddJobDefaultResponse
): response is JobAddJobDefaultResponse;
export function isUnexpected(
  response: JobListJobs200Response | JobListJobsDefaultResponse
): response is JobListJobsDefaultResponse;
export function isUnexpected(
  response:
    | JobListFromJobSchedule200Response
    | JobListFromJobScheduleDefaultResponse
): response is JobListFromJobScheduleDefaultResponse;
export function isUnexpected(
  response:
    | JobListPreparationAndReleaseTaskStatus200Response
    | JobListPreparationAndReleaseTaskStatusDefaultResponse
): response is JobListPreparationAndReleaseTaskStatusDefaultResponse;
export function isUnexpected(
  response: JobGetTaskCounts200Response | JobGetTaskCountsDefaultResponse
): response is JobGetTaskCountsDefaultResponse;
export function isUnexpected(
  response:
    | CertificatesAddCertificate201Response
    | CertificatesAddCertificateDefaultResponse
): response is CertificatesAddCertificateDefaultResponse;
export function isUnexpected(
  response:
    | CertificatesListCertificates200Response
    | CertificatesListCertificatesDefaultResponse
): response is CertificatesListCertificatesDefaultResponse;
export function isUnexpected(
  response:
    | CertificatesCancelCertificateDeletion204Response
    | CertificatesCancelCertificateDeletionDefaultResponse
): response is CertificatesCancelCertificateDeletionDefaultResponse;
export function isUnexpected(
  response:
    | CertificatesDeleteCertificate202Response
    | CertificatesDeleteCertificateDefaultResponse
): response is CertificatesDeleteCertificateDefaultResponse;
export function isUnexpected(
  response:
    | CertificatesGetCertificate200Response
    | CertificatesGetCertificateDefaultResponse
): response is CertificatesGetCertificateDefaultResponse;
export function isUnexpected(
  response: FileDeleteFromTask200Response | FileDeleteFromTaskDefaultResponse
): response is FileDeleteFromTaskDefaultResponse;
export function isUnexpected(
  response: FileGetFromTask200Response | FileGetFromTaskDefaultResponse
): response is FileGetFromTaskDefaultResponse;
export function isUnexpected(
  response:
    | FileGetPropertiesFromTask200Response
    | FileGetPropertiesFromTaskDefaultResponse
): response is FileGetPropertiesFromTaskDefaultResponse;
export function isUnexpected(
  response:
    | FileDeleteFromComputeNode200Response
    | FileDeleteFromComputeNodeDefaultResponse
): response is FileDeleteFromComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | FileGetFromComputeNode200Response
    | FileGetFromComputeNodeDefaultResponse
): response is FileGetFromComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | FileGetPropertiesFromComputeNode200Response
    | FileGetPropertiesFromComputeNodeDefaultResponse
): response is FileGetPropertiesFromComputeNodeDefaultResponse;
export function isUnexpected(
  response: FileListFromTask200Response | FileListFromTaskDefaultResponse
): response is FileListFromTaskDefaultResponse;
export function isUnexpected(
  response:
    | FileListFromComputeNode200Response
    | FileListFromComputeNodeDefaultResponse
): response is FileListFromComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleJobScheduleExists200Response
    | JobScheduleJobScheduleExists404Response
    | JobScheduleJobScheduleExistsDefaultResponse
): response is JobScheduleJobScheduleExistsDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleDeleteJobSchedule202Response
    | JobScheduleDeleteJobScheduleDefaultResponse
): response is JobScheduleDeleteJobScheduleDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleGetJobSchedule200Response
    | JobScheduleGetJobScheduleDefaultResponse
): response is JobScheduleGetJobScheduleDefaultResponse;
export function isUnexpected(
  response:
    | JobSchedulePatchJobSchedule200Response
    | JobSchedulePatchJobScheduleDefaultResponse
): response is JobSchedulePatchJobScheduleDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleUpdateJobSchedule200Response
    | JobScheduleUpdateJobScheduleDefaultResponse
): response is JobScheduleUpdateJobScheduleDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleDisableJobSchedule204Response
    | JobScheduleDisableJobScheduleDefaultResponse
): response is JobScheduleDisableJobScheduleDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleEnableJobSchedule204Response
    | JobScheduleEnableJobScheduleDefaultResponse
): response is JobScheduleEnableJobScheduleDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleTerminateJobSchedule202Response
    | JobScheduleTerminateJobScheduleDefaultResponse
): response is JobScheduleTerminateJobScheduleDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleAddJobSchedule201Response
    | JobScheduleAddJobScheduleDefaultResponse
): response is JobScheduleAddJobScheduleDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleListJobSchedules200Response
    | JobScheduleListJobSchedulesDefaultResponse
): response is JobScheduleListJobSchedulesDefaultResponse;
export function isUnexpected(
  response: TaskAddTask201Response | TaskAddTaskDefaultResponse
): response is TaskAddTaskDefaultResponse;
export function isUnexpected(
  response: TaskListTasks200Response | TaskListTasksDefaultResponse
): response is TaskListTasksDefaultResponse;
export function isUnexpected(
  response:
    | TaskAddTaskCollection200Response
    | TaskAddTaskCollectionDefaultResponse
): response is TaskAddTaskCollectionDefaultResponse;
export function isUnexpected(
  response:
    | TaskDeleteTaskCollection200Response
    | TaskDeleteTaskCollectionDefaultResponse
): response is TaskDeleteTaskCollectionDefaultResponse;
export function isUnexpected(
  response:
    | TaskGetTaskCollection200Response
    | TaskGetTaskCollectionDefaultResponse
): response is TaskGetTaskCollectionDefaultResponse;
export function isUnexpected(
  response:
    | TaskUpdateTaskCollection200Response
    | TaskUpdateTaskCollectionDefaultResponse
): response is TaskUpdateTaskCollectionDefaultResponse;
export function isUnexpected(
  response: TaskListSubtasks200Response | TaskListSubtasksDefaultResponse
): response is TaskListSubtasksDefaultResponse;
export function isUnexpected(
  response:
    | TaskTerminateTaskCollection204Response
    | TaskTerminateTaskCollectionDefaultResponse
): response is TaskTerminateTaskCollectionDefaultResponse;
export function isUnexpected(
  response:
    | TaskReactivateTaskCollection204Response
    | TaskReactivateTaskCollectionDefaultResponse
): response is TaskReactivateTaskCollectionDefaultResponse;
export function isUnexpected(
  response: ComputeNodesAddUser201Response | ComputeNodesAddUserDefaultResponse
): response is ComputeNodesAddUserDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesDeleteUser200Response
    | ComputeNodesDeleteUserDefaultResponse
): response is ComputeNodesDeleteUserDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesUpdateUser200Response
    | ComputeNodesUpdateUserDefaultResponse
): response is ComputeNodesUpdateUserDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesGetComputeNode200Response
    | ComputeNodesGetComputeNodeDefaultResponse
): response is ComputeNodesGetComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesRebootComputeNode202Response
    | ComputeNodesRebootComputeNodeDefaultResponse
): response is ComputeNodesRebootComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesReimageComputeNode202Response
    | ComputeNodesReimageComputeNodeDefaultResponse
): response is ComputeNodesReimageComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesDisableScheduling200Response
    | ComputeNodesDisableSchedulingDefaultResponse
): response is ComputeNodesDisableSchedulingDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesEnableScheduling200Response
    | ComputeNodesEnableSchedulingDefaultResponse
): response is ComputeNodesEnableSchedulingDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesGetRemoteLoginSettings200Response
    | ComputeNodesGetRemoteLoginSettingsDefaultResponse
): response is ComputeNodesGetRemoteLoginSettingsDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesGetRemoteDesktop200Response
    | ComputeNodesGetRemoteDesktopDefaultResponse
): response is ComputeNodesGetRemoteDesktopDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesUploadBatchServiceLogs200Response
    | ComputeNodesUploadBatchServiceLogsDefaultResponse
): response is ComputeNodesUploadBatchServiceLogsDefaultResponse;
export function isUnexpected(
  response: ComputeNodesList200Response | ComputeNodesListDefaultResponse
): response is ComputeNodesListDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeExtensionsGetComputeNodeExtensions200Response
    | ComputeNodeExtensionsGetComputeNodeExtensionsDefaultResponse
): response is ComputeNodeExtensionsGetComputeNodeExtensionsDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeExtensionsListComputeNodeExtensions200Response
    | ComputeNodeExtensionsListComputeNodeExtensionsDefaultResponse
): response is ComputeNodeExtensionsListComputeNodeExtensionsDefaultResponse;
export function isUnexpected(
  response:
    | ApplicationsListApplications200Response
    | ApplicationsListApplicationsDefaultResponse
    | ApplicationsGet200Response
    | ApplicationsGetDefaultResponse
    | PoolListUsageMetrics200Response
    | PoolListUsageMetricsDefaultResponse
    | PoolGetAllPoolLifetimeStatistics200Response
    | PoolGetAllPoolLifetimeStatisticsDefaultResponse
    | PoolAddPool201Response
    | PoolAddPoolDefaultResponse
    | PoolListPools200Response
    | PoolListPoolsDefaultResponse
    | PoolDeletePool202Response
    | PoolDeletePoolDefaultResponse
    | PoolExists200Response
    | PoolExists404Response
    | PoolExistsDefaultResponse
    | PoolGetPool200Response
    | PoolGetPoolDefaultResponse
    | PoolPatchPool200Response
    | PoolPatchPoolDefaultResponse
    | PoolDisableAutoScale200Response
    | PoolDisableAutoScaleDefaultResponse
    | PoolEnableAutoScale200Response
    | PoolEnableAutoScaleDefaultResponse
    | PoolEvaluateAutoScale200Response
    | PoolEvaluateAutoScaleDefaultResponse
    | PoolResize202Response
    | PoolResizeDefaultResponse
    | PoolStopResize202Response
    | PoolStopResizeDefaultResponse
    | PoolUpdateProperties204Response
    | PoolUpdatePropertiesDefaultResponse
    | PoolRemoveNodes202Response
    | PoolRemoveNodesDefaultResponse
    | AccountListSupportedImages200Response
    | AccountListSupportedImagesDefaultResponse
    | AccountListPoolNodeCounts200Response
    | AccountListPoolNodeCountsDefaultResponse
    | JobGetAllJobLifetimeStatistics200Response
    | JobGetAllJobLifetimeStatisticsDefaultResponse
    | JobDeleteJob202Response
    | JobDeleteJobDefaultResponse
    | JobGetJob200Response
    | JobGetJobDefaultResponse
    | JobPatchJob200Response
    | JobPatchJobDefaultResponse
    | JobUpdateJob200Response
    | JobUpdateJobDefaultResponse
    | JobDisableJob202Response
    | JobDisableJobDefaultResponse
    | JobEnableJob202Response
    | JobEnableJobDefaultResponse
    | JobTerminateJob202Response
    | JobTerminateJobDefaultResponse
    | JobAddJob201Response
    | JobAddJobDefaultResponse
    | JobListJobs200Response
    | JobListJobsDefaultResponse
    | JobListFromJobSchedule200Response
    | JobListFromJobScheduleDefaultResponse
    | JobListPreparationAndReleaseTaskStatus200Response
    | JobListPreparationAndReleaseTaskStatusDefaultResponse
    | JobGetTaskCounts200Response
    | JobGetTaskCountsDefaultResponse
    | CertificatesAddCertificate201Response
    | CertificatesAddCertificateDefaultResponse
    | CertificatesListCertificates200Response
    | CertificatesListCertificatesDefaultResponse
    | CertificatesCancelCertificateDeletion204Response
    | CertificatesCancelCertificateDeletionDefaultResponse
    | CertificatesDeleteCertificate202Response
    | CertificatesDeleteCertificateDefaultResponse
    | CertificatesGetCertificate200Response
    | CertificatesGetCertificateDefaultResponse
    | FileDeleteFromTask200Response
    | FileDeleteFromTaskDefaultResponse
    | FileGetFromTask200Response
    | FileGetFromTaskDefaultResponse
    | FileGetPropertiesFromTask200Response
    | FileGetPropertiesFromTaskDefaultResponse
    | FileDeleteFromComputeNode200Response
    | FileDeleteFromComputeNodeDefaultResponse
    | FileGetFromComputeNode200Response
    | FileGetFromComputeNodeDefaultResponse
    | FileGetPropertiesFromComputeNode200Response
    | FileGetPropertiesFromComputeNodeDefaultResponse
    | FileListFromTask200Response
    | FileListFromTaskDefaultResponse
    | FileListFromComputeNode200Response
    | FileListFromComputeNodeDefaultResponse
    | JobScheduleJobScheduleExists200Response
    | JobScheduleJobScheduleExists404Response
    | JobScheduleJobScheduleExistsDefaultResponse
    | JobScheduleDeleteJobSchedule202Response
    | JobScheduleDeleteJobScheduleDefaultResponse
    | JobScheduleGetJobSchedule200Response
    | JobScheduleGetJobScheduleDefaultResponse
    | JobSchedulePatchJobSchedule200Response
    | JobSchedulePatchJobScheduleDefaultResponse
    | JobScheduleUpdateJobSchedule200Response
    | JobScheduleUpdateJobScheduleDefaultResponse
    | JobScheduleDisableJobSchedule204Response
    | JobScheduleDisableJobScheduleDefaultResponse
    | JobScheduleEnableJobSchedule204Response
    | JobScheduleEnableJobScheduleDefaultResponse
    | JobScheduleTerminateJobSchedule202Response
    | JobScheduleTerminateJobScheduleDefaultResponse
    | JobScheduleAddJobSchedule201Response
    | JobScheduleAddJobScheduleDefaultResponse
    | JobScheduleListJobSchedules200Response
    | JobScheduleListJobSchedulesDefaultResponse
    | TaskAddTask201Response
    | TaskAddTaskDefaultResponse
    | TaskListTasks200Response
    | TaskListTasksDefaultResponse
    | TaskAddTaskCollection200Response
    | TaskAddTaskCollectionDefaultResponse
    | TaskDeleteTaskCollection200Response
    | TaskDeleteTaskCollectionDefaultResponse
    | TaskGetTaskCollection200Response
    | TaskGetTaskCollectionDefaultResponse
    | TaskUpdateTaskCollection200Response
    | TaskUpdateTaskCollectionDefaultResponse
    | TaskListSubtasks200Response
    | TaskListSubtasksDefaultResponse
    | TaskTerminateTaskCollection204Response
    | TaskTerminateTaskCollectionDefaultResponse
    | TaskReactivateTaskCollection204Response
    | TaskReactivateTaskCollectionDefaultResponse
    | ComputeNodesAddUser201Response
    | ComputeNodesAddUserDefaultResponse
    | ComputeNodesDeleteUser200Response
    | ComputeNodesDeleteUserDefaultResponse
    | ComputeNodesUpdateUser200Response
    | ComputeNodesUpdateUserDefaultResponse
    | ComputeNodesGetComputeNode200Response
    | ComputeNodesGetComputeNodeDefaultResponse
    | ComputeNodesRebootComputeNode202Response
    | ComputeNodesRebootComputeNodeDefaultResponse
    | ComputeNodesReimageComputeNode202Response
    | ComputeNodesReimageComputeNodeDefaultResponse
    | ComputeNodesDisableScheduling200Response
    | ComputeNodesDisableSchedulingDefaultResponse
    | ComputeNodesEnableScheduling200Response
    | ComputeNodesEnableSchedulingDefaultResponse
    | ComputeNodesGetRemoteLoginSettings200Response
    | ComputeNodesGetRemoteLoginSettingsDefaultResponse
    | ComputeNodesGetRemoteDesktop200Response
    | ComputeNodesGetRemoteDesktopDefaultResponse
    | ComputeNodesUploadBatchServiceLogs200Response
    | ComputeNodesUploadBatchServiceLogsDefaultResponse
    | ComputeNodesList200Response
    | ComputeNodesListDefaultResponse
    | ComputeNodeExtensionsGetComputeNodeExtensions200Response
    | ComputeNodeExtensionsGetComputeNodeExtensionsDefaultResponse
    | ComputeNodeExtensionsListComputeNodeExtensions200Response
    | ComputeNodeExtensionsListComputeNodeExtensionsDefaultResponse
): response is
  | ApplicationsListApplicationsDefaultResponse
  | ApplicationsGetDefaultResponse
  | PoolListUsageMetricsDefaultResponse
  | PoolGetAllPoolLifetimeStatisticsDefaultResponse
  | PoolAddPoolDefaultResponse
  | PoolListPoolsDefaultResponse
  | PoolDeletePoolDefaultResponse
  | PoolExistsDefaultResponse
  | PoolGetPoolDefaultResponse
  | PoolPatchPoolDefaultResponse
  | PoolDisableAutoScaleDefaultResponse
  | PoolEnableAutoScaleDefaultResponse
  | PoolEvaluateAutoScaleDefaultResponse
  | PoolResizeDefaultResponse
  | PoolStopResizeDefaultResponse
  | PoolUpdatePropertiesDefaultResponse
  | PoolRemoveNodesDefaultResponse
  | AccountListSupportedImagesDefaultResponse
  | AccountListPoolNodeCountsDefaultResponse
  | JobGetAllJobLifetimeStatisticsDefaultResponse
  | JobDeleteJobDefaultResponse
  | JobGetJobDefaultResponse
  | JobPatchJobDefaultResponse
  | JobUpdateJobDefaultResponse
  | JobDisableJobDefaultResponse
  | JobEnableJobDefaultResponse
  | JobTerminateJobDefaultResponse
  | JobAddJobDefaultResponse
  | JobListJobsDefaultResponse
  | JobListFromJobScheduleDefaultResponse
  | JobListPreparationAndReleaseTaskStatusDefaultResponse
  | JobGetTaskCountsDefaultResponse
  | CertificatesAddCertificateDefaultResponse
  | CertificatesListCertificatesDefaultResponse
  | CertificatesCancelCertificateDeletionDefaultResponse
  | CertificatesDeleteCertificateDefaultResponse
  | CertificatesGetCertificateDefaultResponse
  | FileDeleteFromTaskDefaultResponse
  | FileGetFromTaskDefaultResponse
  | FileGetPropertiesFromTaskDefaultResponse
  | FileDeleteFromComputeNodeDefaultResponse
  | FileGetFromComputeNodeDefaultResponse
  | FileGetPropertiesFromComputeNodeDefaultResponse
  | FileListFromTaskDefaultResponse
  | FileListFromComputeNodeDefaultResponse
  | JobScheduleJobScheduleExistsDefaultResponse
  | JobScheduleDeleteJobScheduleDefaultResponse
  | JobScheduleGetJobScheduleDefaultResponse
  | JobSchedulePatchJobScheduleDefaultResponse
  | JobScheduleUpdateJobScheduleDefaultResponse
  | JobScheduleDisableJobScheduleDefaultResponse
  | JobScheduleEnableJobScheduleDefaultResponse
  | JobScheduleTerminateJobScheduleDefaultResponse
  | JobScheduleAddJobScheduleDefaultResponse
  | JobScheduleListJobSchedulesDefaultResponse
  | TaskAddTaskDefaultResponse
  | TaskListTasksDefaultResponse
  | TaskAddTaskCollectionDefaultResponse
  | TaskDeleteTaskCollectionDefaultResponse
  | TaskGetTaskCollectionDefaultResponse
  | TaskUpdateTaskCollectionDefaultResponse
  | TaskListSubtasksDefaultResponse
  | TaskTerminateTaskCollectionDefaultResponse
  | TaskReactivateTaskCollectionDefaultResponse
  | ComputeNodesAddUserDefaultResponse
  | ComputeNodesDeleteUserDefaultResponse
  | ComputeNodesUpdateUserDefaultResponse
  | ComputeNodesGetComputeNodeDefaultResponse
  | ComputeNodesRebootComputeNodeDefaultResponse
  | ComputeNodesReimageComputeNodeDefaultResponse
  | ComputeNodesDisableSchedulingDefaultResponse
  | ComputeNodesEnableSchedulingDefaultResponse
  | ComputeNodesGetRemoteLoginSettingsDefaultResponse
  | ComputeNodesGetRemoteDesktopDefaultResponse
  | ComputeNodesUploadBatchServiceLogsDefaultResponse
  | ComputeNodesListDefaultResponse
  | ComputeNodeExtensionsGetComputeNodeExtensionsDefaultResponse
  | ComputeNodeExtensionsListComputeNodeExtensionsDefaultResponse {
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
          `${candidateParts[i]?.slice(start, end)}`
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
