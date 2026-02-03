// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WidgetManagerContext } from "../../api/widgetManagerContext.js";
import { getAvatarAsJpeg, getAvatarAsPng } from "../../api/fooOperations/operations.js";
import {
  FooOperationsGetAvatarAsJpegOptionalParams,
  FooOperationsGetAvatarAsPngOptionalParams,
} from "../../api/fooOperations/options.js";
import { GetAvatarAsPngResponse, GetAvatarAsJpegResponse } from "../../models/models.js";

/** Interface representing a FooOperations operations. */
export interface FooOperationsOperations {
  /** A remote procedure call (RPC) operation. */
  getAvatarAsJpeg: (
    image: Uint8Array,
    options?: FooOperationsGetAvatarAsJpegOptionalParams,
  ) => Promise<GetAvatarAsJpegResponse>;
  /** A remote procedure call (RPC) operation. */
  getAvatarAsPng: (
    image: Uint8Array,
    options?: FooOperationsGetAvatarAsPngOptionalParams,
  ) => Promise<GetAvatarAsPngResponse>;
}

function _getFooOperations(context: WidgetManagerContext) {
  return {
    getAvatarAsJpeg: (image: Uint8Array, options?: FooOperationsGetAvatarAsJpegOptionalParams) =>
      getAvatarAsJpeg(context, image, options),
    getAvatarAsPng: (image: Uint8Array, options?: FooOperationsGetAvatarAsPngOptionalParams) =>
      getAvatarAsPng(context, image, options),
  };
}

export function _getFooOperationsOperations(
  context: WidgetManagerContext,
): FooOperationsOperations {
  return {
    ..._getFooOperations(context),
  };
}
