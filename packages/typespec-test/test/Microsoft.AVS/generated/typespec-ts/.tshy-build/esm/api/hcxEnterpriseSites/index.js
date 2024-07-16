// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { hcxEnterpriseSitePropertiesSerializer, } from "../../models/models.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _listByPrivateCloudSend(context, subscriptionId, resourceGroupName, privateCloudName, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites", subscriptionId, resourceGroupName, privateCloudName)
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
                        provisioningState: p.properties?.["provisioningState"],
                        activationKey: p.properties?.["activationKey"],
                        status: p.properties?.["status"],
                    },
            };
        }),
        nextLink: result.body["nextLink"],
    };
}
/** List HcxEnterpriseSite resources by PrivateCloud */
export function listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options = {
    requestOptions: {},
}) {
    return buildPagedAsyncIterator(context, () => _listByPrivateCloudSend(context, subscriptionId, resourceGroupName, privateCloudName, options), _listByPrivateCloudDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _getSend(context, subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}", subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName)
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
                activationKey: result.body.properties?.["activationKey"],
                status: result.body.properties?.["status"],
            },
    };
}
/** Get a HcxEnterpriseSite */
export async function get(context, subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options);
    return _getDeserialize(result);
}
export function _createOrUpdateSend(context, subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, hcxEnterpriseSite, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}", subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName)
        .put({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !hcxEnterpriseSite.properties
                ? hcxEnterpriseSite.properties
                : hcxEnterpriseSitePropertiesSerializer(hcxEnterpriseSite.properties),
        },
    });
}
export async function _createOrUpdateDeserialize(result) {
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
                activationKey: result.body.properties?.["activationKey"],
                status: result.body.properties?.["status"],
            },
    };
}
/** Create a HcxEnterpriseSite */
export async function createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, hcxEnterpriseSite, options = {
    requestOptions: {},
}) {
    const result = await _createOrUpdateSend(context, subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, hcxEnterpriseSite, options);
    return _createOrUpdateDeserialize(result);
}
export function _$deleteSend(context, subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}", subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName)
        .delete({ ...operationOptionsToRequestParameters(options) });
}
export async function _$deleteDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return;
}
/** Delete a HcxEnterpriseSite */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(context, subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options = { requestOptions: {} }) {
    const result = await _$deleteSend(context, subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options);
    return _$deleteDeserialize(result);
}
//# sourceMappingURL=index.js.map