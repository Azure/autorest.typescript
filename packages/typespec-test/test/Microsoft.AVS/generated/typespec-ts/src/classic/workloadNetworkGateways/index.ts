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

export interface WorkloadNetworkGatewaysOperations {
  listByWorkloadNetwork: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkGateway>;
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    privateCloudName: string,
    gatewayId: string,
    options?: WorkloadNetworkGatewaysGetOptionalParams,
  ) => Promise<WorkloadNetworkGateway>;
}

export function getWorkloadNetworkGateways(context: AVSContext) {
  return {
    listByWorkloadNetwork: (
      subscriptionId: string,
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
      subscriptionId: string,
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
): WorkloadNetworkGatewaysOperations {
  return {
    ...getWorkloadNetworkGateways(context),
  };
}
