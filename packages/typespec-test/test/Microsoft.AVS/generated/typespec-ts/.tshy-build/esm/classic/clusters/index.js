// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, update, $delete, listZones, } from "../../api/clusters/index.js";
export function getClusters(context) {
    return {
        listByPrivateCloud: (subscriptionId, resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, clusterName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, privateCloudName, clusterName, cluster, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, cluster, options),
        update: (subscriptionId, resourceGroupName, privateCloudName, clusterName, clusterUpdate, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, clusterUpdate, options),
        delete: (subscriptionId, resourceGroupName, privateCloudName, clusterName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options),
        listZones: (subscriptionId, resourceGroupName, privateCloudName, clusterName, options) => listZones(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options),
    };
}
export function getClustersOperations(context) {
    return {
        ...getClusters(context),
    };
}
//# sourceMappingURL=index.js.map