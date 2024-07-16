import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkVirtualMachine } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams, WorkloadNetworkVirtualMachinesGetOptionalParams } from "../../models/options.js";
/** Interface representing a WorkloadNetworkVirtualMachines operations. */
export interface WorkloadNetworkVirtualMachinesOperations {
    /** List WorkloadNetworkVirtualMachine resources by WorkloadNetwork */
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine>;
    /** Get a WorkloadNetworkVirtualMachine */
    get: (resourceGroupName: string, privateCloudName: string, virtualMachineId: string, options?: WorkloadNetworkVirtualMachinesGetOptionalParams) => Promise<WorkloadNetworkVirtualMachine>;
}
export declare function getWorkloadNetworkVirtualMachines(context: AVSContext, subscriptionId: string): {
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine, WorkloadNetworkVirtualMachine[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, virtualMachineId: string, options?: WorkloadNetworkVirtualMachinesGetOptionalParams) => Promise<WorkloadNetworkVirtualMachine>;
};
export declare function getWorkloadNetworkVirtualMachinesOperations(context: AVSContext, subscriptionId: string): WorkloadNetworkVirtualMachinesOperations;
//# sourceMappingURL=index.d.ts.map