// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { hostsGet, hostsList } from "../../api/hosts/index.js";
import {
  HostsGetOptionalParams,
  HostsListOptionalParams,
} from "../../api/options.js";
import { Host } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Hosts operations. */
export interface HostsOperations {
  /** Get a Host */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    hostId: string,
    options?: HostsGetOptionalParams,
  ) => Promise<Host>;
  /** List Host resources by Cluster */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: HostsListOptionalParams,
  ) => PagedAsyncIterableIterator<Host>;
}

function _getHosts(context: AzureVMwareSolutionAPIContext) {
  return {
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      hostId: string,
      options?: HostsGetOptionalParams,
    ) =>
      hostsGet(
        context,
        resourceGroupName,
        privateCloudName,
        clusterName,
        hostId,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      clusterName: string,
      options?: HostsListOptionalParams,
    ) =>
      hostsList(
        context,
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      ),
  };
}

export function _getHostsOperations(
  context: AzureVMwareSolutionAPIContext,
): HostsOperations {
  return {
    ..._getHosts(context),
  };
}
