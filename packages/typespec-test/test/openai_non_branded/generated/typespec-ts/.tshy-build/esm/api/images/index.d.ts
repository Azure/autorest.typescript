import { CreateImageRequest, ImagesResponse, CreateImageEditRequest, CreateImageVariationRequest } from "../../models/models.js";
import { ImagesCreate200Response, ImagesCreateDefaultResponse, ImagesCreateEdit200Response, ImagesCreateEditDefaultResponse, ImagesCreateVariation200Response, ImagesCreateVariationDefaultResponse, OpenAIContext as Client } from "../../rest/index.js";
import { StreamableMethod } from "@typespec/ts-http-runtime";
import { ImagesCreateOptions, ImagesCreateEditOptions, ImagesCreateVariationOptions } from "../../models/options.js";
export declare function _createSend(context: Client, image: CreateImageRequest, options?: ImagesCreateOptions): StreamableMethod<ImagesCreate200Response | ImagesCreateDefaultResponse>;
export declare function _createDeserialize(result: ImagesCreate200Response | ImagesCreateDefaultResponse): Promise<ImagesResponse>;
export declare function create(context: Client, image: CreateImageRequest, options?: ImagesCreateOptions): Promise<ImagesResponse>;
export declare function _createEditSend(context: Client, image: CreateImageEditRequest, options?: ImagesCreateEditOptions): StreamableMethod<ImagesCreateEdit200Response | ImagesCreateEditDefaultResponse>;
export declare function _createEditDeserialize(result: ImagesCreateEdit200Response | ImagesCreateEditDefaultResponse): Promise<ImagesResponse>;
export declare function createEdit(context: Client, image: CreateImageEditRequest, options?: ImagesCreateEditOptions): Promise<ImagesResponse>;
export declare function _createVariationSend(context: Client, image: CreateImageVariationRequest, options?: ImagesCreateVariationOptions): StreamableMethod<ImagesCreateVariation200Response | ImagesCreateVariationDefaultResponse>;
export declare function _createVariationDeserialize(result: ImagesCreateVariation200Response | ImagesCreateVariationDefaultResponse): Promise<ImagesResponse>;
export declare function createVariation(context: Client, image: CreateImageVariationRequest, options?: ImagesCreateVariationOptions): Promise<ImagesResponse>;
//# sourceMappingURL=index.d.ts.map