// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  imagesCreate,
  imagesCreateEdit,
  imagesCreateVariation,
} from "../../api/images/index.js";
import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateImageRequest,
  ImagesResponse,
  CreateImageEditRequest,
  CreateImageVariationRequest,
} from "../../models/models.js";
import {
  ImagesCreateOptions,
  ImagesCreateEditOptions,
  ImagesCreateVariationOptions,
} from "../../models/options.js";

export interface ImagesOperations {
  images: {
    create: (
      image: CreateImageRequest,
      options?: ImagesCreateOptions
    ) => Promise<ImagesResponse>;
    createEdit: (
      image: CreateImageEditRequest,
      options?: ImagesCreateEditOptions
    ) => Promise<ImagesResponse>;
    createVariation: (
      image: CreateImageVariationRequest,
      options?: ImagesCreateVariationOptions
    ) => Promise<ImagesResponse>;
  };
}

export function getImages(context: OpenAIContext) {
  return {
    create: (image: CreateImageRequest, options?: ImagesCreateOptions) =>
      imagesCreate(context, image, options),
    createEdit: (
      image: CreateImageEditRequest,
      options?: ImagesCreateEditOptions
    ) => imagesCreateEdit(context, image, options),
    createVariation: (
      image: CreateImageVariationRequest,
      options?: ImagesCreateVariationOptions
    ) => imagesCreateVariation(context, image, options),
  };
}

export function getImagesOperations(context: OpenAIContext): ImagesOperations {
  return {
    images: getImages(context),
  };
}
