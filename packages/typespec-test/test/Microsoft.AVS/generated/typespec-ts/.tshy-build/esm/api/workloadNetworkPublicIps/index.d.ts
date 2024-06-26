import { PollerLike, OperationState } from "@azure/core-lro";
import { WorkloadNetworkPublicIPListResult, WorkloadNetworkPublicIP } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, WorkloadNetworkPublicIpsCreate200Response, WorkloadNetworkPublicIpsCreate201Response, WorkloadNetworkPublicIpsCreateDefaultResponse, WorkloadNetworkPublicIpsCreateLogicalResponse, WorkloadNetworkPublicIpsDelete200Response, WorkloadNetworkPublicIpsDelete202Response, WorkloadNetworkPublicIpsDelete204Response, WorkloadNetworkPublicIpsDeleteDefaultResponse, WorkloadNetworkPublicIpsDeleteLogicalResponse, WorkloadNetworkPublicIpsGet200Response, WorkloadNetworkPublicIpsGetDefaultResponse, WorkloadNetworkPublicIpsListByWorkloadNetwork200Response, WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams, WorkloadNetworkPublicIpsGetOptionalParams, WorkloadNetworkPublicIpsCreateOptionalParams, WorkloadNetworkPublicIpsDeleteOptionalParams } from "../../models/options.js";
export declare function _listByWorkloadNetworkSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams): StreamableMethod<WorkloadNetworkPublicIpsListByWorkloadNetwork200Response | WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse>;
export declare function _listByWorkloadNetworkDeserialize(result: WorkloadNetworkPublicIpsListByWorkloadNetwork200Response | WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse): Promise<WorkloadNetworkPublicIPListResult>;
/** List WorkloadNetworkPublicIP resources by WorkloadNetwork */
export declare function listByWorkloadNetwork(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams): PagedAsyncIterableIterator<WorkloadNetworkPublicIP>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, publicIPId: string, options?: WorkloadNetworkPublicIpsGetOptionalParams): StreamableMethod<WorkloadNetworkPublicIpsGet200Response | WorkloadNetworkPublicIpsGetDefaultResponse>;
export declare function _getDeserialize(result: WorkloadNetworkPublicIpsGet200Response | WorkloadNetworkPublicIpsGetDefaultResponse): Promise<WorkloadNetworkPublicIP>;
/** Get a WorkloadNetworkPublicIP */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, publicIPId: string, options?: WorkloadNetworkPublicIpsGetOptionalParams): Promise<WorkloadNetworkPublicIP>;
export declare function _createSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, publicIPId: string, workloadNetworkPublicIP: WorkloadNetworkPublicIP, options?: WorkloadNetworkPublicIpsCreateOptionalParams): StreamableMethod<WorkloadNetworkPublicIpsCreate200Response | WorkloadNetworkPublicIpsCreate201Response | WorkloadNetworkPublicIpsCreateDefaultResponse | WorkloadNetworkPublicIpsCreateLogicalResponse>;
export declare function _createDeserialize(result: WorkloadNetworkPublicIpsCreate200Response | WorkloadNetworkPublicIpsCreate201Response | WorkloadNetworkPublicIpsCreateDefaultResponse | WorkloadNetworkPublicIpsCreateLogicalResponse): Promise<WorkloadNetworkPublicIP>;
/** Create a WorkloadNetworkPublicIP */
export declare function create(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, publicIPId: string, workloadNetworkPublicIP: WorkloadNetworkPublicIP, options?: WorkloadNetworkPublicIpsCreateOptionalParams): PollerLike<OperationState<WorkloadNetworkPublicIP>, WorkloadNetworkPublicIP>;
export declare function _$deleteSend(context: Client, subscriptionId: string, resourceGroupName: string, publicIPId: string, privateCloudName: string, options?: WorkloadNetworkPublicIpsDeleteOptionalParams): StreamableMethod<WorkloadNetworkPublicIpsDelete200Response | WorkloadNetworkPublicIpsDelete202Response | WorkloadNetworkPublicIpsDelete204Response | WorkloadNetworkPublicIpsDeleteDefaultResponse | WorkloadNetworkPublicIpsDeleteLogicalResponse>;
export declare function _$deleteDeserialize(result: WorkloadNetworkPublicIpsDelete200Response | WorkloadNetworkPublicIpsDelete202Response | WorkloadNetworkPublicIpsDelete204Response | WorkloadNetworkPublicIpsDeleteDefaultResponse | WorkloadNetworkPublicIpsDeleteLogicalResponse): Promise<void>;
/** Delete a WorkloadNetworkPublicIP */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export declare function $delete(context: Client, subscriptionId: string, resourceGroupName: string, publicIPId: string, privateCloudName: string, options?: WorkloadNetworkPublicIpsDeleteOptionalParams): PollerLike<OperationState<void>, void>;
//# sourceMappingURL=index.d.ts.map