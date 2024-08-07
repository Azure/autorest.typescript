// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, create, update, $delete, } from "../../api/workloadNetworkPortMirroringProfiles/index.js";
export function getWorkloadNetworkPortMirroringProfiles(context, subscriptionId) {
    return {
        listByWorkloadNetwork: (resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, portMirroringId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, portMirroringId, options),
        create: (resourceGroupName, privateCloudName, portMirroringId, workloadNetworkPortMirroring, options) => create(context, subscriptionId, resourceGroupName, privateCloudName, portMirroringId, workloadNetworkPortMirroring, options),
        update: (resourceGroupName, privateCloudName, portMirroringId, workloadNetworkPortMirroring, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, portMirroringId, workloadNetworkPortMirroring, options),
        delete: (resourceGroupName, portMirroringId, privateCloudName, options) => $delete(context, subscriptionId, resourceGroupName, portMirroringId, privateCloudName, options),
    };
}
export function getWorkloadNetworkPortMirroringProfilesOperations(context, subscriptionId) {
    return {
        ...getWorkloadNetworkPortMirroringProfiles(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map