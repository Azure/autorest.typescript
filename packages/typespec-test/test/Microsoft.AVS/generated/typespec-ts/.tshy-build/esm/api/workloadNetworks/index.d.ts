import { WorkloadNetwork, WorkloadNetworkListResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, WorkloadNetworksGet200Response, WorkloadNetworksGetDefaultResponse, WorkloadNetworksListByPrivateCloud200Response, WorkloadNetworksListByPrivateCloudDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { WorkloadNetworksGetOptionalParams, WorkloadNetworksListByPrivateCloudOptionalParams } from "../../models/options.js";
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworksGetOptionalParams): StreamableMethod<WorkloadNetworksGet200Response | WorkloadNetworksGetDefaultResponse>;
export declare function _getDeserialize(result: WorkloadNetworksGet200Response | WorkloadNetworksGetDefaultResponse): Promise<WorkloadNetwork>;
/** Get a WorkloadNetwork */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworksGetOptionalParams): Promise<WorkloadNetwork>;
export declare function _listByPrivateCloudSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworksListByPrivateCloudOptionalParams): StreamableMethod<WorkloadNetworksListByPrivateCloud200Response | WorkloadNetworksListByPrivateCloudDefaultResponse>;
export declare function _listByPrivateCloudDeserialize(result: WorkloadNetworksListByPrivateCloud200Response | WorkloadNetworksListByPrivateCloudDefaultResponse): Promise<WorkloadNetworkListResult>;
/** List WorkloadNetwork resources by PrivateCloud */
export declare function listByPrivateCloud(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworksListByPrivateCloudOptionalParams): PagedAsyncIterableIterator<WorkloadNetwork>;
//# sourceMappingURL=index.d.ts.map