// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";

export interface SameBodyGetAvatarAsPngHeaders {
  accept: "image/png";
}

export interface SameBodyGetAvatarAsPngHeaderParam {
  headers: RawHttpHeadersInput & SameBodyGetAvatarAsPngHeaders;
}

export type SameBodyGetAvatarAsPngParameters =
  SameBodyGetAvatarAsPngHeaderParam & RequestParameters;

export interface SameBodyGetAvatarAsJpegHeaders {
  accept: "image/jpeg";
}

export interface SameBodyGetAvatarAsJpegHeaderParam {
  headers: RawHttpHeadersInput & SameBodyGetAvatarAsJpegHeaders;
}

export type SameBodyGetAvatarAsJpegParameters =
  SameBodyGetAvatarAsJpegHeaderParam & RequestParameters;

export interface DifferentBodyGetAvatarAsPngHeaders {
  accept: "image/png";
}

export interface DifferentBodyGetAvatarAsPngHeaderParam {
  headers: RawHttpHeadersInput & DifferentBodyGetAvatarAsPngHeaders;
}

export type DifferentBodyGetAvatarAsPngParameters =
  DifferentBodyGetAvatarAsPngHeaderParam & RequestParameters;

export interface DifferentBodyGetAvatarAsJsonHeaders {
  accept: "application/json";
}

export interface DifferentBodyGetAvatarAsJsonHeaderParam {
  headers: RawHttpHeadersInput & DifferentBodyGetAvatarAsJsonHeaders;
}

export type DifferentBodyGetAvatarAsJsonParameters =
  DifferentBodyGetAvatarAsJsonHeaderParam & RequestParameters;

export interface DifferentBodyGetAvatarAsAnyHeaders {
  accept: any;
}

export interface DifferentBodyGetAvatarAsAnyHeaderParam {
  headers: RawHttpHeadersInput & DifferentBodyGetAvatarAsAnyHeaders;
}

export type DifferentBodyGetAvatarAsAnyParameters =
  DifferentBodyGetAvatarAsAnyHeaderParam & RequestParameters;
