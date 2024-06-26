// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getLongRunningPoller } from "../pollingHelpers.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _listByWorkloadNetworkSend(context, subscriptionId, resourceGroupName, privateCloudName, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones", subscriptionId, resourceGroupName, privateCloudName)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _listByWorkloadNetworkDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        value: result.body["value"].map((p) => ({
            id: p["id"],
            name: p["name"],
            type: p["type"],
            systemData: !p.systemData
                ? undefined
                : {
                    createdBy: p.systemData?.["createdBy"],
                    createdByType: p.systemData?.["createdByType"],
                    createdAt: p.systemData?.["createdAt"] !== undefined
                        ? new Date(p.systemData?.["createdAt"])
                        : undefined,
                    lastModifiedBy: p.systemData?.["lastModifiedBy"],
                    lastModifiedByType: p.systemData?.["lastModifiedByType"],
                    lastModifiedAt: p.systemData?.["lastModifiedAt"] !== undefined
                        ? new Date(p.systemData?.["lastModifiedAt"])
                        : undefined,
                },
            properties: !p.properties
                ? undefined
                : {
                    displayName: p.properties?.["displayName"],
                    domain: p.properties?.["domain"],
                    dnsServerIps: p.properties?.["dnsServerIps"],
                    sourceIp: p.properties?.["sourceIp"],
                    dnsServices: p.properties?.["dnsServices"],
                    provisioningState: p.properties?.["provisioningState"],
                    revision: p.properties?.["revision"],
                },
        })),
        nextLink: result.body["nextLink"],
    };
}
/** List WorkloadNetworkDnsZone resources by WorkloadNetwork */
export function listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options = {
    requestOptions: {},
}) {
    return buildPagedAsyncIterator(context, () => _listByWorkloadNetworkSend(context, subscriptionId, resourceGroupName, privateCloudName, options), _listByWorkloadNetworkDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _getSend(context, subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}", subscriptionId, resourceGroupName, privateCloudName, dnsZoneId)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _getDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        id: result.body["id"],
        name: result.body["name"],
        type: result.body["type"],
        systemData: !result.body.systemData
            ? undefined
            : {
                createdBy: result.body.systemData?.["createdBy"],
                createdByType: result.body.systemData?.["createdByType"],
                createdAt: result.body.systemData?.["createdAt"] !== undefined
                    ? new Date(result.body.systemData?.["createdAt"])
                    : undefined,
                lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
                lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
                lastModifiedAt: result.body.systemData?.["lastModifiedAt"] !== undefined
                    ? new Date(result.body.systemData?.["lastModifiedAt"])
                    : undefined,
            },
        properties: !result.body.properties
            ? undefined
            : {
                displayName: result.body.properties?.["displayName"],
                domain: result.body.properties?.["domain"],
                dnsServerIps: result.body.properties?.["dnsServerIps"],
                sourceIp: result.body.properties?.["sourceIp"],
                dnsServices: result.body.properties?.["dnsServices"],
                provisioningState: result.body.properties?.["provisioningState"],
                revision: result.body.properties?.["revision"],
            },
    };
}
/** Get a WorkloadNetworkDnsZone */
export async function get(context, subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, options);
    return _getDeserialize(result);
}
export function _createSend(context, subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, workloadNetworkDnsZone, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}", subscriptionId, resourceGroupName, privateCloudName, dnsZoneId)
        .put({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !workloadNetworkDnsZone.properties
                ? undefined
                : {
                    displayName: workloadNetworkDnsZone.properties?.["displayName"],
                    domain: workloadNetworkDnsZone.properties?.["domain"],
                    dnsServerIps: workloadNetworkDnsZone.properties?.["dnsServerIps"],
                    sourceIp: workloadNetworkDnsZone.properties?.["sourceIp"],
                    dnsServices: workloadNetworkDnsZone.properties?.["dnsServices"],
                    revision: workloadNetworkDnsZone.properties?.["revision"],
                },
        },
    });
}
export async function _createDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return {
        id: result.body["id"],
        name: result.body["name"],
        type: result.body["type"],
        systemData: !result.body.systemData
            ? undefined
            : {
                createdBy: result.body.systemData?.["createdBy"],
                createdByType: result.body.systemData?.["createdByType"],
                createdAt: result.body.systemData?.["createdAt"] !== undefined
                    ? new Date(result.body.systemData?.["createdAt"])
                    : undefined,
                lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
                lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
                lastModifiedAt: result.body.systemData?.["lastModifiedAt"] !== undefined
                    ? new Date(result.body.systemData?.["lastModifiedAt"])
                    : undefined,
            },
        properties: !result.body.properties
            ? undefined
            : {
                displayName: result.body.properties?.["displayName"],
                domain: result.body.properties?.["domain"],
                dnsServerIps: result.body.properties?.["dnsServerIps"],
                sourceIp: result.body.properties?.["sourceIp"],
                dnsServices: result.body.properties?.["dnsServices"],
                provisioningState: result.body.properties?.["provisioningState"],
                revision: result.body.properties?.["revision"],
            },
    };
}
/** Create a WorkloadNetworkDnsZone */
export function create(context, subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, workloadNetworkDnsZone, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _createDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _createSend(context, subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, workloadNetworkDnsZone, options),
    });
}
export function _updateSend(context, subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, workloadNetworkDnsZone, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}", subscriptionId, resourceGroupName, privateCloudName, dnsZoneId)
        .patch({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !workloadNetworkDnsZone.properties
                ? undefined
                : {
                    displayName: workloadNetworkDnsZone.properties?.["displayName"],
                    domain: workloadNetworkDnsZone.properties?.["domain"],
                    dnsServerIps: workloadNetworkDnsZone.properties?.["dnsServerIps"],
                    sourceIp: workloadNetworkDnsZone.properties?.["sourceIp"],
                    dnsServices: workloadNetworkDnsZone.properties?.["dnsServices"],
                    revision: workloadNetworkDnsZone.properties?.["revision"],
                },
        },
    });
}
export async function _updateDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return {
        id: result.body["id"],
        name: result.body["name"],
        type: result.body["type"],
        systemData: !result.body.systemData
            ? undefined
            : {
                createdBy: result.body.systemData?.["createdBy"],
                createdByType: result.body.systemData?.["createdByType"],
                createdAt: result.body.systemData?.["createdAt"] !== undefined
                    ? new Date(result.body.systemData?.["createdAt"])
                    : undefined,
                lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
                lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
                lastModifiedAt: result.body.systemData?.["lastModifiedAt"] !== undefined
                    ? new Date(result.body.systemData?.["lastModifiedAt"])
                    : undefined,
            },
        properties: !result.body.properties
            ? undefined
            : {
                displayName: result.body.properties?.["displayName"],
                domain: result.body.properties?.["domain"],
                dnsServerIps: result.body.properties?.["dnsServerIps"],
                sourceIp: result.body.properties?.["sourceIp"],
                dnsServices: result.body.properties?.["dnsServices"],
                provisioningState: result.body.properties?.["provisioningState"],
                revision: result.body.properties?.["revision"],
            },
    };
}
/** Update a WorkloadNetworkDnsZone */
export function update(context, subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, workloadNetworkDnsZone, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _updateDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _updateSend(context, subscriptionId, resourceGroupName, privateCloudName, dnsZoneId, workloadNetworkDnsZone, options),
    });
}
export function _$deleteSend(context, subscriptionId, resourceGroupName, dnsZoneId, privateCloudName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}", subscriptionId, resourceGroupName, dnsZoneId, privateCloudName)
        .delete({ ...operationOptionsToRequestParameters(options) });
}
export async function _$deleteDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Delete a WorkloadNetworkDnsZone */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(context, subscriptionId, resourceGroupName, dnsZoneId, privateCloudName, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _$deleteDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _$deleteSend(context, subscriptionId, resourceGroupName, dnsZoneId, privateCloudName, options),
    });
}
//# sourceMappingURL=index.js.map