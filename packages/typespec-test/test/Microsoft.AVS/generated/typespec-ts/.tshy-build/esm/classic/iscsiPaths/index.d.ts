import { AVSContext } from "../../api/aVSContext.js";
import { IscsiPath } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { IscsiPathsListByPrivateCloudOptionalParams, IscsiPathsGetOptionalParams, IscsiPathsCreateOrUpdateOptionalParams, IscsiPathsDeleteOptionalParams } from "../../models/options.js";
export interface IscsiPathsOperations {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: IscsiPathsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<IscsiPath>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: IscsiPathsGetOptionalParams) => Promise<IscsiPath>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, resource: IscsiPath, options?: IscsiPathsCreateOrUpdateOptionalParams) => PollerLike<OperationState<IscsiPath>, IscsiPath>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: IscsiPathsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getIscsiPaths(context: AVSContext): {
    listByPrivateCloud: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: IscsiPathsListByPrivateCloudOptionalParams) => PagedAsyncIterableIterator<IscsiPath, IscsiPath[], import("../../models/pagingTypes.js").PageSettings>;
    get: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: IscsiPathsGetOptionalParams) => Promise<IscsiPath>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, resource: IscsiPath, options?: IscsiPathsCreateOrUpdateOptionalParams) => PollerLike<OperationState<IscsiPath>, IscsiPath>;
    delete: (subscriptionId: string, resourceGroupName: string, privateCloudName: string, options?: IscsiPathsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getIscsiPathsOperations(context: AVSContext): IscsiPathsOperations;
//# sourceMappingURL=index.d.ts.map