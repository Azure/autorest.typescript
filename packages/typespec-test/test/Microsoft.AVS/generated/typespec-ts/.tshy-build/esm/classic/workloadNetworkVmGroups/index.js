// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, create, update, $delete, } from "../../api/workloadNetworkVmGroups/index.js";
export function getWorkloadNetworkVmGroups(context, subscriptionId) {
    return {
        listByWorkloadNetwork: (resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, vmGroupId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, vmGroupId, options),
        create: (resourceGroupName, privateCloudName, vmGroupId, resource, options) => create(context, subscriptionId, resourceGroupName, privateCloudName, vmGroupId, resource, options),
        update: (resourceGroupName, privateCloudName, vmGroupId, workloadNetworkVMGroup, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, vmGroupId, workloadNetworkVMGroup, options),
        delete: (resourceGroupName, vmGroupId, privateCloudName, options) => $delete(context, subscriptionId, resourceGroupName, vmGroupId, privateCloudName, options),
    };
}
export function getWorkloadNetworkVmGroupsOperations(context, subscriptionId) {
    return {
        ...getWorkloadNetworkVmGroups(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map