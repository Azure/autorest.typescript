import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Galleries } from "../operationsInterfaces";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { Gallery, GalleriesListByResourceGroupOptionalParams, GalleriesListOptionalParams, GalleriesCreateOrUpdateOptionalParams, GalleriesCreateOrUpdateResponse, GalleryUpdate, GalleriesUpdateOptionalParams, GalleriesUpdateResponse, GalleriesGetOptionalParams, GalleriesGetResponse, GalleriesDeleteOptionalParams } from "../models";
/** Class representing a Galleries. */
export declare class GalleriesImpl implements Galleries {
    private readonly client;
    /**
     * Initialize a new instance of the class Galleries class.
     * @param client Reference to the service client
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * List galleries under a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: GalleriesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Gallery>;
    private listByResourceGroupPagingPage;
    private listByResourceGroupPagingAll;
    /**
     * List galleries under a subscription.
     * @param options The options parameters.
     */
    list(options?: GalleriesListOptionalParams): PagedAsyncIterableIterator<Gallery>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Create or update a Shared Image Gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and
     *                    numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
     * @param gallery Parameters supplied to the create or update Shared Image Gallery operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, galleryName: string, gallery: Gallery, options?: GalleriesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<GalleriesCreateOrUpdateResponse>, GalleriesCreateOrUpdateResponse>>;
    /**
     * Create or update a Shared Image Gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and
     *                    numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
     * @param gallery Parameters supplied to the create or update Shared Image Gallery operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, galleryName: string, gallery: Gallery, options?: GalleriesCreateOrUpdateOptionalParams): Promise<GalleriesCreateOrUpdateResponse>;
    /**
     * Update a Shared Image Gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and
     *                    numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
     * @param gallery Parameters supplied to the update Shared Image Gallery operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, galleryName: string, gallery: GalleryUpdate, options?: GalleriesUpdateOptionalParams): Promise<PollerLike<PollOperationState<GalleriesUpdateResponse>, GalleriesUpdateResponse>>;
    /**
     * Update a Shared Image Gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and
     *                    numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
     * @param gallery Parameters supplied to the update Shared Image Gallery operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, galleryName: string, gallery: GalleryUpdate, options?: GalleriesUpdateOptionalParams): Promise<GalleriesUpdateResponse>;
    /**
     * Retrieves information about a Shared Image Gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, galleryName: string, options?: GalleriesGetOptionalParams): Promise<GalleriesGetResponse>;
    /**
     * Delete a Shared Image Gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery to be deleted.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, galleryName: string, options?: GalleriesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Delete a Shared Image Gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery to be deleted.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, galleryName: string, options?: GalleriesDeleteOptionalParams): Promise<void>;
    /**
     * List galleries under a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    private _listByResourceGroup;
    /**
     * List galleries under a subscription.
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
//# sourceMappingURL=galleries.d.ts.map