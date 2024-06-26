import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkDnsZone, WorkloadNetworkDnsZoneUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { WorkloadNetworkDnsZonesListByWorkloadNetworkOptionalParams, WorkloadNetworkDnsZonesGetOptionalParams, WorkloadNetworkDnsZonesCreateOptionalParams, WorkloadNetworkDnsZonesUpdateOptionalParams, WorkloadNetworkDnsZonesDeleteOptionalParams } from "../../models/options.js";
export interface WorkloadNetworkDnsZonesOperations {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkDnsZonesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkDnsZone>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dnsZoneId: string, options?: WorkloadNetworkDnsZonesGetOptionalParams) => Promise<WorkloadNetworkDnsZone>;
    create: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dnsZoneId: string, workloadNetworkDnsZone: WorkloadNetworkDnsZone, options?: WorkloadNetworkDnsZonesCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dnsZoneId: string, workloadNetworkDnsZone: WorkloadNetworkDnsZoneUpdate, options?: WorkloadNetworkDnsZonesUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone>;
    delete: (subscriptionId: string, resourceGroupName: string, dnsZoneId: string, privateCloudName: string, options?: WorkloadNetworkDnsZonesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getWorkloadNetworkDnsZones(context: AVSContext): {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkDnsZonesListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkDnsZone, WorkloadNetworkDnsZone[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dnsZoneId: string, options?: WorkloadNetworkDnsZonesGetOptionalParams) => Promise<WorkloadNetworkDnsZone>;
    create: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dnsZoneId: string, workloadNetworkDnsZone: WorkloadNetworkDnsZone, options?: WorkloadNetworkDnsZonesCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, dnsZoneId: string, workloadNetworkDnsZone: WorkloadNetworkDnsZoneUpdate, options?: WorkloadNetworkDnsZonesUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkDnsZone>, WorkloadNetworkDnsZone>;
    delete: (subscriptionId: string, resourceGroupName: string, dnsZoneId: string, privateCloudName: string, options?: WorkloadNetworkDnsZonesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getWorkloadNetworkDnsZonesOperations(context: AVSContext): WorkloadNetworkDnsZonesOperations;
//# sourceMappingURL=index.d.ts.map