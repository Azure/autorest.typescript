import { AVSContext } from "../../api/aVSContext.js";
import { Cluster, ClusterUpdate, ClusterZoneList } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { ClustersListByPrivateCloudOptionalParams, ClustersGetOptionalParams, ClustersCreateOrUpdateOptionalParams, ClustersUpdateOptionalParams, ClustersDeleteOptionalParams, ClustersListZonesOptionalParams } from "../../models/options.js";
export interface ClustersOperations {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: ClustersListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<Cluster>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersGetOptionalParams) => Promise<Cluster>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, cluster: Cluster, options?: ClustersCreateOrUpdateOptionalParams) => PollerLike<OperationState<Cluster>, Cluster>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, clusterUpdate: ClusterUpdate, options?: ClustersUpdateOptionalParams) => Promise<Cluster>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listZones: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersListZonesOptionalParams) => Promise<ClusterZoneList>;
}
export declare function getClusters(context: AVSContext): {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: ClustersListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<Cluster, Cluster[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersGetOptionalParams) => Promise<Cluster>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, cluster: Cluster, options?: ClustersCreateOrUpdateOptionalParams) => PollerLike<OperationState<Cluster>, Cluster>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, clusterUpdate: ClusterUpdate, options?: ClustersUpdateOptionalParams) => Promise<Cluster>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listZones: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersListZonesOptionalParams) => Promise<ClusterZoneList>;
};
export declare function getClustersOperations(context: AVSContext): ClustersOperations;
//# sourceMappingURL=index.d.ts.map