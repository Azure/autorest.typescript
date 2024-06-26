// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, $delete, } from "../../api/addons/index.js";
export function getAddons(context) {
    return {
        listByPrivateCloud: (subscriptionId, resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, addonName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, addonName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, privateCloudName, addonName, addon, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, addonName, addon, options),
        delete: (subscriptionId, resourceGroupName, privateCloudName, addonName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, addonName, options),
    };
}
export function getAddonsOperations(context) {
    return {
        ...getAddons(context),
    };
}
//# sourceMappingURL=index.js.map