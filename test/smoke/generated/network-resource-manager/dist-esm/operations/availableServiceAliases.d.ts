import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AvailableServiceAliases } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { AvailableServiceAlias, AvailableServiceAliasesListOptionalParams, AvailableServiceAliasesListByResourceGroupOptionalParams } from "../models";
/** Class representing a AvailableServiceAliases. */
export declare class AvailableServiceAliasesImpl implements AvailableServiceAliases {
    private readonly client;
    /**
     * Initialize a new instance of the class AvailableServiceAliases class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gets all available service aliases for this subscription in this region.
     * @param location The location.
     * @param options The options parameters.
     */
    list(location: string, options?: AvailableServiceAliasesListOptionalParams): PagedAsyncIterableIterator<AvailableServiceAlias>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Gets all available service aliases for this resource group in this region.
     * @param resourceGroupName The name of the resource group.
     * @param location The location.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, location: string, options?: AvailableServiceAliasesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<AvailableServiceAlias>;
    private listByResourceGroupPagingPage;
    private listByResourceGroupPagingAll;
    /**
     * Gets all available service aliases for this subscription in this region.
     * @param location The location.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Gets all available service aliases for this resource group in this region.
     * @param resourceGroupName The name of the resource group.
     * @param location The location.
     * @param options The options parameters.
     */
    private _listByResourceGroup;
    /**
     * ListNext
     * @param location The location.
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName The name of the resource group.
     * @param location The location.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    private _listByResourceGroupNext;
}
//# sourceMappingURL=availableServiceAliases.d.ts.map