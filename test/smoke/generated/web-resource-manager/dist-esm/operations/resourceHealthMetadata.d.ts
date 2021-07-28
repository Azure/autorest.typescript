import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ResourceHealthMetadata } from "../operationsInterfaces";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";
import { ResourceHealthMetadataDef, ResourceHealthMetadataListOptionalParams, ResourceHealthMetadataListByResourceGroupOptionalParams, ResourceHealthMetadataListBySiteOptionalParams, ResourceHealthMetadataListBySiteSlotOptionalParams, ResourceHealthMetadataGetBySiteOptionalParams, ResourceHealthMetadataGetBySiteResponse, ResourceHealthMetadataGetBySiteSlotOptionalParams, ResourceHealthMetadataGetBySiteSlotResponse } from "../models";
/** Class representing a ResourceHealthMetadata. */
export declare class ResourceHealthMetadataImpl implements ResourceHealthMetadata {
    private readonly client;
    /**
     * Initialize a new instance of the class ResourceHealthMetadata class.
     * @param client Reference to the service client
     */
    constructor(client: WebSiteManagementClientContext);
    /**
     * Description for List all ResourceHealthMetadata for all sites in the subscription.
     * @param options The options parameters.
     */
    list(options?: ResourceHealthMetadataListOptionalParams): PagedAsyncIterableIterator<ResourceHealthMetadataDef>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Description for List all ResourceHealthMetadata for all sites in the resource group in the
     * subscription.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ResourceHealthMetadataListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ResourceHealthMetadataDef>;
    private listByResourceGroupPagingPage;
    private listByResourceGroupPagingAll;
    /**
     * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
     * collection
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param options The options parameters.
     */
    listBySite(resourceGroupName: string, name: string, options?: ResourceHealthMetadataListBySiteOptionalParams): PagedAsyncIterableIterator<ResourceHealthMetadataDef>;
    private listBySitePagingPage;
    private listBySitePagingAll;
    /**
     * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
     * collection
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param options The options parameters.
     */
    listBySiteSlot(resourceGroupName: string, name: string, slot: string, options?: ResourceHealthMetadataListBySiteSlotOptionalParams): PagedAsyncIterableIterator<ResourceHealthMetadataDef>;
    private listBySiteSlotPagingPage;
    private listBySiteSlotPagingAll;
    /**
     * Description for List all ResourceHealthMetadata for all sites in the subscription.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Description for List all ResourceHealthMetadata for all sites in the resource group in the
     * subscription.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    private _listByResourceGroup;
    /**
     * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
     * collection
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param options The options parameters.
     */
    private _listBySite;
    /**
     * Description for Gets the category of ResourceHealthMetadata to use for the given site
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app
     * @param options The options parameters.
     */
    getBySite(resourceGroupName: string, name: string, options?: ResourceHealthMetadataGetBySiteOptionalParams): Promise<ResourceHealthMetadataGetBySiteResponse>;
    /**
     * Description for Gets the category of ResourceHealthMetadata to use for the given site as a
     * collection
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param options The options parameters.
     */
    private _listBySiteSlot;
    /**
     * Description for Gets the category of ResourceHealthMetadata to use for the given site
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param options The options parameters.
     */
    getBySiteSlot(resourceGroupName: string, name: string, slot: string, options?: ResourceHealthMetadataGetBySiteSlotOptionalParams): Promise<ResourceHealthMetadataGetBySiteSlotResponse>;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    private _listByResourceGroupNext;
    /**
     * ListBySiteNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param nextLink The nextLink from the previous successful call to the ListBySite method.
     * @param options The options parameters.
     */
    private _listBySiteNext;
    /**
     * ListBySiteSlotNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of web app.
     * @param slot Name of web app slot. If not specified then will default to production slot.
     * @param nextLink The nextLink from the previous successful call to the ListBySiteSlot method.
     * @param options The options parameters.
     */
    private _listBySiteSlotNext;
}
//# sourceMappingURL=resourceHealthMetadata.d.ts.map