// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
import {
  NodeRemoveOptions,
  BatchPoolReplaceOptions,
  BatchPoolResizeOptions,
  BatchPoolEvaluateAutoScaleOptions,
  BatchPoolEnableAutoScaleOptions,
  BatchPoolUpdateOptions,
  BatchPoolCreateOptions,
  BatchJobCreateOptions,
  BatchJobTerminateOptions,
  BatchJobDisableOptions,
  BatchJobUpdateOptions,
  JobStatistics,
  JobSchedulingError,
  JobExecutionInformation,
  BatchJob,
  DeleteCertificateError,
  BatchCertificate,
  BatchJobScheduleCreateOptions,
  BatchJobScheduleUpdateOptions,
  JobScheduleStatistics,
  RecentJob,
  JobScheduleExecutionInformation,
  AzureFileShareConfiguration,
  CifsMountConfiguration,
  NfsMountConfiguration,
  AzureBlobFileSystemConfiguration,
  MountConfiguration,
  MetadataItem,
  WindowsUserConfiguration,
  LinuxUserConfiguration,
  UserAccount,
  PublicIpAddressConfiguration,
  NetworkSecurityGroupRule,
  InboundNATPool,
  PoolEndpointConfiguration,
  NetworkConfiguration,
  TaskSchedulingPolicy,
  DiffDiskSettings,
  OSDisk,
  NodePlacementConfiguration,
  DiskEncryptionConfiguration,
  ContainerConfiguration,
  DataDisk,
  WindowsConfiguration,
  VirtualMachineConfiguration,
  CloudServiceConfiguration,
  PoolSpecification,
  AutoPoolSpecification,
  PoolInformation,
  JobReleaseTask,
  JobPreparationTask,
  JobManagerTask,
  JobConstraints,
  JobNetworkConfiguration,
  JobSpecification,
  Schedule,
  BatchJobSchedule,
  BatchTaskCollection,
  AuthenticationTokenSettings,
  ApplicationPackageReference,
  TaskIdRange,
  TaskDependencies,
  MultiInstanceSettings,
  TaskConstraints,
  AffinityInformation,
  OutputFileUploadOptions,
  HttpHeader,
  OutputFileBlobContainerDestination,
  OutputFileDestination,
  OutputFile,
  ExitCodeRangeMapping,
  ExitOptions,
  ExitCodeMapping,
  ExitConditions,
  BatchTaskCreateOptions,
  UploadBatchServiceLogsOptions,
  NodeDisableSchedulingOptions,
  NodeReimageOptions,
  NodeRebootOptions,
  BatchNodeUserUpdateOptions,
  BatchNodeUserCreateOptions,
  BatchApplication,
  ApplicationListResult,
  UserAssignedIdentity,
  BatchPoolIdentity,
  ResourceStatistics,
  UsageStatistics,
  PoolStatistics,
  AutoScaleRunError,
  AutoScaleRun,
  ResizeError,
  BatchPool,
  BatchPoolListResult,
  PoolUsageMetrics,
  PoolListUsageMetricsResult,
  NodeCounts,
  PoolNodeCounts,
  PoolNodeCountsListResult,
  ImageInformation,
  AccountListSupportedImagesResult,
  TaskSlotCounts,
  TaskCounts,
  TaskCountsResult,
  JobReleaseTaskExecutionInformation,
  JobPreparationTaskExecutionInformation,
  JobPreparationAndReleaseTaskExecutionInformation,
  BatchJobListPreparationAndReleaseTaskStatusResult,
  BatchJobListResult,
  CertificateListResult,
  BatchJobScheduleListResult,
  SubtaskInformation,
  BatchTaskListSubtasksResult,
  TaskAddResult,
  TaskAddCollectionResult,
  TaskStatistics,
  BatchNodeInformation,
  BatchTask,
  BatchTaskListResult,
  FileProperties,
  NodeFile,
  NodeFileListResult,
  NodeVMExtensionList,
  InstanceViewStatus,
  VMExtensionInstanceView,
  VMExtension,
  NodeVMExtension,
  BatchNodeListResult,
  UploadBatchServiceLogsResult,
  BatchNodeRemoteLoginSettingsResult,
  ImageReference,
  VirtualMachineInfo,
  NodeAgentInformation,
  InboundEndpoint,
  BatchNodeEndpointConfiguration,
  BatchNodeError,
  CertificateReference,
  StartTaskInformation,
  AutoUserSpecification,
  UserIdentity,
  EnvironmentSetting,
  ResourceFile,
  BatchNodeIdentityReference,
  ContainerRegistry,
  TaskContainerSettings,
  StartTask,
  NameValuePair,
  TaskFailureInformation,
  TaskContainerExecutionInformation,
  TaskExecutionInformation,
  TaskInformation,
  BatchNode,
  BatchErrorDetail,
  ErrorMessage,
  BatchError,
} from "../models/models.js";
import {
  NodeRemoveOptions as RestNodeRemoveOptions,
  BatchPoolReplaceOptions as RestBatchPoolReplaceOptions,
  BatchPoolResizeOptions as RestBatchPoolResizeOptions,
  BatchPoolEvaluateAutoScaleOptions as RestBatchPoolEvaluateAutoScaleOptions,
  BatchPoolEnableAutoScaleOptions as RestBatchPoolEnableAutoScaleOptions,
  BatchPoolUpdateOptions as RestBatchPoolUpdateOptions,
  BatchPoolCreateOptions as RestBatchPoolCreateOptions,
  BatchJobCreateOptions as RestBatchJobCreateOptions,
  BatchJobTerminateOptions as RestBatchJobTerminateOptions,
  BatchJobDisableOptions as RestBatchJobDisableOptions,
  BatchJobUpdateOptions as RestBatchJobUpdateOptions,
  JobStatistics as RestJobStatistics,
  JobSchedulingError as RestJobSchedulingError,
  JobExecutionInformation as RestJobExecutionInformation,
  BatchJob as RestBatchJob,
  DeleteCertificateError as RestDeleteCertificateError,
  BatchCertificate as RestBatchCertificate,
  BatchJobScheduleCreateOptions as RestBatchJobScheduleCreateOptions,
  BatchJobScheduleUpdateOptions as RestBatchJobScheduleUpdateOptions,
  JobScheduleStatistics as RestJobScheduleStatistics,
  RecentJob as RestRecentJob,
  JobScheduleExecutionInformation as RestJobScheduleExecutionInformation,
  AzureFileShareConfiguration as RestAzureFileShareConfiguration,
  CifsMountConfiguration as RestCifsMountConfiguration,
  NFSMountConfiguration as RestNfsMountConfiguration,
  AzureBlobFileSystemConfiguration as RestAzureBlobFileSystemConfiguration,
  MountConfiguration as RestMountConfiguration,
  MetadataItem as RestMetadataItem,
  WindowsUserConfiguration as RestWindowsUserConfiguration,
  LinuxUserConfiguration as RestLinuxUserConfiguration,
  UserAccount as RestUserAccount,
  PublicIPAddressConfiguration as RestPublicIpAddressConfiguration,
  NetworkSecurityGroupRule as RestNetworkSecurityGroupRule,
  InboundNATPool as RestInboundNATPool,
  PoolEndpointConfiguration as RestPoolEndpointConfiguration,
  NetworkConfiguration as RestNetworkConfiguration,
  TaskSchedulingPolicy as RestTaskSchedulingPolicy,
  DiffDiskSettings as RestDiffDiskSettings,
  OSDisk as RestOSDisk,
  NodePlacementConfiguration as RestNodePlacementConfiguration,
  DiskEncryptionConfiguration as RestDiskEncryptionConfiguration,
  ContainerConfiguration as RestContainerConfiguration,
  DataDisk as RestDataDisk,
  WindowsConfiguration as RestWindowsConfiguration,
  VirtualMachineConfiguration as RestVirtualMachineConfiguration,
  CloudServiceConfiguration as RestCloudServiceConfiguration,
  PoolSpecification as RestPoolSpecification,
  AutoPoolSpecification as RestAutoPoolSpecification,
  PoolInformation as RestPoolInformation,
  JobReleaseTask as RestJobReleaseTask,
  JobPreparationTask as RestJobPreparationTask,
  JobManagerTask as RestJobManagerTask,
  JobConstraints as RestJobConstraints,
  JobNetworkConfiguration as RestJobNetworkConfiguration,
  JobSpecification as RestJobSpecification,
  Schedule as RestSchedule,
  BatchJobSchedule as RestBatchJobSchedule,
  BatchTaskCollection as RestBatchTaskCollection,
  AuthenticationTokenSettings as RestAuthenticationTokenSettings,
  ApplicationPackageReference as RestApplicationPackageReference,
  TaskIdRange as RestTaskIdRange,
  TaskDependencies as RestTaskDependencies,
  MultiInstanceSettings as RestMultiInstanceSettings,
  TaskConstraints as RestTaskConstraints,
  AffinityInformation as RestAffinityInformation,
  OutputFileUploadOptions as RestOutputFileUploadOptions,
  HttpHeader as RestHttpHeader,
  OutputFileBlobContainerDestination as RestOutputFileBlobContainerDestination,
  OutputFileDestination as RestOutputFileDestination,
  OutputFile as RestOutputFile,
  ExitCodeRangeMapping as RestExitCodeRangeMapping,
  ExitOptions as RestExitOptions,
  ExitCodeMapping as RestExitCodeMapping,
  ExitConditions as RestExitConditions,
  BatchTaskCreateOptions as RestBatchTaskCreateOptions,
  UploadBatchServiceLogsOptions as RestUploadBatchServiceLogsOptions,
  NodeDisableSchedulingOptions as RestNodeDisableSchedulingOptions,
  NodeReimageOptions as RestNodeReimageOptions,
  NodeRebootOptions as RestNodeRebootOptions,
  BatchNodeUserUpdateOptions as RestBatchNodeUserUpdateOptions,
  BatchNodeUserCreateOptions as RestBatchNodeUserCreateOptions,
  BatchApplicationOutput as RestBatchApplication,
  ApplicationListResultOutput as RestApplicationListResult,
  UserAssignedIdentityOutput as RestUserAssignedIdentity,
  BatchPoolIdentityOutput as RestBatchPoolIdentity,
  ResourceStatisticsOutput as RestResourceStatistics,
  UsageStatisticsOutput as RestUsageStatistics,
  PoolStatisticsOutput as RestPoolStatistics,
  AutoScaleRunErrorOutput as RestAutoScaleRunError,
  AutoScaleRunOutput as RestAutoScaleRun,
  ResizeErrorOutput as RestResizeError,
  BatchPoolOutput as RestBatchPool,
  BatchPoolListResultOutput as RestBatchPoolListResult,
  PoolUsageMetricsOutput as RestPoolUsageMetrics,
  PoolListUsageMetricsResultOutput as RestPoolListUsageMetricsResult,
  NodeCountsOutput as RestNodeCounts,
  PoolNodeCountsOutput as RestPoolNodeCounts,
  PoolNodeCountsListResultOutput as RestPoolNodeCountsListResult,
  ImageInformationOutput as RestImageInformation,
  AccountListSupportedImagesResultOutput as RestAccountListSupportedImagesResult,
  TaskSlotCountsOutput as RestTaskSlotCounts,
  TaskCountsOutput as RestTaskCounts,
  TaskCountsResultOutput as RestTaskCountsResult,
  JobReleaseTaskExecutionInformationOutput as RestJobReleaseTaskExecutionInformation,
  JobPreparationTaskExecutionInformationOutput as RestJobPreparationTaskExecutionInformation,
  JobPreparationAndReleaseTaskExecutionInformationOutput as RestJobPreparationAndReleaseTaskExecutionInformation,
  BatchJobListPreparationAndReleaseTaskStatusResultOutput as RestBatchJobListPreparationAndReleaseTaskStatusResult,
  BatchJobListResultOutput as RestBatchJobListResult,
  CertificateListResultOutput as RestCertificateListResult,
  BatchJobScheduleListResultOutput as RestBatchJobScheduleListResult,
  SubtaskInformationOutput as RestSubtaskInformation,
  BatchTaskListSubtasksResultOutput as RestBatchTaskListSubtasksResult,
  TaskAddResultOutput as RestTaskAddResult,
  TaskAddCollectionResultOutput as RestTaskAddCollectionResult,
  TaskStatisticsOutput as RestTaskStatistics,
  BatchNodeInformationOutput as RestBatchNodeInformation,
  BatchTaskOutput as RestBatchTask,
  BatchTaskListResultOutput as RestBatchTaskListResult,
  FilePropertiesOutput as RestFileProperties,
  NodeFileOutput as RestNodeFile,
  NodeFileListResultOutput as RestNodeFileListResult,
  NodeVMExtensionListOutput as RestNodeVMExtensionList,
  InstanceViewStatusOutput as RestInstanceViewStatus,
  VMExtensionInstanceViewOutput as RestVMExtensionInstanceView,
  VMExtensionOutput as RestVMExtension,
  NodeVMExtensionOutput as RestNodeVMExtension,
  BatchNodeListResultOutput as RestBatchNodeListResult,
  UploadBatchServiceLogsResultOutput as RestUploadBatchServiceLogsResult,
  BatchNodeRemoteLoginSettingsResultOutput as RestBatchNodeRemoteLoginSettingsResult,
  ImageReferenceOutput as RestImageReference,
  VirtualMachineInfoOutput as RestVirtualMachineInfo,
  NodeAgentInformationOutput as RestNodeAgentInformation,
  InboundEndpointOutput as RestInboundEndpoint,
  BatchNodeEndpointConfigurationOutput as RestBatchNodeEndpointConfiguration,
  BatchNodeErrorOutput as RestBatchNodeError,
  CertificateReferenceOutput as RestCertificateReference,
  StartTaskInformationOutput as RestStartTaskInformation,
  AutoUserSpecificationOutput as RestAutoUserSpecification,
  UserIdentityOutput as RestUserIdentity,
  EnvironmentSettingOutput as RestEnvironmentSetting,
  ResourceFileOutput as RestResourceFile,
  BatchNodeIdentityReferenceOutput as RestBatchNodeIdentityReference,
  ContainerRegistryOutput as RestContainerRegistry,
  TaskContainerSettingsOutput as RestTaskContainerSettings,
  StartTaskOutput as RestStartTask,
  NameValuePairOutput as RestNameValuePair,
  TaskFailureInformationOutput as RestTaskFailureInformation,
  TaskContainerExecutionInformationOutput as RestTaskContainerExecutionInformation,
  TaskExecutionInformationOutput as RestTaskExecutionInformation,
  TaskInformationOutput as RestTaskInformation,
  BatchNodeOutput as RestBatchNode,
  BatchErrorDetailOutput as RestBatchErrorDetail,
  ErrorMessageOutput as RestErrorMessage,
  BatchErrorOutput as RestBatchError,
} from "../rest/index.js";

