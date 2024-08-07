import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkPortMirroring } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkOptionalParams, WorkloadNetworkPortMirroringProfilesGetOptionalParams, WorkloadNetworkPortMirroringProfilesCreateOptionalParams, WorkloadNetworkPortMirroringProfilesUpdateOptionalParams, WorkloadNetworkPortMirroringProfilesDeleteOptionalParams } from "../../models/options.js";
/** Interface representing a WorkloadNetworkPortMirroringProfiles operations. */
export interface WorkloadNetworkPortMirroringProfilesOperations {
    /** List WorkloadNetworkPortMirroring resources by WorkloadNetwork */
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkPortMirroring>;
    /** Get a WorkloadNetworkPortMirroring */
    get: (resourceGroupName: string, privateCloudName: string, portMirroringId: string, options?: WorkloadNetworkPortMirroringProfilesGetOptionalParams) => Promise<WorkloadNetworkPortMirroring>;
    /** Create a WorkloadNetworkPortMirroring */
    create: (resourceGroupName: string, privateCloudName: string, portMirroringId: string, workloadNetworkPortMirroring: WorkloadNetworkPortMirroring, options?: WorkloadNetworkPortMirroringProfilesCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring>;
    /** Update a WorkloadNetworkPortMirroring */
    update: (resourceGroupName: string, privateCloudName: string, portMirroringId: string, workloadNetworkPortMirroring: WorkloadNetworkPortMirroring, options?: WorkloadNetworkPortMirroringProfilesUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring>;
    /** Delete a WorkloadNetworkPortMirroring */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, portMirroringId: string, privateCloudName: string, options?: WorkloadNetworkPortMirroringProfilesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getWorkloadNetworkPortMirroringProfiles(context: AVSContext, subscriptionId: string): {
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkPortMirroring, WorkloadNetworkPortMirroring[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, portMirroringId: string, options?: WorkloadNetworkPortMirroringProfilesGetOptionalParams) => Promise<WorkloadNetworkPortMirroring>;
    create: (resourceGroupName: string, privateCloudName: string, portMirroringId: string, workloadNetworkPortMirroring: WorkloadNetworkPortMirroring, options?: WorkloadNetworkPortMirroringProfilesCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring>;
    update: (resourceGroupName: string, privateCloudName: string, portMirroringId: string, workloadNetworkPortMirroring: WorkloadNetworkPortMirroring, options?: WorkloadNetworkPortMirroringProfilesUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkPortMirroring>, WorkloadNetworkPortMirroring>;
    delete: (resourceGroupName: string, portMirroringId: string, privateCloudName: string, options?: WorkloadNetworkPortMirroringProfilesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getWorkloadNetworkPortMirroringProfilesOperations(context: AVSContext, subscriptionId: string): WorkloadNetworkPortMirroringProfilesOperations;
//# sourceMappingURL=index.d.ts.map