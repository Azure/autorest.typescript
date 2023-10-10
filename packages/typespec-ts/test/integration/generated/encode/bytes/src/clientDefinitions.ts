// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  QueryDefaultParameters,
  QueryBase64Parameters,
  QueryBase64urlParameters,
  QueryBase64urlArrayParameters,
  PropertyDefaultParameters,
  PropertyBase64Parameters,
  PropertyBase64urlParameters,
  PropertyBase64urlArrayParameters,
  HeaderDefaultParameters,
  HeaderBase64Parameters,
  HeaderBase64urlParameters,
  HeaderBase64urlArrayParameters,
} from "./parameters";
import {
  QueryDefault204Response,
  QueryBase64204Response,
  QueryBase64url204Response,
  QueryBase64urlArray204Response,
  PropertyDefault200Response,
  PropertyBase64200Response,
  PropertyBase64url200Response,
  PropertyBase64urlArray200Response,
  HeaderDefault204Response,
  HeaderBase64204Response,
  HeaderBase64url204Response,
  HeaderBase64urlArray204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface QueryDefault {
  get(
    options: QueryDefaultParameters
  ): StreamableMethod<QueryDefault204Response>;
}

export interface QueryBase64 {
  get(options: QueryBase64Parameters): StreamableMethod<QueryBase64204Response>;
}

export interface QueryBase64url {
  get(
    options: QueryBase64urlParameters
  ): StreamableMethod<QueryBase64url204Response>;
}

export interface QueryBase64urlArray {
  get(
    options: QueryBase64urlArrayParameters
  ): StreamableMethod<QueryBase64urlArray204Response>;
}

export interface PropertyDefault {
  post(
    options: PropertyDefaultParameters
  ): StreamableMethod<PropertyDefault200Response>;
}

export interface PropertyBase64 {
  post(
    options: PropertyBase64Parameters
  ): StreamableMethod<PropertyBase64200Response>;
}

export interface PropertyBase64url {
  post(
    options: PropertyBase64urlParameters
  ): StreamableMethod<PropertyBase64url200Response>;
}

export interface PropertyBase64urlArray {
  post(
    options: PropertyBase64urlArrayParameters
  ): StreamableMethod<PropertyBase64urlArray200Response>;
}

export interface HeaderDefault {
  get(
    options: HeaderDefaultParameters
  ): StreamableMethod<HeaderDefault204Response>;
}

export interface HeaderBase64 {
  get(
    options: HeaderBase64Parameters
  ): StreamableMethod<HeaderBase64204Response>;
}

export interface HeaderBase64url {
  get(
    options: HeaderBase64urlParameters
  ): StreamableMethod<HeaderBase64url204Response>;
}

export interface HeaderBase64urlArray {
  get(
    options: HeaderBase64urlArrayParameters
  ): StreamableMethod<HeaderBase64urlArray204Response>;
}

export interface Routes {
  /** Resource for '/encode/bytes/query/default' has methods for the following verbs: get */
  (path: "/encode/bytes/query/default"): QueryDefault;
  /** Resource for '/encode/bytes/query/base64' has methods for the following verbs: get */
  (path: "/encode/bytes/query/base64"): QueryBase64;
  /** Resource for '/encode/bytes/query/base64url' has methods for the following verbs: get */
  (path: "/encode/bytes/query/base64url"): QueryBase64url;
  /** Resource for '/encode/bytes/query/base64url-array' has methods for the following verbs: get */
  (path: "/encode/bytes/query/base64url-array"): QueryBase64urlArray;
  /** Resource for '/encode/bytes/property/default' has methods for the following verbs: post */
  (path: "/encode/bytes/property/default"): PropertyDefault;
  /** Resource for '/encode/bytes/property/base64' has methods for the following verbs: post */
  (path: "/encode/bytes/property/base64"): PropertyBase64;
  /** Resource for '/encode/bytes/property/base64url' has methods for the following verbs: post */
  (path: "/encode/bytes/property/base64url"): PropertyBase64url;
  /** Resource for '/encode/bytes/property/base64url-array' has methods for the following verbs: post */
  (path: "/encode/bytes/property/base64url-array"): PropertyBase64urlArray;
  /** Resource for '/encode/bytes/header/default' has methods for the following verbs: get */
  (path: "/encode/bytes/header/default"): HeaderDefault;
  /** Resource for '/encode/bytes/header/base64' has methods for the following verbs: get */
  (path: "/encode/bytes/header/base64"): HeaderBase64;
  /** Resource for '/encode/bytes/header/base64url' has methods for the following verbs: get */
  (path: "/encode/bytes/header/base64url"): HeaderBase64url;
  /** Resource for '/encode/bytes/header/base64url-array' has methods for the following verbs: get */
  (path: "/encode/bytes/header/base64url-array"): HeaderBase64urlArray;
}

export type BytesClient = Client & {
  path: Routes;
};
