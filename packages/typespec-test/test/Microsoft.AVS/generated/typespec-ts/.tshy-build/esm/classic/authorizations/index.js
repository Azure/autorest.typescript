// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, $delete, } from "../../api/authorizations/index.js";
export function getAuthorizations(context) {
    return {
        listByPrivateCloud: (subscriptionId, resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, authorizationName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, authorizationName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, privateCloudName, authorizationName, authorization, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, authorizationName, authorization, options),
        delete: (subscriptionId, resourceGroupName, privateCloudName, authorizationName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, authorizationName, options),
    };
}
export function getAuthorizationsOperations(context) {
    return {
        ...getAuthorizations(context),
    };
}
//# sourceMappingURL=index.js.map