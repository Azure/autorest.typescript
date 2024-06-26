// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, create, $delete, } from "../../api/workloadNetworkPublicIps/index.js";
export function getWorkloadNetworkPublicIps(context) {
    return {
        listByWorkloadNetwork: (subscriptionId, resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, publicIPId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, publicIPId, options),
        create: (subscriptionId, resourceGroupName, privateCloudName, publicIPId, workloadNetworkPublicIP, options) => create(context, subscriptionId, resourceGroupName, privateCloudName, publicIPId, workloadNetworkPublicIP, options),
        delete: (subscriptionId, resourceGroupName, publicIPId, privateCloudName, options) => $delete(context, subscriptionId, resourceGroupName, publicIPId, privateCloudName, options),
    };
}
export function getWorkloadNetworkPublicIpsOperations(context) {
    return {
        ...getWorkloadNetworkPublicIps(context),
    };
}
//# sourceMappingURL=index.js.map