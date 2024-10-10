// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get } from "../../api/scriptPackages/index.js";
export function getScriptPackages(context, subscriptionId) {
    return {
        listByPrivateCloud: (resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, scriptPackageName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, options),
    };
}
export function getScriptPackagesOperations(context, subscriptionId) {
    return {
        ...getScriptPackages(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map