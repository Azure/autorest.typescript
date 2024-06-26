import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkVirtualMachine } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams, WorkloadNetworkVirtualMachinesGetOptionalParams } from "../../models/options.js";
export interface WorkloadNetworkVirtualMachinesOperations {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, virtualMachineId: string, options?: WorkloadNetworkVirtualMachinesGetOptionalParams) => Promise<WorkloadNetworkVirtualMachine>;
}
export declare function getWorkloadNetworkVirtualMachines(context: AVSContext): {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkVirtualMachine, WorkloadNetworkVirtualMachine[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, virtualMachineId: string, options?: WorkloadNetworkVirtualMachinesGetOptionalParams) => Promise<WorkloadNetworkVirtualMachine>;
};
export declare function getWorkloadNetworkVirtualMachinesOperations(context: AVSContext): WorkloadNetworkVirtualMachinesOperations;
//# sourceMappingURL=index.d.ts.map