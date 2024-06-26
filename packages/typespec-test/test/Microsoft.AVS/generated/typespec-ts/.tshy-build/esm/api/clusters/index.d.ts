import { PollerLike, OperationState } from "@azure/core-lro";
import { ClusterListResult, Cluster, ClusterUpdate, ClusterZoneList } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, ClustersCreateOrUpdate200Response, ClustersCreateOrUpdate201Response, ClustersCreateOrUpdateDefaultResponse, ClustersCreateOrUpdateLogicalResponse, ClustersDelete200Response, ClustersDelete202Response, ClustersDelete204Response, ClustersDeleteDefaultResponse, ClustersDeleteLogicalResponse, ClustersGet200Response, ClustersGetDefaultResponse, ClustersListByPrivateCloud200Response, ClustersListByPrivateCloudDefaultResponse, ClustersListZones200Response, ClustersListZonesDefaultResponse, ClustersUpdate200Response, ClustersUpdate201Response, ClustersUpdateDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { ClustersListByPrivateCloudOptionalParams, ClustersGetOptionalParams, ClustersCreateOrUpdateOptionalParams, ClustersUpdateOptionalParams, ClustersDeleteOptionalParams, ClustersListZonesOptionalParams } from "../../models/options.js";
export declare function _listByPrivateCloudSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: ClustersListByPrivateCloudOptionalParams): StreamableMethod<ClustersListByPrivateCloud200Response | ClustersListByPrivateCloudDefaultResponse>;
export declare function _listByPrivateCloudDeserialize(result: ClustersListByPrivateCloud200Response | ClustersListByPrivateCloudDefaultResponse): Promise<ClusterListResult>;
/** List Cluster resources by PrivateCloud */
export declare function listByPrivateCloud(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: ClustersListByPrivateCloudOptionalParams): PagedAsyncIterableIterator<Cluster>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersGetOptionalParams): StreamableMethod<ClustersGet200Response | ClustersGetDefaultResponse>;
export declare function _getDeserialize(result: ClustersGet200Response | ClustersGetDefaultResponse): Promise<Cluster>;
/** Get a Cluster */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersGetOptionalParams): Promise<Cluster>;
export declare function _createOrUpdateSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, cluster: Cluster, options?: ClustersCreateOrUpdateOptionalParams): StreamableMethod<ClustersCreateOrUpdate200Response | ClustersCreateOrUpdate201Response | ClustersCreateOrUpdateDefaultResponse | ClustersCreateOrUpdateLogicalResponse>;
export declare function _createOrUpdateDeserialize(result: ClustersCreateOrUpdate200Response | ClustersCreateOrUpdate201Response | ClustersCreateOrUpdateDefaultResponse | ClustersCreateOrUpdateLogicalResponse): Promise<Cluster>;
/** Create a Cluster */
export declare function createOrUpdate(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, cluster: Cluster, options?: ClustersCreateOrUpdateOptionalParams): PollerLike<OperationState<Cluster>, Cluster>;
export declare function _updateSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, clusterUpdate: ClusterUpdate, options?: ClustersUpdateOptionalParams): StreamableMethod<ClustersUpdate200Response | ClustersUpdate201Response | ClustersUpdateDefaultResponse>;
export declare function _updateDeserialize(result: ClustersUpdate200Response | ClustersUpdate201Response | ClustersUpdateDefaultResponse): Promise<Cluster>;
/** Update a Cluster */
export declare function update(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, clusterUpdate: ClusterUpdate, options?: ClustersUpdateOptionalParams): Promise<Cluster>;
export declare function _$deleteSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersDeleteOptionalParams): StreamableMethod<ClustersDelete200Response | ClustersDelete202Response | ClustersDelete204Response | ClustersDeleteDefaultResponse | ClustersDeleteLogicalResponse>;
export declare function _$deleteDeserialize(result: ClustersDelete200Response | ClustersDelete202Response | ClustersDelete204Response | ClustersDeleteDefaultResponse | ClustersDeleteLogicalResponse): Promise<void>;
/** Delete a Cluster */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export declare function $delete(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersDeleteOptionalParams): PollerLike<OperationState<void>, void>;
export declare function _listZonesSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersListZonesOptionalParams): StreamableMethod<ClustersListZones200Response | ClustersListZonesDefaultResponse>;
export declare function _listZonesDeserialize(result: ClustersListZones200Response | ClustersListZonesDefaultResponse): Promise<ClusterZoneList>;
/** List hosts by zone in a cluster */
export declare function listZones(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: ClustersListZonesOptionalParams): Promise<ClusterZoneList>;
//# sourceMappingURL=index.d.ts.map