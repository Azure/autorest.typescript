import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { GalleryImages } from "../operationsInterfaces";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { GalleryImage, GalleryImagesListByGalleryOptionalParams, GalleryImagesCreateOrUpdateOptionalParams, GalleryImagesCreateOrUpdateResponse, GalleryImageUpdate, GalleryImagesUpdateOptionalParams, GalleryImagesUpdateResponse, GalleryImagesGetOptionalParams, GalleryImagesGetResponse, GalleryImagesDeleteOptionalParams } from "../models";
/** Class representing a GalleryImages. */
export declare class GalleryImagesImpl implements GalleryImages {
    private readonly client;
    /**
     * Initialize a new instance of the class GalleryImages class.
     * @param client Reference to the service client
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * List gallery Image Definitions in a gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery from which Image Definitions are to be
     *                    listed.
     * @param options The options parameters.
     */
    listByGallery(resourceGroupName: string, galleryName: string, options?: GalleryImagesListByGalleryOptionalParams): PagedAsyncIterableIterator<GalleryImage>;
    private listByGalleryPagingPage;
    private listByGalleryPagingAll;
    /**
     * Create or update a gallery Image Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
     *                    created.
     * @param galleryImageName The name of the gallery Image Definition to be created or updated. The
     *                         allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle.
     *                         The maximum length is 80 characters.
     * @param galleryImage Parameters supplied to the create or update gallery image operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImage: GalleryImage, options?: GalleryImagesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<GalleryImagesCreateOrUpdateResponse>, GalleryImagesCreateOrUpdateResponse>>;
    /**
     * Create or update a gallery Image Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
     *                    created.
     * @param galleryImageName The name of the gallery Image Definition to be created or updated. The
     *                         allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the middle.
     *                         The maximum length is 80 characters.
     * @param galleryImage Parameters supplied to the create or update gallery image operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImage: GalleryImage, options?: GalleryImagesCreateOrUpdateOptionalParams): Promise<GalleryImagesCreateOrUpdateResponse>;
    /**
     * Update a gallery Image Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
     *                    updated.
     * @param galleryImageName The name of the gallery Image Definition to be updated. The allowed
     *                         characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The
     *                         maximum length is 80 characters.
     * @param galleryImage Parameters supplied to the update gallery image operation.
     * @param options The options parameters.
     */
    beginUpdate(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImage: GalleryImageUpdate, options?: GalleryImagesUpdateOptionalParams): Promise<PollerLike<PollOperationState<GalleryImagesUpdateResponse>, GalleryImagesUpdateResponse>>;
    /**
     * Update a gallery Image Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
     *                    updated.
     * @param galleryImageName The name of the gallery Image Definition to be updated. The allowed
     *                         characters are alphabets and numbers with dots, dashes, and periods allowed in the middle. The
     *                         maximum length is 80 characters.
     * @param galleryImage Parameters supplied to the update gallery image operation.
     * @param options The options parameters.
     */
    beginUpdateAndWait(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImage: GalleryImageUpdate, options?: GalleryImagesUpdateOptionalParams): Promise<GalleryImagesUpdateResponse>;
    /**
     * Retrieves information about a gallery Image Definition.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery from which the Image Definitions are to be
     *                    retrieved.
     * @param galleryImageName The name of the gallery Image Definition to be retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, galleryName: string, galleryImageName: string, options?: GalleryImagesGetOptionalParams): Promise<GalleryImagesGetResponse>;
    /**
     * Delete a gallery image.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
     *                    deleted.
     * @param galleryImageName The name of the gallery Image Definition to be deleted.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, galleryName: string, galleryImageName: string, options?: GalleryImagesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Delete a gallery image.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery in which the Image Definition is to be
     *                    deleted.
     * @param galleryImageName The name of the gallery Image Definition to be deleted.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, galleryName: string, galleryImageName: string, options?: GalleryImagesDeleteOptionalParams): Promise<void>;
    /**
     * List gallery Image Definitions in a gallery.
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery from which Image Definitions are to be
     *                    listed.
     * @param options The options parameters.
     */
    private _listByGallery;
    /**
     * ListByGalleryNext
     * @param resourceGroupName The name of the resource group.
     * @param galleryName The name of the Shared Image Gallery from which Image Definitions are to be
     *                    listed.
     * @param nextLink The nextLink from the previous successful call to the ListByGallery method.
     * @param options The options parameters.
     */
    private _listByGalleryNext;
}
//# sourceMappingURL=galleryImages.d.ts.map