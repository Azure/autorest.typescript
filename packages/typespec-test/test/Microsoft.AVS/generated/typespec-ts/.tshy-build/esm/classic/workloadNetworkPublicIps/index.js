// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, create, $delete, } from "../../api/workloadNetworkPublicIps/index.js";
export function getWorkloadNetworkPublicIps(context, subscriptionId) {
    return {
        listByWorkloadNetwork: (resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, publicIPId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, publicIPId, options),
        create: (resourceGroupName, privateCloudName, publicIPId, workloadNetworkPublicIP, options) => create(context, subscriptionId, resourceGroupName, privateCloudName, publicIPId, workloadNetworkPublicIP, options),
        delete: (resourceGroupName, publicIPId, privateCloudName, options) => $delete(context, subscriptionId, resourceGroupName, publicIPId, privateCloudName, options),
    };
}
export function getWorkloadNetworkPublicIpsOperations(context, subscriptionId) {
    return {
        ...getWorkloadNetworkPublicIps(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map