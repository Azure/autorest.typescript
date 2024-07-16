// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, create, update, $delete, } from "../../api/workloadNetworkDhcpConfigurations/index.js";
export function getWorkloadNetworkDhcpConfigurations(context, subscriptionId) {
    return {
        listByWorkloadNetwork: (resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, dhcpId, privateCloudName, options) => get(context, subscriptionId, resourceGroupName, dhcpId, privateCloudName, options),
        create: (resourceGroupName, privateCloudName, dhcpId, workloadNetworkDhcp, options) => create(context, subscriptionId, resourceGroupName, privateCloudName, dhcpId, workloadNetworkDhcp, options),
        update: (resourceGroupName, privateCloudName, dhcpId, workloadNetworkDhcp, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, dhcpId, workloadNetworkDhcp, options),
        delete: (resourceGroupName, privateCloudName, dhcpId, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, dhcpId, options),
    };
}
export function getWorkloadNetworkDhcpConfigurationsOperations(context, subscriptionId) {
    return {
        ...getWorkloadNetworkDhcpConfigurations(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map