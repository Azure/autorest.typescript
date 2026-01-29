// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext } from "../../api/hybridNetworkManagementContext.js";
import {
  listByPublisher,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/networkFunctionDefinitionGroups/operations.js";
import {
  NetworkFunctionDefinitionGroupsListByPublisherOptionalParams,
  NetworkFunctionDefinitionGroupsDeleteOptionalParams,
  NetworkFunctionDefinitionGroupsUpdateOptionalParams,
  NetworkFunctionDefinitionGroupsCreateOrUpdateOptionalParams,
  NetworkFunctionDefinitionGroupsGetOptionalParams,
} from "../../api/networkFunctionDefinitionGroups/options.js";
import { TagsObject, NetworkFunctionDefinitionGroup } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { SimplePollerLike, getSimplePoller } from "../../static-helpers/simplePollerHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a NetworkFunctionDefinitionGroups operations. */
export interface NetworkFunctionDefinitionGroupsOperations {
  /** Gets information of the network function definition groups under a publisher. */
  listByPublisher: (
    resourceGroupName: string,
    publisherName: string,
    options?: NetworkFunctionDefinitionGroupsListByPublisherOptionalParams,
  ) => PagedAsyncIterableIterator<NetworkFunctionDefinitionGroup>;
  /** Deletes a specified network function definition group. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    options?: NetworkFunctionDefinitionGroupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use delete instead */
  beginDelete: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    options?: NetworkFunctionDefinitionGroupsDeleteOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use delete instead */
  beginDeleteAndWait: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    options?: NetworkFunctionDefinitionGroupsDeleteOptionalParams,
  ) => Promise<void>;
  /** Updates a network function definition group resource. */
  update: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    parameters: TagsObject,
    options?: NetworkFunctionDefinitionGroupsUpdateOptionalParams,
  ) => Promise<NetworkFunctionDefinitionGroup>;
  /** Creates or updates a network function definition group. */
  createOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    parameters: NetworkFunctionDefinitionGroup,
    options?: NetworkFunctionDefinitionGroupsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<NetworkFunctionDefinitionGroup>, NetworkFunctionDefinitionGroup>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    parameters: NetworkFunctionDefinitionGroup,
    options?: NetworkFunctionDefinitionGroupsCreateOrUpdateOptionalParams,
  ) => Promise<
    SimplePollerLike<OperationState<NetworkFunctionDefinitionGroup>, NetworkFunctionDefinitionGroup>
  >;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdateAndWait: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    parameters: NetworkFunctionDefinitionGroup,
    options?: NetworkFunctionDefinitionGroupsCreateOrUpdateOptionalParams,
  ) => Promise<NetworkFunctionDefinitionGroup>;
  /** Gets information about the specified networkFunctionDefinition group. */
  get: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    options?: NetworkFunctionDefinitionGroupsGetOptionalParams,
  ) => Promise<NetworkFunctionDefinitionGroup>;
}

function _getNetworkFunctionDefinitionGroups(context: HybridNetworkManagementContext) {
  return {
    listByPublisher: (
      resourceGroupName: string,
      publisherName: string,
      options?: NetworkFunctionDefinitionGroupsListByPublisherOptionalParams,
    ) => listByPublisher(context, resourceGroupName, publisherName, options),
    delete: (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      options?: NetworkFunctionDefinitionGroupsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        options,
      ),
    beginDelete: async (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      options?: NetworkFunctionDefinitionGroupsDeleteOptionalParams,
    ) => {
      const poller = $delete(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginDeleteAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      options?: NetworkFunctionDefinitionGroupsDeleteOptionalParams,
    ) => {
      return await $delete(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        options,
      );
    },
    update: (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      parameters: TagsObject,
      options?: NetworkFunctionDefinitionGroupsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        parameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      parameters: NetworkFunctionDefinitionGroup,
      options?: NetworkFunctionDefinitionGroupsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        parameters,
        options,
      ),
    beginCreateOrUpdate: async (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      parameters: NetworkFunctionDefinitionGroup,
      options?: NetworkFunctionDefinitionGroupsCreateOrUpdateOptionalParams,
    ) => {
      const poller = createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginCreateOrUpdateAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      parameters: NetworkFunctionDefinitionGroup,
      options?: NetworkFunctionDefinitionGroupsCreateOrUpdateOptionalParams,
    ) => {
      return await createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        parameters,
        options,
      );
    },
    get: (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      options?: NetworkFunctionDefinitionGroupsGetOptionalParams,
    ) =>
      get(context, resourceGroupName, publisherName, networkFunctionDefinitionGroupName, options),
  };
}

export function _getNetworkFunctionDefinitionGroupsOperations(
  context: HybridNetworkManagementContext,
): NetworkFunctionDefinitionGroupsOperations {
  return {
    ..._getNetworkFunctionDefinitionGroups(context),
  };
}
