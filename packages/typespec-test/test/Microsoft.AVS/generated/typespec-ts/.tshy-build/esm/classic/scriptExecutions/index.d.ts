import { AVSContext } from "../../api/aVSContext.js";
import { ScriptExecution, ScriptOutputStreamType } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { ScriptExecutionsListByPrivateCloudOptionalParams, ScriptExecutionsGetOptionalParams, ScriptExecutionsCreateOrUpdateOptionalParams, ScriptExecutionsDeleteOptionalParams, ScriptExecutionsGetExecutionLogsOptionalParams } from "../../models/options.js";
/** Interface representing a ScriptExecutions operations. */
export interface ScriptExecutionsOperations {
    /** List ScriptExecution resources by PrivateCloud */
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: ScriptExecutionsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<ScriptExecution>;
    /** Get a ScriptExecution */
    get: (resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: ScriptExecutionsGetOptionalParams) => Promise<ScriptExecution>;
    /** Create a ScriptExecution */
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, scriptExecution: ScriptExecution, options?: ScriptExecutionsCreateOrUpdateOptionalParams) => PollerLike<OperationState<ScriptExecution>, ScriptExecution>;
    /** Delete a ScriptExecution */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: ScriptExecutionsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    /** Return the logs for a script execution resource */
    getExecutionLogs: (resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, scriptOutputStreamType?: ScriptOutputStreamType[], options?: ScriptExecutionsGetExecutionLogsOptionalParams) => Promise<ScriptExecution>;
}
export declare function getScriptExecutions(context: AVSContext, subscriptionId: string): {
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: ScriptExecutionsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<ScriptExecution, ScriptExecution[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: ScriptExecutionsGetOptionalParams) => Promise<ScriptExecution>;
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, scriptExecution: ScriptExecution, options?: ScriptExecutionsCreateOrUpdateOptionalParams) => PollerLike<OperationState<ScriptExecution>, ScriptExecution>;
    delete: (resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: ScriptExecutionsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    getExecutionLogs: (resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, scriptOutputStreamType?: ScriptOutputStreamType[], options?: ScriptExecutionsGetExecutionLogsOptionalParams) => Promise<ScriptExecution>;
};
export declare function getScriptExecutionsOperations(context: AVSContext, subscriptionId: string): ScriptExecutionsOperations;
//# sourceMappingURL=index.d.ts.map