// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ContentNegotiationContext } from "../../api/contentNegotiationContext.js";
import { getAvatarAsPng, getAvatarAsJpeg } from "../../api/sameBody/index.js";
import {
  SameBodyGetAvatarAsPngOptionalParams,
  SameBodyGetAvatarAsJpegOptionalParams,
} from "../../models/options.js";

export interface SameBodyOperations {
  getAvatarAsPng: (
    options?: SameBodyGetAvatarAsPngOptionalParams,
  ) => Promise<Uint8Array>;
  getAvatarAsJpeg: (
    options?: SameBodyGetAvatarAsJpegOptionalParams,
  ) => Promise<Uint8Array>;
}

export function getSameBody(context: ContentNegotiationContext) {
  return {
    getAvatarAsPng: (options?: SameBodyGetAvatarAsPngOptionalParams) =>
      getAvatarAsPng(context, options),
    getAvatarAsJpeg: (options?: SameBodyGetAvatarAsJpegOptionalParams) =>
      getAvatarAsJpeg(context, options),
  };
}

export function getSameBodyOperations(
  context: ContentNegotiationContext,
): SameBodyOperations {
  return {
    ...getSameBody(context),
  };
}