export function serializeNodeRemoveOptions(
  o: NodeRemoveOptions,
): RestNodeRemoveOptions {
  return {
    nodeDeallocationOption: o["nodeDeallocationOption"],
    resizeTimeout:
      o["resizeTimeout"] === undefined ? o["resizeTimeout"] : FIXME,
    nodeList: o["nodeList"],
  };
}

export function serializeBatchPoolReplaceOptions(
  o: BatchPoolReplaceOptions,
): RestBatchPoolReplaceOptions {
  return {
    targetNodeCommunicationMode: o["targetNodeCommunicationMode"],
    metadata: o["metadata"].map((e) => MISSING_SERIALIZER(e)),
    applicationPackageReferences: o["applicationPackageReferences"].map((e) =>
      MISSING_SERIALIZER(e),
    ),
    certificateReferences: o["certificateReferences"].map((e) =>
      MISSING_SERIALIZER(e),
    ),
    startTask:
      o["startTask"] === undefined
        ? o["startTask"]
        : MISSING_SERIALIZER(o["startTask"]),
  };
}

export function serializeBatchPoolResizeOptions(
  o: BatchPoolResizeOptions,
): RestBatchPoolResizeOptions {
  return {
    nodeDeallocationOption: o["nodeDeallocationOption"],
    resizeTimeout:
      o["resizeTimeout"] === undefined ? o["resizeTimeout"] : FIXME,
    targetLowPriorityNodes: o["targetLowPriorityNodes"],
    targetDedicatedNodes: o["targetDedicatedNodes"],
  };
}

export function serializeBatchPoolEvaluateAutoScaleOptions(
  o: BatchPoolEvaluateAutoScaleOptions,
): RestBatchPoolEvaluateAutoScaleOptions {
  return {
    autoScaleFormula: o["autoScaleFormula"],
  };
}

export function serializeBatchPoolEnableAutoScaleOptions(
  o: BatchPoolEnableAutoScaleOptions,
): RestBatchPoolEnableAutoScaleOptions {
  return {
    autoScaleEvaluationInterval:
      o["autoScaleEvaluationInterval"] === undefined
        ? o["autoScaleEvaluationInterval"]
        : FIXME,
    autoScaleFormula: o["autoScaleFormula"],
  };
}

export function serializeBatchPoolUpdateOptions(
  o: BatchPoolUpdateOptions,
): RestBatchPoolUpdateOptions {
  return {
    targetNodeCommunicationMode: o["targetNodeCommunicationMode"],
    metadata:
      o["metadata"] === undefined
        ? o["metadata"]
        : o["metadata"].map((e) => MISSING_SERIALIZER(e)),
    applicationPackageReferences:
      o["applicationPackageReferences"] === undefined
        ? o["applicationPackageReferences"]
        : o["applicationPackageReferences"].map((e) => MISSING_SERIALIZER(e)),
    certificateReferences:
      o["certificateReferences"] === undefined
        ? o["certificateReferences"]
        : o["certificateReferences"].map((e) => MISSING_SERIALIZER(e)),
    startTask:
      o["startTask"] === undefined
        ? o["startTask"]
        : MISSING_SERIALIZER(o["startTask"]),
  };
}

export function serializeBatchPoolCreateOptions(
  o: BatchPoolCreateOptions,
): RestBatchPoolCreateOptions {
  return {
    targetNodeCommunicationMode: o["targetNodeCommunicationMode"],
    mountConfiguration:
      o["mountConfiguration"] === undefined
        ? o["mountConfiguration"]
        : o["mountConfiguration"].map((e) => MISSING_SERIALIZER(e)),
    metadata:
      o["metadata"] === undefined
        ? o["metadata"]
        : o["metadata"].map((e) => MISSING_SERIALIZER(e)),
    userAccounts:
      o["userAccounts"] === undefined
        ? o["userAccounts"]
        : o["userAccounts"].map((e) => MISSING_SERIALIZER(e)),
    taskSchedulingPolicy:
      o["taskSchedulingPolicy"] === undefined
        ? o["taskSchedulingPolicy"]
        : MISSING_SERIALIZER(o["taskSchedulingPolicy"]),
    taskSlotsPerNode: o["taskSlotsPerNode"],
    applicationLicenses: o["applicationLicenses"],
    applicationPackageReferences:
      o["applicationPackageReferences"] === undefined
        ? o["applicationPackageReferences"]
        : o["applicationPackageReferences"].map((e) => MISSING_SERIALIZER(e)),
    certificateReferences:
      o["certificateReferences"] === undefined
        ? o["certificateReferences"]
        : o["certificateReferences"].map((e) => MISSING_SERIALIZER(e)),
    startTask:
      o["startTask"] === undefined
        ? o["startTask"]
        : MISSING_SERIALIZER(o["startTask"]),
    networkConfiguration:
      o["networkConfiguration"] === undefined
        ? o["networkConfiguration"]
        : MISSING_SERIALIZER(o["networkConfiguration"]),
    enableInterNodeCommunication: o["enableInterNodeCommunication"],
    autoScaleEvaluationInterval:
      o["autoScaleEvaluationInterval"] === undefined
        ? o["autoScaleEvaluationInterval"]
        : FIXME,
    autoScaleFormula: o["autoScaleFormula"],
    enableAutoScale: o["enableAutoScale"],
    targetLowPriorityNodes: o["targetLowPriorityNodes"],
    targetDedicatedNodes: o["targetDedicatedNodes"],
    resizeTimeout:
      o["resizeTimeout"] === undefined ? o["resizeTimeout"] : FIXME,
    virtualMachineConfiguration:
      o["virtualMachineConfiguration"] === undefined
        ? o["virtualMachineConfiguration"]
        : MISSING_SERIALIZER(o["virtualMachineConfiguration"]),
    cloudServiceConfiguration:
      o["cloudServiceConfiguration"] === undefined
        ? o["cloudServiceConfiguration"]
        : MISSING_SERIALIZER(o["cloudServiceConfiguration"]),
    vmSize: o["vmSize"],
    displayName: o["displayName"],
    id: o["id"],
  };
}

export function serializeBatchJobCreateOptions(
  o: BatchJobCreateOptions,
): RestBatchJobCreateOptions {
  return {
    metadata:
      o["metadata"] === undefined
        ? o["metadata"]
        : o["metadata"].map((e) => MISSING_SERIALIZER(e)),
    networkConfiguration:
      o["networkConfiguration"] === undefined
        ? o["networkConfiguration"]
        : MISSING_SERIALIZER(o["networkConfiguration"]),
    onTaskFailure: o["onTaskFailure"],
    onAllTasksComplete: o["onAllTasksComplete"],
    poolInfo: MISSING_SERIALIZER(o["poolInfo"]),
    commonEnvironmentSettings:
      o["commonEnvironmentSettings"] === undefined
        ? o["commonEnvironmentSettings"]
        : o["commonEnvironmentSettings"].map((e) => MISSING_SERIALIZER(e)),
    jobReleaseTask:
      o["jobReleaseTask"] === undefined
        ? o["jobReleaseTask"]
        : MISSING_SERIALIZER(o["jobReleaseTask"]),
    jobPreparationTask:
      o["jobPreparationTask"] === undefined
        ? o["jobPreparationTask"]
        : MISSING_SERIALIZER(o["jobPreparationTask"]),
    jobManagerTask:
      o["jobManagerTask"] === undefined
        ? o["jobManagerTask"]
        : MISSING_SERIALIZER(o["jobManagerTask"]),
    constraints:
      o["constraints"] === undefined
        ? o["constraints"]
        : MISSING_SERIALIZER(o["constraints"]),
    maxParallelTasks: o["maxParallelTasks"],
    allowTaskPreemption: o["allowTaskPreemption"],
    priority: o["priority"],
    usesTaskDependencies: o["usesTaskDependencies"],
    displayName: o["displayName"],
    id: o["id"],
  };
}

export function serializeBatchJobTerminateOptions(
  o: BatchJobTerminateOptions,
): RestBatchJobTerminateOptions {
  return {
    terminateReason: o["terminateReason"],
  };
}

export function serializeBatchJobDisableOptions(
  o: BatchJobDisableOptions,
): RestBatchJobDisableOptions {
  return {
    disableTasks: o["disableTasks"],
  };
}

export function serializeBatchJobUpdateOptions(
  o: BatchJobUpdateOptions,
): RestBatchJobUpdateOptions {
  return {
    metadata:
      o["metadata"] === undefined
        ? o["metadata"]
        : o["metadata"].map((e) => MISSING_SERIALIZER(e)),
    onAllTasksComplete: o["onAllTasksComplete"],
    poolInfo:
      o["poolInfo"] === undefined
        ? o["poolInfo"]
        : MISSING_SERIALIZER(o["poolInfo"]),
    constraints:
      o["constraints"] === undefined
        ? o["constraints"]
        : MISSING_SERIALIZER(o["constraints"]),
    maxParallelTasks: o["maxParallelTasks"],
    allowTaskPreemption: o["allowTaskPreemption"],
    priority: o["priority"],
  };
}

export function serializeJobStatistics(o: JobStatistics): RestJobStatistics {
  return {
    waitTime: FIXME,
    numTaskRetries: o["numTaskRetries"],
    numFailedTasks: o["numFailedTasks"],
    numSucceededTasks: o["numSucceededTasks"],
    writeIOGiB: o["writeIOGiB"],
    readIOGiB: o["readIOGiB"],
    writeIOps: o["writeIOps"],
    readIOps: o["readIOps"],
    wallClockTime: FIXME,
    kernelCPUTime: FIXME,
    userCPUTime: FIXME,
    lastUpdateTime: o["lastUpdateTime"].toISOString(),
    startTime: o["startTime"].toISOString(),
    url: o["url"],
  };
}

export function deserializeJobStatistics(o: RestJobStatistics): JobStatistics {
  return {
    waitTime: FIXME,
    numTaskRetries: o["numTaskRetries"],
    numFailedTasks: o["numFailedTasks"],
    numSucceededTasks: o["numSucceededTasks"],
    writeIOGiB: o["writeIOGiB"],
    readIOGiB: o["readIOGiB"],
    writeIOps: o["writeIOps"],
    readIOps: o["readIOps"],
    wallClockTime: FIXME,
    kernelCPUTime: FIXME,
    userCPUTime: FIXME,
    lastUpdateTime: new Date(o["lastUpdateTime"]),
    startTime: new Date(o["startTime"]),
    url: o["url"],
  };
}

export function serializeJobSchedulingError(
  o: JobSchedulingError,
): RestJobSchedulingError {
  return {
    details:
      o["details"] === undefined
        ? o["details"]
        : o["details"].map((e) => MISSING_SERIALIZER(e)),
    message: o["message"],
    code: o["code"],
    category: o["category"],
  };
}

export function deserializeJobSchedulingError(
  o: RestJobSchedulingError,
): JobSchedulingError {
  return {
    details:
      o["details"] === undefined
        ? o["details"]
        : o["details"].map((e: RestNameValuePair) => MISSING_SERIALIZER(e)),
    message: o["message"],
    code: o["code"],
    category: o["category"],
  };
}

export function serializeJobExecutionInformation(
  o: JobExecutionInformation,
): RestJobExecutionInformation {
  return {
    terminateReason: o["terminateReason"],
    schedulingError:
      o["schedulingError"] === undefined
        ? o["schedulingError"]
        : MISSING_SERIALIZER(o["schedulingError"]),
    poolId: o["poolId"],
    endTime:
      o["endTime"] === undefined ? o["endTime"] : o["endTime"].toISOString(),
    startTime: o["startTime"].toISOString(),
  };
}

export function deserializeJobExecutionInformation(
  o: RestJobExecutionInformation,
): JobExecutionInformation {
  return {
    terminateReason: o["terminateReason"],
    schedulingError:
      o["schedulingError"] === undefined
        ? o["schedulingError"]
        : MISSING_SERIALIZER(o["schedulingError"]),
    poolId: o["poolId"],
    endTime: o["endTime"] === undefined ? o["endTime"] : new Date(o["endTime"]),
    startTime: new Date(o["startTime"]),
  };
}

export function serializeBatchJob(o: BatchJob): RestBatchJob {
  return {
    metadata:
      o["metadata"] === undefined
        ? o["metadata"]
        : o["metadata"].map((e) => MISSING_SERIALIZER(e)),
    onAllTasksComplete: o["onAllTasksComplete"],
    poolInfo: MISSING_SERIALIZER(o["poolInfo"]),
    constraints:
      o["constraints"] === undefined
        ? o["constraints"]
        : MISSING_SERIALIZER(o["constraints"]),
    maxParallelTasks: o["maxParallelTasks"],
    allowTaskPreemption: o["allowTaskPreemption"],
    priority: o["priority"],
  };
}

export function deserializeBatchJob(o: RestBatchJob): BatchJob {
  return {
    metadata:
      o["metadata"] === undefined
        ? o["metadata"]
        : o["metadata"].map((e) => MISSING_SERIALIZER(e)),
    onAllTasksComplete: o["onAllTasksComplete"],
    poolInfo: MISSING_SERIALIZER(o["poolInfo"]),
    constraints:
      o["constraints"] === undefined
        ? o["constraints"]
        : MISSING_SERIALIZER(o["constraints"]),
    maxParallelTasks: o["maxParallelTasks"],
    allowTaskPreemption: o["allowTaskPreemption"],
    priority: o["priority"],
  };
}

export function serializeDeleteCertificateError(
  o: DeleteCertificateError,
): RestDeleteCertificateError {
  return {
    values:
      o["values"] === undefined
        ? o["values"]
        : o["values"].map((e) => MISSING_SERIALIZER(e)),
    message: o["message"],
    code: o["code"],
  };
}

