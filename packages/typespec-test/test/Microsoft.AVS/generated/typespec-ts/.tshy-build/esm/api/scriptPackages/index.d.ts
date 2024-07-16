import { ScriptPackage, _ScriptPackagesList } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, ScriptPackagesGet200Response, ScriptPackagesGetDefaultResponse, ScriptPackagesListByPrivateCloud200Response, ScriptPackagesListByPrivateCloudDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { ScriptPackagesListByPrivateCloudOptionalParams, ScriptPackagesGetOptionalParams } from "../../models/options.js";
export declare function _listByPrivateCloudSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: ScriptPackagesListByPrivateCloudOptionalParams): StreamableMethod<ScriptPackagesListByPrivateCloud200Response | ScriptPackagesListByPrivateCloudDefaultResponse>;
export declare function _listByPrivateCloudDeserialize(result: ScriptPackagesListByPrivateCloud200Response | ScriptPackagesListByPrivateCloudDefaultResponse): Promise<_ScriptPackagesList>;
/** List ScriptPackage resources by PrivateCloud */
export declare function listByPrivateCloud(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: ScriptPackagesListByPrivateCloudOptionalParams): PagedAsyncIterableIterator<ScriptPackage>;
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptPackageName: string, options?: ScriptPackagesGetOptionalParams): StreamableMethod<ScriptPackagesGet200Response | ScriptPackagesGetDefaultResponse>;
export declare function _getDeserialize(result: ScriptPackagesGet200Response | ScriptPackagesGetDefaultResponse): Promise<ScriptPackage>;
/** Get a ScriptPackage */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptPackageName: string, options?: ScriptPackagesGetOptionalParams): Promise<ScriptPackage>;
//# sourceMappingURL=index.d.ts.map