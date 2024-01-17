// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  NodeFileListResult,
  NodeFile,
  BatchNodeUserCreateOptions,
  BatchNodeUserUpdateOptions,
  BatchNode,
  NodeRebootOptions,
  NodeReimageOptions,
  NodeDisableSchedulingOptions,
  BatchNodeRemoteLoginSettingsResult,
  UploadBatchServiceLogsOptions,
  UploadBatchServiceLogsResult,
  BatchNodeListResult,
  NodeVMExtension,
  NodeVMExtensionList,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  BatchContext as Client,
  CreateNodeUser201Response,
  CreateNodeUserDefaultResponse,
  DeleteNodeFile200Response,
  DeleteNodeFileDefaultResponse,
  DeleteNodeUser200Response,
  DeleteNodeUserDefaultResponse,
  DisableNodeScheduling200Response,
  DisableNodeSchedulingDefaultResponse,
  EnableNodeScheduling200Response,
  EnableNodeSchedulingDefaultResponse,
  GetNode200Response,
  GetNodeDefaultResponse,
  GetNodeExtension200Response,
  GetNodeExtensionDefaultResponse,
  GetNodeFile200Response,
  GetNodeFileDefaultResponse,
  GetNodeFileProperties200Response,
  GetNodeFilePropertiesDefaultResponse,
  GetNodeRemoteDesktopFile200Response,
  GetNodeRemoteDesktopFileDefaultResponse,
  GetNodeRemoteLoginSettings200Response,
  GetNodeRemoteLoginSettingsDefaultResponse,
  ListNodeExtensions200Response,
  ListNodeExtensionsDefaultResponse,
  ListNodeFiles200Response,
  ListNodeFilesDefaultResponse,
  ListNodes200Response,
  ListNodesDefaultResponse,
  RebootNode202Response,
  RebootNodeDefaultResponse,
  ReimageNode202Response,
  ReimageNodeDefaultResponse,
  ReplaceNodeUser200Response,
  ReplaceNodeUserDefaultResponse,
  UploadNodeLogs200Response,
  UploadNodeLogsDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array } from "@azure/core-util";
import {
  NodesCreateNodeUserOptions,
  NodesDeleteNodeUserOptions,
  NodesReplaceNodeUserOptions,
  NodesGetNodeOptions,
  NodesRebootNodeOptions,
  NodesReimageNodeOptions,
  NodesDisableNodeSchedulingOptions,
  NodesEnableNodeSchedulingOptions,
  NodesGetNodeRemoteLoginSettingsOptions,
  NodesGetNodeRemoteDesktopFileOptions,
  NodesUploadNodeLogsOptions,
  NodesListNodesOptions,
  NodesGetNodeExtensionOptions,
  NodesListNodeExtensionsOptions,
  NodesDeleteNodeFileOptions,
  NodesGetNodeFileOptions,
  NodesGetNodeFilePropertiesOptions,
  NodesListNodeFilesOptions,
} from "../../models/options.js";

export function _createNodeUserSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body: BatchNodeUserCreateOptions,
  options: NodesCreateNodeUserOptions = { requestOptions: {} },
): StreamableMethod<CreateNodeUser201Response | CreateNodeUserDefaultResponse> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/users", poolId, nodeId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: { timeOut: options?.timeOut },
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
  result: CreateNodeUser201Response | CreateNodeUserDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  options: NodesCreateNodeUserOptions = { requestOptions: {} },
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
  options: NodesDeleteNodeUserOptions = { requestOptions: {} },
): StreamableMethod<DeleteNodeUser200Response | DeleteNodeUserDefaultResponse> {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/users/{userName}",
      poolId,
      nodeId,
      userName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _deleteNodeUserDeserialize(
  result: DeleteNodeUser200Response | DeleteNodeUserDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  options: NodesDeleteNodeUserOptions = { requestOptions: {} },
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
  options: NodesReplaceNodeUserOptions = { requestOptions: {} },
): StreamableMethod<
  ReplaceNodeUser200Response | ReplaceNodeUserDefaultResponse
> {
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
      queryParameters: { timeOut: options?.timeOut },
      body: {
        password: body["password"],
        expiryTime: body["expiryTime"]?.toISOString(),
        sshPublicKey: body["sshPublicKey"],
      },
    });
}

