// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PoolListUsageMetricsResult,
  PoolUsageMetrics,
  BatchPoolCreateOptions,
  BatchPoolListResult,
  BatchPool,
  AutoScaleRun,
  BatchPoolUpdateOptions,
  BatchPoolEnableAutoScaleOptions,
  BatchPoolEvaluateAutoScaleOptions,
  BatchPoolResizeOptions,
  BatchPoolReplaceOptions,
  NodeRemoveOptions,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  BatchContext as Client,
  CreatePool201Response,
  CreatePoolDefaultResponse,
  DeletePool202Response,
  DeletePoolDefaultResponse,
  DisablePoolAutoScale200Response,
  DisablePoolAutoScaleDefaultResponse,
  EnablePoolAutoScale200Response,
  EnablePoolAutoScaleDefaultResponse,
  EvaluatePoolAutoScale200Response,
  EvaluatePoolAutoScaleDefaultResponse,
  GetPool200Response,
  GetPoolDefaultResponse,
  ListPools200Response,
  ListPoolsDefaultResponse,
  ListPoolUsageMetrics200Response,
  ListPoolUsageMetricsDefaultResponse,
  PoolExists200Response,
  PoolExists404Response,
  PoolExistsDefaultResponse,
  RemoveNodes202Response,
  RemoveNodesDefaultResponse,
  ReplacePoolProperties204Response,
  ReplacePoolPropertiesDefaultResponse,
  ResizePool202Response,
  ResizePoolDefaultResponse,
  StopPoolResize202Response,
  StopPoolResizeDefaultResponse,
  UpdatePool200Response,
  UpdatePoolDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  PoolsListPoolUsageMetricsOptions,
  PoolsCreatePoolOptions,
  PoolsListPoolsOptions,
  PoolsDeletePoolOptions,
  PoolsPoolExistsOptions,
  PoolsGetPoolOptions,
  PoolsUpdatePoolOptions,
  PoolsDisablePoolAutoScaleOptions,
  PoolsEnablePoolAutoScaleOptions,
  PoolsEvaluatePoolAutoScaleOptions,
  PoolsResizePoolOptions,
  PoolsStopPoolResizeOptions,
  PoolsReplacePoolPropertiesOptions,
  PoolsRemoveNodesOptions,
} from "../../models/options.js";

export function _listPoolUsageMetricsSend(
  context: Client,
  options: PoolsListPoolUsageMetricsOptions = { requestOptions: {} },
): StreamableMethod<
  ListPoolUsageMetrics200Response | ListPoolUsageMetricsDefaultResponse
> {
  return context
    .path("/poolusagemetrics")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxresults: options?.maxresults,
        timeOut: options?.timeOut,
        starttime: options?.starttime?.toISOString(),
        endtime: options?.endtime?.toISOString(),
        $filter: options?.$filter,
      },
    });
}

