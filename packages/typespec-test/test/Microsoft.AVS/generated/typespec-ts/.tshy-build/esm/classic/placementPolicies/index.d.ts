import { AVSContext } from "../../api/aVSContext.js";
import { PlacementPolicy, PlacementPolicyUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { PlacementPoliciesListByClusterOptionalParams, PlacementPoliciesGetOptionalParams, PlacementPoliciesCreateOrUpdateOptionalParams, PlacementPoliciesUpdateOptionalParams, PlacementPoliciesDeleteOptionalParams } from "../../models/options.js";
/** Interface representing a PlacementPolicies operations. */
export interface PlacementPoliciesOperations {
    /** List PlacementPolicy resources by Cluster */
    listByCluster: (resourceGroupName: string, privateCloudName: string, clusterName: string, options?: PlacementPoliciesListByClusterOptionalParams) => PagedAsyncIterableIterator<PlacementPolicy>;
    /** Get a PlacementPolicy */
    get: (resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, options?: PlacementPoliciesGetOptionalParams) => Promise<PlacementPolicy>;
    /** Create a PlacementPolicy */
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, placementPolicy: PlacementPolicy, options?: PlacementPoliciesCreateOrUpdateOptionalParams) => PollerLike<OperationState<PlacementPolicy>, PlacementPolicy>;
    /** Update a PlacementPolicy */
    update: (resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, placementPolicyUpdate: PlacementPolicyUpdate, options?: PlacementPoliciesUpdateOptionalParams) => Promise<PlacementPolicy>;
    /** Delete a PlacementPolicy */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, options?: PlacementPoliciesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getPlacementPolicies(context: AVSContext, subscriptionId: string): {
    listByCluster: (resourceGroupName: string, privateCloudName: string, clusterName: string, options?: PlacementPoliciesListByClusterOptionalParams) => PagedAsyncIterableIterator<PlacementPolicy, PlacementPolicy[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, options?: PlacementPoliciesGetOptionalParams) => Promise<PlacementPolicy>;
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, placementPolicy: PlacementPolicy, options?: PlacementPoliciesCreateOrUpdateOptionalParams) => PollerLike<OperationState<PlacementPolicy>, PlacementPolicy>;
    update: (resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, placementPolicyUpdate: PlacementPolicyUpdate, options?: PlacementPoliciesUpdateOptionalParams) => Promise<PlacementPolicy>;
    delete: (resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, options?: PlacementPoliciesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getPlacementPoliciesOperations(context: AVSContext, subscriptionId: string): PlacementPoliciesOperations;
//# sourceMappingURL=index.d.ts.map