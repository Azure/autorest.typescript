// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createNodes, NodesContext, NodesOptionalParams } from "./api/index.js";
import {
  NodeFile,
  BatchNodeUserCreateOptions,
  BatchNodeUserUpdateOptions,
  BatchNode,
  BatchNodeRemoteLoginSettingsResult,
  UploadBatchServiceLogsOptions,
  UploadBatchServiceLogsResult,
  NodeVMExtension,
} from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import {
  listNodeFiles,
  getNodeFileProperties,
  getNodeFile,
  deleteNodeFile,
  listNodeExtensions,
  getNodeExtension,
  listNodes,
  uploadNodeLogs,
  getNodeRemoteDesktopFile,
  getNodeRemoteLoginSettings,
  enableNodeScheduling,
  disableNodeScheduling,
  reimageNode,
  rebootNode,
  getNode,
  replaceNodeUser,
  deleteNodeUser,
  createNodeUser,
} from "./api/operations.js";
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
} from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { NodesOptionalParams } from "./api/nodesContext.js";

export class Nodes {
  private _client: NodesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: NodesOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createNodes(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Lists all of the files in Task directories on the specified Compute Node. */
  listNodeFiles(
    poolId: string,
    nodeId: string,
    options: ListNodeFilesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<NodeFile> {
    return listNodeFiles(this._client, poolId, nodeId, options);
  }

  /** Gets the properties of the specified Compute Node file. */
  getNodeFileProperties(
    poolId: string,
    nodeId: string,
    filePath: string,
    options: GetNodeFilePropertiesOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return getNodeFileProperties(this._client, poolId, nodeId, filePath, options);
  }

  /** Returns the content of the specified Compute Node file. */
  getNodeFile(
    poolId: string,
    nodeId: string,
    filePath: string,
    options: GetNodeFileOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getNodeFile(this._client, poolId, nodeId, filePath, options);
  }

  /** Deletes the specified file from the Compute Node. */
  deleteNodeFile(
    poolId: string,
    nodeId: string,
    filePath: string,
    options: DeleteNodeFileOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteNodeFile(this._client, poolId, nodeId, filePath, options);
  }

  /** Lists the Compute Nodes Extensions in the specified Pool. */
  listNodeExtensions(
    poolId: string,
    nodeId: string,
    options: ListNodeExtensionsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<NodeVMExtension> {
    return listNodeExtensions(this._client, poolId, nodeId, options);
  }

  /** Gets information about the specified Compute Node Extension. */
  getNodeExtension(
    poolId: string,
    nodeId: string,
    extensionName: string,
    options: GetNodeExtensionOptionalParams = { requestOptions: {} },
  ): Promise<NodeVMExtension> {
    return getNodeExtension(this._client, poolId, nodeId, extensionName, options);
  }

  /** Lists the Compute Nodes in the specified Pool. */
  listNodes(
    poolId: string,
    options: ListNodesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchNode> {
    return listNodes(this._client, poolId, options);
  }

  /**
   * This is for gathering Azure Batch service log files in an automated fashion
   * from Compute Nodes if you are experiencing an error and wish to escalate to
   * Azure support. The Azure Batch service log files should be shared with Azure
   * support to aid in debugging issues with the Batch service.
   */
  uploadNodeLogs(
    poolId: string,
    nodeId: string,
    body: UploadBatchServiceLogsOptions,
    options: UploadNodeLogsOptionalParams = { requestOptions: {} },
  ): Promise<UploadBatchServiceLogsResult> {
    return uploadNodeLogs(this._client, poolId, nodeId, body, options);
  }

  /**
   * Before you can access a Compute Node by using the RDP file, you must create a
   * user Account on the Compute Node. This API can only be invoked on Pools created
   * with a cloud service configuration. For Pools created with a virtual machine
   * configuration, see the GetRemoteLoginSettings API.
   */
  getNodeRemoteDesktopFile(
    poolId: string,
    nodeId: string,
    options: GetNodeRemoteDesktopFileOptionalParams = { requestOptions: {} },
  ): Promise<Uint8Array> {
    return getNodeRemoteDesktopFile(this._client, poolId, nodeId, options);
  }

  /**
   * Before you can remotely login to a Compute Node using the remote login
   * settings, you must create a user Account on the Compute Node. This API can be
   * invoked only on Pools created with the virtual machine configuration property.
   * For Pools created with a cloud service configuration, see the GetRemoteDesktop
   * API.
   */
  getNodeRemoteLoginSettings(
    poolId: string,
    nodeId: string,
    options: GetNodeRemoteLoginSettingsOptionalParams = { requestOptions: {} },
  ): Promise<BatchNodeRemoteLoginSettingsResult> {
    return getNodeRemoteLoginSettings(this._client, poolId, nodeId, options);
  }

  /**
   * You can enable Task scheduling on a Compute Node only if its current scheduling
   * state is disabled
   */
  enableNodeScheduling(
    poolId: string,
    nodeId: string,
    options: EnableNodeSchedulingOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return enableNodeScheduling(this._client, poolId, nodeId, options);
  }

  /**
   * You can disable Task scheduling on a Compute Node only if its current
   * scheduling state is enabled.
   */
  disableNodeScheduling(
    poolId: string,
    nodeId: string,
    options: DisableNodeSchedulingOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return disableNodeScheduling(this._client, poolId, nodeId, options);
  }

  /**
   * You can reinstall the operating system on a Compute Node only if it is in an
   * idle or running state. This API can be invoked only on Pools created with the
   * cloud service configuration property.
   */
  reimageNode(
    poolId: string,
    nodeId: string,
    options: ReimageNodeOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return reimageNode(this._client, poolId, nodeId, options);
  }

  /** You can restart a Compute Node only if it is in an idle or running state. */
  rebootNode(
    poolId: string,
    nodeId: string,
    options: RebootNodeOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return rebootNode(this._client, poolId, nodeId, options);
  }

  /** Gets information about the specified Compute Node. */
  getNode(
    poolId: string,
    nodeId: string,
    options: GetNodeOptionalParams = { requestOptions: {} },
  ): Promise<BatchNode> {
    return getNode(this._client, poolId, nodeId, options);
  }

  /**
   * This operation replaces of all the updatable properties of the Account. For
   * example, if the expiryTime element is not specified, the current value is
   * replaced with the default value, not left unmodified. You can update a user
   * Account on a Compute Node only when it is in the idle or running state.
   */
  replaceNodeUser(
    poolId: string,
    nodeId: string,
    userName: string,
    body: BatchNodeUserUpdateOptions,
    options: ReplaceNodeUserOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return replaceNodeUser(this._client, poolId, nodeId, userName, body, options);
  }

  /**
   * You can delete a user Account to a Compute Node only when it is in the idle or
   * running state.
   */
  deleteNodeUser(
    poolId: string,
    nodeId: string,
    userName: string,
    options: DeleteNodeUserOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteNodeUser(this._client, poolId, nodeId, userName, options);
  }

  /**
   * You can add a user Account to a Compute Node only when it is in the idle or
   * running state.
   */
  createNodeUser(
    poolId: string,
    nodeId: string,
    body: BatchNodeUserCreateOptions,
    options: CreateNodeUserOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return createNodeUser(this._client, poolId, nodeId, body, options);
  }
}
