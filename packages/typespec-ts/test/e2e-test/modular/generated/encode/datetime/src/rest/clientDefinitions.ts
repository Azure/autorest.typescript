// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  QueryDefaultParameters,
  QueryRfc3339Parameters,
  QueryRfc7231Parameters,
  QueryUnixTimestampParameters,
  QueryUnixTimestampArrayParameters,
  PropertyDefaultParameters,
  PropertyRfc3339Parameters,
  PropertyRfc7231Parameters,
  PropertyUnixTimestampParameters,
  PropertyUnixTimestampArrayParameters,
  HeaderDefaultParameters,
  HeaderRfc3339Parameters,
  HeaderRfc7231Parameters,
  HeaderUnixTimestampParameters,
  HeaderUnixTimestampArrayParameters,
  ResponseHeaderDefaultParameters,
  ResponseHeaderRfc3339Parameters,
  ResponseHeaderRfc7231Parameters,
  ResponseHeaderUnixTimestampParameters,
} from "./parameters.js";
import {
  QueryDefault204Response,
  QueryRfc3339204Response,
  QueryRfc7231204Response,
  QueryUnixTimestamp204Response,
  QueryUnixTimestampArray204Response,
  PropertyDefault200Response,
  PropertyRfc3339200Response,
  PropertyRfc7231200Response,
  PropertyUnixTimestamp200Response,
  PropertyUnixTimestampArray200Response,
  HeaderDefault204Response,
  HeaderRfc3339204Response,
  HeaderRfc7231204Response,
  HeaderUnixTimestamp204Response,
  HeaderUnixTimestampArray204Response,
  ResponseHeaderDefault204Response,
  ResponseHeaderRfc3339204Response,
  ResponseHeaderRfc7231204Response,
  ResponseHeaderUnixTimestamp204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface QueryDefault {
  get(
    options: QueryDefaultParameters,
  ): StreamableMethod<QueryDefault204Response>;
}

export interface QueryRfc3339 {
  get(
    options: QueryRfc3339Parameters,
  ): StreamableMethod<QueryRfc3339204Response>;
}

export interface QueryRfc7231 {
  get(
    options: QueryRfc7231Parameters,
  ): StreamableMethod<QueryRfc7231204Response>;
}

export interface QueryUnixTimestamp {
  get(
    options: QueryUnixTimestampParameters,
  ): StreamableMethod<QueryUnixTimestamp204Response>;
}

export interface QueryUnixTimestampArray {
  get(
    options: QueryUnixTimestampArrayParameters,
  ): StreamableMethod<QueryUnixTimestampArray204Response>;
}

export interface PropertyDefault {
  post(
    options: PropertyDefaultParameters,
  ): StreamableMethod<PropertyDefault200Response>;
}

export interface PropertyRfc3339 {
  post(
    options: PropertyRfc3339Parameters,
  ): StreamableMethod<PropertyRfc3339200Response>;
}

export interface PropertyRfc7231 {
  post(
    options: PropertyRfc7231Parameters,
  ): StreamableMethod<PropertyRfc7231200Response>;
}

export interface PropertyUnixTimestamp {
  post(
    options: PropertyUnixTimestampParameters,
  ): StreamableMethod<PropertyUnixTimestamp200Response>;
}

export interface PropertyUnixTimestampArray {
  post(
    options: PropertyUnixTimestampArrayParameters,
  ): StreamableMethod<PropertyUnixTimestampArray200Response>;
}

export interface HeaderDefault {
  get(
    options: HeaderDefaultParameters,
  ): StreamableMethod<HeaderDefault204Response>;
}

export interface HeaderRfc3339 {
  get(
    options: HeaderRfc3339Parameters,
  ): StreamableMethod<HeaderRfc3339204Response>;
}

export interface HeaderRfc7231 {
  get(
    options: HeaderRfc7231Parameters,
  ): StreamableMethod<HeaderRfc7231204Response>;
}

export interface HeaderUnixTimestamp {
  get(
    options: HeaderUnixTimestampParameters,
  ): StreamableMethod<HeaderUnixTimestamp204Response>;
}

export interface HeaderUnixTimestampArray {
  get(
    options: HeaderUnixTimestampArrayParameters,
  ): StreamableMethod<HeaderUnixTimestampArray204Response>;
}

export interface ResponseHeaderDefault {
  get(
    options?: ResponseHeaderDefaultParameters,
  ): StreamableMethod<ResponseHeaderDefault204Response>;
}

export interface ResponseHeaderRfc3339 {
  get(
    options?: ResponseHeaderRfc3339Parameters,
  ): StreamableMethod<ResponseHeaderRfc3339204Response>;
}

export interface ResponseHeaderRfc7231 {
  get(
    options?: ResponseHeaderRfc7231Parameters,
  ): StreamableMethod<ResponseHeaderRfc7231204Response>;
}

export interface ResponseHeaderUnixTimestamp {
  get(
    options?: ResponseHeaderUnixTimestampParameters,
  ): StreamableMethod<ResponseHeaderUnixTimestamp204Response>;
}

export interface Routes {
  /** Resource for '/encode/datetime/query/default' has methods for the following verbs: get */
  (path: "/encode/datetime/query/default"): QueryDefault;
  /** Resource for '/encode/datetime/query/rfc3339' has methods for the following verbs: get */
  (path: "/encode/datetime/query/rfc3339"): QueryRfc3339;
  /** Resource for '/encode/datetime/query/rfc7231' has methods for the following verbs: get */
  (path: "/encode/datetime/query/rfc7231"): QueryRfc7231;
  /** Resource for '/encode/datetime/query/unix-timestamp' has methods for the following verbs: get */
  (path: "/encode/datetime/query/unix-timestamp"): QueryUnixTimestamp;
  /** Resource for '/encode/datetime/query/unix-timestamp-array' has methods for the following verbs: get */
  (
    path: "/encode/datetime/query/unix-timestamp-array",
  ): QueryUnixTimestampArray;
  /** Resource for '/encode/datetime/property/default' has methods for the following verbs: post */
  (path: "/encode/datetime/property/default"): PropertyDefault;
  /** Resource for '/encode/datetime/property/rfc3339' has methods for the following verbs: post */
  (path: "/encode/datetime/property/rfc3339"): PropertyRfc3339;
  /** Resource for '/encode/datetime/property/rfc7231' has methods for the following verbs: post */
  (path: "/encode/datetime/property/rfc7231"): PropertyRfc7231;
  /** Resource for '/encode/datetime/property/unix-timestamp' has methods for the following verbs: post */
  (path: "/encode/datetime/property/unix-timestamp"): PropertyUnixTimestamp;
  /** Resource for '/encode/datetime/property/unix-timestamp-array' has methods for the following verbs: post */
  (
    path: "/encode/datetime/property/unix-timestamp-array",
  ): PropertyUnixTimestampArray;
  /** Resource for '/encode/datetime/header/default' has methods for the following verbs: get */
  (path: "/encode/datetime/header/default"): HeaderDefault;
  /** Resource for '/encode/datetime/header/rfc3339' has methods for the following verbs: get */
  (path: "/encode/datetime/header/rfc3339"): HeaderRfc3339;
  /** Resource for '/encode/datetime/header/rfc7231' has methods for the following verbs: get */
  (path: "/encode/datetime/header/rfc7231"): HeaderRfc7231;
  /** Resource for '/encode/datetime/header/unix-timestamp' has methods for the following verbs: get */
  (path: "/encode/datetime/header/unix-timestamp"): HeaderUnixTimestamp;
  /** Resource for '/encode/datetime/header/unix-timestamp-array' has methods for the following verbs: get */
  (
    path: "/encode/datetime/header/unix-timestamp-array",
  ): HeaderUnixTimestampArray;
  /** Resource for '/encode/datetime/responseheader/default' has methods for the following verbs: get */
  (path: "/encode/datetime/responseheader/default"): ResponseHeaderDefault;
  /** Resource for '/encode/datetime/responseheader/rfc3339' has methods for the following verbs: get */
  (path: "/encode/datetime/responseheader/rfc3339"): ResponseHeaderRfc3339;
  /** Resource for '/encode/datetime/responseheader/rfc7231' has methods for the following verbs: get */
  (path: "/encode/datetime/responseheader/rfc7231"): ResponseHeaderRfc7231;
  /** Resource for '/encode/datetime/responseheader/unix-timestamp' has methods for the following verbs: get */
  (
    path: "/encode/datetime/responseheader/unix-timestamp",
  ): ResponseHeaderUnixTimestamp;
}

export type DatetimeContext = Client & {
  path: Routes;
};