export async function _listPoolUsageMetricsDeserialize(
  result: ListPoolUsageMetrics200Response | ListPoolUsageMetricsDefaultResponse,
): Promise<PoolListUsageMetricsResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
          poolId: p["poolId"],
          startTime: new Date(p["startTime"]),
          endTime: new Date(p["endTime"]),
          vmSize: p["vmSize"],
          totalCoreHours: p["totalCoreHours"],
        })),
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
  options: PoolsListPoolUsageMetricsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<PoolUsageMetrics> {
  return buildPagedAsyncIterator(
    context,
    () => _listPoolUsageMetricsSend(context, options),
    _listPoolUsageMetricsDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _createPoolSend(
  context: Client,
  body: BatchPoolCreateOptions,
  options: PoolsCreatePoolOptions = { requestOptions: {} },
): StreamableMethod<CreatePool201Response | CreatePoolDefaultResponse> {
  return context
    .path("/pools")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: { timeOut: options?.timeOut },
      body: {
        id: body["id"],
        displayName: body["displayName"],
        vmSize: body["vmSize"],
        cloudServiceConfiguration: !body.cloudServiceConfiguration
          ? undefined
          : {
              osFamily: body.cloudServiceConfiguration?.["osFamily"],
              osVersion: body.cloudServiceConfiguration?.["osVersion"],
            },
        virtualMachineConfiguration: !body.virtualMachineConfiguration
          ? undefined
          : {
              imageReference: {
                publisher:
                  body.virtualMachineConfiguration?.imageReference["publisher"],
                offer:
                  body.virtualMachineConfiguration?.imageReference["offer"],
                sku: body.virtualMachineConfiguration?.imageReference["sku"],
                version:
                  body.virtualMachineConfiguration?.imageReference["version"],
                virtualMachineImageId:
                  body.virtualMachineConfiguration?.imageReference[
                    "virtualMachineImageId"
                  ],
              },
              nodeAgentSKUId:
                body.virtualMachineConfiguration?.["nodeAgentSKUId"],
              windowsConfiguration: !body.virtualMachineConfiguration
                ?.windowsConfiguration
                ? undefined
                : {
                    enableAutomaticUpdates:
                      body.virtualMachineConfiguration?.windowsConfiguration?.[
                        "enableAutomaticUpdates"
                      ],
                  },
              dataDisks: !body.virtualMachineConfiguration?.["dataDisks"]
                ? body.virtualMachineConfiguration?.["dataDisks"]
                : body.virtualMachineConfiguration?.["dataDisks"].map((p) => ({
                    lun: p["lun"],
                    caching: p["caching"],
                    diskSizeGB: p["diskSizeGB"],
                    storageAccountType: p["storageAccountType"],
                  })),
              licenseType: body.virtualMachineConfiguration?.["licenseType"],
              containerConfiguration: !body.virtualMachineConfiguration
                ?.containerConfiguration
                ? undefined
                : {
                    type: body.virtualMachineConfiguration
                      ?.containerConfiguration?.["type"],
                    containerImageNames:
                      body.virtualMachineConfiguration
                        ?.containerConfiguration?.["containerImageNames"],
                    containerRegistries: !body.virtualMachineConfiguration
                      ?.containerConfiguration?.["containerRegistries"]
                      ? body.virtualMachineConfiguration
                          ?.containerConfiguration?.["containerRegistries"]
                      : body.virtualMachineConfiguration?.containerConfiguration?.[
                          "containerRegistries"
                        ].map((p) => ({
                          username: p["username"],
                          password: p["password"],
                          registryServer: p["registryServer"],
                          identityReference: !p.identityReference
                            ? undefined
                            : {
                                resourceId: p.identityReference?.["resourceId"],
                              },
                        })),
                  },
              diskEncryptionConfiguration: !body.virtualMachineConfiguration
                ?.diskEncryptionConfiguration
                ? undefined
                : {
                    targets:
                      body.virtualMachineConfiguration
                        ?.diskEncryptionConfiguration?.["targets"],
                  },
              nodePlacementConfiguration: !body.virtualMachineConfiguration
                ?.nodePlacementConfiguration
                ? undefined
                : {
                    policy:
                      body.virtualMachineConfiguration
                        ?.nodePlacementConfiguration?.["policy"],
                  },
              extensions: !body.virtualMachineConfiguration?.["extensions"]
                ? body.virtualMachineConfiguration?.["extensions"]
                : body.virtualMachineConfiguration?.["extensions"].map((p) => ({
                    name: p["name"],
                    publisher: p["publisher"],
                    type: p["type"],
                    typeHandlerVersion: p["typeHandlerVersion"],
                    autoUpgradeMinorVersion: p["autoUpgradeMinorVersion"],
                    enableAutomaticUpgrade: p["enableAutomaticUpgrade"],
                    settings: p["settings"],
                    protectedSettings: p["protectedSettings"],
                    provisionAfterExtensions: p["provisionAfterExtensions"],
                  })),
              osDisk: !body.virtualMachineConfiguration?.osDisk
                ? undefined
                : {
                    ephemeralOSDiskSettings: !body.virtualMachineConfiguration
                      ?.osDisk?.ephemeralOSDiskSettings
                      ? undefined
                      : {
                          placement:
                            body.virtualMachineConfiguration?.osDisk
                              ?.ephemeralOSDiskSettings?.["placement"],
                        },
                  },
            },
        resizeTimeout: body["resizeTimeout"],
        targetDedicatedNodes: body["targetDedicatedNodes"],
        targetLowPriorityNodes: body["targetLowPriorityNodes"],
        enableAutoScale: body["enableAutoScale"],
        autoScaleFormula: body["autoScaleFormula"],
        autoScaleEvaluationInterval: body["autoScaleEvaluationInterval"],
        enableInterNodeCommunication: body["enableInterNodeCommunication"],
        networkConfiguration: !body.networkConfiguration
          ? undefined
          : {
              subnetId: body.networkConfiguration?.["subnetId"],
              dynamicVNetAssignmentScope:
                body.networkConfiguration?.["dynamicVNetAssignmentScope"],
              endpointConfiguration: !body.networkConfiguration
                ?.endpointConfiguration
                ? undefined
                : {
                    inboundNATPools:
                      body.networkConfiguration?.endpointConfiguration?.[
                        "inboundNATPools"
                      ].map((p) => ({
                        name: p["name"],
                        protocol: p["protocol"],
                        backendPort: p["backendPort"],
                        frontendPortRangeStart: p["frontendPortRangeStart"],
                        frontendPortRangeEnd: p["frontendPortRangeEnd"],
                        networkSecurityGroupRules: !p[
                          "networkSecurityGroupRules"
                        ]
                          ? p["networkSecurityGroupRules"]
                          : p["networkSecurityGroupRules"].map((p) => ({
                              priority: p["priority"],
                              access: p["access"],
                              sourceAddressPrefix: p["sourceAddressPrefix"],
                              sourcePortRanges: p["sourcePortRanges"],
                            })),
                      })),
                  },
              publicIPAddressConfiguration: !body.networkConfiguration
                ?.publicIPAddressConfiguration
                ? undefined
                : {
                    provision:
                      body.networkConfiguration?.publicIPAddressConfiguration?.[
                        "provision"
                      ],
                    ipAddressIds:
                      body.networkConfiguration?.publicIPAddressConfiguration?.[
                        "ipAddressIds"
                      ],
                  },
              enableAcceleratedNetworking:
                body.networkConfiguration?.["enableAcceleratedNetworking"],
            },
        startTask: !body.startTask
          ? undefined
          : {
              commandLine: body.startTask?.["commandLine"],
              containerSettings: !body.startTask?.containerSettings
                ? undefined
                : {
                    containerRunOptions:
                      body.startTask?.containerSettings?.[
                        "containerRunOptions"
                      ],
                    imageName: body.startTask?.containerSettings?.["imageName"],
                    registry: !body.startTask?.containerSettings?.registry
                      ? undefined
                      : {
                          username:
                            body.startTask?.containerSettings?.registry?.[
                              "username"
                            ],
                          password:
                            body.startTask?.containerSettings?.registry?.[
                              "password"
                            ],
                          registryServer:
                            body.startTask?.containerSettings?.registry?.[
                              "registryServer"
                            ],
                          identityReference: !body.startTask?.containerSettings
                            ?.registry?.identityReference
                            ? undefined
                            : {
                                resourceId:
                                  body.startTask?.containerSettings?.registry
                                    ?.identityReference?.["resourceId"],
                              },
                        },
                    workingDirectory:
                      body.startTask?.containerSettings?.["workingDirectory"],
                  },
              resourceFiles: !body.startTask?.["resourceFiles"]
                ? body.startTask?.["resourceFiles"]
                : body.startTask?.["resourceFiles"].map((p) => ({
                    autoStorageContainerName: p["autoStorageContainerName"],
                    storageContainerUrl: p["storageContainerUrl"],
                    httpUrl: p["httpUrl"],
                    blobPrefix: p["blobPrefix"],
                    filePath: p["filePath"],
                    fileMode: p["fileMode"],
                    identityReference: !p.identityReference
                      ? undefined
                      : { resourceId: p.identityReference?.["resourceId"] },
                  })),
              environmentSettings: !body.startTask?.["environmentSettings"]
                ? body.startTask?.["environmentSettings"]
                : body.startTask?.["environmentSettings"].map((p) => ({
                    name: p["name"],
                    value: p["value"],
                  })),
              userIdentity: !body.startTask?.userIdentity
                ? undefined
                : {
                    username: body.startTask?.userIdentity?.["username"],
                    autoUser: !body.startTask?.userIdentity?.autoUser
                      ? undefined
                      : {
                          scope:
                            body.startTask?.userIdentity?.autoUser?.["scope"],
                          elevationLevel:
                            body.startTask?.userIdentity?.autoUser?.[
                              "elevationLevel"
                            ],
                        },
                  },
              maxTaskRetryCount: body.startTask?.["maxTaskRetryCount"],
              waitForSuccess: body.startTask?.["waitForSuccess"],
            },
        certificateReferences: !body["certificateReferences"]
          ? body["certificateReferences"]
          : body["certificateReferences"].map((p) => ({
              thumbprint: p["thumbprint"],
              thumbprintAlgorithm: p["thumbprintAlgorithm"],
              storeLocation: p["storeLocation"],
              storeName: p["storeName"],
              visibility: p["visibility"],
            })),
        applicationPackageReferences: !body["applicationPackageReferences"]
          ? body["applicationPackageReferences"]
          : body["applicationPackageReferences"].map((p) => ({
              applicationId: p["applicationId"],
              version: p["version"],
            })),
        applicationLicenses: body["applicationLicenses"],
        taskSlotsPerNode: body["taskSlotsPerNode"],
        taskSchedulingPolicy: !body.taskSchedulingPolicy
          ? undefined
          : { nodeFillType: body.taskSchedulingPolicy?.["nodeFillType"] },
        userAccounts: !body["userAccounts"]
          ? body["userAccounts"]
          : body["userAccounts"].map((p) => ({
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
            })),
        metadata: !body["metadata"]
          ? body["metadata"]
          : body["metadata"].map((p) => ({
              name: p["name"],
              value: p["value"],
            })),
        mountConfiguration: !body["mountConfiguration"]
          ? body["mountConfiguration"]
          : body["mountConfiguration"].map((p) => ({
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
            })),
        targetNodeCommunicationMode: body["targetNodeCommunicationMode"],
      },
    });
}

