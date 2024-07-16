// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getLongRunningPoller } from "../pollingHelpers.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _listByClusterSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines", subscriptionId, resourceGroupName, privateCloudName, clusterName)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _listByClusterDeserialize(result) {
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
                        provisioningState: p.properties?.["provisioningState"],
                        displayName: p.properties?.["displayName"],
                        moRefId: p.properties?.["moRefId"],
                        folderPath: p.properties?.["folderPath"],
                        restrictMovement: p.properties?.["restrictMovement"],
                    },
            };
        }),
        nextLink: result.body["nextLink"],
    };
}
/** List VirtualMachine resources by Cluster */
export function listByCluster(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options = { requestOptions: {} }) {
    return buildPagedAsyncIterator(context, () => _listByClusterSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options), _listByClusterDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _getSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, virtualMachineId, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}", subscriptionId, resourceGroupName, privateCloudName, clusterName, virtualMachineId)
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
                provisioningState: result.body.properties?.["provisioningState"],
                displayName: result.body.properties?.["displayName"],
                moRefId: result.body.properties?.["moRefId"],
                folderPath: result.body.properties?.["folderPath"],
                restrictMovement: result.body.properties?.["restrictMovement"],
            },
    };
}
/** Get a VirtualMachine */
export async function get(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, virtualMachineId, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, virtualMachineId, options);
    return _getDeserialize(result);
}
export function _restrictMovementSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, virtualMachineId, restrictMovementParameter, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}/restrictMovement", subscriptionId, resourceGroupName, privateCloudName, clusterName, virtualMachineId)
        .post({
        ...operationOptionsToRequestParameters(options),
        body: { restrictMovement: restrictMovementParameter["restrictMovement"] },
    });
}
export async function _restrictMovementDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Enable or disable DRS-driven VM movement restriction */
export function restrictMovement(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, virtualMachineId, restrictMovementParameter, options = {
    requestOptions: {},
}) {
    return getLongRunningPoller(context, _restrictMovementDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _restrictMovementSend(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, virtualMachineId, restrictMovementParameter, options),
    });
}
//# sourceMappingURL=index.js.map