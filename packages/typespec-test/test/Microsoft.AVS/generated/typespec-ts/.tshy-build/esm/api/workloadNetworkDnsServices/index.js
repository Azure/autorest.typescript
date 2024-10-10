// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getLongRunningPoller } from "../pollingHelpers.js";
import { workloadNetworkDnsServicePropertiesSerializer, } from "../../models/models.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _listByWorkloadNetworkSend(context, subscriptionId, resourceGroupName, privateCloudName, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices", subscriptionId, resourceGroupName, privateCloudName)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _listByWorkloadNetworkDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        value: result.body["value"].map((p) => {
            return {
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
                        dnsServiceIp: p.properties?.["dnsServiceIp"],
                        defaultDnsZone: p.properties?.["defaultDnsZone"],
                        fqdnZones: p.properties?.["fqdnZones"],
                        logLevel: p.properties?.["logLevel"],
                        status: p.properties?.["status"],
                        provisioningState: p.properties?.["provisioningState"],
                        revision: p.properties?.["revision"],
                    },
            };
        }),
        nextLink: result.body["nextLink"],
    };
}
/** List WorkloadNetworkDnsService resources by WorkloadNetwork */
export function listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options = {
    requestOptions: {},
}) {
    return buildPagedAsyncIterator(context, () => _listByWorkloadNetworkSend(context, subscriptionId, resourceGroupName, privateCloudName, options), _listByWorkloadNetworkDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _getSend(context, subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}", subscriptionId, resourceGroupName, privateCloudName, dnsServiceId)
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
                dnsServiceIp: result.body.properties?.["dnsServiceIp"],
                defaultDnsZone: result.body.properties?.["defaultDnsZone"],
                fqdnZones: result.body.properties?.["fqdnZones"],
                logLevel: result.body.properties?.["logLevel"],
                status: result.body.properties?.["status"],
                provisioningState: result.body.properties?.["provisioningState"],
                revision: result.body.properties?.["revision"],
            },
    };
}
/** Get a WorkloadNetworkDnsService */
export async function get(context, subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, options);
    return _getDeserialize(result);
}
export function _createSend(context, subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, workloadNetworkDnsService, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}", subscriptionId, resourceGroupName, privateCloudName, dnsServiceId)
        .put({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !workloadNetworkDnsService.properties
                ? workloadNetworkDnsService.properties
                : workloadNetworkDnsServicePropertiesSerializer(workloadNetworkDnsService.properties),
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
                dnsServiceIp: result.body.properties?.["dnsServiceIp"],
                defaultDnsZone: result.body.properties?.["defaultDnsZone"],
                fqdnZones: result.body.properties?.["fqdnZones"],
                logLevel: result.body.properties?.["logLevel"],
                status: result.body.properties?.["status"],
                provisioningState: result.body.properties?.["provisioningState"],
                revision: result.body.properties?.["revision"],
            },
    };
}
/** Create a WorkloadNetworkDnsService */
export function create(context, subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, workloadNetworkDnsService, options = {
    requestOptions: {},
}) {
    return getLongRunningPoller(context, _createDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _createSend(context, subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, workloadNetworkDnsService, options),
    });
}
export function _updateSend(context, subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, workloadNetworkDnsService, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}", subscriptionId, resourceGroupName, privateCloudName, dnsServiceId)
        .patch({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !workloadNetworkDnsService.properties
                ? workloadNetworkDnsService.properties
                : workloadNetworkDnsServicePropertiesSerializer(workloadNetworkDnsService.properties),
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
                dnsServiceIp: result.body.properties?.["dnsServiceIp"],
                defaultDnsZone: result.body.properties?.["defaultDnsZone"],
                fqdnZones: result.body.properties?.["fqdnZones"],
                logLevel: result.body.properties?.["logLevel"],
                status: result.body.properties?.["status"],
                provisioningState: result.body.properties?.["provisioningState"],
                revision: result.body.properties?.["revision"],
            },
    };
}
/** Update a WorkloadNetworkDnsService */
export function update(context, subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, workloadNetworkDnsService, options = {
    requestOptions: {},
}) {
    return getLongRunningPoller(context, _updateDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _updateSend(context, subscriptionId, resourceGroupName, privateCloudName, dnsServiceId, workloadNetworkDnsService, options),
    });
}
export function _$deleteSend(context, subscriptionId, resourceGroupName, dnsServiceId, privateCloudName, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}", subscriptionId, resourceGroupName, dnsServiceId, privateCloudName)
        .delete({ ...operationOptionsToRequestParameters(options) });
}
export async function _$deleteDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Delete a WorkloadNetworkDnsService */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(context, subscriptionId, resourceGroupName, dnsServiceId, privateCloudName, options = {
    requestOptions: {},
}) {
    return getLongRunningPoller(context, _$deleteDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _$deleteSend(context, subscriptionId, resourceGroupName, dnsServiceId, privateCloudName, options),
    });
}
//# sourceMappingURL=index.js.map