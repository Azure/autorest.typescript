import { AVSContext } from "../../api/aVSContext.js";
import { HcxEnterpriseSite } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { HcxEnterpriseSitesListByPrivateCloudOptionalParams, HcxEnterpriseSitesGetOptionalParams, HcxEnterpriseSitesCreateOrUpdateOptionalParams, HcxEnterpriseSitesDeleteOptionalParams } from "../../models/options.js";
/** Interface representing a HcxEnterpriseSites operations. */
export interface HcxEnterpriseSitesOperations {
    /** List HcxEnterpriseSite resources by PrivateCloud */
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: HcxEnterpriseSitesListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<HcxEnterpriseSite>;
    /** Get a HcxEnterpriseSite */
    get: (resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: HcxEnterpriseSitesGetOptionalParams) => Promise<HcxEnterpriseSite>;
    /** Create a HcxEnterpriseSite */
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, hcxEnterpriseSite: HcxEnterpriseSite, options?: HcxEnterpriseSitesCreateOrUpdateOptionalParams) => Promise<HcxEnterpriseSite>;
    /** Delete a HcxEnterpriseSite */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: HcxEnterpriseSitesDeleteOptionalParams) => Promise<void>;
}
export declare function getHcxEnterpriseSites(context: AVSContext, subscriptionId: string): {
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: HcxEnterpriseSitesListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<HcxEnterpriseSite, HcxEnterpriseSite[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: HcxEnterpriseSitesGetOptionalParams) => Promise<HcxEnterpriseSite>;
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, hcxEnterpriseSite: HcxEnterpriseSite, options?: HcxEnterpriseSitesCreateOrUpdateOptionalParams) => Promise<HcxEnterpriseSite>;
    delete: (resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string, options?: HcxEnterpriseSitesDeleteOptionalParams) => Promise<void>;
};
export declare function getHcxEnterpriseSitesOperations(context: AVSContext, subscriptionId: string): HcxEnterpriseSitesOperations;
//# sourceMappingURL=index.d.ts.map