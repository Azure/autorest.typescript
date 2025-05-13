// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import { WorkloadNetwork } from "../../models/models.js";
import {
  WorkloadNetworksListOptionalParams,
  WorkloadNetworksGetOptionalParams,
} from "../../api/workloadNetworks/options.js";
import { list, get } from "../../api/workloadNetworks/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a WorkloadNetworks operations. */
export interface WorkloadNetworksOperations {
  /** List WorkloadNetwork resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworksListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetwork>;
  /** Get a WorkloadNetwork */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworksGetOptionalParams,
  ) => Promise<WorkloadNetwork>;
}

function _getWorkloadNetworks(context: AzureVMwareSolutionAPIContext) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworksListOptionalParams,
    ) => list(context, resourceGroupName, privateCloudName, options),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworksGetOptionalParams,
    ) => get(context, resourceGroupName, privateCloudName, options),
  };
}

export function _getWorkloadNetworksOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworksOperations {
  return {
    ..._getWorkloadNetworks(context),
  };
}
