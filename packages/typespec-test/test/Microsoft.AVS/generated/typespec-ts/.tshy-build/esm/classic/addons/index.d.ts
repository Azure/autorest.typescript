import { AVSContext } from "../../api/aVSContext.js";
import { Addon } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { AddonsListByPrivateCloudOptionalParams, AddonsGetOptionalParams, AddonsCreateOrUpdateOptionalParams, AddonsDeleteOptionalParams } from "../../models/options.js";
/** Interface representing a Addons operations. */
export interface AddonsOperations {
    /** List Addon resources by PrivateCloud */
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: AddonsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<Addon>;
    /** Get a Addon */
    get: (resourceGroupName: string, privateCloudName: string, addonName: string, options?: AddonsGetOptionalParams) => Promise<Addon>;
    /** Create a Addon */
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, addonName: string, addon: Addon, options?: AddonsCreateOrUpdateOptionalParams) => PollerLike<OperationState<Addon>, Addon>;
    /** Delete a Addon */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, privateCloudName: string, addonName: string, options?: AddonsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getAddons(context: AVSContext, subscriptionId: string): {
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: AddonsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<Addon, Addon[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, addonName: string, options?: AddonsGetOptionalParams) => Promise<Addon>;
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, addonName: string, addon: Addon, options?: AddonsCreateOrUpdateOptionalParams) => PollerLike<OperationState<Addon>, Addon>;
    delete: (resourceGroupName: string, privateCloudName: string, addonName: string, options?: AddonsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getAddonsOperations(context: AVSContext, subscriptionId: string): AddonsOperations;
//# sourceMappingURL=index.d.ts.map