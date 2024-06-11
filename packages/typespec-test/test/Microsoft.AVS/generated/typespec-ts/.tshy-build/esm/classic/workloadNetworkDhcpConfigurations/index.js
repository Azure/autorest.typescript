// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, create, update, $delete, } from "../../api/workloadNetworkDhcpConfigurations/index.js";
export function getWorkloadNetworkDhcpConfigurations(context) {
    return {
        listByWorkloadNetwork: (subscriptionId, resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, dhcpId, privateCloudName, options) => get(context, subscriptionId, resourceGroupName, dhcpId, privateCloudName, options),
        create: (subscriptionId, resourceGroupName, privateCloudName, dhcpId, workloadNetworkDhcp, options) => create(context, subscriptionId, resourceGroupName, privateCloudName, dhcpId, workloadNetworkDhcp, options),
        update: (subscriptionId, resourceGroupName, privateCloudName, dhcpId, workloadNetworkDhcp, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, dhcpId, workloadNetworkDhcp, options),
        delete: (subscriptionId, resourceGroupName, privateCloudName, dhcpId, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, dhcpId, options),
    };
}
export function getWorkloadNetworkDhcpConfigurationsOperations(context) {
    return {
        ...getWorkloadNetworkDhcpConfigurations(context),
    };
}
//# sourceMappingURL=index.js.map