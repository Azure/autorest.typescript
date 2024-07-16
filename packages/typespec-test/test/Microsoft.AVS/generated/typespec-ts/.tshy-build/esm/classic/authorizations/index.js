// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, $delete, } from "../../api/authorizations/index.js";
export function getAuthorizations(context, subscriptionId) {
    return {
        listByPrivateCloud: (resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, authorizationName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, authorizationName, options),
        createOrUpdate: (resourceGroupName, privateCloudName, authorizationName, authorization, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, authorizationName, authorization, options),
        delete: (resourceGroupName, privateCloudName, authorizationName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, authorizationName, options),
    };
}
export function getAuthorizationsOperations(context, subscriptionId) {
    return {
        ...getAuthorizations(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map