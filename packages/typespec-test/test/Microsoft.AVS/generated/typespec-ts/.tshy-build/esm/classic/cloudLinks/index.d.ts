import { AVSContext } from "../../api/aVSContext.js";
import { CloudLink } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { CloudLinksListByPrivateCloudOptionalParams, CloudLinksGetOptionalParams, CloudLinksCreateOrUpdateOptionalParams, CloudLinksDeleteOptionalParams } from "../../models/options.js";
export interface CloudLinksOperations {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: CloudLinksListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<CloudLink>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, cloudLinkName: string, options?: CloudLinksGetOptionalParams) => Promise<CloudLink>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, cloudLinkName: string, cloudLink: CloudLink, options?: CloudLinksCreateOrUpdateOptionalParams) => PollerLike<OperationState<CloudLink>, CloudLink>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, cloudLinkName: string, options?: CloudLinksDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getCloudLinks(context: AVSContext): {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: CloudLinksListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<CloudLink, CloudLink[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, cloudLinkName: string, options?: CloudLinksGetOptionalParams) => Promise<CloudLink>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, cloudLinkName: string, cloudLink: CloudLink, options?: CloudLinksCreateOrUpdateOptionalParams) => PollerLike<OperationState<CloudLink>, CloudLink>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, cloudLinkName: string, options?: CloudLinksDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getCloudLinksOperations(context: AVSContext): CloudLinksOperations;
//# sourceMappingURL=index.d.ts.map