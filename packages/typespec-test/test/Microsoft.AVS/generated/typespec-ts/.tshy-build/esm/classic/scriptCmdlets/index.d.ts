import { AVSContext } from "../../api/aVSContext.js";
import { ScriptCmdlet } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { ScriptCmdletsListByScriptPackageOptionalParams, ScriptCmdletsGetOptionalParams } from "../../models/options.js";
export interface ScriptCmdletsOperations {
    listByScriptPackage: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptPackageName: string, options?: ScriptCmdletsListByScriptPackageOptionalParams) => PagedAsyncIterableIterator<ScriptCmdlet>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptPackageName: string, scriptCmdletName: string, options?: ScriptCmdletsGetOptionalParams) => Promise<ScriptCmdlet>;
}
export declare function getScriptCmdlets(context: AVSContext): {
    listByScriptPackage: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptPackageName: string, options?: ScriptCmdletsListByScriptPackageOptionalParams) => PagedAsyncIterableIterator<ScriptCmdlet, ScriptCmdlet[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptPackageName: string, scriptCmdletName: string, options?: ScriptCmdletsGetOptionalParams) => Promise<ScriptCmdlet>;
};
export declare function getScriptCmdletsOperations(context: AVSContext): ScriptCmdletsOperations;
//# sourceMappingURL=index.d.ts.map