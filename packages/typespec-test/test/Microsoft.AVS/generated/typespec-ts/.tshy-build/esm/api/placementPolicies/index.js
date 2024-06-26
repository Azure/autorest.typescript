// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getLongRunningPoller } from "../pollingHelpers.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _listByClusterSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies", subscriptionId, resourceGroupName, privateCloudName, clusterName)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _listByClusterDeserialize(result) {
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
                    type: p.properties?.["type"],
                    state: p.properties?.["state"],
                    displayName: p.properties?.["displayName"],
                    provisioningState: p.properties?.["provisioningState"],
                },
        })),
        nextLink: result.body["nextLink"],
    };
}
/** List PlacementPolicy resources by Cluster */
export function listByCluster(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options = {
    requestOptions: {},
}) {
    return buildPagedAsyncIterator(context, () => _listByClusterSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options), _listByClusterDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _getSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}", subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName)
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
                type: result.body.properties?.["type"],
                state: result.body.properties?.["state"],
                displayName: result.body.properties?.["displayName"],
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Get a PlacementPolicy */
export async function get(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, options);
    return _getDeserialize(result);
}
export function _createOrUpdateSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, placementPolicy, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}", subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName)
        .put({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !placementPolicy.properties
                ? undefined
                : {
                    type: placementPolicy.properties?.["type"],
                    state: placementPolicy.properties?.["state"],
                    displayName: placementPolicy.properties?.["displayName"],
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
                type: result.body.properties?.["type"],
                state: result.body.properties?.["state"],
                displayName: result.body.properties?.["displayName"],
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Create a PlacementPolicy */
export function createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, placementPolicy, options = {
    requestOptions: {},
}) {
    return getLongRunningPoller(context, _createOrUpdateDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _createOrUpdateSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, placementPolicy, options),
    });
}
export function _updateSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, placementPolicyUpdate, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}", subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName)
        .patch({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !placementPolicyUpdate.properties
                ? undefined
                : {
                    state: placementPolicyUpdate.properties?.["state"],
                    vmMembers: placementPolicyUpdate.properties?.["vmMembers"],
                    hostMembers: placementPolicyUpdate.properties?.["hostMembers"],
                    affinityStrength: placementPolicyUpdate.properties?.["affinityStrength"],
                    azureHybridBenefitType: placementPolicyUpdate.properties?.["azureHybridBenefitType"],
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
                type: result.body.properties?.["type"],
                state: result.body.properties?.["state"],
                displayName: result.body.properties?.["displayName"],
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Update a PlacementPolicy */
export async function update(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, placementPolicyUpdate, options = { requestOptions: {} }) {
    const result = await _updateSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, placementPolicyUpdate, options);
    return _updateDeserialize(result);
}
export function _$deleteSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}", subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName)
        .delete({ ...operationOptionsToRequestParameters(options) });
}
export async function _$deleteDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Delete a PlacementPolicy */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _$deleteDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _$deleteSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, options),
    });
}
//# sourceMappingURL=index.js.map