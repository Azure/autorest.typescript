import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkDnsZone } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { WorkloadNetworkDnsZonesListByWorkloadNetworkOptionalParams, WorkloadNetworkDnsZonesGetOptionalParams, WorkloadNetworkDnsZonesCreateOptionalParams, WorkloadNetworkDnsZonesUpdateOptionalParams, WorkloadNetworkDnsZonesDeleteOptionalParams } from "../../models/options.js";
/** Interface representing a WorkloadNetworkDnsZones operations. */
export interface WorkloadNetworkDnsZonesOperations {
    /** List WorkloadNetworkDnsZone resources by WorkloadNetwork */
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkDnsZonesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkDnsZone>;
    /** Get a WorkloadNetworkDnsZone */
    get: (resourceGroupName: string, privateCloudName: string, dnsZoneId: string, options?: WorkloadNetworkDnsZonesGetOptionalParams) => Promise<WorkloadNetworkDnsZone>;
    /** Create a WorkloadNetworkDnsZone */
    create: (resourceGroupName: string, privateCloudName: string, dnsZoneId: string, workloadNetworkDnsZone: WorkloadNetworkDnsZone, options?: WorkloadNetworkDnsZonesCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone>;
    /** Update a WorkloadNetworkDnsZone */
    update: (resourceGroupName: string, privateCloudName: string, dnsZoneId: string, workloadNetworkDnsZone: WorkloadNetworkDnsZone, options?: WorkloadNetworkDnsZonesUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone>;
    /** Delete a WorkloadNetworkDnsZone */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, dnsZoneId: string, privateCloudName: string, options?: WorkloadNetworkDnsZonesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getWorkloadNetworkDnsZones(context: AVSContext, subscriptionId: string): {
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkDnsZonesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkDnsZone, WorkloadNetworkDnsZone[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, dnsZoneId: string, options?: WorkloadNetworkDnsZonesGetOptionalParams) => Promise<WorkloadNetworkDnsZone>;
    create: (resourceGroupName: string, privateCloudName: string, dnsZoneId: string, workloadNetworkDnsZone: WorkloadNetworkDnsZone, options?: WorkloadNetworkDnsZonesCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone>;
    update: (resourceGroupName: string, privateCloudName: string, dnsZoneId: string, workloadNetworkDnsZone: WorkloadNetworkDnsZone, options?: WorkloadNetworkDnsZonesUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone>;
    delete: (resourceGroupName: string, dnsZoneId: string, privateCloudName: string, options?: WorkloadNetworkDnsZonesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getWorkloadNetworkDnsZonesOperations(context: AVSContext, subscriptionId: string): WorkloadNetworkDnsZonesOperations;
//# sourceMappingURL=index.d.ts.map