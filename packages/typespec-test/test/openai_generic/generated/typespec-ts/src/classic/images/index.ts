// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  createImage,
  createImageEdit,
  createImageVariation,
} from "../../api/images/index.js";
import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateImageRequest,
  ImagesResponse,
  CreateImageEditRequest,
  CreateImageVariationRequest,
} from "../../models/models.js";
import {
  CreateImageOptions,
  CreateImageEditOptions,
  CreateImageVariationOptions,
} from "../../models/options.js";

export interface ImagesOperations {
  images: {
    createImage: (
      image: CreateImageRequest,
      options?: CreateImageOptions
    ) => Promise<ImagesResponse>;
    createImageEdit: (
      image: CreateImageEditRequest,
      options?: CreateImageEditOptions
    ) => Promise<ImagesResponse>;
    createImageVariation: (
      image: CreateImageVariationRequest,
      options?: CreateImageVariationOptions
    ) => Promise<ImagesResponse>;
  };
}

export function getImages(context: OpenAIContext) {
  return {
    createImage: (image: CreateImageRequest, options?: CreateImageOptions) =>
      createImage(context, image, options),
    createImageEdit: (
      image: CreateImageEditRequest,
      options?: CreateImageEditOptions
    ) => createImageEdit(context, image, options),
    createImageVariation: (
      image: CreateImageVariationRequest,
      options?: CreateImageVariationOptions
    ) => createImageVariation(context, image, options),
  };
}

export function getImagesOperations(context: OpenAIContext): ImagesOperations {
  return {
    images: getImages(context),
  };
}
