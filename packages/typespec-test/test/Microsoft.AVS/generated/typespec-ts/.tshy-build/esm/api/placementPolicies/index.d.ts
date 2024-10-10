import { PollerLike, OperationState } from "@azure/core-lro";
import { PlacementPolicy, PlacementPolicyUpdate, _PlacementPoliciesList } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, PlacementPoliciesCreateOrUpdate200Response, PlacementPoliciesCreateOrUpdate201Response, PlacementPoliciesCreateOrUpdateDefaultResponse, PlacementPoliciesCreateOrUpdateLogicalResponse, PlacementPoliciesDelete200Response, PlacementPoliciesDelete202Response, PlacementPoliciesDelete204Response, PlacementPoliciesDeleteDefaultResponse, PlacementPoliciesDeleteLogicalResponse, PlacementPoliciesGet200Response, PlacementPoliciesGetDefaultResponse, PlacementPoliciesListByCluster200Response, PlacementPoliciesListByClusterDefaultResponse, PlacementPoliciesUpdate200Response, PlacementPoliciesUpdate202Response, PlacementPoliciesUpdateDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { PlacementPoliciesListByClusterOptionalParams, PlacementPoliciesGetOptionalParams, PlacementPoliciesCreateOrUpdateOptionalParams, PlacementPoliciesUpdateOptionalParams, PlacementPoliciesDeleteOptionalParams } from "../../models/options.js";
export declare function _listByClusterSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: PlacementPoliciesListByClusterOptionalParams): StreamableMethod<PlacementPoliciesListByCluster200Response | PlacementPoliciesListByClusterDefaultResponse>;
export declare function _listByClusterDeserialize(result: PlacementPoliciesListByCluster200Response | PlacementPoliciesListByClusterDefaultResponse): Promise<_PlacementPoliciesList>;
/** List PlacementPolicy resources by Cluster */
export declare function listByCluster(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: PlacementPoliciesListByClusterOptionalParams): PagedAsyncIterableIterator<PlacementPolicy>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, options?: PlacementPoliciesGetOptionalParams): StreamableMethod<PlacementPoliciesGet200Response | PlacementPoliciesGetDefaultResponse>;
export declare function _getDeserialize(result: PlacementPoliciesGet200Response | PlacementPoliciesGetDefaultResponse): Promise<PlacementPolicy>;
/** Get a PlacementPolicy */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, options?: PlacementPoliciesGetOptionalParams): Promise<PlacementPolicy>;
export declare function _createOrUpdateSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, placementPolicy: PlacementPolicy, options?: PlacementPoliciesCreateOrUpdateOptionalParams): StreamableMethod<PlacementPoliciesCreateOrUpdate200Response | PlacementPoliciesCreateOrUpdate201Response | PlacementPoliciesCreateOrUpdateDefaultResponse | PlacementPoliciesCreateOrUpdateLogicalResponse>;
export declare function _createOrUpdateDeserialize(result: PlacementPoliciesCreateOrUpdate200Response | PlacementPoliciesCreateOrUpdate201Response | PlacementPoliciesCreateOrUpdateDefaultResponse | PlacementPoliciesCreateOrUpdateLogicalResponse): Promise<PlacementPolicy>;
/** Create a PlacementPolicy */
export declare function createOrUpdate(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, placementPolicy: PlacementPolicy, options?: PlacementPoliciesCreateOrUpdateOptionalParams): PollerLike<OperationState<PlacementPolicy>, PlacementPolicy>;
export declare function _updateSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, placementPolicyUpdate: PlacementPolicyUpdate, options?: PlacementPoliciesUpdateOptionalParams): StreamableMethod<PlacementPoliciesUpdate200Response | PlacementPoliciesUpdate202Response | PlacementPoliciesUpdateDefaultResponse>;
export declare function _updateDeserialize(result: PlacementPoliciesUpdate200Response | PlacementPoliciesUpdate202Response | PlacementPoliciesUpdateDefaultResponse): Promise<PlacementPolicy>;
/** Update a PlacementPolicy */
export declare function update(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, placementPolicyUpdate: PlacementPolicyUpdate, options?: PlacementPoliciesUpdateOptionalParams): Promise<PlacementPolicy>;
export declare function _$deleteSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, options?: PlacementPoliciesDeleteOptionalParams): StreamableMethod<PlacementPoliciesDelete200Response | PlacementPoliciesDelete202Response | PlacementPoliciesDelete204Response | PlacementPoliciesDeleteDefaultResponse | PlacementPoliciesDeleteLogicalResponse>;
export declare function _$deleteDeserialize(result: PlacementPoliciesDelete200Response | PlacementPoliciesDelete202Response | PlacementPoliciesDelete204Response | PlacementPoliciesDeleteDefaultResponse | PlacementPoliciesDeleteLogicalResponse): Promise<void>;
/** Delete a PlacementPolicy */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export declare function $delete(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string, options?: PlacementPoliciesDeleteOptionalParams): PollerLike<OperationState<void>, void>;
//# sourceMappingURL=index.d.ts.map