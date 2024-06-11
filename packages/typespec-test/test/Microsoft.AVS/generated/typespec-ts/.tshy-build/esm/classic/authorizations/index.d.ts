import { AVSContext } from "../../api/aVSContext.js";
import { ExpressRouteAuthorization } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { AuthorizationsListByPrivateCloudOptionalParams, AuthorizationsGetOptionalParams, AuthorizationsCreateOrUpdateOptionalParams, AuthorizationsDeleteOptionalParams } from "../../models/options.js";
export interface AuthorizationsOperations {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: AuthorizationsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<ExpressRouteAuthorization>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, authorizationName: string, options?: AuthorizationsGetOptionalParams) => Promise<ExpressRouteAuthorization>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, authorizationName: string, authorization: ExpressRouteAuthorization, options?: AuthorizationsCreateOrUpdateOptionalParams) => PollerLike<OperationState<ExpressRouteAuthorization>, ExpressRouteAuthorization>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, authorizationName: string, options?: AuthorizationsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getAuthorizations(context: AVSContext): {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: AuthorizationsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<ExpressRouteAuthorization, ExpressRouteAuthorization[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, authorizationName: string, options?: AuthorizationsGetOptionalParams) => Promise<ExpressRouteAuthorization>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, authorizationName: string, authorization: ExpressRouteAuthorization, options?: AuthorizationsCreateOrUpdateOptionalParams) => PollerLike<OperationState<ExpressRouteAuthorization>, ExpressRouteAuthorization>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, authorizationName: string, options?: AuthorizationsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getAuthorizationsOperations(context: AVSContext): AuthorizationsOperations;
//# sourceMappingURL=index.d.ts.map