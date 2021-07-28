import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { BastionHosts } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { BastionHost, BastionHostsListOptionalParams, BastionHostsListByResourceGroupOptionalParams, BastionHostsDeleteOptionalParams, BastionHostsGetOptionalParams, BastionHostsGetResponse, BastionHostsCreateOrUpdateOptionalParams, BastionHostsCreateOrUpdateResponse } from "../models";
/** Class representing a BastionHosts. */
export declare class BastionHostsImpl implements BastionHosts {
    private readonly client;
    /**
     * Initialize a new instance of the class BastionHosts class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Lists all Bastion Hosts in a subscription.
     * @param options The options parameters.
     */
    list(options?: BastionHostsListOptionalParams): PagedAsyncIterableIterator<BastionHost>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Lists all Bastion Hosts in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: BastionHostsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<BastionHost>;
    private listByResourceGroupPagingPage;
    private listByResourceGroupPagingAll;
    /**
     * Deletes the specified Bastion Host.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, bastionHostName: string, options?: BastionHostsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified Bastion Host.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, bastionHostName: string, options?: BastionHostsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified Bastion Host.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, bastionHostName: string, options?: BastionHostsGetOptionalParams): Promise<BastionHostsGetResponse>;
    /**
     * Creates or updates the specified Bastion Host.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param parameters Parameters supplied to the create or update Bastion Host operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, bastionHostName: string, parameters: BastionHost, options?: BastionHostsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<BastionHostsCreateOrUpdateResponse>, BastionHostsCreateOrUpdateResponse>>;
    /**
     * Creates or updates the specified Bastion Host.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param parameters Parameters supplied to the create or update Bastion Host operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, bastionHostName: string, parameters: BastionHost, options?: BastionHostsCreateOrUpdateOptionalParams): Promise<BastionHostsCreateOrUpdateResponse>;
    /**
     * Lists all Bastion Hosts in a subscription.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Lists all Bastion Hosts in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    private _listByResourceGroup;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName The name of the resource group.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    private _listByResourceGroupNext;
}
//# sourceMappingURL=bastionHosts.d.ts.map