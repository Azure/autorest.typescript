// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkGateway } from "../../models/models.js";
import {
  listByWorkloadNetwork,
  get,
} from "../../api/workloadNetworkGateways/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams,
  WorkloadNetworkGatewaysGetOptionalParams,
} from "../../models/options.js";

/** Interface representing a WorkloadNetworkGateways operations. */
export interface WorkloadNetworkGatewaysOperations {
  /** List WorkloadNetworkGateway resources by WorkloadNetwork */
  listByWorkloadNetwork: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkGateway>;
  /** Get a WorkloadNetworkGateway */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    gatewayId: string,
    options?: WorkloadNetworkGatewaysGetOptionalParams,
  ) => Promise<WorkloadNetworkGateway>;
}

export function getWorkloadNetworkGateways(
  context: AVSContext,
  subscriptionId: string,
) {
  return {
    listByWorkloadNetwork: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams,
    ) =>
      listByWorkloadNetwork(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      gatewayId: string,
      options?: WorkloadNetworkGatewaysGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        gatewayId,
        options,
      ),
  };
}

export function getWorkloadNetworkGatewaysOperations(
  context: AVSContext,
  subscriptionId: string,
): WorkloadNetworkGatewaysOperations {
  return {
    ...getWorkloadNetworkGateways(context, subscriptionId),
  };
}
