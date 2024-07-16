import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkVMGroup } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { WorkloadNetworkVmGroupsListByWorkloadNetworkOptionalParams, WorkloadNetworkVmGroupsGetOptionalParams, WorkloadNetworkVmGroupsCreateOptionalParams, WorkloadNetworkVmGroupsUpdateOptionalParams, WorkloadNetworkVmGroupsDeleteOptionalParams } from "../../models/options.js";
/** Interface representing a WorkloadNetworkVmGroups operations. */
export interface WorkloadNetworkVmGroupsOperations {
    /** List WorkloadNetworkVMGroup resources by WorkloadNetwork */
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkVmGroupsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkVMGroup>;
    /** Get a WorkloadNetworkVMGroup */
    get: (resourceGroupName: string, privateCloudName: string, vmGroupId: string, options?: WorkloadNetworkVmGroupsGetOptionalParams) => Promise<WorkloadNetworkVMGroup>;
    /** Create a WorkloadNetworkVMGroup */
    create: (resourceGroupName: string, privateCloudName: string, vmGroupId: string, resource: WorkloadNetworkVMGroup, options?: WorkloadNetworkVmGroupsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup>;
    /** Update a WorkloadNetworkVMGroup */
    update: (resourceGroupName: string, privateCloudName: string, vmGroupId: string, workloadNetworkVMGroup: WorkloadNetworkVMGroup, options?: WorkloadNetworkVmGroupsUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup>;
    /** Delete a WorkloadNetworkVMGroup */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, vmGroupId: string, privateCloudName: string, options?: WorkloadNetworkVmGroupsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getWorkloadNetworkVmGroups(context: AVSContext, subscriptionId: string): {
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkVmGroupsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkVMGroup, WorkloadNetworkVMGroup[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, vmGroupId: string, options?: WorkloadNetworkVmGroupsGetOptionalParams) => Promise<WorkloadNetworkVMGroup>;
    create: (resourceGroupName: string, privateCloudName: string, vmGroupId: string, resource: WorkloadNetworkVMGroup, options?: WorkloadNetworkVmGroupsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup>;
    update: (resourceGroupName: string, privateCloudName: string, vmGroupId: string, workloadNetworkVMGroup: WorkloadNetworkVMGroup, options?: WorkloadNetworkVmGroupsUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup>;
    delete: (resourceGroupName: string, vmGroupId: string, privateCloudName: string, options?: WorkloadNetworkVmGroupsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getWorkloadNetworkVmGroupsOperations(context: AVSContext, subscriptionId: string): WorkloadNetworkVmGroupsOperations;
//# sourceMappingURL=index.d.ts.map