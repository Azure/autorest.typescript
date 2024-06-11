import { AVSContext } from "../../api/aVSContext.js";
import { GlobalReachConnection } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { GlobalReachConnectionsListByPrivateCloudOptionalParams, GlobalReachConnectionsGetOptionalParams, GlobalReachConnectionsCreateOrUpdateOptionalParams, GlobalReachConnectionsDeleteOptionalParams } from "../../models/options.js";
export interface GlobalReachConnectionsOperations {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: GlobalReachConnectionsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<GlobalReachConnection>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, options?: GlobalReachConnectionsGetOptionalParams) => Promise<GlobalReachConnection>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, globalReachConnection: GlobalReachConnection, options?: GlobalReachConnectionsCreateOrUpdateOptionalParams) => PollerLike<OperationState<GlobalReachConnection>, GlobalReachConnection>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, options?: GlobalReachConnectionsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getGlobalReachConnections(context: AVSContext): {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: GlobalReachConnectionsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<GlobalReachConnection, GlobalReachConnection[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, options?: GlobalReachConnectionsGetOptionalParams) => Promise<GlobalReachConnection>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, globalReachConnection: GlobalReachConnection, options?: GlobalReachConnectionsCreateOrUpdateOptionalParams) => PollerLike<OperationState<GlobalReachConnection>, GlobalReachConnection>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, options?: GlobalReachConnectionsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getGlobalReachConnectionsOperations(context: AVSContext): GlobalReachConnectionsOperations;
//# sourceMappingURL=index.d.ts.map