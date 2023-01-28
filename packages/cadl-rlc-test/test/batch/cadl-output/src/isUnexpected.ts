// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ApplicationOperationsList200Response,
  ApplicationOperationsListDefaultResponse,
  ApplicationOperationsGet200Response,
  ApplicationOperationsGetDefaultResponse,
  PoolOperationsListUsageMetrics200Response,
  PoolOperationsListUsageMetricsDefaultResponse,
  PoolOperationsGetAllLifetimeStatistics200Response,
  PoolOperationsGetAllLifetimeStatisticsDefaultResponse,
  PoolOperationsAdd204Response,
  PoolOperationsAddDefaultResponse,
  PoolOperationsList200Response,
  PoolOperationsListDefaultResponse,
  PoolOperationsDelete204Response,
  PoolOperationsDeleteDefaultResponse,
  PoolOperationsExists204Response,
  PoolOperationsExistsDefaultResponse,
  PoolOperationsGet200Response,
  PoolOperationsGetDefaultResponse,
  PoolOperationsPatch204Response,
  PoolOperationsPatchDefaultResponse,
  PoolOperationsDisableAutoScale204Response,
  PoolOperationsDisableAutoScaleDefaultResponse,
  PoolOperationsEnableAutoScale204Response,
  PoolOperationsEnableAutoScaleDefaultResponse,
  PoolOperationsEvaluateAutoScale200Response,
  PoolOperationsEvaluateAutoScaleDefaultResponse,
  PoolOperationsResize204Response,
  PoolOperationsResizeDefaultResponse,
  PoolOperationsStopResize204Response,
  PoolOperationsStopResizeDefaultResponse,
  PoolOperationsUpdateProperties204Response,
  PoolOperationsUpdatePropertiesDefaultResponse,
  PoolOperationsRemoveNodes204Response,
  PoolOperationsRemoveNodesDefaultResponse,
  AccountOperationsListSupportedImages200Response,
  AccountOperationsListSupportedImagesDefaultResponse,
  AccountOperationsListPoolNodeCounts200Response,
  AccountOperationsListPoolNodeCountsDefaultResponse,
  JobOperationsGetAllLifetimeStatistics200Response,
  JobOperationsGetAllLifetimeStatisticsDefaultResponse,
  JobOperationsDelete204Response,
  JobOperationsDeleteDefaultResponse,
  JobOperationsGet200Response,
  JobOperationsGetDefaultResponse,
  JobOperationsPatch204Response,
  JobOperationsPatchDefaultResponse,
  JobOperationsUpdate204Response,
  JobOperationsUpdateDefaultResponse,
  JobOperationsDisable204Response,
  JobOperationsDisableDefaultResponse,
  JobOperationsEnable204Response,
  JobOperationsEnableDefaultResponse,
  JobOperationsTerminate204Response,
  JobOperationsTerminateDefaultResponse,
  JobOperationsAdd204Response,
  JobOperationsAddDefaultResponse,
  JobOperationsList200Response,
  JobOperationsListDefaultResponse,
  JobOperationsListFromJobSchedule200Response,
  JobOperationsListFromJobScheduleDefaultResponse,
  JobOperationsListPreparationAndReleaseTaskStatus200Response,
  JobOperationsListPreparationAndReleaseTaskStatusDefaultResponse,
  JobOperationsGetTaskCounts200Response,
  JobOperationsGetTaskCountsDefaultResponse,
  CertificateOperationsAdd204Response,
  CertificateOperationsAddDefaultResponse,
  CertificateOperationsList200Response,
  CertificateOperationsListDefaultResponse,
  CertificateOperationsCancelDeletion204Response,
  CertificateOperationsCancelDeletionDefaultResponse,
  CertificateOperationsDelete204Response,
  CertificateOperationsDeleteDefaultResponse,
  CertificateOperationsGet200Response,
  CertificateOperationsGetDefaultResponse,
  FileOperationsDeleteFromTask204Response,
  FileOperationsDeleteFromTaskDefaultResponse,
  FileOperationsGetFromTask204Response,
  FileOperationsGetFromTaskDefaultResponse,
  FileOperationsGetPropertiesFromTask204Response,
  FileOperationsGetPropertiesFromTaskDefaultResponse,
  FileOperationsDeleteFromComputeNode204Response,
  FileOperationsDeleteFromComputeNodeDefaultResponse,
  FileOperationsGetFromComputeNode204Response,
  FileOperationsGetFromComputeNodeDefaultResponse,
  FileOperationsGetPropertiesFromComputeNode204Response,
  FileOperationsGetPropertiesFromComputeNodeDefaultResponse,
  FileOperationsListFromTask200Response,
  FileOperationsListFromTaskDefaultResponse,
  FileOperationsListFromComputeNode200Response,
  FileOperationsListFromComputeNodeDefaultResponse,
  JobScheduleOperationsExists204Response,
  JobScheduleOperationsExistsDefaultResponse,
  JobScheduleOperationsDelete204Response,
  JobScheduleOperationsDeleteDefaultResponse,
  JobScheduleOperationsGet200Response,
  JobScheduleOperationsGetDefaultResponse,
  JobScheduleOperationsPatch204Response,
  JobScheduleOperationsPatchDefaultResponse,
  JobScheduleOperationsUpdate204Response,
  JobScheduleOperationsUpdateDefaultResponse,
  JobScheduleOperationsDisable204Response,
  JobScheduleOperationsDisableDefaultResponse,
  JobScheduleOperationsEnable204Response,
  JobScheduleOperationsEnableDefaultResponse,
  JobScheduleOperationsTerminate204Response,
  JobScheduleOperationsTerminateDefaultResponse,
  JobScheduleOperationsAdd204Response,
  JobScheduleOperationsAddDefaultResponse,
  JobScheduleOperationsList200Response,
  JobScheduleOperationsListDefaultResponse,
  TaskOperationsAdd204Response,
  TaskOperationsAddDefaultResponse,
  TaskOperationsList200Response,
  TaskOperationsListDefaultResponse,
  TaskOperationsAddCollection200Response,
  TaskOperationsAddCollectionDefaultResponse,
  TaskOperationsDelete204Response,
  TaskOperationsDeleteDefaultResponse,
  TaskOperationsGet200Response,
  TaskOperationsGetDefaultResponse,
  TaskOperationsUpdate204Response,
  TaskOperationsUpdateDefaultResponse,
  TaskOperationsListSubtasks200Response,
  TaskOperationsListSubtasksDefaultResponse,
  TaskOperationsTerminate204Response,
  TaskOperationsTerminateDefaultResponse,
  TaskOperationsReactivate204Response,
  TaskOperationsReactivateDefaultResponse,
  ComputeNodeOperationsAddUser204Response,
  ComputeNodeOperationsAddUserDefaultResponse,
  ComputeNodeOperationsDeleteUser204Response,
  ComputeNodeOperationsDeleteUserDefaultResponse,
  ComputeNodeOperationsUpdateUser204Response,
  ComputeNodeOperationsUpdateUserDefaultResponse,
  ComputeNodeOperationsGet200Response,
  ComputeNodeOperationsGetDefaultResponse,
  ComputeNodeOperationsReboot204Response,
  ComputeNodeOperationsRebootDefaultResponse,
  ComputeNodeOperationsReimage204Response,
  ComputeNodeOperationsReimageDefaultResponse,
  ComputeNodeOperationsDisableScheduling204Response,
  ComputeNodeOperationsDisableSchedulingDefaultResponse,
  ComputeNodeOperationsEnableScheduling204Response,
  ComputeNodeOperationsEnableSchedulingDefaultResponse,
  ComputeNodeOperationsGetRemoteLoginSettings200Response,
  ComputeNodeOperationsGetRemoteLoginSettingsDefaultResponse,
  ComputeNodeOperationsGetRemoteDesktop204Response,
  ComputeNodeOperationsGetRemoteDesktopDefaultResponse,
  ComputeNodeOperationsUploadBatchServiceLogs201Response,
  ComputeNodeOperationsUploadBatchServiceLogsDefaultResponse,
  ComputeNodeOperationsList200Response,
  ComputeNodeOperationsListDefaultResponse,
  ComputeNodeExtensionOperationsGet200Response,
  ComputeNodeExtensionOperationsGetDefaultResponse,
  ComputeNodeExtensionOperationsList200Response,
  ComputeNodeExtensionOperationsListDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /applications": ["200"],
  "GET /applications/{id}": ["200"],
  "GET /poolusagemetrics": ["200"],
  "GET /lifetimepoolstats": ["200"],
  "POST /pools": ["204"],
  "GET /pools": ["200"],
  "DELETE /pools/{poolId}": ["204"],
  "HEAD /pools/{poolId}": ["204"],
  "GET /pools/{poolId}": ["200"],
  "PATCH /pools/{poolId}": ["204"],
  "POST /pools/{poolId}/disableautoscale": ["204"],
  "POST /pools/{poolId}/enableautoscale": ["204"],
  "POST /pools/{poolId}/evaluateautoscale": ["200"],
  "POST /pools/{poolId}/resize": ["204"],
  "POST /pools/{poolId}/stopresize": ["204"],
  "POST /pools/{poolId}/updateproperties": ["204"],
  "POST /pools/{poolId}/removenodes": ["204"],
  "GET /supportedimages": ["200"],
  "GET /nodecounts": ["200"],
  "GET /lifetimejobstats": ["200"],
  "DELETE /jobs/{jobId}": ["204"],
  "GET /jobs/{jobId}": ["200"],
  "PATCH /jobs/{jobId}": ["204"],
  "PUT /jobs/{jobId}": ["204"],
  "POST /jobs/{jobId}/disable": ["204"],
  "POST /jobs/{jobId}/enable": ["204"],
  "POST /jobs/{jobId}/terminate": ["204"],
  "POST /jobs": ["204"],
  "GET /jobs": ["200"],
  "GET /jobschedules/{jobScheduleId}/jobs": ["200"],
  "GET /jobs/{jobId}/jobpreparationandreleasetaskstatus": ["200"],
  "GET /jobs/{jobId}/taskcounts": ["200"],
  "POST /certificates": ["204"],
  "GET /certificates": ["200"],
  "POST /certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete":
    ["204"],
  "DELETE /certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})":
    ["204"],
  "GET /certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})":
    ["200"],
  "DELETE /jobs/{jobId}/tasks/{taskId}/files/{filePath}": ["204"],
  "GET /jobs/{jobId}/tasks/{taskId}/files/{filePath}": ["204"],
  "HEAD /jobs/{jobId}/tasks/{taskId}/files/{filePath}": ["204"],
  "DELETE /pools/{poolId}/nodes/{nodeId}/files/{filePath}": ["204"],
  "GET /pools/{poolId}/nodes/{nodeId}/files/{filePath}": ["204"],
  "HEAD /pools/{poolId}/nodes/{nodeId}/files/{filePath}": ["204"],
  "GET /jobs/{jobId}/tasks/{taskId}/files": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/files": ["200"],
  "HEAD /jobschedules/{jobScheduleId}": ["204"],
  "DELETE /jobschedules/{jobScheduleId}": ["204"],
  "GET /jobschedules/{jobScheduleId}": ["200"],
  "PATCH /jobschedules/{jobScheduleId}": ["204"],
  "PUT /jobschedules/{jobScheduleId}": ["204"],
  "POST /jobschedules/{jobScheduleId}/disable": ["204"],
  "POST /jobschedules/{jobScheduleId}/enable": ["204"],
  "POST /jobschedules/{jobScheduleId}/terminate": ["204"],
  "POST /jobschedules": ["204"],
  "GET /jobschedules": ["200"],
  "POST /jobs/{jobId}/tasks": ["204"],
  "GET /jobs/{jobId}/tasks": ["200"],
  "POST /jobs/{jobId}/addtaskcollection": ["200"],
  "DELETE /jobs/{jobId}/tasks/{taskId}": ["204"],
  "GET /jobs/{jobId}/tasks/{taskId}": ["200"],
  "PUT /jobs/{jobId}/tasks/{taskId}": ["204"],
  "GET /jobs/{jobId}/tasks/{taskId}/subtasksinfo": ["200"],
  "POST /jobs/{jobId}/tasks/{taskId}/terminate": ["204"],
  "POST /jobs/{jobId}/tasks/{taskId}/reactivate": ["204"],
  "POST /pools/{poolId}/nodes/{nodeId}/users": ["204"],
  "DELETE /pools/{poolId}/nodes/{nodeId}/users/{userName}": ["204"],
  "PUT /pools/{poolId}/nodes/{nodeId}/users/{userName}": ["204"],
  "GET /pools/{poolId}/nodes/{nodeId}": ["200"],
  "POST /pools/{poolId}/nodes/{nodeId}/reboot": ["204"],
  "POST /pools/{poolId}/nodes/{nodeId}/reimage": ["204"],
  "POST /pools/{poolId}/nodes/{nodeId}/disablescheduling": ["204"],
  "POST /pools/{poolId}/nodes/{nodeId}/enablescheduling": ["204"],
  "GET /pools/{poolId}/nodes/{nodeId}/remoteloginsettings": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/rdp": ["204"],
  "POST /pools/{poolId}/nodes/{nodeId}/uploadbatchservicelogs": ["201"],
  "GET /pools/{poolId}/nodes": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/extensions/{extensionName}": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/extensions": ["200"],
};

