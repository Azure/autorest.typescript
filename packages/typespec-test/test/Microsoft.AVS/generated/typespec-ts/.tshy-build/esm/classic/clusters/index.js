// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, update, $delete, listZones, } from "../../api/clusters/index.js";
export function getClusters(context, subscriptionId) {
    return {
        listByPrivateCloud: (resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, clusterName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options),
        createOrUpdate: (resourceGroupName, privateCloudName, clusterName, cluster, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, cluster, options),
        update: (resourceGroupName, privateCloudName, clusterName, clusterUpdate, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, clusterUpdate, options),
        delete: (resourceGroupName, privateCloudName, clusterName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options),
        listZones: (resourceGroupName, privateCloudName, clusterName, options) => listZones(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options),
    };
}
export function getClustersOperations(context, subscriptionId) {
    return {
        ...getClusters(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map