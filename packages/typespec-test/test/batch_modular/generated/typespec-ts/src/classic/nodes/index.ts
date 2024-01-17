// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BatchContext } from "../../api/BatchContext.js";
import {
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
  NodeVMExtension,
} from "../../models/models.js";
import {
  createNodeUser,
  deleteNodeUser,
  replaceNodeUser,
  getNode,
  rebootNode,
  reimageNode,
  disableNodeScheduling,
  enableNodeScheduling,
  getNodeRemoteLoginSettings,
  getNodeRemoteDesktopFile,
  uploadNodeLogs,
  listNodes,
  getNodeExtension,
  listNodeExtensions,
  deleteNodeFile,
  getNodeFile,
  getNodeFileProperties,
  listNodeFiles,
} from "../../api/nodes/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
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

export interface NodesOperations {
  createNodeUser: (
    poolId: string,
    nodeId: string,
    body: BatchNodeUserCreateOptions,
    options?: NodesCreateNodeUserOptions,
  ) => Promise<void>;
  deleteNodeUser: (
    poolId: string,
    nodeId: string,
    userName: string,
    options?: NodesDeleteNodeUserOptions,
  ) => Promise<void>;
  replaceNodeUser: (
    poolId: string,
    nodeId: string,
    userName: string,
    body: BatchNodeUserUpdateOptions,
    options?: NodesReplaceNodeUserOptions,
  ) => Promise<void>;
  getNode: (
    poolId: string,
    nodeId: string,
    options?: NodesGetNodeOptions,
  ) => Promise<BatchNode>;
  rebootNode: (
    poolId: string,
    nodeId: string,
    body: NodeRebootOptions,
    options?: NodesRebootNodeOptions,
  ) => Promise<void>;
  reimageNode: (
    poolId: string,
    nodeId: string,
    body: NodeReimageOptions,
    options?: NodesReimageNodeOptions,
  ) => Promise<void>;
  disableNodeScheduling: (
    poolId: string,
    nodeId: string,
    body: NodeDisableSchedulingOptions,
    options?: NodesDisableNodeSchedulingOptions,
  ) => Promise<void>;
  enableNodeScheduling: (
    poolId: string,
    nodeId: string,
    options?: NodesEnableNodeSchedulingOptions,
  ) => Promise<void>;
  getNodeRemoteLoginSettings: (
    poolId: string,
    nodeId: string,
    options?: NodesGetNodeRemoteLoginSettingsOptions,
  ) => Promise<BatchNodeRemoteLoginSettingsResult>;
  getNodeRemoteDesktopFile: (
    poolId: string,
    nodeId: string,
    options?: NodesGetNodeRemoteDesktopFileOptions,
  ) => Promise<Uint8Array>;
  uploadNodeLogs: (
    poolId: string,
    nodeId: string,
    body: UploadBatchServiceLogsOptions,
    options?: NodesUploadNodeLogsOptions,
  ) => Promise<UploadBatchServiceLogsResult>;
  listNodes: (
    poolId: string,
    options?: NodesListNodesOptions,
  ) => PagedAsyncIterableIterator<BatchNode>;
  getNodeExtension: (
    poolId: string,
    nodeId: string,
    extensionName: string,
    options?: NodesGetNodeExtensionOptions,
  ) => Promise<NodeVMExtension>;
  listNodeExtensions: (
    poolId: string,
    nodeId: string,
    options?: NodesListNodeExtensionsOptions,
  ) => PagedAsyncIterableIterator<NodeVMExtension>;
  deleteNodeFile: (
    poolId: string,
    nodeId: string,
    filePath: string,
    options?: NodesDeleteNodeFileOptions,
  ) => Promise<void>;
  getNodeFile: (
    poolId: string,
    nodeId: string,
    filePath: string,
    options?: NodesGetNodeFileOptions,
  ) => Promise<Uint8Array>;
  getNodeFileProperties: (
    poolId: string,
    nodeId: string,
    filePath: string,
    options?: NodesGetNodeFilePropertiesOptions,
  ) => Promise<void>;
  listNodeFiles: (
    poolId: string,
    nodeId: string,
    options?: NodesListNodeFilesOptions,
  ) => PagedAsyncIterableIterator<NodeFile>;
}

