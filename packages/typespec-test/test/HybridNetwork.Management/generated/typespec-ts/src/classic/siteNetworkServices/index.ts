// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext } from "../../api/hybridNetworkManagementContext.js";
import {
  cancelOperation,
  listBySubscription,
  listByResourceGroup,
  $delete,
  updateTags,
  createOrUpdate,
  get,
} from "../../api/siteNetworkServices/operations.js";
import {
  SiteNetworkServicesCancelOperationOptionalParams,
  SiteNetworkServicesListBySubscriptionOptionalParams,
  SiteNetworkServicesListByResourceGroupOptionalParams,
  SiteNetworkServicesDeleteOptionalParams,
  SiteNetworkServicesUpdateTagsOptionalParams,
  SiteNetworkServicesCreateOrUpdateOptionalParams,
  SiteNetworkServicesGetOptionalParams,
} from "../../api/siteNetworkServices/options.js";
import { TagsObject, SiteNetworkService, CancelInformation } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { SimplePollerLike, getSimplePoller } from "../../static-helpers/simplePollerHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a SiteNetworkServices operations. */
export interface SiteNetworkServicesOperations {
  /** Cancels an ongoing long-running PUT operation for the specified Site Network Service resource. Other operations are not supported for cancellation at this time. */
  cancelOperation: (
    parameters: CancelInformation,
    options?: SiteNetworkServicesCancelOperationOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use cancelOperation instead */
  beginCancelOperation: (
    parameters: CancelInformation,
    options?: SiteNetworkServicesCancelOperationOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use cancelOperation instead */
  beginCancelOperationAndWait: (
    parameters: CancelInformation,
    options?: SiteNetworkServicesCancelOperationOptionalParams,
  ) => Promise<void>;
  /** Lists all sites in the network service in a subscription. */
  listBySubscription: (
    options?: SiteNetworkServicesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<SiteNetworkService>;
  /** Lists all site network services. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: SiteNetworkServicesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<SiteNetworkService>;
  /** Deletes the specified site network service. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    siteNetworkServiceName: string,
    options?: SiteNetworkServicesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use delete instead */
  beginDelete: (
    resourceGroupName: string,
    siteNetworkServiceName: string,
    options?: SiteNetworkServicesDeleteOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use delete instead */
  beginDeleteAndWait: (
    resourceGroupName: string,
    siteNetworkServiceName: string,
    options?: SiteNetworkServicesDeleteOptionalParams,
  ) => Promise<void>;
  /** Updates a site update tags. */
  updateTags: (
    resourceGroupName: string,
    siteNetworkServiceName: string,
    parameters: TagsObject,
    options?: SiteNetworkServicesUpdateTagsOptionalParams,
  ) => Promise<SiteNetworkService>;
  /** Creates or updates a network site. */
  createOrUpdate: (
    resourceGroupName: string,
    siteNetworkServiceName: string,
    parameters: SiteNetworkService,
    options?: SiteNetworkServicesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<SiteNetworkService>, SiteNetworkService>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdate: (
    resourceGroupName: string,
    siteNetworkServiceName: string,
    parameters: SiteNetworkService,
    options?: SiteNetworkServicesCreateOrUpdateOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<SiteNetworkService>, SiteNetworkService>>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdateAndWait: (
    resourceGroupName: string,
    siteNetworkServiceName: string,
    parameters: SiteNetworkService,
    options?: SiteNetworkServicesCreateOrUpdateOptionalParams,
  ) => Promise<SiteNetworkService>;
  /** Gets information about the specified site network service. */
  get: (
    resourceGroupName: string,
    siteNetworkServiceName: string,
    options?: SiteNetworkServicesGetOptionalParams,
  ) => Promise<SiteNetworkService>;
}

function _getSiteNetworkServices(context: HybridNetworkManagementContext) {
  return {
    cancelOperation: (
      parameters: CancelInformation,
      options?: SiteNetworkServicesCancelOperationOptionalParams,
    ) => cancelOperation(context, parameters, options),
    beginCancelOperation: async (
      parameters: CancelInformation,
      options?: SiteNetworkServicesCancelOperationOptionalParams,
    ) => {
      const poller = cancelOperation(context, parameters, options);
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginCancelOperationAndWait: async (
      parameters: CancelInformation,
      options?: SiteNetworkServicesCancelOperationOptionalParams,
    ) => {
      return await cancelOperation(context, parameters, options);
    },
    listBySubscription: (options?: SiteNetworkServicesListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SiteNetworkServicesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      siteNetworkServiceName: string,
      options?: SiteNetworkServicesDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, siteNetworkServiceName, options),
    beginDelete: async (
      resourceGroupName: string,
      siteNetworkServiceName: string,
      options?: SiteNetworkServicesDeleteOptionalParams,
    ) => {
      const poller = $delete(context, resourceGroupName, siteNetworkServiceName, options);
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginDeleteAndWait: async (
      resourceGroupName: string,
      siteNetworkServiceName: string,
      options?: SiteNetworkServicesDeleteOptionalParams,
    ) => {
      return await $delete(context, resourceGroupName, siteNetworkServiceName, options);
    },
    updateTags: (
      resourceGroupName: string,
      siteNetworkServiceName: string,
      parameters: TagsObject,
      options?: SiteNetworkServicesUpdateTagsOptionalParams,
    ) => updateTags(context, resourceGroupName, siteNetworkServiceName, parameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      siteNetworkServiceName: string,
      parameters: SiteNetworkService,
      options?: SiteNetworkServicesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, siteNetworkServiceName, parameters, options),
    beginCreateOrUpdate: async (
      resourceGroupName: string,
      siteNetworkServiceName: string,
      parameters: SiteNetworkService,
      options?: SiteNetworkServicesCreateOrUpdateOptionalParams,
    ) => {
      const poller = createOrUpdate(
        context,
        resourceGroupName,
        siteNetworkServiceName,
        parameters,
        options,
      );
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginCreateOrUpdateAndWait: async (
      resourceGroupName: string,
      siteNetworkServiceName: string,
      parameters: SiteNetworkService,
      options?: SiteNetworkServicesCreateOrUpdateOptionalParams,
    ) => {
      return await createOrUpdate(
        context,
        resourceGroupName,
        siteNetworkServiceName,
        parameters,
        options,
      );
    },
    get: (
      resourceGroupName: string,
      siteNetworkServiceName: string,
      options?: SiteNetworkServicesGetOptionalParams,
    ) => get(context, resourceGroupName, siteNetworkServiceName, options),
  };
}

export function _getSiteNetworkServicesOperations(
  context: HybridNetworkManagementContext,
): SiteNetworkServicesOperations {
  return {
    ..._getSiteNetworkServices(context),
  };
}
