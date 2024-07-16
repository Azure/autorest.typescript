import { AVSContext } from "../../api/aVSContext.js";
import { WorkloadNetworkSegment } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { WorkloadNetworkSegmentsListByWorkloadNetworkOptionalParams, WorkloadNetworkSegmentsGetOptionalParams, WorkloadNetworkSegmentsCreateOptionalParams, WorkloadNetworkSegmentsUpdateOptionalParams, WorkloadNetworkSegmentsDeleteSegmentOptionalParams } from "../../models/options.js";
/** Interface representing a WorkloadNetworkSegments operations. */
export interface WorkloadNetworkSegmentsOperations {
    /** List WorkloadNetworkSegment resources by WorkloadNetwork */
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkSegmentsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkSegment>;
    /** Get a WorkloadNetworkSegment */
    get: (resourceGroupName: string, privateCloudName: string, segmentId: string, options?: WorkloadNetworkSegmentsGetOptionalParams) => Promise<WorkloadNetworkSegment>;
    /** Create a WorkloadNetworkSegment */
    create: (resourceGroupName: string, privateCloudName: string, segmentId: string, workloadNetworkSegment: WorkloadNetworkSegment, options?: WorkloadNetworkSegmentsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment>;
    /** Update a WorkloadNetworkSegment */
    update: (resourceGroupName: string, privateCloudName: string, segmentId: string, properties: WorkloadNetworkSegment, options?: WorkloadNetworkSegmentsUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment>;
    /** Delete a WorkloadNetworkSegment */
    deleteSegment: (resourceGroupName: string, privateCloudName: string, segmentId: string, options?: WorkloadNetworkSegmentsDeleteSegmentOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getWorkloadNetworkSegments(context: AVSContext, subscriptionId: string): {
    listByWorkloadNetwork: (resourceGroupName: string, privateCloudName: string, options?: WorkloadNetworkSegmentsListByWorkloadNetworkOptionalParams) => PagedAsyncIterableIterator<WorkloadNetworkSegment, WorkloadNetworkSegment[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, segmentId: string, options?: WorkloadNetworkSegmentsGetOptionalParams) => Promise<WorkloadNetworkSegment>;
    create: (resourceGroupName: string, privateCloudName: string, segmentId: string, workloadNetworkSegment: WorkloadNetworkSegment, options?: WorkloadNetworkSegmentsCreateOptionalParams) => PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment>;
    update: (resourceGroupName: string, privateCloudName: string, segmentId: string, properties: WorkloadNetworkSegment, options?: WorkloadNetworkSegmentsUpdateOptionalParams) => PollerLike<OperationState<WorkloadNetworkSegment>, WorkloadNetworkSegment>;
    deleteSegment: (resourceGroupName: string, privateCloudName: string, segmentId: string, options?: WorkloadNetworkSegmentsDeleteSegmentOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getWorkloadNetworkSegmentsOperations(context: AVSContext, subscriptionId: string): WorkloadNetworkSegmentsOperations;
//# sourceMappingURL=index.d.ts.map