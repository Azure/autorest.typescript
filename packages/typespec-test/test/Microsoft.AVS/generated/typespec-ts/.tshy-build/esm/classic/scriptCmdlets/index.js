// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByScriptPackage, get } from "../../api/scriptCmdlets/index.js";
export function getScriptCmdlets(context, subscriptionId) {
    return {
        listByScriptPackage: (resourceGroupName, privateCloudName, scriptPackageName, options) => listByScriptPackage(context, subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, options),
        get: (resourceGroupName, privateCloudName, scriptPackageName, scriptCmdletName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, scriptCmdletName, options),
    };
}
export function getScriptCmdletsOperations(context, subscriptionId) {
    return {
        ...getScriptCmdlets(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map