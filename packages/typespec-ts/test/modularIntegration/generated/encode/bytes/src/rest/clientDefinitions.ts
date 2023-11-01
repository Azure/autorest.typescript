// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DefaultParameters,
  Base64Parameters,
  Base64urlParameters,
  Base64urlArrayParameters,
  OctetStreamParameters,
  CustomContentTypeParameters,
} from "./parameters.js";
import {
  Default204Response,
  Base64204Response,
  Base64url204Response,
  Base64urlArray204Response,
  Default200Response,
  Base64200Response,
  Base64url200Response,
  Base64urlArray200Response,
  OctetStream204Response,
  CustomContentType204Response,
  OctetStream200Response,
  CustomContentType200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Default {
  get(options: DefaultParameters): StreamableMethod<Default204Response>;
}

export interface Base64 {
  get(options: Base64Parameters): StreamableMethod<Base64204Response>;
}

export interface Base64url {
  get(options: Base64urlParameters): StreamableMethod<Base64url204Response>;
}

export interface Base64urlArray {
  get(
    options: Base64urlArrayParameters
  ): StreamableMethod<Base64urlArray204Response>;
}

export interface Default {
  post(options: DefaultParameters): StreamableMethod<Default200Response>;
}

export interface Base64 {
  post(options: Base64Parameters): StreamableMethod<Base64200Response>;
}

export interface Base64url {
  post(options: Base64urlParameters): StreamableMethod<Base64url200Response>;
}

export interface Base64urlArray {
  post(
    options: Base64urlArrayParameters
  ): StreamableMethod<Base64urlArray200Response>;
}

export interface Default {
  get(options: DefaultParameters): StreamableMethod<Default204Response>;
}

export interface Base64 {
  get(options: Base64Parameters): StreamableMethod<Base64204Response>;
}

export interface Base64url {
  get(options: Base64urlParameters): StreamableMethod<Base64url204Response>;
}

export interface Base64urlArray {
  get(
    options: Base64urlArrayParameters
  ): StreamableMethod<Base64urlArray204Response>;
}

export interface Default {
  post(options: DefaultParameters): StreamableMethod<Default204Response>;
}

export interface OctetStream {
  post(
    options: OctetStreamParameters
  ): StreamableMethod<OctetStream204Response>;
}

export interface CustomContentType {
  post(
    options: CustomContentTypeParameters
  ): StreamableMethod<CustomContentType204Response>;
}

export interface Base64 {
  post(options: Base64Parameters): StreamableMethod<Base64204Response>;
}

export interface Base64url {
  post(options: Base64urlParameters): StreamableMethod<Base64url204Response>;
}

export interface Default {
  get(options?: DefaultParameters): StreamableMethod<Default200Response>;
}

export interface OctetStream {
  get(
    options?: OctetStreamParameters
  ): StreamableMethod<OctetStream200Response>;
}

export interface CustomContentType {
  get(
    options?: CustomContentTypeParameters
  ): StreamableMethod<CustomContentType200Response>;
}

export interface Base64 {
  get(options?: Base64Parameters): StreamableMethod<Base64200Response>;
}

export interface Base64url {
  get(options?: Base64urlParameters): StreamableMethod<Base64url200Response>;
}

export interface Routes {
  /** Resource for '/encode/bytes/query/default' has methods for the following verbs: get */
  (path: "/encode/bytes/query/default"): Default;
  /** Resource for '/encode/bytes/query/base64' has methods for the following verbs: get */
  (path: "/encode/bytes/query/base64"): Base64;
  /** Resource for '/encode/bytes/query/base64url' has methods for the following verbs: get */
  (path: "/encode/bytes/query/base64url"): Base64url;
  /** Resource for '/encode/bytes/query/base64url-array' has methods for the following verbs: get */
  (path: "/encode/bytes/query/base64url-array"): Base64urlArray;
  /** Resource for '/encode/bytes/property/default' has methods for the following verbs: post */
  (path: "/encode/bytes/property/default"): Default;
  /** Resource for '/encode/bytes/property/base64' has methods for the following verbs: post */
  (path: "/encode/bytes/property/base64"): Base64;
  /** Resource for '/encode/bytes/property/base64url' has methods for the following verbs: post */
  (path: "/encode/bytes/property/base64url"): Base64url;
  /** Resource for '/encode/bytes/property/base64url-array' has methods for the following verbs: post */
  (path: "/encode/bytes/property/base64url-array"): Base64urlArray;
  /** Resource for '/encode/bytes/header/default' has methods for the following verbs: get */
  (path: "/encode/bytes/header/default"): Default;
  /** Resource for '/encode/bytes/header/base64' has methods for the following verbs: get */
  (path: "/encode/bytes/header/base64"): Base64;
  /** Resource for '/encode/bytes/header/base64url' has methods for the following verbs: get */
  (path: "/encode/bytes/header/base64url"): Base64url;
  /** Resource for '/encode/bytes/header/base64url-array' has methods for the following verbs: get */
  (path: "/encode/bytes/header/base64url-array"): Base64urlArray;
  /** Resource for '/encode/bytes/body/request/default' has methods for the following verbs: post */
  (path: "/encode/bytes/body/request/default"): Default;
  /** Resource for '/encode/bytes/body/request/octet-stream' has methods for the following verbs: post */
  (path: "/encode/bytes/body/request/octet-stream"): OctetStream;
  /** Resource for '/encode/bytes/body/request/custom-content-type' has methods for the following verbs: post */
  (path: "/encode/bytes/body/request/custom-content-type"): CustomContentType;
  /** Resource for '/encode/bytes/body/request/base64' has methods for the following verbs: post */
  (path: "/encode/bytes/body/request/base64"): Base64;
  /** Resource for '/encode/bytes/body/request/base64url' has methods for the following verbs: post */
  (path: "/encode/bytes/body/request/base64url"): Base64url;
  /** Resource for '/encode/bytes/body/response/default' has methods for the following verbs: get */
  (path: "/encode/bytes/body/response/default"): Default;
  /** Resource for '/encode/bytes/body/response/octet-stream' has methods for the following verbs: get */
  (path: "/encode/bytes/body/response/octet-stream"): OctetStream;
  /** Resource for '/encode/bytes/body/response/custom-content-type' has methods for the following verbs: get */
  (path: "/encode/bytes/body/response/custom-content-type"): CustomContentType;
  /** Resource for '/encode/bytes/body/response/base64' has methods for the following verbs: get */
  (path: "/encode/bytes/body/response/base64"): Base64;
  /** Resource for '/encode/bytes/body/response/base64url' has methods for the following verbs: get */
  (path: "/encode/bytes/body/response/base64url"): Base64url;
}

export type BytesContext = Client & {
  path: Routes;
};
