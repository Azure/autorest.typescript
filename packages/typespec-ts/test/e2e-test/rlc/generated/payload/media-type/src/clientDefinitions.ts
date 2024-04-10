// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringBodySendAsTextParameters,
  StringBodyGetAsTextParameters,
  StringBodySendAsJsonParameters,
  StringBodyGetAsJsonParameters,
} from "./parameters.js";
import {
  StringBodySendAsText200Response,
  StringBodyGetAsText200Response,
  StringBodySendAsJson200Response,
  StringBodyGetAsJson200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface SendAsText {
  post(
    options: StringBodySendAsTextParameters,
  ): StreamableMethod<StringBodySendAsText200Response>;
}

export interface GetAsText {
  get(
    options?: StringBodyGetAsTextParameters,
  ): StreamableMethod<StringBodyGetAsText200Response>;
}

export interface SendAsJson {
  post(
    options: StringBodySendAsJsonParameters,
  ): StreamableMethod<StringBodySendAsJson200Response>;
}

export interface GetAsJson {
  get(
    options?: StringBodyGetAsJsonParameters,
  ): StreamableMethod<StringBodyGetAsJson200Response>;
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

export type MediaTypeClient = Client & {
  path: Routes;
};
