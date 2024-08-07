// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getLongRunningPoller } from "../pollingHelpers.js";
import { addonPropertiesUnionSerializer, } from "../../models/models.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _listByPrivateCloudSend(context, subscriptionId, resourceGroupName, privateCloudName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons", subscriptionId, resourceGroupName, privateCloudName)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _listByPrivateCloudDeserialize(result) {
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
                        addonType: p.properties?.["addonType"],
                        provisioningState: p.properties?.["provisioningState"],
                    },
            };
        }),
        nextLink: result.body["nextLink"],
    };
}
/** List Addon resources by PrivateCloud */
export function listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options = { requestOptions: {} }) {
    return buildPagedAsyncIterator(context, () => _listByPrivateCloudSend(context, subscriptionId, resourceGroupName, privateCloudName, options), _listByPrivateCloudDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _getSend(context, subscriptionId, resourceGroupName, privateCloudName, addonName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}", subscriptionId, resourceGroupName, privateCloudName, addonName)
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
                addonType: result.body.properties?.["addonType"],
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Get a Addon */
export async function get(context, subscriptionId, resourceGroupName, privateCloudName, addonName, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, privateCloudName, addonName, options);
    return _getDeserialize(result);
}
export function _createOrUpdateSend(context, subscriptionId, resourceGroupName, privateCloudName, addonName, addon, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}", subscriptionId, resourceGroupName, privateCloudName, addonName)
        .put({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !addon.properties
                ? addon.properties
                : addonPropertiesUnionSerializer(addon.properties),
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
                addonType: result.body.properties?.["addonType"],
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Create a Addon */
export function createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, addonName, addon, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _createOrUpdateDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _createOrUpdateSend(context, subscriptionId, resourceGroupName, privateCloudName, addonName, addon, options),
    });
}
export function _$deleteSend(context, subscriptionId, resourceGroupName, privateCloudName, addonName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}", subscriptionId, resourceGroupName, privateCloudName, addonName)
        .delete({ ...operationOptionsToRequestParameters(options) });
}
export async function _$deleteDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Delete a Addon */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(context, subscriptionId, resourceGroupName, privateCloudName, addonName, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _$deleteDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _$deleteSend(context, subscriptionId, resourceGroupName, privateCloudName, addonName, options),
    });
}
//# sourceMappingURL=index.js.map