export async function _createPoolDeserialize(
  result: CreatePool201Response | CreatePoolDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  options: PoolsCreatePoolOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _createPoolSend(context, body, options);
  return _createPoolDeserialize(result);
}

export function _listPoolsSend(
  context: Client,
  options: PoolsListPoolsOptions = { requestOptions: {} },
): StreamableMethod<ListPools200Response | ListPoolsDefaultResponse> {
  return context
    .path("/pools")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxresults: options?.maxresults,
        timeOut: options?.timeOut,
        $filter: options?.$filter,
        $select: options?.$select,
        $expand: options?.$expand,
      },
    });
}

export async function _listPoolsDeserialize(
  result: ListPools200Response | ListPoolsDefaultResponse,
): Promise<BatchPoolListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
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
                    p.virtualMachineConfiguration?.imageReference["publisher"],
                  offer: p.virtualMachineConfiguration?.imageReference["offer"],
                  sku: p.virtualMachineConfiguration?.imageReference["sku"],
                  version:
                    p.virtualMachineConfiguration?.imageReference["version"],
                  virtualMachineImageId:
                    p.virtualMachineConfiguration?.imageReference[
                      "virtualMachineImageId"
                    ],
                  exactVersion:
                    p.virtualMachineConfiguration?.imageReference[
                      "exactVersion"
                    ],
                },
                nodeAgentSKUId:
                  p.virtualMachineConfiguration?.["nodeAgentSKUId"],
                windowsConfiguration: !p.virtualMachineConfiguration
                  ?.windowsConfiguration
                  ? undefined
                  : {
                      enableAutomaticUpdates:
                        p.virtualMachineConfiguration?.windowsConfiguration?.[
                          "enableAutomaticUpdates"
                        ],
                    },
                dataDisks: !p.virtualMachineConfiguration?.["dataDisks"]
                  ? p.virtualMachineConfiguration?.["dataDisks"]
                  : p.virtualMachineConfiguration?.["dataDisks"].map((p) => ({
                      lun: p["lun"],
                      caching: p["caching"],
                      diskSizeGB: p["diskSizeGB"],
                      storageAccountType: p["storageAccountType"],
                    })),
                licenseType: p.virtualMachineConfiguration?.["licenseType"],
                containerConfiguration: !p.virtualMachineConfiguration
                  ?.containerConfiguration
                  ? undefined
                  : {
                      type: p.virtualMachineConfiguration
                        ?.containerConfiguration?.["type"],
                      containerImageNames:
                        p.virtualMachineConfiguration?.containerConfiguration?.[
                          "containerImageNames"
                        ],
                      containerRegistries: !p.virtualMachineConfiguration
                        ?.containerConfiguration?.["containerRegistries"]
                        ? p.virtualMachineConfiguration
                            ?.containerConfiguration?.["containerRegistries"]
                        : p.virtualMachineConfiguration?.containerConfiguration?.[
                            "containerRegistries"
                          ].map((p) => ({
                            username: p["username"],
                            password: p["password"],
                            registryServer: p["registryServer"],
                            identityReference: !p.identityReference
                              ? undefined
                              : {
                                  resourceId:
                                    p.identityReference?.["resourceId"],
                                },
                          })),
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
                extensions: !p.virtualMachineConfiguration?.["extensions"]
                  ? p.virtualMachineConfiguration?.["extensions"]
                  : p.virtualMachineConfiguration?.["extensions"].map((p) => ({
                      name: p["name"],
                      publisher: p["publisher"],
                      type: p["type"],
                      typeHandlerVersion: p["typeHandlerVersion"],
                      autoUpgradeMinorVersion: p["autoUpgradeMinorVersion"],
                      enableAutomaticUpgrade: p["enableAutomaticUpgrade"],
                      settings: p["settings"],
                      protectedSettings: p["protectedSettings"],
                      provisionAfterExtensions: p["provisionAfterExtensions"],
                    })),
                osDisk: !p.virtualMachineConfiguration?.osDisk
                  ? undefined
                  : {
                      ephemeralOSDiskSettings: !p.virtualMachineConfiguration
                        ?.osDisk?.ephemeralOSDiskSettings
                        ? undefined
                        : {
                            placement:
                              p.virtualMachineConfiguration?.osDisk
                                ?.ephemeralOSDiskSettings?.["placement"],
                          },
                    },
              },
          resizeTimeout: p["resizeTimeout"],
          resizeErrors: !p["resizeErrors"]
            ? p["resizeErrors"]
            : p["resizeErrors"].map((p) => ({
                code: p["code"],
                message: p["message"],
                values: !p["values"]
                  ? p["values"]
                  : p["values"].map((p) => ({
                      name: p["name"],
                      value: p["value"],
                    })),
              })),
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
                      values: !p.autoScaleRun?.error?.["values"]
                        ? p.autoScaleRun?.error?.["values"]
                        : p.autoScaleRun?.error?.["values"].map((p) => ({
                            name: p["name"],
                            value: p["value"],
                          })),
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
                      inboundNATPools:
                        p.networkConfiguration?.endpointConfiguration?.[
                          "inboundNATPools"
                        ].map((p) => ({
                          name: p["name"],
                          protocol: p["protocol"],
                          backendPort: p["backendPort"],
                          frontendPortRangeStart: p["frontendPortRangeStart"],
                          frontendPortRangeEnd: p["frontendPortRangeEnd"],
                          networkSecurityGroupRules: !p[
                            "networkSecurityGroupRules"
                          ]
                            ? p["networkSecurityGroupRules"]
                            : p["networkSecurityGroupRules"].map((p) => ({
                                priority: p["priority"],
                                access: p["access"],
                                sourceAddressPrefix: p["sourceAddressPrefix"],
                                sourcePortRanges: p["sourcePortRanges"],
                              })),
                        })),
                    },
                publicIPAddressConfiguration: !p.networkConfiguration
                  ?.publicIPAddressConfiguration
                  ? undefined
                  : {
                      provision:
                        p.networkConfiguration?.publicIPAddressConfiguration?.[
                          "provision"
                        ],
                      ipAddressIds:
                        p.networkConfiguration?.publicIPAddressConfiguration?.[
                          "ipAddressIds"
                        ],
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
                        p.startTask?.containerSettings?.["containerRunOptions"],
                      imageName: p.startTask?.containerSettings?.["imageName"],
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
                            identityReference: !p.startTask?.containerSettings
                              ?.registry?.identityReference
                              ? undefined
                              : {
                                  resourceId:
                                    p.startTask?.containerSettings?.registry
                                      ?.identityReference?.["resourceId"],
                                },
                          },
                      workingDirectory:
                        p.startTask?.containerSettings?.["workingDirectory"],
                    },
                resourceFiles: !p.startTask?.["resourceFiles"]
                  ? p.startTask?.["resourceFiles"]
                  : p.startTask?.["resourceFiles"].map((p) => ({
                      autoStorageContainerName: p["autoStorageContainerName"],
                      storageContainerUrl: p["storageContainerUrl"],
                      httpUrl: p["httpUrl"],
                      blobPrefix: p["blobPrefix"],
                      filePath: p["filePath"],
                      fileMode: p["fileMode"],
                      identityReference: !p.identityReference
                        ? undefined
                        : { resourceId: p.identityReference?.["resourceId"] },
                    })),
                environmentSettings: !p.startTask?.["environmentSettings"]
                  ? p.startTask?.["environmentSettings"]
                  : p.startTask?.["environmentSettings"].map((p) => ({
                      name: p["name"],
                      value: p["value"],
                    })),
                userIdentity: !p.startTask?.userIdentity
                  ? undefined
                  : {
                      username: p.startTask?.userIdentity?.["username"],
                      autoUser: !p.startTask?.userIdentity?.autoUser
                        ? undefined
                        : {
                            scope:
                              p.startTask?.userIdentity?.autoUser?.["scope"],
                            elevationLevel:
                              p.startTask?.userIdentity?.autoUser?.[
                                "elevationLevel"
                              ],
                          },
                    },
                maxTaskRetryCount: p.startTask?.["maxTaskRetryCount"],
                waitForSuccess: p.startTask?.["waitForSuccess"],
              },
          certificateReferences: !p["certificateReferences"]
            ? p["certificateReferences"]
            : p["certificateReferences"].map((p) => ({
                thumbprint: p["thumbprint"],
                thumbprintAlgorithm: p["thumbprintAlgorithm"],
                storeLocation: p["storeLocation"],
                storeName: p["storeName"],
                visibility: p["visibility"],
              })),
          applicationPackageReferences: !p["applicationPackageReferences"]
            ? p["applicationPackageReferences"]
            : p["applicationPackageReferences"].map((p) => ({
                applicationId: p["applicationId"],
                version: p["version"],
              })),
          applicationLicenses: p["applicationLicenses"],
          taskSlotsPerNode: p["taskSlotsPerNode"],
          taskSchedulingPolicy: !p.taskSchedulingPolicy
            ? undefined
            : { nodeFillType: p.taskSchedulingPolicy?.["nodeFillType"] },
          userAccounts: !p["userAccounts"]
            ? p["userAccounts"]
            : p["userAccounts"].map((p) => ({
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
                  : { loginMode: p.windowsUserConfiguration?.["loginMode"] },
              })),
          metadata: !p["metadata"]
            ? p["metadata"]
            : p["metadata"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
          stats: !p.stats
            ? undefined
            : {
                url: p.stats?.["url"],
                startTime: new Date(p.stats?.["startTime"]),
                lastUpdateTime: new Date(p.stats?.["lastUpdateTime"]),
                usageStats: !p.stats?.usageStats
                  ? undefined
                  : {
                      startTime: new Date(p.stats?.usageStats?.["startTime"]),
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
                      avgCPUPercentage:
                        p.stats?.resourceStats?.["avgCPUPercentage"],
                      avgMemoryGiB: p.stats?.resourceStats?.["avgMemoryGiB"],
                      peakMemoryGiB: p.stats?.resourceStats?.["peakMemoryGiB"],
                      avgDiskGiB: p.stats?.resourceStats?.["avgDiskGiB"],
                      peakDiskGiB: p.stats?.resourceStats?.["peakDiskGiB"],
                      diskReadIOps: p.stats?.resourceStats?.["diskReadIOps"],
                      diskWriteIOps: p.stats?.resourceStats?.["diskWriteIOps"],
                      diskReadGiB: p.stats?.resourceStats?.["diskReadGiB"],
                      diskWriteGiB: p.stats?.resourceStats?.["diskWriteGiB"],
                      networkReadGiB:
                        p.stats?.resourceStats?.["networkReadGiB"],
                      networkWriteGiB:
                        p.stats?.resourceStats?.["networkWriteGiB"],
                    },
              },
          mountConfiguration: !p["mountConfiguration"]
            ? p["mountConfiguration"]
            : p["mountConfiguration"].map((p) => ({
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
                          p.azureBlobFileSystemConfiguration?.[
                            "blobfuseOptions"
                          ],
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
                      accountName:
                        p.azureFileShareConfiguration?.["accountName"],
                      azureFileUrl:
                        p.azureFileShareConfiguration?.["azureFileUrl"],
                      accountKey: p.azureFileShareConfiguration?.["accountKey"],
                      relativeMountPath:
                        p.azureFileShareConfiguration?.["relativeMountPath"],
                      mountOptions:
                        p.azureFileShareConfiguration?.["mountOptions"],
                    },
              })),
          identity: !p.identity
            ? undefined
            : {
                type: p.identity?.["type"],
                userAssignedIdentities: !p.identity?.["userAssignedIdentities"]
                  ? p.identity?.["userAssignedIdentities"]
                  : p.identity?.["userAssignedIdentities"].map((p) => ({
                      resourceId: p["resourceId"],
                      clientId: p["clientId"],
                      principalId: p["principalId"],
                    })),
              },
          targetNodeCommunicationMode: p["targetNodeCommunicationMode"],
          currentNodeCommunicationMode: p["currentNodeCommunicationMode"],
        })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists all of the Pools in the specified Account. */
