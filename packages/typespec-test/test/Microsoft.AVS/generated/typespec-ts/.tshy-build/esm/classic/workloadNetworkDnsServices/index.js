// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, create, update, $delete, } from "../../api/workloadNetworkDnsServices/index.js";
export function getWorkloadNetworkDnsServices(context) {
    return {
        listByWorkloadNetwork: (subscriptionId, resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, options),
        create: (subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, workloadNetworkDnsService, options) => create(context, subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, workloadNetworkDnsService, options),
        update: (subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, workloadNetworkDnsService, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, workloadNetworkDnsService, options),
        delete: (subscriptionId, resourceGroupName, dnsServiceId, privateCloudName, options) => $delete(context, subscriptionId, resourceGroupName, dnsServiceId, privateCloudName, options),
    };
}
export function getWorkloadNetworkDnsServicesOperations(context) {
    return {
        ...getWorkloadNetworkDnsServices(context),
    };
}
//# sourceMappingURL=index.js.map