// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByCluster, get, restrictMovement, } from "../../api/virtualMachines/index.js";
export function getVirtualMachines(context) {
    return {
        listByCluster: (subscriptionId, resourceGroupName, privateCloudName, clusterName, options) => listByCluster(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, clusterName, virtualMachineId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, virtualMachineId, options),
        restrictMovement: (subscriptionId, resourceGroupName, privateCloudName, clusterName, virtualMachineId, restrictMovementParameter, options) => restrictMovement(context, subscriptionId, resourceGroupName, privateCloudName, clusterName, virtualMachineId, restrictMovementParameter, options),
    };
}
export function getVirtualMachinesOperations(context) {
    return {
        ...getVirtualMachines(context),
    };
}
//# sourceMappingURL=index.js.map