import { AVSContext } from "../../api/aVSContext.js";
import { Datastore } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { DatastoresListByClusterOptionalParams, DatastoresGetOptionalParams, DatastoresCreateOrUpdateOptionalParams, DatastoresDeleteOptionalParams } from "../../models/options.js";
export interface DatastoresOperations {
    listByCluster: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: DatastoresListByClusterOptionalParams) => PagedAsyncIterableIterator<Datastore>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, options?: DatastoresGetOptionalParams) => Promise<Datastore>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, datastore: Datastore, options?: DatastoresCreateOrUpdateOptionalParams) => PollerLike<OperationState<Datastore>, Datastore>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, options?: DatastoresDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getDatastores(context: AVSContext): {
    listByCluster: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: DatastoresListByClusterOptionalParams) => PagedAsyncIterableIterator<Datastore, Datastore[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, options?: DatastoresGetOptionalParams) => Promise<Datastore>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, datastore: Datastore, options?: DatastoresCreateOrUpdateOptionalParams) => PollerLike<OperationState<Datastore>, Datastore>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, options?: DatastoresDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getDatastoresOperations(context: AVSContext): DatastoresOperations;
//# sourceMappingURL=index.d.ts.map