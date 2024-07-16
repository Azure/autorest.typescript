import { PollerLike, OperationState } from "@azure/core-lro";
import { ScriptExecution, ScriptOutputStreamType, _ScriptExecutionsList } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, ScriptExecutionsCreateOrUpdate200Response, ScriptExecutionsCreateOrUpdate201Response, ScriptExecutionsCreateOrUpdateDefaultResponse, ScriptExecutionsCreateOrUpdateLogicalResponse, ScriptExecutionsDelete200Response, ScriptExecutionsDelete202Response, ScriptExecutionsDelete204Response, ScriptExecutionsDeleteDefaultResponse, ScriptExecutionsDeleteLogicalResponse, ScriptExecutionsGet200Response, ScriptExecutionsGetDefaultResponse, ScriptExecutionsGetExecutionLogs200Response, ScriptExecutionsGetExecutionLogsDefaultResponse, ScriptExecutionsListByPrivateCloud200Response, ScriptExecutionsListByPrivateCloudDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { ScriptExecutionsListByPrivateCloudOptionalParams, ScriptExecutionsGetOptionalParams, ScriptExecutionsCreateOrUpdateOptionalParams, ScriptExecutionsDeleteOptionalParams, ScriptExecutionsGetExecutionLogsOptionalParams } from "../../models/options.js";
export declare function _listByPrivateCloudSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: ScriptExecutionsListByPrivateCloudOptionalParams): StreamableMethod<ScriptExecutionsListByPrivateCloud200Response | ScriptExecutionsListByPrivateCloudDefaultResponse>;
export declare function _listByPrivateCloudDeserialize(result: ScriptExecutionsListByPrivateCloud200Response | ScriptExecutionsListByPrivateCloudDefaultResponse): Promise<_ScriptExecutionsList>;
/** List ScriptExecution resources by PrivateCloud */
export declare function listByPrivateCloud(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: ScriptExecutionsListByPrivateCloudOptionalParams): PagedAsyncIterableIterator<ScriptExecution>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: ScriptExecutionsGetOptionalParams): StreamableMethod<ScriptExecutionsGet200Response | ScriptExecutionsGetDefaultResponse>;
export declare function _getDeserialize(result: ScriptExecutionsGet200Response | ScriptExecutionsGetDefaultResponse): Promise<ScriptExecution>;
/** Get a ScriptExecution */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: ScriptExecutionsGetOptionalParams): Promise<ScriptExecution>;
export declare function _createOrUpdateSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, scriptExecution: ScriptExecution, options?: ScriptExecutionsCreateOrUpdateOptionalParams): StreamableMethod<ScriptExecutionsCreateOrUpdate200Response | ScriptExecutionsCreateOrUpdate201Response | ScriptExecutionsCreateOrUpdateDefaultResponse | ScriptExecutionsCreateOrUpdateLogicalResponse>;
export declare function _createOrUpdateDeserialize(result: ScriptExecutionsCreateOrUpdate200Response | ScriptExecutionsCreateOrUpdate201Response | ScriptExecutionsCreateOrUpdateDefaultResponse | ScriptExecutionsCreateOrUpdateLogicalResponse): Promise<ScriptExecution>;
/** Create a ScriptExecution */
export declare function createOrUpdate(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, scriptExecution: ScriptExecution, options?: ScriptExecutionsCreateOrUpdateOptionalParams): PollerLike<OperationState<ScriptExecution>, ScriptExecution>;
export declare function _$deleteSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: ScriptExecutionsDeleteOptionalParams): StreamableMethod<ScriptExecutionsDelete200Response | ScriptExecutionsDelete202Response | ScriptExecutionsDelete204Response | ScriptExecutionsDeleteDefaultResponse | ScriptExecutionsDeleteLogicalResponse>;
export declare function _$deleteDeserialize(result: ScriptExecutionsDelete200Response | ScriptExecutionsDelete202Response | ScriptExecutionsDelete204Response | ScriptExecutionsDeleteDefaultResponse | ScriptExecutionsDeleteLogicalResponse): Promise<void>;
/** Delete a ScriptExecution */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export declare function $delete(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: ScriptExecutionsDeleteOptionalParams): PollerLike<OperationState<void>, void>;
export declare function _getExecutionLogsSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, scriptOutputStreamType?: ScriptOutputStreamType[], options?: ScriptExecutionsGetExecutionLogsOptionalParams): StreamableMethod<ScriptExecutionsGetExecutionLogs200Response | ScriptExecutionsGetExecutionLogsDefaultResponse>;
export declare function _getExecutionLogsDeserialize(result: ScriptExecutionsGetExecutionLogs200Response | ScriptExecutionsGetExecutionLogsDefaultResponse): Promise<ScriptExecution>;
/** Return the logs for a script execution resource */
export declare function getExecutionLogs(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, scriptOutputStreamType?: ScriptOutputStreamType[], options?: ScriptExecutionsGetExecutionLogsOptionalParams): Promise<ScriptExecution>;
//# sourceMappingURL=index.d.ts.map