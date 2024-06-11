import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkDnsService, WorkloadNetworkDnsServiceUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { WorkloadNetworkDnsServicesListByWorkloadNetworkOptionalParams, WorkloadNetworkDnsServicesGetOptionalParams, WorkloadNetworkDnsServicesCreateOptionalParams, WorkloadNetworkDnsServicesUpdateOptionalParams, WorkloadNetworkDnsServicesDeleteOptionalParams } from "../../models/options.js";
export interface WorkloadNetworkDnsServicesOperations {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkDnsServicesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkDnsService>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dnsServiceId: string, options?: WorkloadNetworkDnsServicesGetOptionalParams) => Promise<WorkloadNetworkDnsService>;
    create: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dnsServiceId: string, workloadNetworkDnsService: WorkloadNetworkDnsService, options?: WorkloadNetworkDnsServicesCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dnsServiceId: string, workloadNetworkDnsService: WorkloadNetworkDnsServiceUpdate, options?: WorkloadNetworkDnsServicesUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService>;
    delete: (subscriptionId: string, resourceGroupName: string, dnsServiceId: string, privateCloudName: string, options?: WorkloadNetworkDnsServicesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getWorkloadNetworkDnsServices(context: AVSContext): {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkDnsServicesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkDnsService, WorkloadNetworkDnsService[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dnsServiceId: string, options?: WorkloadNetworkDnsServicesGetOptionalParams) => Promise<WorkloadNetworkDnsService>;
    create: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dnsServiceId: string, workloadNetworkDnsService: WorkloadNetworkDnsService, options?: WorkloadNetworkDnsServicesCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dnsServiceId: string, workloadNetworkDnsService: WorkloadNetworkDnsServiceUpdate, options?: WorkloadNetworkDnsServicesUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService>;
    delete: (subscriptionId: string, resourceGroupName: string, dnsServiceId: string, privateCloudName: string, options?: WorkloadNetworkDnsServicesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getWorkloadNetworkDnsServicesOperations(context: AVSContext): WorkloadNetworkDnsServicesOperations;
//# sourceMappingURL=index.d.ts.map