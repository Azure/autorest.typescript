// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ApplicationOperationsListParameters,
  ApplicationOperationsGetParameters,
  PoolOperationsListUsageMetricsParameters,
  PoolOperationsGetAllLifetimeStatisticsParameters,
  PoolOperationsAddParameters,
  PoolOperationsListParameters,
  PoolOperationsDeleteParameters,
  PoolOperationsExistsParameters,
  PoolOperationsGetParameters,
  PoolOperationsPatchParameters,
  PoolOperationsDisableAutoScaleParameters,
  PoolOperationsEnableAutoScaleParameters,
  PoolOperationsEvaluateAutoScaleParameters,
  PoolOperationsResizeParameters,
  PoolOperationsStopResizeParameters,
  PoolOperationsUpdatePropertiesParameters,
  PoolOperationsRemoveNodesParameters,
  AccountOperationsListSupportedImagesParameters,
  AccountOperationsListPoolNodeCountsParameters,
  JobOperationsGetAllLifetimeStatisticsParameters,
  JobOperationsDeleteParameters,
  JobOperationsGetParameters,
  JobOperationsPatchParameters,
  JobOperationsUpdateParameters,
  JobOperationsDisableParameters,
  JobOperationsEnableParameters,
  JobOperationsTerminateParameters,
  JobOperationsAddParameters,
  JobOperationsListParameters,
  JobOperationsListFromJobScheduleParameters,
  JobOperationsListPreparationAndReleaseTaskStatusParameters,
  JobOperationsGetTaskCountsParameters,
  CertificateOperationsAddParameters,
  CertificateOperationsListParameters,
  CertificateOperationsCancelDeletionParameters,
  CertificateOperationsDeleteParameters,
  CertificateOperationsGetParameters,
  FileOperationsDeleteFromTaskParameters,
  FileOperationsGetFromTaskParameters,
  FileOperationsGetPropertiesFromTaskParameters,
  FileOperationsDeleteFromComputeNodeParameters,
  FileOperationsGetFromComputeNodeParameters,
  FileOperationsGetPropertiesFromComputeNodeParameters,
  FileOperationsListFromTaskParameters,
  FileOperationsListFromComputeNodeParameters,
  JobScheduleOperationsExistsParameters,
  JobScheduleOperationsDeleteParameters,
  JobScheduleOperationsGetParameters,
  JobScheduleOperationsPatchParameters,
  JobScheduleOperationsUpdateParameters,
  JobScheduleOperationsDisableParameters,
  JobScheduleOperationsEnableParameters,
  JobScheduleOperationsTerminateParameters,
  JobScheduleOperationsAddParameters,
  JobScheduleOperationsListParameters,
  TaskOperationsAddParameters,
  TaskOperationsListParameters,
  TaskOperationsAddCollectionParameters,
  TaskOperationsDeleteParameters,
  TaskOperationsGetParameters,
  TaskOperationsUpdateParameters,
  TaskOperationsListSubtasksParameters,
  TaskOperationsTerminateParameters,
  TaskOperationsReactivateParameters,
  ComputeNodeOperationsAddUserParameters,
  ComputeNodeOperationsDeleteUserParameters,
  ComputeNodeOperationsUpdateUserParameters,
  ComputeNodeOperationsGetParameters,
  ComputeNodeOperationsRebootParameters,
  ComputeNodeOperationsReimageParameters,
  ComputeNodeOperationsDisableSchedulingParameters,
  ComputeNodeOperationsEnableSchedulingParameters,
  ComputeNodeOperationsGetRemoteLoginSettingsParameters,
  ComputeNodeOperationsGetRemoteDesktopParameters,
  ComputeNodeOperationsUploadBatchServiceLogsParameters,
  ComputeNodeOperationsListParameters,
  ComputeNodeExtensionOperationsGetParameters,
  ComputeNodeExtensionOperationsListParameters,
} from "./parameters";
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
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ApplicationOperationsList {
  /**
   * This operation returns only Applications and versions that are available for
   * use on Compute Nodes; that is, that can be used in an Package reference. For
   * administrator information about applications and versions that are not yet
   * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
   * API.
   */
  get(
    options: ApplicationOperationsListParameters
  ): StreamableMethod<
    | ApplicationOperationsList200Response
    | ApplicationOperationsListDefaultResponse
  >;
}

export interface ApplicationOperationsGet {
  /**
   * This operation returns only Applications and versions that are available for
   * use on Compute Nodes; that is, that can be used in an Package reference. For
   * administrator information about Applications and versions that are not yet
   * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
   * API.
   */
  get(
    options: ApplicationOperationsGetParameters
  ): StreamableMethod<
    | ApplicationOperationsGet200Response
    | ApplicationOperationsGetDefaultResponse
  >;
}

export interface PoolOperationsListUsageMetrics {
  /**
   * If you do not specify a $filter clause including a poolId, the response
   * includes all Pools that existed in the Account in the time range of the
   * returned aggregation intervals. If you do not specify a $filter clause
   * including a startTime or endTime these filters default to the start and end
   * times of the last aggregation interval currently available; that is, only the
   * last aggregation interval is returned.
   */
  get(
    options: PoolOperationsListUsageMetricsParameters
  ): StreamableMethod<
    | PoolOperationsListUsageMetrics200Response
    | PoolOperationsListUsageMetricsDefaultResponse
  >;
}

export interface PoolOperationsGetAllLifetimeStatistics {
  /**
   * Statistics are aggregated across all Pools that have ever existed in the
   * Account, from Account creation to the last update time of the statistics. The
   * statistics may not be immediately available. The Batch service performs
   * periodic roll-up of statistics. The typical delay is about 30 minutes.
   */
  get(
    options: PoolOperationsGetAllLifetimeStatisticsParameters
  ): StreamableMethod<
    | PoolOperationsGetAllLifetimeStatistics200Response
    | PoolOperationsGetAllLifetimeStatisticsDefaultResponse
  >;
}

