// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { PngImageAsJsonOutput } from "./outputModels";

/** The request has succeeded. */
export interface SameBodyGetAvatarAsPng200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** The request has succeeded. */
export interface SameBodyGetAvatarAsJpeg200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** The request has succeeded. */
export interface DifferentBodyGetAvatarAsPng200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

/** The request has succeeded. */
export interface DifferentBodyGetAvatarAsJson200Response extends HttpResponse {
  status: "200";
  body: PngImageAsJsonOutput;
}
