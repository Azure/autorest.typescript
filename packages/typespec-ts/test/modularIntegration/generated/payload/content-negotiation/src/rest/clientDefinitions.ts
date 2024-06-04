// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  SameBodyGetAvatarAsPngParameters,
  SameBodyGetAvatarAsJpegParameters,
  DifferentBodyGetAvatarAsPngParameters,
  DifferentBodyGetAvatarAsJsonParameters,
} from "./parameters.js";
import {
  SameBodyGetAvatarAsPng200Response,
  SameBodyGetAvatarAsJpeg200Response,
  DifferentBodyGetAvatarAsPng200Response,
  DifferentBodyGetAvatarAsJson200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface SameBodyGetAvatarAsPng {
  get(
    options: SameBodyGetAvatarAsPngParameters,
  ): StreamableMethod<SameBodyGetAvatarAsPng200Response>;
  get(
    options: SameBodyGetAvatarAsJpegParameters,
  ): StreamableMethod<SameBodyGetAvatarAsJpeg200Response>;
}

export interface DifferentBodyGetAvatarAsPng {
  get(
    options: DifferentBodyGetAvatarAsPngParameters,
  ): StreamableMethod<DifferentBodyGetAvatarAsPng200Response>;
  get(
    options: DifferentBodyGetAvatarAsJsonParameters,
  ): StreamableMethod<DifferentBodyGetAvatarAsJson200Response>;
}

export interface Routes {
  /** Resource for '/content-negotiation/same-body' has methods for the following verbs: get */
  (path: "/content-negotiation/same-body"): SameBodyGetAvatarAsPng;
  /** Resource for '/content-negotiation/different-body' has methods for the following verbs: get */
  (path: "/content-negotiation/different-body"): DifferentBodyGetAvatarAsPng;
}

export type ContentNegotiationContext = Client & {
  path: Routes;
};
