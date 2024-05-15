// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetAvatarAsPngParameters,
  GetAvatarAsJpegParameters,
} from "./parameters.js";
import {
  GetAvatarAsPng204Response,
  GetAvatarAsPngDefaultResponse,
  GetAvatarAsJpeg204Response,
  GetAvatarAsJpegDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetAvatarAsPng {
  /** A remote procedure call (RPC) operation. */
  post(
    options: GetAvatarAsPngParameters,
  ): StreamableMethod<
    GetAvatarAsPng204Response | GetAvatarAsPngDefaultResponse
  >;
  /** A remote procedure call (RPC) operation. */
  post(
    options: GetAvatarAsJpegParameters,
  ): StreamableMethod<
    GetAvatarAsJpeg204Response | GetAvatarAsJpegDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/avatar' has methods for the following verbs: post */
  (path: "/avatar"): GetAvatarAsPng;
}

export type WidgetManagerContext = Client & {
  path: Routes;
};
