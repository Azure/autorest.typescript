// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WidgetManagerContext } from "../../api/widgetManagerContext.js";
import {
  getAvatarAsJpeg,
  getAvatarAsPng,
} from "../../api/fooOperations/index.js";
import {
  FooOperationsGetAvatarAsJpegOptionalParams,
  FooOperationsGetAvatarAsPngOptionalParams,
} from "../../api/options.js";

/** Interface representing a FooOperations operations. */
export interface FooOperationsOperations {
  /** A remote procedure call (RPC) operation. */
  getAvatarAsJpeg: (
    image: Uint8Array,
    options?: FooOperationsGetAvatarAsJpegOptionalParams,
  ) => Promise<void>;
  /** A remote procedure call (RPC) operation. */
  getAvatarAsPng: (
    image: Uint8Array,
    options?: FooOperationsGetAvatarAsPngOptionalParams,
  ) => Promise<void>;
}

function _getFooOperations(context: WidgetManagerContext) {
  return {
    getAvatarAsJpeg: (
      image: Uint8Array,
      options?: FooOperationsGetAvatarAsJpegOptionalParams,
    ) => getAvatarAsJpeg(context, image, options),
    getAvatarAsPng: (
      image: Uint8Array,
      options?: FooOperationsGetAvatarAsPngOptionalParams,
    ) => getAvatarAsPng(context, image, options),
  };
}

export function getFooOperationsOperations(
  context: WidgetManagerContext,
): FooOperationsOperations {
  return {
    ..._getFooOperations(context),
  };
}