export interface PoolOperationsAdd {
  /**
   * When naming Pools, avoid including sensitive information such as user names or
   * secret project names. This information may appear in telemetry logs accessible
   * to Microsoft Support engineers.
   */
  post(
    options: PoolOperationsAddParameters
  ): StreamableMethod<
    PoolOperationsAdd204Response | PoolOperationsAddDefaultResponse
  >;
  /** Lists all of the Pools in the specified Account. */
  get(
    options: PoolOperationsListParameters
  ): StreamableMethod<
    PoolOperationsList200Response | PoolOperationsListDefaultResponse
  >;
}

export interface PoolOperationsDelete {
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
  delete(
    options: PoolOperationsDeleteParameters
  ): StreamableMethod<
    PoolOperationsDelete204Response | PoolOperationsDeleteDefaultResponse
  >;
  /** Gets basic properties of a Pool. */
  head(
    options: PoolOperationsExistsParameters
  ): StreamableMethod<
    PoolOperationsExists204Response | PoolOperationsExistsDefaultResponse
  >;
  /** Gets information about the specified Pool. */
  get(
    options: PoolOperationsGetParameters
  ): StreamableMethod<
    PoolOperationsGet200Response | PoolOperationsGetDefaultResponse
  >;
  /**
   * This only replaces the Pool properties specified in the request. For example,
   * if the Pool has a StartTask associated with it, and a request does not specify
   * a StartTask element, then the Pool keeps the existing StartTask.
   */
  patch(
    options: PoolOperationsPatchParameters
  ): StreamableMethod<
    PoolOperationsPatch204Response | PoolOperationsPatchDefaultResponse
  >;
}

export interface PoolOperationsDisableAutoScale {
  /** Disables automatic scaling for a Pool. */
  post(
    options: PoolOperationsDisableAutoScaleParameters
  ): StreamableMethod<
    | PoolOperationsDisableAutoScale204Response
    | PoolOperationsDisableAutoScaleDefaultResponse
  >;
}

export interface PoolOperationsEnableAutoScale {
  /**
   * You cannot enable automatic scaling on a Pool if a resize operation is in
   * progress on the Pool. If automatic scaling of the Pool is currently disabled,
   * you must specify a valid autoscale formula as part of the request. If automatic
   * scaling of the Pool is already enabled, you may specify a new autoscale formula
   * and/or a new evaluation interval. You cannot call this API for the same Pool
   * more than once every 30 seconds.
   */
  post(
    options: PoolOperationsEnableAutoScaleParameters
  ): StreamableMethod<
    | PoolOperationsEnableAutoScale204Response
    | PoolOperationsEnableAutoScaleDefaultResponse
  >;
}

export interface PoolOperationsEvaluateAutoScale {
  /**
   * This API is primarily for validating an autoscale formula, as it simply returns
   * the result without applying the formula to the Pool. The Pool must have auto
   * scaling enabled in order to evaluate a formula.
   */
  post(
    options: PoolOperationsEvaluateAutoScaleParameters
  ): StreamableMethod<
    | PoolOperationsEvaluateAutoScale200Response
    | PoolOperationsEvaluateAutoScaleDefaultResponse
  >;
}

export interface PoolOperationsResize {
  /**
   * You can only resize a Pool when its allocation state is steady. If the Pool is
   * already resizing, the request fails with status code 409. When you resize a
   * Pool, the Pool's allocation state changes from steady to resizing. You cannot
   * resize Pools which are configured for automatic scaling. If you try to do this,
   * the Batch service returns an error 409. If you resize a Pool downwards, the
   * Batch service chooses which Compute Nodes to remove. To remove specific Compute
   * Nodes, use the Pool remove Compute Nodes API instead.
   */
  post(
    options: PoolOperationsResizeParameters
  ): StreamableMethod<
    PoolOperationsResize204Response | PoolOperationsResizeDefaultResponse
  >;
}

export interface PoolOperationsStopResize {
  /**
   * This does not restore the Pool to its previous state before the resize
   * operation: it only stops any further changes being made, and the Pool maintains
   * its current state. After stopping, the Pool stabilizes at the number of Compute
   * Nodes it was at when the stop operation was done. During the stop operation,
   * the Pool allocation state changes first to stopping and then to steady. A
   * resize operation need not be an explicit resize Pool request; this API can also
   * be used to halt the initial sizing of the Pool when it is created.
   */
  post(
    options: PoolOperationsStopResizeParameters
  ): StreamableMethod<
    | PoolOperationsStopResize204Response
    | PoolOperationsStopResizeDefaultResponse
  >;
}

export interface PoolOperationsUpdateProperties {
  /**
   * This fully replaces all the updatable properties of the Pool. For example, if
   * the Pool has a StartTask associated with it and if StartTask is not specified
   * with this request, then the Batch service will remove the existing StartTask.
   */
  post(
    options: PoolOperationsUpdatePropertiesParameters
  ): StreamableMethod<
    | PoolOperationsUpdateProperties204Response
    | PoolOperationsUpdatePropertiesDefaultResponse
  >;
}

export interface PoolOperationsRemoveNodes {
  /**
   * This operation can only run when the allocation state of the Pool is steady.
   * When this operation runs, the allocation state changes from steady to resizing.
   * Each request may remove up to 100 nodes.
   */
  post(
    options: PoolOperationsRemoveNodesParameters
  ): StreamableMethod<
    | PoolOperationsRemoveNodes204Response
    | PoolOperationsRemoveNodesDefaultResponse
  >;
}

