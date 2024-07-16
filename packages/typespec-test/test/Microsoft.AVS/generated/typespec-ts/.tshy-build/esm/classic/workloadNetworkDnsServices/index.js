// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, create, update, $delete, } from "../../api/workloadNetworkDnsServices/index.js";
export function getWorkloadNetworkDnsServices(context, subscriptionId) {
    return {
        listByWorkloadNetwork: (resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, dnsServiceId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, options),
        create: (resourceGroupName, privateCloudName, dnsServiceId, workloadNetworkDnsService, options) => create(context, subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, workloadNetworkDnsService, options),
        update: (resourceGroupName, privateCloudName, dnsServiceId, workloadNetworkDnsService, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, workloadNetworkDnsService, options),
        delete: (resourceGroupName, dnsServiceId, privateCloudName, options) => $delete(context, subscriptionId, resourceGroupName, dnsServiceId, privateCloudName, options),
    };
}
export function getWorkloadNetworkDnsServicesOperations(context, subscriptionId) {
    return {
        ...getWorkloadNetworkDnsServices(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map