import { PollerLike, OperationState } from "@azure/core-lro";
import { IscsiPathListResult, IscsiPath } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, IscsiPathsCreateOrUpdate200Response, IscsiPathsCreateOrUpdate201Response, IscsiPathsCreateOrUpdateDefaultResponse, IscsiPathsCreateOrUpdateLogicalResponse, IscsiPathsDelete200Response, IscsiPathsDelete202Response, IscsiPathsDelete204Response, IscsiPathsDeleteDefaultResponse, IscsiPathsDeleteLogicalResponse, IscsiPathsGet200Response, IscsiPathsGetDefaultResponse, IscsiPathsListByPrivateCloud200Response, IscsiPathsListByPrivateCloudDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { IscsiPathsListByPrivateCloudOptionalParams, IscsiPathsGetOptionalParams, IscsiPathsCreateOrUpdateOptionalParams, IscsiPathsDeleteOptionalParams } from "../../models/options.js";
export declare function _listByPrivateCloudSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: IscsiPathsListByPrivateCloudOptionalParams): StreamableMethod<IscsiPathsListByPrivateCloud200Response | IscsiPathsListByPrivateCloudDefaultResponse>;
export declare function _listByPrivateCloudDeserialize(result: IscsiPathsListByPrivateCloud200Response | IscsiPathsListByPrivateCloudDefaultResponse): Promise<IscsiPathListResult>;
/** List IscsiPath resources by PrivateCloud */
export declare function listByPrivateCloud(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: IscsiPathsListByPrivateCloudOptionalParams): PagedAsyncIterableIterator<IscsiPath>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: IscsiPathsGetOptionalParams): StreamableMethod<IscsiPathsGet200Response | IscsiPathsGetDefaultResponse>;
export declare function _getDeserialize(result: IscsiPathsGet200Response | IscsiPathsGetDefaultResponse): Promise<IscsiPath>;
/** Get a IscsiPath */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: IscsiPathsGetOptionalParams): Promise<IscsiPath>;
export declare function _createOrUpdateSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, resource: IscsiPath, options?: IscsiPathsCreateOrUpdateOptionalParams): StreamableMethod<IscsiPathsCreateOrUpdate200Response | IscsiPathsCreateOrUpdate201Response | IscsiPathsCreateOrUpdateDefaultResponse | IscsiPathsCreateOrUpdateLogicalResponse>;
export declare function _createOrUpdateDeserialize(result: IscsiPathsCreateOrUpdate200Response | IscsiPathsCreateOrUpdate201Response | IscsiPathsCreateOrUpdateDefaultResponse | IscsiPathsCreateOrUpdateLogicalResponse): Promise<IscsiPath>;
/** Create a IscsiPath */
export declare function createOrUpdate(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, resource: IscsiPath, options?: IscsiPathsCreateOrUpdateOptionalParams): PollerLike<OperationState<IscsiPath>, IscsiPath>;
export declare function _$deleteSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: IscsiPathsDeleteOptionalParams): StreamableMethod<IscsiPathsDelete200Response | IscsiPathsDelete202Response | IscsiPathsDelete204Response | IscsiPathsDeleteDefaultResponse | IscsiPathsDeleteLogicalResponse>;
export declare function _$deleteDeserialize(result: IscsiPathsDelete200Response | IscsiPathsDelete202Response | IscsiPathsDelete204Response | IscsiPathsDeleteDefaultResponse | IscsiPathsDeleteLogicalResponse): Promise<void>;
/** Delete a IscsiPath */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export declare function $delete(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: IscsiPathsDeleteOptionalParams): PollerLike<OperationState<void>, void>;
//# sourceMappingURL=index.d.ts.map