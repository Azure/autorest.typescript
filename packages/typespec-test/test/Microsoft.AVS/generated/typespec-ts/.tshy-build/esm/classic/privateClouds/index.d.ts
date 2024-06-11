import { AVSContext } from "../../api/aVSContext.js";
import { PrivateCloud, PrivateCloudUpdate, AdminCredentials } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { PrivateCloudsListByResourceGroupOptionalParams, PrivateCloudsListInSubscriptionOptionalParams, PrivateCloudsGetOptionalParams, PrivateCloudsCreateOrUpdateOptionalParams, PrivateCloudsUpdateOptionalParams, PrivateCloudsDeleteOptionalParams, PrivateCloudsRotateVcenterPasswordOptionalParams, PrivateCloudsRotateNsxtPasswordOptionalParams, PrivateCloudsListAdminCredentialsOptionalParams } from "../../models/options.js";
export interface PrivateCloudsOperations {
    listByResourceGroup: (subscriptionId: string, resourceGroupName: string, options?: PrivateCloudsListByResourceGroupOptionalParams) => PagedAsyncIterableIterator<PrivateCloud>;
    listInSubscription: (subscriptionId: string, options?: PrivateCloudsListInSubscriptionOptionalParams) => PagedAsyncIterableIterator<PrivateCloud>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsGetOptionalParams) => Promise<PrivateCloud>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, privateCloud: PrivateCloud, options?: PrivateCloudsCreateOrUpdateOptionalParams) => PollerLike<OperationState<PrivateCloud>, PrivateCloud>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, privateCloudUpdate: PrivateCloudUpdate, options?: PrivateCloudsUpdateOptionalParams) => Promise<PrivateCloud>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    rotateVcenterPassword: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsRotateVcenterPasswordOptionalParams) => PollerLike<OperationState<void>, void>;
    rotateNsxtPassword: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsRotateNsxtPasswordOptionalParams) => PollerLike<OperationState<void>, void>;
    listAdminCredentials: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsListAdminCredentialsOptionalParams) => Promise<AdminCredentials>;
}
export declare function getPrivateClouds(context: AVSContext): {
    listByResourceGroup: (subscriptionId: string, resourceGroupName: string, options?: PrivateCloudsListByResourceGroupOptionalParams) => PagedAsyncIterableIterator<PrivateCloud, PrivateCloud[], import("../../models/pagingTypes.js").PageSettings>;
    listInSubscription: (subscriptionId: string, options?: PrivateCloudsListInSubscriptionOptionalParams) => PagedAsyncIterableIterator<PrivateCloud, PrivateCloud[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsGetOptionalParams) => Promise<PrivateCloud>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, privateCloud: PrivateCloud, options?: PrivateCloudsCreateOrUpdateOptionalParams) => PollerLike<OperationState<PrivateCloud>, PrivateCloud>;
    update: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, privateCloudUpdate: PrivateCloudUpdate, options?: PrivateCloudsUpdateOptionalParams) => Promise<PrivateCloud>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    rotateVcenterPassword: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsRotateVcenterPasswordOptionalParams) => PollerLike<OperationState<void>, void>;
    rotateNsxtPassword: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsRotateNsxtPasswordOptionalParams) => PollerLike<OperationState<void>, void>;
    listAdminCredentials: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsListAdminCredentialsOptionalParams) => Promise<AdminCredentials>;
};
export declare function getPrivateCloudsOperations(context: AVSContext): PrivateCloudsOperations;
//# sourceMappingURL=index.d.ts.map