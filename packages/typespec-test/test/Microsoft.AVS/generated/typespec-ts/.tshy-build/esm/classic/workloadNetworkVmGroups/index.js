// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByWorkloadNetwork, get, create, update, $delete, } from "../../api/workloadNetworkVmGroups/index.js";
export function getWorkloadNetworkVmGroups(context) {
    return {
        listByWorkloadNetwork: (subscriptionId, resourceGroupName, privateCloudName, options) => listByWorkloadNetwork(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, vmGroupId, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, vmGroupId, options),
        create: (subscriptionId, resourceGroupName, privateCloudName, vmGroupId, resource, options) => create(context, subscriptionId, resourceGroupName, privateCloudName, vmGroupId, resource, options),
        update: (subscriptionId, resourceGroupName, privateCloudName, vmGroupId, workloadNetworkVMGroup, options) => update(context, subscriptionId, resourceGroupName, privateCloudName, vmGroupId, workloadNetworkVMGroup, options),
        delete: (subscriptionId, resourceGroupName, vmGroupId, privateCloudName, options) => $delete(context, subscriptionId, resourceGroupName, vmGroupId, privateCloudName, options),
    };
}
export function getWorkloadNetworkVmGroupsOperations(context) {
    return {
        ...getWorkloadNetworkVmGroups(context),
    };
}
//# sourceMappingURL=index.js.map