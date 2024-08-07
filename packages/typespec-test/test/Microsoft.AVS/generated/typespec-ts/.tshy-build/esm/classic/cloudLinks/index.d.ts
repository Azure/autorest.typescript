import { AVSContext } from "../../api/aVSContext.js";
import { CloudLink } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { CloudLinksListByPrivateCloudOptionalParams, CloudLinksGetOptionalParams, CloudLinksCreateOrUpdateOptionalParams, CloudLinksDeleteOptionalParams } from "../../models/options.js";
/** Interface representing a CloudLinks operations. */
export interface CloudLinksOperations {
    /** List CloudLink resources by PrivateCloud */
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: CloudLinksListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<CloudLink>;
    /** Get a CloudLink */
    get: (resourceGroupName: string, privateCloudName: string, cloudLinkName: string, options?: CloudLinksGetOptionalParams) => Promise<CloudLink>;
    /** Create a CloudLink */
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, cloudLinkName: string, cloudLink: CloudLink, options?: CloudLinksCreateOrUpdateOptionalParams) => PollerLike<OperationState<CloudLink>, CloudLink>;
    /** Delete a CloudLink */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, privateCloudName: string, cloudLinkName: string, options?: CloudLinksDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getCloudLinks(context: AVSContext, subscriptionId: string): {
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: CloudLinksListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<CloudLink, CloudLink[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, cloudLinkName: string, options?: CloudLinksGetOptionalParams) => Promise<CloudLink>;
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, cloudLinkName: string, cloudLink: CloudLink, options?: CloudLinksCreateOrUpdateOptionalParams) => PollerLike<OperationState<CloudLink>, CloudLink>;
    delete: (resourceGroupName: string, privateCloudName: string, cloudLinkName: string, options?: CloudLinksDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getCloudLinksOperations(context: AVSContext, subscriptionId: string): CloudLinksOperations;
//# sourceMappingURL=index.d.ts.map