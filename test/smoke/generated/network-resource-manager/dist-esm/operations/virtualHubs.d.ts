import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VirtualHubs } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { VirtualHub, VirtualHubsListByResourceGroupOptionalParams, VirtualHubsListOptionalParams, VirtualHubsGetOptionalParams, VirtualHubsGetResponse, VirtualHubsCreateOrUpdateOptionalParams, VirtualHubsCreateOrUpdateResponse, TagsObject, VirtualHubsUpdateTagsOptionalParams, VirtualHubsUpdateTagsResponse, VirtualHubsDeleteOptionalParams } from "../models";
/** Class representing a VirtualHubs. */
export declare class VirtualHubsImpl implements VirtualHubs {
    private readonly client;
    /**
     * Initialize a new instance of the class VirtualHubs class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Lists all the VirtualHubs in a resource group.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: VirtualHubsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<VirtualHub>;
    private listByResourceGroupPagingPage;
    private listByResourceGroupPagingAll;
    /**
     * Lists all the VirtualHubs in a subscription.
     * @param options The options parameters.
     */
    list(options?: VirtualHubsListOptionalParams): PagedAsyncIterableIterator<VirtualHub>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Retrieves the details of a VirtualHub.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualHubName: string, options?: VirtualHubsGetOptionalParams): Promise<VirtualHubsGetResponse>;
    /**
     * Creates a VirtualHub resource if it doesn't exist else updates the existing VirtualHub.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param virtualHubParameters Parameters supplied to create or update VirtualHub.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualHubName: string, virtualHubParameters: VirtualHub, options?: VirtualHubsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualHubsCreateOrUpdateResponse>, VirtualHubsCreateOrUpdateResponse>>;
    /**
     * Creates a VirtualHub resource if it doesn't exist else updates the existing VirtualHub.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param virtualHubParameters Parameters supplied to create or update VirtualHub.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, virtualHubName: string, virtualHubParameters: VirtualHub, options?: VirtualHubsCreateOrUpdateOptionalParams): Promise<VirtualHubsCreateOrUpdateResponse>;
    /**
     * Updates VirtualHub tags.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param virtualHubParameters Parameters supplied to update VirtualHub tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, virtualHubName: string, virtualHubParameters: TagsObject, options?: VirtualHubsUpdateTagsOptionalParams): Promise<VirtualHubsUpdateTagsResponse>;
    /**
     * Deletes a VirtualHub.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, virtualHubName: string, options?: VirtualHubsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a VirtualHub.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, virtualHubName: string, options?: VirtualHubsDeleteOptionalParams): Promise<void>;
    /**
     * Lists all the VirtualHubs in a resource group.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param options The options parameters.
     */
    private _listByResourceGroup;
    /**
     * Lists all the VirtualHubs in a subscription.
     * @param options The options parameters.
     */
    private _list;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName The resource group name of the VirtualHub.
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
//# sourceMappingURL=virtualHubs.d.ts.map