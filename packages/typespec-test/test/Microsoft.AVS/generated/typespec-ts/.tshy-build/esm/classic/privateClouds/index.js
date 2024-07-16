// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByResourceGroup, listInSubscription, get, createOrUpdate, update, $delete, rotateVcenterPassword, rotateNsxtPassword, listAdminCredentials, } from "../../api/privateClouds/index.js";
export function getPrivateClouds(context, subscriptionId) {
    return {
        listByResourceGroup: (resourceGroupName, options) => listByResourceGroup(context, subscriptionId, resourceGroupName, options),
        listInSubscription: (options) => listInSubscription(context, subscriptionId, options),
        get: (resourceGroupName, privateCloudName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, options),
        createOrUpdate: (resourceGroupName, privateCloudName, privateCloud, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, privateCloud, options),
        update: (resourceGroupName, privateCloudName, privateCloudUpdate, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, privateCloudUpdate, options),
        delete: (resourceGroupName, privateCloudName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, options),
        rotateVcenterPassword: (resourceGroupName, privateCloudName, options) => rotateVcenterPassword(context, subscriptionId, resourceGroupName, privateCloudName, options),
        rotateNsxtPassword: (resourceGroupName, privateCloudName, options) => rotateNsxtPassword(context, subscriptionId, resourceGroupName, privateCloudName, options),
        listAdminCredentials: (resourceGroupName, privateCloudName, options) => listAdminCredentials(context, subscriptionId, resourceGroupName, privateCloudName, options),
    };
}
export function getPrivateCloudsOperations(context, subscriptionId) {
    return {
        ...getPrivateClouds(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map