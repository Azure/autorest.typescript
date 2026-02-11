// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NodesContext as Client } from "./index.js";
import {
  batchErrorDeserializer,
  _NodeFileListResult,
  _nodeFileListResultDeserializer,
  NodeFile,
  BatchNodeUserCreateOptions,
  batchNodeUserCreateOptionsSerializer,
  BatchNodeUserUpdateOptions,
  batchNodeUserUpdateOptionsSerializer,
  BatchNode,
  batchNodeDeserializer,
  nodeRebootOptionsSerializer,
  nodeReimageOptionsSerializer,
  nodeDisableSchedulingOptionsSerializer,
  BatchNodeRemoteLoginSettingsResult,
  batchNodeRemoteLoginSettingsResultDeserializer,
  UploadBatchServiceLogsOptions,
  uploadBatchServiceLogsOptionsSerializer,
  UploadBatchServiceLogsResult,
  uploadBatchServiceLogsResultDeserializer,
  _BatchNodeListResult,
  _batchNodeListResultDeserializer,
  NodeVMExtension,
  nodeVMExtensionDeserializer,
  _NodeVMExtensionList,
  _nodeVMExtensionListDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getBinaryResponse } from "../../static-helpers/serialization/get-binary-response.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  ListNodeFilesOptionalParams,
  GetNodeFilePropertiesOptionalParams,
  GetNodeFileOptionalParams,
  DeleteNodeFileOptionalParams,
  ListNodeExtensionsOptionalParams,
  GetNodeExtensionOptionalParams,
  ListNodesOptionalParams,
  UploadNodeLogsOptionalParams,
  GetNodeRemoteDesktopFileOptionalParams,
  GetNodeRemoteLoginSettingsOptionalParams,
  EnableNodeSchedulingOptionalParams,
  DisableNodeSchedulingOptionalParams,
  ReimageNodeOptionalParams,
  RebootNodeOptionalParams,
  GetNodeOptionalParams,
  ReplaceNodeUserOptionalParams,
  DeleteNodeUserOptionalParams,
  CreateNodeUserOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listNodeFilesSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ListNodeFilesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/files{?api%2Dversion,maxresults,timeOut,%24filter,recursive}",
    {
      poolId: poolId,
      nodeId: nodeId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      maxresults: options?.maxresults,
      timeOut: options?.timeOutInSeconds,
      "%24filter": options?.filter,
      recursive: options?.recursive,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listNodeFilesDeserialize(
  result: PathUncheckedResponse,
): Promise<_NodeFileListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return _nodeFileListResultDeserializer(result.body);
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
    {
      itemName: "value",
      nextLinkName: "odata.nextLink",
      apiVersion: context.apiVersion ?? "2023-05-01.17.0",
    },
  );
}

export function _getNodeFilePropertiesSend(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: GetNodeFilePropertiesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/files/{filePath}{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      nodeId: nodeId,
      filePath: filePath,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .head({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getNodeFilePropertiesDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
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
  const result = await _getNodeFilePropertiesSend(context, poolId, nodeId, filePath, options);
  return _getNodeFilePropertiesDeserialize(result);
}

export function _getNodeFileSend(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: GetNodeFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/files/{filePath}{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      nodeId: nodeId,
      filePath: filePath,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ocpRange !== undefined ? { "ocp-range": options?.ocpRange } : {}),
        accept: "application/octet-stream",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getNodeFileDeserialize(result: PathUncheckedResponse): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return result.body;
}

/** Returns the content of the specified Compute Node file. */
export async function getNodeFile(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: GetNodeFileOptionalParams = { requestOptions: {} },
): Promise<Uint8Array> {
  const streamableMethod = _getNodeFileSend(context, poolId, nodeId, filePath, options);
  const result = await getBinaryResponse(streamableMethod);
  return _getNodeFileDeserialize(result);
}

export function _deleteNodeFileSend(
  context: Client,
  poolId: string,
  nodeId: string,
  filePath: string,
  options: DeleteNodeFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/files/{filePath}{?api%2Dversion,timeOut,recursive}",
    {
      poolId: poolId,
      nodeId: nodeId,
      filePath: filePath,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
      recursive: options?.recursive,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...options.requestOptions?.headers,
      },
    });
}

export async function _deleteNodeFileDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
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
  const result = await _deleteNodeFileSend(context, poolId, nodeId, filePath, options);
  return _deleteNodeFileDeserialize(result);
}

