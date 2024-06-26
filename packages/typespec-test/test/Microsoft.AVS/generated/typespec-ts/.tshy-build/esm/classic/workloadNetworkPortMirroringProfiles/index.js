// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, create, update, $delete, } from "../../api/workloadNetworkPortMirroringProfiles/index.js";
export function getWorkloadNetworkPortMirroringProfiles(context) {
    return {
        listByWorkloadNetwork: (subscriptionId, resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, portMirroringId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, portMirroringId, options),
        create: (subscriptionId, resourceGroupName, privateCloudName, portMirroringId, workloadNetworkPortMirroring, options) => create(context, subscriptionId, resourceGroupName, privateCloudName, portMirroringId, workloadNetworkPortMirroring, options),
        update: (subscriptionId, resourceGroupName, privateCloudName, portMirroringId, workloadNetworkPortMirroring, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, portMirroringId, workloadNetworkPortMirroring, options),
        delete: (subscriptionId, resourceGroupName, portMirroringId, privateCloudName, options) => $delete(context, subscriptionId, resourceGroupName, portMirroringId, privateCloudName, options),
    };
}
export function getWorkloadNetworkPortMirroringProfilesOperations(context) {
    return {
        ...getWorkloadNetworkPortMirroringProfiles(context),
    };
}
//# sourceMappingURL=index.js.map