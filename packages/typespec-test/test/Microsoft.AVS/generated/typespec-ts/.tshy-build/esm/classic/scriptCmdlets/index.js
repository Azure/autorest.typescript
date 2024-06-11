// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByScriptPackage, get } from "../../api/scriptCmdlets/index.js";
export function getScriptCmdlets(context) {
    return {
        listByScriptPackage: (subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, options) => listByScriptPackage(context, subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, scriptCmdletName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, scriptPackageName, scriptCmdletName, options),
    };
}
export function getScriptCmdletsOperations(context) {
    return {
        ...getScriptCmdlets(context),
    };
}
//# sourceMappingURL=index.js.map