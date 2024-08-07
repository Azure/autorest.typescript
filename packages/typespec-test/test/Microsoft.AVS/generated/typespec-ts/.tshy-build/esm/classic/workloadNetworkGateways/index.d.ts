import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkGateway } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams, WorkloadNetworkGatewaysGetOptionalParams } from "../../models/options.js";
/** Interface representing a WorkloadNetworkGateways operations. */
export interface WorkloadNetworkGatewaysOperations {
    /** List WorkloadNetworkGateway resources by WorkloadNetwork */
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkGateway>;
    /** Get a WorkloadNetworkGateway */
    get: (resourceGroupName: string, privateCloudName: string, gatewayId: string, options?: WorkloadNetworkGatewaysGetOptionalParams) => Promise<WorkloadNetworkGateway>;
}
export declare function getWorkloadNetworkGateways(context: AVSContext, subscriptionId: string): {
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkGateway, WorkloadNetworkGateway[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, gatewayId: string, options?: WorkloadNetworkGatewaysGetOptionalParams) => Promise<WorkloadNetworkGateway>;
};
export declare function getWorkloadNetworkGatewaysOperations(context: AVSContext, subscriptionId: string): WorkloadNetworkGatewaysOperations;
//# sourceMappingURL=index.d.ts.map