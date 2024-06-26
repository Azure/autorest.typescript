import { PollerLike, OperationState } from "@azure/core-lro";
import { ExpressRouteAuthorizationListResult, ExpressRouteAuthorization } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, AuthorizationsCreateOrUpdate200Response, AuthorizationsCreateOrUpdate201Response, AuthorizationsCreateOrUpdateDefaultResponse, AuthorizationsCreateOrUpdateLogicalResponse, AuthorizationsDelete200Response, AuthorizationsDelete202Response, AuthorizationsDelete204Response, AuthorizationsDeleteDefaultResponse, AuthorizationsDeleteLogicalResponse, AuthorizationsGet200Response, AuthorizationsGetDefaultResponse, AuthorizationsListByPrivateCloud200Response, AuthorizationsListByPrivateCloudDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { AuthorizationsListByPrivateCloudOptionalParams, AuthorizationsGetOptionalParams, AuthorizationsCreateOrUpdateOptionalParams, AuthorizationsDeleteOptionalParams } from "../../models/options.js";
export declare function _listByPrivateCloudSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: AuthorizationsListByPrivateCloudOptionalParams): StreamableMethod<AuthorizationsListByPrivateCloud200Response | AuthorizationsListByPrivateCloudDefaultResponse>;
export declare function _listByPrivateCloudDeserialize(result: AuthorizationsListByPrivateCloud200Response | AuthorizationsListByPrivateCloudDefaultResponse): Promise<ExpressRouteAuthorizationListResult>;
/** List ExpressRouteAuthorization resources by PrivateCloud */
export declare function listByPrivateCloud(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: AuthorizationsListByPrivateCloudOptionalParams): PagedAsyncIterableIterator<ExpressRouteAuthorization>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, authorizationName: string, options?: AuthorizationsGetOptionalParams): StreamableMethod<AuthorizationsGet200Response | AuthorizationsGetDefaultResponse>;
export declare function _getDeserialize(result: AuthorizationsGet200Response | AuthorizationsGetDefaultResponse): Promise<ExpressRouteAuthorization>;
/** Get a ExpressRouteAuthorization */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, authorizationName: string, options?: AuthorizationsGetOptionalParams): Promise<ExpressRouteAuthorization>;
export declare function _createOrUpdateSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, authorizationName: string, authorization: ExpressRouteAuthorization, options?: AuthorizationsCreateOrUpdateOptionalParams): StreamableMethod<AuthorizationsCreateOrUpdate200Response | AuthorizationsCreateOrUpdate201Response | AuthorizationsCreateOrUpdateDefaultResponse | AuthorizationsCreateOrUpdateLogicalResponse>;
export declare function _createOrUpdateDeserialize(result: AuthorizationsCreateOrUpdate200Response | AuthorizationsCreateOrUpdate201Response | AuthorizationsCreateOrUpdateDefaultResponse | AuthorizationsCreateOrUpdateLogicalResponse): Promise<ExpressRouteAuthorization>;
/** Create a ExpressRouteAuthorization */
export declare function createOrUpdate(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, authorizationName: string, authorization: ExpressRouteAuthorization, options?: AuthorizationsCreateOrUpdateOptionalParams): PollerLike<OperationState<ExpressRouteAuthorization>, ExpressRouteAuthorization>;
export declare function _$deleteSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, authorizationName: string, options?: AuthorizationsDeleteOptionalParams): StreamableMethod<AuthorizationsDelete200Response | AuthorizationsDelete202Response | AuthorizationsDelete204Response | AuthorizationsDeleteDefaultResponse | AuthorizationsDeleteLogicalResponse>;
export declare function _$deleteDeserialize(result: AuthorizationsDelete200Response | AuthorizationsDelete202Response | AuthorizationsDelete204Response | AuthorizationsDeleteDefaultResponse | AuthorizationsDeleteLogicalResponse): Promise<void>;
/** Delete a ExpressRouteAuthorization */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export declare function $delete(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, authorizationName: string, options?: AuthorizationsDeleteOptionalParams): PollerLike<OperationState<void>, void>;
//# sourceMappingURL=index.d.ts.map