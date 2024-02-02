// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  SendAsTextParameters,
  GetAsTextParameters,
  SendAsJsonParameters,
  GetAsJsonParameters,
} from "./parameters.js";
import {
  SendAsText200Response,
  GetAsText200Response,
  SendAsJson200Response,
  GetAsJson200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface SendAsText {
  post(options: SendAsTextParameters): StreamableMethod<SendAsText200Response>;
}

export interface GetAsText {
  get(options?: GetAsTextParameters): StreamableMethod<GetAsText200Response>;
}

export interface SendAsJson {
  post(options: SendAsJsonParameters): StreamableMethod<SendAsJson200Response>;
}

export interface GetAsJson {
  get(options?: GetAsJsonParameters): StreamableMethod<GetAsJson200Response>;
}

export interface Routes {
  /** Resource for '/payload/media-type/string-body/sendAsText' has methods for the following verbs: post */
  (path: "/payload/media-type/string-body/sendAsText"): SendAsText;
  /** Resource for '/payload/media-type/string-body/getAsText' has methods for the following verbs: get */
  (path: "/payload/media-type/string-body/getAsText"): GetAsText;
  /** Resource for '/payload/media-type/string-body/sendAsJson' has methods for the following verbs: post */
  (path: "/payload/media-type/string-body/sendAsJson"): SendAsJson;
  /** Resource for '/payload/media-type/string-body/getAsJson' has methods for the following verbs: get */
  (path: "/payload/media-type/string-body/getAsJson"): GetAsJson;
}

export type MediaTypeContext = Client & {
  path: Routes;
};
