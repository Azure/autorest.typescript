import { AVSContext } from "../../api/aVSContext.js";
import { Datastore } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { DatastoresListByClusterOptionalParams, DatastoresGetOptionalParams, DatastoresCreateOrUpdateOptionalParams, DatastoresDeleteOptionalParams } from "../../models/options.js";
/** Interface representing a Datastores operations. */
export interface DatastoresOperations {
    /** List Datastore resources by Cluster */
    listByCluster: (resourceGroupName: string, privateCloudName: string, clusterName: string, options?: DatastoresListByClusterOptionalParams) => PagedAsyncIterableIterator<Datastore>;
    /** Get a Datastore */
    get: (resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, options?: DatastoresGetOptionalParams) => Promise<Datastore>;
    /** Create a Datastore */
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, datastore: Datastore, options?: DatastoresCreateOrUpdateOptionalParams) => PollerLike<OperationState<Datastore>, Datastore>;
    /** Delete a Datastore */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, options?: DatastoresDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getDatastores(context: AVSContext, subscriptionId: string): {
    listByCluster: (resourceGroupName: string, privateCloudName: string, clusterName: string, options?: DatastoresListByClusterOptionalParams) => PagedAsyncIterableIterator<Datastore, Datastore[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, options?: DatastoresGetOptionalParams) => Promise<Datastore>;
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, datastore: Datastore, options?: DatastoresCreateOrUpdateOptionalParams) => PollerLike<OperationState<Datastore>, Datastore>;
    delete: (resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string, options?: DatastoresDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getDatastoresOperations(context: AVSContext, subscriptionId: string): DatastoresOperations;
//# sourceMappingURL=index.d.ts.map