export function isUnexpected(
  response:
    | ApplicationOperationsList200Response
    | ApplicationOperationsListDefaultResponse
): response is ApplicationOperationsListDefaultResponse;
export function isUnexpected(
  response:
    | ApplicationOperationsGet200Response
    | ApplicationOperationsGetDefaultResponse
): response is ApplicationOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | PoolOperationsListUsageMetrics200Response
    | PoolOperationsListUsageMetricsDefaultResponse
): response is PoolOperationsListUsageMetricsDefaultResponse;
export function isUnexpected(
  response:
    | PoolOperationsGetAllLifetimeStatistics200Response
    | PoolOperationsGetAllLifetimeStatisticsDefaultResponse
): response is PoolOperationsGetAllLifetimeStatisticsDefaultResponse;
export function isUnexpected(
  response: PoolOperationsAdd204Response | PoolOperationsAddDefaultResponse
): response is PoolOperationsAddDefaultResponse;
export function isUnexpected(
  response: PoolOperationsList200Response | PoolOperationsListDefaultResponse
): response is PoolOperationsListDefaultResponse;
export function isUnexpected(
  response:
    | PoolOperationsDelete204Response
    | PoolOperationsDeleteDefaultResponse
): response is PoolOperationsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | PoolOperationsExists204Response
    | PoolOperationsExistsDefaultResponse
): response is PoolOperationsExistsDefaultResponse;
export function isUnexpected(
  response: PoolOperationsGet200Response | PoolOperationsGetDefaultResponse
): response is PoolOperationsGetDefaultResponse;
export function isUnexpected(
  response: PoolOperationsPatch204Response | PoolOperationsPatchDefaultResponse
): response is PoolOperationsPatchDefaultResponse;
export function isUnexpected(
  response:
    | PoolOperationsDisableAutoScale204Response
    | PoolOperationsDisableAutoScaleDefaultResponse
): response is PoolOperationsDisableAutoScaleDefaultResponse;
export function isUnexpected(
  response:
    | PoolOperationsEnableAutoScale204Response
    | PoolOperationsEnableAutoScaleDefaultResponse
): response is PoolOperationsEnableAutoScaleDefaultResponse;
export function isUnexpected(
  response:
    | PoolOperationsEvaluateAutoScale200Response
    | PoolOperationsEvaluateAutoScaleDefaultResponse
): response is PoolOperationsEvaluateAutoScaleDefaultResponse;
export function isUnexpected(
  response:
    | PoolOperationsResize204Response
    | PoolOperationsResizeDefaultResponse
): response is PoolOperationsResizeDefaultResponse;
export function isUnexpected(
  response:
    | PoolOperationsStopResize204Response
    | PoolOperationsStopResizeDefaultResponse
): response is PoolOperationsStopResizeDefaultResponse;
export function isUnexpected(
  response:
    | PoolOperationsUpdateProperties204Response
    | PoolOperationsUpdatePropertiesDefaultResponse
): response is PoolOperationsUpdatePropertiesDefaultResponse;
export function isUnexpected(
  response:
    | PoolOperationsRemoveNodes204Response
    | PoolOperationsRemoveNodesDefaultResponse
): response is PoolOperationsRemoveNodesDefaultResponse;
export function isUnexpected(
  response:
    | AccountOperationsListSupportedImages200Response
    | AccountOperationsListSupportedImagesDefaultResponse
): response is AccountOperationsListSupportedImagesDefaultResponse;
export function isUnexpected(
  response:
    | AccountOperationsListPoolNodeCounts200Response
    | AccountOperationsListPoolNodeCountsDefaultResponse
): response is AccountOperationsListPoolNodeCountsDefaultResponse;
export function isUnexpected(
  response:
    | JobOperationsGetAllLifetimeStatistics200Response
    | JobOperationsGetAllLifetimeStatisticsDefaultResponse
): response is JobOperationsGetAllLifetimeStatisticsDefaultResponse;
export function isUnexpected(
  response: JobOperationsDelete204Response | JobOperationsDeleteDefaultResponse
): response is JobOperationsDeleteDefaultResponse;
export function isUnexpected(
  response: JobOperationsGet200Response | JobOperationsGetDefaultResponse
): response is JobOperationsGetDefaultResponse;
export function isUnexpected(
  response: JobOperationsPatch204Response | JobOperationsPatchDefaultResponse
): response is JobOperationsPatchDefaultResponse;
export function isUnexpected(
  response: JobOperationsUpdate204Response | JobOperationsUpdateDefaultResponse
): response is JobOperationsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | JobOperationsDisable204Response
    | JobOperationsDisableDefaultResponse
): response is JobOperationsDisableDefaultResponse;
export function isUnexpected(
  response: JobOperationsEnable204Response | JobOperationsEnableDefaultResponse
): response is JobOperationsEnableDefaultResponse;
export function isUnexpected(
  response:
    | JobOperationsTerminate204Response
    | JobOperationsTerminateDefaultResponse
): response is JobOperationsTerminateDefaultResponse;
export function isUnexpected(
  response: JobOperationsAdd204Response | JobOperationsAddDefaultResponse
): response is JobOperationsAddDefaultResponse;
export function isUnexpected(
  response: JobOperationsList200Response | JobOperationsListDefaultResponse
): response is JobOperationsListDefaultResponse;
export function isUnexpected(
  response:
    | JobOperationsListFromJobSchedule200Response
    | JobOperationsListFromJobScheduleDefaultResponse
): response is JobOperationsListFromJobScheduleDefaultResponse;
export function isUnexpected(
  response:
    | JobOperationsListPreparationAndReleaseTaskStatus200Response
    | JobOperationsListPreparationAndReleaseTaskStatusDefaultResponse
): response is JobOperationsListPreparationAndReleaseTaskStatusDefaultResponse;
export function isUnexpected(
  response:
    | JobOperationsGetTaskCounts200Response
    | JobOperationsGetTaskCountsDefaultResponse
): response is JobOperationsGetTaskCountsDefaultResponse;
export function isUnexpected(
  response:
    | CertificateOperationsAdd204Response
    | CertificateOperationsAddDefaultResponse
): response is CertificateOperationsAddDefaultResponse;
export function isUnexpected(
  response:
    | CertificateOperationsList200Response
    | CertificateOperationsListDefaultResponse
): response is CertificateOperationsListDefaultResponse;
export function isUnexpected(
  response:
    | CertificateOperationsCancelDeletion204Response
    | CertificateOperationsCancelDeletionDefaultResponse
): response is CertificateOperationsCancelDeletionDefaultResponse;
export function isUnexpected(
  response:
    | CertificateOperationsDelete204Response
    | CertificateOperationsDeleteDefaultResponse
): response is CertificateOperationsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | CertificateOperationsGet200Response
    | CertificateOperationsGetDefaultResponse
): response is CertificateOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | FileOperationsDeleteFromTask204Response
    | FileOperationsDeleteFromTaskDefaultResponse
): response is FileOperationsDeleteFromTaskDefaultResponse;
export function isUnexpected(
  response:
    | FileOperationsGetFromTask204Response
    | FileOperationsGetFromTaskDefaultResponse
): response is FileOperationsGetFromTaskDefaultResponse;
export function isUnexpected(
  response:
    | FileOperationsGetPropertiesFromTask204Response
    | FileOperationsGetPropertiesFromTaskDefaultResponse
): response is FileOperationsGetPropertiesFromTaskDefaultResponse;
export function isUnexpected(
  response:
    | FileOperationsDeleteFromComputeNode204Response
    | FileOperationsDeleteFromComputeNodeDefaultResponse
): response is FileOperationsDeleteFromComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | FileOperationsGetFromComputeNode204Response
    | FileOperationsGetFromComputeNodeDefaultResponse
): response is FileOperationsGetFromComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | FileOperationsGetPropertiesFromComputeNode204Response
    | FileOperationsGetPropertiesFromComputeNodeDefaultResponse
): response is FileOperationsGetPropertiesFromComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | FileOperationsListFromTask200Response
    | FileOperationsListFromTaskDefaultResponse
): response is FileOperationsListFromTaskDefaultResponse;
export function isUnexpected(
  response:
    | FileOperationsListFromComputeNode200Response
    | FileOperationsListFromComputeNodeDefaultResponse
): response is FileOperationsListFromComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleOperationsExists204Response
    | JobScheduleOperationsExistsDefaultResponse
): response is JobScheduleOperationsExistsDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleOperationsDelete204Response
    | JobScheduleOperationsDeleteDefaultResponse
): response is JobScheduleOperationsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleOperationsGet200Response
    | JobScheduleOperationsGetDefaultResponse
): response is JobScheduleOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleOperationsPatch204Response
    | JobScheduleOperationsPatchDefaultResponse
): response is JobScheduleOperationsPatchDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleOperationsUpdate204Response
    | JobScheduleOperationsUpdateDefaultResponse
): response is JobScheduleOperationsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleOperationsDisable204Response
    | JobScheduleOperationsDisableDefaultResponse
): response is JobScheduleOperationsDisableDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleOperationsEnable204Response
    | JobScheduleOperationsEnableDefaultResponse
): response is JobScheduleOperationsEnableDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleOperationsTerminate204Response
    | JobScheduleOperationsTerminateDefaultResponse
): response is JobScheduleOperationsTerminateDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleOperationsAdd204Response
    | JobScheduleOperationsAddDefaultResponse
): response is JobScheduleOperationsAddDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleOperationsList200Response
    | JobScheduleOperationsListDefaultResponse
): response is JobScheduleOperationsListDefaultResponse;
export function isUnexpected(
  response: TaskOperationsAdd204Response | TaskOperationsAddDefaultResponse
): response is TaskOperationsAddDefaultResponse;
export function isUnexpected(
  response: TaskOperationsList200Response | TaskOperationsListDefaultResponse
): response is TaskOperationsListDefaultResponse;
export function isUnexpected(
  response:
    | TaskOperationsAddCollection200Response
    | TaskOperationsAddCollectionDefaultResponse
): response is TaskOperationsAddCollectionDefaultResponse;
export function isUnexpected(
  response:
    | TaskOperationsDelete204Response
    | TaskOperationsDeleteDefaultResponse
): response is TaskOperationsDeleteDefaultResponse;
export function isUnexpected(
  response: TaskOperationsGet200Response | TaskOperationsGetDefaultResponse
): response is TaskOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | TaskOperationsUpdate204Response
    | TaskOperationsUpdateDefaultResponse
): response is TaskOperationsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | TaskOperationsListSubtasks200Response
    | TaskOperationsListSubtasksDefaultResponse
): response is TaskOperationsListSubtasksDefaultResponse;
export function isUnexpected(
  response:
    | TaskOperationsTerminate204Response
    | TaskOperationsTerminateDefaultResponse
): response is TaskOperationsTerminateDefaultResponse;
export function isUnexpected(
  response:
    | TaskOperationsReactivate204Response
    | TaskOperationsReactivateDefaultResponse
): response is TaskOperationsReactivateDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeOperationsAddUser204Response
    | ComputeNodeOperationsAddUserDefaultResponse
): response is ComputeNodeOperationsAddUserDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeOperationsDeleteUser204Response
    | ComputeNodeOperationsDeleteUserDefaultResponse
): response is ComputeNodeOperationsDeleteUserDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeOperationsUpdateUser204Response
    | ComputeNodeOperationsUpdateUserDefaultResponse
): response is ComputeNodeOperationsUpdateUserDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeOperationsGet200Response
    | ComputeNodeOperationsGetDefaultResponse
): response is ComputeNodeOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeOperationsReboot204Response
    | ComputeNodeOperationsRebootDefaultResponse
): response is ComputeNodeOperationsRebootDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeOperationsReimage204Response
    | ComputeNodeOperationsReimageDefaultResponse
): response is ComputeNodeOperationsReimageDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeOperationsDisableScheduling204Response
    | ComputeNodeOperationsDisableSchedulingDefaultResponse
): response is ComputeNodeOperationsDisableSchedulingDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeOperationsEnableScheduling204Response
    | ComputeNodeOperationsEnableSchedulingDefaultResponse
): response is ComputeNodeOperationsEnableSchedulingDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeOperationsGetRemoteLoginSettings200Response
    | ComputeNodeOperationsGetRemoteLoginSettingsDefaultResponse
): response is ComputeNodeOperationsGetRemoteLoginSettingsDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeOperationsGetRemoteDesktop204Response
    | ComputeNodeOperationsGetRemoteDesktopDefaultResponse
): response is ComputeNodeOperationsGetRemoteDesktopDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeOperationsUploadBatchServiceLogs201Response
    | ComputeNodeOperationsUploadBatchServiceLogsDefaultResponse
): response is ComputeNodeOperationsUploadBatchServiceLogsDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeOperationsList200Response
    | ComputeNodeOperationsListDefaultResponse
): response is ComputeNodeOperationsListDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeExtensionOperationsGet200Response
    | ComputeNodeExtensionOperationsGetDefaultResponse
): response is ComputeNodeExtensionOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeExtensionOperationsList200Response
    | ComputeNodeExtensionOperationsListDefaultResponse
): response is ComputeNodeExtensionOperationsListDefaultResponse;
export function isUnexpected(
  response:
    | ApplicationOperationsList200Response
    | ApplicationOperationsListDefaultResponse
    | ApplicationOperationsGet200Response
    | ApplicationOperationsGetDefaultResponse
    | PoolOperationsListUsageMetrics200Response
    | PoolOperationsListUsageMetricsDefaultResponse
    | PoolOperationsGetAllLifetimeStatistics200Response
    | PoolOperationsGetAllLifetimeStatisticsDefaultResponse
    | PoolOperationsAdd204Response
    | PoolOperationsAddDefaultResponse
    | PoolOperationsList200Response
    | PoolOperationsListDefaultResponse
    | PoolOperationsDelete204Response
    | PoolOperationsDeleteDefaultResponse
    | PoolOperationsExists204Response
    | PoolOperationsExistsDefaultResponse
    | PoolOperationsGet200Response
    | PoolOperationsGetDefaultResponse
    | PoolOperationsPatch204Response
    | PoolOperationsPatchDefaultResponse
    | PoolOperationsDisableAutoScale204Response
    | PoolOperationsDisableAutoScaleDefaultResponse
    | PoolOperationsEnableAutoScale204Response
    | PoolOperationsEnableAutoScaleDefaultResponse
    | PoolOperationsEvaluateAutoScale200Response
    | PoolOperationsEvaluateAutoScaleDefaultResponse
    | PoolOperationsResize204Response
    | PoolOperationsResizeDefaultResponse
    | PoolOperationsStopResize204Response
    | PoolOperationsStopResizeDefaultResponse
    | PoolOperationsUpdateProperties204Response
    | PoolOperationsUpdatePropertiesDefaultResponse
    | PoolOperationsRemoveNodes204Response
    | PoolOperationsRemoveNodesDefaultResponse
    | AccountOperationsListSupportedImages200Response
    | AccountOperationsListSupportedImagesDefaultResponse
    | AccountOperationsListPoolNodeCounts200Response
    | AccountOperationsListPoolNodeCountsDefaultResponse
    | JobOperationsGetAllLifetimeStatistics200Response
    | JobOperationsGetAllLifetimeStatisticsDefaultResponse
    | JobOperationsDelete204Response
    | JobOperationsDeleteDefaultResponse
    | JobOperationsGet200Response
    | JobOperationsGetDefaultResponse
    | JobOperationsPatch204Response
    | JobOperationsPatchDefaultResponse
    | JobOperationsUpdate204Response
    | JobOperationsUpdateDefaultResponse
    | JobOperationsDisable204Response
    | JobOperationsDisableDefaultResponse
    | JobOperationsEnable204Response
    | JobOperationsEnableDefaultResponse
    | JobOperationsTerminate204Response
    | JobOperationsTerminateDefaultResponse
    | JobOperationsAdd204Response
    | JobOperationsAddDefaultResponse
    | JobOperationsList200Response
    | JobOperationsListDefaultResponse
    | JobOperationsListFromJobSchedule200Response
    | JobOperationsListFromJobScheduleDefaultResponse
    | JobOperationsListPreparationAndReleaseTaskStatus200Response
    | JobOperationsListPreparationAndReleaseTaskStatusDefaultResponse
    | JobOperationsGetTaskCounts200Response
    | JobOperationsGetTaskCountsDefaultResponse
    | CertificateOperationsAdd204Response
    | CertificateOperationsAddDefaultResponse
    | CertificateOperationsList200Response
    | CertificateOperationsListDefaultResponse
    | CertificateOperationsCancelDeletion204Response
    | CertificateOperationsCancelDeletionDefaultResponse
    | CertificateOperationsDelete204Response
    | CertificateOperationsDeleteDefaultResponse
    | CertificateOperationsGet200Response
    | CertificateOperationsGetDefaultResponse
    | FileOperationsDeleteFromTask204Response
    | FileOperationsDeleteFromTaskDefaultResponse
    | FileOperationsGetFromTask204Response
    | FileOperationsGetFromTaskDefaultResponse
    | FileOperationsGetPropertiesFromTask204Response
    | FileOperationsGetPropertiesFromTaskDefaultResponse
    | FileOperationsDeleteFromComputeNode204Response
    | FileOperationsDeleteFromComputeNodeDefaultResponse
    | FileOperationsGetFromComputeNode204Response
    | FileOperationsGetFromComputeNodeDefaultResponse
    | FileOperationsGetPropertiesFromComputeNode204Response
    | FileOperationsGetPropertiesFromComputeNodeDefaultResponse
    | FileOperationsListFromTask200Response
    | FileOperationsListFromTaskDefaultResponse
    | FileOperationsListFromComputeNode200Response
    | FileOperationsListFromComputeNodeDefaultResponse
    | JobScheduleOperationsExists204Response
    | JobScheduleOperationsExistsDefaultResponse
    | JobScheduleOperationsDelete204Response
    | JobScheduleOperationsDeleteDefaultResponse
    | JobScheduleOperationsGet200Response
    | JobScheduleOperationsGetDefaultResponse
    | JobScheduleOperationsPatch204Response
    | JobScheduleOperationsPatchDefaultResponse
    | JobScheduleOperationsUpdate204Response
    | JobScheduleOperationsUpdateDefaultResponse
    | JobScheduleOperationsDisable204Response
    | JobScheduleOperationsDisableDefaultResponse
    | JobScheduleOperationsEnable204Response
    | JobScheduleOperationsEnableDefaultResponse
    | JobScheduleOperationsTerminate204Response
    | JobScheduleOperationsTerminateDefaultResponse
    | JobScheduleOperationsAdd204Response
    | JobScheduleOperationsAddDefaultResponse
    | JobScheduleOperationsList200Response
    | JobScheduleOperationsListDefaultResponse
    | TaskOperationsAdd204Response
    | TaskOperationsAddDefaultResponse
    | TaskOperationsList200Response
    | TaskOperationsListDefaultResponse
    | TaskOperationsAddCollection200Response
    | TaskOperationsAddCollectionDefaultResponse
    | TaskOperationsDelete204Response
    | TaskOperationsDeleteDefaultResponse
    | TaskOperationsGet200Response
    | TaskOperationsGetDefaultResponse
    | TaskOperationsUpdate204Response
    | TaskOperationsUpdateDefaultResponse
    | TaskOperationsListSubtasks200Response
    | TaskOperationsListSubtasksDefaultResponse
    | TaskOperationsTerminate204Response
    | TaskOperationsTerminateDefaultResponse
    | TaskOperationsReactivate204Response
    | TaskOperationsReactivateDefaultResponse
    | ComputeNodeOperationsAddUser204Response
    | ComputeNodeOperationsAddUserDefaultResponse
    | ComputeNodeOperationsDeleteUser204Response
    | ComputeNodeOperationsDeleteUserDefaultResponse
    | ComputeNodeOperationsUpdateUser204Response
    | ComputeNodeOperationsUpdateUserDefaultResponse
    | ComputeNodeOperationsGet200Response
    | ComputeNodeOperationsGetDefaultResponse
    | ComputeNodeOperationsReboot204Response
    | ComputeNodeOperationsRebootDefaultResponse
    | ComputeNodeOperationsReimage204Response
    | ComputeNodeOperationsReimageDefaultResponse
    | ComputeNodeOperationsDisableScheduling204Response
    | ComputeNodeOperationsDisableSchedulingDefaultResponse
    | ComputeNodeOperationsEnableScheduling204Response
    | ComputeNodeOperationsEnableSchedulingDefaultResponse
    | ComputeNodeOperationsGetRemoteLoginSettings200Response
    | ComputeNodeOperationsGetRemoteLoginSettingsDefaultResponse
    | ComputeNodeOperationsGetRemoteDesktop204Response
    | ComputeNodeOperationsGetRemoteDesktopDefaultResponse
    | ComputeNodeOperationsUploadBatchServiceLogs201Response
    | ComputeNodeOperationsUploadBatchServiceLogsDefaultResponse
    | ComputeNodeOperationsList200Response
    | ComputeNodeOperationsListDefaultResponse
    | ComputeNodeExtensionOperationsGet200Response
    | ComputeNodeExtensionOperationsGetDefaultResponse
    | ComputeNodeExtensionOperationsList200Response
    | ComputeNodeExtensionOperationsListDefaultResponse
): response is
  | ApplicationOperationsListDefaultResponse
  | ApplicationOperationsGetDefaultResponse
  | PoolOperationsListUsageMetricsDefaultResponse
  | PoolOperationsGetAllLifetimeStatisticsDefaultResponse
  | PoolOperationsAddDefaultResponse
  | PoolOperationsListDefaultResponse
  | PoolOperationsDeleteDefaultResponse
  | PoolOperationsExistsDefaultResponse
  | PoolOperationsGetDefaultResponse
  | PoolOperationsPatchDefaultResponse
  | PoolOperationsDisableAutoScaleDefaultResponse
  | PoolOperationsEnableAutoScaleDefaultResponse
  | PoolOperationsEvaluateAutoScaleDefaultResponse
  | PoolOperationsResizeDefaultResponse
  | PoolOperationsStopResizeDefaultResponse
  | PoolOperationsUpdatePropertiesDefaultResponse
  | PoolOperationsRemoveNodesDefaultResponse
  | AccountOperationsListSupportedImagesDefaultResponse
  | AccountOperationsListPoolNodeCountsDefaultResponse
  | JobOperationsGetAllLifetimeStatisticsDefaultResponse
  | JobOperationsDeleteDefaultResponse
  | JobOperationsGetDefaultResponse
  | JobOperationsPatchDefaultResponse
  | JobOperationsUpdateDefaultResponse
  | JobOperationsDisableDefaultResponse
  | JobOperationsEnableDefaultResponse
  | JobOperationsTerminateDefaultResponse
  | JobOperationsAddDefaultResponse
  | JobOperationsListDefaultResponse
  | JobOperationsListFromJobScheduleDefaultResponse
  | JobOperationsListPreparationAndReleaseTaskStatusDefaultResponse
  | JobOperationsGetTaskCountsDefaultResponse
  | CertificateOperationsAddDefaultResponse
  | CertificateOperationsListDefaultResponse
  | CertificateOperationsCancelDeletionDefaultResponse
  | CertificateOperationsDeleteDefaultResponse
  | CertificateOperationsGetDefaultResponse
  | FileOperationsDeleteFromTaskDefaultResponse
  | FileOperationsGetFromTaskDefaultResponse
  | FileOperationsGetPropertiesFromTaskDefaultResponse
  | FileOperationsDeleteFromComputeNodeDefaultResponse
  | FileOperationsGetFromComputeNodeDefaultResponse
  | FileOperationsGetPropertiesFromComputeNodeDefaultResponse
  | FileOperationsListFromTaskDefaultResponse
  | FileOperationsListFromComputeNodeDefaultResponse
  | JobScheduleOperationsExistsDefaultResponse
  | JobScheduleOperationsDeleteDefaultResponse
  | JobScheduleOperationsGetDefaultResponse
  | JobScheduleOperationsPatchDefaultResponse
  | JobScheduleOperationsUpdateDefaultResponse
  | JobScheduleOperationsDisableDefaultResponse
  | JobScheduleOperationsEnableDefaultResponse
  | JobScheduleOperationsTerminateDefaultResponse
  | JobScheduleOperationsAddDefaultResponse
  | JobScheduleOperationsListDefaultResponse
  | TaskOperationsAddDefaultResponse
  | TaskOperationsListDefaultResponse
  | TaskOperationsAddCollectionDefaultResponse
  | TaskOperationsDeleteDefaultResponse
  | TaskOperationsGetDefaultResponse
  | TaskOperationsUpdateDefaultResponse
  | TaskOperationsListSubtasksDefaultResponse
  | TaskOperationsTerminateDefaultResponse
  | TaskOperationsReactivateDefaultResponse
  | ComputeNodeOperationsAddUserDefaultResponse
  | ComputeNodeOperationsDeleteUserDefaultResponse
  | ComputeNodeOperationsUpdateUserDefaultResponse
  | ComputeNodeOperationsGetDefaultResponse
  | ComputeNodeOperationsRebootDefaultResponse
  | ComputeNodeOperationsReimageDefaultResponse
  | ComputeNodeOperationsDisableSchedulingDefaultResponse
  | ComputeNodeOperationsEnableSchedulingDefaultResponse
  | ComputeNodeOperationsGetRemoteLoginSettingsDefaultResponse
  | ComputeNodeOperationsGetRemoteDesktopDefaultResponse
  | ComputeNodeOperationsUploadBatchServiceLogsDefaultResponse
  | ComputeNodeOperationsListDefaultResponse
  | ComputeNodeExtensionOperationsGetDefaultResponse
  | ComputeNodeExtensionOperationsListDefaultResponse {
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
