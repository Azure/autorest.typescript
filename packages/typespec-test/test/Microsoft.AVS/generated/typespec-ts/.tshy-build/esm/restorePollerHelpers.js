// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { deserializeState, } from "@azure/core-lro";
import { getLongRunningPoller } from "./api/pollingHelpers.js";
import { _createOrUpdateDeserialize, _$deleteDeserialize, _rotateVcenterPasswordDeserialize, _rotateNsxtPasswordDeserialize, } from "./api/privateClouds/index.js";
import { _createOrUpdateDeserialize as _createOrUpdateDeserializeClusters, _$deleteDeserialize as _$deleteDeserializeClusters, } from "./api/clusters/index.js";
import { _createOrUpdateDeserialize as _createOrUpdateDeserializeDatastores, _$deleteDeserialize as _$deleteDeserializeDatastores, } from "./api/datastores/index.js";
import { _createOrUpdateDeserialize as _createOrUpdateDeserializeAuthorizations, _$deleteDeserialize as _$deleteDeserializeAuthorizations, } from "./api/authorizations/index.js";
import { _createOrUpdateDeserialize as _createOrUpdateDeserializeGlobalReachConnections, _$deleteDeserialize as _$deleteDeserializeGlobalReachConnections, } from "./api/globalReachConnections/index.js";
import { _createDeserialize, _updateDeserialize, _deleteSegmentDeserialize, } from "./api/workloadNetworkSegments/index.js";
import { _createDeserialize as _createDeserializeWorkloadNetworkDhcpConfigurations, _updateDeserialize as _updateDeserializeWorkloadNetworkDhcpConfigurations, _$deleteDeserialize as _$deleteDeserializeWorkloadNetworkDhcpConfigurations, } from "./api/workloadNetworkDhcpConfigurations/index.js";
import { _createDeserialize as _createDeserializeWorkloadNetworkPortMirroringProfiles, _updateDeserialize as _updateDeserializeWorkloadNetworkPortMirroringProfiles, _$deleteDeserialize as _$deleteDeserializeWorkloadNetworkPortMirroringProfiles, } from "./api/workloadNetworkPortMirroringProfiles/index.js";
import { _createDeserialize as _createDeserializeWorkloadNetworkVmGroups, _updateDeserialize as _updateDeserializeWorkloadNetworkVmGroups, _$deleteDeserialize as _$deleteDeserializeWorkloadNetworkVmGroups, } from "./api/workloadNetworkVmGroups/index.js";
import { _createDeserialize as _createDeserializeWorkloadNetworkDnsServices, _updateDeserialize as _updateDeserializeWorkloadNetworkDnsServices, _$deleteDeserialize as _$deleteDeserializeWorkloadNetworkDnsServices, } from "./api/workloadNetworkDnsServices/index.js";
import { _createDeserialize as _createDeserializeWorkloadNetworkDnsZones, _updateDeserialize as _updateDeserializeWorkloadNetworkDnsZones, _$deleteDeserialize as _$deleteDeserializeWorkloadNetworkDnsZones, } from "./api/workloadNetworkDnsZones/index.js";
import { _createDeserialize as _createDeserializeWorkloadNetworkPublicIps, _$deleteDeserialize as _$deleteDeserializeWorkloadNetworkPublicIps, } from "./api/workloadNetworkPublicIps/index.js";
import { _createOrUpdateDeserialize as _createOrUpdateDeserializeCloudLinks, _$deleteDeserialize as _$deleteDeserializeCloudLinks, } from "./api/cloudLinks/index.js";
import { _createOrUpdateDeserialize as _createOrUpdateDeserializeAddons, _$deleteDeserialize as _$deleteDeserializeAddons, } from "./api/addons/index.js";
import { _restrictMovementDeserialize } from "./api/virtualMachines/index.js";
import { _createOrUpdateDeserialize as _createOrUpdateDeserializePlacementPolicies, _$deleteDeserialize as _$deleteDeserializePlacementPolicies, } from "./api/placementPolicies/index.js";
import { _createOrUpdateDeserialize as _createOrUpdateDeserializeScriptExecutions, _$deleteDeserialize as _$deleteDeserializeScriptExecutions, } from "./api/scriptExecutions/index.js";
import { _createOrUpdateDeserialize as _createOrUpdateDeserializeIscsiPaths, _$deleteDeserialize as _$deleteDeserializeIscsiPaths, } from "./api/iscsiPaths/index.js";
/**
 * Creates a poller from the serialized state of another poller. This can be
 * useful when you want to create pollers on a different host or a poller
 * needs to be constructed after the original one is not in scope.
 */
