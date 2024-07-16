// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _listByScriptPackageSend(context, subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets", subscriptionId, resourceGroupName, privateCloudName, scriptPackageName)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _listByScriptPackageDeserialize(result) {
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
                        description: p.properties?.["description"],
                        timeout: p.properties?.["timeout"],
                        audience: p.properties?.["audience"],
                        parameters: p.properties?.["parameters"] === undefined
                            ? p.properties?.["parameters"]
                            : p.properties?.["parameters"].map((p) => {
                                return {
                                    type: p["type"],
                                    name: p["name"],
                                    description: p["description"],
                                    visibility: p["visibility"],
                                    optional: p["optional"],
                                };
                            }),
                    },
            };
        }),
        nextLink: result.body["nextLink"],
    };
}
/** List ScriptCmdlet resources by ScriptPackage */
export function listByScriptPackage(context, subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, options = {
    requestOptions: {},
}) {
    return buildPagedAsyncIterator(context, () => _listByScriptPackageSend(context, subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, options), _listByScriptPackageDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _getSend(context, subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, scriptCmdletName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets/{scriptCmdletName}", subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, scriptCmdletName)
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
                description: result.body.properties?.["description"],
                timeout: result.body.properties?.["timeout"],
                audience: result.body.properties?.["audience"],
                parameters: result.body.properties?.["parameters"] === undefined
                    ? result.body.properties?.["parameters"]
                    : result.body.properties?.["parameters"].map((p) => {
                        return {
                            type: p["type"],
                            name: p["name"],
                            description: p["description"],
                            visibility: p["visibility"],
                            optional: p["optional"],
                        };
                    }),
            },
    };
}
/** Get a ScriptCmdlet */
export async function get(context, subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, scriptCmdletName, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, scriptCmdletName, options);
    return _getDeserialize(result);
}
//# sourceMappingURL=index.js.map