export interface AccountOperationsListSupportedImages {
  /** Lists all Virtual Machine Images supported by the Azure Batch service. */
  get(
    options: AccountOperationsListSupportedImagesParameters
  ): StreamableMethod<
    | AccountOperationsListSupportedImages200Response
    | AccountOperationsListSupportedImagesDefaultResponse
  >;
}

export interface AccountOperationsListPoolNodeCounts {
  /**
   * Gets the number of Compute Nodes in each state, grouped by Pool. Note that the
   * numbers returned may not always be up to date. If you need exact node counts,
   * use a list query.
   */
  get(
    options: AccountOperationsListPoolNodeCountsParameters
  ): StreamableMethod<
    | AccountOperationsListPoolNodeCounts200Response
    | AccountOperationsListPoolNodeCountsDefaultResponse
  >;
}

export interface JobOperationsGetAllLifetimeStatistics {
  /**
   * Statistics are aggregated across all Jobs that have ever existed in the
   * Account, from Account creation to the last update time of the statistics. The
   * statistics may not be immediately available. The Batch service performs
   * periodic roll-up of statistics. The typical delay is about 30 minutes.
   */
  get(
    options: JobOperationsGetAllLifetimeStatisticsParameters
  ): StreamableMethod<
    | JobOperationsGetAllLifetimeStatistics200Response
    | JobOperationsGetAllLifetimeStatisticsDefaultResponse
  >;
}

export interface JobOperationsDelete {
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
  delete(
    options: JobOperationsDeleteParameters
  ): StreamableMethod<
    JobOperationsDelete204Response | JobOperationsDeleteDefaultResponse
  >;
  /** Gets information about the specified Job. */
  get(
    options: JobOperationsGetParameters
  ): StreamableMethod<
    JobOperationsGet200Response | JobOperationsGetDefaultResponse
  >;
  /**
   * This replaces only the Job properties specified in the request. For example, if
   * the Job has constraints, and a request does not specify the constraints
   * element, then the Job keeps the existing constraints.
   */
  patch(
    options: JobOperationsPatchParameters
  ): StreamableMethod<
    JobOperationsPatch204Response | JobOperationsPatchDefaultResponse
  >;
  /**
   * This fully replaces all the updatable properties of the Job. For example, if
   * the Job has constraints associated with it and if constraints is not specified
   * with this request, then the Batch service will remove the existing constraints.
   */
  put(
    options: JobOperationsUpdateParameters
  ): StreamableMethod<
    JobOperationsUpdate204Response | JobOperationsUpdateDefaultResponse
  >;
}

export interface JobOperationsDisable {
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
  post(
    options: JobOperationsDisableParameters
  ): StreamableMethod<
    JobOperationsDisable204Response | JobOperationsDisableDefaultResponse
  >;
}

export interface JobOperationsEnable {
  /**
   * When you call this API, the Batch service sets a disabled Job to the enabling
   * state. After the this operation is completed, the Job moves to the active
   * state, and scheduling of new Tasks under the Job resumes. The Batch service
   * does not allow a Task to remain in the active state for more than 180 days.
   * Therefore, if you enable a Job containing active Tasks which were added more
   * than 180 days ago, those Tasks will not run.
   */
  post(
    options: JobOperationsEnableParameters
  ): StreamableMethod<
    JobOperationsEnable204Response | JobOperationsEnableDefaultResponse
  >;
}

export interface JobOperationsTerminate {
  /**
   * When a Terminate Job request is received, the Batch service sets the Job to the
   * terminating state. The Batch service then terminates any running Tasks
   * associated with the Job and runs any required Job release Tasks. Then the Job
   * moves into the completed state. If there are any Tasks in the Job in the active
   * state, they will remain in the active state. Once a Job is terminated, new
   * Tasks cannot be added and any remaining active Tasks will not be scheduled.
   */
  post(
    options: JobOperationsTerminateParameters
  ): StreamableMethod<
    JobOperationsTerminate204Response | JobOperationsTerminateDefaultResponse
  >;
}

export interface JobOperationsAdd {
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
  post(
    options: JobOperationsAddParameters
  ): StreamableMethod<
    JobOperationsAdd204Response | JobOperationsAddDefaultResponse
  >;
  /** Lists all of the Jobs in the specified Account. */
  get(
    options: JobOperationsListParameters
  ): StreamableMethod<
    JobOperationsList200Response | JobOperationsListDefaultResponse
  >;
}

export interface JobOperationsListFromJobSchedule {
  /** Lists the Jobs that have been created under the specified Job Schedule. */
  get(
    options: JobOperationsListFromJobScheduleParameters
  ): StreamableMethod<
    | JobOperationsListFromJobSchedule200Response
    | JobOperationsListFromJobScheduleDefaultResponse
  >;
}

export interface JobOperationsListPreparationAndReleaseTaskStatus {
  /**
   * This API returns the Job Preparation and Job Release Task status on all Compute
   * Nodes that have run the Job Preparation or Job Release Task. This includes
   * Compute Nodes which have since been removed from the Pool. If this API is
   * invoked on a Job which has no Job Preparation or Job Release Task, the Batch
   * service returns HTTP status code 409 (Conflict) with an error code of
   * JobPreparationTaskNotSpecified.
   */
  get(
    options: JobOperationsListPreparationAndReleaseTaskStatusParameters
  ): StreamableMethod<
    | JobOperationsListPreparationAndReleaseTaskStatus200Response
    | JobOperationsListPreparationAndReleaseTaskStatusDefaultResponse
  >;
}

