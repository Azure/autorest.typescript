// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "@azure-rest/core-client";
import {
  createImage,
  createImageEdit,
  createImageVariation,
} from "../../api/images";
import {
  CreateImageRequest,
  CreateImageOptions,
  ImagesResponse,
  CreateImageEditRequest,
  CreateImageEditOptions,
  CreateImageVariationRequest,
  CreateImageVariationOptions,
} from "../../models";

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

export function getImages(context: Client) {
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

export function getImagesOperations(): ImagesOperations {
  return {
    images: getImages,
  };
}
