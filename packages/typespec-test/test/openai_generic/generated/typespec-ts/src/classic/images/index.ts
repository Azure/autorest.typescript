// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import { create, createEdit, createVariation } from "../../api/images/index.js";
import {
  ImagesCreateOptionalParams,
  ImagesCreateEditOptionalParams,
  ImagesCreateVariationOptionalParams,
} from "../../api/options.js";
import {
  CreateImageRequest,
  ImagesResponse,
  CreateImageEditRequest,
  CreateImageVariationRequest,
} from "../../models/models.js";

/** Interface representing a Images operations. */
export interface ImagesOperations {
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

export function getImagesOperations(context: OpenAIContext): ImagesOperations {
  return {
    ...getImages(context),
  };
}
