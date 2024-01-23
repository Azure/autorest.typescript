// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateImageRequest,
  ImagesResponse,
  CreateImageEditRequest,
  CreateImageVariationRequest,
} from "../../models/models.js";
import { create, createEdit, createVariation } from "../../api/images/index.js";
import {
  ImagesCreateOptions,
  ImagesCreateEditOptions,
  ImagesCreateVariationOptions,
} from "../../models/options.js";

export interface ImagesOperations {
  create: (
    image: CreateImageRequest,
    options?: ImagesCreateOptions,
  ) => Promise<ImagesResponse>;
  createEdit: (
    image: CreateImageEditRequest,
    options?: ImagesCreateEditOptions,
  ) => Promise<ImagesResponse>;
  createVariation: (
    image: CreateImageVariationRequest,
    options?: ImagesCreateVariationOptions,
  ) => Promise<ImagesResponse>;
}

export function getImages(context: OpenAIContext) {
  return {
    create: (image: CreateImageRequest, options?: ImagesCreateOptions) =>
      create(context, image, options),
    createEdit: (
      image: CreateImageEditRequest,
      options?: ImagesCreateEditOptions,
    ) => createEdit(context, image, options),
    createVariation: (
      image: CreateImageVariationRequest,
      options?: ImagesCreateVariationOptions,
    ) => createVariation(context, image, options),
  };
}

export function getImagesOperations(context: OpenAIContext): ImagesOperations {
  return {
    ...getImages(context),
  };
}
