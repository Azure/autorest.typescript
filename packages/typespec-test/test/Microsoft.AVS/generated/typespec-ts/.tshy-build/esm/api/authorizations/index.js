// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getLongRunningPoller } from "../pollingHelpers.js";
import { expressRouteAuthorizationPropertiesSerializer, } from "../../models/models.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _listByPrivateCloudSend(context, subscriptionId, resourceGroupName, privateCloudName, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations", subscriptionId, resourceGroupName, privateCloudName)
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
                        expressRouteAuthorizationId: p.properties?.["expressRouteAuthorizationId"],
                        expressRouteAuthorizationKey: p.properties?.["expressRouteAuthorizationKey"],
                        expressRouteId: p.properties?.["expressRouteId"],
                    },
            };
        }),
        nextLink: result.body["nextLink"],
    };
}
/** List ExpressRouteAuthorization resources by PrivateCloud */
export function listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options = {
    requestOptions: {},
}) {
    return buildPagedAsyncIterator(context, () => _listByPrivateCloudSend(context, subscriptionId, resourceGroupName, privateCloudName, options), _listByPrivateCloudDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _getSend(context, subscriptionId, resourceGroupName, privateCloudName, authorizationName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}", subscriptionId, resourceGroupName, privateCloudName, authorizationName)
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
                expressRouteAuthorizationId: result.body.properties?.["expressRouteAuthorizationId"],
                expressRouteAuthorizationKey: result.body.properties?.["expressRouteAuthorizationKey"],
                expressRouteId: result.body.properties?.["expressRouteId"],
            },
    };
}
/** Get a ExpressRouteAuthorization */
export async function get(context, subscriptionId, resourceGroupName, privateCloudName, authorizationName, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, privateCloudName, authorizationName, options);
    return _getDeserialize(result);
}
export function _createOrUpdateSend(context, subscriptionId, resourceGroupName, privateCloudName, authorizationName, authorization, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}", subscriptionId, resourceGroupName, privateCloudName, authorizationName)
        .put({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !authorization.properties
                ? authorization.properties
                : expressRouteAuthorizationPropertiesSerializer(authorization.properties),
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
                provisioningState: result.body.properties?.["provisioningState"],
                expressRouteAuthorizationId: result.body.properties?.["expressRouteAuthorizationId"],
                expressRouteAuthorizationKey: result.body.properties?.["expressRouteAuthorizationKey"],
                expressRouteId: result.body.properties?.["expressRouteId"],
            },
    };
}
/** Create a ExpressRouteAuthorization */
export function createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, authorizationName, authorization, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _createOrUpdateDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _createOrUpdateSend(context, subscriptionId, resourceGroupName, privateCloudName, authorizationName, authorization, options),
    });
}
export function _$deleteSend(context, subscriptionId, resourceGroupName, privateCloudName, authorizationName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}", subscriptionId, resourceGroupName, privateCloudName, authorizationName)
        .delete({ ...operationOptionsToRequestParameters(options) });
}
export async function _$deleteDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Delete a ExpressRouteAuthorization */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(context, subscriptionId, resourceGroupName, privateCloudName, authorizationName, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _$deleteDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _$deleteSend(context, subscriptionId, resourceGroupName, privateCloudName, authorizationName, options),
    });
}
//# sourceMappingURL=index.js.map