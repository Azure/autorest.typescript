// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, $delete, } from "../../api/addons/index.js";
export function getAddons(context, subscriptionId) {
    return {
        listByPrivateCloud: (resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, addonName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, addonName, options),
        createOrUpdate: (resourceGroupName, privateCloudName, addonName, addon, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, addonName, addon, options),
        delete: (resourceGroupName, privateCloudName, addonName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, addonName, options),
    };
}
export function getAddonsOperations(context, subscriptionId) {
    return {
        ...getAddons(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map