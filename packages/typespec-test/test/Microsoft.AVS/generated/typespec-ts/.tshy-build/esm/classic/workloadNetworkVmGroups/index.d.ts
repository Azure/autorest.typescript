import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkVMGroup, WorkloadNetworkVMGroupUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { WorkloadNetworkVmGroupsListByWorkloadNetworkOptionalParams, WorkloadNetworkVmGroupsGetOptionalParams, WorkloadNetworkVmGroupsCreateOptionalParams, WorkloadNetworkVmGroupsUpdateOptionalParams, WorkloadNetworkVmGroupsDeleteOptionalParams } from "../../models/options.js";
export interface WorkloadNetworkVmGroupsOperations {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkVmGroupsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkVMGroup>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, vmGroupId: string, options?: WorkloadNetworkVmGroupsGetOptionalParams) => Promise<WorkloadNetworkVMGroup>;
    create: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, vmGroupId: string, resource: WorkloadNetworkVMGroup, options?: WorkloadNetworkVmGroupsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, vmGroupId: string, workloadNetworkVMGroup: WorkloadNetworkVMGroupUpdate, options?: WorkloadNetworkVmGroupsUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup>;
    delete: (subscriptionId: string, resourceGroupName: string, vmGroupId: string, privateCloudName: string, options?: WorkloadNetworkVmGroupsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getWorkloadNetworkVmGroups(context: AVSContext): {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkVmGroupsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkVMGroup, WorkloadNetworkVMGroup[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, vmGroupId: string, options?: WorkloadNetworkVmGroupsGetOptionalParams) => Promise<WorkloadNetworkVMGroup>;
    create: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, vmGroupId: string, resource: WorkloadNetworkVMGroup, options?: WorkloadNetworkVmGroupsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, vmGroupId: string, workloadNetworkVMGroup: WorkloadNetworkVMGroupUpdate, options?: WorkloadNetworkVmGroupsUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkVMGroup>, WorkloadNetworkVMGroup>;
    delete: (subscriptionId: string, resourceGroupName: string, vmGroupId: string, privateCloudName: string, options?: WorkloadNetworkVmGroupsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getWorkloadNetworkVmGroupsOperations(context: AVSContext): WorkloadNetworkVmGroupsOperations;
//# sourceMappingURL=index.d.ts.map