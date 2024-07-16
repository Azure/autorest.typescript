// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByCluster, get, createOrUpdate, update, $delete, } from "../../api/placementPolicies/index.js";
export function getPlacementPolicies(context, subscriptionId) {
    return {
        listByCluster: (resourceGroupName, privateCloudName, clusterName, options) => listByCluster(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options),
        get: (resourceGroupName, privateCloudName, clusterName, placementPolicyName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, options),
        createOrUpdate: (resourceGroupName, privateCloudName, clusterName, placementPolicyName, placementPolicy, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, placementPolicy, options),
        update: (resourceGroupName, privateCloudName, clusterName, placementPolicyName, placementPolicyUpdate, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, placementPolicyUpdate, options),
        delete: (resourceGroupName, privateCloudName, clusterName, placementPolicyName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, options),
    };
}
export function getPlacementPoliciesOperations(context, subscriptionId) {
    return {
        ...getPlacementPolicies(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map