export async function _replaceNodeUserDeserialize(
  result: ReplaceNodeUser200Response | ReplaceNodeUserDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  options: NodesReplaceNodeUserOptions = { requestOptions: {} },
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
  options: NodesGetNodeOptions = { requestOptions: {} },
): StreamableMethod<GetNode200Response | GetNodeDefaultResponse> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}", poolId, nodeId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { timeOut: options?.timeOut, $select: options?.$select },
    });
}

export async function _getNodeDeserialize(
  result: GetNode200Response | GetNodeDefaultResponse,
): Promise<BatchNode> {
  if (isUnexpected(result)) {
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
    recentTasks: !result.body["recentTasks"]
      ? result.body["recentTasks"]
      : result.body["recentTasks"].map((p) => ({
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
                      details: !p.executionInfo?.failureInfo?.["details"]
                        ? p.executionInfo?.failureInfo?.["details"]
                        : p.executionInfo?.failureInfo?.["details"].map(
                            (p) => ({ name: p["name"], value: p["value"] }),
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
        })),
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
                details: !result.body.startTaskInfo?.failureInfo?.["details"]
                  ? result.body.startTaskInfo?.failureInfo?.["details"]
                  : result.body.startTaskInfo?.failureInfo?.["details"].map(
                      (p) => ({ name: p["name"], value: p["value"] }),
                    ),
              },
          retryCount: result.body.startTaskInfo?.["retryCount"],
          lastRetryTime:
            result.body.startTaskInfo?.["lastRetryTime"] !== undefined
              ? new Date(result.body.startTaskInfo?.["lastRetryTime"])
              : undefined,
          result: result.body.startTaskInfo?.["result"],
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
    errors: !result.body["errors"]
      ? result.body["errors"]
      : result.body["errors"].map((p) => ({
          code: p["code"],
          message: p["message"],
          errorDetails: !p["errorDetails"]
            ? p["errorDetails"]
            : p["errorDetails"].map((p) => ({
                name: p["name"],
                value: p["value"],
              })),
        })),
    isDedicated: result.body["isDedicated"],
    endpointConfiguration: !result.body.endpointConfiguration
      ? undefined
      : {
          inboundEndpoints: result.body.endpointConfiguration?.[
            "inboundEndpoints"
          ].map((p) => ({
            name: p["name"],
            protocol: p["protocol"],
            publicIPAddress: p["publicIPAddress"],
            publicFQDN: p["publicFQDN"],
            frontendPort: p["frontendPort"],
            backendPort: p["backendPort"],
          })),
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
  options: NodesGetNodeOptions = { requestOptions: {} },
): Promise<BatchNode> {
  const result = await _getNodeSend(context, poolId, nodeId, options);
  return _getNodeDeserialize(result);
}

export function _rebootNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body: NodeRebootOptions,
  options: NodesRebootNodeOptions = { requestOptions: {} },
): StreamableMethod<RebootNode202Response | RebootNodeDefaultResponse> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/reboot", poolId, nodeId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: { timeOut: options?.timeOut },
      body: { nodeRebootOption: body["nodeRebootOption"] },
    });
}

export async function _rebootNodeDeserialize(
  result: RebootNode202Response | RebootNodeDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** You can restart a Compute Node only if it is in an idle or running state. */
export async function rebootNode(
  context: Client,
  poolId: string,
  nodeId: string,
  body: NodeRebootOptions,
  options: NodesRebootNodeOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _rebootNodeSend(context, poolId, nodeId, body, options);
  return _rebootNodeDeserialize(result);
}

export function _reimageNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body: NodeReimageOptions,
  options: NodesReimageNodeOptions = { requestOptions: {} },
): StreamableMethod<ReimageNode202Response | ReimageNodeDefaultResponse> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/reimage", poolId, nodeId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: { timeOut: options?.timeOut },
      body: { nodeReimageOption: body["nodeReimageOption"] },
    });
}

export async function _reimageNodeDeserialize(
  result: ReimageNode202Response | ReimageNodeDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  body: NodeReimageOptions,
  options: NodesReimageNodeOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _reimageNodeSend(context, poolId, nodeId, body, options);
  return _reimageNodeDeserialize(result);
}

export function _disableNodeSchedulingSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body: NodeDisableSchedulingOptions,
  options: NodesDisableNodeSchedulingOptions = { requestOptions: {} },
): StreamableMethod<
  DisableNodeScheduling200Response | DisableNodeSchedulingDefaultResponse
> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/disablescheduling", poolId, nodeId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType:
        (options.contentType as any) ??
        "application/json; odata=minimalmetadata",
      queryParameters: { timeOut: options?.timeOut },
      body: {
        nodeDisableSchedulingOption: body["nodeDisableSchedulingOption"],
      },
    });
}

export async function _disableNodeSchedulingDeserialize(
  result:
    | DisableNodeScheduling200Response
    | DisableNodeSchedulingDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  body: NodeDisableSchedulingOptions,
  options: NodesDisableNodeSchedulingOptions = { requestOptions: {} },
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
  options: NodesEnableNodeSchedulingOptions = { requestOptions: {} },
): StreamableMethod<
  EnableNodeScheduling200Response | EnableNodeSchedulingDefaultResponse
> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/enablescheduling", poolId, nodeId)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _enableNodeSchedulingDeserialize(
  result: EnableNodeScheduling200Response | EnableNodeSchedulingDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  options: NodesEnableNodeSchedulingOptions = { requestOptions: {} },
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
  options: NodesGetNodeRemoteLoginSettingsOptions = { requestOptions: {} },
): StreamableMethod<
  | GetNodeRemoteLoginSettings200Response
  | GetNodeRemoteLoginSettingsDefaultResponse
> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/remoteloginsettings", poolId, nodeId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _getNodeRemoteLoginSettingsDeserialize(
  result:
    | GetNodeRemoteLoginSettings200Response
    | GetNodeRemoteLoginSettingsDefaultResponse,
): Promise<BatchNodeRemoteLoginSettingsResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    remoteLoginIPAddress: result.body["remoteLoginIPAddress"],
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
  options: NodesGetNodeRemoteLoginSettingsOptions = { requestOptions: {} },
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
  options: NodesGetNodeRemoteDesktopFileOptions = { requestOptions: {} },
): StreamableMethod<
  GetNodeRemoteDesktopFile200Response | GetNodeRemoteDesktopFileDefaultResponse
> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/rdp", poolId, nodeId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _getNodeRemoteDesktopFileDeserialize(
  result:
    | GetNodeRemoteDesktopFile200Response
    | GetNodeRemoteDesktopFileDefaultResponse,
): Promise<Uint8Array> {
  if (isUnexpected(result)) {
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
  options: NodesGetNodeRemoteDesktopFileOptions = { requestOptions: {} },
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
  options: NodesUploadNodeLogsOptions = { requestOptions: {} },
): StreamableMethod<UploadNodeLogs200Response | UploadNodeLogsDefaultResponse> {
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
      queryParameters: { timeOut: options?.timeOut },
      body: {
        containerUrl: body["containerUrl"],
        startTime: body["startTime"].toISOString(),
        endTime: body["endTime"]?.toISOString(),
        identityReference: !body.identityReference
          ? undefined
          : { resourceId: body.identityReference?.["resourceId"] },
      },
    });
}

export async function _uploadNodeLogsDeserialize(
  result: UploadNodeLogs200Response | UploadNodeLogsDefaultResponse,
): Promise<UploadBatchServiceLogsResult> {
  if (isUnexpected(result)) {
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
  options: NodesUploadNodeLogsOptions = { requestOptions: {} },
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
  options: NodesListNodesOptions = { requestOptions: {} },
): StreamableMethod<ListNodes200Response | ListNodesDefaultResponse> {
  return context
    .path("/pools/{poolId}/nodes", poolId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxresults: options?.maxresults,
        timeOut: options?.timeOut,
        $filter: options?.$filter,
        $select: options?.$select,
      },
    });
}

