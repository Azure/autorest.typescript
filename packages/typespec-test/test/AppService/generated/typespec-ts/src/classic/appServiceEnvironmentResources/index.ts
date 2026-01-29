// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebSiteManagementContext } from "../../api/webSiteManagementContext.js";
import {
  suspend,
  resume,
  changeVnet,
} from "../../api/appServiceEnvironmentResources/operations.js";
import {
  AppServiceEnvironmentResourcesSuspendOptionalParams,
  AppServiceEnvironmentResourcesResumeOptionalParams,
  AppServiceEnvironmentResourcesChangeVnetOptionalParams,
} from "../../api/appServiceEnvironmentResources/options.js";
import { VirtualNetworkProfile, Site } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a AppServiceEnvironmentResources operations. */
export interface AppServiceEnvironmentResourcesOperations {
  /** Description for Suspend an App Service Environment. */
  suspend: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentResourcesSuspendOptionalParams,
  ) => PagedAsyncIterableIterator<Site>;
  /** @deprecated use suspend instead */
  beginListSuspendAndWait: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentResourcesSuspendOptionalParams,
  ) => PagedAsyncIterableIterator<Site>;
  /** Description for Resume an App Service Environment. */
  resume: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentResourcesResumeOptionalParams,
  ) => PagedAsyncIterableIterator<Site>;
  /** @deprecated use resume instead */
  beginListResumeAndWait: (
    resourceGroupName: string,
    name: string,
    options?: AppServiceEnvironmentResourcesResumeOptionalParams,
  ) => PagedAsyncIterableIterator<Site>;
  /** Description for Move an App Service Environment to a different VNET. */
  changeVnet: (
    resourceGroupName: string,
    name: string,
    body: VirtualNetworkProfile,
    options?: AppServiceEnvironmentResourcesChangeVnetOptionalParams,
  ) => PagedAsyncIterableIterator<Site>;
  /** @deprecated use changeVnet instead */
  beginListChangeVnetAndWait: (
    resourceGroupName: string,
    name: string,
    body: VirtualNetworkProfile,
    options?: AppServiceEnvironmentResourcesChangeVnetOptionalParams,
  ) => PagedAsyncIterableIterator<Site>;
}

function _getAppServiceEnvironmentResources(context: WebSiteManagementContext) {
  return {
    suspend: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentResourcesSuspendOptionalParams,
    ) => suspend(context, resourceGroupName, name, options),
    beginListSuspendAndWait: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentResourcesSuspendOptionalParams,
    ) => {
      return suspend(context, resourceGroupName, name, options);
    },
    resume: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentResourcesResumeOptionalParams,
    ) => resume(context, resourceGroupName, name, options),
    beginListResumeAndWait: (
      resourceGroupName: string,
      name: string,
      options?: AppServiceEnvironmentResourcesResumeOptionalParams,
    ) => {
      return resume(context, resourceGroupName, name, options);
    },
    changeVnet: (
      resourceGroupName: string,
      name: string,
      body: VirtualNetworkProfile,
      options?: AppServiceEnvironmentResourcesChangeVnetOptionalParams,
    ) => changeVnet(context, resourceGroupName, name, body, options),
    beginListChangeVnetAndWait: (
      resourceGroupName: string,
      name: string,
      body: VirtualNetworkProfile,
      options?: AppServiceEnvironmentResourcesChangeVnetOptionalParams,
    ) => {
      return changeVnet(context, resourceGroupName, name, body, options);
    },
  };
}

export function _getAppServiceEnvironmentResourcesOperations(
  context: WebSiteManagementContext,
): AppServiceEnvironmentResourcesOperations {
  return {
    ..._getAppServiceEnvironmentResources(context),
  };
}
