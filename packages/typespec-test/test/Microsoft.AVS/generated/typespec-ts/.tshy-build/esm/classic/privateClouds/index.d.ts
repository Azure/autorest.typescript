import { AVSContext } from "../../api/aVSContext.js";
import { PrivateCloud, PrivateCloudUpdate, AdminCredentials } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { PrivateCloudsListByResourceGroupOptionalParams, PrivateCloudsListInSubscriptionOptionalParams, PrivateCloudsGetOptionalParams, PrivateCloudsCreateOrUpdateOptionalParams, PrivateCloudsUpdateOptionalParams, PrivateCloudsDeleteOptionalParams, PrivateCloudsRotateVcenterPasswordOptionalParams, PrivateCloudsRotateNsxtPasswordOptionalParams, PrivateCloudsListAdminCredentialsOptionalParams } from "../../models/options.js";
/** Interface representing a PrivateClouds operations. */
export interface PrivateCloudsOperations {
    /** List PrivateCloud resources by resource group */
    listByResourceGroup: (resourceGroupName: string, options?: PrivateCloudsListByResourceGroupOptionalParams) => PagedAsyncIterableIterator<PrivateCloud>;
    /** List PrivateCloud resources by subscription ID */
    listInSubscription: (options?: PrivateCloudsListInSubscriptionOptionalParams) => PagedAsyncIterableIterator<PrivateCloud>;
    /** Get a PrivateCloud */
    get: (resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsGetOptionalParams) => Promise<PrivateCloud>;
    /** Create a PrivateCloud */
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, privateCloud: PrivateCloud, options?: PrivateCloudsCreateOrUpdateOptionalParams) => PollerLike<OperationState<PrivateCloud>, PrivateCloud>;
    /** Update a PrivateCloud */
    update: (resourceGroupName: string, privateCloudName: string, privateCloudUpdate: PrivateCloudUpdate, options?: PrivateCloudsUpdateOptionalParams) => Promise<PrivateCloud>;
    /** Delete a PrivateCloud */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    /** Rotate the vCenter password */
    rotateVcenterPassword: (resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsRotateVcenterPasswordOptionalParams) => PollerLike<OperationState<void>, void>;
    /** Rotate the NSX-T Manager password */
    rotateNsxtPassword: (resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsRotateNsxtPasswordOptionalParams) => PollerLike<OperationState<void>, void>;
    /** List the admin credentials for the private cloud */
    listAdminCredentials: (resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsListAdminCredentialsOptionalParams) => Promise<AdminCredentials>;
}
export declare function getPrivateClouds(context: AVSContext, subscriptionId: string): {
    listByResourceGroup: (resourceGroupName: string, options?: PrivateCloudsListByResourceGroupOptionalParams) => PagedAsyncIterableIterator<PrivateCloud, PrivateCloud[], import("../../models/pagingTypes.js").PageSettings>;
    listInSubscription: (options?: PrivateCloudsListInSubscriptionOptionalParams) => PagedAsyncIterableIterator<PrivateCloud, PrivateCloud[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsGetOptionalParams) => Promise<PrivateCloud>;
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, privateCloud: PrivateCloud, options?: PrivateCloudsCreateOrUpdateOptionalParams) => PollerLike<OperationState<PrivateCloud>, PrivateCloud>;
    update: (resourceGroupName: string, privateCloudName: string, privateCloudUpdate: PrivateCloudUpdate, options?: PrivateCloudsUpdateOptionalParams) => Promise<PrivateCloud>;
    delete: (resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    rotateVcenterPassword: (resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsRotateVcenterPasswordOptionalParams) => PollerLike<OperationState<void>, void>;
    rotateNsxtPassword: (resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsRotateNsxtPasswordOptionalParams) => PollerLike<OperationState<void>, void>;
    listAdminCredentials: (resourceGroupName: string, privateCloudName: string, options?: PrivateCloudsListAdminCredentialsOptionalParams) => Promise<AdminCredentials>;
};
export declare function getPrivateCloudsOperations(context: AVSContext, subscriptionId: string): PrivateCloudsOperations;
//# sourceMappingURL=index.d.ts.map