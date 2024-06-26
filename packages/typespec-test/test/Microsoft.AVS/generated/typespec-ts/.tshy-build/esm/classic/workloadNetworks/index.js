// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { get, listByPrivateCloud } from "../../api/workloadNetworks/index.js";
export function getWorkloadNetworks(context) {
    return {
        get: (subscriptionId, resourceGroupName, privateCloudName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, options),
        listByPrivateCloud: (subscriptionId, resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
    };
}
export function getWorkloadNetworksOperations(context) {
    return {
        ...getWorkloadNetworks(context),
    };
}
//# sourceMappingURL=index.js.map