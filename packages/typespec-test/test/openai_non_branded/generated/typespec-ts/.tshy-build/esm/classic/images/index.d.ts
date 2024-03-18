import { OpenAIContext } from "../../api/OpenAIContext.js";
import { CreateImageRequest, ImagesResponse, CreateImageEditRequest, CreateImageVariationRequest } from "../../models/models.js";
import { ImagesCreateOptions, ImagesCreateEditOptions, ImagesCreateVariationOptions } from "../../models/options.js";
export interface ImagesOperations {
    create: (image: CreateImageRequest, options?: ImagesCreateOptions) => Promise<ImagesResponse>;
    createEdit: (image: CreateImageEditRequest, options?: ImagesCreateEditOptions) => Promise<ImagesResponse>;
    createVariation: (image: CreateImageVariationRequest, options?: ImagesCreateVariationOptions) => Promise<ImagesResponse>;
}
export declare function getImages(context: OpenAIContext): {
    create: (image: CreateImageRequest, options?: ImagesCreateOptions) => Promise<ImagesResponse>;
    createEdit: (image: CreateImageEditRequest, options?: ImagesCreateEditOptions) => Promise<ImagesResponse>;
    createVariation: (image: CreateImageVariationRequest, options?: ImagesCreateVariationOptions) => Promise<ImagesResponse>;
};
export declare function getImagesOperations(context: OpenAIContext): ImagesOperations;
//# sourceMappingURL=index.d.ts.map