export interface JobOperationsGetTaskCounts {
  /**
   * Task counts provide a count of the Tasks by active, running or completed Task
   * state, and a count of Tasks which succeeded or failed. Tasks in the preparing
   * state are counted as running. Note that the numbers returned may not always be
   * up to date. If you need exact task counts, use a list query.
   */
  get(
    options: JobOperationsGetTaskCountsParameters
  ): StreamableMethod<
    | JobOperationsGetTaskCounts200Response
    | JobOperationsGetTaskCountsDefaultResponse
  >;
}

export interface CertificateOperationsAdd {
  /** Adds a Certificate to the specified Account. */
  post(
    options: CertificateOperationsAddParameters
  ): StreamableMethod<
    | CertificateOperationsAdd204Response
    | CertificateOperationsAddDefaultResponse
  >;
  /** Lists all of the Certificates that have been added to the specified Account. */
  get(
    options: CertificateOperationsListParameters
  ): StreamableMethod<
    | CertificateOperationsList200Response
    | CertificateOperationsListDefaultResponse
  >;
}

export interface CertificateOperationsCancelDeletion {
  /**
   * If you try to delete a Certificate that is being used by a Pool or Compute
   * Node, the status of the Certificate changes to deleteFailed. If you decide that
   * you want to continue using the Certificate, you can use this operation to set
   * the status of the Certificate back to active. If you intend to delete the
   * Certificate, you do not need to run this operation after the deletion failed.
   * You must make sure that the Certificate is not being used by any resources, and
   * then you can try again to delete the Certificate.
   */
  post(
    options: CertificateOperationsCancelDeletionParameters
  ): StreamableMethod<
    | CertificateOperationsCancelDeletion204Response
    | CertificateOperationsCancelDeletionDefaultResponse
  >;
}

export interface CertificateOperationsDelete {
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
  delete(
    options: CertificateOperationsDeleteParameters
  ): StreamableMethod<
    | CertificateOperationsDelete204Response
    | CertificateOperationsDeleteDefaultResponse
  >;
  /** Gets information about the specified Certificate. */
  get(
    options: CertificateOperationsGetParameters
  ): StreamableMethod<
    | CertificateOperationsGet200Response
    | CertificateOperationsGetDefaultResponse
  >;
}

export interface FileOperationsDeleteFromTask {
  /** Deletes the specified Task file from the Compute Node where the Task ran. */
  delete(
    options: FileOperationsDeleteFromTaskParameters
  ): StreamableMethod<
    | FileOperationsDeleteFromTask204Response
    | FileOperationsDeleteFromTaskDefaultResponse
  >;
  /** Returns the content of the specified Task file. */
  get(
    options: FileOperationsGetFromTaskParameters
  ): StreamableMethod<
    | FileOperationsGetFromTask204Response
    | FileOperationsGetFromTaskDefaultResponse
  >;
  /** Gets the properties of the specified Task file. */
  head(
    options: FileOperationsGetPropertiesFromTaskParameters
  ): StreamableMethod<
    | FileOperationsGetPropertiesFromTask204Response
    | FileOperationsGetPropertiesFromTaskDefaultResponse
  >;
}

export interface FileOperationsDeleteFromComputeNode {
  /** Deletes the specified file from the Compute Node. */
  delete(
    options: FileOperationsDeleteFromComputeNodeParameters
  ): StreamableMethod<
    | FileOperationsDeleteFromComputeNode204Response
    | FileOperationsDeleteFromComputeNodeDefaultResponse
  >;
  /** Returns the content of the specified Compute Node file. */
  get(
    options: FileOperationsGetFromComputeNodeParameters
  ): StreamableMethod<
    | FileOperationsGetFromComputeNode204Response
    | FileOperationsGetFromComputeNodeDefaultResponse
  >;
  /** Gets the properties of the specified Compute Node file. */
  head(
    options: FileOperationsGetPropertiesFromComputeNodeParameters
  ): StreamableMethod<
    | FileOperationsGetPropertiesFromComputeNode204Response
    | FileOperationsGetPropertiesFromComputeNodeDefaultResponse
  >;
}

export interface FileOperationsListFromTask {
  /** Lists the files in a Task's directory on its Compute Node. */
  get(
    options: FileOperationsListFromTaskParameters
  ): StreamableMethod<
    | FileOperationsListFromTask200Response
    | FileOperationsListFromTaskDefaultResponse
  >;
}

export interface FileOperationsListFromComputeNode {
  /** Lists all of the files in Task directories on the specified Compute Node. */
  get(
    options: FileOperationsListFromComputeNodeParameters
  ): StreamableMethod<
    | FileOperationsListFromComputeNode200Response
    | FileOperationsListFromComputeNodeDefaultResponse
  >;
}

export interface JobScheduleOperationsExists {
  /** Checks the specified Job Schedule exists. */
  head(
    options: JobScheduleOperationsExistsParameters
  ): StreamableMethod<
    | JobScheduleOperationsExists204Response
    | JobScheduleOperationsExistsDefaultResponse
  >;
  /**
   * When you delete a Job Schedule, this also deletes all Jobs and Tasks under that
   * schedule. When Tasks are deleted, all the files in their working directories on
   * the Compute Nodes are also deleted (the retention period is ignored). The Job
   * Schedule statistics are no longer accessible once the Job Schedule is deleted,
   * though they are still counted towards Account lifetime statistics.
   */
  delete(
    options: JobScheduleOperationsDeleteParameters
  ): StreamableMethod<
    | JobScheduleOperationsDelete204Response
    | JobScheduleOperationsDeleteDefaultResponse
  >;
  /** Gets information about the specified Job Schedule. */
  get(
    options: JobScheduleOperationsGetParameters
  ): StreamableMethod<
    | JobScheduleOperationsGet200Response
    | JobScheduleOperationsGetDefaultResponse
  >;
  /**
   * This replaces only the Job Schedule properties specified in the request. For
   * example, if the schedule property is not specified with this request, then the
   * Batch service will keep the existing schedule. Changes to a Job Schedule only
   * impact Jobs created by the schedule after the update has taken place; currently
   * running Jobs are unaffected.
   */
  patch(
    options: JobScheduleOperationsPatchParameters
  ): StreamableMethod<
    | JobScheduleOperationsPatch204Response
    | JobScheduleOperationsPatchDefaultResponse
  >;
  /**
   * This fully replaces all the updatable properties of the Job Schedule. For
   * example, if the schedule property is not specified with this request, then the
   * Batch service will remove the existing schedule. Changes to a Job Schedule only
   * impact Jobs created by the schedule after the update has taken place; currently
   * running Jobs are unaffected.
   */
  put(
    options: JobScheduleOperationsUpdateParameters
  ): StreamableMethod<
    | JobScheduleOperationsUpdate204Response
    | JobScheduleOperationsUpdateDefaultResponse
  >;
}

