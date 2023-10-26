// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  create,
  createEdit,
  createVariation,
  CreateOptions,
  CreateEditOptions,
  CreateVariationOptions,
} from "../../api/images/index.js";
import {
  CreateImageRequest,
  ImagesResponse,
  CreateImageEditRequest,
  CreateImageVariationRequest,
} from "../../models/models.js";

export interface ImagesOperations {
  images: {
    create: (
      image: CreateImageRequest,
      options?: CreateOptions
    ) => Promise<ImagesResponse>;
    createEdit: (
      image: CreateImageEditRequest,
      options?: CreateEditOptions
    ) => Promise<ImagesResponse>;
    createVariation: (
      image: CreateImageVariationRequest,
      options?: CreateVariationOptions
    ) => Promise<ImagesResponse>;
  };
}

export function getImages(context: OpenAIContext) {
  return {
    create: (image: CreateImageRequest, options?: CreateOptions) =>
      create(context, image, options),
    createEdit: (image: CreateImageEditRequest, options?: CreateEditOptions) =>
      createEdit(context, image, options),
    createVariation: (
      image: CreateImageVariationRequest,
      options?: CreateVariationOptions
    ) => createVariation(context, image, options),
  };
}

export function getImagesOperations(context: OpenAIContext): ImagesOperations {
  return {
    images: getImages(context),
  };
}
