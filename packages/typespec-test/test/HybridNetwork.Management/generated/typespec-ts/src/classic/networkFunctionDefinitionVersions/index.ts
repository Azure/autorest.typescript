// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext } from "../../api/hybridNetworkManagementContext.js";
import {
  updateState,
  listByNetworkFunctionDefinitionGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/networkFunctionDefinitionVersions/operations.js";
import {
  NetworkFunctionDefinitionVersionsUpdateStateOptionalParams,
  NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroupOptionalParams,
  NetworkFunctionDefinitionVersionsDeleteOptionalParams,
  NetworkFunctionDefinitionVersionsUpdateOptionalParams,
  NetworkFunctionDefinitionVersionsCreateOrUpdateOptionalParams,
  NetworkFunctionDefinitionVersionsGetOptionalParams,
} from "../../api/networkFunctionDefinitionVersions/options.js";
import {
  TagsObject,
  NetworkFunctionDefinitionVersion,
  NetworkFunctionDefinitionVersionUpdateState,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { SimplePollerLike, getSimplePoller } from "../../static-helpers/simplePollerHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a NetworkFunctionDefinitionVersions operations. */
export interface NetworkFunctionDefinitionVersionsOperations {
  /** Update network function definition version state. */
  updateState: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    networkFunctionDefinitionVersionName: string,
    parameters: NetworkFunctionDefinitionVersionUpdateState,
    options?: NetworkFunctionDefinitionVersionsUpdateStateOptionalParams,
  ) => PollerLike<
    OperationState<NetworkFunctionDefinitionVersionUpdateState>,
    NetworkFunctionDefinitionVersionUpdateState
  >;
  /** @deprecated use updateState instead */
  beginUpdateState: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    networkFunctionDefinitionVersionName: string,
    parameters: NetworkFunctionDefinitionVersionUpdateState,
    options?: NetworkFunctionDefinitionVersionsUpdateStateOptionalParams,
  ) => Promise<
    SimplePollerLike<
      OperationState<NetworkFunctionDefinitionVersionUpdateState>,
      NetworkFunctionDefinitionVersionUpdateState
    >
  >;
  /** @deprecated use updateState instead */
  beginUpdateStateAndWait: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    networkFunctionDefinitionVersionName: string,
    parameters: NetworkFunctionDefinitionVersionUpdateState,
    options?: NetworkFunctionDefinitionVersionsUpdateStateOptionalParams,
  ) => Promise<NetworkFunctionDefinitionVersionUpdateState>;
  /** Gets information about a list of network function definition versions under a network function definition group. */
  listByNetworkFunctionDefinitionGroup: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    options?: NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroupOptionalParams,
  ) => PagedAsyncIterableIterator<NetworkFunctionDefinitionVersion>;
  /** Deletes the specified network function definition version. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    networkFunctionDefinitionVersionName: string,
    options?: NetworkFunctionDefinitionVersionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use delete instead */
  beginDelete: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    networkFunctionDefinitionVersionName: string,
    options?: NetworkFunctionDefinitionVersionsDeleteOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use delete instead */
  beginDeleteAndWait: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    networkFunctionDefinitionVersionName: string,
    options?: NetworkFunctionDefinitionVersionsDeleteOptionalParams,
  ) => Promise<void>;
  /** Updates a network function definition version resource. */
  update: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    networkFunctionDefinitionVersionName: string,
    parameters: TagsObject,
    options?: NetworkFunctionDefinitionVersionsUpdateOptionalParams,
  ) => Promise<NetworkFunctionDefinitionVersion>;
  /** Creates or updates a network function definition version. */
  createOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    networkFunctionDefinitionVersionName: string,
    parameters: NetworkFunctionDefinitionVersion,
    options?: NetworkFunctionDefinitionVersionsCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<NetworkFunctionDefinitionVersion>,
    NetworkFunctionDefinitionVersion
  >;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    networkFunctionDefinitionVersionName: string,
    parameters: NetworkFunctionDefinitionVersion,
    options?: NetworkFunctionDefinitionVersionsCreateOrUpdateOptionalParams,
  ) => Promise<
    SimplePollerLike<
      OperationState<NetworkFunctionDefinitionVersion>,
      NetworkFunctionDefinitionVersion
    >
  >;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdateAndWait: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    networkFunctionDefinitionVersionName: string,
    parameters: NetworkFunctionDefinitionVersion,
    options?: NetworkFunctionDefinitionVersionsCreateOrUpdateOptionalParams,
  ) => Promise<NetworkFunctionDefinitionVersion>;
  /** Gets information about a network function definition version. */
  get: (
    resourceGroupName: string,
    publisherName: string,
    networkFunctionDefinitionGroupName: string,
    networkFunctionDefinitionVersionName: string,
    options?: NetworkFunctionDefinitionVersionsGetOptionalParams,
  ) => Promise<NetworkFunctionDefinitionVersion>;
}

