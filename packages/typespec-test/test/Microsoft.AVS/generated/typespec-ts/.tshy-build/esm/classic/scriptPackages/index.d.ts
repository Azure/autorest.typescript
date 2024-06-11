import { AVSContext } from "../../api/aVSContext.js";
import { ScriptPackage } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { ScriptPackagesListByPrivateCloudOptionalParams, ScriptPackagesGetOptionalParams } from "../../models/options.js";
export interface ScriptPackagesOperations {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: ScriptPackagesListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<ScriptPackage>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptPackageName: string, options?: ScriptPackagesGetOptionalParams) => Promise<ScriptPackage>;
}
export declare function getScriptPackages(context: AVSContext): {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: ScriptPackagesListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<ScriptPackage, ScriptPackage[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptPackageName: string, options?: ScriptPackagesGetOptionalParams) => Promise<ScriptPackage>;
};
export declare function getScriptPackagesOperations(context: AVSContext): ScriptPackagesOperations;
//# sourceMappingURL=index.d.ts.map