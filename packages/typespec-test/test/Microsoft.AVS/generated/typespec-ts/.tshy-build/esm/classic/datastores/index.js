// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByCluster, get, createOrUpdate, $delete, } from "../../api/datastores/index.js";
export function getDatastores(context, subscriptionId) {
    return {
        listByCluster: (resourceGroupName, privateCloudName, clusterName, options) => listByCluster(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options),
        get: (resourceGroupName, privateCloudName, clusterName, datastoreName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, datastoreName, options),
        createOrUpdate: (resourceGroupName, privateCloudName, clusterName, datastoreName, datastore, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, datastoreName, datastore, options),
        delete: (resourceGroupName, privateCloudName, clusterName, datastoreName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, datastoreName, options),
    };
}
export function getDatastoresOperations(context, subscriptionId) {
    return {
        ...getDatastores(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map