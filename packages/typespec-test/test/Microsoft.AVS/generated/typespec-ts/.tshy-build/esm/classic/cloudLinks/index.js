// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, $delete, } from "../../api/cloudLinks/index.js";
export function getCloudLinks(context) {
    return {
        listByPrivateCloud: (subscriptionId, resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, cloudLink, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, cloudLink, options),
        delete: (subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, options),
    };
}
export function getCloudLinksOperations(context) {
    return {
        ...getCloudLinks(context),
    };
}
//# sourceMappingURL=index.js.map