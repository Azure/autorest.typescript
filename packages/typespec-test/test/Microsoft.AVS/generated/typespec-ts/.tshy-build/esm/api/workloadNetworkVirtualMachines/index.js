// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _listByWorkloadNetworkSend(context, subscriptionId, resourceGroupName, privateCloudName, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines", subscriptionId, resourceGroupName, privateCloudName)
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
                    provisioningState: p.properties?.["provisioningState"],
                    displayName: p.properties?.["displayName"],
                    vmType: p.properties?.["vmType"],
                },
        })),
        nextLink: result.body["nextLink"],
    };
}
/** List WorkloadNetworkVirtualMachine resources by WorkloadNetwork */
export function listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options = {
    requestOptions: {},
}) {
    return buildPagedAsyncIterator(context, () => _listByWorkloadNetworkSend(context, subscriptionId, resourceGroupName, privateCloudName, options), _listByWorkloadNetworkDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _getSend(context, subscriptionId, resourceGroupName, privateCloudName, virtualMachineId, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines/{virtualMachineId}", subscriptionId, resourceGroupName, privateCloudName, virtualMachineId)
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
                vmType: result.body.properties?.["vmType"],
            },
    };
}
/** Get a WorkloadNetworkVirtualMachine */
export async function get(context, subscriptionId, resourceGroupName, privateCloudName, virtualMachineId, options = {
    requestOptions: {},
}) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, privateCloudName, virtualMachineId, options);
    return _getDeserialize(result);
}
//# sourceMappingURL=index.js.map