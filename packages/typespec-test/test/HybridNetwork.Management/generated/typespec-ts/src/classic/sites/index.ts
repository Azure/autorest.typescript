// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext } from "../../api/hybridNetworkManagementContext.js";
import {
  listBySubscription,
  listByResourceGroup,
  $delete,
  updateTags,
  createOrUpdate,
  get,
} from "../../api/sites/operations.js";
import {
  SitesListBySubscriptionOptionalParams,
  SitesListByResourceGroupOptionalParams,
  SitesDeleteOptionalParams,
  SitesUpdateTagsOptionalParams,
  SitesCreateOrUpdateOptionalParams,
  SitesGetOptionalParams,
} from "../../api/sites/options.js";
import { TagsObject, Site } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { SimplePollerLike, getSimplePoller } from "../../static-helpers/simplePollerHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Sites operations. */
export interface SitesOperations {
  /** Lists all sites in the network service in a subscription. */
  listBySubscription: (
    options?: SitesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Site>;
  /** Lists all sites in the network service. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: SitesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Site>;
  /** Deletes the specified network site. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    siteName: string,
    options?: SitesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** @deprecated use delete instead */
  beginDelete: (
    resourceGroupName: string,
    siteName: string,
    options?: SitesDeleteOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<void>, void>>;
  /** @deprecated use delete instead */
  beginDeleteAndWait: (
    resourceGroupName: string,
    siteName: string,
    options?: SitesDeleteOptionalParams,
  ) => Promise<void>;
  /** Updates a site update tags. */
  updateTags: (
    resourceGroupName: string,
    siteName: string,
    parameters: TagsObject,
    options?: SitesUpdateTagsOptionalParams,
  ) => Promise<Site>;
  /** Creates or updates a network site. */
  createOrUpdate: (
    resourceGroupName: string,
    siteName: string,
    parameters: Site,
    options?: SitesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Site>, Site>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdate: (
    resourceGroupName: string,
    siteName: string,
    parameters: Site,
    options?: SitesCreateOrUpdateOptionalParams,
  ) => Promise<SimplePollerLike<OperationState<Site>, Site>>;
  /** @deprecated use createOrUpdate instead */
  beginCreateOrUpdateAndWait: (
    resourceGroupName: string,
    siteName: string,
    parameters: Site,
    options?: SitesCreateOrUpdateOptionalParams,
  ) => Promise<Site>;
  /** Gets information about the specified network site. */
  get: (
    resourceGroupName: string,
    siteName: string,
    options?: SitesGetOptionalParams,
  ) => Promise<Site>;
}

function _getSites(context: HybridNetworkManagementContext) {
  return {
    listBySubscription: (options?: SitesListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: SitesListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (resourceGroupName: string, siteName: string, options?: SitesDeleteOptionalParams) =>
      $delete(context, resourceGroupName, siteName, options),
    beginDelete: async (
      resourceGroupName: string,
      siteName: string,
      options?: SitesDeleteOptionalParams,
    ) => {
      const poller = $delete(context, resourceGroupName, siteName, options);
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginDeleteAndWait: async (
      resourceGroupName: string,
      siteName: string,
      options?: SitesDeleteOptionalParams,
    ) => {
      return await $delete(context, resourceGroupName, siteName, options);
    },
    updateTags: (
      resourceGroupName: string,
      siteName: string,
      parameters: TagsObject,
      options?: SitesUpdateTagsOptionalParams,
    ) => updateTags(context, resourceGroupName, siteName, parameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      siteName: string,
      parameters: Site,
      options?: SitesCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, siteName, parameters, options),
    beginCreateOrUpdate: async (
      resourceGroupName: string,
      siteName: string,
      parameters: Site,
      options?: SitesCreateOrUpdateOptionalParams,
    ) => {
      const poller = createOrUpdate(context, resourceGroupName, siteName, parameters, options);
      await poller.submitted();
      return getSimplePoller(poller);
    },
    beginCreateOrUpdateAndWait: async (
      resourceGroupName: string,
      siteName: string,
      parameters: Site,
      options?: SitesCreateOrUpdateOptionalParams,
    ) => {
      return await createOrUpdate(context, resourceGroupName, siteName, parameters, options);
    },
    get: (resourceGroupName: string, siteName: string, options?: SitesGetOptionalParams) =>
      get(context, resourceGroupName, siteName, options),
  };
}

export function _getSitesOperations(context: HybridNetworkManagementContext): SitesOperations {
  return {
    ..._getSites(context),
  };
}
