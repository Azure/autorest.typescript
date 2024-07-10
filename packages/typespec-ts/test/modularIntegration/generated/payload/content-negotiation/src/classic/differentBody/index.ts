// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ContentNegotiationContext } from "../../api/contentNegotiationContext.js";
import { PngImageAsJson } from "../../models/models.js";
import {
  getAvatarAsPng,
  getAvatarAsJson,
} from "../../api/differentBody/index.js";
import {
  DifferentBodyGetAvatarAsPngOptionalParams,
  DifferentBodyGetAvatarAsJsonOptionalParams,
} from "../../models/options.js";

/** Interface representing a DifferentBody operations. */
export interface DifferentBodyOperations {
  getAvatarAsPng: (
    options?: DifferentBodyGetAvatarAsPngOptionalParams,
  ) => Promise<Uint8Array>;
  getAvatarAsJson: (
    options?: DifferentBodyGetAvatarAsJsonOptionalParams,
  ) => Promise<PngImageAsJson>;
}

export function getDifferentBody(context: ContentNegotiationContext) {
  return {
    getAvatarAsPng: (options?: DifferentBodyGetAvatarAsPngOptionalParams) =>
      getAvatarAsPng(context, options),
    getAvatarAsJson: (options?: DifferentBodyGetAvatarAsJsonOptionalParams) =>
      getAvatarAsJson(context, options),
  };
}

export function getDifferentBodyOperations(
  context: ContentNegotiationContext,
): DifferentBodyOperations {
  return {
    ...getDifferentBody(context),
  };
}
