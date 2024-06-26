import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkDhcp, WorkloadNetworkDhcpUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkOptionalParams, WorkloadNetworkDhcpConfigurationsGetOptionalParams, WorkloadNetworkDhcpConfigurationsCreateOptionalParams, WorkloadNetworkDhcpConfigurationsUpdateOptionalParams, WorkloadNetworkDhcpConfigurationsDeleteOptionalParams } from "../../models/options.js";
export interface WorkloadNetworkDhcpConfigurationsOperations {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkDhcp>;
    get: (subscriptionId: string, resourceGroupName: string, dhcpId: string, privateCloudName: string, options?: WorkloadNetworkDhcpConfigurationsGetOptionalParams) => Promise<WorkloadNetworkDhcp>;
    create: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dhcpId: string, workloadNetworkDhcp: WorkloadNetworkDhcp, options?: WorkloadNetworkDhcpConfigurationsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dhcpId: string, workloadNetworkDhcp: WorkloadNetworkDhcpUpdate, options?: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dhcpId: string, options?: WorkloadNetworkDhcpConfigurationsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getWorkloadNetworkDhcpConfigurations(context: AVSContext): {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkDhcp, WorkloadNetworkDhcp[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, dhcpId: string, privateCloudName: string, options?: WorkloadNetworkDhcpConfigurationsGetOptionalParams) => Promise<WorkloadNetworkDhcp>;
    create: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dhcpId: string, workloadNetworkDhcp: WorkloadNetworkDhcp, options?: WorkloadNetworkDhcpConfigurationsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dhcpId: string, workloadNetworkDhcp: WorkloadNetworkDhcpUpdate, options?: WorkloadNetworkDhcpConfigurationsUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDhcp>, WorkloadNetworkDhcp>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dhcpId: string, options?: WorkloadNetworkDhcpConfigurationsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getWorkloadNetworkDhcpConfigurationsOperations(context: AVSContext): WorkloadNetworkDhcpConfigurationsOperations;
//# sourceMappingURL=index.d.ts.map