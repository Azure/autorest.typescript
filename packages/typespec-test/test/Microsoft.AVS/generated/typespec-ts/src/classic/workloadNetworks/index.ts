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

export interface WorkloadNetworksOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworksGetOptionalParams,
  ) => Promise<WorkloadNetwork>;
  listByPrivateCloud: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworksListByPrivateCloudOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetwork>;
}

export function getWorkloadNetworks(context: AVSContext) {
  return {
    get: (
      subscriptionId: string,
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
      subscriptionId: string,
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
): WorkloadNetworksOperations {
  return {
    ...getWorkloadNetworks(context),
  };
}
