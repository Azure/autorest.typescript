// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetwork } from "../../models/models.js";
import { get, listByPrivateCloud } from "../../api/workloadNetworks/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  WorkloadNetworksGetOptionalParams,
  WorkloadNetworksListByPrivateCloudOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworks operations. */
export interface WorkloadNetworksOperations {
  /** Get a WorkloadNetwork */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworksGetOptionalParams,
  ) => Promise<WorkloadNetwork>;
  /** List WorkloadNetwork resources by PrivateCloud */
  listByPrivateCloud: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworksListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetwork>;
}

export function getWorkloadNetworks(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworksGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    listByPrivateCloud: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworksListByPrivateCloudOptionalParams,
    ) =>
      listByPrivateCloud(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function getWorkloadNetworksOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworksOperations {
  return {
    ...getWorkloadNetworks(context, subscriptionId),
  };
}
