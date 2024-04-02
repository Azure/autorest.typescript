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
  ImagesCreateOptionalParams,
  ImagesCreateEditOptionalParams,
  ImagesCreateVariationOptionalParams,
} from "../../models/options.js";

export interface Images {
  create: (
    image: CreateImageRequest,
    options?: ImagesCreateOptionalParams,
  ) => Promise<ImagesResponse>;
  createEdit: (
    image: CreateImageEditRequest,
    options?: ImagesCreateEditOptionalParams,
  ) => Promise<ImagesResponse>;
  createVariation: (
    image: CreateImageVariationRequest,
    options?: ImagesCreateVariationOptionalParams,
  ) => Promise<ImagesResponse>;
}

export function getImages(context: OpenAIContext) {
  return {
    create: (image: CreateImageRequest, options?: ImagesCreateOptionalParams) =>
      create(context, image, options),
    createEdit: (
      image: CreateImageEditRequest,
      options?: ImagesCreateEditOptionalParams,
    ) => createEdit(context, image, options),
    createVariation: (
      image: CreateImageVariationRequest,
      options?: ImagesCreateVariationOptionalParams,
    ) => createVariation(context, image, options),
  };
}

export function getImagesOperations(context: OpenAIContext): Images {
  return {
    ...getImages(context),
  };
}
