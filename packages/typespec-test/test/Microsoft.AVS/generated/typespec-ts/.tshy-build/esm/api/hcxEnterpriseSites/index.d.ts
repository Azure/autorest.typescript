import { HcxEnterpriseSiteListResult, HcxEnterpriseSite } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, HcxEnterpriseSitesCreateOrUpdate200Response, HcxEnterpriseSitesCreateOrUpdate201Response, HcxEnterpriseSitesCreateOrUpdateDefaultResponse, HcxEnterpriseSitesDelete200Response, HcxEnterpriseSitesDelete204Response, HcxEnterpriseSitesDeleteDefaultResponse, HcxEnterpriseSitesGet200Response, HcxEnterpriseSitesGetDefaultResponse, HcxEnterpriseSitesListByPrivateCloud200Response, HcxEnterpriseSitesListByPrivateCloudDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { HcxEnterpriseSitesListByPrivateCloudOptionalParams, HcxEnterpriseSitesGetOptionalParams, HcxEnterpriseSitesCreateOrUpdateOptionalParams, HcxEnterpriseSitesDeleteOptionalParams } from "../../models/options.js";
export declare function _listByPrivateCloudSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: HcxEnterpriseSitesListByPrivateCloudOptionalParams): StreamableMethod<HcxEnterpriseSitesListByPrivateCloud200Response | HcxEnterpriseSitesListByPrivateCloudDefaultResponse>;
export declare function _listByPrivateCloudDeserialize(result: HcxEnterpriseSitesListByPrivateCloud200Response | HcxEnterpriseSitesListByPrivateCloudDefaultResponse): Promise<HcxEnterpriseSiteListResult>;
/** List HcxEnterpriseSite resources by PrivateCloud */
export declare function listByPrivateCloud(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: HcxEnterpriseSitesListByPrivateCloudOptionalParams): PagedAsyncIterableIterator<HcxEnterpriseSite>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: HcxEnterpriseSitesGetOptionalParams): StreamableMethod<HcxEnterpriseSitesGet200Response | HcxEnterpriseSitesGetDefaultResponse>;
export declare function _getDeserialize(result: HcxEnterpriseSitesGet200Response | HcxEnterpriseSitesGetDefaultResponse): Promise<HcxEnterpriseSite>;
/** Get a HcxEnterpriseSite */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: HcxEnterpriseSitesGetOptionalParams): Promise<HcxEnterpriseSite>;
export declare function _createOrUpdateSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, hcxEnterpriseSite: HcxEnterpriseSite, options?: HcxEnterpriseSitesCreateOrUpdateOptionalParams): StreamableMethod<HcxEnterpriseSitesCreateOrUpdate200Response | HcxEnterpriseSitesCreateOrUpdate201Response | HcxEnterpriseSitesCreateOrUpdateDefaultResponse>;
export declare function _createOrUpdateDeserialize(result: HcxEnterpriseSitesCreateOrUpdate200Response | HcxEnterpriseSitesCreateOrUpdate201Response | HcxEnterpriseSitesCreateOrUpdateDefaultResponse): Promise<HcxEnterpriseSite>;
/** Create a HcxEnterpriseSite */
export declare function createOrUpdate(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, hcxEnterpriseSite: HcxEnterpriseSite, options?: HcxEnterpriseSitesCreateOrUpdateOptionalParams): Promise<HcxEnterpriseSite>;
export declare function _$deleteSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: HcxEnterpriseSitesDeleteOptionalParams): StreamableMethod<HcxEnterpriseSitesDelete200Response | HcxEnterpriseSitesDelete204Response | HcxEnterpriseSitesDeleteDefaultResponse>;
export declare function _$deleteDeserialize(result: HcxEnterpriseSitesDelete200Response | HcxEnterpriseSitesDelete204Response | HcxEnterpriseSitesDeleteDefaultResponse): Promise<void>;
/** Delete a HcxEnterpriseSite */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export declare function $delete(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: HcxEnterpriseSitesDeleteOptionalParams): Promise<void>;
//# sourceMappingURL=index.d.ts.map