export function restorePoller(client, serializedState, sourceOperation, options) {
    const pollerConfig = deserializeState(serializedState).config;
    const { initialUrl, requestMethod, metadata } = pollerConfig;
    if (!initialUrl || !requestMethod) {
        throw new Error(`Invalid serialized state: ${serializedState} for sourceOperation ${sourceOperation?.name}`);
    }
    const resourceLocationConfig = metadata?.["resourceLocationConfig"];
    const deserializeHelper = options?.processResponseBody ??
        getDeserializationHelper(initialUrl, requestMethod);
    if (!deserializeHelper) {
        throw new Error(`Please ensure the operation is in this client! We can't find its deserializeHelper for ${sourceOperation?.name}.`);
    }
    return getLongRunningPoller(client["_client"] ?? client, deserializeHelper, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        resourceLocationConfig,
        restoreFrom: serializedState,
        initialUrl,
    });
}
const deserializeMap = {
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}": _createOrUpdateDeserialize,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}": _$deleteDeserialize,
    "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateVcenterPassword": _rotateVcenterPasswordDeserialize,
    "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateNsxtPassword": _rotateNsxtPasswordDeserialize,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}": _createOrUpdateDeserializeClusters,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}": _$deleteDeserializeClusters,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}": _createOrUpdateDeserializeDatastores,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}": _$deleteDeserializeDatastores,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}": _createOrUpdateDeserializeAuthorizations,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}": _$deleteDeserializeAuthorizations,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}": _createOrUpdateDeserializeGlobalReachConnections,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}": _$deleteDeserializeGlobalReachConnections,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}": _createDeserialize,
    "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}": _updateDeserialize,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}": _deleteSegmentDeserialize,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}": _createDeserializeWorkloadNetworkDhcpConfigurations,
    "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}": _updateDeserializeWorkloadNetworkDhcpConfigurations,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}": _$deleteDeserializeWorkloadNetworkDhcpConfigurations,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}": _createDeserializeWorkloadNetworkPortMirroringProfiles,
    "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}": _updateDeserializeWorkloadNetworkPortMirroringProfiles,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}": _$deleteDeserializeWorkloadNetworkPortMirroringProfiles,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}": _createDeserializeWorkloadNetworkVmGroups,
    "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}": _updateDeserializeWorkloadNetworkVmGroups,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}": _$deleteDeserializeWorkloadNetworkVmGroups,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}": _createDeserializeWorkloadNetworkDnsServices,
    "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}": _updateDeserializeWorkloadNetworkDnsServices,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}": _$deleteDeserializeWorkloadNetworkDnsServices,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}": _createDeserializeWorkloadNetworkDnsZones,
    "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}": _updateDeserializeWorkloadNetworkDnsZones,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}": _$deleteDeserializeWorkloadNetworkDnsZones,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}": _createDeserializeWorkloadNetworkPublicIps,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}": _$deleteDeserializeWorkloadNetworkPublicIps,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}": _createOrUpdateDeserializeCloudLinks,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}": _$deleteDeserializeCloudLinks,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}": _createOrUpdateDeserializeAddons,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}": _$deleteDeserializeAddons,
    "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}/restrictMovement": _restrictMovementDeserialize,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}": _createOrUpdateDeserializePlacementPolicies,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}": _$deleteDeserializePlacementPolicies,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}": _createOrUpdateDeserializeScriptExecutions,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}": _$deleteDeserializeScriptExecutions,
    "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default": _createOrUpdateDeserializeIscsiPaths,
    "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default": _$deleteDeserializeIscsiPaths,
};
function getDeserializationHelper(urlStr, method) {
    const path = new URL(urlStr).pathname;
    const pathParts = path.split("/");
    // Traverse list to match the longest candidate
    // matchedLen: the length of candidate path
    // matchedValue: the matched status code array
    let matchedLen = -1, matchedValue;
    // Iterate the responseMap to find a match
    for (const [key, value] of Object.entries(deserializeMap)) {
        // Extracting the path from the map key which is in format
        // GET /path/foo
        if (!key.startsWith(method)) {
            continue;
        }
        const candidatePath = getPathFromMapKey(key);
        // Get each part of the url path
        const candidateParts = candidatePath.split("/");
        // track if we have found a match to return the values found.
        let found = true;
        for (let i = candidateParts.length - 1, j = pathParts.length - 1; i >= 1 && j >= 1; i--, j--) {
            if (candidateParts[i]?.startsWith("{") &&
                candidateParts[i]?.indexOf("}") !== -1) {
                const start = candidateParts[i].indexOf("}") + 1, end = candidateParts[i]?.length;
                // If the current part of the candidate is a "template" part
                // Try to use the suffix of pattern to match the path
                // {guid} ==> $
                // {guid}:export ==> :export$
                const isMatched = new RegExp(`${candidateParts[i]?.slice(start, end)}`).test(pathParts[j] || "");
                if (!isMatched) {
                    found = false;
                    break;
                }
                continue;
            }
            // If the candidate part is not a template and
            // the parts don't match mark the candidate as not found
            // to move on with the next candidate path.
            if (candidateParts[i] !== pathParts[j]) {
                found = false;
                break;
            }
        }
        // We finished evaluating the current candidate parts
        // Update the matched value if and only if we found the longer pattern
        if (found && candidatePath.length > matchedLen) {
            matchedLen = candidatePath.length;
            matchedValue = value;
        }
    }
    return matchedValue;
}
function getPathFromMapKey(mapKey) {
    const pathStart = mapKey.indexOf("/");
    return mapKey.slice(pathStart);
}
//# sourceMappingURL=restorePollerHelpers.js.map