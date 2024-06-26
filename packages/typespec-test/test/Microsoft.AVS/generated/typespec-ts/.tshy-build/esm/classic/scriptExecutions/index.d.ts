import { AVSContext } from "../../api/aVSContext.js";
import { ScriptExecution, ScriptOutputStreamType } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { ScriptExecutionsListByPrivateCloudOptionalParams, ScriptExecutionsGetOptionalParams, ScriptExecutionsCreateOrUpdateOptionalParams, ScriptExecutionsDeleteOptionalParams, ScriptExecutionsGetExecutionLogsOptionalParams } from "../../models/options.js";
export interface ScriptExecutionsOperations {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: ScriptExecutionsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<ScriptExecution>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: ScriptExecutionsGetOptionalParams) => Promise<ScriptExecution>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, scriptExecution: ScriptExecution, options?: ScriptExecutionsCreateOrUpdateOptionalParams) => PollerLike<OperationState<ScriptExecution>, ScriptExecution>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: ScriptExecutionsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    getExecutionLogs: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, scriptOutputStreamType?: ScriptOutputStreamType[], options?: ScriptExecutionsGetExecutionLogsOptionalParams) => Promise<ScriptExecution>;
}
export declare function getScriptExecutions(context: AVSContext): {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: ScriptExecutionsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<ScriptExecution, ScriptExecution[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: ScriptExecutionsGetOptionalParams) => Promise<ScriptExecution>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, scriptExecution: ScriptExecution, options?: ScriptExecutionsCreateOrUpdateOptionalParams) => PollerLike<OperationState<ScriptExecution>, ScriptExecution>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: ScriptExecutionsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    getExecutionLogs: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, scriptOutputStreamType?: ScriptOutputStreamType[], options?: ScriptExecutionsGetExecutionLogsOptionalParams) => Promise<ScriptExecution>;
};
export declare function getScriptExecutionsOperations(context: AVSContext): ScriptExecutionsOperations;
//# sourceMappingURL=index.d.ts.map