export function _listNodeExtensionsSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ListNodeExtensionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/extensions{?maxresults,timeOut,%24select}",
    {
      poolId: poolId,
      nodeId: nodeId,
      maxresults: options?.maxresults,
      timeOut: options?.timeOutInSeconds,
      "%24select": !options?.select
        ? options?.select
        : options?.select.map((p: any) => {
            return p;
          }),
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listNodeExtensionsDeserialize(
  result: PathUncheckedResponse,
): Promise<_NodeVMExtensionList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return _nodeVMExtensionListDeserializer(result.body);
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

export function _getNodeExtensionSend(
  context: Client,
  poolId: string,
  nodeId: string,
  extensionName: string,
  options: GetNodeExtensionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/extensions/{extensionName}{?api%2Dversion,timeOut,%24select}",
    {
      poolId: poolId,
      nodeId: nodeId,
      extensionName: extensionName,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
      "%24select": !options?.select
        ? options?.select
        : options?.select.map((p: any) => {
            return p;
          }),
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getNodeExtensionDeserialize(
  result: PathUncheckedResponse,
): Promise<NodeVMExtension> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return nodeVMExtensionDeserializer(result.body);
}

/** Gets information about the specified Compute Node Extension. */
export async function getNodeExtension(
  context: Client,
  poolId: string,
  nodeId: string,
  extensionName: string,
  options: GetNodeExtensionOptionalParams = { requestOptions: {} },
): Promise<NodeVMExtension> {
  const result = await _getNodeExtensionSend(context, poolId, nodeId, extensionName, options);
  return _getNodeExtensionDeserialize(result);
}

export function _listNodesSend(
  context: Client,
  poolId: string,
  options: ListNodesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes{?api%2Dversion,maxresults,timeOut,%24filter,%24select}",
    {
      poolId: poolId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      maxresults: options?.maxresults,
      timeOut: options?.timeOutInSeconds,
      "%24filter": options?.filter,
      "%24select": !options?.select
        ? options?.select
        : options?.select.map((p: any) => {
            return p;
          }),
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listNodesDeserialize(
  result: PathUncheckedResponse,
): Promise<_BatchNodeListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return _batchNodeListResultDeserializer(result.body);
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
    {
      itemName: "value",
      nextLinkName: "odata.nextLink",
      apiVersion: context.apiVersion ?? "2023-05-01.17.0",
    },
  );
}

export function _uploadNodeLogsSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body: UploadBatchServiceLogsOptions,
  options: UploadNodeLogsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/uploadbatchservicelogs{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      nodeId: nodeId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: uploadBatchServiceLogsOptionsSerializer(body),
    });
}

export async function _uploadNodeLogsDeserialize(
  result: PathUncheckedResponse,
): Promise<UploadBatchServiceLogsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return uploadBatchServiceLogsResultDeserializer(result.body);
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
  const result = await _uploadNodeLogsSend(context, poolId, nodeId, body, options);
  return _uploadNodeLogsDeserialize(result);
}

export function _getNodeRemoteDesktopFileSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: GetNodeRemoteDesktopFileOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/rdp{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      nodeId: nodeId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        accept: "application/octet-stream",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getNodeRemoteDesktopFileDeserialize(
  result: PathUncheckedResponse,
): Promise<Uint8Array> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return result.body;
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
  const streamableMethod = _getNodeRemoteDesktopFileSend(context, poolId, nodeId, options);
  const result = await getBinaryResponse(streamableMethod);
  return _getNodeRemoteDesktopFileDeserialize(result);
}

export function _getNodeRemoteLoginSettingsSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: GetNodeRemoteLoginSettingsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/remoteloginsettings{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      nodeId: nodeId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getNodeRemoteLoginSettingsDeserialize(
  result: PathUncheckedResponse,
): Promise<BatchNodeRemoteLoginSettingsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return batchNodeRemoteLoginSettingsResultDeserializer(result.body);
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
  const result = await _getNodeRemoteLoginSettingsSend(context, poolId, nodeId, options);
  return _getNodeRemoteLoginSettingsDeserialize(result);
}

export function _enableNodeSchedulingSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: EnableNodeSchedulingOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/enablescheduling{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      nodeId: nodeId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...options.requestOptions?.headers,
      },
    });
}

export async function _enableNodeSchedulingDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
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
  const result = await _enableNodeSchedulingSend(context, poolId, nodeId, options);
  return _enableNodeSchedulingDeserialize(result);
}

export function _disableNodeSchedulingSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: DisableNodeSchedulingOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/disablescheduling{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      nodeId: nodeId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: !options["body"]
        ? options["body"]
        : nodeDisableSchedulingOptionsSerializer(options["body"]),
    });
}

export async function _disableNodeSchedulingDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
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
  options: DisableNodeSchedulingOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _disableNodeSchedulingSend(context, poolId, nodeId, options);
  return _disableNodeSchedulingDeserialize(result);
}

export function _reimageNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: ReimageNodeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/reimage{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      nodeId: nodeId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: !options["body"] ? options["body"] : nodeReimageOptionsSerializer(options["body"]),
    });
}

export async function _reimageNodeDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
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
  options: ReimageNodeOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _reimageNodeSend(context, poolId, nodeId, options);
  return _reimageNodeDeserialize(result);
}

export function _rebootNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: RebootNodeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/reboot{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      nodeId: nodeId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: !options["body"] ? options["body"] : nodeRebootOptionsSerializer(options["body"]),
    });
}

export async function _rebootNodeDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** You can restart a Compute Node only if it is in an idle or running state. */
export async function rebootNode(
  context: Client,
  poolId: string,
  nodeId: string,
  options: RebootNodeOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _rebootNodeSend(context, poolId, nodeId, options);
  return _rebootNodeDeserialize(result);
}

export function _getNodeSend(
  context: Client,
  poolId: string,
  nodeId: string,
  options: GetNodeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}{?api%2Dversion,timeOut,%24select}",
    {
      poolId: poolId,
      nodeId: nodeId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
      "%24select": !options?.select
        ? options?.select
        : options?.select.map((p: any) => {
            return p;
          }),
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getNodeDeserialize(result: PathUncheckedResponse): Promise<BatchNode> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return batchNodeDeserializer(result.body);
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

export function _replaceNodeUserSend(
  context: Client,
  poolId: string,
  nodeId: string,
  userName: string,
  body: BatchNodeUserUpdateOptions,
  options: ReplaceNodeUserOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/users/{userName}{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      nodeId: nodeId,
      userName: userName,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: batchNodeUserUpdateOptionsSerializer(body),
    });
}

export async function _replaceNodeUserDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
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
  const result = await _replaceNodeUserSend(context, poolId, nodeId, userName, body, options);
  return _replaceNodeUserDeserialize(result);
}

export function _deleteNodeUserSend(
  context: Client,
  poolId: string,
  nodeId: string,
  userName: string,
  options: DeleteNodeUserOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/users/{userName}{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      nodeId: nodeId,
      userName: userName,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...options.requestOptions?.headers,
      },
    });
}

export async function _deleteNodeUserDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
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
  const result = await _deleteNodeUserSend(context, poolId, nodeId, userName, options);
  return _deleteNodeUserDeserialize(result);
}

export function _createNodeUserSend(
  context: Client,
  poolId: string,
  nodeId: string,
  body: BatchNodeUserCreateOptions,
  options: CreateNodeUserOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/pools/{poolId}/nodes/{nodeId}/users{?api%2Dversion,timeOut}",
    {
      poolId: poolId,
      nodeId: nodeId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: batchNodeUserCreateOptionsSerializer(body),
    });
}

export async function _createNodeUserDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
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
  const result = await _createNodeUserSend(context, poolId, nodeId, body, options);
  return _createNodeUserDeserialize(result);
}