export function deserializeDeleteCertificateError(
  o: RestDeleteCertificateError,
): DeleteCertificateError {
  return {
    values:
      o["values"] === undefined
        ? o["values"]
        : o["values"].map((e: RestNameValuePair) => MISSING_SERIALIZER(e)),
    message: o["message"],
    code: o["code"],
  };
}

export function serializeBatchCertificate(
  o: BatchCertificate,
): RestBatchCertificate {
  return {
    password: o["password"],
    certificateFormat: o["certificateFormat"],
    data: uint8ArrayToString(o["data"], "base64"),
    thumbprintAlgorithm: o["thumbprintAlgorithm"],
    thumbprint: o["thumbprint"],
  };
}

export function deserializeBatchCertificate(
  o: RestBatchCertificate,
): BatchCertificate {
  return {
    password: o["password"],
    certificateFormat: o["certificateFormat"],
    data:
      typeof o["data"] === "string"
        ? stringToUint8Array(o["data"], "base64")
        : o["data"],
    thumbprintAlgorithm: o["thumbprintAlgorithm"],
    thumbprint: o["thumbprint"],
  };
}

export function serializeBatchJobScheduleCreateOptions(
  o: BatchJobScheduleCreateOptions,
): RestBatchJobScheduleCreateOptions {
  return {
    metadata:
      o["metadata"] === undefined
        ? o["metadata"]
        : o["metadata"].map((e) => MISSING_SERIALIZER(e)),
    jobSpecification: MISSING_SERIALIZER(o["jobSpecification"]),
    schedule: MISSING_SERIALIZER(o["schedule"]),
    displayName: o["displayName"],
    id: o["id"],
  };
}

export function serializeBatchJobScheduleUpdateOptions(
  o: BatchJobScheduleUpdateOptions,
): RestBatchJobScheduleUpdateOptions {
  return {
    metadata:
      o["metadata"] === undefined
        ? o["metadata"]
        : o["metadata"].map((e) => MISSING_SERIALIZER(e)),
    jobSpecification:
      o["jobSpecification"] === undefined
        ? o["jobSpecification"]
        : MISSING_SERIALIZER(o["jobSpecification"]),
    schedule:
      o["schedule"] === undefined
        ? o["schedule"]
        : MISSING_SERIALIZER(o["schedule"]),
  };
}

export function serializeJobScheduleStatistics(
  o: JobScheduleStatistics,
): RestJobScheduleStatistics {
  return {
    waitTime: FIXME,
    numTaskRetries: o["numTaskRetries"],
    numFailedTasks: o["numFailedTasks"],
    numSucceededTasks: o["numSucceededTasks"],
    writeIOGiB: o["writeIOGiB"],
    readIOGiB: o["readIOGiB"],
    writeIOps: o["writeIOps"],
    readIOps: o["readIOps"],
    wallClockTime: FIXME,
    kernelCPUTime: FIXME,
    userCPUTime: FIXME,
    lastUpdateTime: o["lastUpdateTime"].toISOString(),
    startTime: o["startTime"].toISOString(),
    url: o["url"],
  };
}

export function deserializeJobScheduleStatistics(
  o: RestJobScheduleStatistics,
): JobScheduleStatistics {
  return {
    waitTime: FIXME,
    numTaskRetries: o["numTaskRetries"],
    numFailedTasks: o["numFailedTasks"],
    numSucceededTasks: o["numSucceededTasks"],
    writeIOGiB: o["writeIOGiB"],
    readIOGiB: o["readIOGiB"],
    writeIOps: o["writeIOps"],
    readIOps: o["readIOps"],
    wallClockTime: FIXME,
    kernelCPUTime: FIXME,
    userCPUTime: FIXME,
    lastUpdateTime: new Date(o["lastUpdateTime"]),
    startTime: new Date(o["startTime"]),
    url: o["url"],
  };
}

export function serializeRecentJob(o: RecentJob): RestRecentJob {
  return {
    url: o["url"],
    id: o["id"],
  };
}

export function deserializeRecentJob(o: RestRecentJob): RecentJob {
  return {
    url: o["url"],
    id: o["id"],
  };
}

export function serializeJobScheduleExecutionInformation(
  o: JobScheduleExecutionInformation,
): RestJobScheduleExecutionInformation {
  return {
    endTime:
      o["endTime"] === undefined ? o["endTime"] : o["endTime"].toISOString(),
    recentJob:
      o["recentJob"] === undefined
        ? o["recentJob"]
        : MISSING_SERIALIZER(o["recentJob"]),
    nextRunTime:
      o["nextRunTime"] === undefined
        ? o["nextRunTime"]
        : o["nextRunTime"].toISOString(),
  };
}

export function deserializeJobScheduleExecutionInformation(
  o: RestJobScheduleExecutionInformation,
): JobScheduleExecutionInformation {
  return {
    endTime: o["endTime"] === undefined ? o["endTime"] : new Date(o["endTime"]),
    recentJob:
      o["recentJob"] === undefined
        ? o["recentJob"]
        : MISSING_SERIALIZER(o["recentJob"]),
    nextRunTime:
      o["nextRunTime"] === undefined
        ? o["nextRunTime"]
        : new Date(o["nextRunTime"]),
  };
}

export function serializeAzureFileShareConfiguration(
  o: AzureFileShareConfiguration,
): RestAzureFileShareConfiguration {
  return {
    mountOptions: o["mountOptions"],
    relativeMountPath: o["relativeMountPath"],
    accountKey: o["accountKey"],
    azureFileUrl: o["azureFileUrl"],
    accountName: o["accountName"],
  };
}

export function deserializeAzureFileShareConfiguration(
  o: RestAzureFileShareConfiguration,
): AzureFileShareConfiguration {
  return {
    mountOptions: o["mountOptions"],
    relativeMountPath: o["relativeMountPath"],
    accountKey: o["accountKey"],
    azureFileUrl: o["azureFileUrl"],
    accountName: o["accountName"],
  };
}

export function serializeCifsMountConfiguration(
  o: CifsMountConfiguration,
): RestCifsMountConfiguration {
  return {
    password: o["password"],
    mountOptions: o["mountOptions"],
    relativeMountPath: o["relativeMountPath"],
    source: o["source"],
    username: o["username"],
  };
}

export function deserializeCifsMountConfiguration(
  o: RestCifsMountConfiguration,
): CifsMountConfiguration {
  return {
    password: o["password"],
    mountOptions: o["mountOptions"],
    relativeMountPath: o["relativeMountPath"],
    source: o["source"],
    username: o["username"],
  };
}

export function serializeNfsMountConfiguration(
  o: NfsMountConfiguration,
): RestNfsMountConfiguration {
  return {
    mountOptions: o["mountOptions"],
    relativeMountPath: o["relativeMountPath"],
    source: o["source"],
  };
}

export function deserializeNfsMountConfiguration(
  o: RestNfsMountConfiguration,
): NfsMountConfiguration {
  return {
    mountOptions: o["mountOptions"],
    relativeMountPath: o["relativeMountPath"],
    source: o["source"],
  };
}

export function serializeAzureBlobFileSystemConfiguration(
  o: AzureBlobFileSystemConfiguration,
): RestAzureBlobFileSystemConfiguration {
  return {
    identityReference:
      o["identityReference"] === undefined
        ? o["identityReference"]
        : MISSING_SERIALIZER(o["identityReference"]),
    relativeMountPath: o["relativeMountPath"],
    blobfuseOptions: o["blobfuseOptions"],
    sasKey: o["sasKey"],
    accountKey: o["accountKey"],
    containerName: o["containerName"],
    accountName: o["accountName"],
  };
}

export function deserializeAzureBlobFileSystemConfiguration(
  o: RestAzureBlobFileSystemConfiguration,
): AzureBlobFileSystemConfiguration {
  return {
    identityReference:
      o["identityReference"] === undefined
        ? o["identityReference"]
        : MISSING_SERIALIZER(o["identityReference"]),
    relativeMountPath: o["relativeMountPath"],
    blobfuseOptions: o["blobfuseOptions"],
    sasKey: o["sasKey"],
    accountKey: o["accountKey"],
    containerName: o["containerName"],
    accountName: o["accountName"],
  };
}

export function serializeMountConfiguration(
  o: MountConfiguration,
): RestMountConfiguration {
  return {
    azureFileShareConfiguration:
      o["azureFileShareConfiguration"] === undefined
        ? o["azureFileShareConfiguration"]
        : MISSING_SERIALIZER(o["azureFileShareConfiguration"]),
    cifsMountConfiguration:
      o["cifsMountConfiguration"] === undefined
        ? o["cifsMountConfiguration"]
        : MISSING_SERIALIZER(o["cifsMountConfiguration"]),
    nfsMountConfiguration:
      o["nfsMountConfiguration"] === undefined
        ? o["nfsMountConfiguration"]
        : MISSING_SERIALIZER(o["nfsMountConfiguration"]),
    azureBlobFileSystemConfiguration:
      o["azureBlobFileSystemConfiguration"] === undefined
        ? o["azureBlobFileSystemConfiguration"]
        : MISSING_SERIALIZER(o["azureBlobFileSystemConfiguration"]),
  };
}

export function deserializeMountConfiguration(
  o: RestMountConfiguration,
): MountConfiguration {
  return {
    azureFileShareConfiguration:
      o["azureFileShareConfiguration"] === undefined
        ? o["azureFileShareConfiguration"]
        : MISSING_SERIALIZER(o["azureFileShareConfiguration"]),
    cifsMountConfiguration:
      o["cifsMountConfiguration"] === undefined
        ? o["cifsMountConfiguration"]
        : MISSING_SERIALIZER(o["cifsMountConfiguration"]),
    nfsMountConfiguration:
      o["nfsMountConfiguration"] === undefined
        ? o["nfsMountConfiguration"]
        : MISSING_SERIALIZER(o["nfsMountConfiguration"]),
    azureBlobFileSystemConfiguration:
      o["azureBlobFileSystemConfiguration"] === undefined
        ? o["azureBlobFileSystemConfiguration"]
        : MISSING_SERIALIZER(o["azureBlobFileSystemConfiguration"]),
  };
}

export function serializeMetadataItem(o: MetadataItem): RestMetadataItem {
  return {
    value: o["value"],
    name: o["name"],
  };
}

export function deserializeMetadataItem(o: RestMetadataItem): MetadataItem {
  return {
    value: o["value"],
    name: o["name"],
  };
}

export function serializeWindowsUserConfiguration(
  o: WindowsUserConfiguration,
): RestWindowsUserConfiguration {
  return {
    loginMode: o["loginMode"],
  };
}

export function deserializeWindowsUserConfiguration(
  o: RestWindowsUserConfiguration,
): WindowsUserConfiguration {
  return {
    loginMode: o["loginMode"],
  };
}

export function serializeLinuxUserConfiguration(
  o: LinuxUserConfiguration,
): RestLinuxUserConfiguration {
  return {
    sshPrivateKey: o["sshPrivateKey"],
    gid: o["gid"],
    uid: o["uid"],
  };
}

export function deserializeLinuxUserConfiguration(
  o: RestLinuxUserConfiguration,
): LinuxUserConfiguration {
  return {
    sshPrivateKey: o["sshPrivateKey"],
    gid: o["gid"],
    uid: o["uid"],
  };
}

export function serializeUserAccount(o: UserAccount): RestUserAccount {
  return {
    windowsUserConfiguration:
      o["windowsUserConfiguration"] === undefined
        ? o["windowsUserConfiguration"]
        : MISSING_SERIALIZER(o["windowsUserConfiguration"]),
    linuxUserConfiguration:
      o["linuxUserConfiguration"] === undefined
        ? o["linuxUserConfiguration"]
        : MISSING_SERIALIZER(o["linuxUserConfiguration"]),
    elevationLevel: o["elevationLevel"],
    password: o["password"],
    name: o["name"],
  };
}

export function deserializeUserAccount(o: RestUserAccount): UserAccount {
  return {
    windowsUserConfiguration:
      o["windowsUserConfiguration"] === undefined
        ? o["windowsUserConfiguration"]
        : MISSING_SERIALIZER(o["windowsUserConfiguration"]),
    linuxUserConfiguration:
      o["linuxUserConfiguration"] === undefined
        ? o["linuxUserConfiguration"]
        : MISSING_SERIALIZER(o["linuxUserConfiguration"]),
    elevationLevel: o["elevationLevel"],
    password: o["password"],
    name: o["name"],
  };
}

export function serializePublicIpAddressConfiguration(
  o: PublicIpAddressConfiguration,
): RestPublicIpAddressConfiguration {
  return {
    ipAddressIds: o["ipAddressIds"],
    provision: o["ipAddressProvisioningType"],
  };
}

export function deserializePublicIpAddressConfiguration(
  o: RestPublicIpAddressConfiguration,
): PublicIpAddressConfiguration {
  return {
    ipAddressIds: o["ipAddressIds"],
    ipAddressProvisioningType: o["provision"],
  };
}

export function serializeNetworkSecurityGroupRule(
  o: NetworkSecurityGroupRule,
): RestNetworkSecurityGroupRule {
  return {
    sourcePortRanges: o["sourcePortRanges"],
    sourceAddressPrefix: o["sourceAddressPrefix"],
    access: o["access"],
    priority: o["priority"],
  };
}

export function deserializeNetworkSecurityGroupRule(
  o: RestNetworkSecurityGroupRule,
): NetworkSecurityGroupRule {
  return {
    sourcePortRanges: o["sourcePortRanges"],
    sourceAddressPrefix: o["sourceAddressPrefix"],
    access: o["access"],
    priority: o["priority"],
  };
}

export function serializeInboundNATPool(o: InboundNATPool): RestInboundNATPool {
  return {
    networkSecurityGroupRules:
      o["networkSecurityGroupRules"] === undefined
        ? o["networkSecurityGroupRules"]
        : o["networkSecurityGroupRules"].map((e) => MISSING_SERIALIZER(e)),
    frontendPortRangeEnd: o["frontendPortRangeEnd"],
    frontendPortRangeStart: o["frontendPortRangeStart"],
    backendPort: o["backendPort"],
    protocol: o["protocol"],
    name: o["name"],
  };
}

