import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkPortMirroring, WorkloadNetworkPortMirroringUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkOptionalParams, WorkloadNetworkPortMirroringProfilesGetOptionalParams, WorkloadNetworkPortMirroringProfilesCreateOptionalParams, WorkloadNetworkPortMirroringProfilesUpdateOptionalParams, WorkloadNetworkPortMirroringProfilesDeleteOptionalParams } from "../../models/options.js";
export interface WorkloadNetworkPortMirroringProfilesOperations {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkPortMirroring>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, portMirroringId: string, options?: WorkloadNetworkPortMirroringProfilesGetOptionalParams) => Promise<WorkloadNetworkPortMirroring>;
    create: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, portMirroringId: string, workloadNetworkPortMirroring: WorkloadNetworkPortMirroring, options?: WorkloadNetworkPortMirroringProfilesCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, portMirroringId: string, workloadNetworkPortMirroring: WorkloadNetworkPortMirroringUpdate, options?: WorkloadNetworkPortMirroringProfilesUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring>;
    delete: (subscriptionId: string, resourceGroupName: string, portMirroringId: string, privateCloudName: string, options?: WorkloadNetworkPortMirroringProfilesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getWorkloadNetworkPortMirroringProfiles(context: AVSContext): {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkPortMirroring, WorkloadNetworkPortMirroring[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, portMirroringId: string, options?: WorkloadNetworkPortMirroringProfilesGetOptionalParams) => Promise<WorkloadNetworkPortMirroring>;
    create: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, portMirroringId: string, workloadNetworkPortMirroring: WorkloadNetworkPortMirroring, options?: WorkloadNetworkPortMirroringProfilesCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, portMirroringId: string, workloadNetworkPortMirroring: WorkloadNetworkPortMirroringUpdate, options?: WorkloadNetworkPortMirroringProfilesUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring>;
    delete: (subscriptionId: string, resourceGroupName: string, portMirroringId: string, privateCloudName: string, options?: WorkloadNetworkPortMirroringProfilesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getWorkloadNetworkPortMirroringProfilesOperations(context: AVSContext): WorkloadNetworkPortMirroringProfilesOperations;
//# sourceMappingURL=index.d.ts.map