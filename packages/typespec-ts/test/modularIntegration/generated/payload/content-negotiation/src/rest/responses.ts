// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import { PngImageAsJsonOutput } from "./outputModels.js";

export interface SameBodyGetAvatarAsPng200Headers {
  "content-type": "image/png";
}

/** The request has succeeded. */
export interface SameBodyGetAvatarAsPng200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & SameBodyGetAvatarAsPng200Headers;
}

export interface SameBodyGetAvatarAsJpeg200Headers {
  "content-type": "image/jpeg";
}

/** The request has succeeded. */
export interface SameBodyGetAvatarAsJpeg200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & SameBodyGetAvatarAsJpeg200Headers;
}

export interface DifferentBodyGetAvatarAsPng200Headers {
  "content-type": "image/png";
}

/** The request has succeeded. */
export interface DifferentBodyGetAvatarAsPng200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
  headers: RawHttpHeaders & DifferentBodyGetAvatarAsPng200Headers;
}

export interface DifferentBodyGetAvatarAsJson200Headers {
  "content-type": "application/json";
}

/** The request has succeeded. */
export interface DifferentBodyGetAvatarAsJson200Response extends HttpResponse {
  status: "200";
  body: PngImageAsJsonOutput;
  headers: RawHttpHeaders & DifferentBodyGetAvatarAsJson200Headers;
}
