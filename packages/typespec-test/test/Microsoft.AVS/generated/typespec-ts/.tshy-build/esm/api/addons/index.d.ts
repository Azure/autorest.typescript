import { PollerLike, OperationState } from "@azure/core-lro";
import { AddonListResult, Addon } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, AddonsCreateOrUpdate200Response, AddonsCreateOrUpdate201Response, AddonsCreateOrUpdateDefaultResponse, AddonsCreateOrUpdateLogicalResponse, AddonsDelete200Response, AddonsDelete202Response, AddonsDelete204Response, AddonsDeleteDefaultResponse, AddonsDeleteLogicalResponse, AddonsGet200Response, AddonsGetDefaultResponse, AddonsListByPrivateCloud200Response, AddonsListByPrivateCloudDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { AddonsListByPrivateCloudOptionalParams, AddonsGetOptionalParams, AddonsCreateOrUpdateOptionalParams, AddonsDeleteOptionalParams } from "../../models/options.js";
export declare function _listByPrivateCloudSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: AddonsListByPrivateCloudOptionalParams): StreamableMethod<AddonsListByPrivateCloud200Response | AddonsListByPrivateCloudDefaultResponse>;
export declare function _listByPrivateCloudDeserialize(result: AddonsListByPrivateCloud200Response | AddonsListByPrivateCloudDefaultResponse): Promise<AddonListResult>;
/** List Addon resources by PrivateCloud */
export declare function listByPrivateCloud(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: AddonsListByPrivateCloudOptionalParams): PagedAsyncIterableIterator<Addon>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, addonName: string, options?: AddonsGetOptionalParams): StreamableMethod<AddonsGet200Response | AddonsGetDefaultResponse>;
export declare function _getDeserialize(result: AddonsGet200Response | AddonsGetDefaultResponse): Promise<Addon>;
/** Get a Addon */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, addonName: string, options?: AddonsGetOptionalParams): Promise<Addon>;
export declare function _createOrUpdateSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, addonName: string, addon: Addon, options?: AddonsCreateOrUpdateOptionalParams): StreamableMethod<AddonsCreateOrUpdate200Response | AddonsCreateOrUpdate201Response | AddonsCreateOrUpdateDefaultResponse | AddonsCreateOrUpdateLogicalResponse>;
export declare function _createOrUpdateDeserialize(result: AddonsCreateOrUpdate200Response | AddonsCreateOrUpdate201Response | AddonsCreateOrUpdateDefaultResponse | AddonsCreateOrUpdateLogicalResponse): Promise<Addon>;
/** Create a Addon */
export declare function createOrUpdate(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, addonName: string, addon: Addon, options?: AddonsCreateOrUpdateOptionalParams): PollerLike<OperationState<Addon>, Addon>;
export declare function _$deleteSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, addonName: string, options?: AddonsDeleteOptionalParams): StreamableMethod<AddonsDelete200Response | AddonsDelete202Response | AddonsDelete204Response | AddonsDeleteDefaultResponse | AddonsDeleteLogicalResponse>;
export declare function _$deleteDeserialize(result: AddonsDelete200Response | AddonsDelete202Response | AddonsDelete204Response | AddonsDeleteDefaultResponse | AddonsDeleteLogicalResponse): Promise<void>;
/** Delete a Addon */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export declare function $delete(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, addonName: string, options?: AddonsDeleteOptionalParams): PollerLike<OperationState<void>, void>;
//# sourceMappingURL=index.d.ts.map