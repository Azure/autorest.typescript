// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { WidgetManagerContext } from "../../api/WidgetManagerContext.js";
import {
  getAvatarAsPng,
  getAvatarAsJpeg,
} from "../../api/fooOperations/index.js";
import {
  FooOperationsGetAvatarAsPngOptions,
  FooOperationsGetAvatarAsJpegOptions,
} from "../../models/options.js";

export interface FooOperationsOperations {
  getAvatarAsPng: (
    image: Uint8Array,
    options?: FooOperationsGetAvatarAsPngOptions,
  ) => Promise<void>;
  getAvatarAsJpeg: (
    image: Uint8Array,
    options?: FooOperationsGetAvatarAsJpegOptions,
  ) => Promise<void>;
}

export function getFooOperations(context: WidgetManagerContext) {
  return {
    getAvatarAsPng: (
      image: Uint8Array,
      options?: FooOperationsGetAvatarAsPngOptions,
    ) => getAvatarAsPng(context, image, options),
    getAvatarAsJpeg: (
      image: Uint8Array,
      options?: FooOperationsGetAvatarAsJpegOptions,
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
