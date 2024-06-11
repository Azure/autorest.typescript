import { AVSContext } from "../../api/aVSContext.js";
import { HcxEnterpriseSite } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { HcxEnterpriseSitesListByPrivateCloudOptionalParams, HcxEnterpriseSitesGetOptionalParams, HcxEnterpriseSitesCreateOrUpdateOptionalParams, HcxEnterpriseSitesDeleteOptionalParams } from "../../models/options.js";
export interface HcxEnterpriseSitesOperations {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: HcxEnterpriseSitesListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<HcxEnterpriseSite>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: HcxEnterpriseSitesGetOptionalParams) => Promise<HcxEnterpriseSite>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, hcxEnterpriseSite: HcxEnterpriseSite, options?: HcxEnterpriseSitesCreateOrUpdateOptionalParams) => Promise<HcxEnterpriseSite>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: HcxEnterpriseSitesDeleteOptionalParams) => Promise<void>;
}
export declare function getHcxEnterpriseSites(context: AVSContext): {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: HcxEnterpriseSitesListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<HcxEnterpriseSite, HcxEnterpriseSite[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: HcxEnterpriseSitesGetOptionalParams) => Promise<HcxEnterpriseSite>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, hcxEnterpriseSite: HcxEnterpriseSite, options?: HcxEnterpriseSitesCreateOrUpdateOptionalParams) => Promise<HcxEnterpriseSite>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: HcxEnterpriseSitesDeleteOptionalParams) => Promise<void>;
};
export declare function getHcxEnterpriseSitesOperations(context: AVSContext): HcxEnterpriseSitesOperations;
//# sourceMappingURL=index.d.ts.map