export interface JobScheduleOperationsDisable {
  /** No new Jobs will be created until the Job Schedule is enabled again. */
  post(
    options: JobScheduleOperationsDisableParameters
  ): StreamableMethod<
    | JobScheduleOperationsDisable204Response
    | JobScheduleOperationsDisableDefaultResponse
  >;
}

export interface JobScheduleOperationsEnable {
  /** Enables a Job Schedule. */
  post(
    options: JobScheduleOperationsEnableParameters
  ): StreamableMethod<
    | JobScheduleOperationsEnable204Response
    | JobScheduleOperationsEnableDefaultResponse
  >;
}

export interface JobScheduleOperationsTerminate {
  /** Terminates a Job Schedule. */
  post(
    options: JobScheduleOperationsTerminateParameters
  ): StreamableMethod<
    | JobScheduleOperationsTerminate204Response
    | JobScheduleOperationsTerminateDefaultResponse
  >;
}

export interface JobScheduleOperationsAdd {
  /** Adds a Job Schedule to the specified Account. */
  post(
    options: JobScheduleOperationsAddParameters
  ): StreamableMethod<
    | JobScheduleOperationsAdd204Response
    | JobScheduleOperationsAddDefaultResponse
  >;
  /** Lists all of the Job Schedules in the specified Account. */
  get(
    options: JobScheduleOperationsListParameters
  ): StreamableMethod<
    | JobScheduleOperationsList200Response
    | JobScheduleOperationsListDefaultResponse
  >;
}

export interface TaskOperationsAdd {
  /**
   * The maximum lifetime of a Task from addition to completion is 180 days. If a
   * Task has not completed within 180 days of being added it will be terminated by
   * the Batch service and left in whatever state it was in at that time.
   */
  post(
    options: TaskOperationsAddParameters
  ): StreamableMethod<
    TaskOperationsAdd204Response | TaskOperationsAddDefaultResponse
  >;
  /**
   * For multi-instance Tasks, information such as affinityId, executionInfo and
   * nodeInfo refer to the primary Task. Use the list subtasks API to retrieve
   * information about subtasks.
   */
  get(
    options: TaskOperationsListParameters
  ): StreamableMethod<
    TaskOperationsList200Response | TaskOperationsListDefaultResponse
  >;
}

export interface TaskOperationsAddCollection {
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
  post(
    options: TaskOperationsAddCollectionParameters
  ): StreamableMethod<
    | TaskOperationsAddCollection200Response
    | TaskOperationsAddCollectionDefaultResponse
  >;
}

export interface TaskOperationsDelete {
  /**
   * When a Task is deleted, all of the files in its directory on the Compute Node
   * where it ran are also deleted (regardless of the retention time). For
   * multi-instance Tasks, the delete Task operation applies synchronously to the
   * primary task; subtasks and their files are then deleted asynchronously in the
   * background.
   */
  delete(
    options: TaskOperationsDeleteParameters
  ): StreamableMethod<
    TaskOperationsDelete204Response | TaskOperationsDeleteDefaultResponse
  >;
  /**
   * For multi-instance Tasks, information such as affinityId, executionInfo and
   * nodeInfo refer to the primary Task. Use the list subtasks API to retrieve
   * information about subtasks.
   */
  get(
    options: TaskOperationsGetParameters
  ): StreamableMethod<
    TaskOperationsGet200Response | TaskOperationsGetDefaultResponse
  >;
  /** Updates the properties of the specified Task. */
  put(
    options: TaskOperationsUpdateParameters
  ): StreamableMethod<
    TaskOperationsUpdate204Response | TaskOperationsUpdateDefaultResponse
  >;
}

export interface TaskOperationsListSubtasks {
  /** If the Task is not a multi-instance Task then this returns an empty collection. */
  get(
    options: TaskOperationsListSubtasksParameters
  ): StreamableMethod<
    | TaskOperationsListSubtasks200Response
    | TaskOperationsListSubtasksDefaultResponse
  >;
}

export interface TaskOperationsTerminate {
  /**
   * When the Task has been terminated, it moves to the completed state. For
   * multi-instance Tasks, the terminate Task operation applies synchronously to the
   * primary task; subtasks are then terminated asynchronously in the background.
   */
  post(
    options: TaskOperationsTerminateParameters
  ): StreamableMethod<
    TaskOperationsTerminate204Response | TaskOperationsTerminateDefaultResponse
  >;
}

export interface TaskOperationsReactivate {
  /**
   * Reactivation makes a Task eligible to be retried again up to its maximum retry
   * count. The Task's state is changed to active. As the Task is no longer in the
   * completed state, any previous exit code or failure information is no longer
   * available after reactivation. Each time a Task is reactivated, its retry count
   * is reset to 0. Reactivation will fail for Tasks that are not completed or that
   * previously completed successfully (with an exit code of 0). Additionally, it
   * will fail if the Job has completed (or is terminating or deleting).
   */
  post(
    options: TaskOperationsReactivateParameters
  ): StreamableMethod<
    | TaskOperationsReactivate204Response
    | TaskOperationsReactivateDefaultResponse
  >;
}

