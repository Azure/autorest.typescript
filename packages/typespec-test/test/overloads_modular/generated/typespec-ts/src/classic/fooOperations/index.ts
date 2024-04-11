// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { WidgetManagerContext } from "../../api/widgetManagerContext.js";
import {
  getAvatarAsPng,
  getAvatarAsJpeg,
} from "../../api/fooOperations/index.js";
import {
  FooOperationsGetAvatarAsPngOptionalParams,
  FooOperationsGetAvatarAsJpegOptionalParams,
} from "../../models/options.js";

export interface FooOperationsOperations {
  getAvatarAsPng: (
    image: Uint8Array,
    options?: FooOperationsGetAvatarAsPngOptionalParams,
  ) => Promise<void>;
  getAvatarAsJpeg: (
    image: Uint8Array,
    options?: FooOperationsGetAvatarAsJpegOptionalParams,
  ) => Promise<void>;
}

export function getFooOperations(context: WidgetManagerContext) {
  return {
    getAvatarAsPng: (
      image: Uint8Array,
      options?: FooOperationsGetAvatarAsPngOptionalParams,
    ) => getAvatarAsPng(context, image, options),
    getAvatarAsJpeg: (
      image: Uint8Array,
      options?: FooOperationsGetAvatarAsJpegOptionalParams,
    ) => getAvatarAsJpeg(context, image, options),
  };
}

export function getFooOperationsOperations(
  context: WidgetManagerContext,
): FooOperationsOperations {
  return {
    ...getFooOperations(context),
  };
}
