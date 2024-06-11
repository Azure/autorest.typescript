import { AVSContext } from "../../api/aVSContext.js";
import { PlacementPolicy, PlacementPolicyUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { PlacementPoliciesListByClusterOptionalParams, PlacementPoliciesGetOptionalParams, PlacementPoliciesCreateOrUpdateOptionalParams, PlacementPoliciesUpdateOptionalParams, PlacementPoliciesDeleteOptionalParams } from "../../models/options.js";
export interface PlacementPoliciesOperations {
    listByCluster: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: PlacementPoliciesListByClusterOptionalParams) => PagedAsyncIterableIterator<PlacementPolicy>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, options?: PlacementPoliciesGetOptionalParams) => Promise<PlacementPolicy>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, placementPolicy: PlacementPolicy, options?: PlacementPoliciesCreateOrUpdateOptionalParams) => PollerLike<OperationState<PlacementPolicy>, PlacementPolicy>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, placementPolicyUpdate: PlacementPolicyUpdate, options?: PlacementPoliciesUpdateOptionalParams) => Promise<PlacementPolicy>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, options?: PlacementPoliciesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getPlacementPolicies(context: AVSContext): {
    listByCluster: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: PlacementPoliciesListByClusterOptionalParams) => PagedAsyncIterableIterator<PlacementPolicy, PlacementPolicy[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, options?: PlacementPoliciesGetOptionalParams) => Promise<PlacementPolicy>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, placementPolicy: PlacementPolicy, options?: PlacementPoliciesCreateOrUpdateOptionalParams) => PollerLike<OperationState<PlacementPolicy>, PlacementPolicy>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, placementPolicyUpdate: PlacementPolicyUpdate, options?: PlacementPoliciesUpdateOptionalParams) => Promise<PlacementPolicy>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, options?: PlacementPoliciesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getPlacementPoliciesOperations(context: AVSContext): PlacementPoliciesOperations;
//# sourceMappingURL=index.d.ts.map