export interface ComputeNodeOperationsAddUser {
  /**
   * You can add a user Account to a Compute Node only when it is in the idle or
   * running state.
   */
  post(
    options: ComputeNodeOperationsAddUserParameters
  ): StreamableMethod<
    | ComputeNodeOperationsAddUser204Response
    | ComputeNodeOperationsAddUserDefaultResponse
  >;
}

export interface ComputeNodeOperationsDeleteUser {
  /**
   * You can delete a user Account to a Compute Node only when it is in the idle or
   * running state.
   */
  delete(
    options: ComputeNodeOperationsDeleteUserParameters
  ): StreamableMethod<
    | ComputeNodeOperationsDeleteUser204Response
    | ComputeNodeOperationsDeleteUserDefaultResponse
  >;
  /**
   * This operation replaces of all the updatable properties of the Account. For
   * example, if the expiryTime element is not specified, the current value is
   * replaced with the default value, not left unmodified. You can update a user
   * Account on a Compute Node only when it is in the idle or running state.
   */
  put(
    options: ComputeNodeOperationsUpdateUserParameters
  ): StreamableMethod<
    | ComputeNodeOperationsUpdateUser204Response
    | ComputeNodeOperationsUpdateUserDefaultResponse
  >;
}

export interface ComputeNodeOperationsGet {
  /** Gets information about the specified Compute Node. */
  get(
    options: ComputeNodeOperationsGetParameters
  ): StreamableMethod<
    | ComputeNodeOperationsGet200Response
    | ComputeNodeOperationsGetDefaultResponse
  >;
}

export interface ComputeNodeOperationsReboot {
  /** You can restart a Compute Node only if it is in an idle or running state. */
  post(
    options: ComputeNodeOperationsRebootParameters
  ): StreamableMethod<
    | ComputeNodeOperationsReboot204Response
    | ComputeNodeOperationsRebootDefaultResponse
  >;
}

export interface ComputeNodeOperationsReimage {
  /**
   * You can reinstall the operating system on a Compute Node only if it is in an
   * idle or running state. This API can be invoked only on Pools created with the
   * cloud service configuration property.
   */
  post(
    options: ComputeNodeOperationsReimageParameters
  ): StreamableMethod<
    | ComputeNodeOperationsReimage204Response
    | ComputeNodeOperationsReimageDefaultResponse
  >;
}

export interface ComputeNodeOperationsDisableScheduling {
  /**
   * You can disable Task scheduling on a Compute Node only if its current
   * scheduling state is enabled.
   */
  post(
    options: ComputeNodeOperationsDisableSchedulingParameters
  ): StreamableMethod<
    | ComputeNodeOperationsDisableScheduling204Response
    | ComputeNodeOperationsDisableSchedulingDefaultResponse
  >;
}

export interface ComputeNodeOperationsEnableScheduling {
  /**
   * You can enable Task scheduling on a Compute Node only if its current scheduling
   * state is disabled
   */
  post(
    options: ComputeNodeOperationsEnableSchedulingParameters
  ): StreamableMethod<
    | ComputeNodeOperationsEnableScheduling204Response
    | ComputeNodeOperationsEnableSchedulingDefaultResponse
  >;
}

export interface ComputeNodeOperationsGetRemoteLoginSettings {
  /**
   * Before you can remotely login to a Compute Node using the remote login
   * settings, you must create a user Account on the Compute Node. This API can be
   * invoked only on Pools created with the virtual machine configuration property.
   * For Pools created with a cloud service configuration, see the GetRemoteDesktop
   * API.
   */
  get(
    options: ComputeNodeOperationsGetRemoteLoginSettingsParameters
  ): StreamableMethod<
    | ComputeNodeOperationsGetRemoteLoginSettings200Response
    | ComputeNodeOperationsGetRemoteLoginSettingsDefaultResponse
  >;
}

export interface ComputeNodeOperationsGetRemoteDesktop {
  /**
   * Before you can access a Compute Node by using the RDP file, you must create a
   * user Account on the Compute Node. This API can only be invoked on Pools created
   * with a cloud service configuration. For Pools created with a virtual machine
   * configuration, see the GetRemoteLoginSettings API.
   */
  get(
    options: ComputeNodeOperationsGetRemoteDesktopParameters
  ): StreamableMethod<
    | ComputeNodeOperationsGetRemoteDesktop204Response
    | ComputeNodeOperationsGetRemoteDesktopDefaultResponse
  >;
}

export interface ComputeNodeOperationsUploadBatchServiceLogs {
  /**
   * This is for gathering Azure Batch service log files in an automated fashion
   * from Compute Nodes if you are experiencing an error and wish to escalate to
   * Azure support. The Azure Batch service log files should be shared with Azure
   * support to aid in debugging issues with the Batch service.
   */
  post(
    options: ComputeNodeOperationsUploadBatchServiceLogsParameters
  ): StreamableMethod<
    | ComputeNodeOperationsUploadBatchServiceLogs201Response
    | ComputeNodeOperationsUploadBatchServiceLogsDefaultResponse
  >;
}

export interface ComputeNodeOperationsList {
  /** Lists the Compute Nodes in the specified Pool. */
  get(
    options: ComputeNodeOperationsListParameters
  ): StreamableMethod<
    | ComputeNodeOperationsList200Response
    | ComputeNodeOperationsListDefaultResponse
  >;
}

