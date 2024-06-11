import { AVSContext } from "../../api/aVSContext.js";
import { Addon } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { AddonsListByPrivateCloudOptionalParams, AddonsGetOptionalParams, AddonsCreateOrUpdateOptionalParams, AddonsDeleteOptionalParams } from "../../models/options.js";
export interface AddonsOperations {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: AddonsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<Addon>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, addonName: string, options?: AddonsGetOptionalParams) => Promise<Addon>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, addonName: string, addon: Addon, options?: AddonsCreateOrUpdateOptionalParams) => PollerLike<OperationState<Addon>, Addon>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, addonName: string, options?: AddonsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getAddons(context: AVSContext): {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: AddonsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<Addon, Addon[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, addonName: string, options?: AddonsGetOptionalParams) => Promise<Addon>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, addonName: string, addon: Addon, options?: AddonsCreateOrUpdateOptionalParams) => PollerLike<OperationState<Addon>, Addon>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, addonName: string, options?: AddonsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getAddonsOperations(context: AVSContext): AddonsOperations;
//# sourceMappingURL=index.d.ts.map