import { PollerLike, OperationState } from "@azure/core-lro";
import { CloudLinkListResult, CloudLink } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, CloudLinksCreateOrUpdate200Response, CloudLinksCreateOrUpdate201Response, CloudLinksCreateOrUpdateDefaultResponse, CloudLinksCreateOrUpdateLogicalResponse, CloudLinksDelete200Response, CloudLinksDelete202Response, CloudLinksDelete204Response, CloudLinksDeleteDefaultResponse, CloudLinksDeleteLogicalResponse, CloudLinksGet200Response, CloudLinksGetDefaultResponse, CloudLinksListByPrivateCloud200Response, CloudLinksListByPrivateCloudDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { CloudLinksListByPrivateCloudOptionalParams, CloudLinksGetOptionalParams, CloudLinksCreateOrUpdateOptionalParams, CloudLinksDeleteOptionalParams } from "../../models/options.js";
export declare function _listByPrivateCloudSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: CloudLinksListByPrivateCloudOptionalParams): StreamableMethod<CloudLinksListByPrivateCloud200Response | CloudLinksListByPrivateCloudDefaultResponse>;
export declare function _listByPrivateCloudDeserialize(result: CloudLinksListByPrivateCloud200Response | CloudLinksListByPrivateCloudDefaultResponse): Promise<CloudLinkListResult>;
/** List CloudLink resources by PrivateCloud */
export declare function listByPrivateCloud(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: CloudLinksListByPrivateCloudOptionalParams): PagedAsyncIterableIterator<CloudLink>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, cloudLinkName: string, options?: CloudLinksGetOptionalParams): StreamableMethod<CloudLinksGet200Response | CloudLinksGetDefaultResponse>;
export declare function _getDeserialize(result: CloudLinksGet200Response | CloudLinksGetDefaultResponse): Promise<CloudLink>;
/** Get a CloudLink */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, cloudLinkName: string, options?: CloudLinksGetOptionalParams): Promise<CloudLink>;
export declare function _createOrUpdateSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, cloudLinkName: string, cloudLink: CloudLink, options?: CloudLinksCreateOrUpdateOptionalParams): StreamableMethod<CloudLinksCreateOrUpdate200Response | CloudLinksCreateOrUpdate201Response | CloudLinksCreateOrUpdateDefaultResponse | CloudLinksCreateOrUpdateLogicalResponse>;
export declare function _createOrUpdateDeserialize(result: CloudLinksCreateOrUpdate200Response | CloudLinksCreateOrUpdate201Response | CloudLinksCreateOrUpdateDefaultResponse | CloudLinksCreateOrUpdateLogicalResponse): Promise<CloudLink>;
/** Create a CloudLink */
export declare function createOrUpdate(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, cloudLinkName: string, cloudLink: CloudLink, options?: CloudLinksCreateOrUpdateOptionalParams): PollerLike<OperationState<CloudLink>, CloudLink>;
export declare function _$deleteSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, cloudLinkName: string, options?: CloudLinksDeleteOptionalParams): StreamableMethod<CloudLinksDelete200Response | CloudLinksDelete202Response | CloudLinksDelete204Response | CloudLinksDeleteDefaultResponse | CloudLinksDeleteLogicalResponse>;
export declare function _$deleteDeserialize(result: CloudLinksDelete200Response | CloudLinksDelete202Response | CloudLinksDelete204Response | CloudLinksDeleteDefaultResponse | CloudLinksDeleteLogicalResponse): Promise<void>;
/** Delete a CloudLink */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export declare function $delete(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, cloudLinkName: string, options?: CloudLinksDeleteOptionalParams): PollerLike<OperationState<void>, void>;
//# sourceMappingURL=index.d.ts.map