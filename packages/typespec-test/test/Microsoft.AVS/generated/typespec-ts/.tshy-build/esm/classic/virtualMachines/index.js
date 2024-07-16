// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByCluster, get, restrictMovement, } from "../../api/virtualMachines/index.js";
export function getVirtualMachines(context, subscriptionId) {
    return {
        listByCluster: (resourceGroupName, privateCloudName, clusterName, options) => listByCluster(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options),
        get: (resourceGroupName, privateCloudName, clusterName, virtualMachineId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, virtualMachineId, options),
        restrictMovement: (resourceGroupName, privateCloudName, clusterName, virtualMachineId, restrictMovementParameter, options) => restrictMovement(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, virtualMachineId, restrictMovementParameter, options),
    };
}
export function getVirtualMachinesOperations(context, subscriptionId) {
    return {
        ...getVirtualMachines(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map