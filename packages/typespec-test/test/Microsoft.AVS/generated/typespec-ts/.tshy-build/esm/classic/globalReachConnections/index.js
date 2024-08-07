// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, $delete, } from "../../api/globalReachConnections/index.js";
export function getGlobalReachConnections(context, subscriptionId) {
    return {
        listByPrivateCloud: (resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, globalReachConnectionName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, globalReachConnectionName, options),
        createOrUpdate: (resourceGroupName, privateCloudName, globalReachConnectionName, globalReachConnection, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, globalReachConnectionName, globalReachConnection, options),
        delete: (resourceGroupName, privateCloudName, globalReachConnectionName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, globalReachConnectionName, options),
    };
}
export function getGlobalReachConnectionsOperations(context, subscriptionId) {
    return {
        ...getGlobalReachConnections(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map