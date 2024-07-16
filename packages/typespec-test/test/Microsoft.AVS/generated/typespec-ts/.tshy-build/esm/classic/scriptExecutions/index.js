// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, $delete, getExecutionLogs, } from "../../api/scriptExecutions/index.js";
export function getScriptExecutions(context, subscriptionId) {
    return {
        listByPrivateCloud: (resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (resourceGroupName, privateCloudName, scriptExecutionName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, scriptExecutionName, options),
        createOrUpdate: (resourceGroupName, privateCloudName, scriptExecutionName, scriptExecution, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, scriptExecutionName, scriptExecution, options),
        delete: (resourceGroupName, privateCloudName, scriptExecutionName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, scriptExecutionName, options),
        getExecutionLogs: (resourceGroupName, privateCloudName, scriptExecutionName, scriptOutputStreamType, options) => getExecutionLogs(context, subscriptionId, resourceGroupName, privateCloudName, scriptExecutionName, scriptOutputStreamType, options),
    };
}
export function getScriptExecutionsOperations(context, subscriptionId) {
    return {
        ...getScriptExecutions(context, subscriptionId),
    };
}
//# sourceMappingURL=index.js.map