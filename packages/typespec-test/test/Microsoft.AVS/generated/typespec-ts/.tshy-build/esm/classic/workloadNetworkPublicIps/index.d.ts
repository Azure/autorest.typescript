import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkPublicIP } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams, WorkloadNetworkPublicIpsGetOptionalParams, WorkloadNetworkPublicIpsCreateOptionalParams, WorkloadNetworkPublicIpsDeleteOptionalParams } from "../../models/options.js";
export interface WorkloadNetworkPublicIpsOperations {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkPublicIP>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, publicIPId: string, options?: WorkloadNetworkPublicIpsGetOptionalParams) => Promise<WorkloadNetworkPublicIP>;
    create: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, publicIPId: string, workloadNetworkPublicIP: WorkloadNetworkPublicIP, options?: WorkloadNetworkPublicIpsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkPublicIP>, WorkloadNetworkPublicIP>;
    delete: (subscriptionId: string, resourceGroupName: string, publicIPId: string, privateCloudName: string, options?: WorkloadNetworkPublicIpsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getWorkloadNetworkPublicIps(context: AVSContext): {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkPublicIP, WorkloadNetworkPublicIP[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, publicIPId: string, options?: WorkloadNetworkPublicIpsGetOptionalParams) => Promise<WorkloadNetworkPublicIP>;
    create: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, publicIPId: string, workloadNetworkPublicIP: WorkloadNetworkPublicIP, options?: WorkloadNetworkPublicIpsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkPublicIP>, WorkloadNetworkPublicIP>;
    delete: (subscriptionId: string, resourceGroupName: string, publicIPId: string, privateCloudName: string, options?: WorkloadNetworkPublicIpsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getWorkloadNetworkPublicIpsOperations(context: AVSContext): WorkloadNetworkPublicIpsOperations;
//# sourceMappingURL=index.d.ts.map