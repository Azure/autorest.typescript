// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, } from "../../api/workloadNetworkGateways/index.js";
export function getWorkloadNetworkGateways(context) {
    return {
        listByWorkloadNetwork: (subscriptionId, resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, gatewayId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, gatewayId, options),
    };
}
export function getWorkloadNetworkGatewaysOperations(context) {
    return {
        ...getWorkloadNetworkGateways(context),
    };
}
//# sourceMappingURL=index.js.map