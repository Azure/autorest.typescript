// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, $delete, } from "../../api/iscsiPaths/index.js";
export function getIscsiPaths(context, subscriptionId) {
    return {
        listByPrivateCloud: (resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, options),
        createOrUpdate: (resourceGroupName, privateCloudName, resource, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, resource, options),
        delete: (resourceGroupName, privateCloudName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, options),
    };
}
export function getIscsiPathsOperations(context, subscriptionId) {
    return {
        ...getIscsiPaths(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map