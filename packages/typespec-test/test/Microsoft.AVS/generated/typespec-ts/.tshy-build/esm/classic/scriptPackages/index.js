// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get } from "../../api/scriptPackages/index.js";
export function getScriptPackages(context) {
    return {
        listByPrivateCloud: (subscriptionId, resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, options),
    };
}
export function getScriptPackagesOperations(context) {
    return {
        ...getScriptPackages(context),
    };
}
//# sourceMappingURL=index.js.map