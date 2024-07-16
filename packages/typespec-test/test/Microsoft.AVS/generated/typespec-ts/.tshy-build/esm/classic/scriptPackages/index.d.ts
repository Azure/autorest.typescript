import { AVSContext } from "../../api/aVSContext.js";
import { ScriptPackage } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { ScriptPackagesListByPrivateCloudOptionalParams, ScriptPackagesGetOptionalParams } from "../../models/options.js";
/** Interface representing a ScriptPackages operations. */
export interface ScriptPackagesOperations {
    /** List ScriptPackage resources by PrivateCloud */
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: ScriptPackagesListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<ScriptPackage>;
    /** Get a ScriptPackage */
    get: (resourceGroupName: string, privateCloudName: string, scriptPackageName: string, options?: ScriptPackagesGetOptionalParams) => Promise<ScriptPackage>;
}
export declare function getScriptPackages(context: AVSContext, subscriptionId: string): {
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: ScriptPackagesListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<ScriptPackage, ScriptPackage[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, scriptPackageName: string, options?: ScriptPackagesGetOptionalParams) => Promise<ScriptPackage>;
};
export declare function getScriptPackagesOperations(context: AVSContext, subscriptionId: string): ScriptPackagesOperations;
//# sourceMappingURL=index.d.ts.map