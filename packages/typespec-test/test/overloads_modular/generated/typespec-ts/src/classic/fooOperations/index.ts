// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WidgetManagerContext } from "../../api/widgetManagerContext.js";
import {
  getAvatarAsPng,
  getAvatarAsJpeg,
} from "../../api/fooOperations/index.js";
import {
  FooOperationsGetAvatarAsPngOptionalParams,
  FooOperationsGetAvatarAsJpegOptionalParams,
} from "../../api/options.js";

/** Interface representing a FooOperations operations. */
export interface FooOperationsOperations {
  /** A remote procedure call (RPC) operation. */
  getAvatarAsPng: (
    image: Uint8Array,
    options?: FooOperationsGetAvatarAsPngOptionalParams,
  ) => Promise<void>;
  /** A remote procedure call (RPC) operation. */
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
