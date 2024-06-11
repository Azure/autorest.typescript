// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByCluster, get, createOrUpdate, $delete, } from "../../api/datastores/index.js";
export function getDatastores(context) {
    return {
        listByCluster: (subscriptionId, resourceGroupName, privateCloudName, clusterName, options) => listByCluster(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, clusterName, datastoreName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, datastoreName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, privateCloudName, clusterName, datastoreName, datastore, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, datastoreName, datastore, options),
        delete: (subscriptionId, resourceGroupName, privateCloudName, clusterName, datastoreName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, datastoreName, options),
    };
}
export function getDatastoresOperations(context) {
    return {
        ...getDatastores(context),
    };
}
//# sourceMappingURL=index.js.map