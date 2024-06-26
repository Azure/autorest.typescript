// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, create, update, $delete, } from "../../api/workloadNetworkDnsZones/index.js";
export function getWorkloadNetworkDnsZones(context) {
    return {
        listByWorkloadNetwork: (subscriptionId, resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, options),
        create: (subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, workloadNetworkDnsZone, options) => create(context, subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, workloadNetworkDnsZone, options),
        update: (subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, workloadNetworkDnsZone, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, workloadNetworkDnsZone, options),
        delete: (subscriptionId, resourceGroupName, dnsZoneId, privateCloudName, options) => $delete(context, subscriptionId, resourceGroupName, dnsZoneId, privateCloudName, options),
    };
}
export function getWorkloadNetworkDnsZonesOperations(context) {
    return {
        ...getWorkloadNetworkDnsZones(context),
    };
}
//# sourceMappingURL=index.js.map