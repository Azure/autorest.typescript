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
} from "./parameters";
import {
  QueryDefault204Response,
  QueryDefaultDefaultResponse,
  QueryRfc3339204Response,
  QueryRfc3339DefaultResponse,
  QueryRfc7231204Response,
  QueryRfc7231DefaultResponse,
  QueryUnixTimestamp204Response,
  QueryUnixTimestampDefaultResponse,
  QueryUnixTimestampArray204Response,
  QueryUnixTimestampArrayDefaultResponse,
  PropertyDefault200Response,
  PropertyDefaultDefaultResponse,
  PropertyRfc3339200Response,
  PropertyRfc3339DefaultResponse,
  PropertyRfc7231200Response,
  PropertyRfc7231DefaultResponse,
  PropertyUnixTimestamp200Response,
  PropertyUnixTimestampDefaultResponse,
  PropertyUnixTimestampArray200Response,
  PropertyUnixTimestampArrayDefaultResponse,
  HeaderDefault204Response,
  HeaderDefaultDefaultResponse,
  HeaderRfc3339204Response,
  HeaderRfc3339DefaultResponse,
  HeaderRfc7231204Response,
  HeaderRfc7231DefaultResponse,
  HeaderUnixTimestamp204Response,
  HeaderUnixTimestampDefaultResponse,
  HeaderUnixTimestampArray204Response,
  HeaderUnixTimestampArrayDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface QueryDefault {
  get(
    options: QueryDefaultParameters
  ): StreamableMethod<QueryDefault204Response | QueryDefaultDefaultResponse>;
}

export interface QueryRfc3339 {
  get(
    options: QueryRfc3339Parameters
  ): StreamableMethod<QueryRfc3339204Response | QueryRfc3339DefaultResponse>;
}

export interface QueryRfc7231 {
  get(
    options: QueryRfc7231Parameters
  ): StreamableMethod<QueryRfc7231204Response | QueryRfc7231DefaultResponse>;
}

export interface QueryUnixTimestamp {
  get(
    options: QueryUnixTimestampParameters
  ): StreamableMethod<
    QueryUnixTimestamp204Response | QueryUnixTimestampDefaultResponse
  >;
}

export interface QueryUnixTimestampArray {
  get(
    options: QueryUnixTimestampArrayParameters
  ): StreamableMethod<
    QueryUnixTimestampArray204Response | QueryUnixTimestampArrayDefaultResponse
  >;
}

export interface PropertyDefault {
  post(
    options: PropertyDefaultParameters
  ): StreamableMethod<
    PropertyDefault200Response | PropertyDefaultDefaultResponse
  >;
}

export interface PropertyRfc3339 {
  post(
    options: PropertyRfc3339Parameters
  ): StreamableMethod<
    PropertyRfc3339200Response | PropertyRfc3339DefaultResponse
  >;
}

export interface PropertyRfc7231 {
  post(
    options: PropertyRfc7231Parameters
  ): StreamableMethod<
    PropertyRfc7231200Response | PropertyRfc7231DefaultResponse
  >;
}

export interface PropertyUnixTimestamp {
  post(
    options: PropertyUnixTimestampParameters
  ): StreamableMethod<
    PropertyUnixTimestamp200Response | PropertyUnixTimestampDefaultResponse
  >;
}

export interface PropertyUnixTimestampArray {
  post(
    options: PropertyUnixTimestampArrayParameters
  ): StreamableMethod<
    | PropertyUnixTimestampArray200Response
    | PropertyUnixTimestampArrayDefaultResponse
  >;
}

export interface HeaderDefault {
  get(
    options: HeaderDefaultParameters
  ): StreamableMethod<HeaderDefault204Response | HeaderDefaultDefaultResponse>;
}

export interface HeaderRfc3339 {
  get(
    options: HeaderRfc3339Parameters
  ): StreamableMethod<HeaderRfc3339204Response | HeaderRfc3339DefaultResponse>;
}

export interface HeaderRfc7231 {
  get(
    options: HeaderRfc7231Parameters
  ): StreamableMethod<HeaderRfc7231204Response | HeaderRfc7231DefaultResponse>;
}

export interface HeaderUnixTimestamp {
  get(
    options: HeaderUnixTimestampParameters
  ): StreamableMethod<
    HeaderUnixTimestamp204Response | HeaderUnixTimestampDefaultResponse
  >;
}

export interface HeaderUnixTimestampArray {
  get(
    options: HeaderUnixTimestampArrayParameters
  ): StreamableMethod<
    | HeaderUnixTimestampArray204Response
    | HeaderUnixTimestampArrayDefaultResponse
  >;
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
    path: "/encode/datetime/query/unix-timestamp-array"
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
    path: "/encode/datetime/property/unix-timestamp-array"
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
    path: "/encode/datetime/header/unix-timestamp-array"
  ): HeaderUnixTimestampArray;
}

export type DatetimeClient = Client & {
  path: Routes;
};
