// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getLongRunningPoller } from "../pollingHelpers.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _listByPrivateCloudSend(context, subscriptionId, resourceGroupName, privateCloudName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters", subscriptionId, resourceGroupName, privateCloudName)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _listByPrivateCloudDeserialize(result) {
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
                    clusterSize: p.properties?.["clusterSize"],
                    provisioningState: p.properties?.["provisioningState"],
                    clusterId: p.properties?.["clusterId"],
                    hosts: p.properties?.["hosts"],
                    vsanDatastoreName: p.properties?.["vsanDatastoreName"],
                },
            sku: {
                name: p.sku["name"],
                tier: p.sku["tier"],
                size: p.sku["size"],
                family: p.sku["family"],
                capacity: p.sku["capacity"],
            },
        })),
        nextLink: result.body["nextLink"],
    };
}
/** List Cluster resources by PrivateCloud */
export function listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options = { requestOptions: {} }) {
    return buildPagedAsyncIterator(context, () => _listByPrivateCloudSend(context, subscriptionId, resourceGroupName, privateCloudName, options), _listByPrivateCloudDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _getSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}", subscriptionId, resourceGroupName, privateCloudName, clusterName)
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
                clusterSize: result.body.properties?.["clusterSize"],
                provisioningState: result.body.properties?.["provisioningState"],
                clusterId: result.body.properties?.["clusterId"],
                hosts: result.body.properties?.["hosts"],
                vsanDatastoreName: result.body.properties?.["vsanDatastoreName"],
            },
        sku: {
            name: result.body.sku["name"],
            tier: result.body.sku["tier"],
            size: result.body.sku["size"],
            family: result.body.sku["family"],
            capacity: result.body.sku["capacity"],
        },
    };
}
/** Get a Cluster */
export async function get(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options);
    return _getDeserialize(result);
}
export function _createOrUpdateSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, cluster, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}", subscriptionId, resourceGroupName, privateCloudName, clusterName)
        .put({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !cluster.properties
                ? undefined
                : {
                    clusterSize: cluster.properties?.["clusterSize"],
                    hosts: cluster.properties?.["hosts"],
                    vsanDatastoreName: cluster.properties?.["vsanDatastoreName"],
                },
            sku: {
                name: cluster.sku["name"],
                tier: cluster.sku["tier"],
                size: cluster.sku["size"],
                family: cluster.sku["family"],
                capacity: cluster.sku["capacity"],
            },
        },
    });
}
export async function _createOrUpdateDeserialize(result) {
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
                clusterSize: result.body.properties?.["clusterSize"],
                provisioningState: result.body.properties?.["provisioningState"],
                clusterId: result.body.properties?.["clusterId"],
                hosts: result.body.properties?.["hosts"],
                vsanDatastoreName: result.body.properties?.["vsanDatastoreName"],
            },
        sku: {
            name: result.body.sku["name"],
            tier: result.body.sku["tier"],
            size: result.body.sku["size"],
            family: result.body.sku["family"],
            capacity: result.body.sku["capacity"],
        },
    };
}
/** Create a Cluster */
export function createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, cluster, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _createOrUpdateDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _createOrUpdateSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, cluster, options),
    });
}
export function _updateSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, clusterUpdate, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}", subscriptionId, resourceGroupName, privateCloudName, clusterName)
        .patch({
        ...operationOptionsToRequestParameters(options),
        body: {
            sku: !clusterUpdate.sku
                ? undefined
                : {
                    name: clusterUpdate.sku?.["name"],
                    tier: clusterUpdate.sku?.["tier"],
                    size: clusterUpdate.sku?.["size"],
                    family: clusterUpdate.sku?.["family"],
                    capacity: clusterUpdate.sku?.["capacity"],
                },
            properties: !clusterUpdate.properties
                ? undefined
                : {
                    clusterSize: clusterUpdate.properties?.["clusterSize"],
                    hosts: clusterUpdate.properties?.["hosts"],
                },
        },
    });
}
export async function _updateDeserialize(result) {
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
                clusterSize: result.body.properties?.["clusterSize"],
                provisioningState: result.body.properties?.["provisioningState"],
                clusterId: result.body.properties?.["clusterId"],
                hosts: result.body.properties?.["hosts"],
                vsanDatastoreName: result.body.properties?.["vsanDatastoreName"],
            },
        sku: {
            name: result.body.sku["name"],
            tier: result.body.sku["tier"],
            size: result.body.sku["size"],
            family: result.body.sku["family"],
            capacity: result.body.sku["capacity"],
        },
    };
}
/** Update a Cluster */
export async function update(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, clusterUpdate, options = { requestOptions: {} }) {
    const result = await _updateSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, clusterUpdate, options);
    return _updateDeserialize(result);
}
export function _$deleteSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}", subscriptionId, resourceGroupName, privateCloudName, clusterName)
        .delete({ ...operationOptionsToRequestParameters(options) });
}
export async function _$deleteDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Delete a Cluster */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _$deleteDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _$deleteSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options),
    });
}
export function _listZonesSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/listZones", subscriptionId, resourceGroupName, privateCloudName, clusterName)
        .post({ ...operationOptionsToRequestParameters(options) });
}
export async function _listZonesDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        zones: result.body["zones"] === undefined
            ? result.body["zones"]
            : result.body["zones"].map((p) => ({
                hosts: p["hosts"],
                zone: p["zone"],
            })),
    };
}
/** List hosts by zone in a cluster */
export async function listZones(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options = { requestOptions: {} }) {
    const result = await _listZonesSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options);
    return _listZonesDeserialize(result);
}
//# sourceMappingURL=index.js.map