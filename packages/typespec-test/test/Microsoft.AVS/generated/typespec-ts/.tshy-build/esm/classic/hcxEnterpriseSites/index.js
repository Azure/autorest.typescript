// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, $delete, } from "../../api/hcxEnterpriseSites/index.js";
export function getHcxEnterpriseSites(context) {
    return {
        listByPrivateCloud: (subscriptionId, resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, hcxEnterpriseSite, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, hcxEnterpriseSite, options),
        delete: (subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, hcxEnterpriseSiteName, options),
    };
}
export function getHcxEnterpriseSitesOperations(context) {
    return {
        ...getHcxEnterpriseSites(context),
    };
}
//# sourceMappingURL=index.js.map