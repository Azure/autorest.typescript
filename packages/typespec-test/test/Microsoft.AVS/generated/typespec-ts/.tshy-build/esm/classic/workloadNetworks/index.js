// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { get, listByPrivateCloud } from "../../api/workloadNetworks/index.js";
export function getWorkloadNetworks(context, subscriptionId) {
    return {
        get: (resourceGroupName, privateCloudName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, options),
        listByPrivateCloud: (resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
    };
}
export function getWorkloadNetworksOperations(context, subscriptionId) {
    return {
        ...getWorkloadNetworks(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map