// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, } from "../../api/workloadNetworkGateways/index.js";
export function getWorkloadNetworkGateways(context, subscriptionId) {
    return {
        listByWorkloadNetwork: (resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, gatewayId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, gatewayId, options),
    };
}
export function getWorkloadNetworkGatewaysOperations(context, subscriptionId) {
    return {
        ...getWorkloadNetworkGateways(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map