export async function _listNodesDeserialize(
  result: ListNodes200Response | ListNodesDefaultResponse,
): Promise<BatchNodeListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
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
          recentTasks: !p["recentTasks"]
            ? p["recentTasks"]
            : p["recentTasks"].map((p) => ({
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
                            category:
                              p.executionInfo?.failureInfo?.["category"],
                            code: p.executionInfo?.failureInfo?.["code"],
                            message: p.executionInfo?.failureInfo?.["message"],
                            details: !p.executionInfo?.failureInfo?.["details"]
                              ? p.executionInfo?.failureInfo?.["details"]
                              : p.executionInfo?.failureInfo?.["details"].map(
                                  (p) => ({
                                    name: p["name"],
                                    value: p["value"],
                                  }),
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
              })),
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
                      details: !p.startTaskInfo?.failureInfo?.["details"]
                        ? p.startTaskInfo?.failureInfo?.["details"]
                        : p.startTaskInfo?.failureInfo?.["details"].map(
                            (p) => ({ name: p["name"], value: p["value"] }),
                          ),
                    },
                retryCount: p.startTaskInfo?.["retryCount"],
                lastRetryTime:
                  p.startTaskInfo?.["lastRetryTime"] !== undefined
                    ? new Date(p.startTaskInfo?.["lastRetryTime"])
                    : undefined,
                result: p.startTaskInfo?.["result"],
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
          errors: !p["errors"]
            ? p["errors"]
            : p["errors"].map((p) => ({
                code: p["code"],
                message: p["message"],
                errorDetails: !p["errorDetails"]
                  ? p["errorDetails"]
                  : p["errorDetails"].map((p) => ({
                      name: p["name"],
                      value: p["value"],
                    })),
              })),
          isDedicated: p["isDedicated"],
          endpointConfiguration: !p.endpointConfiguration
            ? undefined
            : {
                inboundEndpoints: p.endpointConfiguration?.[
                  "inboundEndpoints"
                ].map((p) => ({
                  name: p["name"],
                  protocol: p["protocol"],
                  publicIPAddress: p["publicIPAddress"],
                  publicFQDN: p["publicFQDN"],
                  frontendPort: p["frontendPort"],
                  backendPort: p["backendPort"],
                })),
              },
          nodeAgentInfo: !p.nodeAgentInfo
            ? undefined
            : {
                version: p.nodeAgentInfo?.["version"],
                lastUpdateTime: new Date(p.nodeAgentInfo?.["lastUpdateTime"]),
              },
          virtualMachineInfo: !p.virtualMachineInfo
            ? undefined
            : {
                imageReference: !p.virtualMachineInfo?.imageReference
                  ? undefined
                  : {
                      publisher:
                        p.virtualMachineInfo?.imageReference?.["publisher"],
                      offer: p.virtualMachineInfo?.imageReference?.["offer"],
                      sku: p.virtualMachineInfo?.imageReference?.["sku"],
                      version:
                        p.virtualMachineInfo?.imageReference?.["version"],
                      virtualMachineImageId:
                        p.virtualMachineInfo?.imageReference?.[
                          "virtualMachineImageId"
                        ],
                      exactVersion:
                        p.virtualMachineInfo?.imageReference?.["exactVersion"],
                    },
              },
        })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists the Compute Nodes in the specified Pool. */
export function listNodes(
  context: Client,
  poolId: string,
  options: NodesListNodesOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchNode> {
  return buildPagedAsyncIterator(
    context,
    () => _listNodesSend(context, poolId, options),
    _listNodesDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _getNodeExtensionSend(
  context: Client,
  poolId: string,
  nodeId: string,
  extensionName: string,
  options: NodesGetNodeExtensionOptions = { requestOptions: {} },
): StreamableMethod<
  GetNodeExtension200Response | GetNodeExtensionDefaultResponse
> {
  return context
    .path(
      "/pools/{poolId}/nodes/{nodeId}/extensions/{extensionName}",
      poolId,
      nodeId,
      extensionName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { timeOut: options?.timeOut, $select: options?.$select },
    });
}

export async function _getNodeExtensionDeserialize(
  result: GetNodeExtension200Response | GetNodeExtensionDefaultResponse,
): Promise<NodeVMExtension> {
  if (isUnexpected(result)) {
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
          statuses: !result.body.instanceView?.["statuses"]
            ? result.body.instanceView?.["statuses"]
            : result.body.instanceView?.["statuses"].map((p) => ({
                code: p["code"],
                displayStatus: p["displayStatus"],
                level: p["level"],
                message: p["message"],
                time: p["time"],
              })),
          subStatuses: !result.body.instanceView?.["subStatuses"]
            ? result.body.instanceView?.["subStatuses"]
            : result.body.instanceView?.["subStatuses"].map((p) => ({
                code: p["code"],
                displayStatus: p["displayStatus"],
                level: p["level"],
                message: p["message"],
                time: p["time"],
              })),
        },
  };
}

/** Gets information about the specified Compute Node Extension. */
export async function getNodeExtension(
  context: Client,
  poolId: string,
  nodeId: string,
  extensionName: string,
  options: NodesGetNodeExtensionOptions = { requestOptions: {} },
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
  options: NodesListNodeExtensionsOptions = { requestOptions: {} },
): StreamableMethod<
  ListNodeExtensions200Response | ListNodeExtensionsDefaultResponse
> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/extensions", poolId, nodeId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxresults: options?.maxresults,
        timeOut: options?.timeOut,
        $select: options?.$select,
      },
    });
}

