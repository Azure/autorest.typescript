import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkDhcp } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkOptionalParams, WorkloadNetworkDhcpConfigurationsGetOptionalParams, WorkloadNetworkDhcpConfigurationsCreateOptionalParams, WorkloadNetworkDhcpConfigurationsUpdateOptionalParams, WorkloadNetworkDhcpConfigurationsDeleteOptionalParams } from "../../models/options.js";
/** Interface representing a WorkloadNetworkDhcpConfigurations operations. */
export interface WorkloadNetworkDhcpConfigurationsOperations {
    /** List WorkloadNetworkDhcp resources by WorkloadNetwork */
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkDhcp>;
    /** Get a WorkloadNetworkDhcp */
    get: (resourceGroupName: string, dhcpId: string, privateCloudName: string, options?: WorkloadNetworkDhcpConfigurationsGetOptionalParams) => Promise<WorkloadNetworkDhcp>;
    /** Create a WorkloadNetworkDhcp */
    create: (resourceGroupName: string, privateCloudName: string, dhcpId: string, workloadNetworkDhcp: WorkloadNetworkDhcp, options?: WorkloadNetworkDhcpConfigurationsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
    /** Update a WorkloadNetworkDhcp */
    update: (resourceGroupName: string, privateCloudName: string, dhcpId: string, workloadNetworkDhcp: WorkloadNetworkDhcp, options?: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
    /** Delete a WorkloadNetworkDhcp */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, privateCloudName: string, dhcpId: string, options?: WorkloadNetworkDhcpConfigurationsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getWorkloadNetworkDhcpConfigurations(context: AVSContext, subscriptionId: string): {
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkDhcp, WorkloadNetworkDhcp[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, dhcpId: string, privateCloudName: string, options?: WorkloadNetworkDhcpConfigurationsGetOptionalParams) => Promise<WorkloadNetworkDhcp>;
    create: (resourceGroupName: string, privateCloudName: string, dhcpId: string, workloadNetworkDhcp: WorkloadNetworkDhcp, options?: WorkloadNetworkDhcpConfigurationsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
    update: (resourceGroupName: string, privateCloudName: string, dhcpId: string, workloadNetworkDhcp: WorkloadNetworkDhcp, options?: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
    delete: (resourceGroupName: string, privateCloudName: string, dhcpId: string, options?: WorkloadNetworkDhcpConfigurationsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getWorkloadNetworkDhcpConfigurationsOperations(context: AVSContext, subscriptionId: string): WorkloadNetworkDhcpConfigurationsOperations;
//# sourceMappingURL=index.d.ts.map