import { PollerLike, OperationState } from "@azure/core-lro";
import { GlobalReachConnectionListResult, GlobalReachConnection } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, GlobalReachConnectionsCreateOrUpdate200Response, GlobalReachConnectionsCreateOrUpdate201Response, GlobalReachConnectionsCreateOrUpdateDefaultResponse, GlobalReachConnectionsCreateOrUpdateLogicalResponse, GlobalReachConnectionsDelete200Response, GlobalReachConnectionsDelete202Response, GlobalReachConnectionsDelete204Response, GlobalReachConnectionsDeleteDefaultResponse, GlobalReachConnectionsDeleteLogicalResponse, GlobalReachConnectionsGet200Response, GlobalReachConnectionsGetDefaultResponse, GlobalReachConnectionsListByPrivateCloud200Response, GlobalReachConnectionsListByPrivateCloudDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { GlobalReachConnectionsListByPrivateCloudOptionalParams, GlobalReachConnectionsGetOptionalParams, GlobalReachConnectionsCreateOrUpdateOptionalParams, GlobalReachConnectionsDeleteOptionalParams } from "../../models/options.js";
export declare function _listByPrivateCloudSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: GlobalReachConnectionsListByPrivateCloudOptionalParams): StreamableMethod<GlobalReachConnectionsListByPrivateCloud200Response | GlobalReachConnectionsListByPrivateCloudDefaultResponse>;
export declare function _listByPrivateCloudDeserialize(result: GlobalReachConnectionsListByPrivateCloud200Response | GlobalReachConnectionsListByPrivateCloudDefaultResponse): Promise<GlobalReachConnectionListResult>;
/** List GlobalReachConnection resources by PrivateCloud */
export declare function listByPrivateCloud(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: GlobalReachConnectionsListByPrivateCloudOptionalParams): PagedAsyncIterableIterator<GlobalReachConnection>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, options?: GlobalReachConnectionsGetOptionalParams): StreamableMethod<GlobalReachConnectionsGet200Response | GlobalReachConnectionsGetDefaultResponse>;
export declare function _getDeserialize(result: GlobalReachConnectionsGet200Response | GlobalReachConnectionsGetDefaultResponse): Promise<GlobalReachConnection>;
/** Get a GlobalReachConnection */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, options?: GlobalReachConnectionsGetOptionalParams): Promise<GlobalReachConnection>;
export declare function _createOrUpdateSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, globalReachConnection: GlobalReachConnection, options?: GlobalReachConnectionsCreateOrUpdateOptionalParams): StreamableMethod<GlobalReachConnectionsCreateOrUpdate200Response | GlobalReachConnectionsCreateOrUpdate201Response | GlobalReachConnectionsCreateOrUpdateDefaultResponse | GlobalReachConnectionsCreateOrUpdateLogicalResponse>;
export declare function _createOrUpdateDeserialize(result: GlobalReachConnectionsCreateOrUpdate200Response | GlobalReachConnectionsCreateOrUpdate201Response | GlobalReachConnectionsCreateOrUpdateDefaultResponse | GlobalReachConnectionsCreateOrUpdateLogicalResponse): Promise<GlobalReachConnection>;
/** Create a GlobalReachConnection */
export declare function createOrUpdate(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, globalReachConnection: GlobalReachConnection, options?: GlobalReachConnectionsCreateOrUpdateOptionalParams): PollerLike<OperationState<GlobalReachConnection>, GlobalReachConnection>;
export declare function _$deleteSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, options?: GlobalReachConnectionsDeleteOptionalParams): StreamableMethod<GlobalReachConnectionsDelete200Response | GlobalReachConnectionsDelete202Response | GlobalReachConnectionsDelete204Response | GlobalReachConnectionsDeleteDefaultResponse | GlobalReachConnectionsDeleteLogicalResponse>;
export declare function _$deleteDeserialize(result: GlobalReachConnectionsDelete200Response | GlobalReachConnectionsDelete202Response | GlobalReachConnectionsDelete204Response | GlobalReachConnectionsDeleteDefaultResponse | GlobalReachConnectionsDeleteLogicalResponse): Promise<void>;
/** Delete a GlobalReachConnection */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export declare function $delete(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string, options?: GlobalReachConnectionsDeleteOptionalParams): PollerLike<OperationState<void>, void>;
//# sourceMappingURL=index.d.ts.map