// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, $delete, } from "../../api/hcxEnterpriseSites/index.js";
export function getHcxEnterpriseSites(context, subscriptionId) {
    return {
        listByPrivateCloud: (resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options),
        createOrUpdate: (resourceGroupName, privateCloudName, hcxEnterpriseSiteName, hcxEnterpriseSite, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, hcxEnterpriseSite, options),
        delete: (resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options),
    };
}
export function getHcxEnterpriseSitesOperations(context, subscriptionId) {
    return {
        ...getHcxEnterpriseSites(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map