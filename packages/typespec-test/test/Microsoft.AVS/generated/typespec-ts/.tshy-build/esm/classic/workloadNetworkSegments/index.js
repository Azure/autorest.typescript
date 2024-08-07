// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, create, update, deleteSegment, } from "../../api/workloadNetworkSegments/index.js";
export function getWorkloadNetworkSegments(context, subscriptionId) {
    return {
        listByWorkloadNetwork: (resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, segmentId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, options),
        create: (resourceGroupName, privateCloudName, segmentId, workloadNetworkSegment, options) => create(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, workloadNetworkSegment, options),
        update: (resourceGroupName, privateCloudName, segmentId, properties, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, properties, options),
        deleteSegment: (resourceGroupName, privateCloudName, segmentId, options) => deleteSegment(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, options),
    };
}
export function getWorkloadNetworkSegmentsOperations(context, subscriptionId) {
    return {
        ...getWorkloadNetworkSegments(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map