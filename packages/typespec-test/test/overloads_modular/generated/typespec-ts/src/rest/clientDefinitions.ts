// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetAvatarAsPngParameters,
  GetAvatarAsJpegParameters,
} from "./parameters.js";
import {
  GetAvatarAsPng200Response,
  GetAvatarAsPngDefaultResponse,
  GetAvatarAsJpeg200Response,
  GetAvatarAsJpegDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetAvatarAsPng {
  /** A remote procedure call (RPC) operation. */
  post(
    options: GetAvatarAsPngParameters,
  ): StreamableMethod<
    GetAvatarAsPng200Response | GetAvatarAsPngDefaultResponse
  >;
  /** A remote procedure call (RPC) operation. */
  post(
    options: GetAvatarAsJpegParameters,
  ): StreamableMethod<
    GetAvatarAsJpeg200Response | GetAvatarAsJpegDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/avatar' has methods for the following verbs: post */
  (path: "/avatar"): GetAvatarAsPng;
}

export type WidgetManagerContext = Client & {
  path: Routes;
};
