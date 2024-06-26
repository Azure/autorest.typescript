import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkSegment, WorkloadNetworkSegmentUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { WorkloadNetworkSegmentsListByWorkloadNetworkOptionalParams, WorkloadNetworkSegmentsGetOptionalParams, WorkloadNetworkSegmentsCreateOptionalParams, WorkloadNetworkSegmentsUpdateOptionalParams, WorkloadNetworkSegmentsDeleteSegmentOptionalParams } from "../../models/options.js";
export interface WorkloadNetworkSegmentsOperations {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkSegmentsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkSegment>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, segmentId: string, options?: WorkloadNetworkSegmentsGetOptionalParams) => Promise<WorkloadNetworkSegment>;
    create: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, segmentId: string, workloadNetworkSegment: WorkloadNetworkSegment, options?: WorkloadNetworkSegmentsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, segmentId: string, properties: WorkloadNetworkSegmentUpdate, options?: WorkloadNetworkSegmentsUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment>;
    deleteSegment: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, segmentId: string, options?: WorkloadNetworkSegmentsDeleteSegmentOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getWorkloadNetworkSegments(context: AVSContext): {
    listByWorkloadNetwork: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkSegmentsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkSegment, WorkloadNetworkSegment[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, segmentId: string, options?: WorkloadNetworkSegmentsGetOptionalParams) => Promise<WorkloadNetworkSegment>;
    create: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, segmentId: string, workloadNetworkSegment: WorkloadNetworkSegment, options?: WorkloadNetworkSegmentsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, segmentId: string, properties: WorkloadNetworkSegmentUpdate, options?: WorkloadNetworkSegmentsUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment>;
    deleteSegment: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, segmentId: string, options?: WorkloadNetworkSegmentsDeleteSegmentOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getWorkloadNetworkSegmentsOperations(context: AVSContext): WorkloadNetworkSegmentsOperations;
//# sourceMappingURL=index.d.ts.map