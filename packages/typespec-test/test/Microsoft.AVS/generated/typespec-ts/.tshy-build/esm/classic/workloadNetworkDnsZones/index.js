// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, create, update, $delete, } from "../../api/workloadNetworkDnsZones/index.js";
export function getWorkloadNetworkDnsZones(context, subscriptionId) {
    return {
        listByWorkloadNetwork: (resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, dnsZoneId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, options),
        create: (resourceGroupName, privateCloudName, dnsZoneId, workloadNetworkDnsZone, options) => create(context, subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, workloadNetworkDnsZone, options),
        update: (resourceGroupName, privateCloudName, dnsZoneId, workloadNetworkDnsZone, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, workloadNetworkDnsZone, options),
        delete: (resourceGroupName, dnsZoneId, privateCloudName, options) => $delete(context, subscriptionId, resourceGroupName, dnsZoneId, privateCloudName, options),
    };
}
export function getWorkloadNetworkDnsZonesOperations(context, subscriptionId) {
    return {
        ...getWorkloadNetworkDnsZones(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map