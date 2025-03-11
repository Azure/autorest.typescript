// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIContext } from "../../api/azureVMwareSolutionAPIContext.js";
import {
  WorkloadNetworkGatewaysGetOptionalParams,
  WorkloadNetworkGatewaysListOptionalParams,
} from "../../api/options.js";
import {
  workloadNetworkGatewaysGet,
  workloadNetworkGatewaysList,
} from "../../api/workloadNetworkGateways/index.js";
import { WorkloadNetworkGateway } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a WorkloadNetworkGateways operations. */
export interface WorkloadNetworkGatewaysOperations {
  /** Get a WorkloadNetworkGateway */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    gatewayId: string,
    options?: WorkloadNetworkGatewaysGetOptionalParams,
  ) => Promise<WorkloadNetworkGateway>;
  /** List WorkloadNetworkGateway resources by WorkloadNetwork */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: WorkloadNetworkGatewaysListOptionalParams,
  ) => PagedAsyncIterableIterator<WorkloadNetworkGateway>;
}

function _getWorkloadNetworkGateways(context: AzureVMwareSolutionAPIContext) {
  return {
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      gatewayId: string,
      options?: WorkloadNetworkGatewaysGetOptionalParams,
    ) =>
      workloadNetworkGatewaysGet(
        context,
        resourceGroupName,
        privateCloudName,
        gatewayId,
        options,
      ),
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: WorkloadNetworkGatewaysListOptionalParams,
    ) =>
      workloadNetworkGatewaysList(
        context,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  };
}

export function _getWorkloadNetworkGatewaysOperations(
  context: AzureVMwareSolutionAPIContext,
): WorkloadNetworkGatewaysOperations {
  return {
    ..._getWorkloadNetworkGateways(context),
  };
}
