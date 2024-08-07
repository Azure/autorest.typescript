import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkPublicIP } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams, WorkloadNetworkPublicIpsGetOptionalParams, WorkloadNetworkPublicIpsCreateOptionalParams, WorkloadNetworkPublicIpsDeleteOptionalParams } from "../../models/options.js";
/** Interface representing a WorkloadNetworkPublicIps operations. */
export interface WorkloadNetworkPublicIpsOperations {
    /** List WorkloadNetworkPublicIP resources by WorkloadNetwork */
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkPublicIP>;
    /** Get a WorkloadNetworkPublicIP */
    get: (resourceGroupName: string, privateCloudName: string, publicIPId: string, options?: WorkloadNetworkPublicIpsGetOptionalParams) => Promise<WorkloadNetworkPublicIP>;
    /** Create a WorkloadNetworkPublicIP */
    create: (resourceGroupName: string, privateCloudName: string, publicIPId: string, workloadNetworkPublicIP: WorkloadNetworkPublicIP, options?: WorkloadNetworkPublicIpsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkPublicIP>, WorkloadNetworkPublicIP>;
    /** Delete a WorkloadNetworkPublicIP */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, publicIPId: string, privateCloudName: string, options?: WorkloadNetworkPublicIpsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getWorkloadNetworkPublicIps(context: AVSContext, subscriptionId: string): {
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkPublicIP, WorkloadNetworkPublicIP[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, publicIPId: string, options?: WorkloadNetworkPublicIpsGetOptionalParams) => Promise<WorkloadNetworkPublicIP>;
    create: (resourceGroupName: string, privateCloudName: string, publicIPId: string, workloadNetworkPublicIP: WorkloadNetworkPublicIP, options?: WorkloadNetworkPublicIpsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkPublicIP>, WorkloadNetworkPublicIP>;
    delete: (resourceGroupName: string, publicIPId: string, privateCloudName: string, options?: WorkloadNetworkPublicIpsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getWorkloadNetworkPublicIpsOperations(context: AVSContext, subscriptionId: string): WorkloadNetworkPublicIpsOperations;
//# sourceMappingURL=index.d.ts.map