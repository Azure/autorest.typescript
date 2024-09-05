// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BatchContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  BatchNodeUserCreateOptions,
  BatchNodeUserUpdateOptions,
  BatchNode,
  startTaskSerializer,
  taskContainerSettingsSerializer,
  batchNodeIdentityReferenceSerializer,
  userIdentitySerializer,
  resourceFileSerializer,
  environmentSettingSerializer,
  certificateReferenceSerializer,
  NodeRebootOptions,
  NodeReimageOptions,
  NodeDisableSchedulingOptions,
  BatchNodeRemoteLoginSettingsResult,
  UploadBatchServiceLogsOptions,
  UploadBatchServiceLogsResult,
  _BatchNodeListResult,
  NodeVMExtension,
  _NodeVMExtensionList,
  _NodeFileListResult,
  NodeFile,
  BatchTaskCreateOptions,
  batchTaskCreateOptionsSerializer,
  exitConditionsSerializer,
  affinityInformationSerializer,
  taskConstraintsSerializer,
  multiInstanceSettingsSerializer,
  taskDependenciesSerializer,
  authenticationTokenSettingsSerializer,
  outputFileSerializer,
  applicationPackageReferenceSerializer,
  _BatchTaskListResult,
  BatchTask,
  BatchTaskCollection,
  TaskAddCollectionResult,
  BatchTaskListSubtasksResult,
  BatchJobSchedule,
  scheduleSerializer,
  jobSpecificationSerializer,
  jobNetworkConfigurationSerializer,
  jobConstraintsSerializer,
  jobManagerTaskSerializer,
  jobPreparationTaskSerializer,
  jobReleaseTaskSerializer,
  poolInformationSerializer,
  cloudServiceConfigurationSerializer,
  virtualMachineConfigurationSerializer,
  taskSchedulingPolicySerializer,
  networkConfigurationSerializer,
  userAccountSerializer,
  metadataItemSerializer,
  mountConfigurationSerializer,
  BatchJobScheduleUpdateOptions,
  BatchJobScheduleCreateOptions,
  _BatchJobScheduleListResult,
  BatchCertificate,
  _CertificateListResult,
  BatchJob,
  BatchJobUpdateOptions,
  BatchJobDisableOptions,
  BatchJobTerminateOptions,
  BatchJobCreateOptions,
  _BatchJobListResult,
  _BatchJobListPreparationAndReleaseTaskStatusResult,
  JobPreparationAndReleaseTaskExecutionInformation,
  TaskCountsResult,
  _AccountListSupportedImagesResult,
  ImageInformation,
  _PoolNodeCountsListResult,
  PoolNodeCounts,
  _PoolListUsageMetricsResult,
  PoolUsageMetrics,
  BatchPoolCreateOptions,
  _BatchPoolListResult,
  BatchPool,
  AutoScaleRun,
  BatchPoolUpdateOptions,
  BatchPoolEnableAutoScaleOptions,
  BatchPoolEvaluateAutoScaleOptions,
  BatchPoolResizeOptions,
  BatchPoolReplaceOptions,
  NodeRemoveOptions,
  _ApplicationListResult,
  BatchApplication,
} from "../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../static-helpers/pagingHelpers.js";
import {
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
import {
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
} from "../models/options.js";

export function _listApplicationsSend(
  context: Client,
  options: ListApplicationsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/applications")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        maxresults: options?.maxresults,
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _listApplicationsDeserialize(
  result: PathUncheckedResponse,
): Promise<_ApplicationListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              id: p["id"],
              displayName: p["displayName"],
              versions: p["versions"],
            };
          }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/**
 * This operation returns only Applications and versions that are available for
 * use on Compute Nodes; that is, that can be used in an Package reference. For
 * administrator information about applications and versions that are not yet
 * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
 * API.
 */
export function listApplications(
  context: Client,
  options: ListApplicationsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchApplication> {
  return buildPagedAsyncIterator(
    context,
    () => _listApplicationsSend(context, options),
    _listApplicationsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _getApplicationSend(
  context: Client,
  applicationId: string,
  options: GetApplicationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/applications/{applicationId}", applicationId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _getApplicationDeserialize(
  result: PathUncheckedResponse,
): Promise<BatchApplication> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    displayName: result.body["displayName"],
    versions: result.body["versions"],
  };
}

/**
 * This operation returns only Applications and versions that are available for
 * use on Compute Nodes; that is, that can be used in an Package reference. For
 * administrator information about Applications and versions that are not yet
 * available to Compute Nodes, use the Azure portal or the Azure Resource Manager
 * API.
 */
export async function getApplication(
  context: Client,
  applicationId: string,
  options: GetApplicationOptionalParams = { requestOptions: {} },
): Promise<BatchApplication> {
  const result = await _getApplicationSend(context, applicationId, options);
  return _getApplicationDeserialize(result);
}

export function _listPoolUsageMetricsSend(
  context: Client,
  options: ListPoolUsageMetricsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/poolusagemetrics")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        maxresults: options?.maxresults,
        timeOut: options?.timeOutInSeconds,
        starttime: options?.starttime?.toISOString(),
        endtime: options?.endtime?.toISOString(),
        $filter: options?.$filter,
      },
    });
}

export async function _listPoolUsageMetricsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PoolListUsageMetricsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              poolId: p["poolId"],
              startTime: new Date(p["startTime"]),
              endTime: new Date(p["endTime"]),
              vmSize: p["vmSize"],
              totalCoreHours: p["totalCoreHours"],
            };
          }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/**
 * If you do not specify a $filter clause including a poolId, the response
 * includes all Pools that existed in the Account in the time range of the
 * returned aggregation intervals. If you do not specify a $filter clause
 * including a startTime or endTime these filters default to the start and end
 * times of the last aggregation interval currently available; that is, only the
 * last aggregation interval is returned.
 */
export function listPoolUsageMetrics(
  context: Client,
  options: ListPoolUsageMetricsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<PoolUsageMetrics> {
  return buildPagedAsyncIterator(
    context,
    () => _listPoolUsageMetricsSend(context, options),
    _listPoolUsageMetricsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _createPoolSend(
  context: Client,
  body: BatchPoolCreateOptions,
  options: CreatePoolOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        id: body["id"],
        displayName: body["displayName"],
        vmSize: body["vmSize"],
        cloudServiceConfiguration: !body.cloudServiceConfiguration
          ? body.cloudServiceConfiguration
          : cloudServiceConfigurationSerializer(body.cloudServiceConfiguration),
        virtualMachineConfiguration: !body.virtualMachineConfiguration
          ? body.virtualMachineConfiguration
          : virtualMachineConfigurationSerializer(
              body.virtualMachineConfiguration,
            ),
        resizeTimeout: body["resizeTimeout"],
        targetDedicatedNodes: body["targetDedicatedNodes"],
        targetLowPriorityNodes: body["targetLowPriorityNodes"],
        enableAutoScale: body["enableAutoScale"],
        autoScaleFormula: body["autoScaleFormula"],
        autoScaleEvaluationInterval: body["autoScaleEvaluationInterval"],
        enableInterNodeCommunication: body["enableInterNodeCommunication"],
        networkConfiguration: !body.networkConfiguration
          ? body.networkConfiguration
          : networkConfigurationSerializer(body.networkConfiguration),
        startTask: !body.startTask
          ? body.startTask
          : startTaskSerializer(body.startTask),
        certificateReferences:
          body["certificateReferences"] === undefined
            ? body["certificateReferences"]
            : body["certificateReferences"].map(certificateReferenceSerializer),
        applicationPackageReferences:
          body["applicationPackageReferences"] === undefined
            ? body["applicationPackageReferences"]
            : body["applicationPackageReferences"].map(
                applicationPackageReferenceSerializer,
              ),
        applicationLicenses: body["applicationLicenses"],
        taskSlotsPerNode: body["taskSlotsPerNode"],
        taskSchedulingPolicy: !body.taskSchedulingPolicy
          ? body.taskSchedulingPolicy
          : taskSchedulingPolicySerializer(body.taskSchedulingPolicy),
        userAccounts:
          body["userAccounts"] === undefined
            ? body["userAccounts"]
            : body["userAccounts"].map(userAccountSerializer),
        metadata:
          body["metadata"] === undefined
            ? body["metadata"]
            : body["metadata"].map(metadataItemSerializer),
        mountConfiguration:
          body["mountConfiguration"] === undefined
            ? body["mountConfiguration"]
            : body["mountConfiguration"].map(mountConfigurationSerializer),
        targetNodeCommunicationMode: body["targetNodeCommunicationMode"],
      },
    });
}

export async function _createPoolDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * When naming Pools, avoid including sensitive information such as user names or
 * secret project names. This information may appear in telemetry logs accessible
 * to Microsoft Support engineers.
 */
export async function createPool(
  context: Client,
  body: BatchPoolCreateOptions,
  options: CreatePoolOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createPoolSend(context, body, options);
  return _createPoolDeserialize(result);
}

export function _listPoolsSend(
  context: Client,
  options: ListPoolsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        maxresults: options?.maxresults,
        timeOut: options?.timeOutInSeconds,
        $filter: options?.$filter,
        $select: options?.$select,
        $expand: options?.$expand,
      },
    });
}

export async function _listPoolsDeserialize(
  result: PathUncheckedResponse,
): Promise<_BatchPoolListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              id: p["id"],
              displayName: p["displayName"],
              url: p["url"],
              eTag: p["eTag"],
              lastModified:
                p["lastModified"] !== undefined
                  ? new Date(p["lastModified"])
                  : undefined,
              creationTime:
                p["creationTime"] !== undefined
                  ? new Date(p["creationTime"])
                  : undefined,
              state: p["state"],
              stateTransitionTime:
                p["stateTransitionTime"] !== undefined
                  ? new Date(p["stateTransitionTime"])
                  : undefined,
              allocationState: p["allocationState"],
              allocationStateTransitionTime:
                p["allocationStateTransitionTime"] !== undefined
                  ? new Date(p["allocationStateTransitionTime"])
                  : undefined,
              vmSize: p["vmSize"],
              cloudServiceConfiguration: !p.cloudServiceConfiguration
                ? undefined
                : {
                    osFamily: p.cloudServiceConfiguration?.["osFamily"],
                    osVersion: p.cloudServiceConfiguration?.["osVersion"],
                  },
              virtualMachineConfiguration: !p.virtualMachineConfiguration
                ? undefined
                : {
                    imageReference: {
                      publisher:
                        p.virtualMachineConfiguration?.imageReference[
                          "publisher"
                        ],
                      offer:
                        p.virtualMachineConfiguration?.imageReference["offer"],
                      sku: p.virtualMachineConfiguration?.imageReference["sku"],
                      version:
                        p.virtualMachineConfiguration?.imageReference[
                          "version"
                        ],
                      virtualMachineImageId:
                        p.virtualMachineConfiguration?.imageReference[
                          "virtualMachineImageId"
                        ],
                      exactVersion:
                        p.virtualMachineConfiguration?.imageReference[
                          "exactVersion"
                        ],
                    },
                    nodeAgentSkuId:
                      p.virtualMachineConfiguration?.["nodeAgentSKUId"],
                    windowsConfiguration: !p.virtualMachineConfiguration
                      ?.windowsConfiguration
                      ? undefined
                      : {
                          enableAutomaticUpdates:
                            p.virtualMachineConfiguration
                              ?.windowsConfiguration?.[
                              "enableAutomaticUpdates"
                            ],
                        },
                    dataDisks:
                      p.virtualMachineConfiguration?.["dataDisks"] === undefined
                        ? p.virtualMachineConfiguration?.["dataDisks"]
                        : p.virtualMachineConfiguration?.["dataDisks"].map(
                            (p: any) => {
                              return {
                                lun: p["lun"],
                                caching: p["caching"],
                                diskSizeGb: p["diskSizeGB"],
                                storageAccountType: p["storageAccountType"],
                              };
                            },
                          ),
                    licenseType: p.virtualMachineConfiguration?.["licenseType"],
                    containerConfiguration: !p.virtualMachineConfiguration
                      ?.containerConfiguration
                      ? undefined
                      : {
                          type: p.virtualMachineConfiguration
                            ?.containerConfiguration?.["type"],
                          containerImageNames:
                            p.virtualMachineConfiguration
                              ?.containerConfiguration?.["containerImageNames"],
                          containerRegistries:
                            p.virtualMachineConfiguration
                              ?.containerConfiguration?.[
                              "containerRegistries"
                            ] === undefined
                              ? p.virtualMachineConfiguration
                                  ?.containerConfiguration?.[
                                  "containerRegistries"
                                ]
                              : p.virtualMachineConfiguration?.containerConfiguration?.[
                                  "containerRegistries"
                                ].map((p: any) => {
                                  return {
                                    username: p["username"],
                                    password: p["password"],
                                    registryServer: p["registryServer"],
                                    identityReference: !p.identityReference
                                      ? undefined
                                      : {
                                          resourceId:
                                            p.identityReference?.["resourceId"],
                                        },
                                  };
                                }),
                        },
                    diskEncryptionConfiguration: !p.virtualMachineConfiguration
                      ?.diskEncryptionConfiguration
                      ? undefined
                      : {
                          targets:
                            p.virtualMachineConfiguration
                              ?.diskEncryptionConfiguration?.["targets"],
                        },
                    nodePlacementConfiguration: !p.virtualMachineConfiguration
                      ?.nodePlacementConfiguration
                      ? undefined
                      : {
                          policy:
                            p.virtualMachineConfiguration
                              ?.nodePlacementConfiguration?.["policy"],
                        },
                    extensions:
                      p.virtualMachineConfiguration?.["extensions"] ===
                      undefined
                        ? p.virtualMachineConfiguration?.["extensions"]
                        : p.virtualMachineConfiguration?.["extensions"].map(
                            (p: any) => {
                              return {
                                name: p["name"],
                                publisher: p["publisher"],
                                type: p["type"],
                                typeHandlerVersion: p["typeHandlerVersion"],
                                autoUpgradeMinorVersion:
                                  p["autoUpgradeMinorVersion"],
                                enableAutomaticUpgrade:
                                  p["enableAutomaticUpgrade"],
                                settings: p["settings"],
                                protectedSettings: p["protectedSettings"],
                                provisionAfterExtensions:
                                  p["provisionAfterExtensions"],
                              };
                            },
                          ),
                    osDisk: !p.virtualMachineConfiguration?.osDisk
                      ? undefined
                      : {
                          ephemeralOSDiskSettings: !p
                            .virtualMachineConfiguration?.osDisk
                            ?.ephemeralOSDiskSettings
                            ? undefined
                            : {
                                placement:
                                  p.virtualMachineConfiguration?.osDisk
                                    ?.ephemeralOSDiskSettings?.["placement"],
                              },
                        },
                  },
              resizeTimeout: p["resizeTimeout"],
              resizeErrors:
                p["resizeErrors"] === undefined
                  ? p["resizeErrors"]
                  : p["resizeErrors"].map((p: any) => {
                      return {
                        code: p["code"],
                        message: p["message"],
                        values:
                          p["values"] === undefined
                            ? p["values"]
                            : p["values"].map((p: any) => {
                                return { name: p["name"], value: p["value"] };
                              }),
                      };
                    }),
              currentDedicatedNodes: p["currentDedicatedNodes"],
              currentLowPriorityNodes: p["currentLowPriorityNodes"],
              targetDedicatedNodes: p["targetDedicatedNodes"],
              targetLowPriorityNodes: p["targetLowPriorityNodes"],
              enableAutoScale: p["enableAutoScale"],
              autoScaleFormula: p["autoScaleFormula"],
              autoScaleEvaluationInterval: p["autoScaleEvaluationInterval"],
              autoScaleRun: !p.autoScaleRun
                ? undefined
                : {
                    timestamp: new Date(p.autoScaleRun?.["timestamp"]),
                    results: p.autoScaleRun?.["results"],
                    error: !p.autoScaleRun?.error
                      ? undefined
                      : {
                          code: p.autoScaleRun?.error?.["code"],
                          message: p.autoScaleRun?.error?.["message"],
                          values:
                            p.autoScaleRun?.error?.["values"] === undefined
                              ? p.autoScaleRun?.error?.["values"]
                              : p.autoScaleRun?.error?.["values"].map(
                                  (p: any) => {
                                    return {
                                      name: p["name"],
                                      value: p["value"],
                                    };
                                  },
                                ),
                        },
                  },
              enableInterNodeCommunication: p["enableInterNodeCommunication"],
              networkConfiguration: !p.networkConfiguration
                ? undefined
                : {
                    subnetId: p.networkConfiguration?.["subnetId"],
                    dynamicVNetAssignmentScope:
                      p.networkConfiguration?.["dynamicVNetAssignmentScope"],
                    endpointConfiguration: !p.networkConfiguration
                      ?.endpointConfiguration
                      ? undefined
                      : {
                          inboundNatPools:
                            p.networkConfiguration?.endpointConfiguration?.[
                              "inboundNATPools"
                            ].map((p: any) => {
                              return {
                                name: p["name"],
                                protocol: p["protocol"],
                                backendPort: p["backendPort"],
                                frontendPortRangeStart:
                                  p["frontendPortRangeStart"],
                                frontendPortRangeEnd: p["frontendPortRangeEnd"],
                                networkSecurityGroupRules:
                                  p["networkSecurityGroupRules"] === undefined
                                    ? p["networkSecurityGroupRules"]
                                    : p["networkSecurityGroupRules"].map(
                                        (p: any) => {
                                          return {
                                            priority: p["priority"],
                                            access: p["access"],
                                            sourceAddressPrefix:
                                              p["sourceAddressPrefix"],
                                            sourcePortRanges:
                                              p["sourcePortRanges"],
                                          };
                                        },
                                      ),
                              };
                            }),
                        },
                    publicIpAddressConfiguration: !p.networkConfiguration
                      ?.publicIPAddressConfiguration
                      ? undefined
                      : {
                          IpAddressProvisioningType:
                            p.networkConfiguration
                              ?.publicIPAddressConfiguration?.["provision"],
                          ipAddressIds:
                            p.networkConfiguration
                              ?.publicIPAddressConfiguration?.["ipAddressIds"],
                        },
                    enableAcceleratedNetworking:
                      p.networkConfiguration?.["enableAcceleratedNetworking"],
                  },
              startTask: !p.startTask
                ? undefined
                : {
                    commandLine: p.startTask?.["commandLine"],
                    containerSettings: !p.startTask?.containerSettings
                      ? undefined
                      : {
                          containerRunOptions:
                            p.startTask?.containerSettings?.[
                              "containerRunOptions"
                            ],
                          imageName:
                            p.startTask?.containerSettings?.["imageName"],
                          registry: !p.startTask?.containerSettings?.registry
                            ? undefined
                            : {
                                username:
                                  p.startTask?.containerSettings?.registry?.[
                                    "username"
                                  ],
                                password:
                                  p.startTask?.containerSettings?.registry?.[
                                    "password"
                                  ],
                                registryServer:
                                  p.startTask?.containerSettings?.registry?.[
                                    "registryServer"
                                  ],
                                identityReference: !p.startTask
                                  ?.containerSettings?.registry
                                  ?.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.startTask?.containerSettings?.registry
                                          ?.identityReference?.["resourceId"],
                                    },
                              },
                          workingDirectory:
                            p.startTask?.containerSettings?.[
                              "workingDirectory"
                            ],
                        },
                    resourceFiles:
                      p.startTask?.["resourceFiles"] === undefined
                        ? p.startTask?.["resourceFiles"]
                        : p.startTask?.["resourceFiles"].map((p: any) => {
                            return {
                              autoStorageContainerName:
                                p["autoStorageContainerName"],
                              storageContainerUrl: p["storageContainerUrl"],
                              httpUrl: p["httpUrl"],
                              blobPrefix: p["blobPrefix"],
                              filePath: p["filePath"],
                              fileMode: p["fileMode"],
                              identityReference: !p.identityReference
                                ? undefined
                                : {
                                    resourceId:
                                      p.identityReference?.["resourceId"],
                                  },
                            };
                          }),
                    environmentSettings:
                      p.startTask?.["environmentSettings"] === undefined
                        ? p.startTask?.["environmentSettings"]
                        : p.startTask?.["environmentSettings"].map((p: any) => {
                            return { name: p["name"], value: p["value"] };
                          }),
                    userIdentity: !p.startTask?.userIdentity
                      ? undefined
                      : {
                          username: p.startTask?.userIdentity?.["username"],
                          autoUser: !p.startTask?.userIdentity?.autoUser
                            ? undefined
                            : {
                                scope:
                                  p.startTask?.userIdentity?.autoUser?.[
                                    "scope"
                                  ],
                                elevationLevel:
                                  p.startTask?.userIdentity?.autoUser?.[
                                    "elevationLevel"
                                  ],
                              },
                        },
                    maxTaskRetryCount: p.startTask?.["maxTaskRetryCount"],
                    waitForSuccess: p.startTask?.["waitForSuccess"],
                  },
              certificateReferences:
                p["certificateReferences"] === undefined
                  ? p["certificateReferences"]
                  : p["certificateReferences"].map((p: any) => {
                      return {
                        thumbprint: p["thumbprint"],
                        thumbprintAlgorithm: p["thumbprintAlgorithm"],
                        storeLocation: p["storeLocation"],
                        storeName: p["storeName"],
                        visibility: p["visibility"],
                      };
                    }),
              applicationPackageReferences:
                p["applicationPackageReferences"] === undefined
                  ? p["applicationPackageReferences"]
                  : p["applicationPackageReferences"].map((p: any) => {
                      return {
                        applicationId: p["applicationId"],
                        version: p["version"],
                      };
                    }),
              applicationLicenses: p["applicationLicenses"],
              taskSlotsPerNode: p["taskSlotsPerNode"],
              taskSchedulingPolicy: !p.taskSchedulingPolicy
                ? undefined
                : { nodeFillType: p.taskSchedulingPolicy?.["nodeFillType"] },
              userAccounts:
                p["userAccounts"] === undefined
                  ? p["userAccounts"]
                  : p["userAccounts"].map((p: any) => {
                      return {
                        name: p["name"],
                        password: p["password"],
                        elevationLevel: p["elevationLevel"],
                        linuxUserConfiguration: !p.linuxUserConfiguration
                          ? undefined
                          : {
                              uid: p.linuxUserConfiguration?.["uid"],
                              gid: p.linuxUserConfiguration?.["gid"],
                              sshPrivateKey:
                                p.linuxUserConfiguration?.["sshPrivateKey"],
                            },
                        windowsUserConfiguration: !p.windowsUserConfiguration
                          ? undefined
                          : {
                              loginMode:
                                p.windowsUserConfiguration?.["loginMode"],
                            },
                      };
                    }),
              metadata:
                p["metadata"] === undefined
                  ? p["metadata"]
                  : p["metadata"].map((p: any) => {
                      return { name: p["name"], value: p["value"] };
                    }),
              stats: !p.stats
                ? undefined
                : {
                    url: p.stats?.["url"],
                    startTime: new Date(p.stats?.["startTime"]),
                    lastUpdateTime: new Date(p.stats?.["lastUpdateTime"]),
                    usageStats: !p.stats?.usageStats
                      ? undefined
                      : {
                          startTime: new Date(
                            p.stats?.usageStats?.["startTime"],
                          ),
                          lastUpdateTime: new Date(
                            p.stats?.usageStats?.["lastUpdateTime"],
                          ),
                          dedicatedCoreTime:
                            p.stats?.usageStats?.["dedicatedCoreTime"],
                        },
                    resourceStats: !p.stats?.resourceStats
                      ? undefined
                      : {
                          startTime: new Date(
                            p.stats?.resourceStats?.["startTime"],
                          ),
                          lastUpdateTime: new Date(
                            p.stats?.resourceStats?.["lastUpdateTime"],
                          ),
                          avgCpuPercentage:
                            p.stats?.resourceStats?.["avgCPUPercentage"],
                          avgMemoryGiB:
                            p.stats?.resourceStats?.["avgMemoryGiB"],
                          peakMemoryGiB:
                            p.stats?.resourceStats?.["peakMemoryGiB"],
                          avgDiskGiB: p.stats?.resourceStats?.["avgDiskGiB"],
                          peakDiskGiB: p.stats?.resourceStats?.["peakDiskGiB"],
                          diskReadIOps:
                            p.stats?.resourceStats?.["diskReadIOps"],
                          diskWriteIOps:
                            p.stats?.resourceStats?.["diskWriteIOps"],
                          diskReadGiB: p.stats?.resourceStats?.["diskReadGiB"],
                          diskWriteGiB:
                            p.stats?.resourceStats?.["diskWriteGiB"],
                          networkReadGiB:
                            p.stats?.resourceStats?.["networkReadGiB"],
                          networkWriteGiB:
                            p.stats?.resourceStats?.["networkWriteGiB"],
                        },
                  },
              mountConfiguration:
                p["mountConfiguration"] === undefined
                  ? p["mountConfiguration"]
                  : p["mountConfiguration"].map((p: any) => {
                      return {
                        azureBlobFileSystemConfiguration:
                          !p.azureBlobFileSystemConfiguration
                            ? undefined
                            : {
                                accountName:
                                  p.azureBlobFileSystemConfiguration?.[
                                    "accountName"
                                  ],
                                containerName:
                                  p.azureBlobFileSystemConfiguration?.[
                                    "containerName"
                                  ],
                                accountKey:
                                  p.azureBlobFileSystemConfiguration?.[
                                    "accountKey"
                                  ],
                                sasKey:
                                  p.azureBlobFileSystemConfiguration?.[
                                    "sasKey"
                                  ],
                                blobfuseOptions:
                                  p.azureBlobFileSystemConfiguration?.[
                                    "blobfuseOptions"
                                  ],
                                relativeMountPath:
                                  p.azureBlobFileSystemConfiguration?.[
                                    "relativeMountPath"
                                  ],
                                identityReference: !p
                                  .azureBlobFileSystemConfiguration
                                  ?.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.azureBlobFileSystemConfiguration
                                          ?.identityReference?.["resourceId"],
                                    },
                              },
                        nfsMountConfiguration: !p.nfsMountConfiguration
                          ? undefined
                          : {
                              source: p.nfsMountConfiguration?.["source"],
                              relativeMountPath:
                                p.nfsMountConfiguration?.["relativeMountPath"],
                              mountOptions:
                                p.nfsMountConfiguration?.["mountOptions"],
                            },
                        cifsMountConfiguration: !p.cifsMountConfiguration
                          ? undefined
                          : {
                              username: p.cifsMountConfiguration?.["username"],
                              source: p.cifsMountConfiguration?.["source"],
                              relativeMountPath:
                                p.cifsMountConfiguration?.["relativeMountPath"],
                              mountOptions:
                                p.cifsMountConfiguration?.["mountOptions"],
                              password: p.cifsMountConfiguration?.["password"],
                            },
                        azureFileShareConfiguration:
                          !p.azureFileShareConfiguration
                            ? undefined
                            : {
                                accountName:
                                  p.azureFileShareConfiguration?.[
                                    "accountName"
                                  ],
                                azureFileUrl:
                                  p.azureFileShareConfiguration?.[
                                    "azureFileUrl"
                                  ],
                                accountKey:
                                  p.azureFileShareConfiguration?.["accountKey"],
                                relativeMountPath:
                                  p.azureFileShareConfiguration?.[
                                    "relativeMountPath"
                                  ],
                                mountOptions:
                                  p.azureFileShareConfiguration?.[
                                    "mountOptions"
                                  ],
                              },
                      };
                    }),
              identity: !p.identity
                ? undefined
                : {
                    type: p.identity?.["type"],
                    userAssignedIdentities:
                      p.identity?.["userAssignedIdentities"] === undefined
                        ? p.identity?.["userAssignedIdentities"]
                        : p.identity?.["userAssignedIdentities"].map(
                            (p: any) => {
                              return {
                                resourceId: p["resourceId"],
                                clientId: p["clientId"],
                                principalId: p["principalId"],
                              };
                            },
                          ),
                  },
              targetNodeCommunicationMode: p["targetNodeCommunicationMode"],
              currentNodeCommunicationMode: p["currentNodeCommunicationMode"],
            };
          }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists all of the Pools in the specified Account. */
export function listPools(
  context: Client,
  options: ListPoolsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchPool> {
  return buildPagedAsyncIterator(
    context,
    () => _listPoolsSend(context, options),
    _listPoolsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _deletePoolSend(
  context: Client,
  poolId: string,
  options: DeletePoolOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}", poolId)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _deletePoolDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
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
export async function deletePool(
  context: Client,
  poolId: string,
  options: DeletePoolOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deletePoolSend(context, poolId, options);
  return _deletePoolDeserialize(result);
}

export function _poolExistsSend(
  context: Client,
  poolId: string,
  options: PoolExistsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}", poolId)
    .head({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _poolExistsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "404"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Gets basic properties of a Pool. */
export async function poolExists(
  context: Client,
  poolId: string,
  options: PoolExistsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _poolExistsSend(context, poolId, options);
  return _poolExistsDeserialize(result);
}

export function _getPoolSend(
  context: Client,
  poolId: string,
  options: GetPoolOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}", poolId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
        $select: options?.$select,
        $expand: options?.$expand,
      },
    });
}

export async function _getPoolDeserialize(
  result: PathUncheckedResponse,
): Promise<BatchPool> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    displayName: result.body["displayName"],
    url: result.body["url"],
    eTag: result.body["eTag"],
    lastModified:
      result.body["lastModified"] !== undefined
        ? new Date(result.body["lastModified"])
        : undefined,
    creationTime:
      result.body["creationTime"] !== undefined
        ? new Date(result.body["creationTime"])
        : undefined,
    state: result.body["state"],
    stateTransitionTime:
      result.body["stateTransitionTime"] !== undefined
        ? new Date(result.body["stateTransitionTime"])
        : undefined,
    allocationState: result.body["allocationState"],
    allocationStateTransitionTime:
      result.body["allocationStateTransitionTime"] !== undefined
        ? new Date(result.body["allocationStateTransitionTime"])
        : undefined,
    vmSize: result.body["vmSize"],
    cloudServiceConfiguration: !result.body.cloudServiceConfiguration
      ? undefined
      : {
          osFamily: result.body.cloudServiceConfiguration?.["osFamily"],
          osVersion: result.body.cloudServiceConfiguration?.["osVersion"],
        },
    virtualMachineConfiguration: !result.body.virtualMachineConfiguration
      ? undefined
      : {
          imageReference: {
            publisher:
              result.body.virtualMachineConfiguration?.imageReference[
                "publisher"
              ],
            offer:
              result.body.virtualMachineConfiguration?.imageReference["offer"],
            sku: result.body.virtualMachineConfiguration?.imageReference["sku"],
            version:
              result.body.virtualMachineConfiguration?.imageReference[
                "version"
              ],
            virtualMachineImageId:
              result.body.virtualMachineConfiguration?.imageReference[
                "virtualMachineImageId"
              ],
            exactVersion:
              result.body.virtualMachineConfiguration?.imageReference[
                "exactVersion"
              ],
          },
          nodeAgentSkuId:
            result.body.virtualMachineConfiguration?.["nodeAgentSKUId"],
          windowsConfiguration: !result.body.virtualMachineConfiguration
            ?.windowsConfiguration
            ? undefined
            : {
                enableAutomaticUpdates:
                  result.body.virtualMachineConfiguration
                    ?.windowsConfiguration?.["enableAutomaticUpdates"],
              },
          dataDisks:
            result.body.virtualMachineConfiguration?.["dataDisks"] === undefined
              ? result.body.virtualMachineConfiguration?.["dataDisks"]
              : result.body.virtualMachineConfiguration?.["dataDisks"].map(
                  (p: any) => {
                    return {
                      lun: p["lun"],
                      caching: p["caching"],
                      diskSizeGb: p["diskSizeGB"],
                      storageAccountType: p["storageAccountType"],
                    };
                  },
                ),
          licenseType: result.body.virtualMachineConfiguration?.["licenseType"],
          containerConfiguration: !result.body.virtualMachineConfiguration
            ?.containerConfiguration
            ? undefined
            : {
                type: result.body.virtualMachineConfiguration
                  ?.containerConfiguration?.["type"],
                containerImageNames:
                  result.body.virtualMachineConfiguration
                    ?.containerConfiguration?.["containerImageNames"],
                containerRegistries:
                  result.body.virtualMachineConfiguration
                    ?.containerConfiguration?.["containerRegistries"] ===
                  undefined
                    ? result.body.virtualMachineConfiguration
                        ?.containerConfiguration?.["containerRegistries"]
                    : result.body.virtualMachineConfiguration?.containerConfiguration?.[
                        "containerRegistries"
                      ].map((p: any) => {
                        return {
                          username: p["username"],
                          password: p["password"],
                          registryServer: p["registryServer"],
                          identityReference: !p.identityReference
                            ? undefined
                            : {
                                resourceId: p.identityReference?.["resourceId"],
                              },
                        };
                      }),
              },
          diskEncryptionConfiguration: !result.body.virtualMachineConfiguration
            ?.diskEncryptionConfiguration
            ? undefined
            : {
                targets:
                  result.body.virtualMachineConfiguration
                    ?.diskEncryptionConfiguration?.["targets"],
              },
          nodePlacementConfiguration: !result.body.virtualMachineConfiguration
            ?.nodePlacementConfiguration
            ? undefined
            : {
                policy:
                  result.body.virtualMachineConfiguration
                    ?.nodePlacementConfiguration?.["policy"],
              },
          extensions:
            result.body.virtualMachineConfiguration?.["extensions"] ===
            undefined
              ? result.body.virtualMachineConfiguration?.["extensions"]
              : result.body.virtualMachineConfiguration?.["extensions"].map(
                  (p: any) => {
                    return {
                      name: p["name"],
                      publisher: p["publisher"],
                      type: p["type"],
                      typeHandlerVersion: p["typeHandlerVersion"],
                      autoUpgradeMinorVersion: p["autoUpgradeMinorVersion"],
                      enableAutomaticUpgrade: p["enableAutomaticUpgrade"],
                      settings: p["settings"],
                      protectedSettings: p["protectedSettings"],
                      provisionAfterExtensions: p["provisionAfterExtensions"],
                    };
                  },
                ),
          osDisk: !result.body.virtualMachineConfiguration?.osDisk
            ? undefined
            : {
                ephemeralOSDiskSettings: !result.body
                  .virtualMachineConfiguration?.osDisk?.ephemeralOSDiskSettings
                  ? undefined
                  : {
                      placement:
                        result.body.virtualMachineConfiguration?.osDisk
                          ?.ephemeralOSDiskSettings?.["placement"],
                    },
              },
        },
    resizeTimeout: result.body["resizeTimeout"],
    resizeErrors:
      result.body["resizeErrors"] === undefined
        ? result.body["resizeErrors"]
        : result.body["resizeErrors"].map((p: any) => {
            return {
              code: p["code"],
              message: p["message"],
              values:
                p["values"] === undefined
                  ? p["values"]
                  : p["values"].map((p: any) => {
                      return { name: p["name"], value: p["value"] };
                    }),
            };
          }),
    currentDedicatedNodes: result.body["currentDedicatedNodes"],
    currentLowPriorityNodes: result.body["currentLowPriorityNodes"],
    targetDedicatedNodes: result.body["targetDedicatedNodes"],
    targetLowPriorityNodes: result.body["targetLowPriorityNodes"],
    enableAutoScale: result.body["enableAutoScale"],
    autoScaleFormula: result.body["autoScaleFormula"],
    autoScaleEvaluationInterval: result.body["autoScaleEvaluationInterval"],
    autoScaleRun: !result.body.autoScaleRun
      ? undefined
      : {
          timestamp: new Date(result.body.autoScaleRun?.["timestamp"]),
          results: result.body.autoScaleRun?.["results"],
          error: !result.body.autoScaleRun?.error
            ? undefined
            : {
                code: result.body.autoScaleRun?.error?.["code"],
                message: result.body.autoScaleRun?.error?.["message"],
                values:
                  result.body.autoScaleRun?.error?.["values"] === undefined
                    ? result.body.autoScaleRun?.error?.["values"]
                    : result.body.autoScaleRun?.error?.["values"].map(
                        (p: any) => {
                          return { name: p["name"], value: p["value"] };
                        },
                      ),
              },
        },
    enableInterNodeCommunication: result.body["enableInterNodeCommunication"],
    networkConfiguration: !result.body.networkConfiguration
      ? undefined
      : {
          subnetId: result.body.networkConfiguration?.["subnetId"],
          dynamicVNetAssignmentScope:
            result.body.networkConfiguration?.["dynamicVNetAssignmentScope"],
          endpointConfiguration: !result.body.networkConfiguration
            ?.endpointConfiguration
            ? undefined
            : {
                inboundNatPools:
                  result.body.networkConfiguration?.endpointConfiguration?.[
                    "inboundNATPools"
                  ].map((p: any) => {
                    return {
                      name: p["name"],
                      protocol: p["protocol"],
                      backendPort: p["backendPort"],
                      frontendPortRangeStart: p["frontendPortRangeStart"],
                      frontendPortRangeEnd: p["frontendPortRangeEnd"],
                      networkSecurityGroupRules:
                        p["networkSecurityGroupRules"] === undefined
                          ? p["networkSecurityGroupRules"]
                          : p["networkSecurityGroupRules"].map((p: any) => {
                              return {
                                priority: p["priority"],
                                access: p["access"],
                                sourceAddressPrefix: p["sourceAddressPrefix"],
                                sourcePortRanges: p["sourcePortRanges"],
                              };
                            }),
                    };
                  }),
              },
          publicIpAddressConfiguration: !result.body.networkConfiguration
            ?.publicIPAddressConfiguration
            ? undefined
            : {
                IpAddressProvisioningType:
                  result.body.networkConfiguration
                    ?.publicIPAddressConfiguration?.["provision"],
                ipAddressIds:
                  result.body.networkConfiguration
                    ?.publicIPAddressConfiguration?.["ipAddressIds"],
              },
          enableAcceleratedNetworking:
            result.body.networkConfiguration?.["enableAcceleratedNetworking"],
        },
    startTask: !result.body.startTask
      ? undefined
      : {
          commandLine: result.body.startTask?.["commandLine"],
          containerSettings: !result.body.startTask?.containerSettings
            ? undefined
            : {
                containerRunOptions:
                  result.body.startTask?.containerSettings?.[
                    "containerRunOptions"
                  ],
                imageName:
                  result.body.startTask?.containerSettings?.["imageName"],
                registry: !result.body.startTask?.containerSettings?.registry
                  ? undefined
                  : {
                      username:
                        result.body.startTask?.containerSettings?.registry?.[
                          "username"
                        ],
                      password:
                        result.body.startTask?.containerSettings?.registry?.[
                          "password"
                        ],
                      registryServer:
                        result.body.startTask?.containerSettings?.registry?.[
                          "registryServer"
                        ],
                      identityReference: !result.body.startTask
                        ?.containerSettings?.registry?.identityReference
                        ? undefined
                        : {
                            resourceId:
                              result.body.startTask?.containerSettings?.registry
                                ?.identityReference?.["resourceId"],
                          },
                    },
                workingDirectory:
                  result.body.startTask?.containerSettings?.[
                    "workingDirectory"
                  ],
              },
          resourceFiles:
            result.body.startTask?.["resourceFiles"] === undefined
              ? result.body.startTask?.["resourceFiles"]
              : result.body.startTask?.["resourceFiles"].map((p: any) => {
                  return {
                    autoStorageContainerName: p["autoStorageContainerName"],
                    storageContainerUrl: p["storageContainerUrl"],
                    httpUrl: p["httpUrl"],
                    blobPrefix: p["blobPrefix"],
                    filePath: p["filePath"],
                    fileMode: p["fileMode"],
                    identityReference: !p.identityReference
                      ? undefined
                      : { resourceId: p.identityReference?.["resourceId"] },
                  };
                }),
          environmentSettings:
            result.body.startTask?.["environmentSettings"] === undefined
              ? result.body.startTask?.["environmentSettings"]
              : result.body.startTask?.["environmentSettings"].map((p: any) => {
                  return { name: p["name"], value: p["value"] };
                }),
          userIdentity: !result.body.startTask?.userIdentity
            ? undefined
            : {
                username: result.body.startTask?.userIdentity?.["username"],
                autoUser: !result.body.startTask?.userIdentity?.autoUser
                  ? undefined
                  : {
                      scope:
                        result.body.startTask?.userIdentity?.autoUser?.[
                          "scope"
                        ],
                      elevationLevel:
                        result.body.startTask?.userIdentity?.autoUser?.[
                          "elevationLevel"
                        ],
                    },
              },
          maxTaskRetryCount: result.body.startTask?.["maxTaskRetryCount"],
          waitForSuccess: result.body.startTask?.["waitForSuccess"],
        },
    certificateReferences:
      result.body["certificateReferences"] === undefined
        ? result.body["certificateReferences"]
        : result.body["certificateReferences"].map((p: any) => {
            return {
              thumbprint: p["thumbprint"],
              thumbprintAlgorithm: p["thumbprintAlgorithm"],
              storeLocation: p["storeLocation"],
              storeName: p["storeName"],
              visibility: p["visibility"],
            };
          }),
    applicationPackageReferences:
      result.body["applicationPackageReferences"] === undefined
        ? result.body["applicationPackageReferences"]
        : result.body["applicationPackageReferences"].map((p: any) => {
            return { applicationId: p["applicationId"], version: p["version"] };
          }),
    applicationLicenses: result.body["applicationLicenses"],
    taskSlotsPerNode: result.body["taskSlotsPerNode"],
    taskSchedulingPolicy: !result.body.taskSchedulingPolicy
      ? undefined
      : { nodeFillType: result.body.taskSchedulingPolicy?.["nodeFillType"] },
    userAccounts:
      result.body["userAccounts"] === undefined
        ? result.body["userAccounts"]
        : result.body["userAccounts"].map((p: any) => {
            return {
              name: p["name"],
              password: p["password"],
              elevationLevel: p["elevationLevel"],
              linuxUserConfiguration: !p.linuxUserConfiguration
                ? undefined
                : {
                    uid: p.linuxUserConfiguration?.["uid"],
                    gid: p.linuxUserConfiguration?.["gid"],
                    sshPrivateKey: p.linuxUserConfiguration?.["sshPrivateKey"],
                  },
              windowsUserConfiguration: !p.windowsUserConfiguration
                ? undefined
                : { loginMode: p.windowsUserConfiguration?.["loginMode"] },
            };
          }),
    metadata:
      result.body["metadata"] === undefined
        ? result.body["metadata"]
        : result.body["metadata"].map((p: any) => {
            return { name: p["name"], value: p["value"] };
          }),
    stats: !result.body.stats
      ? undefined
      : {
          url: result.body.stats?.["url"],
          startTime: new Date(result.body.stats?.["startTime"]),
          lastUpdateTime: new Date(result.body.stats?.["lastUpdateTime"]),
          usageStats: !result.body.stats?.usageStats
            ? undefined
            : {
                startTime: new Date(
                  result.body.stats?.usageStats?.["startTime"],
                ),
                lastUpdateTime: new Date(
                  result.body.stats?.usageStats?.["lastUpdateTime"],
                ),
                dedicatedCoreTime:
                  result.body.stats?.usageStats?.["dedicatedCoreTime"],
              },
          resourceStats: !result.body.stats?.resourceStats
            ? undefined
            : {
                startTime: new Date(
                  result.body.stats?.resourceStats?.["startTime"],
                ),
                lastUpdateTime: new Date(
                  result.body.stats?.resourceStats?.["lastUpdateTime"],
                ),
                avgCpuPercentage:
                  result.body.stats?.resourceStats?.["avgCPUPercentage"],
                avgMemoryGiB:
                  result.body.stats?.resourceStats?.["avgMemoryGiB"],
                peakMemoryGiB:
                  result.body.stats?.resourceStats?.["peakMemoryGiB"],
                avgDiskGiB: result.body.stats?.resourceStats?.["avgDiskGiB"],
                peakDiskGiB: result.body.stats?.resourceStats?.["peakDiskGiB"],
                diskReadIOps:
                  result.body.stats?.resourceStats?.["diskReadIOps"],
                diskWriteIOps:
                  result.body.stats?.resourceStats?.["diskWriteIOps"],
                diskReadGiB: result.body.stats?.resourceStats?.["diskReadGiB"],
                diskWriteGiB:
                  result.body.stats?.resourceStats?.["diskWriteGiB"],
                networkReadGiB:
                  result.body.stats?.resourceStats?.["networkReadGiB"],
                networkWriteGiB:
                  result.body.stats?.resourceStats?.["networkWriteGiB"],
              },
        },
    mountConfiguration:
      result.body["mountConfiguration"] === undefined
        ? result.body["mountConfiguration"]
        : result.body["mountConfiguration"].map((p: any) => {
            return {
              azureBlobFileSystemConfiguration:
                !p.azureBlobFileSystemConfiguration
                  ? undefined
                  : {
                      accountName:
                        p.azureBlobFileSystemConfiguration?.["accountName"],
                      containerName:
                        p.azureBlobFileSystemConfiguration?.["containerName"],
                      accountKey:
                        p.azureBlobFileSystemConfiguration?.["accountKey"],
                      sasKey: p.azureBlobFileSystemConfiguration?.["sasKey"],
                      blobfuseOptions:
                        p.azureBlobFileSystemConfiguration?.["blobfuseOptions"],
                      relativeMountPath:
                        p.azureBlobFileSystemConfiguration?.[
                          "relativeMountPath"
                        ],
                      identityReference: !p.azureBlobFileSystemConfiguration
                        ?.identityReference
                        ? undefined
                        : {
                            resourceId:
                              p.azureBlobFileSystemConfiguration
                                ?.identityReference?.["resourceId"],
                          },
                    },
              nfsMountConfiguration: !p.nfsMountConfiguration
                ? undefined
                : {
                    source: p.nfsMountConfiguration?.["source"],
                    relativeMountPath:
                      p.nfsMountConfiguration?.["relativeMountPath"],
                    mountOptions: p.nfsMountConfiguration?.["mountOptions"],
                  },
              cifsMountConfiguration: !p.cifsMountConfiguration
                ? undefined
                : {
                    username: p.cifsMountConfiguration?.["username"],
                    source: p.cifsMountConfiguration?.["source"],
                    relativeMountPath:
                      p.cifsMountConfiguration?.["relativeMountPath"],
                    mountOptions: p.cifsMountConfiguration?.["mountOptions"],
                    password: p.cifsMountConfiguration?.["password"],
                  },
              azureFileShareConfiguration: !p.azureFileShareConfiguration
                ? undefined
                : {
                    accountName: p.azureFileShareConfiguration?.["accountName"],
                    azureFileUrl:
                      p.azureFileShareConfiguration?.["azureFileUrl"],
                    accountKey: p.azureFileShareConfiguration?.["accountKey"],
                    relativeMountPath:
                      p.azureFileShareConfiguration?.["relativeMountPath"],
                    mountOptions:
                      p.azureFileShareConfiguration?.["mountOptions"],
                  },
            };
          }),
    identity: !result.body.identity
      ? undefined
      : {
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"] === undefined
              ? result.body.identity?.["userAssignedIdentities"]
              : result.body.identity?.["userAssignedIdentities"].map(
                  (p: any) => {
                    return {
                      resourceId: p["resourceId"],
                      clientId: p["clientId"],
                      principalId: p["principalId"],
                    };
                  },
                ),
        },
    targetNodeCommunicationMode: result.body["targetNodeCommunicationMode"],
    currentNodeCommunicationMode: result.body["currentNodeCommunicationMode"],
  };
}

/** Gets information about the specified Pool. */
export async function getPool(
  context: Client,
  poolId: string,
  options: GetPoolOptionalParams = { requestOptions: {} },
): Promise<BatchPool> {
  const result = await _getPoolSend(context, poolId, options);
  return _getPoolDeserialize(result);
}

export function _updatePoolSend(
  context: Client,
  poolId: string,
  body: BatchPoolUpdateOptions,
  options: UpdatePoolOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}", poolId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        startTask: !body.startTask
          ? body.startTask
          : startTaskSerializer(body.startTask),
        certificateReferences:
          body["certificateReferences"] === undefined
            ? body["certificateReferences"]
            : body["certificateReferences"].map(certificateReferenceSerializer),
        applicationPackageReferences:
          body["applicationPackageReferences"] === undefined
            ? body["applicationPackageReferences"]
            : body["applicationPackageReferences"].map(
                applicationPackageReferenceSerializer,
              ),
        metadata:
          body["metadata"] === undefined
            ? body["metadata"]
            : body["metadata"].map(metadataItemSerializer),
        targetNodeCommunicationMode: body["targetNodeCommunicationMode"],
      },
    });
}

export async function _updatePoolDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * This only replaces the Pool properties specified in the request. For example,
 * if the Pool has a StartTask associated with it, and a request does not specify
 * a StartTask element, then the Pool keeps the existing StartTask.
 */
export async function updatePool(
  context: Client,
  poolId: string,
  body: BatchPoolUpdateOptions,
  options: UpdatePoolOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _updatePoolSend(context, poolId, body, options);
  return _updatePoolDeserialize(result);
}

export function _disablePoolAutoScaleSend(
  context: Client,
  poolId: string,
  options: DisablePoolAutoScaleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/disableautoscale", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _disablePoolAutoScaleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Disables automatic scaling for a Pool. */
export async function disablePoolAutoScale(
  context: Client,
  poolId: string,
  options: DisablePoolAutoScaleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _disablePoolAutoScaleSend(context, poolId, options);
  return _disablePoolAutoScaleDeserialize(result);
}

export function _enablePoolAutoScaleSend(
  context: Client,
  poolId: string,
  body: BatchPoolEnableAutoScaleOptions,
  options: EnablePoolAutoScaleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/enableautoscale", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        autoScaleFormula: body["autoScaleFormula"],
        autoScaleEvaluationInterval: body["autoScaleEvaluationInterval"],
      },
    });
}

export async function _enablePoolAutoScaleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * You cannot enable automatic scaling on a Pool if a resize operation is in
 * progress on the Pool. If automatic scaling of the Pool is currently disabled,
 * you must specify a valid autoscale formula as part of the request. If automatic
 * scaling of the Pool is already enabled, you may specify a new autoscale formula
 * and/or a new evaluation interval. You cannot call this API for the same Pool
 * more than once every 30 seconds.
 */
export async function enablePoolAutoScale(
  context: Client,
  poolId: string,
  body: BatchPoolEnableAutoScaleOptions,
  options: EnablePoolAutoScaleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _enablePoolAutoScaleSend(context, poolId, body, options);
  return _enablePoolAutoScaleDeserialize(result);
}

export function _evaluatePoolAutoScaleSend(
  context: Client,
  poolId: string,
  body: BatchPoolEvaluateAutoScaleOptions,
  options: EvaluatePoolAutoScaleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/evaluateautoscale", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: { autoScaleFormula: body["autoScaleFormula"] },
    });
}

export async function _evaluatePoolAutoScaleDeserialize(
  result: PathUncheckedResponse,
): Promise<AutoScaleRun> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    timestamp: new Date(result.body["timestamp"]),
    results: result.body["results"],
    error: !result.body.error
      ? undefined
      : {
          code: result.body.error?.["code"],
          message: result.body.error?.["message"],
          values:
            result.body.error?.["values"] === undefined
              ? result.body.error?.["values"]
              : result.body.error?.["values"].map((p: any) => {
                  return { name: p["name"], value: p["value"] };
                }),
        },
  };
}

/**
 * This API is primarily for validating an autoscale formula, as it simply returns
 * the result without applying the formula to the Pool. The Pool must have auto
 * scaling enabled in order to evaluate a formula.
 */
export async function evaluatePoolAutoScale(
  context: Client,
  poolId: string,
  body: BatchPoolEvaluateAutoScaleOptions,
  options: EvaluatePoolAutoScaleOptionalParams = { requestOptions: {} },
): Promise<AutoScaleRun> {
  const result = await _evaluatePoolAutoScaleSend(
    context,
    poolId,
    body,
    options,
  );
  return _evaluatePoolAutoScaleDeserialize(result);
}

export function _resizePoolSend(
  context: Client,
  poolId: string,
  body: BatchPoolResizeOptions,
  options: ResizePoolOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/resize", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        targetDedicatedNodes: body["targetDedicatedNodes"],
        targetLowPriorityNodes: body["targetLowPriorityNodes"],
        resizeTimeout: body["resizeTimeout"],
        nodeDeallocationOption: body["nodeDeallocationOption"],
      },
    });
}

export async function _resizePoolDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
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
export async function resizePool(
  context: Client,
  poolId: string,
  body: BatchPoolResizeOptions,
  options: ResizePoolOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _resizePoolSend(context, poolId, body, options);
  return _resizePoolDeserialize(result);
}

export function _stopPoolResizeSend(
  context: Client,
  poolId: string,
  options: StopPoolResizeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/stopresize", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _stopPoolResizeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
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
export async function stopPoolResize(
  context: Client,
  poolId: string,
  options: StopPoolResizeOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stopPoolResizeSend(context, poolId, options);
  return _stopPoolResizeDeserialize(result);
}

export function _replacePoolPropertiesSend(
  context: Client,
  poolId: string,
  body: BatchPoolReplaceOptions,
  options: ReplacePoolPropertiesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/updateproperties", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        startTask: !body.startTask
          ? body.startTask
          : startTaskSerializer(body.startTask),
        certificateReferences: body["certificateReferences"].map(
          certificateReferenceSerializer,
        ),
        applicationPackageReferences: body["applicationPackageReferences"].map(
          applicationPackageReferenceSerializer,
        ),
        metadata: body["metadata"].map(metadataItemSerializer),
        targetNodeCommunicationMode: body["targetNodeCommunicationMode"],
      },
    });
}

export async function _replacePoolPropertiesDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * This fully replaces all the updatable properties of the Pool. For example, if
 * the Pool has a StartTask associated with it and if StartTask is not specified
 * with this request, then the Batch service will remove the existing StartTask.
 */
export async function replacePoolProperties(
  context: Client,
  poolId: string,
  body: BatchPoolReplaceOptions,
  options: ReplacePoolPropertiesOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _replacePoolPropertiesSend(
    context,
    poolId,
    body,
    options,
  );
  return _replacePoolPropertiesDeserialize(result);
}

export function _removeNodesSend(
  context: Client,
  poolId: string,
  body: NodeRemoveOptions,
  options: RemoveNodesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/removenodes", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        nodeList: body["nodeList"],
        resizeTimeout: body["resizeTimeout"],
        nodeDeallocationOption: body["nodeDeallocationOption"],
      },
    });
}

export async function _removeNodesDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * This operation can only run when the allocation state of the Pool is steady.
 * When this operation runs, the allocation state changes from steady to resizing.
 * Each request may remove up to 100 nodes.
 */
export async function removeNodes(
  context: Client,
  poolId: string,
  body: NodeRemoveOptions,
  options: RemoveNodesOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _removeNodesSend(context, poolId, body, options);
  return _removeNodesDeserialize(result);
}

export function _listSupportedImagesSend(
  context: Client,
  options: ListSupportedImagesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/supportedimages")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxresults: options?.maxresults,
        timeOut: options?.timeOutInSeconds,
        $filter: options?.$filter,
      },
    });
}

export async function _listSupportedImagesDeserialize(
  result: PathUncheckedResponse,
): Promise<_AccountListSupportedImagesResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              nodeAgentSkuId: p["nodeAgentSKUId"],
              imageReference: {
                publisher: p.imageReference["publisher"],
                offer: p.imageReference["offer"],
                sku: p.imageReference["sku"],
                version: p.imageReference["version"],
                virtualMachineImageId:
                  p.imageReference["virtualMachineImageId"],
                exactVersion: p.imageReference["exactVersion"],
              },
              osType: p["osType"],
              capabilities: p["capabilities"],
              batchSupportEndOfLife:
                p["batchSupportEndOfLife"] !== undefined
                  ? new Date(p["batchSupportEndOfLife"])
                  : undefined,
              verificationType: p["verificationType"],
            };
          }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists all Virtual Machine Images supported by the Azure Batch service. */
export function listSupportedImages(
  context: Client,
  options: ListSupportedImagesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ImageInformation> {
  return buildPagedAsyncIterator(
    context,
    () => _listSupportedImagesSend(context, options),
    _listSupportedImagesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _listPoolNodeCountsSend(
  context: Client,
  options: ListPoolNodeCountsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/nodecounts")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        maxresults: options?.maxresults,
        timeOut: options?.timeOutInSeconds,
        $filter: options?.$filter,
      },
    });
}

export async function _listPoolNodeCountsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PoolNodeCountsListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              poolId: p["poolId"],
              dedicated: !p.dedicated
                ? undefined
                : {
                    creating: p.dedicated?.["creating"],
                    idle: p.dedicated?.["idle"],
                    offline: p.dedicated?.["offline"],
                    preempted: p.dedicated?.["preempted"],
                    rebooting: p.dedicated?.["rebooting"],
                    reimaging: p.dedicated?.["reimaging"],
                    running: p.dedicated?.["running"],
                    starting: p.dedicated?.["starting"],
                    startTaskFailed: p.dedicated?.["startTaskFailed"],
                    leavingPool: p.dedicated?.["leavingPool"],
                    unknown: p.dedicated?.["unknown"],
                    unusable: p.dedicated?.["unusable"],
                    waitingForStartTask: p.dedicated?.["waitingForStartTask"],
                    total: p.dedicated?.["total"],
                  },
              lowPriority: !p.lowPriority
                ? undefined
                : {
                    creating: p.lowPriority?.["creating"],
                    idle: p.lowPriority?.["idle"],
                    offline: p.lowPriority?.["offline"],
                    preempted: p.lowPriority?.["preempted"],
                    rebooting: p.lowPriority?.["rebooting"],
                    reimaging: p.lowPriority?.["reimaging"],
                    running: p.lowPriority?.["running"],
                    starting: p.lowPriority?.["starting"],
                    startTaskFailed: p.lowPriority?.["startTaskFailed"],
                    leavingPool: p.lowPriority?.["leavingPool"],
                    unknown: p.lowPriority?.["unknown"],
                    unusable: p.lowPriority?.["unusable"],
                    waitingForStartTask: p.lowPriority?.["waitingForStartTask"],
                    total: p.lowPriority?.["total"],
                  },
            };
          }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/**
 * Gets the number of Compute Nodes in each state, grouped by Pool. Note that the
 * numbers returned may not always be up to date. If you need exact node counts,
 * use a list query.
 */
export function listPoolNodeCounts(
  context: Client,
  options: ListPoolNodeCountsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<PoolNodeCounts> {
  return buildPagedAsyncIterator(
    context,
    () => _listPoolNodeCountsSend(context, options),
    _listPoolNodeCountsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _deleteJobSend(
  context: Client,
  jobId: string,
  options: DeleteJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}", jobId)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _deleteJobDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
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
export async function deleteJob(
  context: Client,
  jobId: string,
  options: DeleteJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteJobSend(context, jobId, options);
  return _deleteJobDeserialize(result);
}

export function _getJobSend(
  context: Client,
  jobId: string,
  options: GetJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}", jobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
        $select: options?.$select,
        $expand: options?.$expand,
      },
    });
}

export async function _getJobDeserialize(
  result: PathUncheckedResponse,
): Promise<BatchJob> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    displayName: result.body["displayName"],
    usesTaskDependencies: result.body["usesTaskDependencies"],
    url: result.body["url"],
    eTag: result.body["eTag"],
    lastModified:
      result.body["lastModified"] !== undefined
        ? new Date(result.body["lastModified"])
        : undefined,
    creationTime:
      result.body["creationTime"] !== undefined
        ? new Date(result.body["creationTime"])
        : undefined,
    state: result.body["state"],
    stateTransitionTime:
      result.body["stateTransitionTime"] !== undefined
        ? new Date(result.body["stateTransitionTime"])
        : undefined,
    previousState: result.body["previousState"],
    previousStateTransitionTime:
      result.body["previousStateTransitionTime"] !== undefined
        ? new Date(result.body["previousStateTransitionTime"])
        : undefined,
    priority: result.body["priority"],
    allowTaskPreemption: result.body["allowTaskPreemption"],
    maxParallelTasks: result.body["maxParallelTasks"],
    constraints: !result.body.constraints
      ? undefined
      : {
          maxWallClockTime: result.body.constraints?.["maxWallClockTime"],
          maxTaskRetryCount: result.body.constraints?.["maxTaskRetryCount"],
        },
    jobManagerTask: !result.body.jobManagerTask
      ? undefined
      : {
          id: result.body.jobManagerTask?.["id"],
          displayName: result.body.jobManagerTask?.["displayName"],
          commandLine: result.body.jobManagerTask?.["commandLine"],
          containerSettings: !result.body.jobManagerTask?.containerSettings
            ? undefined
            : {
                containerRunOptions:
                  result.body.jobManagerTask?.containerSettings?.[
                    "containerRunOptions"
                  ],
                imageName:
                  result.body.jobManagerTask?.containerSettings?.["imageName"],
                registry: !result.body.jobManagerTask?.containerSettings
                  ?.registry
                  ? undefined
                  : {
                      username:
                        result.body.jobManagerTask?.containerSettings
                          ?.registry?.["username"],
                      password:
                        result.body.jobManagerTask?.containerSettings
                          ?.registry?.["password"],
                      registryServer:
                        result.body.jobManagerTask?.containerSettings
                          ?.registry?.["registryServer"],
                      identityReference: !result.body.jobManagerTask
                        ?.containerSettings?.registry?.identityReference
                        ? undefined
                        : {
                            resourceId:
                              result.body.jobManagerTask?.containerSettings
                                ?.registry?.identityReference?.["resourceId"],
                          },
                    },
                workingDirectory:
                  result.body.jobManagerTask?.containerSettings?.[
                    "workingDirectory"
                  ],
              },
          resourceFiles:
            result.body.jobManagerTask?.["resourceFiles"] === undefined
              ? result.body.jobManagerTask?.["resourceFiles"]
              : result.body.jobManagerTask?.["resourceFiles"].map((p: any) => {
                  return {
                    autoStorageContainerName: p["autoStorageContainerName"],
                    storageContainerUrl: p["storageContainerUrl"],
                    httpUrl: p["httpUrl"],
                    blobPrefix: p["blobPrefix"],
                    filePath: p["filePath"],
                    fileMode: p["fileMode"],
                    identityReference: !p.identityReference
                      ? undefined
                      : { resourceId: p.identityReference?.["resourceId"] },
                  };
                }),
          outputFiles:
            result.body.jobManagerTask?.["outputFiles"] === undefined
              ? result.body.jobManagerTask?.["outputFiles"]
              : result.body.jobManagerTask?.["outputFiles"].map((p: any) => {
                  return {
                    filePattern: p["filePattern"],
                    destination: {
                      container: !p.destination.container
                        ? undefined
                        : {
                            path: p.destination.container?.["path"],
                            containerUrl:
                              p.destination.container?.["containerUrl"],
                            identityReference: !p.destination.container
                              ?.identityReference
                              ? undefined
                              : {
                                  resourceId:
                                    p.destination.container
                                      ?.identityReference?.["resourceId"],
                                },
                            uploadHeaders:
                              p.destination.container?.["uploadHeaders"] ===
                              undefined
                                ? p.destination.container?.["uploadHeaders"]
                                : p.destination.container?.[
                                    "uploadHeaders"
                                  ].map((p: any) => {
                                    return {
                                      name: p["name"],
                                      value: p["value"],
                                    };
                                  }),
                          },
                    },
                    uploadOptions: {
                      uploadCondition: p.uploadOptions["uploadCondition"],
                    },
                  };
                }),
          environmentSettings:
            result.body.jobManagerTask?.["environmentSettings"] === undefined
              ? result.body.jobManagerTask?.["environmentSettings"]
              : result.body.jobManagerTask?.["environmentSettings"].map(
                  (p: any) => {
                    return { name: p["name"], value: p["value"] };
                  },
                ),
          constraints: !result.body.jobManagerTask?.constraints
            ? undefined
            : {
                maxWallClockTime:
                  result.body.jobManagerTask?.constraints?.["maxWallClockTime"],
                retentionTime:
                  result.body.jobManagerTask?.constraints?.["retentionTime"],
                maxTaskRetryCount:
                  result.body.jobManagerTask?.constraints?.[
                    "maxTaskRetryCount"
                  ],
              },
          requiredSlots: result.body.jobManagerTask?.["requiredSlots"],
          killJobOnCompletion:
            result.body.jobManagerTask?.["killJobOnCompletion"],
          userIdentity: !result.body.jobManagerTask?.userIdentity
            ? undefined
            : {
                username:
                  result.body.jobManagerTask?.userIdentity?.["username"],
                autoUser: !result.body.jobManagerTask?.userIdentity?.autoUser
                  ? undefined
                  : {
                      scope:
                        result.body.jobManagerTask?.userIdentity?.autoUser?.[
                          "scope"
                        ],
                      elevationLevel:
                        result.body.jobManagerTask?.userIdentity?.autoUser?.[
                          "elevationLevel"
                        ],
                    },
              },
          runExclusive: result.body.jobManagerTask?.["runExclusive"],
          applicationPackageReferences:
            result.body.jobManagerTask?.["applicationPackageReferences"] ===
            undefined
              ? result.body.jobManagerTask?.["applicationPackageReferences"]
              : result.body.jobManagerTask?.[
                  "applicationPackageReferences"
                ].map((p: any) => {
                  return {
                    applicationId: p["applicationId"],
                    version: p["version"],
                  };
                }),
          authenticationTokenSettings: !result.body.jobManagerTask
            ?.authenticationTokenSettings
            ? undefined
            : {
                access:
                  result.body.jobManagerTask?.authenticationTokenSettings?.[
                    "access"
                  ],
              },
          allowLowPriorityNode:
            result.body.jobManagerTask?.["allowLowPriorityNode"],
        },
    jobPreparationTask: !result.body.jobPreparationTask
      ? undefined
      : {
          id: result.body.jobPreparationTask?.["id"],
          commandLine: result.body.jobPreparationTask?.["commandLine"],
          containerSettings: !result.body.jobPreparationTask?.containerSettings
            ? undefined
            : {
                containerRunOptions:
                  result.body.jobPreparationTask?.containerSettings?.[
                    "containerRunOptions"
                  ],
                imageName:
                  result.body.jobPreparationTask?.containerSettings?.[
                    "imageName"
                  ],
                registry: !result.body.jobPreparationTask?.containerSettings
                  ?.registry
                  ? undefined
                  : {
                      username:
                        result.body.jobPreparationTask?.containerSettings
                          ?.registry?.["username"],
                      password:
                        result.body.jobPreparationTask?.containerSettings
                          ?.registry?.["password"],
                      registryServer:
                        result.body.jobPreparationTask?.containerSettings
                          ?.registry?.["registryServer"],
                      identityReference: !result.body.jobPreparationTask
                        ?.containerSettings?.registry?.identityReference
                        ? undefined
                        : {
                            resourceId:
                              result.body.jobPreparationTask?.containerSettings
                                ?.registry?.identityReference?.["resourceId"],
                          },
                    },
                workingDirectory:
                  result.body.jobPreparationTask?.containerSettings?.[
                    "workingDirectory"
                  ],
              },
          resourceFiles:
            result.body.jobPreparationTask?.["resourceFiles"] === undefined
              ? result.body.jobPreparationTask?.["resourceFiles"]
              : result.body.jobPreparationTask?.["resourceFiles"].map(
                  (p: any) => {
                    return {
                      autoStorageContainerName: p["autoStorageContainerName"],
                      storageContainerUrl: p["storageContainerUrl"],
                      httpUrl: p["httpUrl"],
                      blobPrefix: p["blobPrefix"],
                      filePath: p["filePath"],
                      fileMode: p["fileMode"],
                      identityReference: !p.identityReference
                        ? undefined
                        : { resourceId: p.identityReference?.["resourceId"] },
                    };
                  },
                ),
          environmentSettings:
            result.body.jobPreparationTask?.["environmentSettings"] ===
            undefined
              ? result.body.jobPreparationTask?.["environmentSettings"]
              : result.body.jobPreparationTask?.["environmentSettings"].map(
                  (p: any) => {
                    return { name: p["name"], value: p["value"] };
                  },
                ),
          constraints: !result.body.jobPreparationTask?.constraints
            ? undefined
            : {
                maxWallClockTime:
                  result.body.jobPreparationTask?.constraints?.[
                    "maxWallClockTime"
                  ],
                retentionTime:
                  result.body.jobPreparationTask?.constraints?.[
                    "retentionTime"
                  ],
                maxTaskRetryCount:
                  result.body.jobPreparationTask?.constraints?.[
                    "maxTaskRetryCount"
                  ],
              },
          waitForSuccess: result.body.jobPreparationTask?.["waitForSuccess"],
          userIdentity: !result.body.jobPreparationTask?.userIdentity
            ? undefined
            : {
                username:
                  result.body.jobPreparationTask?.userIdentity?.["username"],
                autoUser: !result.body.jobPreparationTask?.userIdentity
                  ?.autoUser
                  ? undefined
                  : {
                      scope:
                        result.body.jobPreparationTask?.userIdentity
                          ?.autoUser?.["scope"],
                      elevationLevel:
                        result.body.jobPreparationTask?.userIdentity
                          ?.autoUser?.["elevationLevel"],
                    },
              },
          rerunOnNodeRebootAfterSuccess:
            result.body.jobPreparationTask?.["rerunOnNodeRebootAfterSuccess"],
        },
    jobReleaseTask: !result.body.jobReleaseTask
      ? undefined
      : {
          id: result.body.jobReleaseTask?.["id"],
          commandLine: result.body.jobReleaseTask?.["commandLine"],
          containerSettings: !result.body.jobReleaseTask?.containerSettings
            ? undefined
            : {
                containerRunOptions:
                  result.body.jobReleaseTask?.containerSettings?.[
                    "containerRunOptions"
                  ],
                imageName:
                  result.body.jobReleaseTask?.containerSettings?.["imageName"],
                registry: !result.body.jobReleaseTask?.containerSettings
                  ?.registry
                  ? undefined
                  : {
                      username:
                        result.body.jobReleaseTask?.containerSettings
                          ?.registry?.["username"],
                      password:
                        result.body.jobReleaseTask?.containerSettings
                          ?.registry?.["password"],
                      registryServer:
                        result.body.jobReleaseTask?.containerSettings
                          ?.registry?.["registryServer"],
                      identityReference: !result.body.jobReleaseTask
                        ?.containerSettings?.registry?.identityReference
                        ? undefined
                        : {
                            resourceId:
                              result.body.jobReleaseTask?.containerSettings
                                ?.registry?.identityReference?.["resourceId"],
                          },
                    },
                workingDirectory:
                  result.body.jobReleaseTask?.containerSettings?.[
                    "workingDirectory"
                  ],
              },
          resourceFiles:
            result.body.jobReleaseTask?.["resourceFiles"] === undefined
              ? result.body.jobReleaseTask?.["resourceFiles"]
              : result.body.jobReleaseTask?.["resourceFiles"].map((p: any) => {
                  return {
                    autoStorageContainerName: p["autoStorageContainerName"],
                    storageContainerUrl: p["storageContainerUrl"],
                    httpUrl: p["httpUrl"],
                    blobPrefix: p["blobPrefix"],
                    filePath: p["filePath"],
                    fileMode: p["fileMode"],
                    identityReference: !p.identityReference
                      ? undefined
                      : { resourceId: p.identityReference?.["resourceId"] },
                  };
                }),
          environmentSettings:
            result.body.jobReleaseTask?.["environmentSettings"] === undefined
              ? result.body.jobReleaseTask?.["environmentSettings"]
              : result.body.jobReleaseTask?.["environmentSettings"].map(
                  (p: any) => {
                    return { name: p["name"], value: p["value"] };
                  },
                ),
          maxWallClockTime: result.body.jobReleaseTask?.["maxWallClockTime"],
          retentionTime: result.body.jobReleaseTask?.["retentionTime"],
          userIdentity: !result.body.jobReleaseTask?.userIdentity
            ? undefined
            : {
                username:
                  result.body.jobReleaseTask?.userIdentity?.["username"],
                autoUser: !result.body.jobReleaseTask?.userIdentity?.autoUser
                  ? undefined
                  : {
                      scope:
                        result.body.jobReleaseTask?.userIdentity?.autoUser?.[
                          "scope"
                        ],
                      elevationLevel:
                        result.body.jobReleaseTask?.userIdentity?.autoUser?.[
                          "elevationLevel"
                        ],
                    },
              },
        },
    commonEnvironmentSettings:
      result.body["commonEnvironmentSettings"] === undefined
        ? result.body["commonEnvironmentSettings"]
        : result.body["commonEnvironmentSettings"].map((p: any) => {
            return { name: p["name"], value: p["value"] };
          }),
    poolInfo: {
      poolId: result.body.poolInfo["poolId"],
      autoPoolSpecification: !result.body.poolInfo.autoPoolSpecification
        ? undefined
        : {
            autoPoolIdPrefix:
              result.body.poolInfo.autoPoolSpecification?.["autoPoolIdPrefix"],
            poolLifetimeOption:
              result.body.poolInfo.autoPoolSpecification?.[
                "poolLifetimeOption"
              ],
            keepAlive:
              result.body.poolInfo.autoPoolSpecification?.["keepAlive"],
            pool: !result.body.poolInfo.autoPoolSpecification?.pool
              ? undefined
              : {
                  displayName:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "displayName"
                    ],
                  vmSize:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "vmSize"
                    ],
                  cloudServiceConfiguration: !result.body.poolInfo
                    .autoPoolSpecification?.pool?.cloudServiceConfiguration
                    ? undefined
                    : {
                        osFamily:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.cloudServiceConfiguration?.["osFamily"],
                        osVersion:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.cloudServiceConfiguration?.["osVersion"],
                      },
                  virtualMachineConfiguration: !result.body.poolInfo
                    .autoPoolSpecification?.pool?.virtualMachineConfiguration
                    ? undefined
                    : {
                        imageReference: {
                          publisher:
                            result.body.poolInfo.autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.imageReference[
                              "publisher"
                            ],
                          offer:
                            result.body.poolInfo.autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.imageReference[
                              "offer"
                            ],
                          sku: result.body.poolInfo.autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration?.imageReference[
                            "sku"
                          ],
                          version:
                            result.body.poolInfo.autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.imageReference[
                              "version"
                            ],
                          virtualMachineImageId:
                            result.body.poolInfo.autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.imageReference[
                              "virtualMachineImageId"
                            ],
                          exactVersion:
                            result.body.poolInfo.autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.imageReference[
                              "exactVersion"
                            ],
                        },
                        nodeAgentSkuId:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration?.["nodeAgentSKUId"],
                        windowsConfiguration: !result.body.poolInfo
                          .autoPoolSpecification?.pool
                          ?.virtualMachineConfiguration?.windowsConfiguration
                          ? undefined
                          : {
                              enableAutomaticUpdates:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.windowsConfiguration?.[
                                  "enableAutomaticUpdates"
                                ],
                            },
                        dataDisks:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration?.["dataDisks"] ===
                          undefined
                            ? result.body.poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.["dataDisks"]
                            : result.body.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                "dataDisks"
                              ].map((p: any) => {
                                return {
                                  lun: p["lun"],
                                  caching: p["caching"],
                                  diskSizeGb: p["diskSizeGB"],
                                  storageAccountType: p["storageAccountType"],
                                };
                              }),
                        licenseType:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration?.["licenseType"],
                        containerConfiguration: !result.body.poolInfo
                          .autoPoolSpecification?.pool
                          ?.virtualMachineConfiguration?.containerConfiguration
                          ? undefined
                          : {
                              type: result.body.poolInfo.autoPoolSpecification
                                ?.pool?.virtualMachineConfiguration
                                ?.containerConfiguration?.["type"],
                              containerImageNames:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.containerConfiguration?.[
                                  "containerImageNames"
                                ],
                              containerRegistries:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.containerConfiguration?.[
                                  "containerRegistries"
                                ] === undefined
                                  ? result.body.poolInfo.autoPoolSpecification
                                      ?.pool?.virtualMachineConfiguration
                                      ?.containerConfiguration?.[
                                      "containerRegistries"
                                    ]
                                  : result.body.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
                                      "containerRegistries"
                                    ].map((p: any) => {
                                      return {
                                        username: p["username"],
                                        password: p["password"],
                                        registryServer: p["registryServer"],
                                        identityReference: !p.identityReference
                                          ? undefined
                                          : {
                                              resourceId:
                                                p.identityReference?.[
                                                  "resourceId"
                                                ],
                                            },
                                      };
                                    }),
                            },
                        diskEncryptionConfiguration: !result.body.poolInfo
                          .autoPoolSpecification?.pool
                          ?.virtualMachineConfiguration
                          ?.diskEncryptionConfiguration
                          ? undefined
                          : {
                              targets:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.diskEncryptionConfiguration?.["targets"],
                            },
                        nodePlacementConfiguration: !result.body.poolInfo
                          .autoPoolSpecification?.pool
                          ?.virtualMachineConfiguration
                          ?.nodePlacementConfiguration
                          ? undefined
                          : {
                              policy:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.nodePlacementConfiguration?.["policy"],
                            },
                        extensions:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration?.["extensions"] ===
                          undefined
                            ? result.body.poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.["extensions"]
                            : result.body.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                "extensions"
                              ].map((p: any) => {
                                return {
                                  name: p["name"],
                                  publisher: p["publisher"],
                                  type: p["type"],
                                  typeHandlerVersion: p["typeHandlerVersion"],
                                  autoUpgradeMinorVersion:
                                    p["autoUpgradeMinorVersion"],
                                  enableAutomaticUpgrade:
                                    p["enableAutomaticUpgrade"],
                                  settings: p["settings"],
                                  protectedSettings: p["protectedSettings"],
                                  provisionAfterExtensions:
                                    p["provisionAfterExtensions"],
                                };
                              }),
                        osDisk: !result.body.poolInfo.autoPoolSpecification
                          ?.pool?.virtualMachineConfiguration?.osDisk
                          ? undefined
                          : {
                              ephemeralOSDiskSettings: !result.body.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.osDisk
                                ?.ephemeralOSDiskSettings
                                ? undefined
                                : {
                                    placement:
                                      result.body.poolInfo.autoPoolSpecification
                                        ?.pool?.virtualMachineConfiguration
                                        ?.osDisk?.ephemeralOSDiskSettings?.[
                                        "placement"
                                      ],
                                  },
                            },
                      },
                  taskSlotsPerNode:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "taskSlotsPerNode"
                    ],
                  taskSchedulingPolicy: !result.body.poolInfo
                    .autoPoolSpecification?.pool?.taskSchedulingPolicy
                    ? undefined
                    : {
                        nodeFillType:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.taskSchedulingPolicy?.["nodeFillType"],
                      },
                  resizeTimeout:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "resizeTimeout"
                    ],
                  targetDedicatedNodes:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "targetDedicatedNodes"
                    ],
                  targetLowPriorityNodes:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "targetLowPriorityNodes"
                    ],
                  enableAutoScale:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "enableAutoScale"
                    ],
                  autoScaleFormula:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "autoScaleFormula"
                    ],
                  autoScaleEvaluationInterval:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "autoScaleEvaluationInterval"
                    ],
                  enableInterNodeCommunication:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "enableInterNodeCommunication"
                    ],
                  networkConfiguration: !result.body.poolInfo
                    .autoPoolSpecification?.pool?.networkConfiguration
                    ? undefined
                    : {
                        subnetId:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.networkConfiguration?.["subnetId"],
                        dynamicVNetAssignmentScope:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.networkConfiguration?.[
                            "dynamicVNetAssignmentScope"
                          ],
                        endpointConfiguration: !result.body.poolInfo
                          .autoPoolSpecification?.pool?.networkConfiguration
                          ?.endpointConfiguration
                          ? undefined
                          : {
                              inboundNatPools:
                                result.body.poolInfo.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
                                  "inboundNATPools"
                                ].map((p: any) => {
                                  return {
                                    name: p["name"],
                                    protocol: p["protocol"],
                                    backendPort: p["backendPort"],
                                    frontendPortRangeStart:
                                      p["frontendPortRangeStart"],
                                    frontendPortRangeEnd:
                                      p["frontendPortRangeEnd"],
                                    networkSecurityGroupRules:
                                      p["networkSecurityGroupRules"] ===
                                      undefined
                                        ? p["networkSecurityGroupRules"]
                                        : p["networkSecurityGroupRules"].map(
                                            (p: any) => {
                                              return {
                                                priority: p["priority"],
                                                access: p["access"],
                                                sourceAddressPrefix:
                                                  p["sourceAddressPrefix"],
                                                sourcePortRanges:
                                                  p["sourcePortRanges"],
                                              };
                                            },
                                          ),
                                  };
                                }),
                            },
                        publicIpAddressConfiguration: !result.body.poolInfo
                          .autoPoolSpecification?.pool?.networkConfiguration
                          ?.publicIPAddressConfiguration
                          ? undefined
                          : {
                              IpAddressProvisioningType:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.networkConfiguration
                                  ?.publicIPAddressConfiguration?.["provision"],
                              ipAddressIds:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.networkConfiguration
                                  ?.publicIPAddressConfiguration?.[
                                  "ipAddressIds"
                                ],
                            },
                        enableAcceleratedNetworking:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.networkConfiguration?.[
                            "enableAcceleratedNetworking"
                          ],
                      },
                  startTask: !result.body.poolInfo.autoPoolSpecification?.pool
                    ?.startTask
                    ? undefined
                    : {
                        commandLine:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.startTask?.["commandLine"],
                        containerSettings: !result.body.poolInfo
                          .autoPoolSpecification?.pool?.startTask
                          ?.containerSettings
                          ? undefined
                          : {
                              containerRunOptions:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.containerSettings?.[
                                  "containerRunOptions"
                                ],
                              imageName:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.containerSettings?.["imageName"],
                              registry: !result.body.poolInfo
                                .autoPoolSpecification?.pool?.startTask
                                ?.containerSettings?.registry
                                ? undefined
                                : {
                                    username:
                                      result.body.poolInfo.autoPoolSpecification
                                        ?.pool?.startTask?.containerSettings
                                        ?.registry?.["username"],
                                    password:
                                      result.body.poolInfo.autoPoolSpecification
                                        ?.pool?.startTask?.containerSettings
                                        ?.registry?.["password"],
                                    registryServer:
                                      result.body.poolInfo.autoPoolSpecification
                                        ?.pool?.startTask?.containerSettings
                                        ?.registry?.["registryServer"],
                                    identityReference: !result.body.poolInfo
                                      .autoPoolSpecification?.pool?.startTask
                                      ?.containerSettings?.registry
                                      ?.identityReference
                                      ? undefined
                                      : {
                                          resourceId:
                                            result.body.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.containerSettings
                                              ?.registry?.identityReference?.[
                                              "resourceId"
                                            ],
                                        },
                                  },
                              workingDirectory:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.containerSettings?.[
                                  "workingDirectory"
                                ],
                            },
                        resourceFiles:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.startTask?.["resourceFiles"] === undefined
                            ? result.body.poolInfo.autoPoolSpecification?.pool
                                ?.startTask?.["resourceFiles"]
                            : result.body.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                "resourceFiles"
                              ].map((p: any) => {
                                return {
                                  autoStorageContainerName:
                                    p["autoStorageContainerName"],
                                  storageContainerUrl: p["storageContainerUrl"],
                                  httpUrl: p["httpUrl"],
                                  blobPrefix: p["blobPrefix"],
                                  filePath: p["filePath"],
                                  fileMode: p["fileMode"],
                                  identityReference: !p.identityReference
                                    ? undefined
                                    : {
                                        resourceId:
                                          p.identityReference?.["resourceId"],
                                      },
                                };
                              }),
                        environmentSettings:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.startTask?.["environmentSettings"] === undefined
                            ? result.body.poolInfo.autoPoolSpecification?.pool
                                ?.startTask?.["environmentSettings"]
                            : result.body.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                "environmentSettings"
                              ].map((p: any) => {
                                return { name: p["name"], value: p["value"] };
                              }),
                        userIdentity: !result.body.poolInfo
                          .autoPoolSpecification?.pool?.startTask?.userIdentity
                          ? undefined
                          : {
                              username:
                                result.body.poolInfo.autoPoolSpecification?.pool
                                  ?.startTask?.userIdentity?.["username"],
                              autoUser: !result.body.poolInfo
                                .autoPoolSpecification?.pool?.startTask
                                ?.userIdentity?.autoUser
                                ? undefined
                                : {
                                    scope:
                                      result.body.poolInfo.autoPoolSpecification
                                        ?.pool?.startTask?.userIdentity
                                        ?.autoUser?.["scope"],
                                    elevationLevel:
                                      result.body.poolInfo.autoPoolSpecification
                                        ?.pool?.startTask?.userIdentity
                                        ?.autoUser?.["elevationLevel"],
                                  },
                            },
                        maxTaskRetryCount:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.startTask?.["maxTaskRetryCount"],
                        waitForSuccess:
                          result.body.poolInfo.autoPoolSpecification?.pool
                            ?.startTask?.["waitForSuccess"],
                      },
                  certificateReferences:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "certificateReferences"
                    ] === undefined
                      ? result.body.poolInfo.autoPoolSpecification?.pool?.[
                          "certificateReferences"
                        ]
                      : result.body.poolInfo.autoPoolSpecification?.pool?.[
                          "certificateReferences"
                        ].map((p: any) => {
                          return {
                            thumbprint: p["thumbprint"],
                            thumbprintAlgorithm: p["thumbprintAlgorithm"],
                            storeLocation: p["storeLocation"],
                            storeName: p["storeName"],
                            visibility: p["visibility"],
                          };
                        }),
                  applicationPackageReferences:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "applicationPackageReferences"
                    ] === undefined
                      ? result.body.poolInfo.autoPoolSpecification?.pool?.[
                          "applicationPackageReferences"
                        ]
                      : result.body.poolInfo.autoPoolSpecification?.pool?.[
                          "applicationPackageReferences"
                        ].map((p: any) => {
                          return {
                            applicationId: p["applicationId"],
                            version: p["version"],
                          };
                        }),
                  applicationLicenses:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "applicationLicenses"
                    ],
                  userAccounts:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "userAccounts"
                    ] === undefined
                      ? result.body.poolInfo.autoPoolSpecification?.pool?.[
                          "userAccounts"
                        ]
                      : result.body.poolInfo.autoPoolSpecification?.pool?.[
                          "userAccounts"
                        ].map((p: any) => {
                          return {
                            name: p["name"],
                            password: p["password"],
                            elevationLevel: p["elevationLevel"],
                            linuxUserConfiguration: !p.linuxUserConfiguration
                              ? undefined
                              : {
                                  uid: p.linuxUserConfiguration?.["uid"],
                                  gid: p.linuxUserConfiguration?.["gid"],
                                  sshPrivateKey:
                                    p.linuxUserConfiguration?.["sshPrivateKey"],
                                },
                            windowsUserConfiguration:
                              !p.windowsUserConfiguration
                                ? undefined
                                : {
                                    loginMode:
                                      p.windowsUserConfiguration?.["loginMode"],
                                  },
                          };
                        }),
                  metadata:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "metadata"
                    ] === undefined
                      ? result.body.poolInfo.autoPoolSpecification?.pool?.[
                          "metadata"
                        ]
                      : result.body.poolInfo.autoPoolSpecification?.pool?.[
                          "metadata"
                        ].map((p: any) => {
                          return { name: p["name"], value: p["value"] };
                        }),
                  mountConfiguration:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "mountConfiguration"
                    ] === undefined
                      ? result.body.poolInfo.autoPoolSpecification?.pool?.[
                          "mountConfiguration"
                        ]
                      : result.body.poolInfo.autoPoolSpecification?.pool?.[
                          "mountConfiguration"
                        ].map((p: any) => {
                          return {
                            azureBlobFileSystemConfiguration:
                              !p.azureBlobFileSystemConfiguration
                                ? undefined
                                : {
                                    accountName:
                                      p.azureBlobFileSystemConfiguration?.[
                                        "accountName"
                                      ],
                                    containerName:
                                      p.azureBlobFileSystemConfiguration?.[
                                        "containerName"
                                      ],
                                    accountKey:
                                      p.azureBlobFileSystemConfiguration?.[
                                        "accountKey"
                                      ],
                                    sasKey:
                                      p.azureBlobFileSystemConfiguration?.[
                                        "sasKey"
                                      ],
                                    blobfuseOptions:
                                      p.azureBlobFileSystemConfiguration?.[
                                        "blobfuseOptions"
                                      ],
                                    relativeMountPath:
                                      p.azureBlobFileSystemConfiguration?.[
                                        "relativeMountPath"
                                      ],
                                    identityReference: !p
                                      .azureBlobFileSystemConfiguration
                                      ?.identityReference
                                      ? undefined
                                      : {
                                          resourceId:
                                            p.azureBlobFileSystemConfiguration
                                              ?.identityReference?.[
                                              "resourceId"
                                            ],
                                        },
                                  },
                            nfsMountConfiguration: !p.nfsMountConfiguration
                              ? undefined
                              : {
                                  source: p.nfsMountConfiguration?.["source"],
                                  relativeMountPath:
                                    p.nfsMountConfiguration?.[
                                      "relativeMountPath"
                                    ],
                                  mountOptions:
                                    p.nfsMountConfiguration?.["mountOptions"],
                                },
                            cifsMountConfiguration: !p.cifsMountConfiguration
                              ? undefined
                              : {
                                  username:
                                    p.cifsMountConfiguration?.["username"],
                                  source: p.cifsMountConfiguration?.["source"],
                                  relativeMountPath:
                                    p.cifsMountConfiguration?.[
                                      "relativeMountPath"
                                    ],
                                  mountOptions:
                                    p.cifsMountConfiguration?.["mountOptions"],
                                  password:
                                    p.cifsMountConfiguration?.["password"],
                                },
                            azureFileShareConfiguration:
                              !p.azureFileShareConfiguration
                                ? undefined
                                : {
                                    accountName:
                                      p.azureFileShareConfiguration?.[
                                        "accountName"
                                      ],
                                    azureFileUrl:
                                      p.azureFileShareConfiguration?.[
                                        "azureFileUrl"
                                      ],
                                    accountKey:
                                      p.azureFileShareConfiguration?.[
                                        "accountKey"
                                      ],
                                    relativeMountPath:
                                      p.azureFileShareConfiguration?.[
                                        "relativeMountPath"
                                      ],
                                    mountOptions:
                                      p.azureFileShareConfiguration?.[
                                        "mountOptions"
                                      ],
                                  },
                          };
                        }),
                  targetNodeCommunicationMode:
                    result.body.poolInfo.autoPoolSpecification?.pool?.[
                      "targetNodeCommunicationMode"
                    ],
                },
          },
    },
    onAllTasksComplete: result.body["onAllTasksComplete"],
    onTaskFailure: result.body["onTaskFailure"],
    networkConfiguration: !result.body.networkConfiguration
      ? undefined
      : { subnetId: result.body.networkConfiguration?.["subnetId"] },
    metadata:
      result.body["metadata"] === undefined
        ? result.body["metadata"]
        : result.body["metadata"].map((p: any) => {
            return { name: p["name"], value: p["value"] };
          }),
    executionInfo: !result.body.executionInfo
      ? undefined
      : {
          startTime: new Date(result.body.executionInfo?.["startTime"]),
          endTime:
            result.body.executionInfo?.["endTime"] !== undefined
              ? new Date(result.body.executionInfo?.["endTime"])
              : undefined,
          poolId: result.body.executionInfo?.["poolId"],
          schedulingError: !result.body.executionInfo?.schedulingError
            ? undefined
            : {
                category:
                  result.body.executionInfo?.schedulingError?.["category"],
                code: result.body.executionInfo?.schedulingError?.["code"],
                message:
                  result.body.executionInfo?.schedulingError?.["message"],
                details:
                  result.body.executionInfo?.schedulingError?.["details"] ===
                  undefined
                    ? result.body.executionInfo?.schedulingError?.["details"]
                    : result.body.executionInfo?.schedulingError?.[
                        "details"
                      ].map((p: any) => {
                        return { name: p["name"], value: p["value"] };
                      }),
              },
          terminateReason: result.body.executionInfo?.["terminateReason"],
        },
    stats: !result.body.stats
      ? undefined
      : {
          url: result.body.stats?.["url"],
          startTime: new Date(result.body.stats?.["startTime"]),
          lastUpdateTime: new Date(result.body.stats?.["lastUpdateTime"]),
          userCPUTime: result.body.stats?.["userCPUTime"],
          kernelCPUTime: result.body.stats?.["kernelCPUTime"],
          wallClockTime: result.body.stats?.["wallClockTime"],
          readIOps: result.body.stats?.["readIOps"],
          writeIOps: result.body.stats?.["writeIOps"],
          readIOGiB: result.body.stats?.["readIOGiB"],
          writeIOGiB: result.body.stats?.["writeIOGiB"],
          numSucceededTasks: result.body.stats?.["numSucceededTasks"],
          numFailedTasks: result.body.stats?.["numFailedTasks"],
          numTaskRetries: result.body.stats?.["numTaskRetries"],
          waitTime: result.body.stats?.["waitTime"],
        },
  };
}

/** Gets information about the specified Job. */
export async function getJob(
  context: Client,
  jobId: string,
  options: GetJobOptionalParams = { requestOptions: {} },
): Promise<BatchJob> {
  const result = await _getJobSend(context, jobId, options);
  return _getJobDeserialize(result);
}

export function _updateJobSend(
  context: Client,
  jobId: string,
  body: BatchJobUpdateOptions,
  options: UpdateJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}", jobId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        priority: body["priority"],
        allowTaskPreemption: body["allowTaskPreemption"],
        maxParallelTasks: body["maxParallelTasks"],
        constraints: !body.constraints
          ? body.constraints
          : jobConstraintsSerializer(body.constraints),
        poolInfo: !body.poolInfo
          ? body.poolInfo
          : poolInformationSerializer(body.poolInfo),
        onAllTasksComplete: body["onAllTasksComplete"],
        metadata:
          body["metadata"] === undefined
            ? body["metadata"]
            : body["metadata"].map(metadataItemSerializer),
      },
    });
}

export async function _updateJobDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * This replaces only the Job properties specified in the request. For example, if
 * the Job has constraints, and a request does not specify the constraints
 * element, then the Job keeps the existing constraints.
 */
export async function updateJob(
  context: Client,
  jobId: string,
  body: BatchJobUpdateOptions,
  options: UpdateJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _updateJobSend(context, jobId, body, options);
  return _updateJobDeserialize(result);
}

export function _replaceJobSend(
  context: Client,
  jobId: string,
  body: BatchJob,
  options: ReplaceJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}", jobId)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        priority: body["priority"],
        allowTaskPreemption: body["allowTaskPreemption"],
        maxParallelTasks: body["maxParallelTasks"],
        constraints: !body.constraints
          ? body.constraints
          : jobConstraintsSerializer(body.constraints),
        poolInfo: poolInformationSerializer(body.poolInfo),
        onAllTasksComplete: body["onAllTasksComplete"],
        metadata:
          body["metadata"] === undefined
            ? body["metadata"]
            : body["metadata"].map(metadataItemSerializer),
      },
    });
}

export async function _replaceJobDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * This fully replaces all the updatable properties of the Job. For example, if
 * the Job has constraints associated with it and if constraints is not specified
 * with this request, then the Batch service will remove the existing constraints.
 */
export async function replaceJob(
  context: Client,
  jobId: string,
  body: BatchJob,
  options: ReplaceJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _replaceJobSend(context, jobId, body, options);
  return _replaceJobDeserialize(result);
}

export function _disableJobSend(
  context: Client,
  jobId: string,
  body: BatchJobDisableOptions,
  options: DisableJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}/disable", jobId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: { disableTasks: body["disableTasks"] },
    });
}

export async function _disableJobDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
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
export async function disableJob(
  context: Client,
  jobId: string,
  body: BatchJobDisableOptions,
  options: DisableJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _disableJobSend(context, jobId, body, options);
  return _disableJobDeserialize(result);
}

export function _enableJobSend(
  context: Client,
  jobId: string,
  options: EnableJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}/enable", jobId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _enableJobDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * When you call this API, the Batch service sets a disabled Job to the enabling
 * state. After the this operation is completed, the Job moves to the active
 * state, and scheduling of new Tasks under the Job resumes. The Batch service
 * does not allow a Task to remain in the active state for more than 180 days.
 * Therefore, if you enable a Job containing active Tasks which were added more
 * than 180 days ago, those Tasks will not run.
 */
export async function enableJob(
  context: Client,
  jobId: string,
  options: EnableJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _enableJobSend(context, jobId, options);
  return _enableJobDeserialize(result);
}

export function _terminateJobSend(
  context: Client,
  jobId: string,
  body?: BatchJobTerminateOptions,
  options: TerminateJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}/terminate", jobId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body:
        body === undefined
          ? body
          : { terminateReason: body["terminateReason"] },
    });
}

export async function _terminateJobDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * When a Terminate Job request is received, the Batch service sets the Job to the
 * terminating state. The Batch service then terminates any running Tasks
 * associated with the Job and runs any required Job release Tasks. Then the Job
 * moves into the completed state. If there are any Tasks in the Job in the active
 * state, they will remain in the active state. Once a Job is terminated, new
 * Tasks cannot be added and any remaining active Tasks will not be scheduled.
 */
export async function terminateJob(
  context: Client,
  jobId: string,
  body?: BatchJobTerminateOptions,
  options: TerminateJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _terminateJobSend(context, jobId, body, options);
  return _terminateJobDeserialize(result);
}

export function _createJobSend(
  context: Client,
  body: BatchJobCreateOptions,
  options: CreateJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        id: body["id"],
        displayName: body["displayName"],
        usesTaskDependencies: body["usesTaskDependencies"],
        priority: body["priority"],
        allowTaskPreemption: body["allowTaskPreemption"],
        maxParallelTasks: body["maxParallelTasks"],
        constraints: !body.constraints
          ? body.constraints
          : jobConstraintsSerializer(body.constraints),
        jobManagerTask: !body.jobManagerTask
          ? body.jobManagerTask
          : jobManagerTaskSerializer(body.jobManagerTask),
        jobPreparationTask: !body.jobPreparationTask
          ? body.jobPreparationTask
          : jobPreparationTaskSerializer(body.jobPreparationTask),
        jobReleaseTask: !body.jobReleaseTask
          ? body.jobReleaseTask
          : jobReleaseTaskSerializer(body.jobReleaseTask),
        commonEnvironmentSettings:
          body["commonEnvironmentSettings"] === undefined
            ? body["commonEnvironmentSettings"]
            : body["commonEnvironmentSettings"].map(
                environmentSettingSerializer,
              ),
        poolInfo: poolInformationSerializer(body.poolInfo),
        onAllTasksComplete: body["onAllTasksComplete"],
        onTaskFailure: body["onTaskFailure"],
        networkConfiguration: !body.networkConfiguration
          ? body.networkConfiguration
          : jobNetworkConfigurationSerializer(body.networkConfiguration),
        metadata:
          body["metadata"] === undefined
            ? body["metadata"]
            : body["metadata"].map(metadataItemSerializer),
      },
    });
}

export async function _createJobDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
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
export async function createJob(
  context: Client,
  body: BatchJobCreateOptions,
  options: CreateJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createJobSend(context, body, options);
  return _createJobDeserialize(result);
}

export function _listJobsSend(
  context: Client,
  options: ListJobsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        maxresults: options?.maxresults,
        timeOut: options?.timeOutInSeconds,
        $filter: options?.$filter,
        $select: options?.$select,
        $expand: options?.$expand,
      },
    });
}

export async function _listJobsDeserialize(
  result: PathUncheckedResponse,
): Promise<_BatchJobListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              id: p["id"],
              displayName: p["displayName"],
              usesTaskDependencies: p["usesTaskDependencies"],
              url: p["url"],
              eTag: p["eTag"],
              lastModified:
                p["lastModified"] !== undefined
                  ? new Date(p["lastModified"])
                  : undefined,
              creationTime:
                p["creationTime"] !== undefined
                  ? new Date(p["creationTime"])
                  : undefined,
              state: p["state"],
              stateTransitionTime:
                p["stateTransitionTime"] !== undefined
                  ? new Date(p["stateTransitionTime"])
                  : undefined,
              previousState: p["previousState"],
              previousStateTransitionTime:
                p["previousStateTransitionTime"] !== undefined
                  ? new Date(p["previousStateTransitionTime"])
                  : undefined,
              priority: p["priority"],
              allowTaskPreemption: p["allowTaskPreemption"],
              maxParallelTasks: p["maxParallelTasks"],
              constraints: !p.constraints
                ? undefined
                : {
                    maxWallClockTime: p.constraints?.["maxWallClockTime"],
                    maxTaskRetryCount: p.constraints?.["maxTaskRetryCount"],
                  },
              jobManagerTask: !p.jobManagerTask
                ? undefined
                : {
                    id: p.jobManagerTask?.["id"],
                    displayName: p.jobManagerTask?.["displayName"],
                    commandLine: p.jobManagerTask?.["commandLine"],
                    containerSettings: !p.jobManagerTask?.containerSettings
                      ? undefined
                      : {
                          containerRunOptions:
                            p.jobManagerTask?.containerSettings?.[
                              "containerRunOptions"
                            ],
                          imageName:
                            p.jobManagerTask?.containerSettings?.["imageName"],
                          registry: !p.jobManagerTask?.containerSettings
                            ?.registry
                            ? undefined
                            : {
                                username:
                                  p.jobManagerTask?.containerSettings
                                    ?.registry?.["username"],
                                password:
                                  p.jobManagerTask?.containerSettings
                                    ?.registry?.["password"],
                                registryServer:
                                  p.jobManagerTask?.containerSettings
                                    ?.registry?.["registryServer"],
                                identityReference: !p.jobManagerTask
                                  ?.containerSettings?.registry
                                  ?.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.jobManagerTask?.containerSettings
                                          ?.registry?.identityReference?.[
                                          "resourceId"
                                        ],
                                    },
                              },
                          workingDirectory:
                            p.jobManagerTask?.containerSettings?.[
                              "workingDirectory"
                            ],
                        },
                    resourceFiles:
                      p.jobManagerTask?.["resourceFiles"] === undefined
                        ? p.jobManagerTask?.["resourceFiles"]
                        : p.jobManagerTask?.["resourceFiles"].map((p: any) => {
                            return {
                              autoStorageContainerName:
                                p["autoStorageContainerName"],
                              storageContainerUrl: p["storageContainerUrl"],
                              httpUrl: p["httpUrl"],
                              blobPrefix: p["blobPrefix"],
                              filePath: p["filePath"],
                              fileMode: p["fileMode"],
                              identityReference: !p.identityReference
                                ? undefined
                                : {
                                    resourceId:
                                      p.identityReference?.["resourceId"],
                                  },
                            };
                          }),
                    outputFiles:
                      p.jobManagerTask?.["outputFiles"] === undefined
                        ? p.jobManagerTask?.["outputFiles"]
                        : p.jobManagerTask?.["outputFiles"].map((p: any) => {
                            return {
                              filePattern: p["filePattern"],
                              destination: {
                                container: !p.destination.container
                                  ? undefined
                                  : {
                                      path: p.destination.container?.["path"],
                                      containerUrl:
                                        p.destination.container?.[
                                          "containerUrl"
                                        ],
                                      identityReference: !p.destination
                                        .container?.identityReference
                                        ? undefined
                                        : {
                                            resourceId:
                                              p.destination.container
                                                ?.identityReference?.[
                                                "resourceId"
                                              ],
                                          },
                                      uploadHeaders:
                                        p.destination.container?.[
                                          "uploadHeaders"
                                        ] === undefined
                                          ? p.destination.container?.[
                                              "uploadHeaders"
                                            ]
                                          : p.destination.container?.[
                                              "uploadHeaders"
                                            ].map((p: any) => {
                                              return {
                                                name: p["name"],
                                                value: p["value"],
                                              };
                                            }),
                                    },
                              },
                              uploadOptions: {
                                uploadCondition:
                                  p.uploadOptions["uploadCondition"],
                              },
                            };
                          }),
                    environmentSettings:
                      p.jobManagerTask?.["environmentSettings"] === undefined
                        ? p.jobManagerTask?.["environmentSettings"]
                        : p.jobManagerTask?.["environmentSettings"].map(
                            (p: any) => {
                              return { name: p["name"], value: p["value"] };
                            },
                          ),
                    constraints: !p.jobManagerTask?.constraints
                      ? undefined
                      : {
                          maxWallClockTime:
                            p.jobManagerTask?.constraints?.["maxWallClockTime"],
                          retentionTime:
                            p.jobManagerTask?.constraints?.["retentionTime"],
                          maxTaskRetryCount:
                            p.jobManagerTask?.constraints?.[
                              "maxTaskRetryCount"
                            ],
                        },
                    requiredSlots: p.jobManagerTask?.["requiredSlots"],
                    killJobOnCompletion:
                      p.jobManagerTask?.["killJobOnCompletion"],
                    userIdentity: !p.jobManagerTask?.userIdentity
                      ? undefined
                      : {
                          username:
                            p.jobManagerTask?.userIdentity?.["username"],
                          autoUser: !p.jobManagerTask?.userIdentity?.autoUser
                            ? undefined
                            : {
                                scope:
                                  p.jobManagerTask?.userIdentity?.autoUser?.[
                                    "scope"
                                  ],
                                elevationLevel:
                                  p.jobManagerTask?.userIdentity?.autoUser?.[
                                    "elevationLevel"
                                  ],
                              },
                        },
                    runExclusive: p.jobManagerTask?.["runExclusive"],
                    applicationPackageReferences:
                      p.jobManagerTask?.["applicationPackageReferences"] ===
                      undefined
                        ? p.jobManagerTask?.["applicationPackageReferences"]
                        : p.jobManagerTask?.[
                            "applicationPackageReferences"
                          ].map((p: any) => {
                            return {
                              applicationId: p["applicationId"],
                              version: p["version"],
                            };
                          }),
                    authenticationTokenSettings: !p.jobManagerTask
                      ?.authenticationTokenSettings
                      ? undefined
                      : {
                          access:
                            p.jobManagerTask?.authenticationTokenSettings?.[
                              "access"
                            ],
                        },
                    allowLowPriorityNode:
                      p.jobManagerTask?.["allowLowPriorityNode"],
                  },
              jobPreparationTask: !p.jobPreparationTask
                ? undefined
                : {
                    id: p.jobPreparationTask?.["id"],
                    commandLine: p.jobPreparationTask?.["commandLine"],
                    containerSettings: !p.jobPreparationTask?.containerSettings
                      ? undefined
                      : {
                          containerRunOptions:
                            p.jobPreparationTask?.containerSettings?.[
                              "containerRunOptions"
                            ],
                          imageName:
                            p.jobPreparationTask?.containerSettings?.[
                              "imageName"
                            ],
                          registry: !p.jobPreparationTask?.containerSettings
                            ?.registry
                            ? undefined
                            : {
                                username:
                                  p.jobPreparationTask?.containerSettings
                                    ?.registry?.["username"],
                                password:
                                  p.jobPreparationTask?.containerSettings
                                    ?.registry?.["password"],
                                registryServer:
                                  p.jobPreparationTask?.containerSettings
                                    ?.registry?.["registryServer"],
                                identityReference: !p.jobPreparationTask
                                  ?.containerSettings?.registry
                                  ?.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.jobPreparationTask?.containerSettings
                                          ?.registry?.identityReference?.[
                                          "resourceId"
                                        ],
                                    },
                              },
                          workingDirectory:
                            p.jobPreparationTask?.containerSettings?.[
                              "workingDirectory"
                            ],
                        },
                    resourceFiles:
                      p.jobPreparationTask?.["resourceFiles"] === undefined
                        ? p.jobPreparationTask?.["resourceFiles"]
                        : p.jobPreparationTask?.["resourceFiles"].map(
                            (p: any) => {
                              return {
                                autoStorageContainerName:
                                  p["autoStorageContainerName"],
                                storageContainerUrl: p["storageContainerUrl"],
                                httpUrl: p["httpUrl"],
                                blobPrefix: p["blobPrefix"],
                                filePath: p["filePath"],
                                fileMode: p["fileMode"],
                                identityReference: !p.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.identityReference?.["resourceId"],
                                    },
                              };
                            },
                          ),
                    environmentSettings:
                      p.jobPreparationTask?.["environmentSettings"] ===
                      undefined
                        ? p.jobPreparationTask?.["environmentSettings"]
                        : p.jobPreparationTask?.["environmentSettings"].map(
                            (p: any) => {
                              return { name: p["name"], value: p["value"] };
                            },
                          ),
                    constraints: !p.jobPreparationTask?.constraints
                      ? undefined
                      : {
                          maxWallClockTime:
                            p.jobPreparationTask?.constraints?.[
                              "maxWallClockTime"
                            ],
                          retentionTime:
                            p.jobPreparationTask?.constraints?.[
                              "retentionTime"
                            ],
                          maxTaskRetryCount:
                            p.jobPreparationTask?.constraints?.[
                              "maxTaskRetryCount"
                            ],
                        },
                    waitForSuccess: p.jobPreparationTask?.["waitForSuccess"],
                    userIdentity: !p.jobPreparationTask?.userIdentity
                      ? undefined
                      : {
                          username:
                            p.jobPreparationTask?.userIdentity?.["username"],
                          autoUser: !p.jobPreparationTask?.userIdentity
                            ?.autoUser
                            ? undefined
                            : {
                                scope:
                                  p.jobPreparationTask?.userIdentity
                                    ?.autoUser?.["scope"],
                                elevationLevel:
                                  p.jobPreparationTask?.userIdentity
                                    ?.autoUser?.["elevationLevel"],
                              },
                        },
                    rerunOnNodeRebootAfterSuccess:
                      p.jobPreparationTask?.["rerunOnNodeRebootAfterSuccess"],
                  },
              jobReleaseTask: !p.jobReleaseTask
                ? undefined
                : {
                    id: p.jobReleaseTask?.["id"],
                    commandLine: p.jobReleaseTask?.["commandLine"],
                    containerSettings: !p.jobReleaseTask?.containerSettings
                      ? undefined
                      : {
                          containerRunOptions:
                            p.jobReleaseTask?.containerSettings?.[
                              "containerRunOptions"
                            ],
                          imageName:
                            p.jobReleaseTask?.containerSettings?.["imageName"],
                          registry: !p.jobReleaseTask?.containerSettings
                            ?.registry
                            ? undefined
                            : {
                                username:
                                  p.jobReleaseTask?.containerSettings
                                    ?.registry?.["username"],
                                password:
                                  p.jobReleaseTask?.containerSettings
                                    ?.registry?.["password"],
                                registryServer:
                                  p.jobReleaseTask?.containerSettings
                                    ?.registry?.["registryServer"],
                                identityReference: !p.jobReleaseTask
                                  ?.containerSettings?.registry
                                  ?.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.jobReleaseTask?.containerSettings
                                          ?.registry?.identityReference?.[
                                          "resourceId"
                                        ],
                                    },
                              },
                          workingDirectory:
                            p.jobReleaseTask?.containerSettings?.[
                              "workingDirectory"
                            ],
                        },
                    resourceFiles:
                      p.jobReleaseTask?.["resourceFiles"] === undefined
                        ? p.jobReleaseTask?.["resourceFiles"]
                        : p.jobReleaseTask?.["resourceFiles"].map((p: any) => {
                            return {
                              autoStorageContainerName:
                                p["autoStorageContainerName"],
                              storageContainerUrl: p["storageContainerUrl"],
                              httpUrl: p["httpUrl"],
                              blobPrefix: p["blobPrefix"],
                              filePath: p["filePath"],
                              fileMode: p["fileMode"],
                              identityReference: !p.identityReference
                                ? undefined
                                : {
                                    resourceId:
                                      p.identityReference?.["resourceId"],
                                  },
                            };
                          }),
                    environmentSettings:
                      p.jobReleaseTask?.["environmentSettings"] === undefined
                        ? p.jobReleaseTask?.["environmentSettings"]
                        : p.jobReleaseTask?.["environmentSettings"].map(
                            (p: any) => {
                              return { name: p["name"], value: p["value"] };
                            },
                          ),
                    maxWallClockTime: p.jobReleaseTask?.["maxWallClockTime"],
                    retentionTime: p.jobReleaseTask?.["retentionTime"],
                    userIdentity: !p.jobReleaseTask?.userIdentity
                      ? undefined
                      : {
                          username:
                            p.jobReleaseTask?.userIdentity?.["username"],
                          autoUser: !p.jobReleaseTask?.userIdentity?.autoUser
                            ? undefined
                            : {
                                scope:
                                  p.jobReleaseTask?.userIdentity?.autoUser?.[
                                    "scope"
                                  ],
                                elevationLevel:
                                  p.jobReleaseTask?.userIdentity?.autoUser?.[
                                    "elevationLevel"
                                  ],
                              },
                        },
                  },
              commonEnvironmentSettings:
                p["commonEnvironmentSettings"] === undefined
                  ? p["commonEnvironmentSettings"]
                  : p["commonEnvironmentSettings"].map((p: any) => {
                      return { name: p["name"], value: p["value"] };
                    }),
              poolInfo: {
                poolId: p.poolInfo["poolId"],
                autoPoolSpecification: !p.poolInfo.autoPoolSpecification
                  ? undefined
                  : {
                      autoPoolIdPrefix:
                        p.poolInfo.autoPoolSpecification?.["autoPoolIdPrefix"],
                      poolLifetimeOption:
                        p.poolInfo.autoPoolSpecification?.[
                          "poolLifetimeOption"
                        ],
                      keepAlive:
                        p.poolInfo.autoPoolSpecification?.["keepAlive"],
                      pool: !p.poolInfo.autoPoolSpecification?.pool
                        ? undefined
                        : {
                            displayName:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "displayName"
                              ],
                            vmSize:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "vmSize"
                              ],
                            cloudServiceConfiguration: !p.poolInfo
                              .autoPoolSpecification?.pool
                              ?.cloudServiceConfiguration
                              ? undefined
                              : {
                                  osFamily:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.cloudServiceConfiguration?.["osFamily"],
                                  osVersion:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.cloudServiceConfiguration?.[
                                      "osVersion"
                                    ],
                                },
                            virtualMachineConfiguration: !p.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration
                              ? undefined
                              : {
                                  imageReference: {
                                    publisher:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.imageReference["publisher"],
                                    offer:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.imageReference["offer"],
                                    sku: p.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.imageReference["sku"],
                                    version:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.imageReference["version"],
                                    virtualMachineImageId:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.imageReference[
                                        "virtualMachineImageId"
                                      ],
                                    exactVersion:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.imageReference["exactVersion"],
                                  },
                                  nodeAgentSkuId:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.[
                                      "nodeAgentSKUId"
                                    ],
                                  windowsConfiguration: !p.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.windowsConfiguration
                                    ? undefined
                                    : {
                                        enableAutomaticUpdates:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.windowsConfiguration?.[
                                            "enableAutomaticUpdates"
                                          ],
                                      },
                                  dataDisks:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.[
                                      "dataDisks"
                                    ] === undefined
                                      ? p.poolInfo.autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration?.[
                                          "dataDisks"
                                        ]
                                      : p.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                          "dataDisks"
                                        ].map((p: any) => {
                                          return {
                                            lun: p["lun"],
                                            caching: p["caching"],
                                            diskSizeGb: p["diskSizeGB"],
                                            storageAccountType:
                                              p["storageAccountType"],
                                          };
                                        }),
                                  licenseType:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.[
                                      "licenseType"
                                    ],
                                  containerConfiguration: !p.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.containerConfiguration
                                    ? undefined
                                    : {
                                        type: p.poolInfo.autoPoolSpecification
                                          ?.pool?.virtualMachineConfiguration
                                          ?.containerConfiguration?.["type"],
                                        containerImageNames:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.containerConfiguration?.[
                                            "containerImageNames"
                                          ],
                                        containerRegistries:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.containerConfiguration?.[
                                            "containerRegistries"
                                          ] === undefined
                                            ? p.poolInfo.autoPoolSpecification
                                                ?.pool
                                                ?.virtualMachineConfiguration
                                                ?.containerConfiguration?.[
                                                "containerRegistries"
                                              ]
                                            : p.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
                                                "containerRegistries"
                                              ].map((p: any) => {
                                                return {
                                                  username: p["username"],
                                                  password: p["password"],
                                                  registryServer:
                                                    p["registryServer"],
                                                  identityReference:
                                                    !p.identityReference
                                                      ? undefined
                                                      : {
                                                          resourceId:
                                                            p
                                                              .identityReference?.[
                                                              "resourceId"
                                                            ],
                                                        },
                                                };
                                              }),
                                      },
                                  diskEncryptionConfiguration: !p.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.diskEncryptionConfiguration
                                    ? undefined
                                    : {
                                        targets:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.diskEncryptionConfiguration?.[
                                            "targets"
                                          ],
                                      },
                                  nodePlacementConfiguration: !p.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.nodePlacementConfiguration
                                    ? undefined
                                    : {
                                        policy:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.nodePlacementConfiguration?.[
                                            "policy"
                                          ],
                                      },
                                  extensions:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.[
                                      "extensions"
                                    ] === undefined
                                      ? p.poolInfo.autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration?.[
                                          "extensions"
                                        ]
                                      : p.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                          "extensions"
                                        ].map((p: any) => {
                                          return {
                                            name: p["name"],
                                            publisher: p["publisher"],
                                            type: p["type"],
                                            typeHandlerVersion:
                                              p["typeHandlerVersion"],
                                            autoUpgradeMinorVersion:
                                              p["autoUpgradeMinorVersion"],
                                            enableAutomaticUpgrade:
                                              p["enableAutomaticUpgrade"],
                                            settings: p["settings"],
                                            protectedSettings:
                                              p["protectedSettings"],
                                            provisionAfterExtensions:
                                              p["provisionAfterExtensions"],
                                          };
                                        }),
                                  osDisk: !p.poolInfo.autoPoolSpecification
                                    ?.pool?.virtualMachineConfiguration?.osDisk
                                    ? undefined
                                    : {
                                        ephemeralOSDiskSettings: !p.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration?.osDisk
                                          ?.ephemeralOSDiskSettings
                                          ? undefined
                                          : {
                                              placement:
                                                p.poolInfo.autoPoolSpecification
                                                  ?.pool
                                                  ?.virtualMachineConfiguration
                                                  ?.osDisk
                                                  ?.ephemeralOSDiskSettings?.[
                                                  "placement"
                                                ],
                                            },
                                      },
                                },
                            taskSlotsPerNode:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "taskSlotsPerNode"
                              ],
                            taskSchedulingPolicy: !p.poolInfo
                              .autoPoolSpecification?.pool?.taskSchedulingPolicy
                              ? undefined
                              : {
                                  nodeFillType:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.taskSchedulingPolicy?.["nodeFillType"],
                                },
                            resizeTimeout:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "resizeTimeout"
                              ],
                            targetDedicatedNodes:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "targetDedicatedNodes"
                              ],
                            targetLowPriorityNodes:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "targetLowPriorityNodes"
                              ],
                            enableAutoScale:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "enableAutoScale"
                              ],
                            autoScaleFormula:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "autoScaleFormula"
                              ],
                            autoScaleEvaluationInterval:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "autoScaleEvaluationInterval"
                              ],
                            enableInterNodeCommunication:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "enableInterNodeCommunication"
                              ],
                            networkConfiguration: !p.poolInfo
                              .autoPoolSpecification?.pool?.networkConfiguration
                              ? undefined
                              : {
                                  subnetId:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.networkConfiguration?.["subnetId"],
                                  dynamicVNetAssignmentScope:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.networkConfiguration?.[
                                      "dynamicVNetAssignmentScope"
                                    ],
                                  endpointConfiguration: !p.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.networkConfiguration
                                    ?.endpointConfiguration
                                    ? undefined
                                    : {
                                        inboundNatPools:
                                          p.poolInfo.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
                                            "inboundNATPools"
                                          ].map((p: any) => {
                                            return {
                                              name: p["name"],
                                              protocol: p["protocol"],
                                              backendPort: p["backendPort"],
                                              frontendPortRangeStart:
                                                p["frontendPortRangeStart"],
                                              frontendPortRangeEnd:
                                                p["frontendPortRangeEnd"],
                                              networkSecurityGroupRules:
                                                p[
                                                  "networkSecurityGroupRules"
                                                ] === undefined
                                                  ? p[
                                                      "networkSecurityGroupRules"
                                                    ]
                                                  : p[
                                                      "networkSecurityGroupRules"
                                                    ].map((p: any) => {
                                                      return {
                                                        priority: p["priority"],
                                                        access: p["access"],
                                                        sourceAddressPrefix:
                                                          p[
                                                            "sourceAddressPrefix"
                                                          ],
                                                        sourcePortRanges:
                                                          p["sourcePortRanges"],
                                                      };
                                                    }),
                                            };
                                          }),
                                      },
                                  publicIpAddressConfiguration: !p.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.networkConfiguration
                                    ?.publicIPAddressConfiguration
                                    ? undefined
                                    : {
                                        IpAddressProvisioningType:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.networkConfiguration
                                            ?.publicIPAddressConfiguration?.[
                                            "provision"
                                          ],
                                        ipAddressIds:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.networkConfiguration
                                            ?.publicIPAddressConfiguration?.[
                                            "ipAddressIds"
                                          ],
                                      },
                                  enableAcceleratedNetworking:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.networkConfiguration?.[
                                      "enableAcceleratedNetworking"
                                    ],
                                },
                            startTask: !p.poolInfo.autoPoolSpecification?.pool
                              ?.startTask
                              ? undefined
                              : {
                                  commandLine:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.["commandLine"],
                                  containerSettings: !p.poolInfo
                                    .autoPoolSpecification?.pool?.startTask
                                    ?.containerSettings
                                    ? undefined
                                    : {
                                        containerRunOptions:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.startTask?.containerSettings?.[
                                            "containerRunOptions"
                                          ],
                                        imageName:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.startTask?.containerSettings?.[
                                            "imageName"
                                          ],
                                        registry: !p.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.containerSettings
                                          ?.registry
                                          ? undefined
                                          : {
                                              username:
                                                p.poolInfo.autoPoolSpecification
                                                  ?.pool?.startTask
                                                  ?.containerSettings
                                                  ?.registry?.["username"],
                                              password:
                                                p.poolInfo.autoPoolSpecification
                                                  ?.pool?.startTask
                                                  ?.containerSettings
                                                  ?.registry?.["password"],
                                              registryServer:
                                                p.poolInfo.autoPoolSpecification
                                                  ?.pool?.startTask
                                                  ?.containerSettings
                                                  ?.registry?.[
                                                  "registryServer"
                                                ],
                                              identityReference: !p.poolInfo
                                                .autoPoolSpecification?.pool
                                                ?.startTask?.containerSettings
                                                ?.registry?.identityReference
                                                ? undefined
                                                : {
                                                    resourceId:
                                                      p.poolInfo
                                                        .autoPoolSpecification
                                                        ?.pool?.startTask
                                                        ?.containerSettings
                                                        ?.registry
                                                        ?.identityReference?.[
                                                        "resourceId"
                                                      ],
                                                  },
                                            },
                                        workingDirectory:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.startTask?.containerSettings?.[
                                            "workingDirectory"
                                          ],
                                      },
                                  resourceFiles:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.["resourceFiles"] ===
                                    undefined
                                      ? p.poolInfo.autoPoolSpecification?.pool
                                          ?.startTask?.["resourceFiles"]
                                      : p.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                          "resourceFiles"
                                        ].map((p: any) => {
                                          return {
                                            autoStorageContainerName:
                                              p["autoStorageContainerName"],
                                            storageContainerUrl:
                                              p["storageContainerUrl"],
                                            httpUrl: p["httpUrl"],
                                            blobPrefix: p["blobPrefix"],
                                            filePath: p["filePath"],
                                            fileMode: p["fileMode"],
                                            identityReference:
                                              !p.identityReference
                                                ? undefined
                                                : {
                                                    resourceId:
                                                      p.identityReference?.[
                                                        "resourceId"
                                                      ],
                                                  },
                                          };
                                        }),
                                  environmentSettings:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.["environmentSettings"] ===
                                    undefined
                                      ? p.poolInfo.autoPoolSpecification?.pool
                                          ?.startTask?.["environmentSettings"]
                                      : p.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                          "environmentSettings"
                                        ].map((p: any) => {
                                          return {
                                            name: p["name"],
                                            value: p["value"],
                                          };
                                        }),
                                  userIdentity: !p.poolInfo
                                    .autoPoolSpecification?.pool?.startTask
                                    ?.userIdentity
                                    ? undefined
                                    : {
                                        username:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.startTask?.userIdentity?.[
                                            "username"
                                          ],
                                        autoUser: !p.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.userIdentity?.autoUser
                                          ? undefined
                                          : {
                                              scope:
                                                p.poolInfo.autoPoolSpecification
                                                  ?.pool?.startTask
                                                  ?.userIdentity?.autoUser?.[
                                                  "scope"
                                                ],
                                              elevationLevel:
                                                p.poolInfo.autoPoolSpecification
                                                  ?.pool?.startTask
                                                  ?.userIdentity?.autoUser?.[
                                                  "elevationLevel"
                                                ],
                                            },
                                      },
                                  maxTaskRetryCount:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.["maxTaskRetryCount"],
                                  waitForSuccess:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.["waitForSuccess"],
                                },
                            certificateReferences:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "certificateReferences"
                              ] === undefined
                                ? p.poolInfo.autoPoolSpecification?.pool?.[
                                    "certificateReferences"
                                  ]
                                : p.poolInfo.autoPoolSpecification?.pool?.[
                                    "certificateReferences"
                                  ].map((p: any) => {
                                    return {
                                      thumbprint: p["thumbprint"],
                                      thumbprintAlgorithm:
                                        p["thumbprintAlgorithm"],
                                      storeLocation: p["storeLocation"],
                                      storeName: p["storeName"],
                                      visibility: p["visibility"],
                                    };
                                  }),
                            applicationPackageReferences:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "applicationPackageReferences"
                              ] === undefined
                                ? p.poolInfo.autoPoolSpecification?.pool?.[
                                    "applicationPackageReferences"
                                  ]
                                : p.poolInfo.autoPoolSpecification?.pool?.[
                                    "applicationPackageReferences"
                                  ].map((p: any) => {
                                    return {
                                      applicationId: p["applicationId"],
                                      version: p["version"],
                                    };
                                  }),
                            applicationLicenses:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "applicationLicenses"
                              ],
                            userAccounts:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "userAccounts"
                              ] === undefined
                                ? p.poolInfo.autoPoolSpecification?.pool?.[
                                    "userAccounts"
                                  ]
                                : p.poolInfo.autoPoolSpecification?.pool?.[
                                    "userAccounts"
                                  ].map((p: any) => {
                                    return {
                                      name: p["name"],
                                      password: p["password"],
                                      elevationLevel: p["elevationLevel"],
                                      linuxUserConfiguration:
                                        !p.linuxUserConfiguration
                                          ? undefined
                                          : {
                                              uid: p.linuxUserConfiguration?.[
                                                "uid"
                                              ],
                                              gid: p.linuxUserConfiguration?.[
                                                "gid"
                                              ],
                                              sshPrivateKey:
                                                p.linuxUserConfiguration?.[
                                                  "sshPrivateKey"
                                                ],
                                            },
                                      windowsUserConfiguration:
                                        !p.windowsUserConfiguration
                                          ? undefined
                                          : {
                                              loginMode:
                                                p.windowsUserConfiguration?.[
                                                  "loginMode"
                                                ],
                                            },
                                    };
                                  }),
                            metadata:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "metadata"
                              ] === undefined
                                ? p.poolInfo.autoPoolSpecification?.pool?.[
                                    "metadata"
                                  ]
                                : p.poolInfo.autoPoolSpecification?.pool?.[
                                    "metadata"
                                  ].map((p: any) => {
                                    return {
                                      name: p["name"],
                                      value: p["value"],
                                    };
                                  }),
                            mountConfiguration:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "mountConfiguration"
                              ] === undefined
                                ? p.poolInfo.autoPoolSpecification?.pool?.[
                                    "mountConfiguration"
                                  ]
                                : p.poolInfo.autoPoolSpecification?.pool?.[
                                    "mountConfiguration"
                                  ].map((p: any) => {
                                    return {
                                      azureBlobFileSystemConfiguration:
                                        !p.azureBlobFileSystemConfiguration
                                          ? undefined
                                          : {
                                              accountName:
                                                p
                                                  .azureBlobFileSystemConfiguration?.[
                                                  "accountName"
                                                ],
                                              containerName:
                                                p
                                                  .azureBlobFileSystemConfiguration?.[
                                                  "containerName"
                                                ],
                                              accountKey:
                                                p
                                                  .azureBlobFileSystemConfiguration?.[
                                                  "accountKey"
                                                ],
                                              sasKey:
                                                p
                                                  .azureBlobFileSystemConfiguration?.[
                                                  "sasKey"
                                                ],
                                              blobfuseOptions:
                                                p
                                                  .azureBlobFileSystemConfiguration?.[
                                                  "blobfuseOptions"
                                                ],
                                              relativeMountPath:
                                                p
                                                  .azureBlobFileSystemConfiguration?.[
                                                  "relativeMountPath"
                                                ],
                                              identityReference: !p
                                                .azureBlobFileSystemConfiguration
                                                ?.identityReference
                                                ? undefined
                                                : {
                                                    resourceId:
                                                      p
                                                        .azureBlobFileSystemConfiguration
                                                        ?.identityReference?.[
                                                        "resourceId"
                                                      ],
                                                  },
                                            },
                                      nfsMountConfiguration:
                                        !p.nfsMountConfiguration
                                          ? undefined
                                          : {
                                              source:
                                                p.nfsMountConfiguration?.[
                                                  "source"
                                                ],
                                              relativeMountPath:
                                                p.nfsMountConfiguration?.[
                                                  "relativeMountPath"
                                                ],
                                              mountOptions:
                                                p.nfsMountConfiguration?.[
                                                  "mountOptions"
                                                ],
                                            },
                                      cifsMountConfiguration:
                                        !p.cifsMountConfiguration
                                          ? undefined
                                          : {
                                              username:
                                                p.cifsMountConfiguration?.[
                                                  "username"
                                                ],
                                              source:
                                                p.cifsMountConfiguration?.[
                                                  "source"
                                                ],
                                              relativeMountPath:
                                                p.cifsMountConfiguration?.[
                                                  "relativeMountPath"
                                                ],
                                              mountOptions:
                                                p.cifsMountConfiguration?.[
                                                  "mountOptions"
                                                ],
                                              password:
                                                p.cifsMountConfiguration?.[
                                                  "password"
                                                ],
                                            },
                                      azureFileShareConfiguration:
                                        !p.azureFileShareConfiguration
                                          ? undefined
                                          : {
                                              accountName:
                                                p.azureFileShareConfiguration?.[
                                                  "accountName"
                                                ],
                                              azureFileUrl:
                                                p.azureFileShareConfiguration?.[
                                                  "azureFileUrl"
                                                ],
                                              accountKey:
                                                p.azureFileShareConfiguration?.[
                                                  "accountKey"
                                                ],
                                              relativeMountPath:
                                                p.azureFileShareConfiguration?.[
                                                  "relativeMountPath"
                                                ],
                                              mountOptions:
                                                p.azureFileShareConfiguration?.[
                                                  "mountOptions"
                                                ],
                                            },
                                    };
                                  }),
                            targetNodeCommunicationMode:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "targetNodeCommunicationMode"
                              ],
                          },
                    },
              },
              onAllTasksComplete: p["onAllTasksComplete"],
              onTaskFailure: p["onTaskFailure"],
              networkConfiguration: !p.networkConfiguration
                ? undefined
                : { subnetId: p.networkConfiguration?.["subnetId"] },
              metadata:
                p["metadata"] === undefined
                  ? p["metadata"]
                  : p["metadata"].map((p: any) => {
                      return { name: p["name"], value: p["value"] };
                    }),
              executionInfo: !p.executionInfo
                ? undefined
                : {
                    startTime: new Date(p.executionInfo?.["startTime"]),
                    endTime:
                      p.executionInfo?.["endTime"] !== undefined
                        ? new Date(p.executionInfo?.["endTime"])
                        : undefined,
                    poolId: p.executionInfo?.["poolId"],
                    schedulingError: !p.executionInfo?.schedulingError
                      ? undefined
                      : {
                          category:
                            p.executionInfo?.schedulingError?.["category"],
                          code: p.executionInfo?.schedulingError?.["code"],
                          message:
                            p.executionInfo?.schedulingError?.["message"],
                          details:
                            p.executionInfo?.schedulingError?.["details"] ===
                            undefined
                              ? p.executionInfo?.schedulingError?.["details"]
                              : p.executionInfo?.schedulingError?.[
                                  "details"
                                ].map((p: any) => {
                                  return { name: p["name"], value: p["value"] };
                                }),
                        },
                    terminateReason: p.executionInfo?.["terminateReason"],
                  },
              stats: !p.stats
                ? undefined
                : {
                    url: p.stats?.["url"],
                    startTime: new Date(p.stats?.["startTime"]),
                    lastUpdateTime: new Date(p.stats?.["lastUpdateTime"]),
                    userCPUTime: p.stats?.["userCPUTime"],
                    kernelCPUTime: p.stats?.["kernelCPUTime"],
                    wallClockTime: p.stats?.["wallClockTime"],
                    readIOps: p.stats?.["readIOps"],
                    writeIOps: p.stats?.["writeIOps"],
                    readIOGiB: p.stats?.["readIOGiB"],
                    writeIOGiB: p.stats?.["writeIOGiB"],
                    numSucceededTasks: p.stats?.["numSucceededTasks"],
                    numFailedTasks: p.stats?.["numFailedTasks"],
                    numTaskRetries: p.stats?.["numTaskRetries"],
                    waitTime: p.stats?.["waitTime"],
                  },
            };
          }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists all of the Jobs in the specified Account. */
export function listJobs(
  context: Client,
  options: ListJobsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchJob> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobsSend(context, options),
    _listJobsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _listJobsFromScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: ListJobsFromScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobschedules/{jobScheduleId}/jobs", jobScheduleId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        maxresults: options?.maxresults,
        timeOut: options?.timeOutInSeconds,
        $filter: options?.$filter,
        $select: options?.$select,
        $expand: options?.$expand,
      },
    });
}

export async function _listJobsFromScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<_BatchJobListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              id: p["id"],
              displayName: p["displayName"],
              usesTaskDependencies: p["usesTaskDependencies"],
              url: p["url"],
              eTag: p["eTag"],
              lastModified:
                p["lastModified"] !== undefined
                  ? new Date(p["lastModified"])
                  : undefined,
              creationTime:
                p["creationTime"] !== undefined
                  ? new Date(p["creationTime"])
                  : undefined,
              state: p["state"],
              stateTransitionTime:
                p["stateTransitionTime"] !== undefined
                  ? new Date(p["stateTransitionTime"])
                  : undefined,
              previousState: p["previousState"],
              previousStateTransitionTime:
                p["previousStateTransitionTime"] !== undefined
                  ? new Date(p["previousStateTransitionTime"])
                  : undefined,
              priority: p["priority"],
              allowTaskPreemption: p["allowTaskPreemption"],
              maxParallelTasks: p["maxParallelTasks"],
              constraints: !p.constraints
                ? undefined
                : {
                    maxWallClockTime: p.constraints?.["maxWallClockTime"],
                    maxTaskRetryCount: p.constraints?.["maxTaskRetryCount"],
                  },
              jobManagerTask: !p.jobManagerTask
                ? undefined
                : {
                    id: p.jobManagerTask?.["id"],
                    displayName: p.jobManagerTask?.["displayName"],
                    commandLine: p.jobManagerTask?.["commandLine"],
                    containerSettings: !p.jobManagerTask?.containerSettings
                      ? undefined
                      : {
                          containerRunOptions:
                            p.jobManagerTask?.containerSettings?.[
                              "containerRunOptions"
                            ],
                          imageName:
                            p.jobManagerTask?.containerSettings?.["imageName"],
                          registry: !p.jobManagerTask?.containerSettings
                            ?.registry
                            ? undefined
                            : {
                                username:
                                  p.jobManagerTask?.containerSettings
                                    ?.registry?.["username"],
                                password:
                                  p.jobManagerTask?.containerSettings
                                    ?.registry?.["password"],
                                registryServer:
                                  p.jobManagerTask?.containerSettings
                                    ?.registry?.["registryServer"],
                                identityReference: !p.jobManagerTask
                                  ?.containerSettings?.registry
                                  ?.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.jobManagerTask?.containerSettings
                                          ?.registry?.identityReference?.[
                                          "resourceId"
                                        ],
                                    },
                              },
                          workingDirectory:
                            p.jobManagerTask?.containerSettings?.[
                              "workingDirectory"
                            ],
                        },
                    resourceFiles:
                      p.jobManagerTask?.["resourceFiles"] === undefined
                        ? p.jobManagerTask?.["resourceFiles"]
                        : p.jobManagerTask?.["resourceFiles"].map((p: any) => {
                            return {
                              autoStorageContainerName:
                                p["autoStorageContainerName"],
                              storageContainerUrl: p["storageContainerUrl"],
                              httpUrl: p["httpUrl"],
                              blobPrefix: p["blobPrefix"],
                              filePath: p["filePath"],
                              fileMode: p["fileMode"],
                              identityReference: !p.identityReference
                                ? undefined
                                : {
                                    resourceId:
                                      p.identityReference?.["resourceId"],
                                  },
                            };
                          }),
                    outputFiles:
                      p.jobManagerTask?.["outputFiles"] === undefined
                        ? p.jobManagerTask?.["outputFiles"]
                        : p.jobManagerTask?.["outputFiles"].map((p: any) => {
                            return {
                              filePattern: p["filePattern"],
                              destination: {
                                container: !p.destination.container
                                  ? undefined
                                  : {
                                      path: p.destination.container?.["path"],
                                      containerUrl:
                                        p.destination.container?.[
                                          "containerUrl"
                                        ],
                                      identityReference: !p.destination
                                        .container?.identityReference
                                        ? undefined
                                        : {
                                            resourceId:
                                              p.destination.container
                                                ?.identityReference?.[
                                                "resourceId"
                                              ],
                                          },
                                      uploadHeaders:
                                        p.destination.container?.[
                                          "uploadHeaders"
                                        ] === undefined
                                          ? p.destination.container?.[
                                              "uploadHeaders"
                                            ]
                                          : p.destination.container?.[
                                              "uploadHeaders"
                                            ].map((p: any) => {
                                              return {
                                                name: p["name"],
                                                value: p["value"],
                                              };
                                            }),
                                    },
                              },
                              uploadOptions: {
                                uploadCondition:
                                  p.uploadOptions["uploadCondition"],
                              },
                            };
                          }),
                    environmentSettings:
                      p.jobManagerTask?.["environmentSettings"] === undefined
                        ? p.jobManagerTask?.["environmentSettings"]
                        : p.jobManagerTask?.["environmentSettings"].map(
                            (p: any) => {
                              return { name: p["name"], value: p["value"] };
                            },
                          ),
                    constraints: !p.jobManagerTask?.constraints
                      ? undefined
                      : {
                          maxWallClockTime:
                            p.jobManagerTask?.constraints?.["maxWallClockTime"],
                          retentionTime:
                            p.jobManagerTask?.constraints?.["retentionTime"],
                          maxTaskRetryCount:
                            p.jobManagerTask?.constraints?.[
                              "maxTaskRetryCount"
                            ],
                        },
                    requiredSlots: p.jobManagerTask?.["requiredSlots"],
                    killJobOnCompletion:
                      p.jobManagerTask?.["killJobOnCompletion"],
                    userIdentity: !p.jobManagerTask?.userIdentity
                      ? undefined
                      : {
                          username:
                            p.jobManagerTask?.userIdentity?.["username"],
                          autoUser: !p.jobManagerTask?.userIdentity?.autoUser
                            ? undefined
                            : {
                                scope:
                                  p.jobManagerTask?.userIdentity?.autoUser?.[
                                    "scope"
                                  ],
                                elevationLevel:
                                  p.jobManagerTask?.userIdentity?.autoUser?.[
                                    "elevationLevel"
                                  ],
                              },
                        },
                    runExclusive: p.jobManagerTask?.["runExclusive"],
                    applicationPackageReferences:
                      p.jobManagerTask?.["applicationPackageReferences"] ===
                      undefined
                        ? p.jobManagerTask?.["applicationPackageReferences"]
                        : p.jobManagerTask?.[
                            "applicationPackageReferences"
                          ].map((p: any) => {
                            return {
                              applicationId: p["applicationId"],
                              version: p["version"],
                            };
                          }),
                    authenticationTokenSettings: !p.jobManagerTask
                      ?.authenticationTokenSettings
                      ? undefined
                      : {
                          access:
                            p.jobManagerTask?.authenticationTokenSettings?.[
                              "access"
                            ],
                        },
                    allowLowPriorityNode:
                      p.jobManagerTask?.["allowLowPriorityNode"],
                  },
              jobPreparationTask: !p.jobPreparationTask
                ? undefined
                : {
                    id: p.jobPreparationTask?.["id"],
                    commandLine: p.jobPreparationTask?.["commandLine"],
                    containerSettings: !p.jobPreparationTask?.containerSettings
                      ? undefined
                      : {
                          containerRunOptions:
                            p.jobPreparationTask?.containerSettings?.[
                              "containerRunOptions"
                            ],
                          imageName:
                            p.jobPreparationTask?.containerSettings?.[
                              "imageName"
                            ],
                          registry: !p.jobPreparationTask?.containerSettings
                            ?.registry
                            ? undefined
                            : {
                                username:
                                  p.jobPreparationTask?.containerSettings
                                    ?.registry?.["username"],
                                password:
                                  p.jobPreparationTask?.containerSettings
                                    ?.registry?.["password"],
                                registryServer:
                                  p.jobPreparationTask?.containerSettings
                                    ?.registry?.["registryServer"],
                                identityReference: !p.jobPreparationTask
                                  ?.containerSettings?.registry
                                  ?.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.jobPreparationTask?.containerSettings
                                          ?.registry?.identityReference?.[
                                          "resourceId"
                                        ],
                                    },
                              },
                          workingDirectory:
                            p.jobPreparationTask?.containerSettings?.[
                              "workingDirectory"
                            ],
                        },
                    resourceFiles:
                      p.jobPreparationTask?.["resourceFiles"] === undefined
                        ? p.jobPreparationTask?.["resourceFiles"]
                        : p.jobPreparationTask?.["resourceFiles"].map(
                            (p: any) => {
                              return {
                                autoStorageContainerName:
                                  p["autoStorageContainerName"],
                                storageContainerUrl: p["storageContainerUrl"],
                                httpUrl: p["httpUrl"],
                                blobPrefix: p["blobPrefix"],
                                filePath: p["filePath"],
                                fileMode: p["fileMode"],
                                identityReference: !p.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.identityReference?.["resourceId"],
                                    },
                              };
                            },
                          ),
                    environmentSettings:
                      p.jobPreparationTask?.["environmentSettings"] ===
                      undefined
                        ? p.jobPreparationTask?.["environmentSettings"]
                        : p.jobPreparationTask?.["environmentSettings"].map(
                            (p: any) => {
                              return { name: p["name"], value: p["value"] };
                            },
                          ),
                    constraints: !p.jobPreparationTask?.constraints
                      ? undefined
                      : {
                          maxWallClockTime:
                            p.jobPreparationTask?.constraints?.[
                              "maxWallClockTime"
                            ],
                          retentionTime:
                            p.jobPreparationTask?.constraints?.[
                              "retentionTime"
                            ],
                          maxTaskRetryCount:
                            p.jobPreparationTask?.constraints?.[
                              "maxTaskRetryCount"
                            ],
                        },
                    waitForSuccess: p.jobPreparationTask?.["waitForSuccess"],
                    userIdentity: !p.jobPreparationTask?.userIdentity
                      ? undefined
                      : {
                          username:
                            p.jobPreparationTask?.userIdentity?.["username"],
                          autoUser: !p.jobPreparationTask?.userIdentity
                            ?.autoUser
                            ? undefined
                            : {
                                scope:
                                  p.jobPreparationTask?.userIdentity
                                    ?.autoUser?.["scope"],
                                elevationLevel:
                                  p.jobPreparationTask?.userIdentity
                                    ?.autoUser?.["elevationLevel"],
                              },
                        },
                    rerunOnNodeRebootAfterSuccess:
                      p.jobPreparationTask?.["rerunOnNodeRebootAfterSuccess"],
                  },
              jobReleaseTask: !p.jobReleaseTask
                ? undefined
                : {
                    id: p.jobReleaseTask?.["id"],
                    commandLine: p.jobReleaseTask?.["commandLine"],
                    containerSettings: !p.jobReleaseTask?.containerSettings
                      ? undefined
                      : {
                          containerRunOptions:
                            p.jobReleaseTask?.containerSettings?.[
                              "containerRunOptions"
                            ],
                          imageName:
                            p.jobReleaseTask?.containerSettings?.["imageName"],
                          registry: !p.jobReleaseTask?.containerSettings
                            ?.registry
                            ? undefined
                            : {
                                username:
                                  p.jobReleaseTask?.containerSettings
                                    ?.registry?.["username"],
                                password:
                                  p.jobReleaseTask?.containerSettings
                                    ?.registry?.["password"],
                                registryServer:
                                  p.jobReleaseTask?.containerSettings
                                    ?.registry?.["registryServer"],
                                identityReference: !p.jobReleaseTask
                                  ?.containerSettings?.registry
                                  ?.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.jobReleaseTask?.containerSettings
                                          ?.registry?.identityReference?.[
                                          "resourceId"
                                        ],
                                    },
                              },
                          workingDirectory:
                            p.jobReleaseTask?.containerSettings?.[
                              "workingDirectory"
                            ],
                        },
                    resourceFiles:
                      p.jobReleaseTask?.["resourceFiles"] === undefined
                        ? p.jobReleaseTask?.["resourceFiles"]
                        : p.jobReleaseTask?.["resourceFiles"].map((p: any) => {
                            return {
                              autoStorageContainerName:
                                p["autoStorageContainerName"],
                              storageContainerUrl: p["storageContainerUrl"],
                              httpUrl: p["httpUrl"],
                              blobPrefix: p["blobPrefix"],
                              filePath: p["filePath"],
                              fileMode: p["fileMode"],
                              identityReference: !p.identityReference
                                ? undefined
                                : {
                                    resourceId:
                                      p.identityReference?.["resourceId"],
                                  },
                            };
                          }),
                    environmentSettings:
                      p.jobReleaseTask?.["environmentSettings"] === undefined
                        ? p.jobReleaseTask?.["environmentSettings"]
                        : p.jobReleaseTask?.["environmentSettings"].map(
                            (p: any) => {
                              return { name: p["name"], value: p["value"] };
                            },
                          ),
                    maxWallClockTime: p.jobReleaseTask?.["maxWallClockTime"],
                    retentionTime: p.jobReleaseTask?.["retentionTime"],
                    userIdentity: !p.jobReleaseTask?.userIdentity
                      ? undefined
                      : {
                          username:
                            p.jobReleaseTask?.userIdentity?.["username"],
                          autoUser: !p.jobReleaseTask?.userIdentity?.autoUser
                            ? undefined
                            : {
                                scope:
                                  p.jobReleaseTask?.userIdentity?.autoUser?.[
                                    "scope"
                                  ],
                                elevationLevel:
                                  p.jobReleaseTask?.userIdentity?.autoUser?.[
                                    "elevationLevel"
                                  ],
                              },
                        },
                  },
              commonEnvironmentSettings:
                p["commonEnvironmentSettings"] === undefined
                  ? p["commonEnvironmentSettings"]
                  : p["commonEnvironmentSettings"].map((p: any) => {
                      return { name: p["name"], value: p["value"] };
                    }),
              poolInfo: {
                poolId: p.poolInfo["poolId"],
                autoPoolSpecification: !p.poolInfo.autoPoolSpecification
                  ? undefined
                  : {
                      autoPoolIdPrefix:
                        p.poolInfo.autoPoolSpecification?.["autoPoolIdPrefix"],
                      poolLifetimeOption:
                        p.poolInfo.autoPoolSpecification?.[
                          "poolLifetimeOption"
                        ],
                      keepAlive:
                        p.poolInfo.autoPoolSpecification?.["keepAlive"],
                      pool: !p.poolInfo.autoPoolSpecification?.pool
                        ? undefined
                        : {
                            displayName:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "displayName"
                              ],
                            vmSize:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "vmSize"
                              ],
                            cloudServiceConfiguration: !p.poolInfo
                              .autoPoolSpecification?.pool
                              ?.cloudServiceConfiguration
                              ? undefined
                              : {
                                  osFamily:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.cloudServiceConfiguration?.["osFamily"],
                                  osVersion:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.cloudServiceConfiguration?.[
                                      "osVersion"
                                    ],
                                },
                            virtualMachineConfiguration: !p.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration
                              ? undefined
                              : {
                                  imageReference: {
                                    publisher:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.imageReference["publisher"],
                                    offer:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.imageReference["offer"],
                                    sku: p.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.imageReference["sku"],
                                    version:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.imageReference["version"],
                                    virtualMachineImageId:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.imageReference[
                                        "virtualMachineImageId"
                                      ],
                                    exactVersion:
                                      p.poolInfo.autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.imageReference["exactVersion"],
                                  },
                                  nodeAgentSkuId:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.[
                                      "nodeAgentSKUId"
                                    ],
                                  windowsConfiguration: !p.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.windowsConfiguration
                                    ? undefined
                                    : {
                                        enableAutomaticUpdates:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.windowsConfiguration?.[
                                            "enableAutomaticUpdates"
                                          ],
                                      },
                                  dataDisks:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.[
                                      "dataDisks"
                                    ] === undefined
                                      ? p.poolInfo.autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration?.[
                                          "dataDisks"
                                        ]
                                      : p.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                          "dataDisks"
                                        ].map((p: any) => {
                                          return {
                                            lun: p["lun"],
                                            caching: p["caching"],
                                            diskSizeGb: p["diskSizeGB"],
                                            storageAccountType:
                                              p["storageAccountType"],
                                          };
                                        }),
                                  licenseType:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.[
                                      "licenseType"
                                    ],
                                  containerConfiguration: !p.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.containerConfiguration
                                    ? undefined
                                    : {
                                        type: p.poolInfo.autoPoolSpecification
                                          ?.pool?.virtualMachineConfiguration
                                          ?.containerConfiguration?.["type"],
                                        containerImageNames:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.containerConfiguration?.[
                                            "containerImageNames"
                                          ],
                                        containerRegistries:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.containerConfiguration?.[
                                            "containerRegistries"
                                          ] === undefined
                                            ? p.poolInfo.autoPoolSpecification
                                                ?.pool
                                                ?.virtualMachineConfiguration
                                                ?.containerConfiguration?.[
                                                "containerRegistries"
                                              ]
                                            : p.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
                                                "containerRegistries"
                                              ].map((p: any) => {
                                                return {
                                                  username: p["username"],
                                                  password: p["password"],
                                                  registryServer:
                                                    p["registryServer"],
                                                  identityReference:
                                                    !p.identityReference
                                                      ? undefined
                                                      : {
                                                          resourceId:
                                                            p
                                                              .identityReference?.[
                                                              "resourceId"
                                                            ],
                                                        },
                                                };
                                              }),
                                      },
                                  diskEncryptionConfiguration: !p.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.diskEncryptionConfiguration
                                    ? undefined
                                    : {
                                        targets:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.diskEncryptionConfiguration?.[
                                            "targets"
                                          ],
                                      },
                                  nodePlacementConfiguration: !p.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.nodePlacementConfiguration
                                    ? undefined
                                    : {
                                        policy:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.nodePlacementConfiguration?.[
                                            "policy"
                                          ],
                                      },
                                  extensions:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.[
                                      "extensions"
                                    ] === undefined
                                      ? p.poolInfo.autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration?.[
                                          "extensions"
                                        ]
                                      : p.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                          "extensions"
                                        ].map((p: any) => {
                                          return {
                                            name: p["name"],
                                            publisher: p["publisher"],
                                            type: p["type"],
                                            typeHandlerVersion:
                                              p["typeHandlerVersion"],
                                            autoUpgradeMinorVersion:
                                              p["autoUpgradeMinorVersion"],
                                            enableAutomaticUpgrade:
                                              p["enableAutomaticUpgrade"],
                                            settings: p["settings"],
                                            protectedSettings:
                                              p["protectedSettings"],
                                            provisionAfterExtensions:
                                              p["provisionAfterExtensions"],
                                          };
                                        }),
                                  osDisk: !p.poolInfo.autoPoolSpecification
                                    ?.pool?.virtualMachineConfiguration?.osDisk
                                    ? undefined
                                    : {
                                        ephemeralOSDiskSettings: !p.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration?.osDisk
                                          ?.ephemeralOSDiskSettings
                                          ? undefined
                                          : {
                                              placement:
                                                p.poolInfo.autoPoolSpecification
                                                  ?.pool
                                                  ?.virtualMachineConfiguration
                                                  ?.osDisk
                                                  ?.ephemeralOSDiskSettings?.[
                                                  "placement"
                                                ],
                                            },
                                      },
                                },
                            taskSlotsPerNode:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "taskSlotsPerNode"
                              ],
                            taskSchedulingPolicy: !p.poolInfo
                              .autoPoolSpecification?.pool?.taskSchedulingPolicy
                              ? undefined
                              : {
                                  nodeFillType:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.taskSchedulingPolicy?.["nodeFillType"],
                                },
                            resizeTimeout:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "resizeTimeout"
                              ],
                            targetDedicatedNodes:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "targetDedicatedNodes"
                              ],
                            targetLowPriorityNodes:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "targetLowPriorityNodes"
                              ],
                            enableAutoScale:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "enableAutoScale"
                              ],
                            autoScaleFormula:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "autoScaleFormula"
                              ],
                            autoScaleEvaluationInterval:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "autoScaleEvaluationInterval"
                              ],
                            enableInterNodeCommunication:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "enableInterNodeCommunication"
                              ],
                            networkConfiguration: !p.poolInfo
                              .autoPoolSpecification?.pool?.networkConfiguration
                              ? undefined
                              : {
                                  subnetId:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.networkConfiguration?.["subnetId"],
                                  dynamicVNetAssignmentScope:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.networkConfiguration?.[
                                      "dynamicVNetAssignmentScope"
                                    ],
                                  endpointConfiguration: !p.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.networkConfiguration
                                    ?.endpointConfiguration
                                    ? undefined
                                    : {
                                        inboundNatPools:
                                          p.poolInfo.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
                                            "inboundNATPools"
                                          ].map((p: any) => {
                                            return {
                                              name: p["name"],
                                              protocol: p["protocol"],
                                              backendPort: p["backendPort"],
                                              frontendPortRangeStart:
                                                p["frontendPortRangeStart"],
                                              frontendPortRangeEnd:
                                                p["frontendPortRangeEnd"],
                                              networkSecurityGroupRules:
                                                p[
                                                  "networkSecurityGroupRules"
                                                ] === undefined
                                                  ? p[
                                                      "networkSecurityGroupRules"
                                                    ]
                                                  : p[
                                                      "networkSecurityGroupRules"
                                                    ].map((p: any) => {
                                                      return {
                                                        priority: p["priority"],
                                                        access: p["access"],
                                                        sourceAddressPrefix:
                                                          p[
                                                            "sourceAddressPrefix"
                                                          ],
                                                        sourcePortRanges:
                                                          p["sourcePortRanges"],
                                                      };
                                                    }),
                                            };
                                          }),
                                      },
                                  publicIpAddressConfiguration: !p.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.networkConfiguration
                                    ?.publicIPAddressConfiguration
                                    ? undefined
                                    : {
                                        IpAddressProvisioningType:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.networkConfiguration
                                            ?.publicIPAddressConfiguration?.[
                                            "provision"
                                          ],
                                        ipAddressIds:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.networkConfiguration
                                            ?.publicIPAddressConfiguration?.[
                                            "ipAddressIds"
                                          ],
                                      },
                                  enableAcceleratedNetworking:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.networkConfiguration?.[
                                      "enableAcceleratedNetworking"
                                    ],
                                },
                            startTask: !p.poolInfo.autoPoolSpecification?.pool
                              ?.startTask
                              ? undefined
                              : {
                                  commandLine:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.["commandLine"],
                                  containerSettings: !p.poolInfo
                                    .autoPoolSpecification?.pool?.startTask
                                    ?.containerSettings
                                    ? undefined
                                    : {
                                        containerRunOptions:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.startTask?.containerSettings?.[
                                            "containerRunOptions"
                                          ],
                                        imageName:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.startTask?.containerSettings?.[
                                            "imageName"
                                          ],
                                        registry: !p.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.containerSettings
                                          ?.registry
                                          ? undefined
                                          : {
                                              username:
                                                p.poolInfo.autoPoolSpecification
                                                  ?.pool?.startTask
                                                  ?.containerSettings
                                                  ?.registry?.["username"],
                                              password:
                                                p.poolInfo.autoPoolSpecification
                                                  ?.pool?.startTask
                                                  ?.containerSettings
                                                  ?.registry?.["password"],
                                              registryServer:
                                                p.poolInfo.autoPoolSpecification
                                                  ?.pool?.startTask
                                                  ?.containerSettings
                                                  ?.registry?.[
                                                  "registryServer"
                                                ],
                                              identityReference: !p.poolInfo
                                                .autoPoolSpecification?.pool
                                                ?.startTask?.containerSettings
                                                ?.registry?.identityReference
                                                ? undefined
                                                : {
                                                    resourceId:
                                                      p.poolInfo
                                                        .autoPoolSpecification
                                                        ?.pool?.startTask
                                                        ?.containerSettings
                                                        ?.registry
                                                        ?.identityReference?.[
                                                        "resourceId"
                                                      ],
                                                  },
                                            },
                                        workingDirectory:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.startTask?.containerSettings?.[
                                            "workingDirectory"
                                          ],
                                      },
                                  resourceFiles:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.["resourceFiles"] ===
                                    undefined
                                      ? p.poolInfo.autoPoolSpecification?.pool
                                          ?.startTask?.["resourceFiles"]
                                      : p.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                          "resourceFiles"
                                        ].map((p: any) => {
                                          return {
                                            autoStorageContainerName:
                                              p["autoStorageContainerName"],
                                            storageContainerUrl:
                                              p["storageContainerUrl"],
                                            httpUrl: p["httpUrl"],
                                            blobPrefix: p["blobPrefix"],
                                            filePath: p["filePath"],
                                            fileMode: p["fileMode"],
                                            identityReference:
                                              !p.identityReference
                                                ? undefined
                                                : {
                                                    resourceId:
                                                      p.identityReference?.[
                                                        "resourceId"
                                                      ],
                                                  },
                                          };
                                        }),
                                  environmentSettings:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.["environmentSettings"] ===
                                    undefined
                                      ? p.poolInfo.autoPoolSpecification?.pool
                                          ?.startTask?.["environmentSettings"]
                                      : p.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                          "environmentSettings"
                                        ].map((p: any) => {
                                          return {
                                            name: p["name"],
                                            value: p["value"],
                                          };
                                        }),
                                  userIdentity: !p.poolInfo
                                    .autoPoolSpecification?.pool?.startTask
                                    ?.userIdentity
                                    ? undefined
                                    : {
                                        username:
                                          p.poolInfo.autoPoolSpecification?.pool
                                            ?.startTask?.userIdentity?.[
                                            "username"
                                          ],
                                        autoUser: !p.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.userIdentity?.autoUser
                                          ? undefined
                                          : {
                                              scope:
                                                p.poolInfo.autoPoolSpecification
                                                  ?.pool?.startTask
                                                  ?.userIdentity?.autoUser?.[
                                                  "scope"
                                                ],
                                              elevationLevel:
                                                p.poolInfo.autoPoolSpecification
                                                  ?.pool?.startTask
                                                  ?.userIdentity?.autoUser?.[
                                                  "elevationLevel"
                                                ],
                                            },
                                      },
                                  maxTaskRetryCount:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.["maxTaskRetryCount"],
                                  waitForSuccess:
                                    p.poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.["waitForSuccess"],
                                },
                            certificateReferences:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "certificateReferences"
                              ] === undefined
                                ? p.poolInfo.autoPoolSpecification?.pool?.[
                                    "certificateReferences"
                                  ]
                                : p.poolInfo.autoPoolSpecification?.pool?.[
                                    "certificateReferences"
                                  ].map((p: any) => {
                                    return {
                                      thumbprint: p["thumbprint"],
                                      thumbprintAlgorithm:
                                        p["thumbprintAlgorithm"],
                                      storeLocation: p["storeLocation"],
                                      storeName: p["storeName"],
                                      visibility: p["visibility"],
                                    };
                                  }),
                            applicationPackageReferences:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "applicationPackageReferences"
                              ] === undefined
                                ? p.poolInfo.autoPoolSpecification?.pool?.[
                                    "applicationPackageReferences"
                                  ]
                                : p.poolInfo.autoPoolSpecification?.pool?.[
                                    "applicationPackageReferences"
                                  ].map((p: any) => {
                                    return {
                                      applicationId: p["applicationId"],
                                      version: p["version"],
                                    };
                                  }),
                            applicationLicenses:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "applicationLicenses"
                              ],
                            userAccounts:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "userAccounts"
                              ] === undefined
                                ? p.poolInfo.autoPoolSpecification?.pool?.[
                                    "userAccounts"
                                  ]
                                : p.poolInfo.autoPoolSpecification?.pool?.[
                                    "userAccounts"
                                  ].map((p: any) => {
                                    return {
                                      name: p["name"],
                                      password: p["password"],
                                      elevationLevel: p["elevationLevel"],
                                      linuxUserConfiguration:
                                        !p.linuxUserConfiguration
                                          ? undefined
                                          : {
                                              uid: p.linuxUserConfiguration?.[
                                                "uid"
                                              ],
                                              gid: p.linuxUserConfiguration?.[
                                                "gid"
                                              ],
                                              sshPrivateKey:
                                                p.linuxUserConfiguration?.[
                                                  "sshPrivateKey"
                                                ],
                                            },
                                      windowsUserConfiguration:
                                        !p.windowsUserConfiguration
                                          ? undefined
                                          : {
                                              loginMode:
                                                p.windowsUserConfiguration?.[
                                                  "loginMode"
                                                ],
                                            },
                                    };
                                  }),
                            metadata:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "metadata"
                              ] === undefined
                                ? p.poolInfo.autoPoolSpecification?.pool?.[
                                    "metadata"
                                  ]
                                : p.poolInfo.autoPoolSpecification?.pool?.[
                                    "metadata"
                                  ].map((p: any) => {
                                    return {
                                      name: p["name"],
                                      value: p["value"],
                                    };
                                  }),
                            mountConfiguration:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "mountConfiguration"
                              ] === undefined
                                ? p.poolInfo.autoPoolSpecification?.pool?.[
                                    "mountConfiguration"
                                  ]
                                : p.poolInfo.autoPoolSpecification?.pool?.[
                                    "mountConfiguration"
                                  ].map((p: any) => {
                                    return {
                                      azureBlobFileSystemConfiguration:
                                        !p.azureBlobFileSystemConfiguration
                                          ? undefined
                                          : {
                                              accountName:
                                                p
                                                  .azureBlobFileSystemConfiguration?.[
                                                  "accountName"
                                                ],
                                              containerName:
                                                p
                                                  .azureBlobFileSystemConfiguration?.[
                                                  "containerName"
                                                ],
                                              accountKey:
                                                p
                                                  .azureBlobFileSystemConfiguration?.[
                                                  "accountKey"
                                                ],
                                              sasKey:
                                                p
                                                  .azureBlobFileSystemConfiguration?.[
                                                  "sasKey"
                                                ],
                                              blobfuseOptions:
                                                p
                                                  .azureBlobFileSystemConfiguration?.[
                                                  "blobfuseOptions"
                                                ],
                                              relativeMountPath:
                                                p
                                                  .azureBlobFileSystemConfiguration?.[
                                                  "relativeMountPath"
                                                ],
                                              identityReference: !p
                                                .azureBlobFileSystemConfiguration
                                                ?.identityReference
                                                ? undefined
                                                : {
                                                    resourceId:
                                                      p
                                                        .azureBlobFileSystemConfiguration
                                                        ?.identityReference?.[
                                                        "resourceId"
                                                      ],
                                                  },
                                            },
                                      nfsMountConfiguration:
                                        !p.nfsMountConfiguration
                                          ? undefined
                                          : {
                                              source:
                                                p.nfsMountConfiguration?.[
                                                  "source"
                                                ],
                                              relativeMountPath:
                                                p.nfsMountConfiguration?.[
                                                  "relativeMountPath"
                                                ],
                                              mountOptions:
                                                p.nfsMountConfiguration?.[
                                                  "mountOptions"
                                                ],
                                            },
                                      cifsMountConfiguration:
                                        !p.cifsMountConfiguration
                                          ? undefined
                                          : {
                                              username:
                                                p.cifsMountConfiguration?.[
                                                  "username"
                                                ],
                                              source:
                                                p.cifsMountConfiguration?.[
                                                  "source"
                                                ],
                                              relativeMountPath:
                                                p.cifsMountConfiguration?.[
                                                  "relativeMountPath"
                                                ],
                                              mountOptions:
                                                p.cifsMountConfiguration?.[
                                                  "mountOptions"
                                                ],
                                              password:
                                                p.cifsMountConfiguration?.[
                                                  "password"
                                                ],
                                            },
                                      azureFileShareConfiguration:
                                        !p.azureFileShareConfiguration
                                          ? undefined
                                          : {
                                              accountName:
                                                p.azureFileShareConfiguration?.[
                                                  "accountName"
                                                ],
                                              azureFileUrl:
                                                p.azureFileShareConfiguration?.[
                                                  "azureFileUrl"
                                                ],
                                              accountKey:
                                                p.azureFileShareConfiguration?.[
                                                  "accountKey"
                                                ],
                                              relativeMountPath:
                                                p.azureFileShareConfiguration?.[
                                                  "relativeMountPath"
                                                ],
                                              mountOptions:
                                                p.azureFileShareConfiguration?.[
                                                  "mountOptions"
                                                ],
                                            },
                                    };
                                  }),
                            targetNodeCommunicationMode:
                              p.poolInfo.autoPoolSpecification?.pool?.[
                                "targetNodeCommunicationMode"
                              ],
                          },
                    },
              },
              onAllTasksComplete: p["onAllTasksComplete"],
              onTaskFailure: p["onTaskFailure"],
              networkConfiguration: !p.networkConfiguration
                ? undefined
                : { subnetId: p.networkConfiguration?.["subnetId"] },
              metadata:
                p["metadata"] === undefined
                  ? p["metadata"]
                  : p["metadata"].map((p: any) => {
                      return { name: p["name"], value: p["value"] };
                    }),
              executionInfo: !p.executionInfo
                ? undefined
                : {
                    startTime: new Date(p.executionInfo?.["startTime"]),
                    endTime:
                      p.executionInfo?.["endTime"] !== undefined
                        ? new Date(p.executionInfo?.["endTime"])
                        : undefined,
                    poolId: p.executionInfo?.["poolId"],
                    schedulingError: !p.executionInfo?.schedulingError
                      ? undefined
                      : {
                          category:
                            p.executionInfo?.schedulingError?.["category"],
                          code: p.executionInfo?.schedulingError?.["code"],
                          message:
                            p.executionInfo?.schedulingError?.["message"],
                          details:
                            p.executionInfo?.schedulingError?.["details"] ===
                            undefined
                              ? p.executionInfo?.schedulingError?.["details"]
                              : p.executionInfo?.schedulingError?.[
                                  "details"
                                ].map((p: any) => {
                                  return { name: p["name"], value: p["value"] };
                                }),
                        },
                    terminateReason: p.executionInfo?.["terminateReason"],
                  },
              stats: !p.stats
                ? undefined
                : {
                    url: p.stats?.["url"],
                    startTime: new Date(p.stats?.["startTime"]),
                    lastUpdateTime: new Date(p.stats?.["lastUpdateTime"]),
                    userCPUTime: p.stats?.["userCPUTime"],
                    kernelCPUTime: p.stats?.["kernelCPUTime"],
                    wallClockTime: p.stats?.["wallClockTime"],
                    readIOps: p.stats?.["readIOps"],
                    writeIOps: p.stats?.["writeIOps"],
                    readIOGiB: p.stats?.["readIOGiB"],
                    writeIOGiB: p.stats?.["writeIOGiB"],
                    numSucceededTasks: p.stats?.["numSucceededTasks"],
                    numFailedTasks: p.stats?.["numFailedTasks"],
                    numTaskRetries: p.stats?.["numTaskRetries"],
                    waitTime: p.stats?.["waitTime"],
                  },
            };
          }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists the Jobs that have been created under the specified Job Schedule. */
export function listJobsFromSchedule(
  context: Client,
  jobScheduleId: string,
  options: ListJobsFromScheduleOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchJob> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobsFromScheduleSend(context, jobScheduleId, options),
    _listJobsFromScheduleDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _listJobPreparationAndReleaseTaskStatusSend(
  context: Client,
  jobId: string,
  options: ListJobPreparationAndReleaseTaskStatusOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}/jobpreparationandreleasetaskstatus", jobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxresults: options?.maxresults,
        timeOut: options?.timeOutInSeconds,
        $filter: options?.$filter,
        $select: options?.$select,
      },
    });
}

export async function _listJobPreparationAndReleaseTaskStatusDeserialize(
  result: PathUncheckedResponse,
): Promise<_BatchJobListPreparationAndReleaseTaskStatusResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              poolId: p["poolId"],
              nodeId: p["nodeId"],
              nodeUrl: p["nodeUrl"],
              jobPreparationTaskExecutionInfo:
                !p.jobPreparationTaskExecutionInfo
                  ? undefined
                  : {
                      startTime: new Date(
                        p.jobPreparationTaskExecutionInfo?.["startTime"],
                      ),
                      endTime:
                        p.jobPreparationTaskExecutionInfo?.["endTime"] !==
                        undefined
                          ? new Date(
                              p.jobPreparationTaskExecutionInfo?.["endTime"],
                            )
                          : undefined,
                      state: p.jobPreparationTaskExecutionInfo?.["state"],
                      taskRootDirectory:
                        p.jobPreparationTaskExecutionInfo?.[
                          "taskRootDirectory"
                        ],
                      taskRootDirectoryUrl:
                        p.jobPreparationTaskExecutionInfo?.[
                          "taskRootDirectoryUrl"
                        ],
                      exitCode: p.jobPreparationTaskExecutionInfo?.["exitCode"],
                      containerInfo: !p.jobPreparationTaskExecutionInfo
                        ?.containerInfo
                        ? undefined
                        : {
                            containerId:
                              p.jobPreparationTaskExecutionInfo
                                ?.containerInfo?.["containerId"],
                            state:
                              p.jobPreparationTaskExecutionInfo
                                ?.containerInfo?.["state"],
                            error:
                              p.jobPreparationTaskExecutionInfo
                                ?.containerInfo?.["error"],
                          },
                      failureInfo: !p.jobPreparationTaskExecutionInfo
                        ?.failureInfo
                        ? undefined
                        : {
                            category:
                              p.jobPreparationTaskExecutionInfo?.failureInfo?.[
                                "category"
                              ],
                            code: p.jobPreparationTaskExecutionInfo
                              ?.failureInfo?.["code"],
                            message:
                              p.jobPreparationTaskExecutionInfo?.failureInfo?.[
                                "message"
                              ],
                            details:
                              p.jobPreparationTaskExecutionInfo?.failureInfo?.[
                                "details"
                              ] === undefined
                                ? p.jobPreparationTaskExecutionInfo
                                    ?.failureInfo?.["details"]
                                : p.jobPreparationTaskExecutionInfo?.failureInfo?.[
                                    "details"
                                  ].map((p: any) => {
                                    return {
                                      name: p["name"],
                                      value: p["value"],
                                    };
                                  }),
                          },
                      retryCount:
                        p.jobPreparationTaskExecutionInfo?.["retryCount"],
                      lastRetryTime:
                        p.jobPreparationTaskExecutionInfo?.["lastRetryTime"] !==
                        undefined
                          ? new Date(
                              p.jobPreparationTaskExecutionInfo?.[
                                "lastRetryTime"
                              ],
                            )
                          : undefined,
                      result: p.jobPreparationTaskExecutionInfo?.["result"],
                    },
              jobReleaseTaskExecutionInfo: !p.jobReleaseTaskExecutionInfo
                ? undefined
                : {
                    startTime: new Date(
                      p.jobReleaseTaskExecutionInfo?.["startTime"],
                    ),
                    endTime:
                      p.jobReleaseTaskExecutionInfo?.["endTime"] !== undefined
                        ? new Date(p.jobReleaseTaskExecutionInfo?.["endTime"])
                        : undefined,
                    state: p.jobReleaseTaskExecutionInfo?.["state"],
                    taskRootDirectory:
                      p.jobReleaseTaskExecutionInfo?.["taskRootDirectory"],
                    taskRootDirectoryUrl:
                      p.jobReleaseTaskExecutionInfo?.["taskRootDirectoryUrl"],
                    exitCode: p.jobReleaseTaskExecutionInfo?.["exitCode"],
                    containerInfo: !p.jobReleaseTaskExecutionInfo?.containerInfo
                      ? undefined
                      : {
                          containerId:
                            p.jobReleaseTaskExecutionInfo?.containerInfo?.[
                              "containerId"
                            ],
                          state:
                            p.jobReleaseTaskExecutionInfo?.containerInfo?.[
                              "state"
                            ],
                          error:
                            p.jobReleaseTaskExecutionInfo?.containerInfo?.[
                              "error"
                            ],
                        },
                    failureInfo: !p.jobReleaseTaskExecutionInfo?.failureInfo
                      ? undefined
                      : {
                          category:
                            p.jobReleaseTaskExecutionInfo?.failureInfo?.[
                              "category"
                            ],
                          code: p.jobReleaseTaskExecutionInfo?.failureInfo?.[
                            "code"
                          ],
                          message:
                            p.jobReleaseTaskExecutionInfo?.failureInfo?.[
                              "message"
                            ],
                          details:
                            p.jobReleaseTaskExecutionInfo?.failureInfo?.[
                              "details"
                            ] === undefined
                              ? p.jobReleaseTaskExecutionInfo?.failureInfo?.[
                                  "details"
                                ]
                              : p.jobReleaseTaskExecutionInfo?.failureInfo?.[
                                  "details"
                                ].map((p: any) => {
                                  return { name: p["name"], value: p["value"] };
                                }),
                        },
                    result: p.jobReleaseTaskExecutionInfo?.["result"],
                  },
            };
          }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/**
 * This API returns the Job Preparation and Job Release Task status on all Compute
 * Nodes that have run the Job Preparation or Job Release Task. This includes
 * Compute Nodes which have since been removed from the Pool. If this API is
 * invoked on a Job which has no Job Preparation or Job Release Task, the Batch
 * service returns HTTP status code 409 (Conflict) with an error code of
 * JobPreparationTaskNotSpecified.
 */
export function listJobPreparationAndReleaseTaskStatus(
  context: Client,
  jobId: string,
  options: ListJobPreparationAndReleaseTaskStatusOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<JobPreparationAndReleaseTaskExecutionInformation> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobPreparationAndReleaseTaskStatusSend(context, jobId, options),
    _listJobPreparationAndReleaseTaskStatusDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _getJobTaskCountsSend(
  context: Client,
  jobId: string,
  options: GetJobTaskCountsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}/taskcounts", jobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _getJobTaskCountsDeserialize(
  result: PathUncheckedResponse,
): Promise<TaskCountsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    taskCounts: {
      active: result.body.taskCounts["active"],
      running: result.body.taskCounts["running"],
      completed: result.body.taskCounts["completed"],
      succeeded: result.body.taskCounts["succeeded"],
      failed: result.body.taskCounts["failed"],
    },
    taskSlotCounts: {
      active: result.body.taskSlotCounts["active"],
      running: result.body.taskSlotCounts["running"],
      completed: result.body.taskSlotCounts["completed"],
      succeeded: result.body.taskSlotCounts["succeeded"],
      failed: result.body.taskSlotCounts["failed"],
    },
  };
}

/**
 * Task counts provide a count of the Tasks by active, running or completed Task
 * state, and a count of Tasks which succeeded or failed. Tasks in the preparing
 * state are counted as running. Note that the numbers returned may not always be
 * up to date. If you need exact task counts, use a list query.
 */
export async function getJobTaskCounts(
  context: Client,
  jobId: string,
  options: GetJobTaskCountsOptionalParams = { requestOptions: {} },
): Promise<TaskCountsResult> {
  const result = await _getJobTaskCountsSend(context, jobId, options);
  return _getJobTaskCountsDeserialize(result);
}

export function _createCertificateSend(
  context: Client,
  body: BatchCertificate,
  options: CreateCertificateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/certificates")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        thumbprint: body["thumbprint"],
        thumbprintAlgorithm: body["thumbprintAlgorithm"],
        data: uint8ArrayToString(body["data"], "base64"),
        certificateFormat: body["certificateFormat"],
        password: body["password"],
      },
    });
}

export async function _createCertificateDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Creates a Certificate to the specified Account. */
export async function createCertificate(
  context: Client,
  body: BatchCertificate,
  options: CreateCertificateOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createCertificateSend(context, body, options);
  return _createCertificateDeserialize(result);
}

export function _listCertificatesSend(
  context: Client,
  options: ListCertificatesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/certificates")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        maxresults: options?.maxresults,
        timeOut: options?.timeOutInSeconds,
        $filter: options?.$filter,
        $select: options?.$select,
      },
    });
}

export async function _listCertificatesDeserialize(
  result: PathUncheckedResponse,
): Promise<_CertificateListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              thumbprint: p["thumbprint"],
              thumbprintAlgorithm: p["thumbprintAlgorithm"],
              url: p["url"],
              state: p["state"],
              stateTransitionTime:
                p["stateTransitionTime"] !== undefined
                  ? new Date(p["stateTransitionTime"])
                  : undefined,
              previousState: p["previousState"],
              previousStateTransitionTime:
                p["previousStateTransitionTime"] !== undefined
                  ? new Date(p["previousStateTransitionTime"])
                  : undefined,
              publicData:
                typeof p["publicData"] === "string"
                  ? stringToUint8Array(p["publicData"], "base64")
                  : p["publicData"],
              deleteCertificateError: !p.deleteCertificateError
                ? undefined
                : {
                    code: p.deleteCertificateError?.["code"],
                    message: p.deleteCertificateError?.["message"],
                    values:
                      p.deleteCertificateError?.["values"] === undefined
                        ? p.deleteCertificateError?.["values"]
                        : p.deleteCertificateError?.["values"].map((p: any) => {
                            return { name: p["name"], value: p["value"] };
                          }),
                  },
              data:
                typeof p["data"] === "string"
                  ? stringToUint8Array(p["data"], "base64")
                  : p["data"],
              certificateFormat: p["certificateFormat"],
              password: p["password"],
            };
          }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists all of the Certificates that have been added to the specified Account. */
export function listCertificates(
  context: Client,
  options: ListCertificatesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchCertificate> {
  return buildPagedAsyncIterator(
    context,
    () => _listCertificatesSend(context, options),
    _listCertificatesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _cancelCertificateDeletionSend(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: CancelCertificateDeletionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete",
      thumbprintAlgorithm,
      thumbprint,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _cancelCertificateDeletionDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
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
export async function cancelCertificateDeletion(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: CancelCertificateDeletionOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _cancelCertificateDeletionSend(
    context,
    thumbprintAlgorithm,
    thumbprint,
    options,
  );
  return _cancelCertificateDeletionDeserialize(result);
}

export function _deleteCertificateSend(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: DeleteCertificateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})",
      thumbprintAlgorithm,
      thumbprint,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _deleteCertificateDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
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
export async function deleteCertificate(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: DeleteCertificateOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteCertificateSend(
    context,
    thumbprintAlgorithm,
    thumbprint,
    options,
  );
  return _deleteCertificateDeserialize(result);
}

export function _getCertificateSend(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: GetCertificateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})",
      thumbprintAlgorithm,
      thumbprint,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
        $select: options?.$select,
      },
    });
}

export async function _getCertificateDeserialize(
  result: PathUncheckedResponse,
): Promise<BatchCertificate> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    thumbprint: result.body["thumbprint"],
    thumbprintAlgorithm: result.body["thumbprintAlgorithm"],
    url: result.body["url"],
    state: result.body["state"],
    stateTransitionTime:
      result.body["stateTransitionTime"] !== undefined
        ? new Date(result.body["stateTransitionTime"])
        : undefined,
    previousState: result.body["previousState"],
    previousStateTransitionTime:
      result.body["previousStateTransitionTime"] !== undefined
        ? new Date(result.body["previousStateTransitionTime"])
        : undefined,
    publicData:
      typeof result.body["publicData"] === "string"
        ? stringToUint8Array(result.body["publicData"], "base64")
        : result.body["publicData"],
    deleteCertificateError: !result.body.deleteCertificateError
      ? undefined
      : {
          code: result.body.deleteCertificateError?.["code"],
          message: result.body.deleteCertificateError?.["message"],
          values:
            result.body.deleteCertificateError?.["values"] === undefined
              ? result.body.deleteCertificateError?.["values"]
              : result.body.deleteCertificateError?.["values"].map((p: any) => {
                  return { name: p["name"], value: p["value"] };
                }),
        },
    data:
      typeof result.body["data"] === "string"
        ? stringToUint8Array(result.body["data"], "base64")
        : result.body["data"],
    certificateFormat: result.body["certificateFormat"],
    password: result.body["password"],
  };
}

/** Gets information about the specified Certificate. */
export async function getCertificate(
  context: Client,
  thumbprintAlgorithm: string,
  thumbprint: string,
  options: GetCertificateOptionalParams = { requestOptions: {} },
): Promise<BatchCertificate> {
  const result = await _getCertificateSend(
    context,
    thumbprintAlgorithm,
    thumbprint,
    options,
  );
  return _getCertificateDeserialize(result);
}

export function _jobScheduleExistsSend(
  context: Client,
  jobScheduleId: string,
  options: JobScheduleExistsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .head({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _jobScheduleExistsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "404"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Checks the specified Job Schedule exists. */
export async function jobScheduleExists(
  context: Client,
  jobScheduleId: string,
  options: JobScheduleExistsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _jobScheduleExistsSend(context, jobScheduleId, options);
  return _jobScheduleExistsDeserialize(result);
}

export function _deleteJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: DeleteJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _deleteJobScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * When you delete a Job Schedule, this also deletes all Jobs and Tasks under that
 * schedule. When Tasks are deleted, all the files in their working directories on
 * the Compute Nodes are also deleted (the retention period is ignored). The Job
 * Schedule statistics are no longer accessible once the Job Schedule is deleted,
 * though they are still counted towards Account lifetime statistics.
 */
export async function deleteJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: DeleteJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteJobScheduleSend(context, jobScheduleId, options);
  return _deleteJobScheduleDeserialize(result);
}

export function _getJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: GetJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
        $select: options?.$select,
        $expand: options?.$expand,
      },
    });
}

export async function _getJobScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<BatchJobSchedule> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    displayName: result.body["displayName"],
    url: result.body["url"],
    eTag: result.body["eTag"],
    lastModified:
      result.body["lastModified"] !== undefined
        ? new Date(result.body["lastModified"])
        : undefined,
    creationTime:
      result.body["creationTime"] !== undefined
        ? new Date(result.body["creationTime"])
        : undefined,
    state: result.body["state"],
    stateTransitionTime:
      result.body["stateTransitionTime"] !== undefined
        ? new Date(result.body["stateTransitionTime"])
        : undefined,
    previousState: result.body["previousState"],
    previousStateTransitionTime:
      result.body["previousStateTransitionTime"] !== undefined
        ? new Date(result.body["previousStateTransitionTime"])
        : undefined,
    schedule: {
      doNotRunUntil:
        result.body.schedule["doNotRunUntil"] !== undefined
          ? new Date(result.body.schedule["doNotRunUntil"])
          : undefined,
      doNotRunAfter:
        result.body.schedule["doNotRunAfter"] !== undefined
          ? new Date(result.body.schedule["doNotRunAfter"])
          : undefined,
      startWindow: result.body.schedule["startWindow"],
      recurrenceInterval: result.body.schedule["recurrenceInterval"],
    },
    jobSpecification: {
      priority: result.body.jobSpecification["priority"],
      allowTaskPreemption: result.body.jobSpecification["allowTaskPreemption"],
      maxParallelTasks: result.body.jobSpecification["maxParallelTasks"],
      displayName: result.body.jobSpecification["displayName"],
      usesTaskDependencies:
        result.body.jobSpecification["usesTaskDependencies"],
      onAllTasksComplete: result.body.jobSpecification["onAllTasksComplete"],
      onTaskFailure: result.body.jobSpecification["onTaskFailure"],
      networkConfiguration: !result.body.jobSpecification.networkConfiguration
        ? undefined
        : {
            subnetId:
              result.body.jobSpecification.networkConfiguration?.["subnetId"],
          },
      constraints: !result.body.jobSpecification.constraints
        ? undefined
        : {
            maxWallClockTime:
              result.body.jobSpecification.constraints?.["maxWallClockTime"],
            maxTaskRetryCount:
              result.body.jobSpecification.constraints?.["maxTaskRetryCount"],
          },
      jobManagerTask: !result.body.jobSpecification.jobManagerTask
        ? undefined
        : {
            id: result.body.jobSpecification.jobManagerTask?.["id"],
            displayName:
              result.body.jobSpecification.jobManagerTask?.["displayName"],
            commandLine:
              result.body.jobSpecification.jobManagerTask?.["commandLine"],
            containerSettings: !result.body.jobSpecification.jobManagerTask
              ?.containerSettings
              ? undefined
              : {
                  containerRunOptions:
                    result.body.jobSpecification.jobManagerTask
                      ?.containerSettings?.["containerRunOptions"],
                  imageName:
                    result.body.jobSpecification.jobManagerTask
                      ?.containerSettings?.["imageName"],
                  registry: !result.body.jobSpecification.jobManagerTask
                    ?.containerSettings?.registry
                    ? undefined
                    : {
                        username:
                          result.body.jobSpecification.jobManagerTask
                            ?.containerSettings?.registry?.["username"],
                        password:
                          result.body.jobSpecification.jobManagerTask
                            ?.containerSettings?.registry?.["password"],
                        registryServer:
                          result.body.jobSpecification.jobManagerTask
                            ?.containerSettings?.registry?.["registryServer"],
                        identityReference: !result.body.jobSpecification
                          .jobManagerTask?.containerSettings?.registry
                          ?.identityReference
                          ? undefined
                          : {
                              resourceId:
                                result.body.jobSpecification.jobManagerTask
                                  ?.containerSettings?.registry
                                  ?.identityReference?.["resourceId"],
                            },
                      },
                  workingDirectory:
                    result.body.jobSpecification.jobManagerTask
                      ?.containerSettings?.["workingDirectory"],
                },
            resourceFiles:
              result.body.jobSpecification.jobManagerTask?.["resourceFiles"] ===
              undefined
                ? result.body.jobSpecification.jobManagerTask?.["resourceFiles"]
                : result.body.jobSpecification.jobManagerTask?.[
                    "resourceFiles"
                  ].map((p: any) => {
                    return {
                      autoStorageContainerName: p["autoStorageContainerName"],
                      storageContainerUrl: p["storageContainerUrl"],
                      httpUrl: p["httpUrl"],
                      blobPrefix: p["blobPrefix"],
                      filePath: p["filePath"],
                      fileMode: p["fileMode"],
                      identityReference: !p.identityReference
                        ? undefined
                        : { resourceId: p.identityReference?.["resourceId"] },
                    };
                  }),
            outputFiles:
              result.body.jobSpecification.jobManagerTask?.["outputFiles"] ===
              undefined
                ? result.body.jobSpecification.jobManagerTask?.["outputFiles"]
                : result.body.jobSpecification.jobManagerTask?.[
                    "outputFiles"
                  ].map((p: any) => {
                    return {
                      filePattern: p["filePattern"],
                      destination: {
                        container: !p.destination.container
                          ? undefined
                          : {
                              path: p.destination.container?.["path"],
                              containerUrl:
                                p.destination.container?.["containerUrl"],
                              identityReference: !p.destination.container
                                ?.identityReference
                                ? undefined
                                : {
                                    resourceId:
                                      p.destination.container
                                        ?.identityReference?.["resourceId"],
                                  },
                              uploadHeaders:
                                p.destination.container?.["uploadHeaders"] ===
                                undefined
                                  ? p.destination.container?.["uploadHeaders"]
                                  : p.destination.container?.[
                                      "uploadHeaders"
                                    ].map((p: any) => {
                                      return {
                                        name: p["name"],
                                        value: p["value"],
                                      };
                                    }),
                            },
                      },
                      uploadOptions: {
                        uploadCondition: p.uploadOptions["uploadCondition"],
                      },
                    };
                  }),
            environmentSettings:
              result.body.jobSpecification.jobManagerTask?.[
                "environmentSettings"
              ] === undefined
                ? result.body.jobSpecification.jobManagerTask?.[
                    "environmentSettings"
                  ]
                : result.body.jobSpecification.jobManagerTask?.[
                    "environmentSettings"
                  ].map((p: any) => {
                    return { name: p["name"], value: p["value"] };
                  }),
            constraints: !result.body.jobSpecification.jobManagerTask
              ?.constraints
              ? undefined
              : {
                  maxWallClockTime:
                    result.body.jobSpecification.jobManagerTask?.constraints?.[
                      "maxWallClockTime"
                    ],
                  retentionTime:
                    result.body.jobSpecification.jobManagerTask?.constraints?.[
                      "retentionTime"
                    ],
                  maxTaskRetryCount:
                    result.body.jobSpecification.jobManagerTask?.constraints?.[
                      "maxTaskRetryCount"
                    ],
                },
            requiredSlots:
              result.body.jobSpecification.jobManagerTask?.["requiredSlots"],
            killJobOnCompletion:
              result.body.jobSpecification.jobManagerTask?.[
                "killJobOnCompletion"
              ],
            userIdentity: !result.body.jobSpecification.jobManagerTask
              ?.userIdentity
              ? undefined
              : {
                  username:
                    result.body.jobSpecification.jobManagerTask?.userIdentity?.[
                      "username"
                    ],
                  autoUser: !result.body.jobSpecification.jobManagerTask
                    ?.userIdentity?.autoUser
                    ? undefined
                    : {
                        scope:
                          result.body.jobSpecification.jobManagerTask
                            ?.userIdentity?.autoUser?.["scope"],
                        elevationLevel:
                          result.body.jobSpecification.jobManagerTask
                            ?.userIdentity?.autoUser?.["elevationLevel"],
                      },
                },
            runExclusive:
              result.body.jobSpecification.jobManagerTask?.["runExclusive"],
            applicationPackageReferences:
              result.body.jobSpecification.jobManagerTask?.[
                "applicationPackageReferences"
              ] === undefined
                ? result.body.jobSpecification.jobManagerTask?.[
                    "applicationPackageReferences"
                  ]
                : result.body.jobSpecification.jobManagerTask?.[
                    "applicationPackageReferences"
                  ].map((p: any) => {
                    return {
                      applicationId: p["applicationId"],
                      version: p["version"],
                    };
                  }),
            authenticationTokenSettings: !result.body.jobSpecification
              .jobManagerTask?.authenticationTokenSettings
              ? undefined
              : {
                  access:
                    result.body.jobSpecification.jobManagerTask
                      ?.authenticationTokenSettings?.["access"],
                },
            allowLowPriorityNode:
              result.body.jobSpecification.jobManagerTask?.[
                "allowLowPriorityNode"
              ],
          },
      jobPreparationTask: !result.body.jobSpecification.jobPreparationTask
        ? undefined
        : {
            id: result.body.jobSpecification.jobPreparationTask?.["id"],
            commandLine:
              result.body.jobSpecification.jobPreparationTask?.["commandLine"],
            containerSettings: !result.body.jobSpecification.jobPreparationTask
              ?.containerSettings
              ? undefined
              : {
                  containerRunOptions:
                    result.body.jobSpecification.jobPreparationTask
                      ?.containerSettings?.["containerRunOptions"],
                  imageName:
                    result.body.jobSpecification.jobPreparationTask
                      ?.containerSettings?.["imageName"],
                  registry: !result.body.jobSpecification.jobPreparationTask
                    ?.containerSettings?.registry
                    ? undefined
                    : {
                        username:
                          result.body.jobSpecification.jobPreparationTask
                            ?.containerSettings?.registry?.["username"],
                        password:
                          result.body.jobSpecification.jobPreparationTask
                            ?.containerSettings?.registry?.["password"],
                        registryServer:
                          result.body.jobSpecification.jobPreparationTask
                            ?.containerSettings?.registry?.["registryServer"],
                        identityReference: !result.body.jobSpecification
                          .jobPreparationTask?.containerSettings?.registry
                          ?.identityReference
                          ? undefined
                          : {
                              resourceId:
                                result.body.jobSpecification.jobPreparationTask
                                  ?.containerSettings?.registry
                                  ?.identityReference?.["resourceId"],
                            },
                      },
                  workingDirectory:
                    result.body.jobSpecification.jobPreparationTask
                      ?.containerSettings?.["workingDirectory"],
                },
            resourceFiles:
              result.body.jobSpecification.jobPreparationTask?.[
                "resourceFiles"
              ] === undefined
                ? result.body.jobSpecification.jobPreparationTask?.[
                    "resourceFiles"
                  ]
                : result.body.jobSpecification.jobPreparationTask?.[
                    "resourceFiles"
                  ].map((p: any) => {
                    return {
                      autoStorageContainerName: p["autoStorageContainerName"],
                      storageContainerUrl: p["storageContainerUrl"],
                      httpUrl: p["httpUrl"],
                      blobPrefix: p["blobPrefix"],
                      filePath: p["filePath"],
                      fileMode: p["fileMode"],
                      identityReference: !p.identityReference
                        ? undefined
                        : { resourceId: p.identityReference?.["resourceId"] },
                    };
                  }),
            environmentSettings:
              result.body.jobSpecification.jobPreparationTask?.[
                "environmentSettings"
              ] === undefined
                ? result.body.jobSpecification.jobPreparationTask?.[
                    "environmentSettings"
                  ]
                : result.body.jobSpecification.jobPreparationTask?.[
                    "environmentSettings"
                  ].map((p: any) => {
                    return { name: p["name"], value: p["value"] };
                  }),
            constraints: !result.body.jobSpecification.jobPreparationTask
              ?.constraints
              ? undefined
              : {
                  maxWallClockTime:
                    result.body.jobSpecification.jobPreparationTask
                      ?.constraints?.["maxWallClockTime"],
                  retentionTime:
                    result.body.jobSpecification.jobPreparationTask
                      ?.constraints?.["retentionTime"],
                  maxTaskRetryCount:
                    result.body.jobSpecification.jobPreparationTask
                      ?.constraints?.["maxTaskRetryCount"],
                },
            waitForSuccess:
              result.body.jobSpecification.jobPreparationTask?.[
                "waitForSuccess"
              ],
            userIdentity: !result.body.jobSpecification.jobPreparationTask
              ?.userIdentity
              ? undefined
              : {
                  username:
                    result.body.jobSpecification.jobPreparationTask
                      ?.userIdentity?.["username"],
                  autoUser: !result.body.jobSpecification.jobPreparationTask
                    ?.userIdentity?.autoUser
                    ? undefined
                    : {
                        scope:
                          result.body.jobSpecification.jobPreparationTask
                            ?.userIdentity?.autoUser?.["scope"],
                        elevationLevel:
                          result.body.jobSpecification.jobPreparationTask
                            ?.userIdentity?.autoUser?.["elevationLevel"],
                      },
                },
            rerunOnNodeRebootAfterSuccess:
              result.body.jobSpecification.jobPreparationTask?.[
                "rerunOnNodeRebootAfterSuccess"
              ],
          },
      jobReleaseTask: !result.body.jobSpecification.jobReleaseTask
        ? undefined
        : {
            id: result.body.jobSpecification.jobReleaseTask?.["id"],
            commandLine:
              result.body.jobSpecification.jobReleaseTask?.["commandLine"],
            containerSettings: !result.body.jobSpecification.jobReleaseTask
              ?.containerSettings
              ? undefined
              : {
                  containerRunOptions:
                    result.body.jobSpecification.jobReleaseTask
                      ?.containerSettings?.["containerRunOptions"],
                  imageName:
                    result.body.jobSpecification.jobReleaseTask
                      ?.containerSettings?.["imageName"],
                  registry: !result.body.jobSpecification.jobReleaseTask
                    ?.containerSettings?.registry
                    ? undefined
                    : {
                        username:
                          result.body.jobSpecification.jobReleaseTask
                            ?.containerSettings?.registry?.["username"],
                        password:
                          result.body.jobSpecification.jobReleaseTask
                            ?.containerSettings?.registry?.["password"],
                        registryServer:
                          result.body.jobSpecification.jobReleaseTask
                            ?.containerSettings?.registry?.["registryServer"],
                        identityReference: !result.body.jobSpecification
                          .jobReleaseTask?.containerSettings?.registry
                          ?.identityReference
                          ? undefined
                          : {
                              resourceId:
                                result.body.jobSpecification.jobReleaseTask
                                  ?.containerSettings?.registry
                                  ?.identityReference?.["resourceId"],
                            },
                      },
                  workingDirectory:
                    result.body.jobSpecification.jobReleaseTask
                      ?.containerSettings?.["workingDirectory"],
                },
            resourceFiles:
              result.body.jobSpecification.jobReleaseTask?.["resourceFiles"] ===
              undefined
                ? result.body.jobSpecification.jobReleaseTask?.["resourceFiles"]
                : result.body.jobSpecification.jobReleaseTask?.[
                    "resourceFiles"
                  ].map((p: any) => {
                    return {
                      autoStorageContainerName: p["autoStorageContainerName"],
                      storageContainerUrl: p["storageContainerUrl"],
                      httpUrl: p["httpUrl"],
                      blobPrefix: p["blobPrefix"],
                      filePath: p["filePath"],
                      fileMode: p["fileMode"],
                      identityReference: !p.identityReference
                        ? undefined
                        : { resourceId: p.identityReference?.["resourceId"] },
                    };
                  }),
            environmentSettings:
              result.body.jobSpecification.jobReleaseTask?.[
                "environmentSettings"
              ] === undefined
                ? result.body.jobSpecification.jobReleaseTask?.[
                    "environmentSettings"
                  ]
                : result.body.jobSpecification.jobReleaseTask?.[
                    "environmentSettings"
                  ].map((p: any) => {
                    return { name: p["name"], value: p["value"] };
                  }),
            maxWallClockTime:
              result.body.jobSpecification.jobReleaseTask?.["maxWallClockTime"],
            retentionTime:
              result.body.jobSpecification.jobReleaseTask?.["retentionTime"],
            userIdentity: !result.body.jobSpecification.jobReleaseTask
              ?.userIdentity
              ? undefined
              : {
                  username:
                    result.body.jobSpecification.jobReleaseTask?.userIdentity?.[
                      "username"
                    ],
                  autoUser: !result.body.jobSpecification.jobReleaseTask
                    ?.userIdentity?.autoUser
                    ? undefined
                    : {
                        scope:
                          result.body.jobSpecification.jobReleaseTask
                            ?.userIdentity?.autoUser?.["scope"],
                        elevationLevel:
                          result.body.jobSpecification.jobReleaseTask
                            ?.userIdentity?.autoUser?.["elevationLevel"],
                      },
                },
          },
      commonEnvironmentSettings:
        result.body.jobSpecification["commonEnvironmentSettings"] === undefined
          ? result.body.jobSpecification["commonEnvironmentSettings"]
          : result.body.jobSpecification["commonEnvironmentSettings"].map(
              (p: any) => {
                return { name: p["name"], value: p["value"] };
              },
            ),
      poolInfo: {
        poolId: result.body.jobSpecification.poolInfo["poolId"],
        autoPoolSpecification: !result.body.jobSpecification.poolInfo
          .autoPoolSpecification
          ? undefined
          : {
              autoPoolIdPrefix:
                result.body.jobSpecification.poolInfo.autoPoolSpecification?.[
                  "autoPoolIdPrefix"
                ],
              poolLifetimeOption:
                result.body.jobSpecification.poolInfo.autoPoolSpecification?.[
                  "poolLifetimeOption"
                ],
              keepAlive:
                result.body.jobSpecification.poolInfo.autoPoolSpecification?.[
                  "keepAlive"
                ],
              pool: !result.body.jobSpecification.poolInfo.autoPoolSpecification
                ?.pool
                ? undefined
                : {
                    displayName:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["displayName"],
                    vmSize:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["vmSize"],
                    cloudServiceConfiguration: !result.body.jobSpecification
                      .poolInfo.autoPoolSpecification?.pool
                      ?.cloudServiceConfiguration
                      ? undefined
                      : {
                          osFamily:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.cloudServiceConfiguration?.["osFamily"],
                          osVersion:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.cloudServiceConfiguration?.["osVersion"],
                        },
                    virtualMachineConfiguration: !result.body.jobSpecification
                      .poolInfo.autoPoolSpecification?.pool
                      ?.virtualMachineConfiguration
                      ? undefined
                      : {
                          imageReference: {
                            publisher:
                              result.body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.imageReference[
                                "publisher"
                              ],
                            offer:
                              result.body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.imageReference[
                                "offer"
                              ],
                            sku: result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.imageReference[
                              "sku"
                            ],
                            version:
                              result.body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.imageReference[
                                "version"
                              ],
                            virtualMachineImageId:
                              result.body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.imageReference[
                                "virtualMachineImageId"
                              ],
                            exactVersion:
                              result.body.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration?.imageReference[
                                "exactVersion"
                              ],
                          },
                          nodeAgentSkuId:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.["nodeAgentSKUId"],
                          windowsConfiguration: !result.body.jobSpecification
                            .poolInfo.autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration?.windowsConfiguration
                            ? undefined
                            : {
                                enableAutomaticUpdates:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.windowsConfiguration?.[
                                    "enableAutomaticUpdates"
                                  ],
                              },
                          dataDisks:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.["dataDisks"] ===
                            undefined
                              ? result.body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.["dataDisks"]
                              : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                  "dataDisks"
                                ].map((p: any) => {
                                  return {
                                    lun: p["lun"],
                                    caching: p["caching"],
                                    diskSizeGb: p["diskSizeGB"],
                                    storageAccountType: p["storageAccountType"],
                                  };
                                }),
                          licenseType:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.["licenseType"],
                          containerConfiguration: !result.body.jobSpecification
                            .poolInfo.autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration
                            ?.containerConfiguration
                            ? undefined
                            : {
                                type: result.body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration
                                  ?.containerConfiguration?.["type"],
                                containerImageNames:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.containerConfiguration?.[
                                    "containerImageNames"
                                  ],
                                containerRegistries:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.containerConfiguration?.[
                                    "containerRegistries"
                                  ] === undefined
                                    ? result.body.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.containerConfiguration?.[
                                        "containerRegistries"
                                      ]
                                    : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
                                        "containerRegistries"
                                      ].map((p: any) => {
                                        return {
                                          username: p["username"],
                                          password: p["password"],
                                          registryServer: p["registryServer"],
                                          identityReference:
                                            !p.identityReference
                                              ? undefined
                                              : {
                                                  resourceId:
                                                    p.identityReference?.[
                                                      "resourceId"
                                                    ],
                                                },
                                        };
                                      }),
                              },
                          diskEncryptionConfiguration: !result.body
                            .jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.virtualMachineConfiguration
                            ?.diskEncryptionConfiguration
                            ? undefined
                            : {
                                targets:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.diskEncryptionConfiguration?.["targets"],
                              },
                          nodePlacementConfiguration: !result.body
                            .jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.virtualMachineConfiguration
                            ?.nodePlacementConfiguration
                            ? undefined
                            : {
                                policy:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.virtualMachineConfiguration
                                    ?.nodePlacementConfiguration?.["policy"],
                              },
                          extensions:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.virtualMachineConfiguration?.["extensions"] ===
                            undefined
                              ? result.body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.["extensions"]
                              : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                  "extensions"
                                ].map((p: any) => {
                                  return {
                                    name: p["name"],
                                    publisher: p["publisher"],
                                    type: p["type"],
                                    typeHandlerVersion: p["typeHandlerVersion"],
                                    autoUpgradeMinorVersion:
                                      p["autoUpgradeMinorVersion"],
                                    enableAutomaticUpgrade:
                                      p["enableAutomaticUpgrade"],
                                    settings: p["settings"],
                                    protectedSettings: p["protectedSettings"],
                                    provisionAfterExtensions:
                                      p["provisionAfterExtensions"],
                                  };
                                }),
                          osDisk: !result.body.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool
                            ?.virtualMachineConfiguration?.osDisk
                            ? undefined
                            : {
                                ephemeralOSDiskSettings: !result.body
                                  .jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool
                                  ?.virtualMachineConfiguration?.osDisk
                                  ?.ephemeralOSDiskSettings
                                  ? undefined
                                  : {
                                      placement:
                                        result.body.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration?.osDisk
                                          ?.ephemeralOSDiskSettings?.[
                                          "placement"
                                        ],
                                    },
                              },
                        },
                    taskSlotsPerNode:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["taskSlotsPerNode"],
                    taskSchedulingPolicy: !result.body.jobSpecification.poolInfo
                      .autoPoolSpecification?.pool?.taskSchedulingPolicy
                      ? undefined
                      : {
                          nodeFillType:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.taskSchedulingPolicy?.["nodeFillType"],
                        },
                    resizeTimeout:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["resizeTimeout"],
                    targetDedicatedNodes:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["targetDedicatedNodes"],
                    targetLowPriorityNodes:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.[
                        "targetLowPriorityNodes"
                      ],
                    enableAutoScale:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["enableAutoScale"],
                    autoScaleFormula:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["autoScaleFormula"],
                    autoScaleEvaluationInterval:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.[
                        "autoScaleEvaluationInterval"
                      ],
                    enableInterNodeCommunication:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.[
                        "enableInterNodeCommunication"
                      ],
                    networkConfiguration: !result.body.jobSpecification.poolInfo
                      .autoPoolSpecification?.pool?.networkConfiguration
                      ? undefined
                      : {
                          subnetId:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.networkConfiguration?.["subnetId"],
                          dynamicVNetAssignmentScope:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.networkConfiguration?.[
                              "dynamicVNetAssignmentScope"
                            ],
                          endpointConfiguration: !result.body.jobSpecification
                            .poolInfo.autoPoolSpecification?.pool
                            ?.networkConfiguration?.endpointConfiguration
                            ? undefined
                            : {
                                inboundNatPools:
                                  result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
                                    "inboundNATPools"
                                  ].map((p: any) => {
                                    return {
                                      name: p["name"],
                                      protocol: p["protocol"],
                                      backendPort: p["backendPort"],
                                      frontendPortRangeStart:
                                        p["frontendPortRangeStart"],
                                      frontendPortRangeEnd:
                                        p["frontendPortRangeEnd"],
                                      networkSecurityGroupRules:
                                        p["networkSecurityGroupRules"] ===
                                        undefined
                                          ? p["networkSecurityGroupRules"]
                                          : p["networkSecurityGroupRules"].map(
                                              (p: any) => {
                                                return {
                                                  priority: p["priority"],
                                                  access: p["access"],
                                                  sourceAddressPrefix:
                                                    p["sourceAddressPrefix"],
                                                  sourcePortRanges:
                                                    p["sourcePortRanges"],
                                                };
                                              },
                                            ),
                                    };
                                  }),
                              },
                          publicIpAddressConfiguration: !result.body
                            .jobSpecification.poolInfo.autoPoolSpecification
                            ?.pool?.networkConfiguration
                            ?.publicIPAddressConfiguration
                            ? undefined
                            : {
                                IpAddressProvisioningType:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.networkConfiguration
                                    ?.publicIPAddressConfiguration?.[
                                    "provision"
                                  ],
                                ipAddressIds:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool
                                    ?.networkConfiguration
                                    ?.publicIPAddressConfiguration?.[
                                    "ipAddressIds"
                                  ],
                              },
                          enableAcceleratedNetworking:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool
                              ?.networkConfiguration?.[
                              "enableAcceleratedNetworking"
                            ],
                        },
                    startTask: !result.body.jobSpecification.poolInfo
                      .autoPoolSpecification?.pool?.startTask
                      ? undefined
                      : {
                          commandLine:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool?.startTask?.[
                              "commandLine"
                            ],
                          containerSettings: !result.body.jobSpecification
                            .poolInfo.autoPoolSpecification?.pool?.startTask
                            ?.containerSettings
                            ? undefined
                            : {
                                containerRunOptions:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool?.startTask
                                    ?.containerSettings?.[
                                    "containerRunOptions"
                                  ],
                                imageName:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool?.startTask
                                    ?.containerSettings?.["imageName"],
                                registry: !result.body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.startTask
                                  ?.containerSettings?.registry
                                  ? undefined
                                  : {
                                      username:
                                        result.body.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.containerSettings
                                          ?.registry?.["username"],
                                      password:
                                        result.body.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.containerSettings
                                          ?.registry?.["password"],
                                      registryServer:
                                        result.body.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.containerSettings
                                          ?.registry?.["registryServer"],
                                      identityReference: !result.body
                                        .jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool?.startTask
                                        ?.containerSettings?.registry
                                        ?.identityReference
                                        ? undefined
                                        : {
                                            resourceId:
                                              result.body.jobSpecification
                                                .poolInfo.autoPoolSpecification
                                                ?.pool?.startTask
                                                ?.containerSettings?.registry
                                                ?.identityReference?.[
                                                "resourceId"
                                              ],
                                          },
                                    },
                                workingDirectory:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool?.startTask
                                    ?.containerSettings?.["workingDirectory"],
                              },
                          resourceFiles:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool?.startTask?.[
                              "resourceFiles"
                            ] === undefined
                              ? result.body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.startTask?.[
                                  "resourceFiles"
                                ]
                              : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                  "resourceFiles"
                                ].map((p: any) => {
                                  return {
                                    autoStorageContainerName:
                                      p["autoStorageContainerName"],
                                    storageContainerUrl:
                                      p["storageContainerUrl"],
                                    httpUrl: p["httpUrl"],
                                    blobPrefix: p["blobPrefix"],
                                    filePath: p["filePath"],
                                    fileMode: p["fileMode"],
                                    identityReference: !p.identityReference
                                      ? undefined
                                      : {
                                          resourceId:
                                            p.identityReference?.["resourceId"],
                                        },
                                  };
                                }),
                          environmentSettings:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool?.startTask?.[
                              "environmentSettings"
                            ] === undefined
                              ? result.body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.startTask?.[
                                  "environmentSettings"
                                ]
                              : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                  "environmentSettings"
                                ].map((p: any) => {
                                  return { name: p["name"], value: p["value"] };
                                }),
                          userIdentity: !result.body.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool?.startTask
                            ?.userIdentity
                            ? undefined
                            : {
                                username:
                                  result.body.jobSpecification.poolInfo
                                    .autoPoolSpecification?.pool?.startTask
                                    ?.userIdentity?.["username"],
                                autoUser: !result.body.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.startTask
                                  ?.userIdentity?.autoUser
                                  ? undefined
                                  : {
                                      scope:
                                        result.body.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.userIdentity?.autoUser?.[
                                          "scope"
                                        ],
                                      elevationLevel:
                                        result.body.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.startTask?.userIdentity?.autoUser?.[
                                          "elevationLevel"
                                        ],
                                    },
                              },
                          maxTaskRetryCount:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool?.startTask?.[
                              "maxTaskRetryCount"
                            ],
                          waitForSuccess:
                            result.body.jobSpecification.poolInfo
                              .autoPoolSpecification?.pool?.startTask?.[
                              "waitForSuccess"
                            ],
                        },
                    certificateReferences:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.[
                        "certificateReferences"
                      ] === undefined
                        ? result.body.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool?.[
                            "certificateReferences"
                          ]
                        : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                            "certificateReferences"
                          ].map((p: any) => {
                            return {
                              thumbprint: p["thumbprint"],
                              thumbprintAlgorithm: p["thumbprintAlgorithm"],
                              storeLocation: p["storeLocation"],
                              storeName: p["storeName"],
                              visibility: p["visibility"],
                            };
                          }),
                    applicationPackageReferences:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.[
                        "applicationPackageReferences"
                      ] === undefined
                        ? result.body.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool?.[
                            "applicationPackageReferences"
                          ]
                        : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                            "applicationPackageReferences"
                          ].map((p: any) => {
                            return {
                              applicationId: p["applicationId"],
                              version: p["version"],
                            };
                          }),
                    applicationLicenses:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["applicationLicenses"],
                    userAccounts:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["userAccounts"] ===
                      undefined
                        ? result.body.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool?.["userAccounts"]
                        : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                            "userAccounts"
                          ].map((p: any) => {
                            return {
                              name: p["name"],
                              password: p["password"],
                              elevationLevel: p["elevationLevel"],
                              linuxUserConfiguration: !p.linuxUserConfiguration
                                ? undefined
                                : {
                                    uid: p.linuxUserConfiguration?.["uid"],
                                    gid: p.linuxUserConfiguration?.["gid"],
                                    sshPrivateKey:
                                      p.linuxUserConfiguration?.[
                                        "sshPrivateKey"
                                      ],
                                  },
                              windowsUserConfiguration:
                                !p.windowsUserConfiguration
                                  ? undefined
                                  : {
                                      loginMode:
                                        p.windowsUserConfiguration?.[
                                          "loginMode"
                                        ],
                                    },
                            };
                          }),
                    metadata:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["metadata"] === undefined
                        ? result.body.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool?.["metadata"]
                        : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                            "metadata"
                          ].map((p: any) => {
                            return { name: p["name"], value: p["value"] };
                          }),
                    mountConfiguration:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.["mountConfiguration"] ===
                      undefined
                        ? result.body.jobSpecification.poolInfo
                            .autoPoolSpecification?.pool?.["mountConfiguration"]
                        : result.body.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                            "mountConfiguration"
                          ].map((p: any) => {
                            return {
                              azureBlobFileSystemConfiguration:
                                !p.azureBlobFileSystemConfiguration
                                  ? undefined
                                  : {
                                      accountName:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "accountName"
                                        ],
                                      containerName:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "containerName"
                                        ],
                                      accountKey:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "accountKey"
                                        ],
                                      sasKey:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "sasKey"
                                        ],
                                      blobfuseOptions:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "blobfuseOptions"
                                        ],
                                      relativeMountPath:
                                        p.azureBlobFileSystemConfiguration?.[
                                          "relativeMountPath"
                                        ],
                                      identityReference: !p
                                        .azureBlobFileSystemConfiguration
                                        ?.identityReference
                                        ? undefined
                                        : {
                                            resourceId:
                                              p.azureBlobFileSystemConfiguration
                                                ?.identityReference?.[
                                                "resourceId"
                                              ],
                                          },
                                    },
                              nfsMountConfiguration: !p.nfsMountConfiguration
                                ? undefined
                                : {
                                    source: p.nfsMountConfiguration?.["source"],
                                    relativeMountPath:
                                      p.nfsMountConfiguration?.[
                                        "relativeMountPath"
                                      ],
                                    mountOptions:
                                      p.nfsMountConfiguration?.["mountOptions"],
                                  },
                              cifsMountConfiguration: !p.cifsMountConfiguration
                                ? undefined
                                : {
                                    username:
                                      p.cifsMountConfiguration?.["username"],
                                    source:
                                      p.cifsMountConfiguration?.["source"],
                                    relativeMountPath:
                                      p.cifsMountConfiguration?.[
                                        "relativeMountPath"
                                      ],
                                    mountOptions:
                                      p.cifsMountConfiguration?.[
                                        "mountOptions"
                                      ],
                                    password:
                                      p.cifsMountConfiguration?.["password"],
                                  },
                              azureFileShareConfiguration:
                                !p.azureFileShareConfiguration
                                  ? undefined
                                  : {
                                      accountName:
                                        p.azureFileShareConfiguration?.[
                                          "accountName"
                                        ],
                                      azureFileUrl:
                                        p.azureFileShareConfiguration?.[
                                          "azureFileUrl"
                                        ],
                                      accountKey:
                                        p.azureFileShareConfiguration?.[
                                          "accountKey"
                                        ],
                                      relativeMountPath:
                                        p.azureFileShareConfiguration?.[
                                          "relativeMountPath"
                                        ],
                                      mountOptions:
                                        p.azureFileShareConfiguration?.[
                                          "mountOptions"
                                        ],
                                    },
                            };
                          }),
                    targetNodeCommunicationMode:
                      result.body.jobSpecification.poolInfo
                        .autoPoolSpecification?.pool?.[
                        "targetNodeCommunicationMode"
                      ],
                  },
            },
      },
      metadata:
        result.body.jobSpecification["metadata"] === undefined
          ? result.body.jobSpecification["metadata"]
          : result.body.jobSpecification["metadata"].map((p: any) => {
              return { name: p["name"], value: p["value"] };
            }),
    },
    executionInfo: !result.body.executionInfo
      ? undefined
      : {
          nextRunTime:
            result.body.executionInfo?.["nextRunTime"] !== undefined
              ? new Date(result.body.executionInfo?.["nextRunTime"])
              : undefined,
          recentJob: !result.body.executionInfo?.recentJob
            ? undefined
            : {
                id: result.body.executionInfo?.recentJob?.["id"],
                url: result.body.executionInfo?.recentJob?.["url"],
              },
          endTime:
            result.body.executionInfo?.["endTime"] !== undefined
              ? new Date(result.body.executionInfo?.["endTime"])
              : undefined,
        },
    metadata:
      result.body["metadata"] === undefined
        ? result.body["metadata"]
        : result.body["metadata"].map((p: any) => {
            return { name: p["name"], value: p["value"] };
          }),
    stats: !result.body.stats
      ? undefined
      : {
          url: result.body.stats?.["url"],
          startTime: new Date(result.body.stats?.["startTime"]),
          lastUpdateTime: new Date(result.body.stats?.["lastUpdateTime"]),
          userCPUTime: result.body.stats?.["userCPUTime"],
          kernelCPUTime: result.body.stats?.["kernelCPUTime"],
          wallClockTime: result.body.stats?.["wallClockTime"],
          readIOps: result.body.stats?.["readIOps"],
          writeIOps: result.body.stats?.["writeIOps"],
          readIOGiB: result.body.stats?.["readIOGiB"],
          writeIOGiB: result.body.stats?.["writeIOGiB"],
          numSucceededTasks: result.body.stats?.["numSucceededTasks"],
          numFailedTasks: result.body.stats?.["numFailedTasks"],
          numTaskRetries: result.body.stats?.["numTaskRetries"],
          waitTime: result.body.stats?.["waitTime"],
        },
  };
}

/** Gets information about the specified Job Schedule. */
export async function getJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: GetJobScheduleOptionalParams = { requestOptions: {} },
): Promise<BatchJobSchedule> {
  const result = await _getJobScheduleSend(context, jobScheduleId, options);
  return _getJobScheduleDeserialize(result);
}

export function _updateJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  body: BatchJobScheduleUpdateOptions,
  options: UpdateJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        schedule: !body.schedule
          ? body.schedule
          : scheduleSerializer(body.schedule),
        jobSpecification: !body.jobSpecification
          ? body.jobSpecification
          : jobSpecificationSerializer(body.jobSpecification),
        metadata:
          body["metadata"] === undefined
            ? body["metadata"]
            : body["metadata"].map(metadataItemSerializer),
      },
    });
}

export async function _updateJobScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * This replaces only the Job Schedule properties specified in the request. For
 * example, if the schedule property is not specified with this request, then the
 * Batch service will keep the existing schedule. Changes to a Job Schedule only
 * impact Jobs created by the schedule after the update has taken place; currently
 * running Jobs are unaffected.
 */
export async function updateJobSchedule(
  context: Client,
  jobScheduleId: string,
  body: BatchJobScheduleUpdateOptions,
  options: UpdateJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _updateJobScheduleSend(
    context,
    jobScheduleId,
    body,
    options,
  );
  return _updateJobScheduleDeserialize(result);
}

export function _replaceJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  body: BatchJobSchedule,
  options: ReplaceJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        schedule: scheduleSerializer(body.schedule),
        jobSpecification: jobSpecificationSerializer(body.jobSpecification),
        metadata:
          body["metadata"] === undefined
            ? body["metadata"]
            : body["metadata"].map(metadataItemSerializer),
      },
    });
}

export async function _replaceJobScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * This fully replaces all the updatable properties of the Job Schedule. For
 * example, if the schedule property is not specified with this request, then the
 * Batch service will remove the existing schedule. Changes to a Job Schedule only
 * impact Jobs created by the schedule after the update has taken place; currently
 * running Jobs are unaffected.
 */
export async function replaceJobSchedule(
  context: Client,
  jobScheduleId: string,
  body: BatchJobSchedule,
  options: ReplaceJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _replaceJobScheduleSend(
    context,
    jobScheduleId,
    body,
    options,
  );
  return _replaceJobScheduleDeserialize(result);
}

export function _disableJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: DisableJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobschedules/{jobScheduleId}/disable", jobScheduleId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _disableJobScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** No new Jobs will be created until the Job Schedule is enabled again. */
export async function disableJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: DisableJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _disableJobScheduleSend(context, jobScheduleId, options);
  return _disableJobScheduleDeserialize(result);
}

export function _enableJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: EnableJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobschedules/{jobScheduleId}/enable", jobScheduleId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _enableJobScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Enables a Job Schedule. */
export async function enableJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: EnableJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _enableJobScheduleSend(context, jobScheduleId, options);
  return _enableJobScheduleDeserialize(result);
}

export function _terminateJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: TerminateJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobschedules/{jobScheduleId}/terminate", jobScheduleId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _terminateJobScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Terminates a Job Schedule. */
export async function terminateJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: TerminateJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _terminateJobScheduleSend(
    context,
    jobScheduleId,
    options,
  );
  return _terminateJobScheduleDeserialize(result);
}

export function _createJobScheduleSend(
  context: Client,
  body: BatchJobScheduleCreateOptions,
  options: CreateJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobschedules")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        id: body["id"],
        displayName: body["displayName"],
        schedule: scheduleSerializer(body.schedule),
        jobSpecification: jobSpecificationSerializer(body.jobSpecification),
        metadata:
          body["metadata"] === undefined
            ? body["metadata"]
            : body["metadata"].map(metadataItemSerializer),
      },
    });
}

export async function _createJobScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Creates a Job Schedule to the specified Account. */
export async function createJobSchedule(
  context: Client,
  body: BatchJobScheduleCreateOptions,
  options: CreateJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createJobScheduleSend(context, body, options);
  return _createJobScheduleDeserialize(result);
}

export function _listJobSchedulesSend(
  context: Client,
  options: ListJobSchedulesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobschedules")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        maxresults: options?.maxresults,
        timeOut: options?.timeOutInSeconds,
        $filter: options?.$filter,
        $select: options?.$select,
        $expand: options?.$expand,
      },
    });
}

export async function _listJobSchedulesDeserialize(
  result: PathUncheckedResponse,
): Promise<_BatchJobScheduleListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              id: p["id"],
              displayName: p["displayName"],
              url: p["url"],
              eTag: p["eTag"],
              lastModified:
                p["lastModified"] !== undefined
                  ? new Date(p["lastModified"])
                  : undefined,
              creationTime:
                p["creationTime"] !== undefined
                  ? new Date(p["creationTime"])
                  : undefined,
              state: p["state"],
              stateTransitionTime:
                p["stateTransitionTime"] !== undefined
                  ? new Date(p["stateTransitionTime"])
                  : undefined,
              previousState: p["previousState"],
              previousStateTransitionTime:
                p["previousStateTransitionTime"] !== undefined
                  ? new Date(p["previousStateTransitionTime"])
                  : undefined,
              schedule: {
                doNotRunUntil:
                  p.schedule["doNotRunUntil"] !== undefined
                    ? new Date(p.schedule["doNotRunUntil"])
                    : undefined,
                doNotRunAfter:
                  p.schedule["doNotRunAfter"] !== undefined
                    ? new Date(p.schedule["doNotRunAfter"])
                    : undefined,
                startWindow: p.schedule["startWindow"],
                recurrenceInterval: p.schedule["recurrenceInterval"],
              },
              jobSpecification: {
                priority: p.jobSpecification["priority"],
                allowTaskPreemption: p.jobSpecification["allowTaskPreemption"],
                maxParallelTasks: p.jobSpecification["maxParallelTasks"],
                displayName: p.jobSpecification["displayName"],
                usesTaskDependencies:
                  p.jobSpecification["usesTaskDependencies"],
                onAllTasksComplete: p.jobSpecification["onAllTasksComplete"],
                onTaskFailure: p.jobSpecification["onTaskFailure"],
                networkConfiguration: !p.jobSpecification.networkConfiguration
                  ? undefined
                  : {
                      subnetId:
                        p.jobSpecification.networkConfiguration?.["subnetId"],
                    },
                constraints: !p.jobSpecification.constraints
                  ? undefined
                  : {
                      maxWallClockTime:
                        p.jobSpecification.constraints?.["maxWallClockTime"],
                      maxTaskRetryCount:
                        p.jobSpecification.constraints?.["maxTaskRetryCount"],
                    },
                jobManagerTask: !p.jobSpecification.jobManagerTask
                  ? undefined
                  : {
                      id: p.jobSpecification.jobManagerTask?.["id"],
                      displayName:
                        p.jobSpecification.jobManagerTask?.["displayName"],
                      commandLine:
                        p.jobSpecification.jobManagerTask?.["commandLine"],
                      containerSettings: !p.jobSpecification.jobManagerTask
                        ?.containerSettings
                        ? undefined
                        : {
                            containerRunOptions:
                              p.jobSpecification.jobManagerTask
                                ?.containerSettings?.["containerRunOptions"],
                            imageName:
                              p.jobSpecification.jobManagerTask
                                ?.containerSettings?.["imageName"],
                            registry: !p.jobSpecification.jobManagerTask
                              ?.containerSettings?.registry
                              ? undefined
                              : {
                                  username:
                                    p.jobSpecification.jobManagerTask
                                      ?.containerSettings?.registry?.[
                                      "username"
                                    ],
                                  password:
                                    p.jobSpecification.jobManagerTask
                                      ?.containerSettings?.registry?.[
                                      "password"
                                    ],
                                  registryServer:
                                    p.jobSpecification.jobManagerTask
                                      ?.containerSettings?.registry?.[
                                      "registryServer"
                                    ],
                                  identityReference: !p.jobSpecification
                                    .jobManagerTask?.containerSettings?.registry
                                    ?.identityReference
                                    ? undefined
                                    : {
                                        resourceId:
                                          p.jobSpecification.jobManagerTask
                                            ?.containerSettings?.registry
                                            ?.identityReference?.["resourceId"],
                                      },
                                },
                            workingDirectory:
                              p.jobSpecification.jobManagerTask
                                ?.containerSettings?.["workingDirectory"],
                          },
                      resourceFiles:
                        p.jobSpecification.jobManagerTask?.["resourceFiles"] ===
                        undefined
                          ? p.jobSpecification.jobManagerTask?.["resourceFiles"]
                          : p.jobSpecification.jobManagerTask?.[
                              "resourceFiles"
                            ].map((p: any) => {
                              return {
                                autoStorageContainerName:
                                  p["autoStorageContainerName"],
                                storageContainerUrl: p["storageContainerUrl"],
                                httpUrl: p["httpUrl"],
                                blobPrefix: p["blobPrefix"],
                                filePath: p["filePath"],
                                fileMode: p["fileMode"],
                                identityReference: !p.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.identityReference?.["resourceId"],
                                    },
                              };
                            }),
                      outputFiles:
                        p.jobSpecification.jobManagerTask?.["outputFiles"] ===
                        undefined
                          ? p.jobSpecification.jobManagerTask?.["outputFiles"]
                          : p.jobSpecification.jobManagerTask?.[
                              "outputFiles"
                            ].map((p: any) => {
                              return {
                                filePattern: p["filePattern"],
                                destination: {
                                  container: !p.destination.container
                                    ? undefined
                                    : {
                                        path: p.destination.container?.["path"],
                                        containerUrl:
                                          p.destination.container?.[
                                            "containerUrl"
                                          ],
                                        identityReference: !p.destination
                                          .container?.identityReference
                                          ? undefined
                                          : {
                                              resourceId:
                                                p.destination.container
                                                  ?.identityReference?.[
                                                  "resourceId"
                                                ],
                                            },
                                        uploadHeaders:
                                          p.destination.container?.[
                                            "uploadHeaders"
                                          ] === undefined
                                            ? p.destination.container?.[
                                                "uploadHeaders"
                                              ]
                                            : p.destination.container?.[
                                                "uploadHeaders"
                                              ].map((p: any) => {
                                                return {
                                                  name: p["name"],
                                                  value: p["value"],
                                                };
                                              }),
                                      },
                                },
                                uploadOptions: {
                                  uploadCondition:
                                    p.uploadOptions["uploadCondition"],
                                },
                              };
                            }),
                      environmentSettings:
                        p.jobSpecification.jobManagerTask?.[
                          "environmentSettings"
                        ] === undefined
                          ? p.jobSpecification.jobManagerTask?.[
                              "environmentSettings"
                            ]
                          : p.jobSpecification.jobManagerTask?.[
                              "environmentSettings"
                            ].map((p: any) => {
                              return { name: p["name"], value: p["value"] };
                            }),
                      constraints: !p.jobSpecification.jobManagerTask
                        ?.constraints
                        ? undefined
                        : {
                            maxWallClockTime:
                              p.jobSpecification.jobManagerTask?.constraints?.[
                                "maxWallClockTime"
                              ],
                            retentionTime:
                              p.jobSpecification.jobManagerTask?.constraints?.[
                                "retentionTime"
                              ],
                            maxTaskRetryCount:
                              p.jobSpecification.jobManagerTask?.constraints?.[
                                "maxTaskRetryCount"
                              ],
                          },
                      requiredSlots:
                        p.jobSpecification.jobManagerTask?.["requiredSlots"],
                      killJobOnCompletion:
                        p.jobSpecification.jobManagerTask?.[
                          "killJobOnCompletion"
                        ],
                      userIdentity: !p.jobSpecification.jobManagerTask
                        ?.userIdentity
                        ? undefined
                        : {
                            username:
                              p.jobSpecification.jobManagerTask?.userIdentity?.[
                                "username"
                              ],
                            autoUser: !p.jobSpecification.jobManagerTask
                              ?.userIdentity?.autoUser
                              ? undefined
                              : {
                                  scope:
                                    p.jobSpecification.jobManagerTask
                                      ?.userIdentity?.autoUser?.["scope"],
                                  elevationLevel:
                                    p.jobSpecification.jobManagerTask
                                      ?.userIdentity?.autoUser?.[
                                      "elevationLevel"
                                    ],
                                },
                          },
                      runExclusive:
                        p.jobSpecification.jobManagerTask?.["runExclusive"],
                      applicationPackageReferences:
                        p.jobSpecification.jobManagerTask?.[
                          "applicationPackageReferences"
                        ] === undefined
                          ? p.jobSpecification.jobManagerTask?.[
                              "applicationPackageReferences"
                            ]
                          : p.jobSpecification.jobManagerTask?.[
                              "applicationPackageReferences"
                            ].map((p: any) => {
                              return {
                                applicationId: p["applicationId"],
                                version: p["version"],
                              };
                            }),
                      authenticationTokenSettings: !p.jobSpecification
                        .jobManagerTask?.authenticationTokenSettings
                        ? undefined
                        : {
                            access:
                              p.jobSpecification.jobManagerTask
                                ?.authenticationTokenSettings?.["access"],
                          },
                      allowLowPriorityNode:
                        p.jobSpecification.jobManagerTask?.[
                          "allowLowPriorityNode"
                        ],
                    },
                jobPreparationTask: !p.jobSpecification.jobPreparationTask
                  ? undefined
                  : {
                      id: p.jobSpecification.jobPreparationTask?.["id"],
                      commandLine:
                        p.jobSpecification.jobPreparationTask?.["commandLine"],
                      containerSettings: !p.jobSpecification.jobPreparationTask
                        ?.containerSettings
                        ? undefined
                        : {
                            containerRunOptions:
                              p.jobSpecification.jobPreparationTask
                                ?.containerSettings?.["containerRunOptions"],
                            imageName:
                              p.jobSpecification.jobPreparationTask
                                ?.containerSettings?.["imageName"],
                            registry: !p.jobSpecification.jobPreparationTask
                              ?.containerSettings?.registry
                              ? undefined
                              : {
                                  username:
                                    p.jobSpecification.jobPreparationTask
                                      ?.containerSettings?.registry?.[
                                      "username"
                                    ],
                                  password:
                                    p.jobSpecification.jobPreparationTask
                                      ?.containerSettings?.registry?.[
                                      "password"
                                    ],
                                  registryServer:
                                    p.jobSpecification.jobPreparationTask
                                      ?.containerSettings?.registry?.[
                                      "registryServer"
                                    ],
                                  identityReference: !p.jobSpecification
                                    .jobPreparationTask?.containerSettings
                                    ?.registry?.identityReference
                                    ? undefined
                                    : {
                                        resourceId:
                                          p.jobSpecification.jobPreparationTask
                                            ?.containerSettings?.registry
                                            ?.identityReference?.["resourceId"],
                                      },
                                },
                            workingDirectory:
                              p.jobSpecification.jobPreparationTask
                                ?.containerSettings?.["workingDirectory"],
                          },
                      resourceFiles:
                        p.jobSpecification.jobPreparationTask?.[
                          "resourceFiles"
                        ] === undefined
                          ? p.jobSpecification.jobPreparationTask?.[
                              "resourceFiles"
                            ]
                          : p.jobSpecification.jobPreparationTask?.[
                              "resourceFiles"
                            ].map((p: any) => {
                              return {
                                autoStorageContainerName:
                                  p["autoStorageContainerName"],
                                storageContainerUrl: p["storageContainerUrl"],
                                httpUrl: p["httpUrl"],
                                blobPrefix: p["blobPrefix"],
                                filePath: p["filePath"],
                                fileMode: p["fileMode"],
                                identityReference: !p.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.identityReference?.["resourceId"],
                                    },
                              };
                            }),
                      environmentSettings:
                        p.jobSpecification.jobPreparationTask?.[
                          "environmentSettings"
                        ] === undefined
                          ? p.jobSpecification.jobPreparationTask?.[
                              "environmentSettings"
                            ]
                          : p.jobSpecification.jobPreparationTask?.[
                              "environmentSettings"
                            ].map((p: any) => {
                              return { name: p["name"], value: p["value"] };
                            }),
                      constraints: !p.jobSpecification.jobPreparationTask
                        ?.constraints
                        ? undefined
                        : {
                            maxWallClockTime:
                              p.jobSpecification.jobPreparationTask
                                ?.constraints?.["maxWallClockTime"],
                            retentionTime:
                              p.jobSpecification.jobPreparationTask
                                ?.constraints?.["retentionTime"],
                            maxTaskRetryCount:
                              p.jobSpecification.jobPreparationTask
                                ?.constraints?.["maxTaskRetryCount"],
                          },
                      waitForSuccess:
                        p.jobSpecification.jobPreparationTask?.[
                          "waitForSuccess"
                        ],
                      userIdentity: !p.jobSpecification.jobPreparationTask
                        ?.userIdentity
                        ? undefined
                        : {
                            username:
                              p.jobSpecification.jobPreparationTask
                                ?.userIdentity?.["username"],
                            autoUser: !p.jobSpecification.jobPreparationTask
                              ?.userIdentity?.autoUser
                              ? undefined
                              : {
                                  scope:
                                    p.jobSpecification.jobPreparationTask
                                      ?.userIdentity?.autoUser?.["scope"],
                                  elevationLevel:
                                    p.jobSpecification.jobPreparationTask
                                      ?.userIdentity?.autoUser?.[
                                      "elevationLevel"
                                    ],
                                },
                          },
                      rerunOnNodeRebootAfterSuccess:
                        p.jobSpecification.jobPreparationTask?.[
                          "rerunOnNodeRebootAfterSuccess"
                        ],
                    },
                jobReleaseTask: !p.jobSpecification.jobReleaseTask
                  ? undefined
                  : {
                      id: p.jobSpecification.jobReleaseTask?.["id"],
                      commandLine:
                        p.jobSpecification.jobReleaseTask?.["commandLine"],
                      containerSettings: !p.jobSpecification.jobReleaseTask
                        ?.containerSettings
                        ? undefined
                        : {
                            containerRunOptions:
                              p.jobSpecification.jobReleaseTask
                                ?.containerSettings?.["containerRunOptions"],
                            imageName:
                              p.jobSpecification.jobReleaseTask
                                ?.containerSettings?.["imageName"],
                            registry: !p.jobSpecification.jobReleaseTask
                              ?.containerSettings?.registry
                              ? undefined
                              : {
                                  username:
                                    p.jobSpecification.jobReleaseTask
                                      ?.containerSettings?.registry?.[
                                      "username"
                                    ],
                                  password:
                                    p.jobSpecification.jobReleaseTask
                                      ?.containerSettings?.registry?.[
                                      "password"
                                    ],
                                  registryServer:
                                    p.jobSpecification.jobReleaseTask
                                      ?.containerSettings?.registry?.[
                                      "registryServer"
                                    ],
                                  identityReference: !p.jobSpecification
                                    .jobReleaseTask?.containerSettings?.registry
                                    ?.identityReference
                                    ? undefined
                                    : {
                                        resourceId:
                                          p.jobSpecification.jobReleaseTask
                                            ?.containerSettings?.registry
                                            ?.identityReference?.["resourceId"],
                                      },
                                },
                            workingDirectory:
                              p.jobSpecification.jobReleaseTask
                                ?.containerSettings?.["workingDirectory"],
                          },
                      resourceFiles:
                        p.jobSpecification.jobReleaseTask?.["resourceFiles"] ===
                        undefined
                          ? p.jobSpecification.jobReleaseTask?.["resourceFiles"]
                          : p.jobSpecification.jobReleaseTask?.[
                              "resourceFiles"
                            ].map((p: any) => {
                              return {
                                autoStorageContainerName:
                                  p["autoStorageContainerName"],
                                storageContainerUrl: p["storageContainerUrl"],
                                httpUrl: p["httpUrl"],
                                blobPrefix: p["blobPrefix"],
                                filePath: p["filePath"],
                                fileMode: p["fileMode"],
                                identityReference: !p.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.identityReference?.["resourceId"],
                                    },
                              };
                            }),
                      environmentSettings:
                        p.jobSpecification.jobReleaseTask?.[
                          "environmentSettings"
                        ] === undefined
                          ? p.jobSpecification.jobReleaseTask?.[
                              "environmentSettings"
                            ]
                          : p.jobSpecification.jobReleaseTask?.[
                              "environmentSettings"
                            ].map((p: any) => {
                              return { name: p["name"], value: p["value"] };
                            }),
                      maxWallClockTime:
                        p.jobSpecification.jobReleaseTask?.["maxWallClockTime"],
                      retentionTime:
                        p.jobSpecification.jobReleaseTask?.["retentionTime"],
                      userIdentity: !p.jobSpecification.jobReleaseTask
                        ?.userIdentity
                        ? undefined
                        : {
                            username:
                              p.jobSpecification.jobReleaseTask?.userIdentity?.[
                                "username"
                              ],
                            autoUser: !p.jobSpecification.jobReleaseTask
                              ?.userIdentity?.autoUser
                              ? undefined
                              : {
                                  scope:
                                    p.jobSpecification.jobReleaseTask
                                      ?.userIdentity?.autoUser?.["scope"],
                                  elevationLevel:
                                    p.jobSpecification.jobReleaseTask
                                      ?.userIdentity?.autoUser?.[
                                      "elevationLevel"
                                    ],
                                },
                          },
                    },
                commonEnvironmentSettings:
                  p.jobSpecification["commonEnvironmentSettings"] === undefined
                    ? p.jobSpecification["commonEnvironmentSettings"]
                    : p.jobSpecification["commonEnvironmentSettings"].map(
                        (p: any) => {
                          return { name: p["name"], value: p["value"] };
                        },
                      ),
                poolInfo: {
                  poolId: p.jobSpecification.poolInfo["poolId"],
                  autoPoolSpecification: !p.jobSpecification.poolInfo
                    .autoPoolSpecification
                    ? undefined
                    : {
                        autoPoolIdPrefix:
                          p.jobSpecification.poolInfo.autoPoolSpecification?.[
                            "autoPoolIdPrefix"
                          ],
                        poolLifetimeOption:
                          p.jobSpecification.poolInfo.autoPoolSpecification?.[
                            "poolLifetimeOption"
                          ],
                        keepAlive:
                          p.jobSpecification.poolInfo.autoPoolSpecification?.[
                            "keepAlive"
                          ],
                        pool: !p.jobSpecification.poolInfo.autoPoolSpecification
                          ?.pool
                          ? undefined
                          : {
                              displayName:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.["displayName"],
                              vmSize:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.["vmSize"],
                              cloudServiceConfiguration: !p.jobSpecification
                                .poolInfo.autoPoolSpecification?.pool
                                ?.cloudServiceConfiguration
                                ? undefined
                                : {
                                    osFamily:
                                      p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.cloudServiceConfiguration?.[
                                        "osFamily"
                                      ],
                                    osVersion:
                                      p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.cloudServiceConfiguration?.[
                                        "osVersion"
                                      ],
                                  },
                              virtualMachineConfiguration: !p.jobSpecification
                                .poolInfo.autoPoolSpecification?.pool
                                ?.virtualMachineConfiguration
                                ? undefined
                                : {
                                    imageReference: {
                                      publisher:
                                        p.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration
                                          ?.imageReference["publisher"],
                                      offer:
                                        p.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration
                                          ?.imageReference["offer"],
                                      sku: p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration
                                        ?.imageReference["sku"],
                                      version:
                                        p.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration
                                          ?.imageReference["version"],
                                      virtualMachineImageId:
                                        p.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration
                                          ?.imageReference[
                                          "virtualMachineImageId"
                                        ],
                                      exactVersion:
                                        p.jobSpecification.poolInfo
                                          .autoPoolSpecification?.pool
                                          ?.virtualMachineConfiguration
                                          ?.imageReference["exactVersion"],
                                    },
                                    nodeAgentSkuId:
                                      p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration?.[
                                        "nodeAgentSKUId"
                                      ],
                                    windowsConfiguration: !p.jobSpecification
                                      .poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.windowsConfiguration
                                      ? undefined
                                      : {
                                          enableAutomaticUpdates:
                                            p.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.virtualMachineConfiguration
                                              ?.windowsConfiguration?.[
                                              "enableAutomaticUpdates"
                                            ],
                                        },
                                    dataDisks:
                                      p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration?.[
                                        "dataDisks"
                                      ] === undefined
                                        ? p.jobSpecification.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration?.[
                                            "dataDisks"
                                          ]
                                        : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                            "dataDisks"
                                          ].map((p: any) => {
                                            return {
                                              lun: p["lun"],
                                              caching: p["caching"],
                                              diskSizeGb: p["diskSizeGB"],
                                              storageAccountType:
                                                p["storageAccountType"],
                                            };
                                          }),
                                    licenseType:
                                      p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration?.[
                                        "licenseType"
                                      ],
                                    containerConfiguration: !p.jobSpecification
                                      .poolInfo.autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.containerConfiguration
                                      ? undefined
                                      : {
                                          type: p.jobSpecification.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.containerConfiguration?.["type"],
                                          containerImageNames:
                                            p.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.virtualMachineConfiguration
                                              ?.containerConfiguration?.[
                                              "containerImageNames"
                                            ],
                                          containerRegistries:
                                            p.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.virtualMachineConfiguration
                                              ?.containerConfiguration?.[
                                              "containerRegistries"
                                            ] === undefined
                                              ? p.jobSpecification.poolInfo
                                                  .autoPoolSpecification?.pool
                                                  ?.virtualMachineConfiguration
                                                  ?.containerConfiguration?.[
                                                  "containerRegistries"
                                                ]
                                              : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.containerConfiguration?.[
                                                  "containerRegistries"
                                                ].map((p: any) => {
                                                  return {
                                                    username: p["username"],
                                                    password: p["password"],
                                                    registryServer:
                                                      p["registryServer"],
                                                    identityReference:
                                                      !p.identityReference
                                                        ? undefined
                                                        : {
                                                            resourceId:
                                                              p
                                                                .identityReference?.[
                                                                "resourceId"
                                                              ],
                                                          },
                                                  };
                                                }),
                                        },
                                    diskEncryptionConfiguration: !p
                                      .jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.diskEncryptionConfiguration
                                      ? undefined
                                      : {
                                          targets:
                                            p.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.virtualMachineConfiguration
                                              ?.diskEncryptionConfiguration?.[
                                              "targets"
                                            ],
                                        },
                                    nodePlacementConfiguration: !p
                                      .jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration
                                      ?.nodePlacementConfiguration
                                      ? undefined
                                      : {
                                          policy:
                                            p.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.virtualMachineConfiguration
                                              ?.nodePlacementConfiguration?.[
                                              "policy"
                                            ],
                                        },
                                    extensions:
                                      p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.virtualMachineConfiguration?.[
                                        "extensions"
                                      ] === undefined
                                        ? p.jobSpecification.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration?.[
                                            "extensions"
                                          ]
                                        : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.virtualMachineConfiguration?.[
                                            "extensions"
                                          ].map((p: any) => {
                                            return {
                                              name: p["name"],
                                              publisher: p["publisher"],
                                              type: p["type"],
                                              typeHandlerVersion:
                                                p["typeHandlerVersion"],
                                              autoUpgradeMinorVersion:
                                                p["autoUpgradeMinorVersion"],
                                              enableAutomaticUpgrade:
                                                p["enableAutomaticUpgrade"],
                                              settings: p["settings"],
                                              protectedSettings:
                                                p["protectedSettings"],
                                              provisionAfterExtensions:
                                                p["provisionAfterExtensions"],
                                            };
                                          }),
                                    osDisk: !p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.virtualMachineConfiguration?.osDisk
                                      ? undefined
                                      : {
                                          ephemeralOSDiskSettings: !p
                                            .jobSpecification.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.virtualMachineConfiguration
                                            ?.osDisk?.ephemeralOSDiskSettings
                                            ? undefined
                                            : {
                                                placement:
                                                  p.jobSpecification.poolInfo
                                                    .autoPoolSpecification?.pool
                                                    ?.virtualMachineConfiguration
                                                    ?.osDisk
                                                    ?.ephemeralOSDiskSettings?.[
                                                    "placement"
                                                  ],
                                              },
                                        },
                                  },
                              taskSlotsPerNode:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "taskSlotsPerNode"
                                ],
                              taskSchedulingPolicy: !p.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.taskSchedulingPolicy
                                ? undefined
                                : {
                                    nodeFillType:
                                      p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.taskSchedulingPolicy?.[
                                        "nodeFillType"
                                      ],
                                  },
                              resizeTimeout:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "resizeTimeout"
                                ],
                              targetDedicatedNodes:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "targetDedicatedNodes"
                                ],
                              targetLowPriorityNodes:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "targetLowPriorityNodes"
                                ],
                              enableAutoScale:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "enableAutoScale"
                                ],
                              autoScaleFormula:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "autoScaleFormula"
                                ],
                              autoScaleEvaluationInterval:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "autoScaleEvaluationInterval"
                                ],
                              enableInterNodeCommunication:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "enableInterNodeCommunication"
                                ],
                              networkConfiguration: !p.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool
                                ?.networkConfiguration
                                ? undefined
                                : {
                                    subnetId:
                                      p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.networkConfiguration?.["subnetId"],
                                    dynamicVNetAssignmentScope:
                                      p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.networkConfiguration?.[
                                        "dynamicVNetAssignmentScope"
                                      ],
                                    endpointConfiguration: !p.jobSpecification
                                      .poolInfo.autoPoolSpecification?.pool
                                      ?.networkConfiguration
                                      ?.endpointConfiguration
                                      ? undefined
                                      : {
                                          inboundNatPools:
                                            p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.networkConfiguration?.endpointConfiguration?.[
                                              "inboundNATPools"
                                            ].map((p: any) => {
                                              return {
                                                name: p["name"],
                                                protocol: p["protocol"],
                                                backendPort: p["backendPort"],
                                                frontendPortRangeStart:
                                                  p["frontendPortRangeStart"],
                                                frontendPortRangeEnd:
                                                  p["frontendPortRangeEnd"],
                                                networkSecurityGroupRules:
                                                  p[
                                                    "networkSecurityGroupRules"
                                                  ] === undefined
                                                    ? p[
                                                        "networkSecurityGroupRules"
                                                      ]
                                                    : p[
                                                        "networkSecurityGroupRules"
                                                      ].map((p: any) => {
                                                        return {
                                                          priority:
                                                            p["priority"],
                                                          access: p["access"],
                                                          sourceAddressPrefix:
                                                            p[
                                                              "sourceAddressPrefix"
                                                            ],
                                                          sourcePortRanges:
                                                            p[
                                                              "sourcePortRanges"
                                                            ],
                                                        };
                                                      }),
                                              };
                                            }),
                                        },
                                    publicIpAddressConfiguration: !p
                                      .jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool
                                      ?.networkConfiguration
                                      ?.publicIPAddressConfiguration
                                      ? undefined
                                      : {
                                          IpAddressProvisioningType:
                                            p.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.networkConfiguration
                                              ?.publicIPAddressConfiguration?.[
                                              "provision"
                                            ],
                                          ipAddressIds:
                                            p.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.networkConfiguration
                                              ?.publicIPAddressConfiguration?.[
                                              "ipAddressIds"
                                            ],
                                        },
                                    enableAcceleratedNetworking:
                                      p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.networkConfiguration?.[
                                        "enableAcceleratedNetworking"
                                      ],
                                  },
                              startTask: !p.jobSpecification.poolInfo
                                .autoPoolSpecification?.pool?.startTask
                                ? undefined
                                : {
                                    commandLine:
                                      p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.startTask?.["commandLine"],
                                    containerSettings: !p.jobSpecification
                                      .poolInfo.autoPoolSpecification?.pool
                                      ?.startTask?.containerSettings
                                      ? undefined
                                      : {
                                          containerRunOptions:
                                            p.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.containerSettings?.[
                                              "containerRunOptions"
                                            ],
                                          imageName:
                                            p.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.containerSettings?.[
                                              "imageName"
                                            ],
                                          registry: !p.jobSpecification.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.startTask?.containerSettings
                                            ?.registry
                                            ? undefined
                                            : {
                                                username:
                                                  p.jobSpecification.poolInfo
                                                    .autoPoolSpecification?.pool
                                                    ?.startTask
                                                    ?.containerSettings
                                                    ?.registry?.["username"],
                                                password:
                                                  p.jobSpecification.poolInfo
                                                    .autoPoolSpecification?.pool
                                                    ?.startTask
                                                    ?.containerSettings
                                                    ?.registry?.["password"],
                                                registryServer:
                                                  p.jobSpecification.poolInfo
                                                    .autoPoolSpecification?.pool
                                                    ?.startTask
                                                    ?.containerSettings
                                                    ?.registry?.[
                                                    "registryServer"
                                                  ],
                                                identityReference: !p
                                                  .jobSpecification.poolInfo
                                                  .autoPoolSpecification?.pool
                                                  ?.startTask?.containerSettings
                                                  ?.registry?.identityReference
                                                  ? undefined
                                                  : {
                                                      resourceId:
                                                        p.jobSpecification
                                                          .poolInfo
                                                          .autoPoolSpecification
                                                          ?.pool?.startTask
                                                          ?.containerSettings
                                                          ?.registry
                                                          ?.identityReference?.[
                                                          "resourceId"
                                                        ],
                                                    },
                                              },
                                          workingDirectory:
                                            p.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.containerSettings?.[
                                              "workingDirectory"
                                            ],
                                        },
                                    resourceFiles:
                                      p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.startTask?.["resourceFiles"] ===
                                      undefined
                                        ? p.jobSpecification.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.startTask?.["resourceFiles"]
                                        : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                            "resourceFiles"
                                          ].map((p: any) => {
                                            return {
                                              autoStorageContainerName:
                                                p["autoStorageContainerName"],
                                              storageContainerUrl:
                                                p["storageContainerUrl"],
                                              httpUrl: p["httpUrl"],
                                              blobPrefix: p["blobPrefix"],
                                              filePath: p["filePath"],
                                              fileMode: p["fileMode"],
                                              identityReference:
                                                !p.identityReference
                                                  ? undefined
                                                  : {
                                                      resourceId:
                                                        p.identityReference?.[
                                                          "resourceId"
                                                        ],
                                                    },
                                            };
                                          }),
                                    environmentSettings:
                                      p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.startTask?.["environmentSettings"] ===
                                      undefined
                                        ? p.jobSpecification.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.startTask?.["environmentSettings"]
                                        : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.startTask?.[
                                            "environmentSettings"
                                          ].map((p: any) => {
                                            return {
                                              name: p["name"],
                                              value: p["value"],
                                            };
                                          }),
                                    userIdentity: !p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool?.startTask
                                      ?.userIdentity
                                      ? undefined
                                      : {
                                          username:
                                            p.jobSpecification.poolInfo
                                              .autoPoolSpecification?.pool
                                              ?.startTask?.userIdentity?.[
                                              "username"
                                            ],
                                          autoUser: !p.jobSpecification.poolInfo
                                            .autoPoolSpecification?.pool
                                            ?.startTask?.userIdentity?.autoUser
                                            ? undefined
                                            : {
                                                scope:
                                                  p.jobSpecification.poolInfo
                                                    .autoPoolSpecification?.pool
                                                    ?.startTask?.userIdentity
                                                    ?.autoUser?.["scope"],
                                                elevationLevel:
                                                  p.jobSpecification.poolInfo
                                                    .autoPoolSpecification?.pool
                                                    ?.startTask?.userIdentity
                                                    ?.autoUser?.[
                                                    "elevationLevel"
                                                  ],
                                              },
                                        },
                                    maxTaskRetryCount:
                                      p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.startTask?.["maxTaskRetryCount"],
                                    waitForSuccess:
                                      p.jobSpecification.poolInfo
                                        .autoPoolSpecification?.pool
                                        ?.startTask?.["waitForSuccess"],
                                  },
                              certificateReferences:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "certificateReferences"
                                ] === undefined
                                  ? p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool?.[
                                      "certificateReferences"
                                    ]
                                  : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                                      "certificateReferences"
                                    ].map((p: any) => {
                                      return {
                                        thumbprint: p["thumbprint"],
                                        thumbprintAlgorithm:
                                          p["thumbprintAlgorithm"],
                                        storeLocation: p["storeLocation"],
                                        storeName: p["storeName"],
                                        visibility: p["visibility"],
                                      };
                                    }),
                              applicationPackageReferences:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "applicationPackageReferences"
                                ] === undefined
                                  ? p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool?.[
                                      "applicationPackageReferences"
                                    ]
                                  : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                                      "applicationPackageReferences"
                                    ].map((p: any) => {
                                      return {
                                        applicationId: p["applicationId"],
                                        version: p["version"],
                                      };
                                    }),
                              applicationLicenses:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "applicationLicenses"
                                ],
                              userAccounts:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "userAccounts"
                                ] === undefined
                                  ? p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool?.[
                                      "userAccounts"
                                    ]
                                  : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                                      "userAccounts"
                                    ].map((p: any) => {
                                      return {
                                        name: p["name"],
                                        password: p["password"],
                                        elevationLevel: p["elevationLevel"],
                                        linuxUserConfiguration:
                                          !p.linuxUserConfiguration
                                            ? undefined
                                            : {
                                                uid: p.linuxUserConfiguration?.[
                                                  "uid"
                                                ],
                                                gid: p.linuxUserConfiguration?.[
                                                  "gid"
                                                ],
                                                sshPrivateKey:
                                                  p.linuxUserConfiguration?.[
                                                    "sshPrivateKey"
                                                  ],
                                              },
                                        windowsUserConfiguration:
                                          !p.windowsUserConfiguration
                                            ? undefined
                                            : {
                                                loginMode:
                                                  p.windowsUserConfiguration?.[
                                                    "loginMode"
                                                  ],
                                              },
                                      };
                                    }),
                              metadata:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.["metadata"] ===
                                undefined
                                  ? p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool?.["metadata"]
                                  : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                                      "metadata"
                                    ].map((p: any) => {
                                      return {
                                        name: p["name"],
                                        value: p["value"],
                                      };
                                    }),
                              mountConfiguration:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "mountConfiguration"
                                ] === undefined
                                  ? p.jobSpecification.poolInfo
                                      .autoPoolSpecification?.pool?.[
                                      "mountConfiguration"
                                    ]
                                  : p.jobSpecification.poolInfo.autoPoolSpecification?.pool?.[
                                      "mountConfiguration"
                                    ].map((p: any) => {
                                      return {
                                        azureBlobFileSystemConfiguration:
                                          !p.azureBlobFileSystemConfiguration
                                            ? undefined
                                            : {
                                                accountName:
                                                  p
                                                    .azureBlobFileSystemConfiguration?.[
                                                    "accountName"
                                                  ],
                                                containerName:
                                                  p
                                                    .azureBlobFileSystemConfiguration?.[
                                                    "containerName"
                                                  ],
                                                accountKey:
                                                  p
                                                    .azureBlobFileSystemConfiguration?.[
                                                    "accountKey"
                                                  ],
                                                sasKey:
                                                  p
                                                    .azureBlobFileSystemConfiguration?.[
                                                    "sasKey"
                                                  ],
                                                blobfuseOptions:
                                                  p
                                                    .azureBlobFileSystemConfiguration?.[
                                                    "blobfuseOptions"
                                                  ],
                                                relativeMountPath:
                                                  p
                                                    .azureBlobFileSystemConfiguration?.[
                                                    "relativeMountPath"
                                                  ],
                                                identityReference: !p
                                                  .azureBlobFileSystemConfiguration
                                                  ?.identityReference
                                                  ? undefined
                                                  : {
                                                      resourceId:
                                                        p
                                                          .azureBlobFileSystemConfiguration
                                                          ?.identityReference?.[
                                                          "resourceId"
                                                        ],
                                                    },
                                              },
                                        nfsMountConfiguration:
                                          !p.nfsMountConfiguration
                                            ? undefined
                                            : {
                                                source:
                                                  p.nfsMountConfiguration?.[
                                                    "source"
                                                  ],
                                                relativeMountPath:
                                                  p.nfsMountConfiguration?.[
                                                    "relativeMountPath"
                                                  ],
                                                mountOptions:
                                                  p.nfsMountConfiguration?.[
                                                    "mountOptions"
                                                  ],
                                              },
                                        cifsMountConfiguration:
                                          !p.cifsMountConfiguration
                                            ? undefined
                                            : {
                                                username:
                                                  p.cifsMountConfiguration?.[
                                                    "username"
                                                  ],
                                                source:
                                                  p.cifsMountConfiguration?.[
                                                    "source"
                                                  ],
                                                relativeMountPath:
                                                  p.cifsMountConfiguration?.[
                                                    "relativeMountPath"
                                                  ],
                                                mountOptions:
                                                  p.cifsMountConfiguration?.[
                                                    "mountOptions"
                                                  ],
                                                password:
                                                  p.cifsMountConfiguration?.[
                                                    "password"
                                                  ],
                                              },
                                        azureFileShareConfiguration:
                                          !p.azureFileShareConfiguration
                                            ? undefined
                                            : {
                                                accountName:
                                                  p
                                                    .azureFileShareConfiguration?.[
                                                    "accountName"
                                                  ],
                                                azureFileUrl:
                                                  p
                                                    .azureFileShareConfiguration?.[
                                                    "azureFileUrl"
                                                  ],
                                                accountKey:
                                                  p
                                                    .azureFileShareConfiguration?.[
                                                    "accountKey"
                                                  ],
                                                relativeMountPath:
                                                  p
                                                    .azureFileShareConfiguration?.[
                                                    "relativeMountPath"
                                                  ],
                                                mountOptions:
                                                  p
                                                    .azureFileShareConfiguration?.[
                                                    "mountOptions"
                                                  ],
                                              },
                                      };
                                    }),
                              targetNodeCommunicationMode:
                                p.jobSpecification.poolInfo
                                  .autoPoolSpecification?.pool?.[
                                  "targetNodeCommunicationMode"
                                ],
                            },
                      },
                },
                metadata:
                  p.jobSpecification["metadata"] === undefined
                    ? p.jobSpecification["metadata"]
                    : p.jobSpecification["metadata"].map((p: any) => {
                        return { name: p["name"], value: p["value"] };
                      }),
              },
              executionInfo: !p.executionInfo
                ? undefined
                : {
                    nextRunTime:
                      p.executionInfo?.["nextRunTime"] !== undefined
                        ? new Date(p.executionInfo?.["nextRunTime"])
                        : undefined,
                    recentJob: !p.executionInfo?.recentJob
                      ? undefined
                      : {
                          id: p.executionInfo?.recentJob?.["id"],
                          url: p.executionInfo?.recentJob?.["url"],
                        },
                    endTime:
                      p.executionInfo?.["endTime"] !== undefined
                        ? new Date(p.executionInfo?.["endTime"])
                        : undefined,
                  },
              metadata:
                p["metadata"] === undefined
                  ? p["metadata"]
                  : p["metadata"].map((p: any) => {
                      return { name: p["name"], value: p["value"] };
                    }),
              stats: !p.stats
                ? undefined
                : {
                    url: p.stats?.["url"],
                    startTime: new Date(p.stats?.["startTime"]),
                    lastUpdateTime: new Date(p.stats?.["lastUpdateTime"]),
                    userCPUTime: p.stats?.["userCPUTime"],
                    kernelCPUTime: p.stats?.["kernelCPUTime"],
                    wallClockTime: p.stats?.["wallClockTime"],
                    readIOps: p.stats?.["readIOps"],
                    writeIOps: p.stats?.["writeIOps"],
                    readIOGiB: p.stats?.["readIOGiB"],
                    writeIOGiB: p.stats?.["writeIOGiB"],
                    numSucceededTasks: p.stats?.["numSucceededTasks"],
                    numFailedTasks: p.stats?.["numFailedTasks"],
                    numTaskRetries: p.stats?.["numTaskRetries"],
                    waitTime: p.stats?.["waitTime"],
                  },
            };
          }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists all of the Job Schedules in the specified Account. */
export function listJobSchedules(
  context: Client,
  options: ListJobSchedulesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchJobSchedule> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobSchedulesSend(context, options),
    _listJobSchedulesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _createTaskSend(
  context: Client,
  jobId: string,
  body: BatchTaskCreateOptions,
  options: CreateTaskOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}/tasks", jobId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        id: body["id"],
        displayName: body["displayName"],
        exitConditions: !body.exitConditions
          ? body.exitConditions
          : exitConditionsSerializer(body.exitConditions),
        commandLine: body["commandLine"],
        containerSettings: !body.containerSettings
          ? body.containerSettings
          : taskContainerSettingsSerializer(body.containerSettings),
        resourceFiles:
          body["resourceFiles"] === undefined
            ? body["resourceFiles"]
            : body["resourceFiles"].map(resourceFileSerializer),
        outputFiles:
          body["outputFiles"] === undefined
            ? body["outputFiles"]
            : body["outputFiles"].map(outputFileSerializer),
        environmentSettings:
          body["environmentSettings"] === undefined
            ? body["environmentSettings"]
            : body["environmentSettings"].map(environmentSettingSerializer),
        affinityInfo: !body.affinityInfo
          ? body.affinityInfo
          : affinityInformationSerializer(body.affinityInfo),
        constraints: !body.constraints
          ? body.constraints
          : taskConstraintsSerializer(body.constraints),
        requiredSlots: body["requiredSlots"],
        userIdentity: !body.userIdentity
          ? body.userIdentity
          : userIdentitySerializer(body.userIdentity),
        multiInstanceSettings: !body.multiInstanceSettings
          ? body.multiInstanceSettings
          : multiInstanceSettingsSerializer(body.multiInstanceSettings),
        dependsOn: !body.dependsOn
          ? body.dependsOn
          : taskDependenciesSerializer(body.dependsOn),
        applicationPackageReferences:
          body["applicationPackageReferences"] === undefined
            ? body["applicationPackageReferences"]
            : body["applicationPackageReferences"].map(
                applicationPackageReferenceSerializer,
              ),
        authenticationTokenSettings: !body.authenticationTokenSettings
          ? body.authenticationTokenSettings
          : authenticationTokenSettingsSerializer(
              body.authenticationTokenSettings,
            ),
      },
    });
}

export async function _createTaskDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * The maximum lifetime of a Task from addition to completion is 180 days. If a
 * Task has not completed within 180 days of being added it will be terminated by
 * the Batch service and left in whatever state it was in at that time.
 */
export async function createTask(
  context: Client,
  jobId: string,
  body: BatchTaskCreateOptions,
  options: CreateTaskOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createTaskSend(context, jobId, body, options);
  return _createTaskDeserialize(result);
}

export function _listTasksSend(
  context: Client,
  jobId: string,
  options: ListTasksOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}/tasks", jobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        maxresults: options?.maxresults,
        timeOut: options?.timeOutInSeconds,
        $filter: options?.$filter,
        $select: options?.$select,
        $expand: options?.$expand,
      },
    });
}

export async function _listTasksDeserialize(
  result: PathUncheckedResponse,
): Promise<_BatchTaskListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              id: p["id"],
              displayName: p["displayName"],
              url: p["url"],
              eTag: p["eTag"],
              lastModified:
                p["lastModified"] !== undefined
                  ? new Date(p["lastModified"])
                  : undefined,
              creationTime:
                p["creationTime"] !== undefined
                  ? new Date(p["creationTime"])
                  : undefined,
              exitConditions: !p.exitConditions
                ? undefined
                : {
                    exitCodes:
                      p.exitConditions?.["exitCodes"] === undefined
                        ? p.exitConditions?.["exitCodes"]
                        : p.exitConditions?.["exitCodes"].map((p: any) => {
                            return {
                              code: p["code"],
                              exitOptions: {
                                jobAction: p.exitOptions["jobAction"],
                                dependencyAction:
                                  p.exitOptions["dependencyAction"],
                              },
                            };
                          }),
                    exitCodeRanges:
                      p.exitConditions?.["exitCodeRanges"] === undefined
                        ? p.exitConditions?.["exitCodeRanges"]
                        : p.exitConditions?.["exitCodeRanges"].map((p: any) => {
                            return {
                              start: p["start"],
                              end: p["end"],
                              exitOptions: {
                                jobAction: p.exitOptions["jobAction"],
                                dependencyAction:
                                  p.exitOptions["dependencyAction"],
                              },
                            };
                          }),
                    preProcessingError: !p.exitConditions?.preProcessingError
                      ? undefined
                      : {
                          jobAction:
                            p.exitConditions?.preProcessingError?.["jobAction"],
                          dependencyAction:
                            p.exitConditions?.preProcessingError?.[
                              "dependencyAction"
                            ],
                        },
                    fileUploadError: !p.exitConditions?.fileUploadError
                      ? undefined
                      : {
                          jobAction:
                            p.exitConditions?.fileUploadError?.["jobAction"],
                          dependencyAction:
                            p.exitConditions?.fileUploadError?.[
                              "dependencyAction"
                            ],
                        },
                    default: !p.exitConditions?.default
                      ? undefined
                      : {
                          jobAction: p.exitConditions?.default?.["jobAction"],
                          dependencyAction:
                            p.exitConditions?.default?.["dependencyAction"],
                        },
                  },
              state: p["state"],
              stateTransitionTime:
                p["stateTransitionTime"] !== undefined
                  ? new Date(p["stateTransitionTime"])
                  : undefined,
              previousState: p["previousState"],
              previousStateTransitionTime:
                p["previousStateTransitionTime"] !== undefined
                  ? new Date(p["previousStateTransitionTime"])
                  : undefined,
              commandLine: p["commandLine"],
              containerSettings: !p.containerSettings
                ? undefined
                : {
                    containerRunOptions:
                      p.containerSettings?.["containerRunOptions"],
                    imageName: p.containerSettings?.["imageName"],
                    registry: !p.containerSettings?.registry
                      ? undefined
                      : {
                          username: p.containerSettings?.registry?.["username"],
                          password: p.containerSettings?.registry?.["password"],
                          registryServer:
                            p.containerSettings?.registry?.["registryServer"],
                          identityReference: !p.containerSettings?.registry
                            ?.identityReference
                            ? undefined
                            : {
                                resourceId:
                                  p.containerSettings?.registry
                                    ?.identityReference?.["resourceId"],
                              },
                        },
                    workingDirectory: p.containerSettings?.["workingDirectory"],
                  },
              resourceFiles:
                p["resourceFiles"] === undefined
                  ? p["resourceFiles"]
                  : p["resourceFiles"].map((p: any) => {
                      return {
                        autoStorageContainerName: p["autoStorageContainerName"],
                        storageContainerUrl: p["storageContainerUrl"],
                        httpUrl: p["httpUrl"],
                        blobPrefix: p["blobPrefix"],
                        filePath: p["filePath"],
                        fileMode: p["fileMode"],
                        identityReference: !p.identityReference
                          ? undefined
                          : { resourceId: p.identityReference?.["resourceId"] },
                      };
                    }),
              outputFiles:
                p["outputFiles"] === undefined
                  ? p["outputFiles"]
                  : p["outputFiles"].map((p: any) => {
                      return {
                        filePattern: p["filePattern"],
                        destination: {
                          container: !p.destination.container
                            ? undefined
                            : {
                                path: p.destination.container?.["path"],
                                containerUrl:
                                  p.destination.container?.["containerUrl"],
                                identityReference: !p.destination.container
                                  ?.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.destination.container
                                          ?.identityReference?.["resourceId"],
                                    },
                                uploadHeaders:
                                  p.destination.container?.["uploadHeaders"] ===
                                  undefined
                                    ? p.destination.container?.["uploadHeaders"]
                                    : p.destination.container?.[
                                        "uploadHeaders"
                                      ].map((p: any) => {
                                        return {
                                          name: p["name"],
                                          value: p["value"],
                                        };
                                      }),
                              },
                        },
                        uploadOptions: {
                          uploadCondition: p.uploadOptions["uploadCondition"],
                        },
                      };
                    }),
              environmentSettings:
                p["environmentSettings"] === undefined
                  ? p["environmentSettings"]
                  : p["environmentSettings"].map((p: any) => {
                      return { name: p["name"], value: p["value"] };
                    }),
              affinityInfo: !p.affinityInfo
                ? undefined
                : { affinityId: p.affinityInfo?.["affinityId"] },
              constraints: !p.constraints
                ? undefined
                : {
                    maxWallClockTime: p.constraints?.["maxWallClockTime"],
                    retentionTime: p.constraints?.["retentionTime"],
                    maxTaskRetryCount: p.constraints?.["maxTaskRetryCount"],
                  },
              requiredSlots: p["requiredSlots"],
              userIdentity: !p.userIdentity
                ? undefined
                : {
                    username: p.userIdentity?.["username"],
                    autoUser: !p.userIdentity?.autoUser
                      ? undefined
                      : {
                          scope: p.userIdentity?.autoUser?.["scope"],
                          elevationLevel:
                            p.userIdentity?.autoUser?.["elevationLevel"],
                        },
                  },
              executionInfo: !p.executionInfo
                ? undefined
                : {
                    startTime:
                      p.executionInfo?.["startTime"] !== undefined
                        ? new Date(p.executionInfo?.["startTime"])
                        : undefined,
                    endTime:
                      p.executionInfo?.["endTime"] !== undefined
                        ? new Date(p.executionInfo?.["endTime"])
                        : undefined,
                    exitCode: p.executionInfo?.["exitCode"],
                    containerInfo: !p.executionInfo?.containerInfo
                      ? undefined
                      : {
                          containerId:
                            p.executionInfo?.containerInfo?.["containerId"],
                          state: p.executionInfo?.containerInfo?.["state"],
                          error: p.executionInfo?.containerInfo?.["error"],
                        },
                    failureInfo: !p.executionInfo?.failureInfo
                      ? undefined
                      : {
                          category: p.executionInfo?.failureInfo?.["category"],
                          code: p.executionInfo?.failureInfo?.["code"],
                          message: p.executionInfo?.failureInfo?.["message"],
                          details:
                            p.executionInfo?.failureInfo?.["details"] ===
                            undefined
                              ? p.executionInfo?.failureInfo?.["details"]
                              : p.executionInfo?.failureInfo?.["details"].map(
                                  (p: any) => {
                                    return {
                                      name: p["name"],
                                      value: p["value"],
                                    };
                                  },
                                ),
                        },
                    retryCount: p.executionInfo?.["retryCount"],
                    lastRetryTime:
                      p.executionInfo?.["lastRetryTime"] !== undefined
                        ? new Date(p.executionInfo?.["lastRetryTime"])
                        : undefined,
                    requeueCount: p.executionInfo?.["requeueCount"],
                    lastRequeueTime:
                      p.executionInfo?.["lastRequeueTime"] !== undefined
                        ? new Date(p.executionInfo?.["lastRequeueTime"])
                        : undefined,
                    result: p.executionInfo?.["result"],
                  },
              nodeInfo: !p.nodeInfo
                ? undefined
                : {
                    affinityId: p.nodeInfo?.["affinityId"],
                    nodeUrl: p.nodeInfo?.["nodeUrl"],
                    poolId: p.nodeInfo?.["poolId"],
                    nodeId: p.nodeInfo?.["nodeId"],
                    taskRootDirectory: p.nodeInfo?.["taskRootDirectory"],
                    taskRootDirectoryUrl: p.nodeInfo?.["taskRootDirectoryUrl"],
                  },
              multiInstanceSettings: !p.multiInstanceSettings
                ? undefined
                : {
                    numberOfInstances:
                      p.multiInstanceSettings?.["numberOfInstances"],
                    coordinationCommandLine:
                      p.multiInstanceSettings?.["coordinationCommandLine"],
                    commonResourceFiles:
                      p.multiInstanceSettings?.["commonResourceFiles"] ===
                      undefined
                        ? p.multiInstanceSettings?.["commonResourceFiles"]
                        : p.multiInstanceSettings?.["commonResourceFiles"].map(
                            (p: any) => {
                              return {
                                autoStorageContainerName:
                                  p["autoStorageContainerName"],
                                storageContainerUrl: p["storageContainerUrl"],
                                httpUrl: p["httpUrl"],
                                blobPrefix: p["blobPrefix"],
                                filePath: p["filePath"],
                                fileMode: p["fileMode"],
                                identityReference: !p.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.identityReference?.["resourceId"],
                                    },
                              };
                            },
                          ),
                  },
              stats: !p.stats
                ? undefined
                : {
                    url: p.stats?.["url"],
                    startTime: new Date(p.stats?.["startTime"]),
                    lastUpdateTime: new Date(p.stats?.["lastUpdateTime"]),
                    userCPUTime: p.stats?.["userCPUTime"],
                    kernelCPUTime: p.stats?.["kernelCPUTime"],
                    wallClockTime: p.stats?.["wallClockTime"],
                    readIOps: p.stats?.["readIOps"],
                    writeIOps: p.stats?.["writeIOps"],
                    readIOGiB: p.stats?.["readIOGiB"],
                    writeIOGiB: p.stats?.["writeIOGiB"],
                    waitTime: p.stats?.["waitTime"],
                  },
              dependsOn: !p.dependsOn
                ? undefined
                : {
                    taskIds: p.dependsOn?.["taskIds"],
                    taskIdRanges:
                      p.dependsOn?.["taskIdRanges"] === undefined
                        ? p.dependsOn?.["taskIdRanges"]
                        : p.dependsOn?.["taskIdRanges"].map((p: any) => {
                            return { start: p["start"], end: p["end"] };
                          }),
                  },
              applicationPackageReferences:
                p["applicationPackageReferences"] === undefined
                  ? p["applicationPackageReferences"]
                  : p["applicationPackageReferences"].map((p: any) => {
                      return {
                        applicationId: p["applicationId"],
                        version: p["version"],
                      };
                    }),
              authenticationTokenSettings: !p.authenticationTokenSettings
                ? undefined
                : { access: p.authenticationTokenSettings?.["access"] },
            };
          }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/**
 * For multi-instance Tasks, information such as affinityId, executionInfo and
 * nodeInfo refer to the primary Task. Use the list subtasks API to retrieve
 * information about subtasks.
 */
export function listTasks(
  context: Client,
  jobId: string,
  options: ListTasksOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchTask> {
  return buildPagedAsyncIterator(
    context,
    () => _listTasksSend(context, jobId, options),
    _listTasksDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _createTaskCollectionSend(
  context: Client,
  jobId: string,
  collection: BatchTaskCollection,
  options: CreateTaskCollectionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}/addtaskcollection", jobId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        value: collection["value"].map(batchTaskCreateOptionsSerializer),
      },
    });
}

export async function _createTaskCollectionDeserialize(
  result: PathUncheckedResponse,
): Promise<TaskAddCollectionResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              status: p["status"],
              taskId: p["taskId"],
              eTag: p["eTag"],
              lastModified:
                p["lastModified"] !== undefined
                  ? new Date(p["lastModified"])
                  : undefined,
              location: p["location"],
              error: !p.error
                ? undefined
                : {
                    code: p.error?.["code"],
                    message: !p.error?.message
                      ? undefined
                      : {
                          lang: p.error?.message?.["lang"],
                          value: p.error?.message?.["value"],
                        },
                    values:
                      p.error?.["values"] === undefined
                        ? p.error?.["values"]
                        : p.error?.["values"].map((p: any) => {
                            return { key: p["key"], value: p["value"] };
                          }),
                  },
            };
          }),
  };
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
export async function createTaskCollection(
  context: Client,
  jobId: string,
  collection: BatchTaskCollection,
  options: CreateTaskCollectionOptionalParams = { requestOptions: {} },
): Promise<TaskAddCollectionResult> {
  const result = await _createTaskCollectionSend(
    context,
    jobId,
    collection,
    options,
  );
  return _createTaskCollectionDeserialize(result);
}

export function _deleteTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: DeleteTaskOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}", jobId, taskId)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _deleteTaskDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * When a Task is deleted, all of the files in its directory on the Compute Node
 * where it ran are also deleted (regardless of the retention time). For
 * multi-instance Tasks, the delete Task operation applies synchronously to the
 * primary task; subtasks and their files are then deleted asynchronously in the
 * background.
 */
export async function deleteTask(
  context: Client,
  jobId: string,
  taskId: string,
  options: DeleteTaskOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTaskSend(context, jobId, taskId, options);
  return _deleteTaskDeserialize(result);
}

export function _getTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: GetTaskOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}", jobId, taskId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
        $select: options?.$select,
        $expand: options?.$expand,
      },
    });
}

export async function _getTaskDeserialize(
  result: PathUncheckedResponse,
): Promise<BatchTask> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    displayName: result.body["displayName"],
    url: result.body["url"],
    eTag: result.body["eTag"],
    lastModified:
      result.body["lastModified"] !== undefined
        ? new Date(result.body["lastModified"])
        : undefined,
    creationTime:
      result.body["creationTime"] !== undefined
        ? new Date(result.body["creationTime"])
        : undefined,
    exitConditions: !result.body.exitConditions
      ? undefined
      : {
          exitCodes:
            result.body.exitConditions?.["exitCodes"] === undefined
              ? result.body.exitConditions?.["exitCodes"]
              : result.body.exitConditions?.["exitCodes"].map((p: any) => {
                  return {
                    code: p["code"],
                    exitOptions: {
                      jobAction: p.exitOptions["jobAction"],
                      dependencyAction: p.exitOptions["dependencyAction"],
                    },
                  };
                }),
          exitCodeRanges:
            result.body.exitConditions?.["exitCodeRanges"] === undefined
              ? result.body.exitConditions?.["exitCodeRanges"]
              : result.body.exitConditions?.["exitCodeRanges"].map((p: any) => {
                  return {
                    start: p["start"],
                    end: p["end"],
                    exitOptions: {
                      jobAction: p.exitOptions["jobAction"],
                      dependencyAction: p.exitOptions["dependencyAction"],
                    },
                  };
                }),
          preProcessingError: !result.body.exitConditions?.preProcessingError
            ? undefined
            : {
                jobAction:
                  result.body.exitConditions?.preProcessingError?.["jobAction"],
                dependencyAction:
                  result.body.exitConditions?.preProcessingError?.[
                    "dependencyAction"
                  ],
              },
          fileUploadError: !result.body.exitConditions?.fileUploadError
            ? undefined
            : {
                jobAction:
                  result.body.exitConditions?.fileUploadError?.["jobAction"],
                dependencyAction:
                  result.body.exitConditions?.fileUploadError?.[
                    "dependencyAction"
                  ],
              },
          default: !result.body.exitConditions?.default
            ? undefined
            : {
                jobAction: result.body.exitConditions?.default?.["jobAction"],
                dependencyAction:
                  result.body.exitConditions?.default?.["dependencyAction"],
              },
        },
    state: result.body["state"],
    stateTransitionTime:
      result.body["stateTransitionTime"] !== undefined
        ? new Date(result.body["stateTransitionTime"])
        : undefined,
    previousState: result.body["previousState"],
    previousStateTransitionTime:
      result.body["previousStateTransitionTime"] !== undefined
        ? new Date(result.body["previousStateTransitionTime"])
        : undefined,
    commandLine: result.body["commandLine"],
    containerSettings: !result.body.containerSettings
      ? undefined
      : {
          containerRunOptions:
            result.body.containerSettings?.["containerRunOptions"],
          imageName: result.body.containerSettings?.["imageName"],
          registry: !result.body.containerSettings?.registry
            ? undefined
            : {
                username: result.body.containerSettings?.registry?.["username"],
                password: result.body.containerSettings?.registry?.["password"],
                registryServer:
                  result.body.containerSettings?.registry?.["registryServer"],
                identityReference: !result.body.containerSettings?.registry
                  ?.identityReference
                  ? undefined
                  : {
                      resourceId:
                        result.body.containerSettings?.registry
                          ?.identityReference?.["resourceId"],
                    },
              },
          workingDirectory: result.body.containerSettings?.["workingDirectory"],
        },
    resourceFiles:
      result.body["resourceFiles"] === undefined
        ? result.body["resourceFiles"]
        : result.body["resourceFiles"].map((p: any) => {
            return {
              autoStorageContainerName: p["autoStorageContainerName"],
              storageContainerUrl: p["storageContainerUrl"],
              httpUrl: p["httpUrl"],
              blobPrefix: p["blobPrefix"],
              filePath: p["filePath"],
              fileMode: p["fileMode"],
              identityReference: !p.identityReference
                ? undefined
                : { resourceId: p.identityReference?.["resourceId"] },
            };
          }),
    outputFiles:
      result.body["outputFiles"] === undefined
        ? result.body["outputFiles"]
        : result.body["outputFiles"].map((p: any) => {
            return {
              filePattern: p["filePattern"],
              destination: {
                container: !p.destination.container
                  ? undefined
                  : {
                      path: p.destination.container?.["path"],
                      containerUrl: p.destination.container?.["containerUrl"],
                      identityReference: !p.destination.container
                        ?.identityReference
                        ? undefined
                        : {
                            resourceId:
                              p.destination.container?.identityReference?.[
                                "resourceId"
                              ],
                          },
                      uploadHeaders:
                        p.destination.container?.["uploadHeaders"] === undefined
                          ? p.destination.container?.["uploadHeaders"]
                          : p.destination.container?.["uploadHeaders"].map(
                              (p: any) => {
                                return { name: p["name"], value: p["value"] };
                              },
                            ),
                    },
              },
              uploadOptions: {
                uploadCondition: p.uploadOptions["uploadCondition"],
              },
            };
          }),
    environmentSettings:
      result.body["environmentSettings"] === undefined
        ? result.body["environmentSettings"]
        : result.body["environmentSettings"].map((p: any) => {
            return { name: p["name"], value: p["value"] };
          }),
    affinityInfo: !result.body.affinityInfo
      ? undefined
      : { affinityId: result.body.affinityInfo?.["affinityId"] },
    constraints: !result.body.constraints
      ? undefined
      : {
          maxWallClockTime: result.body.constraints?.["maxWallClockTime"],
          retentionTime: result.body.constraints?.["retentionTime"],
          maxTaskRetryCount: result.body.constraints?.["maxTaskRetryCount"],
        },
    requiredSlots: result.body["requiredSlots"],
    userIdentity: !result.body.userIdentity
      ? undefined
      : {
          username: result.body.userIdentity?.["username"],
          autoUser: !result.body.userIdentity?.autoUser
            ? undefined
            : {
                scope: result.body.userIdentity?.autoUser?.["scope"],
                elevationLevel:
                  result.body.userIdentity?.autoUser?.["elevationLevel"],
              },
        },
    executionInfo: !result.body.executionInfo
      ? undefined
      : {
          startTime:
            result.body.executionInfo?.["startTime"] !== undefined
              ? new Date(result.body.executionInfo?.["startTime"])
              : undefined,
          endTime:
            result.body.executionInfo?.["endTime"] !== undefined
              ? new Date(result.body.executionInfo?.["endTime"])
              : undefined,
          exitCode: result.body.executionInfo?.["exitCode"],
          containerInfo: !result.body.executionInfo?.containerInfo
            ? undefined
            : {
                containerId:
                  result.body.executionInfo?.containerInfo?.["containerId"],
                state: result.body.executionInfo?.containerInfo?.["state"],
                error: result.body.executionInfo?.containerInfo?.["error"],
              },
          failureInfo: !result.body.executionInfo?.failureInfo
            ? undefined
            : {
                category: result.body.executionInfo?.failureInfo?.["category"],
                code: result.body.executionInfo?.failureInfo?.["code"],
                message: result.body.executionInfo?.failureInfo?.["message"],
                details:
                  result.body.executionInfo?.failureInfo?.["details"] ===
                  undefined
                    ? result.body.executionInfo?.failureInfo?.["details"]
                    : result.body.executionInfo?.failureInfo?.["details"].map(
                        (p: any) => {
                          return { name: p["name"], value: p["value"] };
                        },
                      ),
              },
          retryCount: result.body.executionInfo?.["retryCount"],
          lastRetryTime:
            result.body.executionInfo?.["lastRetryTime"] !== undefined
              ? new Date(result.body.executionInfo?.["lastRetryTime"])
              : undefined,
          requeueCount: result.body.executionInfo?.["requeueCount"],
          lastRequeueTime:
            result.body.executionInfo?.["lastRequeueTime"] !== undefined
              ? new Date(result.body.executionInfo?.["lastRequeueTime"])
              : undefined,
          result: result.body.executionInfo?.["result"],
        },
    nodeInfo: !result.body.nodeInfo
      ? undefined
      : {
          affinityId: result.body.nodeInfo?.["affinityId"],
          nodeUrl: result.body.nodeInfo?.["nodeUrl"],
          poolId: result.body.nodeInfo?.["poolId"],
          nodeId: result.body.nodeInfo?.["nodeId"],
          taskRootDirectory: result.body.nodeInfo?.["taskRootDirectory"],
          taskRootDirectoryUrl: result.body.nodeInfo?.["taskRootDirectoryUrl"],
        },
    multiInstanceSettings: !result.body.multiInstanceSettings
      ? undefined
      : {
          numberOfInstances:
            result.body.multiInstanceSettings?.["numberOfInstances"],
          coordinationCommandLine:
            result.body.multiInstanceSettings?.["coordinationCommandLine"],
          commonResourceFiles:
            result.body.multiInstanceSettings?.["commonResourceFiles"] ===
            undefined
              ? result.body.multiInstanceSettings?.["commonResourceFiles"]
              : result.body.multiInstanceSettings?.["commonResourceFiles"].map(
                  (p: any) => {
                    return {
                      autoStorageContainerName: p["autoStorageContainerName"],
                      storageContainerUrl: p["storageContainerUrl"],
                      httpUrl: p["httpUrl"],
                      blobPrefix: p["blobPrefix"],
                      filePath: p["filePath"],
                      fileMode: p["fileMode"],
                      identityReference: !p.identityReference
                        ? undefined
                        : { resourceId: p.identityReference?.["resourceId"] },
                    };
                  },
                ),
        },
    stats: !result.body.stats
      ? undefined
      : {
          url: result.body.stats?.["url"],
          startTime: new Date(result.body.stats?.["startTime"]),
          lastUpdateTime: new Date(result.body.stats?.["lastUpdateTime"]),
          userCPUTime: result.body.stats?.["userCPUTime"],
          kernelCPUTime: result.body.stats?.["kernelCPUTime"],
          wallClockTime: result.body.stats?.["wallClockTime"],
          readIOps: result.body.stats?.["readIOps"],
          writeIOps: result.body.stats?.["writeIOps"],
          readIOGiB: result.body.stats?.["readIOGiB"],
          writeIOGiB: result.body.stats?.["writeIOGiB"],
          waitTime: result.body.stats?.["waitTime"],
        },
    dependsOn: !result.body.dependsOn
      ? undefined
      : {
          taskIds: result.body.dependsOn?.["taskIds"],
          taskIdRanges:
            result.body.dependsOn?.["taskIdRanges"] === undefined
              ? result.body.dependsOn?.["taskIdRanges"]
              : result.body.dependsOn?.["taskIdRanges"].map((p: any) => {
                  return { start: p["start"], end: p["end"] };
                }),
        },
    applicationPackageReferences:
      result.body["applicationPackageReferences"] === undefined
        ? result.body["applicationPackageReferences"]
        : result.body["applicationPackageReferences"].map((p: any) => {
            return { applicationId: p["applicationId"], version: p["version"] };
          }),
    authenticationTokenSettings: !result.body.authenticationTokenSettings
      ? undefined
      : { access: result.body.authenticationTokenSettings?.["access"] },
  };
}

/**
 * For multi-instance Tasks, information such as affinityId, executionInfo and
 * nodeInfo refer to the primary Task. Use the list subtasks API to retrieve
 * information about subtasks.
 */
export async function getTask(
  context: Client,
  jobId: string,
  taskId: string,
  options: GetTaskOptionalParams = { requestOptions: {} },
): Promise<BatchTask> {
  const result = await _getTaskSend(context, jobId, taskId, options);
  return _getTaskDeserialize(result);
}

export function _replaceTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  body: BatchTask,
  options: ReplaceTaskOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}", jobId, taskId)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        constraints: !body.constraints
          ? body.constraints
          : taskConstraintsSerializer(body.constraints),
      },
    });
}

export async function _replaceTaskDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Updates the properties of the specified Task. */
export async function replaceTask(
  context: Client,
  jobId: string,
  taskId: string,
  body: BatchTask,
  options: ReplaceTaskOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _replaceTaskSend(context, jobId, taskId, body, options);
  return _replaceTaskDeserialize(result);
}

export function _listSubTasksSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: ListSubTasksOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}/subtasksinfo", jobId, taskId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
        $select: options?.$select,
      },
    });
}

export async function _listSubTasksDeserialize(
  result: PathUncheckedResponse,
): Promise<BatchTaskListSubtasksResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              id: p["id"],
              nodeInfo: !p.nodeInfo
                ? undefined
                : {
                    affinityId: p.nodeInfo?.["affinityId"],
                    nodeUrl: p.nodeInfo?.["nodeUrl"],
                    poolId: p.nodeInfo?.["poolId"],
                    nodeId: p.nodeInfo?.["nodeId"],
                    taskRootDirectory: p.nodeInfo?.["taskRootDirectory"],
                    taskRootDirectoryUrl: p.nodeInfo?.["taskRootDirectoryUrl"],
                  },
              startTime:
                p["startTime"] !== undefined
                  ? new Date(p["startTime"])
                  : undefined,
              endTime:
                p["endTime"] !== undefined ? new Date(p["endTime"]) : undefined,
              exitCode: p["exitCode"],
              containerInfo: !p.containerInfo
                ? undefined
                : {
                    containerId: p.containerInfo?.["containerId"],
                    state: p.containerInfo?.["state"],
                    error: p.containerInfo?.["error"],
                  },
              failureInfo: !p.failureInfo
                ? undefined
                : {
                    category: p.failureInfo?.["category"],
                    code: p.failureInfo?.["code"],
                    message: p.failureInfo?.["message"],
                    details:
                      p.failureInfo?.["details"] === undefined
                        ? p.failureInfo?.["details"]
                        : p.failureInfo?.["details"].map((p: any) => {
                            return { name: p["name"], value: p["value"] };
                          }),
                  },
              state: p["state"],
              stateTransitionTime:
                p["stateTransitionTime"] !== undefined
                  ? new Date(p["stateTransitionTime"])
                  : undefined,
              previousState: p["previousState"],
              previousStateTransitionTime:
                p["previousStateTransitionTime"] !== undefined
                  ? new Date(p["previousStateTransitionTime"])
                  : undefined,
              result: p["result"],
            };
          }),
  };
}

/** If the Task is not a multi-instance Task then this returns an empty collection. */
export async function listSubTasks(
  context: Client,
  jobId: string,
  taskId: string,
  options: ListSubTasksOptionalParams = { requestOptions: {} },
): Promise<BatchTaskListSubtasksResult> {
  const result = await _listSubTasksSend(context, jobId, taskId, options);
  return _listSubTasksDeserialize(result);
}

export function _terminateTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: TerminateTaskOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}/terminate", jobId, taskId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _terminateTaskDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * When the Task has been terminated, it moves to the completed state. For
 * multi-instance Tasks, the terminate Task operation applies synchronously to the
 * primary task; subtasks are then terminated asynchronously in the background.
 */
export async function terminateTask(
  context: Client,
  jobId: string,
  taskId: string,
  options: TerminateTaskOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _terminateTaskSend(context, jobId, taskId, options);
  return _terminateTaskDeserialize(result);
}

export function _reactivateTaskSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: ReactivateTaskOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}/reactivate", jobId, taskId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "if-match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "if-none-match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _reactivateTaskDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
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
export async function reactivateTask(
  context: Client,
  jobId: string,
  taskId: string,
  options: ReactivateTaskOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _reactivateTaskSend(context, jobId, taskId, options);
  return _reactivateTaskDeserialize(result);
}

export function _deleteTaskFileSend(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: DeleteTaskFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
        recursive: options?.recursive,
      },
    });
}

export async function _deleteTaskFileDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes the specified Task file from the Compute Node where the Task ran. */
export async function deleteTaskFile(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: DeleteTaskFileOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteTaskFileSend(
    context,
    jobId,
    taskId,
    filePath,
    options,
  );
  return _deleteTaskFileDeserialize(result);
}

export function _getTaskFileSend(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: GetTaskFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
        ...(options?.ocpRange !== undefined
          ? { "ocp-range": options?.ocpRange }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _getTaskFileDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

/** Returns the content of the specified Task file. */
export async function getTaskFile(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: GetTaskFileOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getTaskFileSend(
    context,
    jobId,
    taskId,
    filePath,
    options,
  );
  return _getTaskFileDeserialize(result);
}

export function _getTaskFilePropertiesSend(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: GetTaskFilePropertiesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath,
    )
    .head({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _getTaskFilePropertiesDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Gets the properties of the specified Task file. */
export async function getTaskFileProperties(
  context: Client,
  jobId: string,
  taskId: string,
  filePath: string,
  options: GetTaskFilePropertiesOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getTaskFilePropertiesSend(
    context,
    jobId,
    taskId,
    filePath,
    options,
  );
  return _getTaskFilePropertiesDeserialize(result);
}

export function _listTaskFilesSend(
  context: Client,
  jobId: string,
  taskId: string,
  options: ListTaskFilesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/jobs/{jobId}/tasks/{taskId}/files", jobId, taskId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        maxresults: options?.maxresults,
        timeOut: options?.timeOutInSeconds,
        $filter: options?.$filter,
        recursive: options?.recursive,
      },
    });
}

export async function _listTaskFilesDeserialize(
  result: PathUncheckedResponse,
): Promise<_NodeFileListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              name: p["name"],
              url: p["url"],
              isDirectory: p["isDirectory"],
              properties: !p.properties
                ? undefined
                : {
                    creationTime:
                      p.properties?.["creationTime"] !== undefined
                        ? new Date(p.properties?.["creationTime"])
                        : undefined,
                    lastModified: new Date(p.properties?.["lastModified"]),
                    contentLength: p.properties?.["contentLength"],
                    contentType: p.properties?.["contentType"],
                    fileMode: p.properties?.["fileMode"],
                  },
            };
          }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists the files in a Task's directory on its Compute Node. */
export function listTaskFiles(
  context: Client,
  jobId: string,
  taskId: string,
  options: ListTaskFilesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<NodeFile> {
  return buildPagedAsyncIterator(
    context,
    () => _listTaskFilesSend(context, jobId, taskId, options),
    _listTaskFilesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _createNodeUserSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body: BatchNodeUserCreateOptions,
  options: CreateNodeUserOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/users", poolId, nodeId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        name: body["name"],
        isAdmin: body["isAdmin"],
        expiryTime: body["expiryTime"]?.toISOString(),
        password: body["password"],
        sshPublicKey: body["sshPublicKey"],
      },
    });
}

export async function _createNodeUserDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * You can add a user Account to a Compute Node only when it is in the idle or
 * running state.
 */
export async function createNodeUser(
  context: Client,
  poolId: string,
  nodeId: string,
  body: BatchNodeUserCreateOptions,
  options: CreateNodeUserOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createNodeUserSend(
    context,
    poolId,
    nodeId,
    body,
    options,
  );
  return _createNodeUserDeserialize(result);
}

export function _deleteNodeUserSend(
  context: Client,
  poolId: string,
  nodeId: string,
  userName: string,
  options: DeleteNodeUserOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/users/{userName}",
      poolId,
      nodeId,
      userName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _deleteNodeUserDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * You can delete a user Account to a Compute Node only when it is in the idle or
 * running state.
 */
export async function deleteNodeUser(
  context: Client,
  poolId: string,
  nodeId: string,
  userName: string,
  options: DeleteNodeUserOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteNodeUserSend(
    context,
    poolId,
    nodeId,
    userName,
    options,
  );
  return _deleteNodeUserDeserialize(result);
}

export function _replaceNodeUserSend(
  context: Client,
  poolId: string,
  nodeId: string,
  userName: string,
  body: BatchNodeUserUpdateOptions,
  options: ReplaceNodeUserOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/users/{userName}",
      poolId,
      nodeId,
      userName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        password: body["password"],
        expiryTime: body["expiryTime"]?.toISOString(),
        sshPublicKey: body["sshPublicKey"],
      },
    });
}

export async function _replaceNodeUserDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * This operation replaces of all the updatable properties of the Account. For
 * example, if the expiryTime element is not specified, the current value is
 * replaced with the default value, not left unmodified. You can update a user
 * Account on a Compute Node only when it is in the idle or running state.
 */
export async function replaceNodeUser(
  context: Client,
  poolId: string,
  nodeId: string,
  userName: string,
  body: BatchNodeUserUpdateOptions,
  options: ReplaceNodeUserOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _replaceNodeUserSend(
    context,
    poolId,
    nodeId,
    userName,
    body,
    options,
  );
  return _replaceNodeUserDeserialize(result);
}

export function _getNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: GetNodeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}", poolId, nodeId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
        $select: options?.$select,
      },
    });
}

export async function _getNodeDeserialize(
  result: PathUncheckedResponse,
): Promise<BatchNode> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    url: result.body["url"],
    state: result.body["state"],
    schedulingState: result.body["schedulingState"],
    stateTransitionTime:
      result.body["stateTransitionTime"] !== undefined
        ? new Date(result.body["stateTransitionTime"])
        : undefined,
    lastBootTime:
      result.body["lastBootTime"] !== undefined
        ? new Date(result.body["lastBootTime"])
        : undefined,
    allocationTime:
      result.body["allocationTime"] !== undefined
        ? new Date(result.body["allocationTime"])
        : undefined,
    ipAddress: result.body["ipAddress"],
    affinityId: result.body["affinityId"],
    vmSize: result.body["vmSize"],
    totalTasksRun: result.body["totalTasksRun"],
    runningTasksCount: result.body["runningTasksCount"],
    runningTaskSlotsCount: result.body["runningTaskSlotsCount"],
    totalTasksSucceeded: result.body["totalTasksSucceeded"],
    recentTasks:
      result.body["recentTasks"] === undefined
        ? result.body["recentTasks"]
        : result.body["recentTasks"].map((p: any) => {
            return {
              taskUrl: p["taskUrl"],
              jobId: p["jobId"],
              taskId: p["taskId"],
              subtaskId: p["subtaskId"],
              taskState: p["taskState"],
              executionInfo: !p.executionInfo
                ? undefined
                : {
                    startTime:
                      p.executionInfo?.["startTime"] !== undefined
                        ? new Date(p.executionInfo?.["startTime"])
                        : undefined,
                    endTime:
                      p.executionInfo?.["endTime"] !== undefined
                        ? new Date(p.executionInfo?.["endTime"])
                        : undefined,
                    exitCode: p.executionInfo?.["exitCode"],
                    containerInfo: !p.executionInfo?.containerInfo
                      ? undefined
                      : {
                          containerId:
                            p.executionInfo?.containerInfo?.["containerId"],
                          state: p.executionInfo?.containerInfo?.["state"],
                          error: p.executionInfo?.containerInfo?.["error"],
                        },
                    failureInfo: !p.executionInfo?.failureInfo
                      ? undefined
                      : {
                          category: p.executionInfo?.failureInfo?.["category"],
                          code: p.executionInfo?.failureInfo?.["code"],
                          message: p.executionInfo?.failureInfo?.["message"],
                          details:
                            p.executionInfo?.failureInfo?.["details"] ===
                            undefined
                              ? p.executionInfo?.failureInfo?.["details"]
                              : p.executionInfo?.failureInfo?.["details"].map(
                                  (p: any) => {
                                    return {
                                      name: p["name"],
                                      value: p["value"],
                                    };
                                  },
                                ),
                        },
                    retryCount: p.executionInfo?.["retryCount"],
                    lastRetryTime:
                      p.executionInfo?.["lastRetryTime"] !== undefined
                        ? new Date(p.executionInfo?.["lastRetryTime"])
                        : undefined,
                    requeueCount: p.executionInfo?.["requeueCount"],
                    lastRequeueTime:
                      p.executionInfo?.["lastRequeueTime"] !== undefined
                        ? new Date(p.executionInfo?.["lastRequeueTime"])
                        : undefined,
                    result: p.executionInfo?.["result"],
                  },
            };
          }),
    startTask: !result.body.startTask
      ? undefined
      : {
          commandLine: result.body.startTask?.["commandLine"],
          containerSettings: !result.body.startTask?.containerSettings
            ? undefined
            : {
                containerRunOptions:
                  result.body.startTask?.containerSettings?.[
                    "containerRunOptions"
                  ],
                imageName:
                  result.body.startTask?.containerSettings?.["imageName"],
                registry: !result.body.startTask?.containerSettings?.registry
                  ? undefined
                  : {
                      username:
                        result.body.startTask?.containerSettings?.registry?.[
                          "username"
                        ],
                      password:
                        result.body.startTask?.containerSettings?.registry?.[
                          "password"
                        ],
                      registryServer:
                        result.body.startTask?.containerSettings?.registry?.[
                          "registryServer"
                        ],
                      identityReference: !result.body.startTask
                        ?.containerSettings?.registry?.identityReference
                        ? undefined
                        : {
                            resourceId:
                              result.body.startTask?.containerSettings?.registry
                                ?.identityReference?.["resourceId"],
                          },
                    },
                workingDirectory:
                  result.body.startTask?.containerSettings?.[
                    "workingDirectory"
                  ],
              },
          resourceFiles:
            result.body.startTask?.["resourceFiles"] === undefined
              ? result.body.startTask?.["resourceFiles"]
              : result.body.startTask?.["resourceFiles"].map((p: any) => {
                  return {
                    autoStorageContainerName: p["autoStorageContainerName"],
                    storageContainerUrl: p["storageContainerUrl"],
                    httpUrl: p["httpUrl"],
                    blobPrefix: p["blobPrefix"],
                    filePath: p["filePath"],
                    fileMode: p["fileMode"],
                    identityReference: !p.identityReference
                      ? undefined
                      : { resourceId: p.identityReference?.["resourceId"] },
                  };
                }),
          environmentSettings:
            result.body.startTask?.["environmentSettings"] === undefined
              ? result.body.startTask?.["environmentSettings"]
              : result.body.startTask?.["environmentSettings"].map((p: any) => {
                  return { name: p["name"], value: p["value"] };
                }),
          userIdentity: !result.body.startTask?.userIdentity
            ? undefined
            : {
                username: result.body.startTask?.userIdentity?.["username"],
                autoUser: !result.body.startTask?.userIdentity?.autoUser
                  ? undefined
                  : {
                      scope:
                        result.body.startTask?.userIdentity?.autoUser?.[
                          "scope"
                        ],
                      elevationLevel:
                        result.body.startTask?.userIdentity?.autoUser?.[
                          "elevationLevel"
                        ],
                    },
              },
          maxTaskRetryCount: result.body.startTask?.["maxTaskRetryCount"],
          waitForSuccess: result.body.startTask?.["waitForSuccess"],
        },
    startTaskInfo: !result.body.startTaskInfo
      ? undefined
      : {
          state: result.body.startTaskInfo?.["state"],
          startTime: new Date(result.body.startTaskInfo?.["startTime"]),
          endTime:
            result.body.startTaskInfo?.["endTime"] !== undefined
              ? new Date(result.body.startTaskInfo?.["endTime"])
              : undefined,
          exitCode: result.body.startTaskInfo?.["exitCode"],
          containerInfo: !result.body.startTaskInfo?.containerInfo
            ? undefined
            : {
                containerId:
                  result.body.startTaskInfo?.containerInfo?.["containerId"],
                state: result.body.startTaskInfo?.containerInfo?.["state"],
                error: result.body.startTaskInfo?.containerInfo?.["error"],
              },
          failureInfo: !result.body.startTaskInfo?.failureInfo
            ? undefined
            : {
                category: result.body.startTaskInfo?.failureInfo?.["category"],
                code: result.body.startTaskInfo?.failureInfo?.["code"],
                message: result.body.startTaskInfo?.failureInfo?.["message"],
                details:
                  result.body.startTaskInfo?.failureInfo?.["details"] ===
                  undefined
                    ? result.body.startTaskInfo?.failureInfo?.["details"]
                    : result.body.startTaskInfo?.failureInfo?.["details"].map(
                        (p: any) => {
                          return { name: p["name"], value: p["value"] };
                        },
                      ),
              },
          retryCount: result.body.startTaskInfo?.["retryCount"],
          lastRetryTime:
            result.body.startTaskInfo?.["lastRetryTime"] !== undefined
              ? new Date(result.body.startTaskInfo?.["lastRetryTime"])
              : undefined,
          result: result.body.startTaskInfo?.["result"],
        },
    certificateReferences:
      result.body["certificateReferences"] === undefined
        ? result.body["certificateReferences"]
        : result.body["certificateReferences"].map((p: any) => {
            return {
              thumbprint: p["thumbprint"],
              thumbprintAlgorithm: p["thumbprintAlgorithm"],
              storeLocation: p["storeLocation"],
              storeName: p["storeName"],
              visibility: p["visibility"],
            };
          }),
    errors:
      result.body["errors"] === undefined
        ? result.body["errors"]
        : result.body["errors"].map((p: any) => {
            return {
              code: p["code"],
              message: p["message"],
              errorDetails:
                p["errorDetails"] === undefined
                  ? p["errorDetails"]
                  : p["errorDetails"].map((p: any) => {
                      return { name: p["name"], value: p["value"] };
                    }),
            };
          }),
    isDedicated: result.body["isDedicated"],
    endpointConfiguration: !result.body.endpointConfiguration
      ? undefined
      : {
          inboundEndpoints: result.body.endpointConfiguration?.[
            "inboundEndpoints"
          ].map((p: any) => {
            return {
              name: p["name"],
              protocol: p["protocol"],
              publicIpAddress: p["publicIPAddress"],
              publicFQDN: p["publicFQDN"],
              frontendPort: p["frontendPort"],
              backendPort: p["backendPort"],
            };
          }),
        },
    nodeAgentInfo: !result.body.nodeAgentInfo
      ? undefined
      : {
          version: result.body.nodeAgentInfo?.["version"],
          lastUpdateTime: new Date(
            result.body.nodeAgentInfo?.["lastUpdateTime"],
          ),
        },
    virtualMachineInfo: !result.body.virtualMachineInfo
      ? undefined
      : {
          imageReference: !result.body.virtualMachineInfo?.imageReference
            ? undefined
            : {
                publisher:
                  result.body.virtualMachineInfo?.imageReference?.["publisher"],
                offer:
                  result.body.virtualMachineInfo?.imageReference?.["offer"],
                sku: result.body.virtualMachineInfo?.imageReference?.["sku"],
                version:
                  result.body.virtualMachineInfo?.imageReference?.["version"],
                virtualMachineImageId:
                  result.body.virtualMachineInfo?.imageReference?.[
                    "virtualMachineImageId"
                  ],
                exactVersion:
                  result.body.virtualMachineInfo?.imageReference?.[
                    "exactVersion"
                  ],
              },
        },
  };
}

/** Gets information about the specified Compute Node. */
export async function getNode(
  context: Client,
  poolId: string,
  nodeId: string,
  options: GetNodeOptionalParams = { requestOptions: {} },
): Promise<BatchNode> {
  const result = await _getNodeSend(context, poolId, nodeId, options);
  return _getNodeDeserialize(result);
}

export function _rebootNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body?: NodeRebootOptions,
  options: RebootNodeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/reboot", poolId, nodeId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body:
        body === undefined
          ? body
          : { nodeRebootOption: body["nodeRebootOption"] },
    });
}

export async function _rebootNodeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** You can restart a Compute Node only if it is in an idle or running state. */
export async function rebootNode(
  context: Client,
  poolId: string,
  nodeId: string,
  body?: NodeRebootOptions,
  options: RebootNodeOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _rebootNodeSend(context, poolId, nodeId, body, options);
  return _rebootNodeDeserialize(result);
}

export function _reimageNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body?: NodeReimageOptions,
  options: ReimageNodeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/reimage", poolId, nodeId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body:
        body === undefined
          ? body
          : { nodeReimageOption: body["nodeReimageOption"] },
    });
}

export async function _reimageNodeDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * You can reinstall the operating system on a Compute Node only if it is in an
 * idle or running state. This API can be invoked only on Pools created with the
 * cloud service configuration property.
 */
export async function reimageNode(
  context: Client,
  poolId: string,
  nodeId: string,
  body?: NodeReimageOptions,
  options: ReimageNodeOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _reimageNodeSend(context, poolId, nodeId, body, options);
  return _reimageNodeDeserialize(result);
}

export function _disableNodeSchedulingSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body?: NodeDisableSchedulingOptions,
  options: DisableNodeSchedulingOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/disablescheduling", poolId, nodeId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body:
        body === undefined
          ? body
          : {
              nodeDisableSchedulingOption: body["nodeDisableSchedulingOption"],
            },
    });
}

export async function _disableNodeSchedulingDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * You can disable Task scheduling on a Compute Node only if its current
 * scheduling state is enabled.
 */
export async function disableNodeScheduling(
  context: Client,
  poolId: string,
  nodeId: string,
  body?: NodeDisableSchedulingOptions,
  options: DisableNodeSchedulingOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _disableNodeSchedulingSend(
    context,
    poolId,
    nodeId,
    body,
    options,
  );
  return _disableNodeSchedulingDeserialize(result);
}

export function _enableNodeSchedulingSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: EnableNodeSchedulingOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/enablescheduling", poolId, nodeId)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _enableNodeSchedulingDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/**
 * You can enable Task scheduling on a Compute Node only if its current scheduling
 * state is disabled
 */
export async function enableNodeScheduling(
  context: Client,
  poolId: string,
  nodeId: string,
  options: EnableNodeSchedulingOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _enableNodeSchedulingSend(
    context,
    poolId,
    nodeId,
    options,
  );
  return _enableNodeSchedulingDeserialize(result);
}

export function _getNodeRemoteLoginSettingsSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: GetNodeRemoteLoginSettingsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/remoteloginsettings", poolId, nodeId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _getNodeRemoteLoginSettingsDeserialize(
  result: PathUncheckedResponse,
): Promise<BatchNodeRemoteLoginSettingsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    remoteLoginIpAddress: result.body["remoteLoginIPAddress"],
    remoteLoginPort: result.body["remoteLoginPort"],
  };
}

/**
 * Before you can remotely login to a Compute Node using the remote login
 * settings, you must create a user Account on the Compute Node. This API can be
 * invoked only on Pools created with the virtual machine configuration property.
 * For Pools created with a cloud service configuration, see the GetRemoteDesktop
 * API.
 */
export async function getNodeRemoteLoginSettings(
  context: Client,
  poolId: string,
  nodeId: string,
  options: GetNodeRemoteLoginSettingsOptionalParams = { requestOptions: {} },
): Promise<BatchNodeRemoteLoginSettingsResult> {
  const result = await _getNodeRemoteLoginSettingsSend(
    context,
    poolId,
    nodeId,
    options,
  );
  return _getNodeRemoteLoginSettingsDeserialize(result);
}

export function _getNodeRemoteDesktopFileSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: GetNodeRemoteDesktopFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/rdp", poolId, nodeId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _getNodeRemoteDesktopFileDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return typeof result.body === "string"
    ? stringToUint8Array(result.body, "base64")
    : result.body;
}

/**
 * Before you can access a Compute Node by using the RDP file, you must create a
 * user Account on the Compute Node. This API can only be invoked on Pools created
 * with a cloud service configuration. For Pools created with a virtual machine
 * configuration, see the GetRemoteLoginSettings API.
 */
export async function getNodeRemoteDesktopFile(
  context: Client,
  poolId: string,
  nodeId: string,
  options: GetNodeRemoteDesktopFileOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getNodeRemoteDesktopFileSend(
    context,
    poolId,
    nodeId,
    options,
  );
  return _getNodeRemoteDesktopFileDeserialize(result);
}

export function _uploadNodeLogsSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body: UploadBatchServiceLogsOptions,
  options: UploadNodeLogsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/uploadbatchservicelogs",
      poolId,
      nodeId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
      body: {
        containerUrl: body["containerUrl"],
        startTime: body["startTime"].toISOString(),
        endTime: body["endTime"]?.toISOString(),
        identityReference: !body.identityReference
          ? body.identityReference
          : batchNodeIdentityReferenceSerializer(body.identityReference),
      },
    });
}

export async function _uploadNodeLogsDeserialize(
  result: PathUncheckedResponse,
): Promise<UploadBatchServiceLogsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    virtualDirectoryName: result.body["virtualDirectoryName"],
    numberOfFilesUploaded: result.body["numberOfFilesUploaded"],
  };
}

/**
 * This is for gathering Azure Batch service log files in an automated fashion
 * from Compute Nodes if you are experiencing an error and wish to escalate to
 * Azure support. The Azure Batch service log files should be shared with Azure
 * support to aid in debugging issues with the Batch service.
 */
export async function uploadNodeLogs(
  context: Client,
  poolId: string,
  nodeId: string,
  body: UploadBatchServiceLogsOptions,
  options: UploadNodeLogsOptionalParams = { requestOptions: {} },
): Promise<UploadBatchServiceLogsResult> {
  const result = await _uploadNodeLogsSend(
    context,
    poolId,
    nodeId,
    body,
    options,
  );
  return _uploadNodeLogsDeserialize(result);
}

export function _listNodesSend(
  context: Client,
  poolId: string,
  options: ListNodesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/nodes", poolId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        maxresults: options?.maxresults,
        timeOut: options?.timeOutInSeconds,
        $filter: options?.$filter,
        $select: options?.$select,
      },
    });
}

export async function _listNodesDeserialize(
  result: PathUncheckedResponse,
): Promise<_BatchNodeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              id: p["id"],
              url: p["url"],
              state: p["state"],
              schedulingState: p["schedulingState"],
              stateTransitionTime:
                p["stateTransitionTime"] !== undefined
                  ? new Date(p["stateTransitionTime"])
                  : undefined,
              lastBootTime:
                p["lastBootTime"] !== undefined
                  ? new Date(p["lastBootTime"])
                  : undefined,
              allocationTime:
                p["allocationTime"] !== undefined
                  ? new Date(p["allocationTime"])
                  : undefined,
              ipAddress: p["ipAddress"],
              affinityId: p["affinityId"],
              vmSize: p["vmSize"],
              totalTasksRun: p["totalTasksRun"],
              runningTasksCount: p["runningTasksCount"],
              runningTaskSlotsCount: p["runningTaskSlotsCount"],
              totalTasksSucceeded: p["totalTasksSucceeded"],
              recentTasks:
                p["recentTasks"] === undefined
                  ? p["recentTasks"]
                  : p["recentTasks"].map((p: any) => {
                      return {
                        taskUrl: p["taskUrl"],
                        jobId: p["jobId"],
                        taskId: p["taskId"],
                        subtaskId: p["subtaskId"],
                        taskState: p["taskState"],
                        executionInfo: !p.executionInfo
                          ? undefined
                          : {
                              startTime:
                                p.executionInfo?.["startTime"] !== undefined
                                  ? new Date(p.executionInfo?.["startTime"])
                                  : undefined,
                              endTime:
                                p.executionInfo?.["endTime"] !== undefined
                                  ? new Date(p.executionInfo?.["endTime"])
                                  : undefined,
                              exitCode: p.executionInfo?.["exitCode"],
                              containerInfo: !p.executionInfo?.containerInfo
                                ? undefined
                                : {
                                    containerId:
                                      p.executionInfo?.containerInfo?.[
                                        "containerId"
                                      ],
                                    state:
                                      p.executionInfo?.containerInfo?.["state"],
                                    error:
                                      p.executionInfo?.containerInfo?.["error"],
                                  },
                              failureInfo: !p.executionInfo?.failureInfo
                                ? undefined
                                : {
                                    category:
                                      p.executionInfo?.failureInfo?.[
                                        "category"
                                      ],
                                    code: p.executionInfo?.failureInfo?.[
                                      "code"
                                    ],
                                    message:
                                      p.executionInfo?.failureInfo?.["message"],
                                    details:
                                      p.executionInfo?.failureInfo?.[
                                        "details"
                                      ] === undefined
                                        ? p.executionInfo?.failureInfo?.[
                                            "details"
                                          ]
                                        : p.executionInfo?.failureInfo?.[
                                            "details"
                                          ].map((p: any) => {
                                            return {
                                              name: p["name"],
                                              value: p["value"],
                                            };
                                          }),
                                  },
                              retryCount: p.executionInfo?.["retryCount"],
                              lastRetryTime:
                                p.executionInfo?.["lastRetryTime"] !== undefined
                                  ? new Date(p.executionInfo?.["lastRetryTime"])
                                  : undefined,
                              requeueCount: p.executionInfo?.["requeueCount"],
                              lastRequeueTime:
                                p.executionInfo?.["lastRequeueTime"] !==
                                undefined
                                  ? new Date(
                                      p.executionInfo?.["lastRequeueTime"],
                                    )
                                  : undefined,
                              result: p.executionInfo?.["result"],
                            },
                      };
                    }),
              startTask: !p.startTask
                ? undefined
                : {
                    commandLine: p.startTask?.["commandLine"],
                    containerSettings: !p.startTask?.containerSettings
                      ? undefined
                      : {
                          containerRunOptions:
                            p.startTask?.containerSettings?.[
                              "containerRunOptions"
                            ],
                          imageName:
                            p.startTask?.containerSettings?.["imageName"],
                          registry: !p.startTask?.containerSettings?.registry
                            ? undefined
                            : {
                                username:
                                  p.startTask?.containerSettings?.registry?.[
                                    "username"
                                  ],
                                password:
                                  p.startTask?.containerSettings?.registry?.[
                                    "password"
                                  ],
                                registryServer:
                                  p.startTask?.containerSettings?.registry?.[
                                    "registryServer"
                                  ],
                                identityReference: !p.startTask
                                  ?.containerSettings?.registry
                                  ?.identityReference
                                  ? undefined
                                  : {
                                      resourceId:
                                        p.startTask?.containerSettings?.registry
                                          ?.identityReference?.["resourceId"],
                                    },
                              },
                          workingDirectory:
                            p.startTask?.containerSettings?.[
                              "workingDirectory"
                            ],
                        },
                    resourceFiles:
                      p.startTask?.["resourceFiles"] === undefined
                        ? p.startTask?.["resourceFiles"]
                        : p.startTask?.["resourceFiles"].map((p: any) => {
                            return {
                              autoStorageContainerName:
                                p["autoStorageContainerName"],
                              storageContainerUrl: p["storageContainerUrl"],
                              httpUrl: p["httpUrl"],
                              blobPrefix: p["blobPrefix"],
                              filePath: p["filePath"],
                              fileMode: p["fileMode"],
                              identityReference: !p.identityReference
                                ? undefined
                                : {
                                    resourceId:
                                      p.identityReference?.["resourceId"],
                                  },
                            };
                          }),
                    environmentSettings:
                      p.startTask?.["environmentSettings"] === undefined
                        ? p.startTask?.["environmentSettings"]
                        : p.startTask?.["environmentSettings"].map((p: any) => {
                            return { name: p["name"], value: p["value"] };
                          }),
                    userIdentity: !p.startTask?.userIdentity
                      ? undefined
                      : {
                          username: p.startTask?.userIdentity?.["username"],
                          autoUser: !p.startTask?.userIdentity?.autoUser
                            ? undefined
                            : {
                                scope:
                                  p.startTask?.userIdentity?.autoUser?.[
                                    "scope"
                                  ],
                                elevationLevel:
                                  p.startTask?.userIdentity?.autoUser?.[
                                    "elevationLevel"
                                  ],
                              },
                        },
                    maxTaskRetryCount: p.startTask?.["maxTaskRetryCount"],
                    waitForSuccess: p.startTask?.["waitForSuccess"],
                  },
              startTaskInfo: !p.startTaskInfo
                ? undefined
                : {
                    state: p.startTaskInfo?.["state"],
                    startTime: new Date(p.startTaskInfo?.["startTime"]),
                    endTime:
                      p.startTaskInfo?.["endTime"] !== undefined
                        ? new Date(p.startTaskInfo?.["endTime"])
                        : undefined,
                    exitCode: p.startTaskInfo?.["exitCode"],
                    containerInfo: !p.startTaskInfo?.containerInfo
                      ? undefined
                      : {
                          containerId:
                            p.startTaskInfo?.containerInfo?.["containerId"],
                          state: p.startTaskInfo?.containerInfo?.["state"],
                          error: p.startTaskInfo?.containerInfo?.["error"],
                        },
                    failureInfo: !p.startTaskInfo?.failureInfo
                      ? undefined
                      : {
                          category: p.startTaskInfo?.failureInfo?.["category"],
                          code: p.startTaskInfo?.failureInfo?.["code"],
                          message: p.startTaskInfo?.failureInfo?.["message"],
                          details:
                            p.startTaskInfo?.failureInfo?.["details"] ===
                            undefined
                              ? p.startTaskInfo?.failureInfo?.["details"]
                              : p.startTaskInfo?.failureInfo?.["details"].map(
                                  (p: any) => {
                                    return {
                                      name: p["name"],
                                      value: p["value"],
                                    };
                                  },
                                ),
                        },
                    retryCount: p.startTaskInfo?.["retryCount"],
                    lastRetryTime:
                      p.startTaskInfo?.["lastRetryTime"] !== undefined
                        ? new Date(p.startTaskInfo?.["lastRetryTime"])
                        : undefined,
                    result: p.startTaskInfo?.["result"],
                  },
              certificateReferences:
                p["certificateReferences"] === undefined
                  ? p["certificateReferences"]
                  : p["certificateReferences"].map((p: any) => {
                      return {
                        thumbprint: p["thumbprint"],
                        thumbprintAlgorithm: p["thumbprintAlgorithm"],
                        storeLocation: p["storeLocation"],
                        storeName: p["storeName"],
                        visibility: p["visibility"],
                      };
                    }),
              errors:
                p["errors"] === undefined
                  ? p["errors"]
                  : p["errors"].map((p: any) => {
                      return {
                        code: p["code"],
                        message: p["message"],
                        errorDetails:
                          p["errorDetails"] === undefined
                            ? p["errorDetails"]
                            : p["errorDetails"].map((p: any) => {
                                return { name: p["name"], value: p["value"] };
                              }),
                      };
                    }),
              isDedicated: p["isDedicated"],
              endpointConfiguration: !p.endpointConfiguration
                ? undefined
                : {
                    inboundEndpoints: p.endpointConfiguration?.[
                      "inboundEndpoints"
                    ].map((p: any) => {
                      return {
                        name: p["name"],
                        protocol: p["protocol"],
                        publicIpAddress: p["publicIPAddress"],
                        publicFQDN: p["publicFQDN"],
                        frontendPort: p["frontendPort"],
                        backendPort: p["backendPort"],
                      };
                    }),
                  },
              nodeAgentInfo: !p.nodeAgentInfo
                ? undefined
                : {
                    version: p.nodeAgentInfo?.["version"],
                    lastUpdateTime: new Date(
                      p.nodeAgentInfo?.["lastUpdateTime"],
                    ),
                  },
              virtualMachineInfo: !p.virtualMachineInfo
                ? undefined
                : {
                    imageReference: !p.virtualMachineInfo?.imageReference
                      ? undefined
                      : {
                          publisher:
                            p.virtualMachineInfo?.imageReference?.["publisher"],
                          offer:
                            p.virtualMachineInfo?.imageReference?.["offer"],
                          sku: p.virtualMachineInfo?.imageReference?.["sku"],
                          version:
                            p.virtualMachineInfo?.imageReference?.["version"],
                          virtualMachineImageId:
                            p.virtualMachineInfo?.imageReference?.[
                              "virtualMachineImageId"
                            ],
                          exactVersion:
                            p.virtualMachineInfo?.imageReference?.[
                              "exactVersion"
                            ],
                        },
                  },
            };
          }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists the Compute Nodes in the specified Pool. */
export function listNodes(
  context: Client,
  poolId: string,
  options: ListNodesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchNode> {
  return buildPagedAsyncIterator(
    context,
    () => _listNodesSend(context, poolId, options),
    _listNodesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _getNodeExtensionSend(
  context: Client,
  poolId: string,
  nodeId: string,
  extensionName: string,
  options: GetNodeExtensionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/extensions/{extensionName}",
      poolId,
      nodeId,
      extensionName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
        $select: options?.$select,
      },
    });
}

export async function _getNodeExtensionDeserialize(
  result: PathUncheckedResponse,
): Promise<NodeVMExtension> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    provisioningState: result.body["provisioningState"],
    vmExtension: !result.body.vmExtension
      ? undefined
      : {
          name: result.body.vmExtension?.["name"],
          publisher: result.body.vmExtension?.["publisher"],
          type: result.body.vmExtension?.["type"],
          typeHandlerVersion: result.body.vmExtension?.["typeHandlerVersion"],
          autoUpgradeMinorVersion:
            result.body.vmExtension?.["autoUpgradeMinorVersion"],
          enableAutomaticUpgrade:
            result.body.vmExtension?.["enableAutomaticUpgrade"],
          settings: result.body.vmExtension?.["settings"],
          protectedSettings: result.body.vmExtension?.["protectedSettings"],
          provisionAfterExtensions:
            result.body.vmExtension?.["provisionAfterExtensions"],
        },
    instanceView: !result.body.instanceView
      ? undefined
      : {
          name: result.body.instanceView?.["name"],
          statuses:
            result.body.instanceView?.["statuses"] === undefined
              ? result.body.instanceView?.["statuses"]
              : result.body.instanceView?.["statuses"].map((p: any) => {
                  return {
                    code: p["code"],
                    displayStatus: p["displayStatus"],
                    level: p["level"],
                    message: p["message"],
                    time: p["time"],
                  };
                }),
          subStatuses:
            result.body.instanceView?.["subStatuses"] === undefined
              ? result.body.instanceView?.["subStatuses"]
              : result.body.instanceView?.["subStatuses"].map((p: any) => {
                  return {
                    code: p["code"],
                    displayStatus: p["displayStatus"],
                    level: p["level"],
                    message: p["message"],
                    time: p["time"],
                  };
                }),
        },
  };
}

/** Gets information about the specified Compute Node Extension. */
export async function getNodeExtension(
  context: Client,
  poolId: string,
  nodeId: string,
  extensionName: string,
  options: GetNodeExtensionOptionalParams = { requestOptions: {} },
): Promise<NodeVMExtension> {
  const result = await _getNodeExtensionSend(
    context,
    poolId,
    nodeId,
    extensionName,
    options,
  );
  return _getNodeExtensionDeserialize(result);
}

export function _listNodeExtensionsSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ListNodeExtensionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/extensions", poolId, nodeId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxresults: options?.maxresults,
        timeOut: options?.timeOutInSeconds,
        $select: options?.$select,
      },
    });
}

export async function _listNodeExtensionsDeserialize(
  result: PathUncheckedResponse,
): Promise<_NodeVMExtensionList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              provisioningState: p["provisioningState"],
              vmExtension: !p.vmExtension
                ? undefined
                : {
                    name: p.vmExtension?.["name"],
                    publisher: p.vmExtension?.["publisher"],
                    type: p.vmExtension?.["type"],
                    typeHandlerVersion: p.vmExtension?.["typeHandlerVersion"],
                    autoUpgradeMinorVersion:
                      p.vmExtension?.["autoUpgradeMinorVersion"],
                    enableAutomaticUpgrade:
                      p.vmExtension?.["enableAutomaticUpgrade"],
                    settings: p.vmExtension?.["settings"],
                    protectedSettings: p.vmExtension?.["protectedSettings"],
                    provisionAfterExtensions:
                      p.vmExtension?.["provisionAfterExtensions"],
                  },
              instanceView: !p.instanceView
                ? undefined
                : {
                    name: p.instanceView?.["name"],
                    statuses:
                      p.instanceView?.["statuses"] === undefined
                        ? p.instanceView?.["statuses"]
                        : p.instanceView?.["statuses"].map((p: any) => {
                            return {
                              code: p["code"],
                              displayStatus: p["displayStatus"],
                              level: p["level"],
                              message: p["message"],
                              time: p["time"],
                            };
                          }),
                    subStatuses:
                      p.instanceView?.["subStatuses"] === undefined
                        ? p.instanceView?.["subStatuses"]
                        : p.instanceView?.["subStatuses"].map((p: any) => {
                            return {
                              code: p["code"],
                              displayStatus: p["displayStatus"],
                              level: p["level"],
                              message: p["message"],
                              time: p["time"],
                            };
                          }),
                  },
            };
          }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists the Compute Nodes Extensions in the specified Pool. */
export function listNodeExtensions(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ListNodeExtensionsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<NodeVMExtension> {
  return buildPagedAsyncIterator(
    context,
    () => _listNodeExtensionsSend(context, poolId, nodeId, options),
    _listNodeExtensionsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _deleteNodeFileSend(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: DeleteNodeFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
      poolId,
      nodeId,
      filePath,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
        recursive: options?.recursive,
      },
    });
}

export async function _deleteNodeFileDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes the specified file from the Compute Node. */
export async function deleteNodeFile(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: DeleteNodeFileOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteNodeFileSend(
    context,
    poolId,
    nodeId,
    filePath,
    options,
  );
  return _deleteNodeFileDeserialize(result);
}

export function _getNodeFileSend(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: GetNodeFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
      poolId,
      nodeId,
      filePath,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
        ...(options?.ocpRange !== undefined
          ? { "ocp-range": options?.ocpRange }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _getNodeFileDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return typeof result.body === "string"
    ? stringToUint8Array(result.body, "base64")
    : result.body;
}

/** Returns the content of the specified Compute Node file. */
export async function getNodeFile(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: GetNodeFileOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const result = await _getNodeFileSend(
    context,
    poolId,
    nodeId,
    filePath,
    options,
  );
  return _getNodeFileDeserialize(result);
}

export function _getNodeFilePropertiesSend(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: GetNodeFilePropertiesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
      poolId,
      nodeId,
      filePath,
    )
    .head({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifModifiedSince !== undefined
          ? { "if-modified-since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "if-unmodified-since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
      },
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        timeOut: options?.timeOutInSeconds,
      },
    });
}

export async function _getNodeFilePropertiesDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Gets the properties of the specified Compute Node file. */
export async function getNodeFileProperties(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: GetNodeFilePropertiesOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _getNodeFilePropertiesSend(
    context,
    poolId,
    nodeId,
    filePath,
    options,
  );
  return _getNodeFilePropertiesDeserialize(result);
}

export function _listNodeFilesSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ListNodeFilesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/files", poolId, nodeId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2023-05-01.17.0",
        maxresults: options?.maxresults,
        timeOut: options?.timeOutInSeconds,
        $filter: options?.$filter,
        recursive: options?.recursive,
      },
    });
}

export async function _listNodeFilesDeserialize(
  result: PathUncheckedResponse,
): Promise<_NodeFileListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      result.body["value"] === undefined
        ? result.body["value"]
        : result.body["value"].map((p: any) => {
            return {
              name: p["name"],
              url: p["url"],
              isDirectory: p["isDirectory"],
              properties: !p.properties
                ? undefined
                : {
                    creationTime:
                      p.properties?.["creationTime"] !== undefined
                        ? new Date(p.properties?.["creationTime"])
                        : undefined,
                    lastModified: new Date(p.properties?.["lastModified"]),
                    contentLength: p.properties?.["contentLength"],
                    contentType: p.properties?.["contentType"],
                    fileMode: p.properties?.["fileMode"],
                  },
            };
          }),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists all of the files in Task directories on the specified Compute Node. */
export function listNodeFiles(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ListNodeFilesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<NodeFile> {
  return buildPagedAsyncIterator(
    context,
    () => _listNodeFilesSend(context, poolId, nodeId, options),
    _listNodeFilesDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}
