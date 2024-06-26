import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkGateway } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams, WorkloadNetworkGatewaysGetOptionalParams } from "../../models/options.js";
export interface WorkloadNetworkGatewaysOperations {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkGateway>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, gatewayId: string, options?: WorkloadNetworkGatewaysGetOptionalParams) => Promise<WorkloadNetworkGateway>;
}
export declare function getWorkloadNetworkGateways(context: AVSContext): {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkGateway, WorkloadNetworkGateway[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, gatewayId: string, options?: WorkloadNetworkGatewaysGetOptionalParams) => Promise<WorkloadNetworkGateway>;
};
export declare function getWorkloadNetworkGatewaysOperations(context: AVSContext): WorkloadNetworkGatewaysOperations;
//# sourceMappingURL=index.d.ts.map