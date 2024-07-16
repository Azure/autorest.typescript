import { AVSContext } from "../../api/aVSContext.js";
import { ScriptCmdlet } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { ScriptCmdletsListByScriptPackageOptionalParams, ScriptCmdletsGetOptionalParams } from "../../models/options.js";
/** Interface representing a ScriptCmdlets operations. */
export interface ScriptCmdletsOperations {
    /** List ScriptCmdlet resources by ScriptPackage */
    listByScriptPackage: (resourceGroupName: string, privateCloudName: string, scriptPackageName: string, options?: ScriptCmdletsListByScriptPackageOptionalParams) => PagedAsyncIterableIterator<ScriptCmdlet>;
    /** Get a ScriptCmdlet */
    get: (resourceGroupName: string, privateCloudName: string, scriptPackageName: string, scriptCmdletName: string, options?: ScriptCmdletsGetOptionalParams) => Promise<ScriptCmdlet>;
}
export declare function getScriptCmdlets(context: AVSContext, subscriptionId: string): {
    listByScriptPackage: (resourceGroupName: string, privateCloudName: string, scriptPackageName: string, options?: ScriptCmdletsListByScriptPackageOptionalParams) => PagedAsyncIterableIterator<ScriptCmdlet, ScriptCmdlet[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, scriptPackageName: string, scriptCmdletName: string, options?: ScriptCmdletsGetOptionalParams) => Promise<ScriptCmdlet>;
};
export declare function getScriptCmdletsOperations(context: AVSContext, subscriptionId: string): ScriptCmdletsOperations;
//# sourceMappingURL=index.d.ts.map