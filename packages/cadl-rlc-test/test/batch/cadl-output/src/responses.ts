// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  ApplicationListOutput,
  ErrorResponseOutput,
  ApplicationOutput,
  PoolUsageMetricsListOutput,
  PoolStatisticsOutput,
  BatchPoolListResultOutput,
  BatchPoolOutput,
  AutoScaleRunOutput,
  ImageInformationListOutput,
  PoolNodeCountsListOutput,
  JobStatisticsOutput,
  BatchJobOutput,
  BatchJobListResultOutput,
  BatchJobListPreparationAndReleaseTaskStatusResultOutput,
  TaskCountsResultOutput,
  CertificateListResultOutput,
  CertificateOutput,
  NodeFileListResultOutput,
  BatchJobScheduleOutput,
  BatchJobScheduleListResultOutput,
  BatchTaskListResultOutput,
  TaskAddCollectionResultOutput,
  BatchTaskOutput,
  BatchTaskListSubtasksResultOutput,
  ComputeNodeOutput,
  ComputeNodeGetRemoteLoginSettingsResultOutput,
  ComputeNodeListResultOutput,
  NodeVMExtensionOutput,
  NodeVMExtensionListOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface ApplicationOperationsList200Response extends HttpResponse {
  status: "200";
  body: ApplicationListOutput;
}

export interface ApplicationOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ApplicationOperationsGet200Response extends HttpResponse {
  status: "200";
  body: ApplicationOutput;
}

export interface ApplicationOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface PoolOperationsListUsageMetrics200Response
  extends HttpResponse {
  status: "200";
  body: PoolUsageMetricsListOutput;
}

export interface PoolOperationsListUsageMetricsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface PoolOperationsGetAllLifetimeStatistics200Response
  extends HttpResponse {
  status: "200";
  body: PoolStatisticsOutput;
}

export interface PoolOperationsGetAllLifetimeStatisticsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PoolOperationsAdd204Response extends HttpResponse {
  status: "204";
}

export interface PoolOperationsAddDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface PoolOperationsList200Response extends HttpResponse {
  status: "200";
  body: BatchPoolListResultOutput;
}

export interface PoolOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PoolOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface PoolOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PoolOperationsExists204Response extends HttpResponse {
  status: "204";
}

export interface PoolOperationsExistsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface PoolOperationsGet200Response extends HttpResponse {
  status: "200";
  body: BatchPoolOutput;
}

export interface PoolOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PoolOperationsPatch204Response extends HttpResponse {
  status: "204";
}

export interface PoolOperationsPatchDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PoolOperationsDisableAutoScale204Response
  extends HttpResponse {
  status: "204";
}

export interface PoolOperationsDisableAutoScaleDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PoolOperationsEnableAutoScale204Response extends HttpResponse {
  status: "204";
}

export interface PoolOperationsEnableAutoScaleDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface PoolOperationsEvaluateAutoScale200Response
  extends HttpResponse {
  status: "200";
  body: AutoScaleRunOutput;
}

export interface PoolOperationsEvaluateAutoScaleDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PoolOperationsResize204Response extends HttpResponse {
  status: "204";
}

export interface PoolOperationsResizeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PoolOperationsStopResize204Response extends HttpResponse {
  status: "204";
}

export interface PoolOperationsStopResizeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PoolOperationsUpdateProperties204Response
  extends HttpResponse {
  status: "204";
}

export interface PoolOperationsUpdatePropertiesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface PoolOperationsRemoveNodes204Response extends HttpResponse {
  status: "204";
}

export interface PoolOperationsRemoveNodesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface AccountOperationsListSupportedImages200Response
  extends HttpResponse {
  status: "200";
  body: ImageInformationListOutput;
}

export interface AccountOperationsListSupportedImagesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface AccountOperationsListPoolNodeCounts200Response
  extends HttpResponse {
  status: "200";
  body: PoolNodeCountsListOutput;
}

export interface AccountOperationsListPoolNodeCountsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface JobOperationsGetAllLifetimeStatistics200Response
  extends HttpResponse {
  status: "200";
  body: JobStatisticsOutput;
}

export interface JobOperationsGetAllLifetimeStatisticsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface JobOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface JobOperationsGet200Response extends HttpResponse {
  status: "200";
  body: BatchJobOutput;
}

