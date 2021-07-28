import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DiskEncryptionSets } from "../operationsInterfaces";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { DiskEncryptionSet, DiskEncryptionSetsListByResourceGroupOptionalParams, DiskEncryptionSetsListOptionalParams, DiskEncryptionSetsCreateOrUpdateOptionalParams, DiskEncryptionSetsCreateOrUpdateResponse, DiskEncryptionSetUpdate, DiskEncryptionSetsUpdateOptionalParams, DiskEncryptionSetsUpdateResponse, DiskEncryptionSetsGetOptionalParams, DiskEncryptionSetsGetResponse, DiskEncryptionSetsDeleteOptionalParams } from "../models";
/** Class representing a DiskEncryptionSets. */
export declare class DiskEncryptionSetsImpl implements DiskEncryptionSets {
    private readonly client;
    /**
     * Initialize a new instance of the class DiskEncryptionSets class.
     * @param client Reference to the service client
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Lists all the disk encryption sets under a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: DiskEncryptionSetsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<DiskEncryptionSet>;
    private listByResourceGroupPagingPage;
    private listByResourceGroupPagingAll;
    /**
     * Lists all the disk encryption sets under a subscription.
     * @param options The options parameters.
     */
    list(options?: DiskEncryptionSetsListOptionalParams): PagedAsyncIterableIterator<DiskEncryptionSet>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Creates or updates a disk encryption set
     * @param resourceGroupName The name of the resource group.
     * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
     *                              can't be changed after the disk encryption set is created. Supported characters for the name are
     *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     * @param diskEncryptionSet disk encryption set object supplied in the body of the Put disk encryption
     *                          set operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, diskEncryptionSetName: string, diskEncryptionSet: DiskEncryptionSet, options?: DiskEncryptionSetsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<DiskEncryptionSetsCreateOrUpdateResponse>, DiskEncryptionSetsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a disk encryption set
     * @param resourceGroupName The name of the resource group.
     * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
     *                              can't be changed after the disk encryption set is created. Supported characters for the name are
     *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     * @param diskEncryptionSet disk encryption set object supplied in the body of the Put disk encryption
     *                          set operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, diskEncryptionSetName: string, diskEncryptionSet: DiskEncryptionSet, options?: DiskEncryptionSetsCreateOrUpdateOptionalParams): Promise<DiskEncryptionSetsCreateOrUpdateResponse>;
    /**
     * Updates (patches) a disk encryption set.
     * @param resourceGroupName The name of the resource group.
     * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
     *                              can't be changed after the disk encryption set is created. Supported characters for the name are
     *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     * @param diskEncryptionSet disk encryption set object supplied in the body of the Patch disk
     *                          encryption set operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, diskEncryptionSetName: string, diskEncryptionSet: DiskEncryptionSetUpdate, options?: DiskEncryptionSetsUpdateOptionalParams): Promise<PollerLike<PollOperationState<DiskEncryptionSetsUpdateResponse>, DiskEncryptionSetsUpdateResponse>>;
    /**
     * Updates (patches) a disk encryption set.
     * @param resourceGroupName The name of the resource group.
     * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
     *                              can't be changed after the disk encryption set is created. Supported characters for the name are
     *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     * @param diskEncryptionSet disk encryption set object supplied in the body of the Patch disk
     *                          encryption set operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, diskEncryptionSetName: string, diskEncryptionSet: DiskEncryptionSetUpdate, options?: DiskEncryptionSetsUpdateOptionalParams): Promise<DiskEncryptionSetsUpdateResponse>;
    /**
     * Gets information about a disk encryption set.
     * @param resourceGroupName The name of the resource group.
     * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
     *                              can't be changed after the disk encryption set is created. Supported characters for the name are
     *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, diskEncryptionSetName: string, options?: DiskEncryptionSetsGetOptionalParams): Promise<DiskEncryptionSetsGetResponse>;
    /**
     * Deletes a disk encryption set.
     * @param resourceGroupName The name of the resource group.
     * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
     *                              can't be changed after the disk encryption set is created. Supported characters for the name are
     *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, diskEncryptionSetName: string, options?: DiskEncryptionSetsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a disk encryption set.
     * @param resourceGroupName The name of the resource group.
     * @param diskEncryptionSetName The name of the disk encryption set that is being created. The name
     *                              can't be changed after the disk encryption set is created. Supported characters for the name are
     *                              a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, diskEncryptionSetName: string, options?: DiskEncryptionSetsDeleteOptionalParams): Promise<void>;
    /**
     * Lists all the disk encryption sets under a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    private _listByResourceGroup;
    /**
     * Lists all the disk encryption sets under a subscription.
     * @param options The options parameters.
     */
    private _list;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName The name of the resource group.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    private _listByResourceGroupNext;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=diskEncryptionSets.d.ts.map