export function listPools(
  context: Client,
  options: PoolsListPoolsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchPool> {
  return buildPagedAsyncIterator(
    context,
    () => _listPoolsSend(context, options),
    _listPoolsDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _deletePoolSend(
  context: Client,
  poolId: string,
  options: PoolsDeletePoolOptions = { requestOptions: {} },
): StreamableMethod<DeletePool202Response | DeletePoolDefaultResponse> {
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
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _deletePoolDeserialize(
  result: DeletePool202Response | DeletePoolDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  options: PoolsDeletePoolOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _deletePoolSend(context, poolId, options);
  return _deletePoolDeserialize(result);
}

export function _poolExistsSend(
  context: Client,
  poolId: string,
  options: PoolsPoolExistsOptions = { requestOptions: {} },
): StreamableMethod<
  PoolExists200Response | PoolExists404Response | PoolExistsDefaultResponse
> {
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
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _poolExistsDeserialize(
  result:
    | PoolExists200Response
    | PoolExists404Response
    | PoolExistsDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Gets basic properties of a Pool. */
export async function poolExists(
  context: Client,
  poolId: string,
  options: PoolsPoolExistsOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _poolExistsSend(context, poolId, options);
  return _poolExistsDeserialize(result);
}

export function _getPoolSend(
  context: Client,
  poolId: string,
  options: PoolsGetPoolOptions = { requestOptions: {} },
): StreamableMethod<GetPool200Response | GetPoolDefaultResponse> {
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
        timeOut: options?.timeOut,
        $select: options?.$select,
        $expand: options?.$expand,
      },
    });
}

export async function _getPoolDeserialize(
  result: GetPool200Response | GetPoolDefaultResponse,
): Promise<BatchPool> {
  if (isUnexpected(result)) {
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
          nodeAgentSKUId:
            result.body.virtualMachineConfiguration?.["nodeAgentSKUId"],
          windowsConfiguration: !result.body.virtualMachineConfiguration
            ?.windowsConfiguration
            ? undefined
            : {
                enableAutomaticUpdates:
                  result.body.virtualMachineConfiguration
                    ?.windowsConfiguration?.["enableAutomaticUpdates"],
              },
          dataDisks: !result.body.virtualMachineConfiguration?.["dataDisks"]
            ? result.body.virtualMachineConfiguration?.["dataDisks"]
            : result.body.virtualMachineConfiguration?.["dataDisks"].map(
                (p) => ({
                  lun: p["lun"],
                  caching: p["caching"],
                  diskSizeGB: p["diskSizeGB"],
                  storageAccountType: p["storageAccountType"],
                }),
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
                containerRegistries: !result.body.virtualMachineConfiguration
                  ?.containerConfiguration?.["containerRegistries"]
                  ? result.body.virtualMachineConfiguration
                      ?.containerConfiguration?.["containerRegistries"]
                  : result.body.virtualMachineConfiguration?.containerConfiguration?.[
                      "containerRegistries"
                    ].map((p) => ({
                      username: p["username"],
                      password: p["password"],
                      registryServer: p["registryServer"],
                      identityReference: !p.identityReference
                        ? undefined
                        : { resourceId: p.identityReference?.["resourceId"] },
                    })),
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
          extensions: !result.body.virtualMachineConfiguration?.["extensions"]
            ? result.body.virtualMachineConfiguration?.["extensions"]
            : result.body.virtualMachineConfiguration?.["extensions"].map(
                (p) => ({
                  name: p["name"],
                  publisher: p["publisher"],
                  type: p["type"],
                  typeHandlerVersion: p["typeHandlerVersion"],
                  autoUpgradeMinorVersion: p["autoUpgradeMinorVersion"],
                  enableAutomaticUpgrade: p["enableAutomaticUpgrade"],
                  settings: p["settings"],
                  protectedSettings: p["protectedSettings"],
                  provisionAfterExtensions: p["provisionAfterExtensions"],
                }),
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
    resizeErrors: !result.body["resizeErrors"]
      ? result.body["resizeErrors"]
      : result.body["resizeErrors"].map((p) => ({
          code: p["code"],
          message: p["message"],
          values: !p["values"]
            ? p["values"]
            : p["values"].map((p) => ({ name: p["name"], value: p["value"] })),
        })),
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
                values: !result.body.autoScaleRun?.error?.["values"]
                  ? result.body.autoScaleRun?.error?.["values"]
                  : result.body.autoScaleRun?.error?.["values"].map((p) => ({
                      name: p["name"],
                      value: p["value"],
                    })),
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
                inboundNATPools:
                  result.body.networkConfiguration?.endpointConfiguration?.[
                    "inboundNATPools"
                  ].map((p) => ({
                    name: p["name"],
                    protocol: p["protocol"],
                    backendPort: p["backendPort"],
                    frontendPortRangeStart: p["frontendPortRangeStart"],
                    frontendPortRangeEnd: p["frontendPortRangeEnd"],
                    networkSecurityGroupRules: !p["networkSecurityGroupRules"]
                      ? p["networkSecurityGroupRules"]
                      : p["networkSecurityGroupRules"].map((p) => ({
                          priority: p["priority"],
                          access: p["access"],
                          sourceAddressPrefix: p["sourceAddressPrefix"],
                          sourcePortRanges: p["sourcePortRanges"],
                        })),
                  })),
              },
          publicIPAddressConfiguration: !result.body.networkConfiguration
            ?.publicIPAddressConfiguration
            ? undefined
            : {
                provision:
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
          resourceFiles: !result.body.startTask?.["resourceFiles"]
            ? result.body.startTask?.["resourceFiles"]
            : result.body.startTask?.["resourceFiles"].map((p) => ({
                autoStorageContainerName: p["autoStorageContainerName"],
                storageContainerUrl: p["storageContainerUrl"],
                httpUrl: p["httpUrl"],
                blobPrefix: p["blobPrefix"],
                filePath: p["filePath"],
                fileMode: p["fileMode"],
                identityReference: !p.identityReference
                  ? undefined
                  : { resourceId: p.identityReference?.["resourceId"] },
              })),
          environmentSettings: !result.body.startTask?.["environmentSettings"]
            ? result.body.startTask?.["environmentSettings"]
            : result.body.startTask?.["environmentSettings"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
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
    certificateReferences: !result.body["certificateReferences"]
      ? result.body["certificateReferences"]
      : result.body["certificateReferences"].map((p) => ({
          thumbprint: p["thumbprint"],
          thumbprintAlgorithm: p["thumbprintAlgorithm"],
          storeLocation: p["storeLocation"],
          storeName: p["storeName"],
          visibility: p["visibility"],
        })),
    applicationPackageReferences: !result.body["applicationPackageReferences"]
      ? result.body["applicationPackageReferences"]
      : result.body["applicationPackageReferences"].map((p) => ({
          applicationId: p["applicationId"],
          version: p["version"],
        })),
    applicationLicenses: result.body["applicationLicenses"],
    taskSlotsPerNode: result.body["taskSlotsPerNode"],
    taskSchedulingPolicy: !result.body.taskSchedulingPolicy
      ? undefined
      : { nodeFillType: result.body.taskSchedulingPolicy?.["nodeFillType"] },
    userAccounts: !result.body["userAccounts"]
      ? result.body["userAccounts"]
      : result.body["userAccounts"].map((p) => ({
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
        })),
    metadata: !result.body["metadata"]
      ? result.body["metadata"]
      : result.body["metadata"].map((p) => ({
          name: p["name"],
          value: p["value"],
        })),
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
                avgCPUPercentage:
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
    mountConfiguration: !result.body["mountConfiguration"]
      ? result.body["mountConfiguration"]
      : result.body["mountConfiguration"].map((p) => ({
          azureBlobFileSystemConfiguration: !p.azureBlobFileSystemConfiguration
            ? undefined
            : {
                accountName:
                  p.azureBlobFileSystemConfiguration?.["accountName"],
                containerName:
                  p.azureBlobFileSystemConfiguration?.["containerName"],
                accountKey: p.azureBlobFileSystemConfiguration?.["accountKey"],
                sasKey: p.azureBlobFileSystemConfiguration?.["sasKey"],
                blobfuseOptions:
                  p.azureBlobFileSystemConfiguration?.["blobfuseOptions"],
                relativeMountPath:
                  p.azureBlobFileSystemConfiguration?.["relativeMountPath"],
                identityReference: !p.azureBlobFileSystemConfiguration
                  ?.identityReference
                  ? undefined
                  : {
                      resourceId:
                        p.azureBlobFileSystemConfiguration?.identityReference?.[
                          "resourceId"
                        ],
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
                azureFileUrl: p.azureFileShareConfiguration?.["azureFileUrl"],
                accountKey: p.azureFileShareConfiguration?.["accountKey"],
                relativeMountPath:
                  p.azureFileShareConfiguration?.["relativeMountPath"],
                mountOptions: p.azureFileShareConfiguration?.["mountOptions"],
              },
        })),
    identity: !result.body.identity
      ? undefined
      : {
          type: result.body.identity?.["type"],
          userAssignedIdentities: !result.body.identity?.[
            "userAssignedIdentities"
          ]
            ? result.body.identity?.["userAssignedIdentities"]
            : result.body.identity?.["userAssignedIdentities"].map((p) => ({
                resourceId: p["resourceId"],
                clientId: p["clientId"],
                principalId: p["principalId"],
              })),
        },
    targetNodeCommunicationMode: result.body["targetNodeCommunicationMode"],
    currentNodeCommunicationMode: result.body["currentNodeCommunicationMode"],
  };
}

/** Gets information about the specified Pool. */
export async function getPool(
  context: Client,
  poolId: string,
  options: PoolsGetPoolOptions = { requestOptions: {} },
): Promise<BatchPool> {
  const result = await _getPoolSend(context, poolId, options);
  return _getPoolDeserialize(result);
}

export function _updatePoolSend(
  context: Client,
  poolId: string,
  body: BatchPoolUpdateOptions,
  options: PoolsUpdatePoolOptions = { requestOptions: {} },
): StreamableMethod<UpdatePool200Response | UpdatePoolDefaultResponse> {
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
      queryParameters: { timeOut: options?.timeOut },
      body: {
        startTask: !body.startTask
          ? undefined
          : {
              commandLine: body.startTask?.["commandLine"],
              containerSettings: !body.startTask?.containerSettings
                ? undefined
                : {
                    containerRunOptions:
                      body.startTask?.containerSettings?.[
                        "containerRunOptions"
                      ],
                    imageName: body.startTask?.containerSettings?.["imageName"],
                    registry: !body.startTask?.containerSettings?.registry
                      ? undefined
                      : {
                          username:
                            body.startTask?.containerSettings?.registry?.[
                              "username"
                            ],
                          password:
                            body.startTask?.containerSettings?.registry?.[
                              "password"
                            ],
                          registryServer:
                            body.startTask?.containerSettings?.registry?.[
                              "registryServer"
                            ],
                          identityReference: !body.startTask?.containerSettings
                            ?.registry?.identityReference
                            ? undefined
                            : {
                                resourceId:
                                  body.startTask?.containerSettings?.registry
                                    ?.identityReference?.["resourceId"],
                              },
                        },
                    workingDirectory:
                      body.startTask?.containerSettings?.["workingDirectory"],
                  },
              resourceFiles: !body.startTask?.["resourceFiles"]
                ? body.startTask?.["resourceFiles"]
                : body.startTask?.["resourceFiles"].map((p) => ({
                    autoStorageContainerName: p["autoStorageContainerName"],
                    storageContainerUrl: p["storageContainerUrl"],
                    httpUrl: p["httpUrl"],
                    blobPrefix: p["blobPrefix"],
                    filePath: p["filePath"],
                    fileMode: p["fileMode"],
                    identityReference: !p.identityReference
                      ? undefined
                      : { resourceId: p.identityReference?.["resourceId"] },
                  })),
              environmentSettings: !body.startTask?.["environmentSettings"]
                ? body.startTask?.["environmentSettings"]
                : body.startTask?.["environmentSettings"].map((p) => ({
                    name: p["name"],
                    value: p["value"],
                  })),
              userIdentity: !body.startTask?.userIdentity
                ? undefined
                : {
                    username: body.startTask?.userIdentity?.["username"],
                    autoUser: !body.startTask?.userIdentity?.autoUser
                      ? undefined
                      : {
                          scope:
                            body.startTask?.userIdentity?.autoUser?.["scope"],
                          elevationLevel:
                            body.startTask?.userIdentity?.autoUser?.[
                              "elevationLevel"
                            ],
                        },
                  },
              maxTaskRetryCount: body.startTask?.["maxTaskRetryCount"],
              waitForSuccess: body.startTask?.["waitForSuccess"],
            },
        certificateReferences: !body["certificateReferences"]
          ? body["certificateReferences"]
          : body["certificateReferences"].map((p) => ({
              thumbprint: p["thumbprint"],
              thumbprintAlgorithm: p["thumbprintAlgorithm"],
              storeLocation: p["storeLocation"],
              storeName: p["storeName"],
              visibility: p["visibility"],
            })),
        applicationPackageReferences: !body["applicationPackageReferences"]
          ? body["applicationPackageReferences"]
          : body["applicationPackageReferences"].map((p) => ({
              applicationId: p["applicationId"],
              version: p["version"],
            })),
        metadata: !body["metadata"]
          ? body["metadata"]
          : body["metadata"].map((p) => ({
              name: p["name"],
              value: p["value"],
            })),
        targetNodeCommunicationMode: body["targetNodeCommunicationMode"],
      },
    });
}

export async function _updatePoolDeserialize(
  result: UpdatePool200Response | UpdatePoolDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  options: PoolsUpdatePoolOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _updatePoolSend(context, poolId, body, options);
  return _updatePoolDeserialize(result);
}

export function _disablePoolAutoScaleSend(
  context: Client,
  poolId: string,
  options: PoolsDisablePoolAutoScaleOptions = { requestOptions: {} },
): StreamableMethod<
  DisablePoolAutoScale200Response | DisablePoolAutoScaleDefaultResponse
> {
  return context
    .path("/pools/{poolId}/disableautoscale", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _disablePoolAutoScaleDeserialize(
  result: DisablePoolAutoScale200Response | DisablePoolAutoScaleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Disables automatic scaling for a Pool. */
export async function disablePoolAutoScale(
  context: Client,
  poolId: string,
  options: PoolsDisablePoolAutoScaleOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _disablePoolAutoScaleSend(context, poolId, options);
  return _disablePoolAutoScaleDeserialize(result);
}

export function _enablePoolAutoScaleSend(
  context: Client,
  poolId: string,
  body: BatchPoolEnableAutoScaleOptions,
  options: PoolsEnablePoolAutoScaleOptions = { requestOptions: {} },
): StreamableMethod<
  EnablePoolAutoScale200Response | EnablePoolAutoScaleDefaultResponse
> {
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
      queryParameters: { timeOut: options?.timeOut },
      body: {
        autoScaleFormula: body["autoScaleFormula"],
        autoScaleEvaluationInterval: body["autoScaleEvaluationInterval"],
      },
    });
}

export async function _enablePoolAutoScaleDeserialize(
  result: EnablePoolAutoScale200Response | EnablePoolAutoScaleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  options: PoolsEnablePoolAutoScaleOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _enablePoolAutoScaleSend(context, poolId, body, options);
  return _enablePoolAutoScaleDeserialize(result);
}

export function _evaluatePoolAutoScaleSend(
  context: Client,
  poolId: string,
  body: BatchPoolEvaluateAutoScaleOptions,
  options: PoolsEvaluatePoolAutoScaleOptions = { requestOptions: {} },
): StreamableMethod<
  EvaluatePoolAutoScale200Response | EvaluatePoolAutoScaleDefaultResponse
> {
  return context
    .path("/pools/{poolId}/evaluateautoscale", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: { timeOut: options?.timeOut },
      body: { autoScaleFormula: body["autoScaleFormula"] },
    });
}

export async function _evaluatePoolAutoScaleDeserialize(
  result:
    | EvaluatePoolAutoScale200Response
    | EvaluatePoolAutoScaleDefaultResponse,
): Promise<AutoScaleRun> {
  if (isUnexpected(result)) {
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
          values: !result.body.error?.["values"]
            ? result.body.error?.["values"]
            : result.body.error?.["values"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
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
  options: PoolsEvaluatePoolAutoScaleOptions = { requestOptions: {} },
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
  options: PoolsResizePoolOptions = { requestOptions: {} },
): StreamableMethod<ResizePool202Response | ResizePoolDefaultResponse> {
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
      queryParameters: { timeOut: options?.timeOut },
      body: {
        targetDedicatedNodes: body["targetDedicatedNodes"],
        targetLowPriorityNodes: body["targetLowPriorityNodes"],
        resizeTimeout: body["resizeTimeout"],
        nodeDeallocationOption: body["nodeDeallocationOption"],
      },
    });
}

export async function _resizePoolDeserialize(
  result: ResizePool202Response | ResizePoolDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  options: PoolsResizePoolOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _resizePoolSend(context, poolId, body, options);
  return _resizePoolDeserialize(result);
}

export function _stopPoolResizeSend(
  context: Client,
  poolId: string,
  options: PoolsStopPoolResizeOptions = { requestOptions: {} },
): StreamableMethod<StopPoolResize202Response | StopPoolResizeDefaultResponse> {
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
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _stopPoolResizeDeserialize(
  result: StopPoolResize202Response | StopPoolResizeDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  options: PoolsStopPoolResizeOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _stopPoolResizeSend(context, poolId, options);
  return _stopPoolResizeDeserialize(result);
}

export function _replacePoolPropertiesSend(
  context: Client,
  poolId: string,
  body: BatchPoolReplaceOptions,
  options: PoolsReplacePoolPropertiesOptions = { requestOptions: {} },
): StreamableMethod<
  ReplacePoolProperties204Response | ReplacePoolPropertiesDefaultResponse
> {
  return context
    .path("/pools/{poolId}/updateproperties", poolId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: { timeOut: options?.timeOut },
      body: {
        startTask: !body.startTask
          ? undefined
          : {
              commandLine: body.startTask?.["commandLine"],
              containerSettings: !body.startTask?.containerSettings
                ? undefined
                : {
                    containerRunOptions:
                      body.startTask?.containerSettings?.[
                        "containerRunOptions"
                      ],
                    imageName: body.startTask?.containerSettings?.["imageName"],
                    registry: !body.startTask?.containerSettings?.registry
                      ? undefined
                      : {
                          username:
                            body.startTask?.containerSettings?.registry?.[
                              "username"
                            ],
                          password:
                            body.startTask?.containerSettings?.registry?.[
                              "password"
                            ],
                          registryServer:
                            body.startTask?.containerSettings?.registry?.[
                              "registryServer"
                            ],
                          identityReference: !body.startTask?.containerSettings
                            ?.registry?.identityReference
                            ? undefined
                            : {
                                resourceId:
                                  body.startTask?.containerSettings?.registry
                                    ?.identityReference?.["resourceId"],
                              },
                        },
                    workingDirectory:
                      body.startTask?.containerSettings?.["workingDirectory"],
                  },
              resourceFiles: !body.startTask?.["resourceFiles"]
                ? body.startTask?.["resourceFiles"]
                : body.startTask?.["resourceFiles"].map((p) => ({
                    autoStorageContainerName: p["autoStorageContainerName"],
                    storageContainerUrl: p["storageContainerUrl"],
                    httpUrl: p["httpUrl"],
                    blobPrefix: p["blobPrefix"],
                    filePath: p["filePath"],
                    fileMode: p["fileMode"],
                    identityReference: !p.identityReference
                      ? undefined
                      : { resourceId: p.identityReference?.["resourceId"] },
                  })),
              environmentSettings: !body.startTask?.["environmentSettings"]
                ? body.startTask?.["environmentSettings"]
                : body.startTask?.["environmentSettings"].map((p) => ({
                    name: p["name"],
                    value: p["value"],
                  })),
              userIdentity: !body.startTask?.userIdentity
                ? undefined
                : {
                    username: body.startTask?.userIdentity?.["username"],
                    autoUser: !body.startTask?.userIdentity?.autoUser
                      ? undefined
                      : {
                          scope:
                            body.startTask?.userIdentity?.autoUser?.["scope"],
                          elevationLevel:
                            body.startTask?.userIdentity?.autoUser?.[
                              "elevationLevel"
                            ],
                        },
                  },
              maxTaskRetryCount: body.startTask?.["maxTaskRetryCount"],
              waitForSuccess: body.startTask?.["waitForSuccess"],
            },
        certificateReferences: body["certificateReferences"].map((p) => ({
          thumbprint: p["thumbprint"],
          thumbprintAlgorithm: p["thumbprintAlgorithm"],
          storeLocation: p["storeLocation"],
          storeName: p["storeName"],
          visibility: p["visibility"],
        })),
        applicationPackageReferences: body["applicationPackageReferences"].map(
          (p) => ({ applicationId: p["applicationId"], version: p["version"] }),
        ),
        metadata: body["metadata"].map((p) => ({
          name: p["name"],
          value: p["value"],
        })),
        targetNodeCommunicationMode: body["targetNodeCommunicationMode"],
      },
    });
}

export async function _replacePoolPropertiesDeserialize(
  result:
    | ReplacePoolProperties204Response
    | ReplacePoolPropertiesDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  options: PoolsReplacePoolPropertiesOptions = { requestOptions: {} },
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
  options: PoolsRemoveNodesOptions = { requestOptions: {} },
): StreamableMethod<RemoveNodes202Response | RemoveNodesDefaultResponse> {
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
      queryParameters: { timeOut: options?.timeOut },
      body: {
        nodeList: body["nodeList"],
        resizeTimeout: body["resizeTimeout"],
        nodeDeallocationOption: body["nodeDeallocationOption"],
      },
    });
}

export async function _removeNodesDeserialize(
  result: RemoveNodes202Response | RemoveNodesDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  options: PoolsRemoveNodesOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _removeNodesSend(context, poolId, body, options);
  return _removeNodesDeserialize(result);
}