function _getNetworkFunctionDefinitionVersions(context: HybridNetworkManagementContext) {
  return {
    updateState: (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      networkFunctionDefinitionVersionName: string,
      parameters: NetworkFunctionDefinitionVersionUpdateState,
      options?: NetworkFunctionDefinitionVersionsUpdateStateOptionalParams,
    ) =>
      updateState(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        networkFunctionDefinitionVersionName,
        parameters,
        options,
      ),
    beginUpdateState: async (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      networkFunctionDefinitionVersionName: string,
      parameters: NetworkFunctionDefinitionVersionUpdateState,
      options?: NetworkFunctionDefinitionVersionsUpdateStateOptionalParams,
    ) => {
      const poller = updateState(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        networkFunctionDefinitionVersionName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginUpdateStateAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      networkFunctionDefinitionVersionName: string,
      parameters: NetworkFunctionDefinitionVersionUpdateState,
      options?: NetworkFunctionDefinitionVersionsUpdateStateOptionalParams,
    ) => {
      return await updateState(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        networkFunctionDefinitionVersionName,
        parameters,
        options,
      );
    },
    listByNetworkFunctionDefinitionGroup: (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      options?: NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroupOptionalParams,
    ) =>
      listByNetworkFunctionDefinitionGroup(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      networkFunctionDefinitionVersionName: string,
      options?: NetworkFunctionDefinitionVersionsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        networkFunctionDefinitionVersionName,
        options,
      ),
    beginDelete: async (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      networkFunctionDefinitionVersionName: string,
      options?: NetworkFunctionDefinitionVersionsDeleteOptionalParams,
    ) => {
      const poller = $delete(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        networkFunctionDefinitionVersionName,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginDeleteAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      networkFunctionDefinitionVersionName: string,
      options?: NetworkFunctionDefinitionVersionsDeleteOptionalParams,
    ) => {
      return await $delete(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        networkFunctionDefinitionVersionName,
        options,
      );
    },
    update: (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      networkFunctionDefinitionVersionName: string,
      parameters: TagsObject,
      options?: NetworkFunctionDefinitionVersionsUpdateOptionalParams,
    ) =>
      update(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        networkFunctionDefinitionVersionName,
        parameters,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      networkFunctionDefinitionVersionName: string,
      parameters: NetworkFunctionDefinitionVersion,
      options?: NetworkFunctionDefinitionVersionsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        networkFunctionDefinitionVersionName,
        parameters,
        options,
      ),
    beginCreateOrUpdate: async (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      networkFunctionDefinitionVersionName: string,
      parameters: NetworkFunctionDefinitionVersion,
      options?: NetworkFunctionDefinitionVersionsCreateOrUpdateOptionalParams,
    ) => {
      const poller = createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        networkFunctionDefinitionVersionName,
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
      networkFunctionDefinitionVersionName: string,
      parameters: NetworkFunctionDefinitionVersion,
      options?: NetworkFunctionDefinitionVersionsCreateOrUpdateOptionalParams,
    ) => {
      return await createOrUpdate(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        networkFunctionDefinitionVersionName,
        parameters,
        options,
      );
    },
    get: (
      resourceGroupName: string,
      publisherName: string,
      networkFunctionDefinitionGroupName: string,
      networkFunctionDefinitionVersionName: string,
      options?: NetworkFunctionDefinitionVersionsGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        publisherName,
        networkFunctionDefinitionGroupName,
        networkFunctionDefinitionVersionName,
        options,
      ),
  };
}

export function _getNetworkFunctionDefinitionVersionsOperations(
  context: HybridNetworkManagementContext,
): NetworkFunctionDefinitionVersionsOperations {
  return {
    ..._getNetworkFunctionDefinitionVersions(context),
  };
}
