// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import {
  createVariation,
  createEdit,
  create,
  ImagesCreateVariationOptionalParams,
  ImagesCreateEditOptionalParams,
  ImagesCreateOptionalParams,
} from "../../api/images/index.js";
import {
  CreateImageRequest,
  ImagesResponse,
  CreateImageEditRequest,
  CreateImageVariationRequest,
} from "../../models/models.js";

/** Interface representing a Images operations. */
export interface ImagesOperations {
  createVariation: (
    image: CreateImageVariationRequest,
    options?: ImagesCreateVariationOptionalParams,
  ) => Promise<ImagesResponse>;
  createEdit: (
    image: CreateImageEditRequest,
    options?: ImagesCreateEditOptionalParams,
  ) => Promise<ImagesResponse>;
  create: (
    image: CreateImageRequest,
    options?: ImagesCreateOptionalParams,
  ) => Promise<ImagesResponse>;
}

function _getImages(context: OpenAIContext) {
  return {
    createVariation: (
      image: CreateImageVariationRequest,
      options?: ImagesCreateVariationOptionalParams,
    ) => createVariation(context, image, options),
    createEdit: (
      image: CreateImageEditRequest,
      options?: ImagesCreateEditOptionalParams,
    ) => createEdit(context, image, options),
    create: (image: CreateImageRequest, options?: ImagesCreateOptionalParams) =>
      create(context, image, options),
  };
}

export function _getImagesOperations(context: OpenAIContext): ImagesOperations {
  return {
    ..._getImages(context),
  };
}
