// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, $delete, } from "../../api/cloudLinks/index.js";
export function getCloudLinks(context, subscriptionId) {
    return {
        listByPrivateCloud: (resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, cloudLinkName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, options),
        createOrUpdate: (resourceGroupName, privateCloudName, cloudLinkName, cloudLink, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, cloudLink, options),
        delete: (resourceGroupName, privateCloudName, cloudLinkName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, options),
    };
}
export function getCloudLinksOperations(context, subscriptionId) {
    return {
        ...getCloudLinks(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map