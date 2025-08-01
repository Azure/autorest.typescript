// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import { createVariation, createEdit } from "../../api/images/operations.js";
import {
  ImagesCreateVariationOptionalParams,
  ImagesCreateEditOptionalParams,
} from "../../api/images/options.js";
import {
  CreateImageEditRequest,
  ImagesResponse,
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
  };
}

export function _getImagesOperations(context: OpenAIContext): ImagesOperations {
  return {
    ..._getImages(context),
  };
}
