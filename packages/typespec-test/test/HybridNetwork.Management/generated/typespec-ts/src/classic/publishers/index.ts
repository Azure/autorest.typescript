// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext } from "../../api/hybridNetworkManagementContext.js";
import {
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/publishers/operations.js";
import {
  PublishersListBySubscriptionOptionalParams,
  PublishersListByResourceGroupOptionalParams,
  PublishersDeleteOptionalParams,
  PublishersUpdateOptionalParams,
  PublishersCreateOrUpdateOptionalParams,
  PublishersGetOptionalParams,
} from "../../api/publishers/options.js";
import { Publisher } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { SimplePollerLike, getSimplePoller } from "../../static-helpers/simplePollerHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Publishers operations. */
export interface PublishersOperations {
  /** Lists all the publishers in a subscription. */
  listBySubscription: (
    options?: PublishersListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Publisher>;
  /** Lists all the publishers in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: PublishersListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Publisher>;
  /** Deletes the specified publisher. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    publisherName: string,
    options?: PublishersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use delete instead */
  beginDelete: (
    resourceGroupName: string,
    publisherName: string,
    options?: PublishersDeleteOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use delete instead */
  beginDeleteAndWait: (
    resourceGroupName: string,
    publisherName: string,
    options?: PublishersDeleteOptionalParams,
  ) => Promise<void>;
  /** Update a publisher resource. */
  update: (
    resourceGroupName: string,
    publisherName: string,
    options?: PublishersUpdateOptionalParams,
  ) => Promise<Publisher>;
  /** Creates or updates a publisher. */
  createOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    options?: PublishersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Publisher>, Publisher>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdate: (
    resourceGroupName: string,
    publisherName: string,
    options?: PublishersCreateOrUpdateOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<Publisher>, Publisher>>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdateAndWait: (
    resourceGroupName: string,
    publisherName: string,
    options?: PublishersCreateOrUpdateOptionalParams,
  ) => Promise<Publisher>;
  /** Gets information about the specified publisher. */
  get: (
    resourceGroupName: string,
    publisherName: string,
    options?: PublishersGetOptionalParams,
  ) => Promise<Publisher>;
}

function _getPublishers(context: HybridNetworkManagementContext) {
  return {
    listBySubscription: (options?: PublishersListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: PublishersListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      publisherName: string,
      options?: PublishersDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, publisherName, options),
    beginDelete: async (
      resourceGroupName: string,
      publisherName: string,
      options?: PublishersDeleteOptionalParams,
    ) => {
      const poller = $delete(context, resourceGroupName, publisherName, options);
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginDeleteAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      options?: PublishersDeleteOptionalParams,
    ) => {
      return await $delete(context, resourceGroupName, publisherName, options);
    },
    update: (
      resourceGroupName: string,
      publisherName: string,
      options?: PublishersUpdateOptionalParams,
    ) => update(context, resourceGroupName, publisherName, options),
    createOrUpdate: (
      resourceGroupName: string,
      publisherName: string,
      options?: PublishersCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, publisherName, options),
    beginCreateOrUpdate: async (
      resourceGroupName: string,
      publisherName: string,
      options?: PublishersCreateOrUpdateOptionalParams,
    ) => {
      const poller = createOrUpdate(context, resourceGroupName, publisherName, options);
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginCreateOrUpdateAndWait: async (
      resourceGroupName: string,
      publisherName: string,
      options?: PublishersCreateOrUpdateOptionalParams,
    ) => {
      return await createOrUpdate(context, resourceGroupName, publisherName, options);
    },
    get: (
      resourceGroupName: string,
      publisherName: string,
      options?: PublishersGetOptionalParams,
    ) => get(context, resourceGroupName, publisherName, options),
  };
}

export function _getPublishersOperations(
  context: HybridNetworkManagementContext,
): PublishersOperations {
  return {
    ..._getPublishers(context),
  };
}
