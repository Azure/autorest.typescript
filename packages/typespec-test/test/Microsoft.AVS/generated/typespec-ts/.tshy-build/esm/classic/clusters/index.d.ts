import { AVSContext } from "../../api/aVSContext.js";
import { Cluster, ClusterUpdate, ClusterZoneList } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { ClustersListByPrivateCloudOptionalParams, ClustersGetOptionalParams, ClustersCreateOrUpdateOptionalParams, ClustersUpdateOptionalParams, ClustersDeleteOptionalParams, ClustersListZonesOptionalParams } from "../../models/options.js";
/** Interface representing a Clusters operations. */
export interface ClustersOperations {
    /** List Cluster resources by PrivateCloud */
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: ClustersListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<Cluster>;
    /** Get a Cluster */
    get: (resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersGetOptionalParams) => Promise<Cluster>;
    /** Create a Cluster */
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, clusterName: string, cluster: Cluster, options?: ClustersCreateOrUpdateOptionalParams) => PollerLike<OperationState<Cluster>, Cluster>;
    /** Update a Cluster */
    update: (resourceGroupName: string, privateCloudName: string, clusterName: string, clusterUpdate: ClusterUpdate, options?: ClustersUpdateOptionalParams) => Promise<Cluster>;
    /** Delete a Cluster */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    /** List hosts by zone in a cluster */
    listZones: (resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersListZonesOptionalParams) => Promise<ClusterZoneList>;
}
export declare function getClusters(context: AVSContext, subscriptionId: string): {
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: ClustersListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<Cluster, Cluster[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersGetOptionalParams) => Promise<Cluster>;
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, clusterName: string, cluster: Cluster, options?: ClustersCreateOrUpdateOptionalParams) => PollerLike<OperationState<Cluster>, Cluster>;
    update: (resourceGroupName: string, privateCloudName: string, clusterName: string, clusterUpdate: ClusterUpdate, options?: ClustersUpdateOptionalParams) => Promise<Cluster>;
    delete: (resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listZones: (resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersListZonesOptionalParams) => Promise<ClusterZoneList>;
};
export declare function getClustersOperations(context: AVSContext, subscriptionId: string): ClustersOperations;
//# sourceMappingURL=index.d.ts.map