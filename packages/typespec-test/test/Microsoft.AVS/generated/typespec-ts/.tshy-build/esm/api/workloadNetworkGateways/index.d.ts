import { WorkloadNetworkGateway, _WorkloadNetworkGatewayList } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, WorkloadNetworkGatewaysGet200Response, WorkloadNetworkGatewaysGetDefaultResponse, WorkloadNetworkGatewaysListByWorkloadNetwork200Response, WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams, WorkloadNetworkGatewaysGetOptionalParams } from "../../models/options.js";
export declare function _listByWorkloadNetworkSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams): StreamableMethod<WorkloadNetworkGatewaysListByWorkloadNetwork200Response | WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse>;
export declare function _listByWorkloadNetworkDeserialize(result: WorkloadNetworkGatewaysListByWorkloadNetwork200Response | WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse): Promise<_WorkloadNetworkGatewayList>;
/** List WorkloadNetworkGateway resources by WorkloadNetwork */
export declare function listByWorkloadNetwork(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams): PagedAsyncIterableIterator<WorkloadNetworkGateway>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, gatewayId: string, options?: WorkloadNetworkGatewaysGetOptionalParams): StreamableMethod<WorkloadNetworkGatewaysGet200Response | WorkloadNetworkGatewaysGetDefaultResponse>;
export declare function _getDeserialize(result: WorkloadNetworkGatewaysGet200Response | WorkloadNetworkGatewaysGetDefaultResponse): Promise<WorkloadNetworkGateway>;
/** Get a WorkloadNetworkGateway */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, gatewayId: string, options?: WorkloadNetworkGatewaysGetOptionalParams): Promise<WorkloadNetworkGateway>;
//# sourceMappingURL=index.d.ts.map