import { AVSContext } from "../../api/aVSContext.js";
import { IscsiPath } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { IscsiPathsListByPrivateCloudOptionalParams, IscsiPathsGetOptionalParams, IscsiPathsCreateOrUpdateOptionalParams, IscsiPathsDeleteOptionalParams } from "../../models/options.js";
/** Interface representing a IscsiPaths operations. */
export interface IscsiPathsOperations {
    /** List IscsiPath resources by PrivateCloud */
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: IscsiPathsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<IscsiPath>;
    /** Get a IscsiPath */
    get: (resourceGroupName: string, privateCloudName: string, options?: IscsiPathsGetOptionalParams) => Promise<IscsiPath>;
    /** Create a IscsiPath */
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, resource: IscsiPath, options?: IscsiPathsCreateOrUpdateOptionalParams) => PollerLike<OperationState<IscsiPath>, IscsiPath>;
    /** Delete a IscsiPath */
    /**
     *  @fixme delete is a reserved word that cannot be used as an operation name.
     *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
     *         to the operation to override the generated name.
     */
    delete: (resourceGroupName: string, privateCloudName: string, options?: IscsiPathsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getIscsiPaths(context: AVSContext, subscriptionId: string): {
    listByPrivateCloud: (resourceGroupName: string, privateCloudName: string, options?: IscsiPathsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<IscsiPath, IscsiPath[], import("../../models/pagingTypes.js").PageSettings>;
    get: (resourceGroupName: string, privateCloudName: string, options?: IscsiPathsGetOptionalParams) => Promise<IscsiPath>;
    createOrUpdate: (resourceGroupName: string, privateCloudName: string, resource: IscsiPath, options?: IscsiPathsCreateOrUpdateOptionalParams) => PollerLike<OperationState<IscsiPath>, IscsiPath>;
    delete: (resourceGroupName: string, privateCloudName: string, options?: IscsiPathsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getIscsiPathsOperations(context: AVSContext, subscriptionId: string): IscsiPathsOperations;
//# sourceMappingURL=index.d.ts.map