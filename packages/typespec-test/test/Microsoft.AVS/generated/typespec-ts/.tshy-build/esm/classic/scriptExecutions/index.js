// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, $delete, getExecutionLogs, } from "../../api/scriptExecutions/index.js";
export function getScriptExecutions(context) {
    return {
        listByPrivateCloud: (subscriptionId, resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, scriptExecutionName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, scriptExecutionName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, privateCloudName, scriptExecutionName, scriptExecution, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, scriptExecutionName, scriptExecution, options),
        delete: (subscriptionId, resourceGroupName, privateCloudName, scriptExecutionName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, scriptExecutionName, options),
        getExecutionLogs: (subscriptionId, resourceGroupName, privateCloudName, scriptExecutionName, scriptOutputStreamType, options) => getExecutionLogs(context, subscriptionId, resourceGroupName, privateCloudName, scriptExecutionName, scriptOutputStreamType, options),
    };
}
export function getScriptExecutionsOperations(context) {
    return {
        ...getScriptExecutions(context),
    };
}
//# sourceMappingURL=index.js.map