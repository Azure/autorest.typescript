// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, $delete, } from "../../api/iscsiPaths/index.js";
export function getIscsiPaths(context) {
    return {
        listByPrivateCloud: (subscriptionId, resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, privateCloudName, resource, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, resource, options),
        delete: (subscriptionId, resourceGroupName, privateCloudName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, options),
    };
}
export function getIscsiPathsOperations(context) {
    return {
        ...getIscsiPaths(context),
    };
}
//# sourceMappingURL=index.js.map