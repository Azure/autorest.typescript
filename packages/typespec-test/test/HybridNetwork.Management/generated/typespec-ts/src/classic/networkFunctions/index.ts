// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext } from "../../api/hybridNetworkManagementContext.js";
import {
  executeRequest,
  listBySubscription,
  listByResourceGroup,
  $delete,
  updateTags,
  createOrUpdate,
  get,
} from "../../api/networkFunctions/operations.js";
import {
  NetworkFunctionsExecuteRequestOptionalParams,
  NetworkFunctionsListBySubscriptionOptionalParams,
  NetworkFunctionsListByResourceGroupOptionalParams,
  NetworkFunctionsDeleteOptionalParams,
  NetworkFunctionsUpdateTagsOptionalParams,
  NetworkFunctionsCreateOrUpdateOptionalParams,
  NetworkFunctionsGetOptionalParams,
} from "../../api/networkFunctions/options.js";
import { TagsObject, NetworkFunction, ExecuteRequestParameters } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { SimplePollerLike, getSimplePoller } from "../../static-helpers/simplePollerHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a NetworkFunctions operations. */
export interface NetworkFunctionsOperations {
  /** Execute a request to services on a containerized network function. */
  executeRequest: (
    resourceGroupName: string,
    networkFunctionName: string,
    parameters: ExecuteRequestParameters,
    options?: NetworkFunctionsExecuteRequestOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use executeRequest instead */
  beginExecuteRequest: (
    resourceGroupName: string,
    networkFunctionName: string,
    parameters: ExecuteRequestParameters,
    options?: NetworkFunctionsExecuteRequestOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use executeRequest instead */
  beginExecuteRequestAndWait: (
    resourceGroupName: string,
    networkFunctionName: string,
    parameters: ExecuteRequestParameters,
    options?: NetworkFunctionsExecuteRequestOptionalParams,
  ) => Promise<void>;
  /** Lists all the network functions in a subscription. */
  listBySubscription: (
    options?: NetworkFunctionsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<NetworkFunction>;
  /** Lists all the network function resources in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: NetworkFunctionsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<NetworkFunction>;
  /** Deletes the specified network function resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    networkFunctionName: string,
    options?: NetworkFunctionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use delete instead */
  beginDelete: (
    resourceGroupName: string,
    networkFunctionName: string,
    options?: NetworkFunctionsDeleteOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use delete instead */
  beginDeleteAndWait: (
    resourceGroupName: string,
    networkFunctionName: string,
    options?: NetworkFunctionsDeleteOptionalParams,
  ) => Promise<void>;
  /** Updates the tags for the network function resource. */
  updateTags: (
    resourceGroupName: string,
    networkFunctionName: string,
    parameters: TagsObject,
    options?: NetworkFunctionsUpdateTagsOptionalParams,
  ) => Promise<NetworkFunction>;
  /** Creates or updates a network function resource. */
  createOrUpdate: (
    resourceGroupName: string,
    networkFunctionName: string,
    parameters: NetworkFunction,
    options?: NetworkFunctionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<NetworkFunction>, NetworkFunction>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdate: (
    resourceGroupName: string,
    networkFunctionName: string,
    parameters: NetworkFunction,
    options?: NetworkFunctionsCreateOrUpdateOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<NetworkFunction>, NetworkFunction>>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdateAndWait: (
    resourceGroupName: string,
    networkFunctionName: string,
    parameters: NetworkFunction,
    options?: NetworkFunctionsCreateOrUpdateOptionalParams,
  ) => Promise<NetworkFunction>;
  /** Gets information about the specified network function resource. */
  get: (
    resourceGroupName: string,
    networkFunctionName: string,
    options?: NetworkFunctionsGetOptionalParams,
  ) => Promise<NetworkFunction>;
}

function _getNetworkFunctions(context: HybridNetworkManagementContext) {
  return {
    executeRequest: (
      resourceGroupName: string,
      networkFunctionName: string,
      parameters: ExecuteRequestParameters,
      options?: NetworkFunctionsExecuteRequestOptionalParams,
    ) => executeRequest(context, resourceGroupName, networkFunctionName, parameters, options),
    beginExecuteRequest: async (
      resourceGroupName: string,
      networkFunctionName: string,
      parameters: ExecuteRequestParameters,
      options?: NetworkFunctionsExecuteRequestOptionalParams,
    ) => {
      const poller = executeRequest(
        context,
        resourceGroupName,
        networkFunctionName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginExecuteRequestAndWait: async (
      resourceGroupName: string,
      networkFunctionName: string,
      parameters: ExecuteRequestParameters,
      options?: NetworkFunctionsExecuteRequestOptionalParams,
    ) => {
      return await executeRequest(
        context,
        resourceGroupName,
        networkFunctionName,
        parameters,
        options,
      );
    },
    listBySubscription: (options?: NetworkFunctionsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: NetworkFunctionsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      networkFunctionName: string,
      options?: NetworkFunctionsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, networkFunctionName, options),
    beginDelete: async (
      resourceGroupName: string,
      networkFunctionName: string,
      options?: NetworkFunctionsDeleteOptionalParams,
    ) => {
      const poller = $delete(context, resourceGroupName, networkFunctionName, options);
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginDeleteAndWait: async (
      resourceGroupName: string,
      networkFunctionName: string,
      options?: NetworkFunctionsDeleteOptionalParams,
    ) => {
      return await $delete(context, resourceGroupName, networkFunctionName, options);
    },
    updateTags: (
      resourceGroupName: string,
      networkFunctionName: string,
      parameters: TagsObject,
      options?: NetworkFunctionsUpdateTagsOptionalParams,
    ) => updateTags(context, resourceGroupName, networkFunctionName, parameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      networkFunctionName: string,
      parameters: NetworkFunction,
      options?: NetworkFunctionsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, networkFunctionName, parameters, options),
    beginCreateOrUpdate: async (
      resourceGroupName: string,
      networkFunctionName: string,
      parameters: NetworkFunction,
      options?: NetworkFunctionsCreateOrUpdateOptionalParams,
    ) => {
      const poller = createOrUpdate(
        context,
        resourceGroupName,
        networkFunctionName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginCreateOrUpdateAndWait: async (
      resourceGroupName: string,
      networkFunctionName: string,
      parameters: NetworkFunction,
      options?: NetworkFunctionsCreateOrUpdateOptionalParams,
    ) => {
      return await createOrUpdate(
        context,
        resourceGroupName,
        networkFunctionName,
        parameters,
        options,
      );
    },
    get: (
      resourceGroupName: string,
      networkFunctionName: string,
      options?: NetworkFunctionsGetOptionalParams,
    ) => get(context, resourceGroupName, networkFunctionName, options),
  };
}

export function _getNetworkFunctionsOperations(
  context: HybridNetworkManagementContext,
): NetworkFunctionsOperations {
  return {
    ..._getNetworkFunctions(context),
  };
}
