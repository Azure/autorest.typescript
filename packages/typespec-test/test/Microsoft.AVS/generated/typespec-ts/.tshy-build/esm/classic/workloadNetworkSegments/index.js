// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, create, update, deleteSegment, } from "../../api/workloadNetworkSegments/index.js";
export function getWorkloadNetworkSegments(context) {
    return {
        listByWorkloadNetwork: (subscriptionId, resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, segmentId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, options),
        create: (subscriptionId, resourceGroupName, privateCloudName, segmentId, workloadNetworkSegment, options) => create(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, workloadNetworkSegment, options),
        update: (subscriptionId, resourceGroupName, privateCloudName, segmentId, properties, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, properties, options),
        deleteSegment: (subscriptionId, resourceGroupName, privateCloudName, segmentId, options) => deleteSegment(context, subscriptionId, resourceGroupName, privateCloudName, segmentId, options),
    };
}
export function getWorkloadNetworkSegmentsOperations(context) {
    return {
        ...getWorkloadNetworkSegments(context),
    };
}
//# sourceMappingURL=index.js.map