export async function _listNodeExtensionsDeserialize(
  result: ListNodeExtensions200Response | ListNodeExtensionsDefaultResponse,
): Promise<NodeVMExtensionList> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
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
                statuses: !p.instanceView?.["statuses"]
                  ? p.instanceView?.["statuses"]
                  : p.instanceView?.["statuses"].map((p) => ({
                      code: p["code"],
                      displayStatus: p["displayStatus"],
                      level: p["level"],
                      message: p["message"],
                      time: p["time"],
                    })),
                subStatuses: !p.instanceView?.["subStatuses"]
                  ? p.instanceView?.["subStatuses"]
                  : p.instanceView?.["subStatuses"].map((p) => ({
                      code: p["code"],
                      displayStatus: p["displayStatus"],
                      level: p["level"],
                      message: p["message"],
                      time: p["time"],
                    })),
              },
        })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists the Compute Nodes Extensions in the specified Pool. */
export function listNodeExtensions(
  context: Client,
  poolId: string,
  nodeId: string,
  options: NodesListNodeExtensionsOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<NodeVMExtension> {
  return buildPagedAsyncIterator(
    context,
    () => _listNodeExtensionsSend(context, poolId, nodeId, options),
    _listNodeExtensionsDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _deleteNodeFileSend(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: NodesDeleteNodeFileOptions = { requestOptions: {} },
): StreamableMethod<DeleteNodeFile200Response | DeleteNodeFileDefaultResponse> {
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
        timeOut: options?.timeOut,
        recursive: options?.recursive,
      },
    });
}

export async function _deleteNodeFileDeserialize(
  result: DeleteNodeFile200Response | DeleteNodeFileDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  options: NodesDeleteNodeFileOptions = { requestOptions: {} },
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
  options: NodesGetNodeFileOptions = { requestOptions: {} },
): StreamableMethod<GetNodeFile200Response | GetNodeFileDefaultResponse> {
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
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _getNodeFileDeserialize(
  result: GetNodeFile200Response | GetNodeFileDefaultResponse,
): Promise<Uint8Array> {
  if (isUnexpected(result)) {
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
  options: NodesGetNodeFileOptions = { requestOptions: {} },
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
  options: NodesGetNodeFilePropertiesOptions = { requestOptions: {} },
): StreamableMethod<
  GetNodeFileProperties200Response | GetNodeFilePropertiesDefaultResponse
> {
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
      queryParameters: { timeOut: options?.timeOut },
    });
}

export async function _getNodeFilePropertiesDeserialize(
  result:
    | GetNodeFileProperties200Response
    | GetNodeFilePropertiesDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  options: NodesGetNodeFilePropertiesOptions = { requestOptions: {} },
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
  options: NodesListNodeFilesOptions = { requestOptions: {} },
): StreamableMethod<ListNodeFiles200Response | ListNodeFilesDefaultResponse> {
  return context
    .path("/pools/{poolId}/nodes/{nodeId}/files", poolId, nodeId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        maxresults: options?.maxresults,
        timeOut: options?.timeOut,
        $filter: options?.$filter,
        recursive: options?.recursive,
      },
    });
}

export async function _listNodeFilesDeserialize(
  result: ListNodeFiles200Response | ListNodeFilesDefaultResponse,
): Promise<NodeFileListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: !result.body["value"]
      ? result.body["value"]
      : result.body["value"].map((p) => ({
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
        })),
    "odata.nextLink": result.body["odata.nextLink"],
  };
}

/** Lists all of the files in Task directories on the specified Compute Node. */
export function listNodeFiles(
  context: Client,
  poolId: string,
  nodeId: string,
  options: NodesListNodeFilesOptions = { requestOptions: {} },
): PagedAsyncIterableIterator<NodeFile> {
  return buildPagedAsyncIterator(
    context,
    () => _listNodeFilesSend(context, poolId, nodeId, options),
    _listNodeFilesDeserialize,
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}