export interface JobOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobOperationsPatch204Response extends HttpResponse {
  status: "204";
}

export interface JobOperationsPatchDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobOperationsUpdate204Response extends HttpResponse {
  status: "204";
}

export interface JobOperationsUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobOperationsDisable204Response extends HttpResponse {
  status: "204";
}

export interface JobOperationsDisableDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobOperationsEnable204Response extends HttpResponse {
  status: "204";
}

export interface JobOperationsEnableDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobOperationsTerminate204Response extends HttpResponse {
  status: "204";
}

export interface JobOperationsTerminateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobOperationsAdd204Response extends HttpResponse {
  status: "204";
}

export interface JobOperationsAddDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface JobOperationsList200Response extends HttpResponse {
  status: "200";
  body: BatchJobListResultOutput;
}

export interface JobOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface JobOperationsListFromJobSchedule200Response
  extends HttpResponse {
  status: "200";
  body: BatchJobListResultOutput;
}

export interface JobOperationsListFromJobScheduleDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface JobOperationsListPreparationAndReleaseTaskStatus200Response
  extends HttpResponse {
  status: "200";
  body: BatchJobListPreparationAndReleaseTaskStatusResultOutput;
}

export interface JobOperationsListPreparationAndReleaseTaskStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface JobOperationsGetTaskCounts200Response extends HttpResponse {
  status: "200";
  body: TaskCountsResultOutput;
}

export interface JobOperationsGetTaskCountsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CertificateOperationsAdd204Response extends HttpResponse {
  status: "204";
}

export interface CertificateOperationsAddDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CertificateOperationsList200Response extends HttpResponse {
  status: "200";
  body: CertificateListResultOutput;
}

export interface CertificateOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CertificateOperationsCancelDeletion204Response
  extends HttpResponse {
  status: "204";
}

export interface CertificateOperationsCancelDeletionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CertificateOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface CertificateOperationsDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CertificateOperationsGet200Response extends HttpResponse {
  status: "200";
  body: CertificateOutput;
}

export interface CertificateOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FileOperationsDeleteFromTask204Response extends HttpResponse {
  status: "204";
}

export interface FileOperationsDeleteFromTaskDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FileOperationsGetFromTask204Response extends HttpResponse {
  status: "204";
}

export interface FileOperationsGetFromTaskDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FileOperationsGetPropertiesFromTask204Response
  extends HttpResponse {
  status: "204";
}

export interface FileOperationsGetPropertiesFromTaskDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FileOperationsDeleteFromComputeNode204Response
  extends HttpResponse {
  status: "204";
}

export interface FileOperationsDeleteFromComputeNodeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FileOperationsGetFromComputeNode204Response
  extends HttpResponse {
  status: "204";
}

export interface FileOperationsGetFromComputeNodeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FileOperationsGetPropertiesFromComputeNode204Response
  extends HttpResponse {
  status: "204";
}

export interface FileOperationsGetPropertiesFromComputeNodeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FileOperationsListFromTask200Response extends HttpResponse {
  status: "200";
  body: NodeFileListResultOutput;
}

export interface FileOperationsListFromTaskDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FileOperationsListFromComputeNode200Response
  extends HttpResponse {
  status: "200";
  body: NodeFileListResultOutput;
}

export interface FileOperationsListFromComputeNodeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobScheduleOperationsExists204Response extends HttpResponse {
  status: "204";
}

export interface JobScheduleOperationsExistsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobScheduleOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface JobScheduleOperationsDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface JobScheduleOperationsGet200Response extends HttpResponse {
  status: "200";
  body: BatchJobScheduleOutput;
}

export interface JobScheduleOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobScheduleOperationsPatch204Response extends HttpResponse {
  status: "204";
}

export interface JobScheduleOperationsPatchDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobScheduleOperationsUpdate204Response extends HttpResponse {
  status: "204";
}

export interface JobScheduleOperationsUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobScheduleOperationsDisable204Response extends HttpResponse {
  status: "204";
}

export interface JobScheduleOperationsDisableDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobScheduleOperationsEnable204Response extends HttpResponse {
  status: "204";
}

export interface JobScheduleOperationsEnableDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobScheduleOperationsTerminate204Response
  extends HttpResponse {
  status: "204";
}

export interface JobScheduleOperationsTerminateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface JobScheduleOperationsAdd204Response extends HttpResponse {
  status: "204";
}

export interface JobScheduleOperationsAddDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface JobScheduleOperationsList200Response extends HttpResponse {
  status: "200";
  body: BatchJobScheduleListResultOutput;
}

export interface JobScheduleOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TaskOperationsAdd204Response extends HttpResponse {
  status: "204";
}

export interface TaskOperationsAddDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface TaskOperationsList200Response extends HttpResponse {
  status: "200";
  body: BatchTaskListResultOutput;
}

export interface TaskOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface TaskOperationsAddCollection200Response extends HttpResponse {
  status: "200";
  body: TaskAddCollectionResultOutput;
}

export interface TaskOperationsAddCollectionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TaskOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface TaskOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface TaskOperationsGet200Response extends HttpResponse {
  status: "200";
  body: BatchTaskOutput;
}

export interface TaskOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TaskOperationsUpdate204Response extends HttpResponse {
  status: "204";
}

export interface TaskOperationsUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface TaskOperationsListSubtasks200Response extends HttpResponse {
  status: "200";
  body: BatchTaskListSubtasksResultOutput;
}

export interface TaskOperationsListSubtasksDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TaskOperationsTerminate204Response extends HttpResponse {
  status: "204";
}

export interface TaskOperationsTerminateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface TaskOperationsReactivate204Response extends HttpResponse {
  status: "204";
}

export interface TaskOperationsReactivateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ComputeNodeOperationsAddUser204Response extends HttpResponse {
  status: "204";
}

export interface ComputeNodeOperationsAddUserDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ComputeNodeOperationsDeleteUser204Response
  extends HttpResponse {
  status: "204";
}

export interface ComputeNodeOperationsDeleteUserDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ComputeNodeOperationsUpdateUser204Response
  extends HttpResponse {
  status: "204";
}

export interface ComputeNodeOperationsUpdateUserDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ComputeNodeOperationsGet200Response extends HttpResponse {
  status: "200";
  body: ComputeNodeOutput;
}

export interface ComputeNodeOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ComputeNodeOperationsReboot204Response extends HttpResponse {
  status: "204";
}

export interface ComputeNodeOperationsRebootDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ComputeNodeOperationsReimage204Response extends HttpResponse {
  status: "204";
}

export interface ComputeNodeOperationsReimageDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ComputeNodeOperationsDisableScheduling204Response
  extends HttpResponse {
  status: "204";
}

export interface ComputeNodeOperationsDisableSchedulingDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ComputeNodeOperationsEnableScheduling204Response
  extends HttpResponse {
  status: "204";
}

export interface ComputeNodeOperationsEnableSchedulingDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ComputeNodeOperationsGetRemoteLoginSettings200Response
  extends HttpResponse {
  status: "200";
  body: ComputeNodeGetRemoteLoginSettingsResultOutput;
}

export interface ComputeNodeOperationsGetRemoteLoginSettingsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ComputeNodeOperationsGetRemoteDesktop204Response
  extends HttpResponse {
  status: "204";
}

export interface ComputeNodeOperationsGetRemoteDesktopDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface ComputeNodeOperationsUploadBatchServiceLogs201Headers {
  location: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ComputeNodeOperationsUploadBatchServiceLogs201Response
  extends HttpResponse {
  status: "201";
  headers: RawHttpHeaders &
    ComputeNodeOperationsUploadBatchServiceLogs201Headers;
}

export interface ComputeNodeOperationsUploadBatchServiceLogsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ComputeNodeOperationsList200Response extends HttpResponse {
  status: "200";
  body: ComputeNodeListResultOutput;
}

export interface ComputeNodeOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ComputeNodeExtensionOperationsGet200Response
  extends HttpResponse {
  status: "200";
  body: NodeVMExtensionOutput;
}

export interface ComputeNodeExtensionOperationsGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ComputeNodeExtensionOperationsList200Response
  extends HttpResponse {
  status: "200";
  body: NodeVMExtensionListOutput;
}

export interface ComputeNodeExtensionOperationsListDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
