// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, } from "../../api/workloadNetworkVirtualMachines/index.js";
export function getWorkloadNetworkVirtualMachines(context) {
    return {
        listByWorkloadNetwork: (subscriptionId, resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, virtualMachineId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, virtualMachineId, options),
    };
}
export function getWorkloadNetworkVirtualMachinesOperations(context) {
    return {
        ...getWorkloadNetworkVirtualMachines(context),
    };
}
//# sourceMappingURL=index.js.map