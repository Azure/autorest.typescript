import { ScriptCmdlet, _ScriptCmdletsList } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, ScriptCmdletsGet200Response, ScriptCmdletsGetDefaultResponse, ScriptCmdletsListByScriptPackage200Response, ScriptCmdletsListByScriptPackageDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { ScriptCmdletsListByScriptPackageOptionalParams, ScriptCmdletsGetOptionalParams } from "../../models/options.js";
export declare function _listByScriptPackageSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptPackageName: string, options?: ScriptCmdletsListByScriptPackageOptionalParams): StreamableMethod<ScriptCmdletsListByScriptPackage200Response | ScriptCmdletsListByScriptPackageDefaultResponse>;
export declare function _listByScriptPackageDeserialize(result: ScriptCmdletsListByScriptPackage200Response | ScriptCmdletsListByScriptPackageDefaultResponse): Promise<_ScriptCmdletsList>;
/** List ScriptCmdlet resources by ScriptPackage */
export declare function listByScriptPackage(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptPackageName: string, options?: ScriptCmdletsListByScriptPackageOptionalParams): PagedAsyncIterableIterator<ScriptCmdlet>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptPackageName: string, scriptCmdletName: string, options?: ScriptCmdletsGetOptionalParams): StreamableMethod<ScriptCmdletsGet200Response | ScriptCmdletsGetDefaultResponse>;
export declare function _getDeserialize(result: ScriptCmdletsGet200Response | ScriptCmdletsGetDefaultResponse): Promise<ScriptCmdlet>;
/** Get a ScriptCmdlet */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptPackageName: string, scriptCmdletName: string, options?: ScriptCmdletsGetOptionalParams): Promise<ScriptCmdlet>;
//# sourceMappingURL=index.d.ts.map