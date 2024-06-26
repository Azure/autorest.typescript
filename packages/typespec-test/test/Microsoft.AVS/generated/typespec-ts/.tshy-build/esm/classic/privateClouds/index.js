// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByResourceGroup, listInSubscription, get, createOrUpdate, update, $delete, rotateVcenterPassword, rotateNsxtPassword, listAdminCredentials, } from "../../api/privateClouds/index.js";
export function getPrivateClouds(context) {
    return {
        listByResourceGroup: (subscriptionId, resourceGroupName, options) => listByResourceGroup(context, subscriptionId, resourceGroupName, options),
        listInSubscription: (subscriptionId, options) => listInSubscription(context, subscriptionId, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, privateCloudName, privateCloud, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, privateCloud, options),
        update: (subscriptionId, resourceGroupName, privateCloudName, privateCloudUpdate, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, privateCloudUpdate, options),
        delete: (subscriptionId, resourceGroupName, privateCloudName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, options),
        rotateVcenterPassword: (subscriptionId, resourceGroupName, privateCloudName, options) => rotateVcenterPassword(context, subscriptionId, resourceGroupName, privateCloudName, options),
        rotateNsxtPassword: (subscriptionId, resourceGroupName, privateCloudName, options) => rotateNsxtPassword(context, subscriptionId, resourceGroupName, privateCloudName, options),
        listAdminCredentials: (subscriptionId, resourceGroupName, privateCloudName, options) => listAdminCredentials(context, subscriptionId, resourceGroupName, privateCloudName, options),
    };
}
export function getPrivateCloudsOperations(context) {
    return {
        ...getPrivateClouds(context),
    };
}
//# sourceMappingURL=index.js.map