// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByCluster, get, createOrUpdate, update, $delete, } from "../../api/placementPolicies/index.js";
export function getPlacementPolicies(context) {
    return {
        listByCluster: (subscriptionId, resourceGroupName, privateCloudName, clusterName, options) => listByCluster(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, placementPolicy, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, placementPolicy, options),
        update: (subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, placementPolicyUpdate, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, placementPolicyUpdate, options),
        delete: (subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, placementPolicyName, options),
    };
}
export function getPlacementPoliciesOperations(context) {
    return {
        ...getPlacementPolicies(context),
    };
}
//# sourceMappingURL=index.js.map