export interface ComputeNodeExtensionOperationsGet {
  /** Gets information about the specified Compute Node Extension. */
  get(
    options: ComputeNodeExtensionOperationsGetParameters
  ): StreamableMethod<
    | ComputeNodeExtensionOperationsGet200Response
    | ComputeNodeExtensionOperationsGetDefaultResponse
  >;
}

export interface ComputeNodeExtensionOperationsList {
  /** Lists the Compute Nodes Extensions in the specified Pool. */
  get(
    options: ComputeNodeExtensionOperationsListParameters
  ): StreamableMethod<
    | ComputeNodeExtensionOperationsList200Response
    | ComputeNodeExtensionOperationsListDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/applications' has methods for the following verbs: get */
  (path: "/applications"): ApplicationOperationsList;
  /** Resource for '/applications/\{id\}' has methods for the following verbs: get */
  (path: "/applications/{id}", id: string): ApplicationOperationsGet;
  /** Resource for '/poolusagemetrics' has methods for the following verbs: get */
  (path: "/poolusagemetrics"): PoolOperationsListUsageMetrics;
  /** Resource for '/lifetimepoolstats' has methods for the following verbs: get */
  (path: "/lifetimepoolstats"): PoolOperationsGetAllLifetimeStatistics;
  /** Resource for '/pools' has methods for the following verbs: post, get */
  (path: "/pools"): PoolOperationsAdd;
  /** Resource for '/pools/\{poolId\}' has methods for the following verbs: delete, head, get, patch */
  (path: "/pools/{poolId}", poolId: string): PoolOperationsDelete;
  /** Resource for '/pools/\{poolId\}/disableautoscale' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/disableautoscale",
    poolId: string
  ): PoolOperationsDisableAutoScale;
  /** Resource for '/pools/\{poolId\}/enableautoscale' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/enableautoscale",
    poolId: string
  ): PoolOperationsEnableAutoScale;
  /** Resource for '/pools/\{poolId\}/evaluateautoscale' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/evaluateautoscale",
    poolId: string
  ): PoolOperationsEvaluateAutoScale;
  /** Resource for '/pools/\{poolId\}/resize' has methods for the following verbs: post */
  (path: "/pools/{poolId}/resize", poolId: string): PoolOperationsResize;
  /** Resource for '/pools/\{poolId\}/stopresize' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/stopresize",
    poolId: string
  ): PoolOperationsStopResize;
  /** Resource for '/pools/\{poolId\}/updateproperties' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/updateproperties",
    poolId: string
  ): PoolOperationsUpdateProperties;
  /** Resource for '/pools/\{poolId\}/removenodes' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/removenodes",
    poolId: string
  ): PoolOperationsRemoveNodes;
  /** Resource for '/supportedimages' has methods for the following verbs: get */
  (path: "/supportedimages"): AccountOperationsListSupportedImages;
  /** Resource for '/nodecounts' has methods for the following verbs: get */
  (path: "/nodecounts"): AccountOperationsListPoolNodeCounts;
  /** Resource for '/lifetimejobstats' has methods for the following verbs: get */
  (path: "/lifetimejobstats"): JobOperationsGetAllLifetimeStatistics;
  /** Resource for '/jobs/\{jobId\}' has methods for the following verbs: delete, get, patch, put */
  (path: "/jobs/{jobId}", jobId: string): JobOperationsDelete;
  /** Resource for '/jobs/\{jobId\}/disable' has methods for the following verbs: post */
  (path: "/jobs/{jobId}/disable", jobId: string): JobOperationsDisable;
  /** Resource for '/jobs/\{jobId\}/enable' has methods for the following verbs: post */
  (path: "/jobs/{jobId}/enable", jobId: string): JobOperationsEnable;
  /** Resource for '/jobs/\{jobId\}/terminate' has methods for the following verbs: post */
  (path: "/jobs/{jobId}/terminate", jobId: string): JobOperationsTerminate;
  /** Resource for '/jobs' has methods for the following verbs: post, get */
  (path: "/jobs"): JobOperationsAdd;
  /** Resource for '/jobschedules/\{jobScheduleId\}/jobs' has methods for the following verbs: get */
  (
    path: "/jobschedules/{jobScheduleId}/jobs",
    jobScheduleId: string
  ): JobOperationsListFromJobSchedule;
  /** Resource for '/jobs/\{jobId\}/jobpreparationandreleasetaskstatus' has methods for the following verbs: get */
  (
    path: "/jobs/{jobId}/jobpreparationandreleasetaskstatus",
    jobId: string
  ): JobOperationsListPreparationAndReleaseTaskStatus;
  /** Resource for '/jobs/\{jobId\}/taskcounts' has methods for the following verbs: get */
  (path: "/jobs/{jobId}/taskcounts", jobId: string): JobOperationsGetTaskCounts;
  /** Resource for '/certificates' has methods for the following verbs: post, get */
  (path: "/certificates"): CertificateOperationsAdd;
  /** Resource for '/certificates(thumbprintAlgorithm=\{thumbprintAlgorithm\},thumbprint=\{thumbprint\})/canceldelete' has methods for the following verbs: post */
  (
    path: "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete",
    thumbprintAlgorithm: string,
    thumbprint: string
  ): CertificateOperationsCancelDeletion;
  /** Resource for '/certificates(thumbprintAlgorithm=\{thumbprintAlgorithm\},thumbprint=\{thumbprint\})' has methods for the following verbs: delete, get */
  (
    path: "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})",
    thumbprintAlgorithm: string,
    thumbprint: string
  ): CertificateOperationsDelete;
  /** Resource for '/jobs/\{jobId\}/tasks/\{taskId\}/files/\{filePath\}' has methods for the following verbs: delete, get, head */
  (
    path: "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
    jobId: string,
    taskId: string,
    filePath: string
  ): FileOperationsDeleteFromTask;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/files/\{filePath\}' has methods for the following verbs: delete, get, head */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
    poolId: string,
    nodeId: string,
    filePath: string
  ): FileOperationsDeleteFromComputeNode;
  /** Resource for '/jobs/\{jobId\}/tasks/\{taskId\}/files' has methods for the following verbs: get */
  (
    path: "/jobs/{jobId}/tasks/{taskId}/files",
    jobId: string,
    taskId: string
  ): FileOperationsListFromTask;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/files' has methods for the following verbs: get */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/files",
    poolId: string,
    nodeId: string
  ): FileOperationsListFromComputeNode;
  /** Resource for '/jobschedules/\{jobScheduleId\}' has methods for the following verbs: head, delete, get, patch, put */
  (
    path: "/jobschedules/{jobScheduleId}",
    jobScheduleId: string
  ): JobScheduleOperationsExists;
  /** Resource for '/jobschedules/\{jobScheduleId\}/disable' has methods for the following verbs: post */
  (
    path: "/jobschedules/{jobScheduleId}/disable",
    jobScheduleId: string
  ): JobScheduleOperationsDisable;
  /** Resource for '/jobschedules/\{jobScheduleId\}/enable' has methods for the following verbs: post */
  (
    path: "/jobschedules/{jobScheduleId}/enable",
    jobScheduleId: string
  ): JobScheduleOperationsEnable;
  /** Resource for '/jobschedules/\{jobScheduleId\}/terminate' has methods for the following verbs: post */
  (
    path: "/jobschedules/{jobScheduleId}/terminate",
    jobScheduleId: string
  ): JobScheduleOperationsTerminate;
  /** Resource for '/jobschedules' has methods for the following verbs: post, get */
  (path: "/jobschedules"): JobScheduleOperationsAdd;
  /** Resource for '/jobs/\{jobId\}/tasks' has methods for the following verbs: post, get */
  (path: "/jobs/{jobId}/tasks", jobId: string): TaskOperationsAdd;
  /** Resource for '/jobs/\{jobId\}/addtaskcollection' has methods for the following verbs: post */
  (
    path: "/jobs/{jobId}/addtaskcollection",
    jobId: string
  ): TaskOperationsAddCollection;
  /** Resource for '/jobs/\{jobId\}/tasks/\{taskId\}' has methods for the following verbs: delete, get, put */
  (
    path: "/jobs/{jobId}/tasks/{taskId}",
    jobId: string,
    taskId: string
  ): TaskOperationsDelete;
  /** Resource for '/jobs/\{jobId\}/tasks/\{taskId\}/subtasksinfo' has methods for the following verbs: get */
  (
    path: "/jobs/{jobId}/tasks/{taskId}/subtasksinfo",
    jobId: string,
    taskId: string
  ): TaskOperationsListSubtasks;
  /** Resource for '/jobs/\{jobId\}/tasks/\{taskId\}/terminate' has methods for the following verbs: post */
  (
    path: "/jobs/{jobId}/tasks/{taskId}/terminate",
    jobId: string,
    taskId: string
  ): TaskOperationsTerminate;
  /** Resource for '/jobs/\{jobId\}/tasks/\{taskId\}/reactivate' has methods for the following verbs: post */
  (
    path: "/jobs/{jobId}/tasks/{taskId}/reactivate",
    jobId: string,
    taskId: string
  ): TaskOperationsReactivate;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/users' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/users",
    poolId: string,
    nodeId: string
  ): ComputeNodeOperationsAddUser;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/users/\{userName\}' has methods for the following verbs: delete, put */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/users/{userName}",
    poolId: string,
    nodeId: string,
    userName: string
  ): ComputeNodeOperationsDeleteUser;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}' has methods for the following verbs: get */
  (
    path: "/pools/{poolId}/nodes/{nodeId}",
    poolId: string,
    nodeId: string
  ): ComputeNodeOperationsGet;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/reboot' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/reboot",
    poolId: string,
    nodeId: string
  ): ComputeNodeOperationsReboot;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/reimage' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/reimage",
    poolId: string,
    nodeId: string
  ): ComputeNodeOperationsReimage;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/disablescheduling' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/disablescheduling",
    poolId: string,
    nodeId: string
  ): ComputeNodeOperationsDisableScheduling;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/enablescheduling' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/enablescheduling",
    poolId: string,
    nodeId: string
  ): ComputeNodeOperationsEnableScheduling;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/remoteloginsettings' has methods for the following verbs: get */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/remoteloginsettings",
    poolId: string,
    nodeId: string
  ): ComputeNodeOperationsGetRemoteLoginSettings;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/rdp' has methods for the following verbs: get */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/rdp",
    poolId: string,
    nodeId: string
  ): ComputeNodeOperationsGetRemoteDesktop;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/uploadbatchservicelogs' has methods for the following verbs: post */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/uploadbatchservicelogs"
  ): ComputeNodeOperationsUploadBatchServiceLogs;
  /** Resource for '/pools/\{poolId\}/nodes' has methods for the following verbs: get */
  (path: "/pools/{poolId}/nodes", poolId: string): ComputeNodeOperationsList;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/extensions/\{extensionName\}' has methods for the following verbs: get */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/extensions/{extensionName}",
    poolId: string,
    nodeId: string,
    extensionName: string
  ): ComputeNodeExtensionOperationsGet;
  /** Resource for '/pools/\{poolId\}/nodes/\{nodeId\}/extensions' has methods for the following verbs: get */
  (
    path: "/pools/{poolId}/nodes/{nodeId}/extensions",
    poolId: string,
    nodeId: string
  ): ComputeNodeExtensionOperationsList;
}

export type BatchServiceClient = Client & {
  path: Routes;
};
