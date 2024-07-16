import { AVSContext } from "../../api/aVSContext.js";
import { VirtualMachine, VirtualMachineRestrictMovement } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { VirtualMachinesListByClusterOptionalParams, VirtualMachinesGetOptionalParams, VirtualMachinesRestrictMovementOptionalParams } from "../../models/options.js";
/** Interface representing a VirtualMachines operations. */
export interface VirtualMachinesOperations {
    /** List VirtualMachine resources by Cluster */
    listByCluster: (resourceGroupName: string, privateCloudName: string, clusterName: string, options?: VirtualMachinesListByClusterOptionalParams) => PagedAsyncIterableIterator<VirtualMachine>;
    /** Get a VirtualMachine */
    get: (resourceGroupName: string, privateCloudName: string, clusterName: string, virtualMachineId: string, options?: VirtualMachinesGetOptionalParams) => Promise<VirtualMachine>;
    /** Enable or disable DRS-driven VM movement restriction */
    restrictMovement: (resourceGroupName: string, privateCloudName: string, clusterName: string, virtualMachineId: string, restrictMovementParameter: VirtualMachineRestrictMovement, options?: VirtualMachinesRestrictMovementOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getVirtualMachines(context: AVSContext, subscriptionId: string): {
    listByCluster: (resourceGroupName: string, privateCloudName: string, clusterName: string, options?: VirtualMachinesListByClusterOptionalParams) => PagedAsyncIterableIterator<VirtualMachine, VirtualMachine[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, clusterName: string, virtualMachineId: string, options?: VirtualMachinesGetOptionalParams) => Promise<VirtualMachine>;
    restrictMovement: (resourceGroupName: string, privateCloudName: string, clusterName: string, virtualMachineId: string, restrictMovementParameter: VirtualMachineRestrictMovement, options?: VirtualMachinesRestrictMovementOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getVirtualMachinesOperations(context: AVSContext, subscriptionId: string): VirtualMachinesOperations;
//# sourceMappingURL=index.d.ts.map