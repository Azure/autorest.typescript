// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getLongRunningPoller } from "../pollingHelpers.js";
import { workloadNetworkSegmentPropertiesSerializer, } from "../../models/models.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _listByWorkloadNetworkSend(context, subscriptionId, resourceGroupName, privateCloudName, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments", subscriptionId, resourceGroupName, privateCloudName)
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
                        connectedGateway: p.properties?.["connectedGateway"],
                        subnet: !p.properties?.subnet
                            ? undefined
                            : {
                                dhcpRanges: p.properties?.subnet?.["dhcpRanges"],
                                gatewayAddress: p.properties?.subnet?.["gatewayAddress"],
                            },
                        portVif: p.properties?.["portVif"] === undefined
                            ? p.properties?.["portVif"]
                            : p.properties?.["portVif"].map((p) => {
                                return { portName: p["portName"] };
                            }),
                        status: p.properties?.["status"],
                        provisioningState: p.properties?.["provisioningState"],
                        revision: p.properties?.["revision"],
                    },
            };
        }),
        nextLink: result.body["nextLink"],
    };
}
/** List WorkloadNetworkSegment resources by WorkloadNetwork */
export function listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options = {
    requestOptions: {},
}) {
    return buildPagedAsyncIterator(context, () => _listByWorkloadNetworkSend(context, subscriptionId, resourceGroupName, privateCloudName, options), _listByWorkloadNetworkDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _getSend(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}", subscriptionId, resourceGroupName, privateCloudName, segmentId)
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
                connectedGateway: result.body.properties?.["connectedGateway"],
                subnet: !result.body.properties?.subnet
                    ? undefined
                    : {
                        dhcpRanges: result.body.properties?.subnet?.["dhcpRanges"],
                        gatewayAddress: result.body.properties?.subnet?.["gatewayAddress"],
                    },
                portVif: result.body.properties?.["portVif"] === undefined
                    ? result.body.properties?.["portVif"]
                    : result.body.properties?.["portVif"].map((p) => {
                        return { portName: p["portName"] };
                    }),
                status: result.body.properties?.["status"],
                provisioningState: result.body.properties?.["provisioningState"],
                revision: result.body.properties?.["revision"],
            },
    };
}
/** Get a WorkloadNetworkSegment */
export async function get(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, options);
    return _getDeserialize(result);
}
export function _createSend(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, workloadNetworkSegment, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}", subscriptionId, resourceGroupName, privateCloudName, segmentId)
        .put({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !workloadNetworkSegment.properties
                ? workloadNetworkSegment.properties
                : workloadNetworkSegmentPropertiesSerializer(workloadNetworkSegment.properties),
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
                connectedGateway: result.body.properties?.["connectedGateway"],
                subnet: !result.body.properties?.subnet
                    ? undefined
                    : {
                        dhcpRanges: result.body.properties?.subnet?.["dhcpRanges"],
                        gatewayAddress: result.body.properties?.subnet?.["gatewayAddress"],
                    },
                portVif: result.body.properties?.["portVif"] === undefined
                    ? result.body.properties?.["portVif"]
                    : result.body.properties?.["portVif"].map((p) => {
                        return { portName: p["portName"] };
                    }),
                status: result.body.properties?.["status"],
                provisioningState: result.body.properties?.["provisioningState"],
                revision: result.body.properties?.["revision"],
            },
    };
}
/** Create a WorkloadNetworkSegment */
export function create(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, workloadNetworkSegment, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _createDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _createSend(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, workloadNetworkSegment, options),
    });
}
export function _updateSend(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, properties, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}", subscriptionId, resourceGroupName, privateCloudName, segmentId)
        .patch({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !properties.properties
                ? properties.properties
                : workloadNetworkSegmentPropertiesSerializer(properties.properties),
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
                connectedGateway: result.body.properties?.["connectedGateway"],
                subnet: !result.body.properties?.subnet
                    ? undefined
                    : {
                        dhcpRanges: result.body.properties?.subnet?.["dhcpRanges"],
                        gatewayAddress: result.body.properties?.subnet?.["gatewayAddress"],
                    },
                portVif: result.body.properties?.["portVif"] === undefined
                    ? result.body.properties?.["portVif"]
                    : result.body.properties?.["portVif"].map((p) => {
                        return { portName: p["portName"] };
                    }),
                status: result.body.properties?.["status"],
                provisioningState: result.body.properties?.["provisioningState"],
                revision: result.body.properties?.["revision"],
            },
    };
}
/** Update a WorkloadNetworkSegment */
export function update(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, properties, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _updateDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _updateSend(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, properties, options),
    });
}
export function _deleteSegmentSend(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}", subscriptionId, resourceGroupName, privateCloudName, segmentId)
        .delete({ ...operationOptionsToRequestParameters(options) });
}
export async function _deleteSegmentDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Delete a WorkloadNetworkSegment */
export function deleteSegment(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, options = {
    requestOptions: {},
}) {
    return getLongRunningPoller(context, _deleteSegmentDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _deleteSegmentSend(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, options),
    });
}
//# sourceMappingURL=index.js.map