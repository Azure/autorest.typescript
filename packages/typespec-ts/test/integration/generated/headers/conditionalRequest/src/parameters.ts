// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";

export interface PostIfMatchHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
}

export interface PostIfMatchHeaderParam {
  headers?: RawHttpHeadersInput & PostIfMatchHeaders;
}

export type PostIfMatchParameters = PostIfMatchHeaderParam & RequestParameters;

export interface PostIfNoneMatchHeaders {
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
}

export interface PostIfNoneMatchHeaderParam {
  headers?: RawHttpHeadersInput & PostIfNoneMatchHeaders;
}

export type PostIfNoneMatchParameters = PostIfNoneMatchHeaderParam &
  RequestParameters;