export function getNodes(context: BatchContext) {
  return {
    createNodeUser: (
      poolId: string,
      nodeId: string,
      body: BatchNodeUserCreateOptions,
      options?: NodesCreateNodeUserOptions,
    ) => createNodeUser(context, poolId, nodeId, body, options),
    deleteNodeUser: (
      poolId: string,
      nodeId: string,
      userName: string,
      options?: NodesDeleteNodeUserOptions,
    ) => deleteNodeUser(context, poolId, nodeId, userName, options),
    replaceNodeUser: (
      poolId: string,
      nodeId: string,
      userName: string,
      body: BatchNodeUserUpdateOptions,
      options?: NodesReplaceNodeUserOptions,
    ) => replaceNodeUser(context, poolId, nodeId, userName, body, options),
    getNode: (poolId: string, nodeId: string, options?: NodesGetNodeOptions) =>
      getNode(context, poolId, nodeId, options),
    rebootNode: (
      poolId: string,
      nodeId: string,
      body: NodeRebootOptions,
      options?: NodesRebootNodeOptions,
    ) => rebootNode(context, poolId, nodeId, body, options),
    reimageNode: (
      poolId: string,
      nodeId: string,
      body: NodeReimageOptions,
      options?: NodesReimageNodeOptions,
    ) => reimageNode(context, poolId, nodeId, body, options),
    disableNodeScheduling: (
      poolId: string,
      nodeId: string,
      body: NodeDisableSchedulingOptions,
      options?: NodesDisableNodeSchedulingOptions,
    ) => disableNodeScheduling(context, poolId, nodeId, body, options),
    enableNodeScheduling: (
      poolId: string,
      nodeId: string,
      options?: NodesEnableNodeSchedulingOptions,
    ) => enableNodeScheduling(context, poolId, nodeId, options),
    getNodeRemoteLoginSettings: (
      poolId: string,
      nodeId: string,
      options?: NodesGetNodeRemoteLoginSettingsOptions,
    ) => getNodeRemoteLoginSettings(context, poolId, nodeId, options),
    getNodeRemoteDesktopFile: (
      poolId: string,
      nodeId: string,
      options?: NodesGetNodeRemoteDesktopFileOptions,
    ) => getNodeRemoteDesktopFile(context, poolId, nodeId, options),
    uploadNodeLogs: (
      poolId: string,
      nodeId: string,
      body: UploadBatchServiceLogsOptions,
      options?: NodesUploadNodeLogsOptions,
    ) => uploadNodeLogs(context, poolId, nodeId, body, options),
    listNodes: (poolId: string, options?: NodesListNodesOptions) =>
      listNodes(context, poolId, options),
    getNodeExtension: (
      poolId: string,
      nodeId: string,
      extensionName: string,
      options?: NodesGetNodeExtensionOptions,
    ) => getNodeExtension(context, poolId, nodeId, extensionName, options),
    listNodeExtensions: (
      poolId: string,
      nodeId: string,
      options?: NodesListNodeExtensionsOptions,
    ) => listNodeExtensions(context, poolId, nodeId, options),
    deleteNodeFile: (
      poolId: string,
      nodeId: string,
      filePath: string,
      options?: NodesDeleteNodeFileOptions,
    ) => deleteNodeFile(context, poolId, nodeId, filePath, options),
    getNodeFile: (
      poolId: string,
      nodeId: string,
      filePath: string,
      options?: NodesGetNodeFileOptions,
    ) => getNodeFile(context, poolId, nodeId, filePath, options),
    getNodeFileProperties: (
      poolId: string,
      nodeId: string,
      filePath: string,
      options?: NodesGetNodeFilePropertiesOptions,
    ) => getNodeFileProperties(context, poolId, nodeId, filePath, options),
    listNodeFiles: (
      poolId: string,
      nodeId: string,
      options?: NodesListNodeFilesOptions,
    ) => listNodeFiles(context, poolId, nodeId, options),
  };
}

export function getNodesOperations(context: BatchContext): NodesOperations {
  return {
    ...getNodes(context),
  };
}