export function deserializeInboundNATPool(
  o: RestInboundNATPool,
): InboundNATPool {
  return {
    networkSecurityGroupRules:
      o["networkSecurityGroupRules"] === undefined
        ? o["networkSecurityGroupRules"]
        : o["networkSecurityGroupRules"].map((e) => MISSING_SERIALIZER(e)),
    frontendPortRangeEnd: o["frontendPortRangeEnd"],
    frontendPortRangeStart: o["frontendPortRangeStart"],
    backendPort: o["backendPort"],
    protocol: o["protocol"],
    name: o["name"],
  };
}

export function serializePoolEndpointConfiguration(
  o: PoolEndpointConfiguration,
): RestPoolEndpointConfiguration {
  return {
    inboundNATPools: o["inboundNatPools"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function deserializePoolEndpointConfiguration(
  o: RestPoolEndpointConfiguration,
): PoolEndpointConfiguration {
  return {
    inboundNatPools: o["inboundNATPools"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function serializeNetworkConfiguration(
  o: NetworkConfiguration,
): RestNetworkConfiguration {
  return {
    enableAcceleratedNetworking: o["enableAcceleratedNetworking"],
    publicIPAddressConfiguration:
      o["publicIpAddressConfiguration"] === undefined
        ? o["publicIpAddressConfiguration"]
        : MISSING_SERIALIZER(o["publicIpAddressConfiguration"]),
    endpointConfiguration:
      o["endpointConfiguration"] === undefined
        ? o["endpointConfiguration"]
        : MISSING_SERIALIZER(o["endpointConfiguration"]),
    dynamicVNetAssignmentScope: o["dynamicVNetAssignmentScope"],
    subnetId: o["subnetId"],
  };
}

export function deserializeNetworkConfiguration(
  o: RestNetworkConfiguration,
): NetworkConfiguration {
  return {
    enableAcceleratedNetworking: o["enableAcceleratedNetworking"],
    publicIpAddressConfiguration:
      o["publicIPAddressConfiguration"] === undefined
        ? o["publicIPAddressConfiguration"]
        : MISSING_SERIALIZER(o["publicIPAddressConfiguration"]),
    endpointConfiguration:
      o["endpointConfiguration"] === undefined
        ? o["endpointConfiguration"]
        : MISSING_SERIALIZER(o["endpointConfiguration"]),
    dynamicVNetAssignmentScope: o["dynamicVNetAssignmentScope"],
    subnetId: o["subnetId"],
  };
}

export function serializeTaskSchedulingPolicy(
  o: TaskSchedulingPolicy,
): RestTaskSchedulingPolicy {
  return {
    nodeFillType: o["nodeFillType"],
  };
}

export function deserializeTaskSchedulingPolicy(
  o: RestTaskSchedulingPolicy,
): TaskSchedulingPolicy {
  return {
    nodeFillType: o["nodeFillType"],
  };
}

export function serializeDiffDiskSettings(
  o: DiffDiskSettings,
): RestDiffDiskSettings {
  return {
    placement: o["placement"],
  };
}

export function deserializeDiffDiskSettings(
  o: RestDiffDiskSettings,
): DiffDiskSettings {
  return {
    placement: o["placement"],
  };
}

export function serializeOSDisk(o: OSDisk): RestOSDisk {
  return {
    ephemeralOSDiskSettings:
      o["ephemeralOSDiskSettings"] === undefined
        ? o["ephemeralOSDiskSettings"]
        : MISSING_SERIALIZER(o["ephemeralOSDiskSettings"]),
  };
}

export function deserializeOSDisk(o: RestOSDisk): OSDisk {
  return {
    ephemeralOSDiskSettings:
      o["ephemeralOSDiskSettings"] === undefined
        ? o["ephemeralOSDiskSettings"]
        : MISSING_SERIALIZER(o["ephemeralOSDiskSettings"]),
  };
}

export function serializeNodePlacementConfiguration(
  o: NodePlacementConfiguration,
): RestNodePlacementConfiguration {
  return {
    policy: o["policy"],
  };
}

export function deserializeNodePlacementConfiguration(
  o: RestNodePlacementConfiguration,
): NodePlacementConfiguration {
  return {
    policy: o["policy"],
  };
}

export function serializeDiskEncryptionConfiguration(
  o: DiskEncryptionConfiguration,
): RestDiskEncryptionConfiguration {
  return {
    targets: o["targets"],
  };
}

export function deserializeDiskEncryptionConfiguration(
  o: RestDiskEncryptionConfiguration,
): DiskEncryptionConfiguration {
  return {
    targets: o["targets"],
  };
}

export function serializeContainerConfiguration(
  o: ContainerConfiguration,
): RestContainerConfiguration {
  return {
    containerRegistries:
      o["containerRegistries"] === undefined
        ? o["containerRegistries"]
        : o["containerRegistries"].map((e) => MISSING_SERIALIZER(e)),
    containerImageNames: o["containerImageNames"],
    type: o["type"],
  };
}

export function deserializeContainerConfiguration(
  o: RestContainerConfiguration,
): ContainerConfiguration {
  return {
    containerRegistries:
      o["containerRegistries"] === undefined
        ? o["containerRegistries"]
        : o["containerRegistries"].map((e: RestContainerRegistry) =>
            MISSING_SERIALIZER(e),
          ),
    containerImageNames: o["containerImageNames"],
    type: o["type"],
  };
}

export function serializeDataDisk(o: DataDisk): RestDataDisk {
  return {
    storageAccountType: o["storageAccountType"],
    diskSizeGB: o["diskSizeGb"],
    caching: o["caching"],
    lun: o["lun"],
  };
}

export function deserializeDataDisk(o: RestDataDisk): DataDisk {
  return {
    storageAccountType: o["storageAccountType"],
    diskSizeGb: o["diskSizeGB"],
    caching: o["caching"],
    lun: o["lun"],
  };
}

export function serializeWindowsConfiguration(
  o: WindowsConfiguration,
): RestWindowsConfiguration {
  return {
    enableAutomaticUpdates: o["enableAutomaticUpdates"],
  };
}

export function deserializeWindowsConfiguration(
  o: RestWindowsConfiguration,
): WindowsConfiguration {
  return {
    enableAutomaticUpdates: o["enableAutomaticUpdates"],
  };
}

export function serializeVirtualMachineConfiguration(
  o: VirtualMachineConfiguration,
): RestVirtualMachineConfiguration {
  return {
    osDisk:
      o["osDisk"] === undefined ? o["osDisk"] : MISSING_SERIALIZER(o["osDisk"]),
    extensions:
      o["extensions"] === undefined
        ? o["extensions"]
        : o["extensions"].map((e) => MISSING_SERIALIZER(e)),
    nodePlacementConfiguration:
      o["nodePlacementConfiguration"] === undefined
        ? o["nodePlacementConfiguration"]
        : MISSING_SERIALIZER(o["nodePlacementConfiguration"]),
    diskEncryptionConfiguration:
      o["diskEncryptionConfiguration"] === undefined
        ? o["diskEncryptionConfiguration"]
        : MISSING_SERIALIZER(o["diskEncryptionConfiguration"]),
    containerConfiguration:
      o["containerConfiguration"] === undefined
        ? o["containerConfiguration"]
        : MISSING_SERIALIZER(o["containerConfiguration"]),
    licenseType: o["licenseType"],
    dataDisks:
      o["dataDisks"] === undefined
        ? o["dataDisks"]
        : o["dataDisks"].map((e) => MISSING_SERIALIZER(e)),
    windowsConfiguration:
      o["windowsConfiguration"] === undefined
        ? o["windowsConfiguration"]
        : MISSING_SERIALIZER(o["windowsConfiguration"]),
    nodeAgentSKUId: o["nodeAgentSkuId"],
    imageReference: MISSING_SERIALIZER(o["imageReference"]),
  };
}

export function deserializeVirtualMachineConfiguration(
  o: RestVirtualMachineConfiguration,
): VirtualMachineConfiguration {
  return {
    osDisk:
      o["osDisk"] === undefined ? o["osDisk"] : MISSING_SERIALIZER(o["osDisk"]),
    extensions:
      o["extensions"] === undefined
        ? o["extensions"]
        : o["extensions"].map((e: RestVMExtension) => MISSING_SERIALIZER(e)),
    nodePlacementConfiguration:
      o["nodePlacementConfiguration"] === undefined
        ? o["nodePlacementConfiguration"]
        : MISSING_SERIALIZER(o["nodePlacementConfiguration"]),
    diskEncryptionConfiguration:
      o["diskEncryptionConfiguration"] === undefined
        ? o["diskEncryptionConfiguration"]
        : MISSING_SERIALIZER(o["diskEncryptionConfiguration"]),
    containerConfiguration:
      o["containerConfiguration"] === undefined
        ? o["containerConfiguration"]
        : MISSING_SERIALIZER(o["containerConfiguration"]),
    licenseType: o["licenseType"],
    dataDisks:
      o["dataDisks"] === undefined
        ? o["dataDisks"]
        : o["dataDisks"].map((e) => MISSING_SERIALIZER(e)),
    windowsConfiguration:
      o["windowsConfiguration"] === undefined
        ? o["windowsConfiguration"]
        : MISSING_SERIALIZER(o["windowsConfiguration"]),
    nodeAgentSkuId: o["nodeAgentSKUId"],
    imageReference: MISSING_SERIALIZER(o["imageReference"]),
  };
}

export function serializeCloudServiceConfiguration(
  o: CloudServiceConfiguration,
): RestCloudServiceConfiguration {
  return {
    osVersion: o["osVersion"],
    osFamily: o["osFamily"],
  };
}

export function deserializeCloudServiceConfiguration(
  o: RestCloudServiceConfiguration,
): CloudServiceConfiguration {
  return {
    osVersion: o["osVersion"],
    osFamily: o["osFamily"],
  };
}

export function serializePoolSpecification(
  o: PoolSpecification,
): RestPoolSpecification {
  return {
    targetNodeCommunicationMode: o["targetNodeCommunicationMode"],
    mountConfiguration:
      o["mountConfiguration"] === undefined
        ? o["mountConfiguration"]
        : o["mountConfiguration"].map((e) => MISSING_SERIALIZER(e)),
    metadata:
      o["metadata"] === undefined
        ? o["metadata"]
        : o["metadata"].map((e) => MISSING_SERIALIZER(e)),
    userAccounts:
      o["userAccounts"] === undefined
        ? o["userAccounts"]
        : o["userAccounts"].map((e) => MISSING_SERIALIZER(e)),
    applicationLicenses: o["applicationLicenses"],
    applicationPackageReferences:
      o["applicationPackageReferences"] === undefined
        ? o["applicationPackageReferences"]
        : o["applicationPackageReferences"].map((e) => MISSING_SERIALIZER(e)),
    certificateReferences:
      o["certificateReferences"] === undefined
        ? o["certificateReferences"]
        : o["certificateReferences"].map((e) => MISSING_SERIALIZER(e)),
    startTask:
      o["startTask"] === undefined
        ? o["startTask"]
        : MISSING_SERIALIZER(o["startTask"]),
    networkConfiguration:
      o["networkConfiguration"] === undefined
        ? o["networkConfiguration"]
        : MISSING_SERIALIZER(o["networkConfiguration"]),
    enableInterNodeCommunication: o["enableInterNodeCommunication"],
    autoScaleEvaluationInterval:
      o["autoScaleEvaluationInterval"] === undefined
        ? o["autoScaleEvaluationInterval"]
        : FIXME,
    autoScaleFormula: o["autoScaleFormula"],
    enableAutoScale: o["enableAutoScale"],
    targetLowPriorityNodes: o["targetLowPriorityNodes"],
    targetDedicatedNodes: o["targetDedicatedNodes"],
    resizeTimeout:
      o["resizeTimeout"] === undefined ? o["resizeTimeout"] : FIXME,
    taskSchedulingPolicy:
      o["taskSchedulingPolicy"] === undefined
        ? o["taskSchedulingPolicy"]
        : MISSING_SERIALIZER(o["taskSchedulingPolicy"]),
    taskSlotsPerNode: o["taskSlotsPerNode"],
    virtualMachineConfiguration:
      o["virtualMachineConfiguration"] === undefined
        ? o["virtualMachineConfiguration"]
        : MISSING_SERIALIZER(o["virtualMachineConfiguration"]),
    cloudServiceConfiguration:
      o["cloudServiceConfiguration"] === undefined
        ? o["cloudServiceConfiguration"]
        : MISSING_SERIALIZER(o["cloudServiceConfiguration"]),
    vmSize: o["vmSize"],
    displayName: o["displayName"],
  };
}

export function deserializePoolSpecification(
  o: RestPoolSpecification,
): PoolSpecification {
  return {
    targetNodeCommunicationMode: o["targetNodeCommunicationMode"],
    mountConfiguration:
      o["mountConfiguration"] === undefined
        ? o["mountConfiguration"]
        : o["mountConfiguration"].map((e) => MISSING_SERIALIZER(e)),
    metadata:
      o["metadata"] === undefined
        ? o["metadata"]
        : o["metadata"].map((e) => MISSING_SERIALIZER(e)),
    userAccounts:
      o["userAccounts"] === undefined
        ? o["userAccounts"]
        : o["userAccounts"].map((e) => MISSING_SERIALIZER(e)),
    applicationLicenses: o["applicationLicenses"],
    applicationPackageReferences:
      o["applicationPackageReferences"] === undefined
        ? o["applicationPackageReferences"]
        : o["applicationPackageReferences"].map((e) => MISSING_DESERIALIZER(e)),
    certificateReferences:
      o["certificateReferences"] === undefined
        ? o["certificateReferences"]
        : o["certificateReferences"].map((e: RestCertificateReference) =>
            MISSING_SERIALIZER(e),
          ),
    startTask:
      o["startTask"] === undefined
        ? o["startTask"]
        : MISSING_SERIALIZER(o["startTask"]),
    networkConfiguration:
      o["networkConfiguration"] === undefined
        ? o["networkConfiguration"]
        : MISSING_SERIALIZER(o["networkConfiguration"]),
    enableInterNodeCommunication: o["enableInterNodeCommunication"],
    autoScaleEvaluationInterval:
      o["autoScaleEvaluationInterval"] === undefined
        ? o["autoScaleEvaluationInterval"]
        : FIXME,
    autoScaleFormula: o["autoScaleFormula"],
    enableAutoScale: o["enableAutoScale"],
    targetLowPriorityNodes: o["targetLowPriorityNodes"],
    targetDedicatedNodes: o["targetDedicatedNodes"],
    resizeTimeout:
      o["resizeTimeout"] === undefined ? o["resizeTimeout"] : FIXME,
    taskSchedulingPolicy:
      o["taskSchedulingPolicy"] === undefined
        ? o["taskSchedulingPolicy"]
        : MISSING_SERIALIZER(o["taskSchedulingPolicy"]),
    taskSlotsPerNode: o["taskSlotsPerNode"],
    virtualMachineConfiguration:
      o["virtualMachineConfiguration"] === undefined
        ? o["virtualMachineConfiguration"]
        : MISSING_SERIALIZER(o["virtualMachineConfiguration"]),
    cloudServiceConfiguration:
      o["cloudServiceConfiguration"] === undefined
        ? o["cloudServiceConfiguration"]
        : MISSING_SERIALIZER(o["cloudServiceConfiguration"]),
    vmSize: o["vmSize"],
    displayName: o["displayName"],
  };
}

export function serializeAutoPoolSpecification(
  o: AutoPoolSpecification,
): RestAutoPoolSpecification {
  return {
    pool: o["pool"] === undefined ? o["pool"] : MISSING_SERIALIZER(o["pool"]),
    keepAlive: o["keepAlive"],
    poolLifetimeOption: o["poolLifetimeOption"],
    autoPoolIdPrefix: o["autoPoolIdPrefix"],
  };
}

export function deserializeAutoPoolSpecification(
  o: RestAutoPoolSpecification,
): AutoPoolSpecification {
  return {
    pool: o["pool"] === undefined ? o["pool"] : MISSING_SERIALIZER(o["pool"]),
    keepAlive: o["keepAlive"],
    poolLifetimeOption: o["poolLifetimeOption"],
    autoPoolIdPrefix: o["autoPoolIdPrefix"],
  };
}

export function serializePoolInformation(
  o: PoolInformation,
): RestPoolInformation {
  return {
    autoPoolSpecification:
      o["autoPoolSpecification"] === undefined
        ? o["autoPoolSpecification"]
        : MISSING_SERIALIZER(o["autoPoolSpecification"]),
    poolId: o["poolId"],
  };
}

export function deserializePoolInformation(
  o: RestPoolInformation,
): PoolInformation {
  return {
    autoPoolSpecification:
      o["autoPoolSpecification"] === undefined
        ? o["autoPoolSpecification"]
        : MISSING_SERIALIZER(o["autoPoolSpecification"]),
    poolId: o["poolId"],
  };
}

export function serializeJobReleaseTask(o: JobReleaseTask): RestJobReleaseTask {
  return {
    userIdentity:
      o["userIdentity"] === undefined
        ? o["userIdentity"]
        : MISSING_SERIALIZER(o["userIdentity"]),
    retentionTime:
      o["retentionTime"] === undefined ? o["retentionTime"] : FIXME,
    maxWallClockTime:
      o["maxWallClockTime"] === undefined ? o["maxWallClockTime"] : FIXME,
    environmentSettings:
      o["environmentSettings"] === undefined
        ? o["environmentSettings"]
        : o["environmentSettings"].map((e) => MISSING_SERIALIZER(e)),
    resourceFiles:
      o["resourceFiles"] === undefined
        ? o["resourceFiles"]
        : o["resourceFiles"].map((e) => MISSING_SERIALIZER(e)),
    containerSettings:
      o["containerSettings"] === undefined
        ? o["containerSettings"]
        : MISSING_SERIALIZER(o["containerSettings"]),
    commandLine: o["commandLine"],
    id: o["id"],
  };
}

export function deserializeJobReleaseTask(
  o: RestJobReleaseTask,
): JobReleaseTask {
  return {
    userIdentity:
      o["userIdentity"] === undefined
        ? o["userIdentity"]
        : MISSING_SERIALIZER(o["userIdentity"]),
    retentionTime:
      o["retentionTime"] === undefined ? o["retentionTime"] : FIXME,
    maxWallClockTime:
      o["maxWallClockTime"] === undefined ? o["maxWallClockTime"] : FIXME,
    environmentSettings:
      o["environmentSettings"] === undefined
        ? o["environmentSettings"]
        : o["environmentSettings"].map((e: RestEnvironmentSetting) =>
            MISSING_SERIALIZER(e),
          ),
    resourceFiles:
      o["resourceFiles"] === undefined
        ? o["resourceFiles"]
        : o["resourceFiles"].map((e: RestResourceFile) =>
            MISSING_SERIALIZER(e),
          ),
    containerSettings:
      o["containerSettings"] === undefined
        ? o["containerSettings"]
        : MISSING_SERIALIZER(o["containerSettings"]),
    commandLine: o["commandLine"],
    id: o["id"],
  };
}

export function serializeJobPreparationTask(
  o: JobPreparationTask,
): RestJobPreparationTask {
  return {
    rerunOnNodeRebootAfterSuccess: o["rerunOnNodeRebootAfterSuccess"],
    userIdentity:
      o["userIdentity"] === undefined
        ? o["userIdentity"]
        : MISSING_SERIALIZER(o["userIdentity"]),
    waitForSuccess: o["waitForSuccess"],
    constraints:
      o["constraints"] === undefined
        ? o["constraints"]
        : MISSING_SERIALIZER(o["constraints"]),
    environmentSettings:
      o["environmentSettings"] === undefined
        ? o["environmentSettings"]
        : o["environmentSettings"].map((e) => MISSING_SERIALIZER(e)),
    resourceFiles:
      o["resourceFiles"] === undefined
        ? o["resourceFiles"]
        : o["resourceFiles"].map((e) => MISSING_SERIALIZER(e)),
    containerSettings:
      o["containerSettings"] === undefined
        ? o["containerSettings"]
        : MISSING_SERIALIZER(o["containerSettings"]),
    commandLine: o["commandLine"],
    id: o["id"],
  };
}

export function deserializeJobPreparationTask(
  o: RestJobPreparationTask,
): JobPreparationTask {
  return {
    rerunOnNodeRebootAfterSuccess: o["rerunOnNodeRebootAfterSuccess"],
    userIdentity:
      o["userIdentity"] === undefined
        ? o["userIdentity"]
        : MISSING_SERIALIZER(o["userIdentity"]),
    waitForSuccess: o["waitForSuccess"],
    constraints:
      o["constraints"] === undefined
        ? o["constraints"]
        : MISSING_DESERIALIZER(o["constraints"]),
    environmentSettings:
      o["environmentSettings"] === undefined
        ? o["environmentSettings"]
        : o["environmentSettings"].map((e: RestEnvironmentSetting) =>
            MISSING_SERIALIZER(e),
          ),
    resourceFiles:
      o["resourceFiles"] === undefined
        ? o["resourceFiles"]
        : o["resourceFiles"].map((e: RestResourceFile) =>
            MISSING_SERIALIZER(e),
          ),
    containerSettings:
      o["containerSettings"] === undefined
        ? o["containerSettings"]
        : MISSING_SERIALIZER(o["containerSettings"]),
    commandLine: o["commandLine"],
    id: o["id"],
  };
}

export function serializeJobManagerTask(o: JobManagerTask): RestJobManagerTask {
  return {
    allowLowPriorityNode: o["allowLowPriorityNode"],
    authenticationTokenSettings:
      o["authenticationTokenSettings"] === undefined
        ? o["authenticationTokenSettings"]
        : MISSING_SERIALIZER(o["authenticationTokenSettings"]),
    applicationPackageReferences:
      o["applicationPackageReferences"] === undefined
        ? o["applicationPackageReferences"]
        : o["applicationPackageReferences"].map((e) => MISSING_SERIALIZER(e)),
    runExclusive: o["runExclusive"],
    userIdentity:
      o["userIdentity"] === undefined
        ? o["userIdentity"]
        : MISSING_SERIALIZER(o["userIdentity"]),
    killJobOnCompletion: o["killJobOnCompletion"],
    requiredSlots: o["requiredSlots"],
    constraints:
      o["constraints"] === undefined
        ? o["constraints"]
        : MISSING_SERIALIZER(o["constraints"]),
    environmentSettings:
      o["environmentSettings"] === undefined
        ? o["environmentSettings"]
        : o["environmentSettings"].map((e) => MISSING_SERIALIZER(e)),
    outputFiles:
      o["outputFiles"] === undefined
        ? o["outputFiles"]
        : o["outputFiles"].map((e) => MISSING_SERIALIZER(e)),
    resourceFiles:
      o["resourceFiles"] === undefined
        ? o["resourceFiles"]
        : o["resourceFiles"].map((e) => MISSING_SERIALIZER(e)),
    containerSettings:
      o["containerSettings"] === undefined
        ? o["containerSettings"]
        : MISSING_SERIALIZER(o["containerSettings"]),
    commandLine: o["commandLine"],
    displayName: o["displayName"],
    id: o["id"],
  };
}

export function deserializeJobManagerTask(
  o: RestJobManagerTask,
): JobManagerTask {
  return {
    allowLowPriorityNode: o["allowLowPriorityNode"],
    authenticationTokenSettings:
      o["authenticationTokenSettings"] === undefined
        ? o["authenticationTokenSettings"]
        : MISSING_DESERIALIZER(o["authenticationTokenSettings"]),
    applicationPackageReferences:
      o["applicationPackageReferences"] === undefined
        ? o["applicationPackageReferences"]
        : o["applicationPackageReferences"].map((e) => MISSING_DESERIALIZER(e)),
    runExclusive: o["runExclusive"],
    userIdentity:
      o["userIdentity"] === undefined
        ? o["userIdentity"]
        : MISSING_SERIALIZER(o["userIdentity"]),
    killJobOnCompletion: o["killJobOnCompletion"],
    requiredSlots: o["requiredSlots"],
    constraints:
      o["constraints"] === undefined
        ? o["constraints"]
        : MISSING_DESERIALIZER(o["constraints"]),
    environmentSettings:
      o["environmentSettings"] === undefined
        ? o["environmentSettings"]
        : o["environmentSettings"].map((e: RestEnvironmentSetting) =>
            MISSING_SERIALIZER(e),
          ),
    outputFiles:
      o["outputFiles"] === undefined
        ? o["outputFiles"]
        : o["outputFiles"].map((e) => MISSING_DESERIALIZER(e)),
    resourceFiles:
      o["resourceFiles"] === undefined
        ? o["resourceFiles"]
        : o["resourceFiles"].map((e: RestResourceFile) =>
            MISSING_SERIALIZER(e),
          ),
    containerSettings:
      o["containerSettings"] === undefined
        ? o["containerSettings"]
        : MISSING_SERIALIZER(o["containerSettings"]),
    commandLine: o["commandLine"],
    displayName: o["displayName"],
    id: o["id"],
  };
}

export function serializeJobConstraints(o: JobConstraints): RestJobConstraints {
  return {
    maxTaskRetryCount: o["maxTaskRetryCount"],
    maxWallClockTime:
      o["maxWallClockTime"] === undefined ? o["maxWallClockTime"] : FIXME,
  };
}

export function deserializeJobConstraints(
  o: RestJobConstraints,
): JobConstraints {
  return {
    maxTaskRetryCount: o["maxTaskRetryCount"],
    maxWallClockTime:
      o["maxWallClockTime"] === undefined ? o["maxWallClockTime"] : FIXME,
  };
}

export function serializeJobNetworkConfiguration(
  o: JobNetworkConfiguration,
): RestJobNetworkConfiguration {
  return {
    subnetId: o["subnetId"],
  };
}

export function deserializeJobNetworkConfiguration(
  o: RestJobNetworkConfiguration,
): JobNetworkConfiguration {
  return {
    subnetId: o["subnetId"],
  };
}

export function serializeJobSpecification(
  o: JobSpecification,
): RestJobSpecification {
  return {
    metadata:
      o["metadata"] === undefined
        ? o["metadata"]
        : o["metadata"].map((e) => MISSING_SERIALIZER(e)),
    poolInfo: MISSING_SERIALIZER(o["poolInfo"]),
    commonEnvironmentSettings:
      o["commonEnvironmentSettings"] === undefined
        ? o["commonEnvironmentSettings"]
        : o["commonEnvironmentSettings"].map((e) => MISSING_SERIALIZER(e)),
    jobReleaseTask:
      o["jobReleaseTask"] === undefined
        ? o["jobReleaseTask"]
        : MISSING_SERIALIZER(o["jobReleaseTask"]),
    jobPreparationTask:
      o["jobPreparationTask"] === undefined
        ? o["jobPreparationTask"]
        : MISSING_SERIALIZER(o["jobPreparationTask"]),
    jobManagerTask:
      o["jobManagerTask"] === undefined
        ? o["jobManagerTask"]
        : MISSING_SERIALIZER(o["jobManagerTask"]),
    constraints:
      o["constraints"] === undefined
        ? o["constraints"]
        : MISSING_SERIALIZER(o["constraints"]),
    networkConfiguration:
      o["networkConfiguration"] === undefined
        ? o["networkConfiguration"]
        : MISSING_SERIALIZER(o["networkConfiguration"]),
    onTaskFailure: o["onTaskFailure"],
    onAllTasksComplete: o["onAllTasksComplete"],
    usesTaskDependencies: o["usesTaskDependencies"],
    displayName: o["displayName"],
    maxParallelTasks: o["maxParallelTasks"],
    allowTaskPreemption: o["allowTaskPreemption"],
    priority: o["priority"],
  };
}

export function deserializeJobSpecification(
  o: RestJobSpecification,
): JobSpecification {
  return {
    metadata:
      o["metadata"] === undefined
        ? o["metadata"]
        : o["metadata"].map((e) => MISSING_SERIALIZER(e)),
    poolInfo: MISSING_SERIALIZER(o["poolInfo"]),
    commonEnvironmentSettings:
      o["commonEnvironmentSettings"] === undefined
        ? o["commonEnvironmentSettings"]
        : o["commonEnvironmentSettings"].map((e: RestEnvironmentSetting) =>
            MISSING_SERIALIZER(e),
          ),
    jobReleaseTask:
      o["jobReleaseTask"] === undefined
        ? o["jobReleaseTask"]
        : MISSING_SERIALIZER(o["jobReleaseTask"]),
    jobPreparationTask:
      o["jobPreparationTask"] === undefined
        ? o["jobPreparationTask"]
        : MISSING_SERIALIZER(o["jobPreparationTask"]),
    jobManagerTask:
      o["jobManagerTask"] === undefined
        ? o["jobManagerTask"]
        : MISSING_SERIALIZER(o["jobManagerTask"]),
    constraints:
      o["constraints"] === undefined
        ? o["constraints"]
        : MISSING_SERIALIZER(o["constraints"]),
    networkConfiguration:
      o["networkConfiguration"] === undefined
        ? o["networkConfiguration"]
        : MISSING_SERIALIZER(o["networkConfiguration"]),
    onTaskFailure: o["onTaskFailure"],
    onAllTasksComplete: o["onAllTasksComplete"],
    usesTaskDependencies: o["usesTaskDependencies"],
    displayName: o["displayName"],
    maxParallelTasks: o["maxParallelTasks"],
    allowTaskPreemption: o["allowTaskPreemption"],
    priority: o["priority"],
  };
}

export function serializeSchedule(o: Schedule): RestSchedule {
  return {
    recurrenceInterval:
      o["recurrenceInterval"] === undefined ? o["recurrenceInterval"] : FIXME,
    startWindow: o["startWindow"] === undefined ? o["startWindow"] : FIXME,
    doNotRunAfter:
      o["doNotRunAfter"] === undefined
        ? o["doNotRunAfter"]
        : o["doNotRunAfter"].toISOString(),
    doNotRunUntil:
      o["doNotRunUntil"] === undefined
        ? o["doNotRunUntil"]
        : o["doNotRunUntil"].toISOString(),
  };
}

export function deserializeSchedule(o: RestSchedule): Schedule {
  return {
    recurrenceInterval:
      o["recurrenceInterval"] === undefined ? o["recurrenceInterval"] : FIXME,
    startWindow: o["startWindow"] === undefined ? o["startWindow"] : FIXME,
    doNotRunAfter:
      o["doNotRunAfter"] === undefined
        ? o["doNotRunAfter"]
        : new Date(o["doNotRunAfter"]),
    doNotRunUntil:
      o["doNotRunUntil"] === undefined
        ? o["doNotRunUntil"]
        : new Date(o["doNotRunUntil"]),
  };
}

export function serializeBatchJobSchedule(
  o: BatchJobSchedule,
): RestBatchJobSchedule {
  return {
    metadata:
      o["metadata"] === undefined
        ? o["metadata"]
        : o["metadata"].map((e) => MISSING_SERIALIZER(e)),
    jobSpecification: MISSING_SERIALIZER(o["jobSpecification"]),
    schedule: MISSING_SERIALIZER(o["schedule"]),
  };
}

export function deserializeBatchJobSchedule(
  o: RestBatchJobSchedule,
): BatchJobSchedule {
  return {
    metadata:
      o["metadata"] === undefined
        ? o["metadata"]
        : o["metadata"].map((e) => MISSING_SERIALIZER(e)),
    jobSpecification: MISSING_SERIALIZER(o["jobSpecification"]),
    schedule: MISSING_SERIALIZER(o["schedule"]),
  };
}

export function serializeBatchTaskCollection(
  o: BatchTaskCollection,
): RestBatchTaskCollection {
  return {
    value: o["value"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function serializeAuthenticationTokenSettings(
  o: AuthenticationTokenSettings,
): RestAuthenticationTokenSettings {
  return {
    access: o["access"],
  };
}

export function serializeApplicationPackageReference(
  o: ApplicationPackageReference,
): RestApplicationPackageReference {
  return {
    version: o["version"],
    applicationId: o["applicationId"],
  };
}

export function serializeTaskIdRange(o: TaskIdRange): RestTaskIdRange {
  return {
    end: o["end"],
    start: o["start"],
  };
}

export function serializeTaskDependencies(
  o: TaskDependencies,
): RestTaskDependencies {
  return {
    taskIdRanges:
      o["taskIdRanges"] === undefined
        ? o["taskIdRanges"]
        : o["taskIdRanges"].map((e) => MISSING_SERIALIZER(e)),
    taskIds: o["taskIds"],
  };
}

export function serializeMultiInstanceSettings(
  o: MultiInstanceSettings,
): RestMultiInstanceSettings {
  return {
    commonResourceFiles:
      o["commonResourceFiles"] === undefined
        ? o["commonResourceFiles"]
        : o["commonResourceFiles"].map((e) => MISSING_SERIALIZER(e)),
    coordinationCommandLine: o["coordinationCommandLine"],
    numberOfInstances: o["numberOfInstances"],
  };
}

export function serializeTaskConstraints(
  o: TaskConstraints,
): RestTaskConstraints {
  return {
    maxTaskRetryCount: o["maxTaskRetryCount"],
    retentionTime:
      o["retentionTime"] === undefined ? o["retentionTime"] : FIXME,
    maxWallClockTime:
      o["maxWallClockTime"] === undefined ? o["maxWallClockTime"] : FIXME,
  };
}

export function serializeAffinityInformation(
  o: AffinityInformation,
): RestAffinityInformation {
  return {
    affinityId: o["affinityId"],
  };
}

export function serializeOutputFileUploadOptions(
  o: OutputFileUploadOptions,
): RestOutputFileUploadOptions {
  return {
    uploadCondition: o["uploadCondition"],
  };
}

export function serializeHttpHeader(o: HttpHeader): RestHttpHeader {
  return {
    value: o["value"],
    name: o["name"],
  };
}

export function serializeOutputFileBlobContainerDestination(
  o: OutputFileBlobContainerDestination,
): RestOutputFileBlobContainerDestination {
  return {
    uploadHeaders:
      o["uploadHeaders"] === undefined
        ? o["uploadHeaders"]
        : o["uploadHeaders"].map((e) => MISSING_SERIALIZER(e)),
    identityReference:
      o["identityReference"] === undefined
        ? o["identityReference"]
        : MISSING_SERIALIZER(o["identityReference"]),
    containerUrl: o["containerUrl"],
    path: o["path"],
  };
}

export function serializeOutputFileDestination(
  o: OutputFileDestination,
): RestOutputFileDestination {
  return {
    container:
      o["container"] === undefined
        ? o["container"]
        : MISSING_SERIALIZER(o["container"]),
  };
}

export function serializeOutputFile(o: OutputFile): RestOutputFile {
  return {
    uploadOptions: MISSING_SERIALIZER(o["uploadOptions"]),
    destination: MISSING_SERIALIZER(o["destination"]),
    filePattern: o["filePattern"],
  };
}

export function serializeExitCodeRangeMapping(
  o: ExitCodeRangeMapping,
): RestExitCodeRangeMapping {
  return {
    exitOptions: MISSING_SERIALIZER(o["exitOptions"]),
    end: o["end"],
    start: o["start"],
  };
}

export function serializeExitOptions(o: ExitOptions): RestExitOptions {
  return {
    dependencyAction: o["dependencyAction"],
    jobAction: o["jobAction"],
  };
}

export function serializeExitCodeMapping(
  o: ExitCodeMapping,
): RestExitCodeMapping {
  return {
    exitOptions: MISSING_SERIALIZER(o["exitOptions"]),
    code: o["code"],
  };
}

export function serializeExitConditions(o: ExitConditions): RestExitConditions {
  return {
    default:
      o["default"] === undefined
        ? o["default"]
        : MISSING_SERIALIZER(o["default"]),
    fileUploadError:
      o["fileUploadError"] === undefined
        ? o["fileUploadError"]
        : MISSING_SERIALIZER(o["fileUploadError"]),
    preProcessingError:
      o["preProcessingError"] === undefined
        ? o["preProcessingError"]
        : MISSING_SERIALIZER(o["preProcessingError"]),
    exitCodeRanges:
      o["exitCodeRanges"] === undefined
        ? o["exitCodeRanges"]
        : o["exitCodeRanges"].map((e) => MISSING_SERIALIZER(e)),
    exitCodes:
      o["exitCodes"] === undefined
        ? o["exitCodes"]
        : o["exitCodes"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function serializeBatchTaskCreateOptions(
  o: BatchTaskCreateOptions,
): RestBatchTaskCreateOptions {
  return {
    authenticationTokenSettings:
      o["authenticationTokenSettings"] === undefined
        ? o["authenticationTokenSettings"]
        : MISSING_SERIALIZER(o["authenticationTokenSettings"]),
    applicationPackageReferences:
      o["applicationPackageReferences"] === undefined
        ? o["applicationPackageReferences"]
        : o["applicationPackageReferences"].map((e) => MISSING_SERIALIZER(e)),
    dependsOn:
      o["dependsOn"] === undefined
        ? o["dependsOn"]
        : MISSING_SERIALIZER(o["dependsOn"]),
    multiInstanceSettings:
      o["multiInstanceSettings"] === undefined
        ? o["multiInstanceSettings"]
        : MISSING_SERIALIZER(o["multiInstanceSettings"]),
    userIdentity:
      o["userIdentity"] === undefined
        ? o["userIdentity"]
        : MISSING_SERIALIZER(o["userIdentity"]),
    requiredSlots: o["requiredSlots"],
    constraints:
      o["constraints"] === undefined
        ? o["constraints"]
        : MISSING_SERIALIZER(o["constraints"]),
    affinityInfo:
      o["affinityInfo"] === undefined
        ? o["affinityInfo"]
        : MISSING_SERIALIZER(o["affinityInfo"]),
    environmentSettings:
      o["environmentSettings"] === undefined
        ? o["environmentSettings"]
        : o["environmentSettings"].map((e) => MISSING_SERIALIZER(e)),
    outputFiles:
      o["outputFiles"] === undefined
        ? o["outputFiles"]
        : o["outputFiles"].map((e) => MISSING_SERIALIZER(e)),
    resourceFiles:
      o["resourceFiles"] === undefined
        ? o["resourceFiles"]
        : o["resourceFiles"].map((e) => MISSING_SERIALIZER(e)),
    containerSettings:
      o["containerSettings"] === undefined
        ? o["containerSettings"]
        : MISSING_SERIALIZER(o["containerSettings"]),
    commandLine: o["commandLine"],
    exitConditions:
      o["exitConditions"] === undefined
        ? o["exitConditions"]
        : MISSING_SERIALIZER(o["exitConditions"]),
    displayName: o["displayName"],
    id: o["id"],
  };
}

export function serializeUploadBatchServiceLogsOptions(
  o: UploadBatchServiceLogsOptions,
): RestUploadBatchServiceLogsOptions {
  return {
    identityReference:
      o["identityReference"] === undefined
        ? o["identityReference"]
        : MISSING_SERIALIZER(o["identityReference"]),
    endTime:
      o["endTime"] === undefined ? o["endTime"] : o["endTime"].toISOString(),
    startTime: o["startTime"].toISOString(),
    containerUrl: o["containerUrl"],
  };
}

export function serializeNodeDisableSchedulingOptions(
  o: NodeDisableSchedulingOptions,
): RestNodeDisableSchedulingOptions {
  return {
    nodeDisableSchedulingOption: o["nodeDisableSchedulingOption"],
  };
}

export function serializeNodeReimageOptions(
  o: NodeReimageOptions,
): RestNodeReimageOptions {
  return {
    nodeReimageOption: o["nodeReimageOption"],
  };
}

export function serializeNodeRebootOptions(
  o: NodeRebootOptions,
): RestNodeRebootOptions {
  return {
    nodeRebootOption: o["nodeRebootOption"],
  };
}

export function serializeBatchNodeUserUpdateOptions(
  o: BatchNodeUserUpdateOptions,
): RestBatchNodeUserUpdateOptions {
  return {
    sshPublicKey: o["sshPublicKey"],
    expiryTime:
      o["expiryTime"] === undefined
        ? o["expiryTime"]
        : o["expiryTime"].toISOString(),
    password: o["password"],
  };
}

export function serializeBatchNodeUserCreateOptions(
  o: BatchNodeUserCreateOptions,
): RestBatchNodeUserCreateOptions {
  return {
    sshPublicKey: o["sshPublicKey"],
    password: o["password"],
    expiryTime:
      o["expiryTime"] === undefined
        ? o["expiryTime"]
        : o["expiryTime"].toISOString(),
    isAdmin: o["isAdmin"],
    name: o["name"],
  };
}

export function deserializeBatchApplication(
  o: RestBatchApplication,
): BatchApplication {
  return {
    versions: o["versions"],
    displayName: o["displayName"],
    id: o["id"],
  };
}

export function deserializeApplicationListResult(
  o: RestApplicationListResult,
): ApplicationListResult {
  return {
    "odata.nextLink": o["odata.nextLink"],
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map((e: RestBatchApplication) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeUserAssignedIdentity(
  o: RestUserAssignedIdentity,
): UserAssignedIdentity {
  return {
    resourceId: o["resourceId"],
  };
}

export function deserializeBatchPoolIdentity(
  o: RestBatchPoolIdentity,
): BatchPoolIdentity {
  return {
    userAssignedIdentities:
      o["userAssignedIdentities"] === undefined
        ? o["userAssignedIdentities"]
        : o["userAssignedIdentities"].map((e: RestUserAssignedIdentity) =>
            MISSING_SERIALIZER(e),
          ),
    type: o["type"],
  };
}

export function deserializeResourceStatistics(
  o: RestResourceStatistics,
): ResourceStatistics {
  return {
    networkWriteGiB: o["networkWriteGiB"],
    networkReadGiB: o["networkReadGiB"],
    diskWriteGiB: o["diskWriteGiB"],
    diskReadGiB: o["diskReadGiB"],
    diskWriteIOps: o["diskWriteIOps"],
    diskReadIOps: o["diskReadIOps"],
    peakDiskGiB: o["peakDiskGiB"],
    avgDiskGiB: o["avgDiskGiB"],
    peakMemoryGiB: o["peakMemoryGiB"],
    avgMemoryGiB: o["avgMemoryGiB"],
    avgCpuPercentage: o["avgCPUPercentage"],
    lastUpdateTime: new Date(o["lastUpdateTime"]),
    startTime: new Date(o["startTime"]),
  };
}

export function deserializeUsageStatistics(
  o: RestUsageStatistics,
): UsageStatistics {
  return {
    dedicatedCoreTime: FIXME,
    lastUpdateTime: new Date(o["lastUpdateTime"]),
    startTime: new Date(o["startTime"]),
  };
}

export function deserializePoolStatistics(
  o: RestPoolStatistics,
): PoolStatistics {
  return {
    resourceStats:
      o["resourceStats"] === undefined
        ? o["resourceStats"]
        : MISSING_SERIALIZER(o["resourceStats"]),
    usageStats:
      o["usageStats"] === undefined
        ? o["usageStats"]
        : MISSING_SERIALIZER(o["usageStats"]),
    lastUpdateTime: new Date(o["lastUpdateTime"]),
    startTime: new Date(o["startTime"]),
    url: o["url"],
  };
}

export function deserializeAutoScaleRunError(
  o: RestAutoScaleRunError,
): AutoScaleRunError {
  return {
    values:
      o["values"] === undefined
        ? o["values"]
        : o["values"].map((e: RestNameValuePair) => MISSING_SERIALIZER(e)),
    message: o["message"],
    code: o["code"],
  };
}

export function deserializeAutoScaleRun(o: RestAutoScaleRun): AutoScaleRun {
  return {
    error:
      o["error"] === undefined ? o["error"] : MISSING_SERIALIZER(o["error"]),
    results: o["results"],
    timestamp: new Date(o["timestamp"]),
  };
}

export function deserializeResizeError(o: RestResizeError): ResizeError {
  return {
    values:
      o["values"] === undefined
        ? o["values"]
        : o["values"].map((e: RestNameValuePair) => MISSING_SERIALIZER(e)),
    message: o["message"],
    code: o["code"],
  };
}

export function deserializeBatchPool(o: RestBatchPool): BatchPool {
  return {
    targetNodeCommunicationMode: o["targetNodeCommunicationMode"],
    startTask:
      o["startTask"] === undefined
        ? o["startTask"]
        : MISSING_SERIALIZER(o["startTask"]),
  };
}

export function deserializeBatchPoolListResult(
  o: RestBatchPoolListResult,
): BatchPoolListResult {
  return {
    "odata.nextLink": o["odata.nextLink"],
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map((e: RestBatchPool) => MISSING_SERIALIZER(e)),
  };
}

export function deserializePoolUsageMetrics(
  o: RestPoolUsageMetrics,
): PoolUsageMetrics {
  return {
    totalCoreHours: o["totalCoreHours"],
    vmSize: o["vmSize"],
    endTime: new Date(o["endTime"]),
    startTime: new Date(o["startTime"]),
    poolId: o["poolId"],
  };
}

export function deserializePoolListUsageMetricsResult(
  o: RestPoolListUsageMetricsResult,
): PoolListUsageMetricsResult {
  return {
    "odata.nextLink": o["odata.nextLink"],
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map((e: RestPoolUsageMetrics) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeNodeCounts(o: RestNodeCounts): NodeCounts {
  return {
    total: o["total"],
    waitingForStartTask: o["waitingForStartTask"],
    unusable: o["unusable"],
    unknown: o["unknown"],
    leavingPool: o["leavingPool"],
    startTaskFailed: o["startTaskFailed"],
    starting: o["starting"],
    running: o["running"],
    reimaging: o["reimaging"],
    rebooting: o["rebooting"],
    preempted: o["preempted"],
    offline: o["offline"],
    idle: o["idle"],
    creating: o["creating"],
  };
}

export function deserializePoolNodeCounts(
  o: RestPoolNodeCounts,
): PoolNodeCounts {
  return {
    lowPriority:
      o["lowPriority"] === undefined
        ? o["lowPriority"]
        : MISSING_SERIALIZER(o["lowPriority"]),
    dedicated:
      o["dedicated"] === undefined
        ? o["dedicated"]
        : MISSING_SERIALIZER(o["dedicated"]),
    poolId: o["poolId"],
  };
}

export function deserializePoolNodeCountsListResult(
  o: RestPoolNodeCountsListResult,
): PoolNodeCountsListResult {
  return {
    "odata.nextLink": o["odata.nextLink"],
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map((e: RestPoolNodeCounts) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeImageInformation(
  o: RestImageInformation,
): ImageInformation {
  return {
    verificationType: o["verificationType"],
    batchSupportEndOfLife:
      o["batchSupportEndOfLife"] === undefined
        ? o["batchSupportEndOfLife"]
        : new Date(o["batchSupportEndOfLife"]),
    capabilities: o["capabilities"],
    osType: o["osType"],
    imageReference: MISSING_SERIALIZER(o["imageReference"]),
    nodeAgentSkuId: o["nodeAgentSKUId"],
  };
}

export function deserializeAccountListSupportedImagesResult(
  o: RestAccountListSupportedImagesResult,
): AccountListSupportedImagesResult {
  return {
    "odata.nextLink": o["odata.nextLink"],
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map((e: RestImageInformation) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeTaskSlotCounts(
  o: RestTaskSlotCounts,
): TaskSlotCounts {
  return {
    failed: o["failed"],
    succeeded: o["succeeded"],
    completed: o["completed"],
    running: o["running"],
    active: o["active"],
  };
}

export function deserializeTaskCounts(o: RestTaskCounts): TaskCounts {
  return {
    failed: o["failed"],
    succeeded: o["succeeded"],
    completed: o["completed"],
    running: o["running"],
    active: o["active"],
  };
}

export function deserializeTaskCountsResult(
  o: RestTaskCountsResult,
): TaskCountsResult {
  return {
    taskSlotCounts: MISSING_SERIALIZER(o["taskSlotCounts"]),
    taskCounts: MISSING_SERIALIZER(o["taskCounts"]),
  };
}

export function deserializeJobReleaseTaskExecutionInformation(
  o: RestJobReleaseTaskExecutionInformation,
): JobReleaseTaskExecutionInformation {
  return {
    result: o["result"],
    failureInfo:
      o["failureInfo"] === undefined
        ? o["failureInfo"]
        : MISSING_SERIALIZER(o["failureInfo"]),
    containerInfo:
      o["containerInfo"] === undefined
        ? o["containerInfo"]
        : MISSING_SERIALIZER(o["containerInfo"]),
    exitCode: o["exitCode"],
    taskRootDirectoryUrl: o["taskRootDirectoryUrl"],
    taskRootDirectory: o["taskRootDirectory"],
    state: o["state"],
    endTime: o["endTime"] === undefined ? o["endTime"] : new Date(o["endTime"]),
    startTime: new Date(o["startTime"]),
  };
}

export function deserializeJobPreparationTaskExecutionInformation(
  o: RestJobPreparationTaskExecutionInformation,
): JobPreparationTaskExecutionInformation {
  return {
    result: o["result"],
    lastRetryTime:
      o["lastRetryTime"] === undefined
        ? o["lastRetryTime"]
        : new Date(o["lastRetryTime"]),
    retryCount: o["retryCount"],
    failureInfo:
      o["failureInfo"] === undefined
        ? o["failureInfo"]
        : MISSING_SERIALIZER(o["failureInfo"]),
    containerInfo:
      o["containerInfo"] === undefined
        ? o["containerInfo"]
        : MISSING_SERIALIZER(o["containerInfo"]),
    exitCode: o["exitCode"],
    taskRootDirectoryUrl: o["taskRootDirectoryUrl"],
    taskRootDirectory: o["taskRootDirectory"],
    state: o["state"],
    endTime: o["endTime"] === undefined ? o["endTime"] : new Date(o["endTime"]),
    startTime: new Date(o["startTime"]),
  };
}

export function deserializeJobPreparationAndReleaseTaskExecutionInformation(
  o: RestJobPreparationAndReleaseTaskExecutionInformation,
): JobPreparationAndReleaseTaskExecutionInformation {
  return {
    jobReleaseTaskExecutionInfo:
      o["jobReleaseTaskExecutionInfo"] === undefined
        ? o["jobReleaseTaskExecutionInfo"]
        : MISSING_SERIALIZER(o["jobReleaseTaskExecutionInfo"]),
    jobPreparationTaskExecutionInfo:
      o["jobPreparationTaskExecutionInfo"] === undefined
        ? o["jobPreparationTaskExecutionInfo"]
        : MISSING_SERIALIZER(o["jobPreparationTaskExecutionInfo"]),
    nodeUrl: o["nodeUrl"],
    nodeId: o["nodeId"],
    poolId: o["poolId"],
  };
}

export function deserializeBatchJobListPreparationAndReleaseTaskStatusResult(
  o: RestBatchJobListPreparationAndReleaseTaskStatusResult,
): BatchJobListPreparationAndReleaseTaskStatusResult {
  return {
    "odata.nextLink": o["odata.nextLink"],
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map(
            (e: RestJobPreparationAndReleaseTaskExecutionInformation) =>
              MISSING_SERIALIZER(e),
          ),
  };
}

export function deserializeBatchJobListResult(
  o: RestBatchJobListResult,
): BatchJobListResult {
  return {
    "odata.nextLink": o["odata.nextLink"],
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeCertificateListResult(
  o: RestCertificateListResult,
): CertificateListResult {
  return {
    "odata.nextLink": o["odata.nextLink"],
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeBatchJobScheduleListResult(
  o: RestBatchJobScheduleListResult,
): BatchJobScheduleListResult {
  return {
    "odata.nextLink": o["odata.nextLink"],
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map((e) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeSubtaskInformation(
  o: RestSubtaskInformation,
): SubtaskInformation {
  return {
    result: o["result"],
    previousStateTransitionTime:
      o["previousStateTransitionTime"] === undefined
        ? o["previousStateTransitionTime"]
        : new Date(o["previousStateTransitionTime"]),
    previousState: o["previousState"],
    stateTransitionTime:
      o["stateTransitionTime"] === undefined
        ? o["stateTransitionTime"]
        : new Date(o["stateTransitionTime"]),
    state: o["state"],
    failureInfo:
      o["failureInfo"] === undefined
        ? o["failureInfo"]
        : MISSING_SERIALIZER(o["failureInfo"]),
    containerInfo:
      o["containerInfo"] === undefined
        ? o["containerInfo"]
        : MISSING_SERIALIZER(o["containerInfo"]),
    exitCode: o["exitCode"],
    endTime: o["endTime"] === undefined ? o["endTime"] : new Date(o["endTime"]),
    startTime:
      o["startTime"] === undefined ? o["startTime"] : new Date(o["startTime"]),
    nodeInfo:
      o["nodeInfo"] === undefined
        ? o["nodeInfo"]
        : MISSING_SERIALIZER(o["nodeInfo"]),
    id: o["id"],
  };
}

export function deserializeBatchTaskListSubtasksResult(
  o: RestBatchTaskListSubtasksResult,
): BatchTaskListSubtasksResult {
  return {
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map((e: RestSubtaskInformation) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeTaskAddResult(o: RestTaskAddResult): TaskAddResult {
  return {
    error:
      o["error"] === undefined ? o["error"] : MISSING_SERIALIZER(o["error"]),
    location: o["location"],
    lastModified:
      o["lastModified"] === undefined
        ? o["lastModified"]
        : new Date(o["lastModified"]),
    eTag: o["eTag"],
    taskId: o["taskId"],
    status: o["status"],
  };
}

export function deserializeTaskAddCollectionResult(
  o: RestTaskAddCollectionResult,
): TaskAddCollectionResult {
  return {
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map((e: RestTaskAddResult) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeTaskStatistics(
  o: RestTaskStatistics,
): TaskStatistics {
  return {
    waitTime: FIXME,
    writeIOGiB: o["writeIOGiB"],
    readIOGiB: o["readIOGiB"],
    writeIOps: o["writeIOps"],
    readIOps: o["readIOps"],
    wallClockTime: FIXME,
    kernelCPUTime: FIXME,
    userCPUTime: FIXME,
    lastUpdateTime: new Date(o["lastUpdateTime"]),
    startTime: new Date(o["startTime"]),
    url: o["url"],
  };
}

export function deserializeBatchNodeInformation(
  o: RestBatchNodeInformation,
): BatchNodeInformation {
  return {
    taskRootDirectoryUrl: o["taskRootDirectoryUrl"],
    taskRootDirectory: o["taskRootDirectory"],
    nodeId: o["nodeId"],
    poolId: o["poolId"],
    nodeUrl: o["nodeUrl"],
    affinityId: o["affinityId"],
  };
}

export function deserializeBatchTask(o: RestBatchTask): BatchTask {
  return {
    constraints:
      o["constraints"] === undefined
        ? o["constraints"]
        : MISSING_DESERIALIZER(o["constraints"]),
  };
}

export function deserializeBatchTaskListResult(
  o: RestBatchTaskListResult,
): BatchTaskListResult {
  return {
    "odata.nextLink": o["odata.nextLink"],
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map((e: RestBatchTask) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeFileProperties(
  o: RestFileProperties,
): FileProperties {
  return {
    fileMode: o["fileMode"],
    contentType: o["contentType"],
    contentLength: o["contentLength"],
    lastModified: new Date(o["lastModified"]),
    creationTime:
      o["creationTime"] === undefined
        ? o["creationTime"]
        : new Date(o["creationTime"]),
  };
}

export function deserializeNodeFile(o: RestNodeFile): NodeFile {
  return {
    properties:
      o["properties"] === undefined
        ? o["properties"]
        : MISSING_SERIALIZER(o["properties"]),
    isDirectory: o["isDirectory"],
    url: o["url"],
    name: o["name"],
  };
}

export function deserializeNodeFileListResult(
  o: RestNodeFileListResult,
): NodeFileListResult {
  return {
    "odata.nextLink": o["odata.nextLink"],
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map((e: RestNodeFile) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeNodeVMExtensionList(
  o: RestNodeVMExtensionList,
): NodeVMExtensionList {
  return {
    "odata.nextLink": o["odata.nextLink"],
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map((e: RestNodeVMExtension) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeInstanceViewStatus(
  o: RestInstanceViewStatus,
): InstanceViewStatus {
  return {
    time: o["time"],
    message: o["message"],
    level: o["level"],
    displayStatus: o["displayStatus"],
    code: o["code"],
  };
}

export function deserializeVMExtensionInstanceView(
  o: RestVMExtensionInstanceView,
): VMExtensionInstanceView {
  return {
    subStatuses:
      o["subStatuses"] === undefined
        ? o["subStatuses"]
        : o["subStatuses"].map((e: RestInstanceViewStatus) =>
            MISSING_SERIALIZER(e),
          ),
    statuses:
      o["statuses"] === undefined
        ? o["statuses"]
        : o["statuses"].map((e: RestInstanceViewStatus) =>
            MISSING_SERIALIZER(e),
          ),
    name: o["name"],
  };
}

export function deserializeVMExtension(o: RestVMExtension): VMExtension {
  return {
    provisionAfterExtensions: o["provisionAfterExtensions"],
    protectedSettings:
      o["protectedSettings"] === undefined ? o["protectedSettings"] : FIXME,
    settings: o["settings"] === undefined ? o["settings"] : FIXME,
    enableAutomaticUpgrade: o["enableAutomaticUpgrade"],
    autoUpgradeMinorVersion: o["autoUpgradeMinorVersion"],
    typeHandlerVersion: o["typeHandlerVersion"],
    type: o["type"],
    publisher: o["publisher"],
    name: o["name"],
  };
}

export function deserializeNodeVMExtension(
  o: RestNodeVMExtension,
): NodeVMExtension {
  return {
    instanceView:
      o["instanceView"] === undefined
        ? o["instanceView"]
        : MISSING_SERIALIZER(o["instanceView"]),
    vmExtension:
      o["vmExtension"] === undefined
        ? o["vmExtension"]
        : MISSING_SERIALIZER(o["vmExtension"]),
    provisioningState: o["provisioningState"],
  };
}

export function deserializeBatchNodeListResult(
  o: RestBatchNodeListResult,
): BatchNodeListResult {
  return {
    "odata.nextLink": o["odata.nextLink"],
    value:
      o["value"] === undefined
        ? o["value"]
        : o["value"].map((e: RestBatchNode) => MISSING_SERIALIZER(e)),
  };
}

export function deserializeUploadBatchServiceLogsResult(
  o: RestUploadBatchServiceLogsResult,
): UploadBatchServiceLogsResult {
  return {
    numberOfFilesUploaded: o["numberOfFilesUploaded"],
    virtualDirectoryName: o["virtualDirectoryName"],
  };
}

export function deserializeBatchNodeRemoteLoginSettingsResult(
  o: RestBatchNodeRemoteLoginSettingsResult,
): BatchNodeRemoteLoginSettingsResult {
  return {
    remoteLoginPort: o["remoteLoginPort"],
    remoteLoginIpAddress: o["remoteLoginIPAddress"],
  };
}

export function deserializeImageReference(
  o: RestImageReference,
): ImageReference {
  return {
    virtualMachineImageId: o["virtualMachineImageId"],
    version: o["version"],
    sku: o["sku"],
    offer: o["offer"],
    publisher: o["publisher"],
  };
}

export function deserializeVirtualMachineInfo(
  o: RestVirtualMachineInfo,
): VirtualMachineInfo {
  return {
    imageReference:
      o["imageReference"] === undefined
        ? o["imageReference"]
        : MISSING_SERIALIZER(o["imageReference"]),
  };
}

export function deserializeNodeAgentInformation(
  o: RestNodeAgentInformation,
): NodeAgentInformation {
  return {
    lastUpdateTime: new Date(o["lastUpdateTime"]),
    version: o["version"],
  };
}

export function deserializeInboundEndpoint(
  o: RestInboundEndpoint,
): InboundEndpoint {
  return {
    backendPort: o["backendPort"],
    frontendPort: o["frontendPort"],
    publicFQDN: o["publicFQDN"],
    publicIpAddress: o["publicIPAddress"],
    protocol: o["protocol"],
    name: o["name"],
  };
}

export function deserializeBatchNodeEndpointConfiguration(
  o: RestBatchNodeEndpointConfiguration,
): BatchNodeEndpointConfiguration {
  return {
    inboundEndpoints: o["inboundEndpoints"].map((e: RestInboundEndpoint) =>
      MISSING_SERIALIZER(e),
    ),
  };
}

export function deserializeBatchNodeError(
  o: RestBatchNodeError,
): BatchNodeError {
  return {
    errorDetails:
      o["errorDetails"] === undefined
        ? o["errorDetails"]
        : o["errorDetails"].map((e: RestNameValuePair) =>
            MISSING_SERIALIZER(e),
          ),
    message: o["message"],
    code: o["code"],
  };
}

export function deserializeCertificateReference(
  o: RestCertificateReference,
): CertificateReference {
  return {
    visibility: o["visibility"],
    storeName: o["storeName"],
    storeLocation: o["storeLocation"],
    thumbprintAlgorithm: o["thumbprintAlgorithm"],
    thumbprint: o["thumbprint"],
  };
}

export function deserializeStartTaskInformation(
  o: RestStartTaskInformation,
): StartTaskInformation {
  return {
    result: o["result"],
    lastRetryTime:
      o["lastRetryTime"] === undefined
        ? o["lastRetryTime"]
        : new Date(o["lastRetryTime"]),
    retryCount: o["retryCount"],
    failureInfo:
      o["failureInfo"] === undefined
        ? o["failureInfo"]
        : MISSING_SERIALIZER(o["failureInfo"]),
    containerInfo:
      o["containerInfo"] === undefined
        ? o["containerInfo"]
        : MISSING_SERIALIZER(o["containerInfo"]),
    exitCode: o["exitCode"],
    endTime: o["endTime"] === undefined ? o["endTime"] : new Date(o["endTime"]),
    startTime: new Date(o["startTime"]),
    state: o["state"],
  };
}

export function deserializeAutoUserSpecification(
  o: RestAutoUserSpecification,
): AutoUserSpecification {
  return {
    elevationLevel: o["elevationLevel"],
    scope: o["scope"],
  };
}

export function deserializeUserIdentity(o: RestUserIdentity): UserIdentity {
  return {
    autoUser:
      o["autoUser"] === undefined
        ? o["autoUser"]
        : MISSING_SERIALIZER(o["autoUser"]),
    username: o["username"],
  };
}

export function deserializeEnvironmentSetting(
  o: RestEnvironmentSetting,
): EnvironmentSetting {
  return {
    value: o["value"],
    name: o["name"],
  };
}

export function deserializeResourceFile(o: RestResourceFile): ResourceFile {
  return {
    identityReference:
      o["identityReference"] === undefined
        ? o["identityReference"]
        : MISSING_SERIALIZER(o["identityReference"]),
    fileMode: o["fileMode"],
    filePath: o["filePath"],
    blobPrefix: o["blobPrefix"],
    httpUrl: o["httpUrl"],
    storageContainerUrl: o["storageContainerUrl"],
    autoStorageContainerName: o["autoStorageContainerName"],
  };
}

export function deserializeBatchNodeIdentityReference(
  o: RestBatchNodeIdentityReference,
): BatchNodeIdentityReference {
  return {
    resourceId: o["resourceId"],
  };
}

export function deserializeContainerRegistry(
  o: RestContainerRegistry,
): ContainerRegistry {
  return {
    identityReference:
      o["identityReference"] === undefined
        ? o["identityReference"]
        : MISSING_SERIALIZER(o["identityReference"]),
    registryServer: o["registryServer"],
    password: o["password"],
    username: o["username"],
  };
}

export function deserializeTaskContainerSettings(
  o: RestTaskContainerSettings,
): TaskContainerSettings {
  return {
    workingDirectory: o["workingDirectory"],
    registry:
      o["registry"] === undefined
        ? o["registry"]
        : MISSING_SERIALIZER(o["registry"]),
    imageName: o["imageName"],
    containerRunOptions: o["containerRunOptions"],
  };
}

export function deserializeStartTask(o: RestStartTask): StartTask {
  return {
    waitForSuccess: o["waitForSuccess"],
    maxTaskRetryCount: o["maxTaskRetryCount"],
    userIdentity:
      o["userIdentity"] === undefined
        ? o["userIdentity"]
        : MISSING_SERIALIZER(o["userIdentity"]),
    environmentSettings:
      o["environmentSettings"] === undefined
        ? o["environmentSettings"]
        : o["environmentSettings"].map((e: RestEnvironmentSetting) =>
            MISSING_SERIALIZER(e),
          ),
    resourceFiles:
      o["resourceFiles"] === undefined
        ? o["resourceFiles"]
        : o["resourceFiles"].map((e: RestResourceFile) =>
            MISSING_SERIALIZER(e),
          ),
    containerSettings:
      o["containerSettings"] === undefined
        ? o["containerSettings"]
        : MISSING_SERIALIZER(o["containerSettings"]),
    commandLine: o["commandLine"],
  };
}

export function deserializeNameValuePair(o: RestNameValuePair): NameValuePair {
  return {
    value: o["value"],
    name: o["name"],
  };
}

export function deserializeTaskFailureInformation(
  o: RestTaskFailureInformation,
): TaskFailureInformation {
  return {
    details:
      o["details"] === undefined
        ? o["details"]
        : o["details"].map((e: RestNameValuePair) => MISSING_SERIALIZER(e)),
    message: o["message"],
    code: o["code"],
    category: o["category"],
  };
}

export function deserializeTaskContainerExecutionInformation(
  o: RestTaskContainerExecutionInformation,
): TaskContainerExecutionInformation {
  return {
    error: o["error"],
    state: o["state"],
    containerId: o["containerId"],
  };
}

export function deserializeTaskExecutionInformation(
  o: RestTaskExecutionInformation,
): TaskExecutionInformation {
  return {
    result: o["result"],
    lastRequeueTime:
      o["lastRequeueTime"] === undefined
        ? o["lastRequeueTime"]
        : new Date(o["lastRequeueTime"]),
    requeueCount: o["requeueCount"],
    lastRetryTime:
      o["lastRetryTime"] === undefined
        ? o["lastRetryTime"]
        : new Date(o["lastRetryTime"]),
    retryCount: o["retryCount"],
    failureInfo:
      o["failureInfo"] === undefined
        ? o["failureInfo"]
        : MISSING_SERIALIZER(o["failureInfo"]),
    containerInfo:
      o["containerInfo"] === undefined
        ? o["containerInfo"]
        : MISSING_SERIALIZER(o["containerInfo"]),
    exitCode: o["exitCode"],
    endTime: o["endTime"] === undefined ? o["endTime"] : new Date(o["endTime"]),
    startTime:
      o["startTime"] === undefined ? o["startTime"] : new Date(o["startTime"]),
  };
}

export function deserializeTaskInformation(
  o: RestTaskInformation,
): TaskInformation {
  return {
    executionInfo:
      o["executionInfo"] === undefined
        ? o["executionInfo"]
        : MISSING_SERIALIZER(o["executionInfo"]),
    taskState: o["taskState"],
    subtaskId: o["subtaskId"],
    taskId: o["taskId"],
    jobId: o["jobId"],
    taskUrl: o["taskUrl"],
  };
}

export function deserializeBatchNode(o: RestBatchNode): BatchNode {
  return {
    virtualMachineInfo:
      o["virtualMachineInfo"] === undefined
        ? o["virtualMachineInfo"]
        : MISSING_SERIALIZER(o["virtualMachineInfo"]),
    nodeAgentInfo:
      o["nodeAgentInfo"] === undefined
        ? o["nodeAgentInfo"]
        : MISSING_SERIALIZER(o["nodeAgentInfo"]),
    endpointConfiguration:
      o["endpointConfiguration"] === undefined
        ? o["endpointConfiguration"]
        : MISSING_SERIALIZER(o["endpointConfiguration"]),
    isDedicated: o["isDedicated"],
    errors:
      o["errors"] === undefined
        ? o["errors"]
        : o["errors"].map((e: RestBatchNodeError) => MISSING_SERIALIZER(e)),
    certificateReferences:
      o["certificateReferences"] === undefined
        ? o["certificateReferences"]
        : o["certificateReferences"].map((e: RestCertificateReference) =>
            MISSING_SERIALIZER(e),
          ),
    startTaskInfo:
      o["startTaskInfo"] === undefined
        ? o["startTaskInfo"]
        : MISSING_SERIALIZER(o["startTaskInfo"]),
    startTask:
      o["startTask"] === undefined
        ? o["startTask"]
        : MISSING_SERIALIZER(o["startTask"]),
    recentTasks:
      o["recentTasks"] === undefined
        ? o["recentTasks"]
        : o["recentTasks"].map((e: RestTaskInformation) =>
            MISSING_SERIALIZER(e),
          ),
    totalTasksSucceeded: o["totalTasksSucceeded"],
    runningTaskSlotsCount: o["runningTaskSlotsCount"],
    runningTasksCount: o["runningTasksCount"],
    totalTasksRun: o["totalTasksRun"],
    vmSize: o["vmSize"],
    affinityId: o["affinityId"],
    ipAddress: o["ipAddress"],
    allocationTime:
      o["allocationTime"] === undefined
        ? o["allocationTime"]
        : new Date(o["allocationTime"]),
    lastBootTime:
      o["lastBootTime"] === undefined
        ? o["lastBootTime"]
        : new Date(o["lastBootTime"]),
    stateTransitionTime:
      o["stateTransitionTime"] === undefined
        ? o["stateTransitionTime"]
        : new Date(o["stateTransitionTime"]),
    schedulingState: o["schedulingState"],
    state: o["state"],
    url: o["url"],
    id: o["id"],
  };
}

export function deserializeBatchErrorDetail(
  o: RestBatchErrorDetail,
): BatchErrorDetail {
  return {
    value: o["value"],
    key: o["key"],
  };
}

export function deserializeErrorMessage(o: RestErrorMessage): ErrorMessage {
  return {
    value: o["value"],
    lang: o["lang"],
  };
}

export function deserializeBatchError(o: RestBatchError): BatchError {
  return {
    values:
      o["values"] === undefined
        ? o["values"]
        : o["values"].map((e: RestBatchErrorDetail) => MISSING_SERIALIZER(e)),
    message:
      o["message"] === undefined
        ? o["message"]
        : MISSING_SERIALIZER(o["message"]),
    code: o["code"],
  };
}
