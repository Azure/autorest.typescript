import { AVSContext } from "../../api/aVSContext.js";
import { GlobalReachConnection } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { GlobalReachConnectionsListByPrivateCloudOptionalParams, GlobalReachConnectionsGetOptionalParams, GlobalReachConnectionsCreateOrUpdateOptionalParams, GlobalReachConnectionsDeleteOptionalParams } from "../../models/options.js";
/** Interface representing a GlobalReachConnections operations. */
export interface GlobalReachConnectionsOperations {
    /** List GlobalReachConnection resources by PrivateCloud */
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: GlobalReachConnectionsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<GlobalReachConnection>;
    /** Get a GlobalReachConnection */
    get: (resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, options?: GlobalReachConnectionsGetOptionalParams) => Promise<GlobalReachConnection>;
    /** Create a GlobalReachConnection */
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, globalReachConnection: GlobalReachConnection, options?: GlobalReachConnectionsCreateOrUpdateOptionalParams) => PollerLike<OperationState<GlobalReachConnection>, GlobalReachConnection>;
    /** Delete a GlobalReachConnection */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, options?: GlobalReachConnectionsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getGlobalReachConnections(context: AVSContext, subscriptionId: string): {
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: GlobalReachConnectionsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<GlobalReachConnection, GlobalReachConnection[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, options?: GlobalReachConnectionsGetOptionalParams) => Promise<GlobalReachConnection>;
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, globalReachConnection: GlobalReachConnection, options?: GlobalReachConnectionsCreateOrUpdateOptionalParams) => PollerLike<OperationState<GlobalReachConnection>, GlobalReachConnection>;
    delete: (resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, options?: GlobalReachConnectionsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getGlobalReachConnectionsOperations(context: AVSContext, subscriptionId: string): GlobalReachConnectionsOperations;
//# sourceMappingURL=index.d.ts.map