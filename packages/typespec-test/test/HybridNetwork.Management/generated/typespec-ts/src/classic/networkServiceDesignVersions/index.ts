// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext } from "../../api/hybridNetworkManagementContext.js";
import {
  updateState,
  listByNetworkServiceDesignGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/networkServiceDesignVersions/operations.js";
import {
  NetworkServiceDesignVersionsUpdateStateOptionalParams,
  NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOptionalParams,
  NetworkServiceDesignVersionsDeleteOptionalParams,
  NetworkServiceDesignVersionsUpdateOptionalParams,
  NetworkServiceDesignVersionsCreateOrUpdateOptionalParams,
  NetworkServiceDesignVersionsGetOptionalParams,
} from "../../api/networkServiceDesignVersions/options.js";
import {
  TagsObject,
  NetworkServiceDesignVersion,
  NetworkServiceDesignVersionUpdateState,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { SimplePollerLike, getSimplePoller } from "../../static-helpers/simplePollerHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a NetworkServiceDesignVersions operations. */
export interface NetworkServiceDesignVersionsOperations {
  /** Update network service design version state. */
  updateState: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    parameters: NetworkServiceDesignVersionUpdateState,
    options?: NetworkServiceDesignVersionsUpdateStateOptionalParams,
  ) => PollerLike<
    OperationState<NetworkServiceDesignVersionUpdateState>,
    NetworkServiceDesignVersionUpdateState
  >;
  /** @deprecated use updateState instead */
  beginUpdateState: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    parameters: NetworkServiceDesignVersionUpdateState,
    options?: NetworkServiceDesignVersionsUpdateStateOptionalParams,
  ) => Promise<
    SimplePollerLike<
      OperationState<NetworkServiceDesignVersionUpdateState>,
      NetworkServiceDesignVersionUpdateState
    >
  >;
  /** @deprecated use updateState instead */
  beginUpdateStateAndWait: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    parameters: NetworkServiceDesignVersionUpdateState,
    options?: NetworkServiceDesignVersionsUpdateStateOptionalParams,
  ) => Promise<NetworkServiceDesignVersionUpdateState>;
  /** Gets information about a list of network service design versions under a network service design group. */
  listByNetworkServiceDesignGroup: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    options?: NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOptionalParams,
  ) => PagedAsyncIterableIterator<NetworkServiceDesignVersion>;
  /** Deletes the specified network service design version. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    options?: NetworkServiceDesignVersionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use delete instead */
  beginDelete: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    options?: NetworkServiceDesignVersionsDeleteOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use delete instead */
  beginDeleteAndWait: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    options?: NetworkServiceDesignVersionsDeleteOptionalParams,
  ) => Promise<void>;
  /** Updates a network service design version resource. */
  update: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    parameters: TagsObject,
    options?: NetworkServiceDesignVersionsUpdateOptionalParams,
  ) => Promise<NetworkServiceDesignVersion>;
  /** Creates or updates a network service design version. */
  createOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    parameters: NetworkServiceDesignVersion,
    options?: NetworkServiceDesignVersionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<NetworkServiceDesignVersion>, NetworkServiceDesignVersion>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    parameters: NetworkServiceDesignVersion,
    options?: NetworkServiceDesignVersionsCreateOrUpdateOptionalParams,
  ) => Promise<
    SimplePollerLike<OperationState<NetworkServiceDesignVersion>, NetworkServiceDesignVersion>
  >;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdateAndWait: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    parameters: NetworkServiceDesignVersion,
    options?: NetworkServiceDesignVersionsCreateOrUpdateOptionalParams,
  ) => Promise<NetworkServiceDesignVersion>;
  /** Gets information about a network service design version. */
  get: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    options?: NetworkServiceDesignVersionsGetOptionalParams,
  ) => Promise<NetworkServiceDesignVersion>;
}

function _getNetworkServiceDesignVersions(context: HybridNetworkManagementContext) {
  return {
    updateState: (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      networkServiceDesignVersionName: string,
      parameters: NetworkServiceDesignVersionUpdateState,
      options?: NetworkServiceDesignVersionsUpdateStateOptionalParams,
    ) =>
      updateState(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        parameters,
        options,
      ),
    beginUpdateState: async (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      networkServiceDesignVersionName: string,
      parameters: NetworkServiceDesignVersionUpdateState,
      options?: NetworkServiceDesignVersionsUpdateStateOptionalParams,
    ) => {
      const poller = updateState(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginUpdateStateAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      networkServiceDesignVersionName: string,
      parameters: NetworkServiceDesignVersionUpdateState,
      options?: NetworkServiceDesignVersionsUpdateStateOptionalParams,
    ) => {
      return await updateState(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        parameters,
        options,
      );
    },
    listByNetworkServiceDesignGroup: (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      options?: NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOptionalParams,
    ) =>
      listByNetworkServiceDesignGroup(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      networkServiceDesignVersionName: string,
      options?: NetworkServiceDesignVersionsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        options,
      ),
    beginDelete: async (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      networkServiceDesignVersionName: string,
      options?: NetworkServiceDesignVersionsDeleteOptionalParams,
    ) => {
      const poller = $delete(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginDeleteAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      networkServiceDesignVersionName: string,
      options?: NetworkServiceDesignVersionsDeleteOptionalParams,
    ) => {
      return await $delete(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        options,
      );
    },
    update: (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      networkServiceDesignVersionName: string,
      parameters: TagsObject,
      options?: NetworkServiceDesignVersionsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        parameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      networkServiceDesignVersionName: string,
      parameters: NetworkServiceDesignVersion,
      options?: NetworkServiceDesignVersionsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        parameters,
        options,
      ),
    beginCreateOrUpdate: async (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      networkServiceDesignVersionName: string,
      parameters: NetworkServiceDesignVersion,
      options?: NetworkServiceDesignVersionsCreateOrUpdateOptionalParams,
    ) => {
      const poller = createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginCreateOrUpdateAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      networkServiceDesignVersionName: string,
      parameters: NetworkServiceDesignVersion,
      options?: NetworkServiceDesignVersionsCreateOrUpdateOptionalParams,
    ) => {
      return await createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        parameters,
        options,
      );
    },
    get: (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      networkServiceDesignVersionName: string,
      options?: NetworkServiceDesignVersionsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        options,
      ),
  };
}

export function _getNetworkServiceDesignVersionsOperations(
  context: HybridNetworkManagementContext,
): NetworkServiceDesignVersionsOperations {
  return {
    ..._getNetworkServiceDesignVersions(context),
  };
}
