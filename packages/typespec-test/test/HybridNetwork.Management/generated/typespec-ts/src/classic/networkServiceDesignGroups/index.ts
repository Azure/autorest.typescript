// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext } from "../../api/hybridNetworkManagementContext.js";
import {
  listByPublisher,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/networkServiceDesignGroups/operations.js";
import {
  NetworkServiceDesignGroupsListByPublisherOptionalParams,
  NetworkServiceDesignGroupsDeleteOptionalParams,
  NetworkServiceDesignGroupsUpdateOptionalParams,
  NetworkServiceDesignGroupsCreateOrUpdateOptionalParams,
  NetworkServiceDesignGroupsGetOptionalParams,
} from "../../api/networkServiceDesignGroups/options.js";
import { TagsObject, NetworkServiceDesignGroup } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { SimplePollerLike, getSimplePoller } from "../../static-helpers/simplePollerHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a NetworkServiceDesignGroups operations. */
export interface NetworkServiceDesignGroupsOperations {
  /** Gets information of the network service design groups under a publisher. */
  listByPublisher: (
    resourceGroupName: string,
    publisherName: string,
    options?: NetworkServiceDesignGroupsListByPublisherOptionalParams,
  ) => PagedAsyncIterableIterator<NetworkServiceDesignGroup>;
  /** Deletes a specified network service design group. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    options?: NetworkServiceDesignGroupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use delete instead */
  beginDelete: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    options?: NetworkServiceDesignGroupsDeleteOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use delete instead */
  beginDeleteAndWait: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    options?: NetworkServiceDesignGroupsDeleteOptionalParams,
  ) => Promise<void>;
  /** Updates a network service design groups resource. */
  update: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    parameters: TagsObject,
    options?: NetworkServiceDesignGroupsUpdateOptionalParams,
  ) => Promise<NetworkServiceDesignGroup>;
  /** Creates or updates a network service design group. */
  createOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    parameters: NetworkServiceDesignGroup,
    options?: NetworkServiceDesignGroupsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<NetworkServiceDesignGroup>, NetworkServiceDesignGroup>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    parameters: NetworkServiceDesignGroup,
    options?: NetworkServiceDesignGroupsCreateOrUpdateOptionalParams,
  ) => Promise<
    SimplePollerLike<OperationState<NetworkServiceDesignGroup>, NetworkServiceDesignGroup>
  >;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdateAndWait: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    parameters: NetworkServiceDesignGroup,
    options?: NetworkServiceDesignGroupsCreateOrUpdateOptionalParams,
  ) => Promise<NetworkServiceDesignGroup>;
  /** Gets information about the specified networkServiceDesign group. */
  get: (
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    options?: NetworkServiceDesignGroupsGetOptionalParams,
  ) => Promise<NetworkServiceDesignGroup>;
}

function _getNetworkServiceDesignGroups(context: HybridNetworkManagementContext) {
  return {
    listByPublisher: (
      resourceGroupName: string,
      publisherName: string,
      options?: NetworkServiceDesignGroupsListByPublisherOptionalParams,
    ) => listByPublisher(context, resourceGroupName, publisherName, options),
    delete: (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      options?: NetworkServiceDesignGroupsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, publisherName, networkServiceDesignGroupName, options),
    beginDelete: async (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      options?: NetworkServiceDesignGroupsDeleteOptionalParams,
    ) => {
      const poller = $delete(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginDeleteAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      options?: NetworkServiceDesignGroupsDeleteOptionalParams,
    ) => {
      return await $delete(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        options,
      );
    },
    update: (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      parameters: TagsObject,
      options?: NetworkServiceDesignGroupsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        parameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      parameters: NetworkServiceDesignGroup,
      options?: NetworkServiceDesignGroupsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        parameters,
        options,
      ),
    beginCreateOrUpdate: async (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      parameters: NetworkServiceDesignGroup,
      options?: NetworkServiceDesignGroupsCreateOrUpdateOptionalParams,
    ) => {
      const poller = createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
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
      parameters: NetworkServiceDesignGroup,
      options?: NetworkServiceDesignGroupsCreateOrUpdateOptionalParams,
    ) => {
      return await createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        parameters,
        options,
      );
    },
    get: (
      resourceGroupName: string,
      publisherName: string,
      networkServiceDesignGroupName: string,
      options?: NetworkServiceDesignGroupsGetOptionalParams,
    ) => get(context, resourceGroupName, publisherName, networkServiceDesignGroupName, options),
  };
}

export function _getNetworkServiceDesignGroupsOperations(
  context: HybridNetworkManagementContext,
): NetworkServiceDesignGroupsOperations {
  return {
    ..._getNetworkServiceDesignGroups(context),
  };
}
