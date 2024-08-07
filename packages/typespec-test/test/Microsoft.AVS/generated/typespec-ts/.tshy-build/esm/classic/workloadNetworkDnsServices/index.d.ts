import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkDnsService } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { WorkloadNetworkDnsServicesListByWorkloadNetworkOptionalParams, WorkloadNetworkDnsServicesGetOptionalParams, WorkloadNetworkDnsServicesCreateOptionalParams, WorkloadNetworkDnsServicesUpdateOptionalParams, WorkloadNetworkDnsServicesDeleteOptionalParams } from "../../models/options.js";
/** Interface representing a WorkloadNetworkDnsServices operations. */
export interface WorkloadNetworkDnsServicesOperations {
    /** List WorkloadNetworkDnsService resources by WorkloadNetwork */
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkDnsServicesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkDnsService>;
    /** Get a WorkloadNetworkDnsService */
    get: (resourceGroupName: string, privateCloudName: string, dnsServiceId: string, options?: WorkloadNetworkDnsServicesGetOptionalParams) => Promise<WorkloadNetworkDnsService>;
    /** Create a WorkloadNetworkDnsService */
    create: (resourceGroupName: string, privateCloudName: string, dnsServiceId: string, workloadNetworkDnsService: WorkloadNetworkDnsService, options?: WorkloadNetworkDnsServicesCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService>;
    /** Update a WorkloadNetworkDnsService */
    update: (resourceGroupName: string, privateCloudName: string, dnsServiceId: string, workloadNetworkDnsService: WorkloadNetworkDnsService, options?: WorkloadNetworkDnsServicesUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService>;
    /** Delete a WorkloadNetworkDnsService */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, dnsServiceId: string, privateCloudName: string, options?: WorkloadNetworkDnsServicesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getWorkloadNetworkDnsServices(context: AVSContext, subscriptionId: string): {
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkDnsServicesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkDnsService, WorkloadNetworkDnsService[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, dnsServiceId: string, options?: WorkloadNetworkDnsServicesGetOptionalParams) => Promise<WorkloadNetworkDnsService>;
    create: (resourceGroupName: string, privateCloudName: string, dnsServiceId: string, workloadNetworkDnsService: WorkloadNetworkDnsService, options?: WorkloadNetworkDnsServicesCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService>;
    update: (resourceGroupName: string, privateCloudName: string, dnsServiceId: string, workloadNetworkDnsService: WorkloadNetworkDnsService, options?: WorkloadNetworkDnsServicesUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsService>, WorkloadNetworkDnsService>;
    delete: (resourceGroupName: string, dnsServiceId: string, privateCloudName: string, options?: WorkloadNetworkDnsServicesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getWorkloadNetworkDnsServicesOperations(context: AVSContext, subscriptionId: string): WorkloadNetworkDnsServicesOperations;
//# sourceMappingURL=index.d.ts.map