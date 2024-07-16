// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, } from "../../api/workloadNetworkVirtualMachines/index.js";
export function getWorkloadNetworkVirtualMachines(context, subscriptionId) {
    return {
        listByWorkloadNetwork: (resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, virtualMachineId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, virtualMachineId, options),
    };
}
export function getWorkloadNetworkVirtualMachinesOperations(context, subscriptionId) {
    return {
        ...getWorkloadNetworkVirtualMachines(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map