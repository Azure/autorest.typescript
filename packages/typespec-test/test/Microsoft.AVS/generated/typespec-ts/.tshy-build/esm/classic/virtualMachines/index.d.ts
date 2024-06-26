import { AVSContext } from "../../api/aVSContext.js";
import { VirtualMachine, VirtualMachineRestrictMovement } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { VirtualMachinesListByClusterOptionalParams, VirtualMachinesGetOptionalParams, VirtualMachinesRestrictMovementOptionalParams } from "../../models/options.js";
export interface VirtualMachinesOperations {
    listByCluster: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: VirtualMachinesListByClusterOptionalParams) => PagedAsyncIterableIterator<VirtualMachine>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, virtualMachineId: string, options?: VirtualMachinesGetOptionalParams) => Promise<VirtualMachine>;
    restrictMovement: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, virtualMachineId: string, restrictMovementParameter: VirtualMachineRestrictMovement, options?: VirtualMachinesRestrictMovementOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getVirtualMachines(context: AVSContext): {
    listByCluster: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, options?: VirtualMachinesListByClusterOptionalParams) => PagedAsyncIterableIterator<VirtualMachine, VirtualMachine[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, virtualMachineId: string, options?: VirtualMachinesGetOptionalParams) => Promise<VirtualMachine>;
    restrictMovement: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, virtualMachineId: string, restrictMovementParameter: VirtualMachineRestrictMovement, options?: VirtualMachinesRestrictMovementOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getVirtualMachinesOperations(context: AVSContext): VirtualMachinesOperations;
//# sourceMappingURL=index.d.ts.map