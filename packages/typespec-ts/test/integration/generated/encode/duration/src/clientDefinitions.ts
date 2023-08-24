// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  QueryDefaultParameters,
  QueryIso8601Parameters,
  QueryInt32SecondsParameters,
  QueryFloatSecondsParameters,
  QueryInt32SecondsArrayParameters,
  PropertyDefaultParameters,
  PropertyIso8601Parameters,
  PropertyInt32SecondsParameters,
  PropertyFloatSecondsParameters,
  PropertyFloatSecondsArrayParameters,
  HeaderDefaultParameters,
  HeaderIso8601Parameters,
  HeaderIso8601ArrayParameters,
  HeaderInt32SecondsParameters,
  HeaderFloatSecondsParameters,
} from "./parameters";
import {
  QueryDefault204Response,
  QueryDefaultDefaultResponse,
  QueryIso8601204Response,
  QueryIso8601DefaultResponse,
  QueryInt32Seconds204Response,
  QueryInt32SecondsDefaultResponse,
  QueryFloatSeconds204Response,
  QueryFloatSecondsDefaultResponse,
  QueryInt32SecondsArray204Response,
  QueryInt32SecondsArrayDefaultResponse,
  PropertyDefault200Response,
  PropertyDefaultDefaultResponse,
  PropertyIso8601200Response,
  PropertyIso8601DefaultResponse,
  PropertyInt32Seconds200Response,
  PropertyInt32SecondsDefaultResponse,
  PropertyFloatSeconds200Response,
  PropertyFloatSecondsDefaultResponse,
  PropertyFloatSecondsArray200Response,
  PropertyFloatSecondsArrayDefaultResponse,
  HeaderDefault204Response,
  HeaderDefaultDefaultResponse,
  HeaderIso8601204Response,
  HeaderIso8601DefaultResponse,
  HeaderIso8601Array204Response,
  HeaderIso8601ArrayDefaultResponse,
  HeaderInt32Seconds204Response,
  HeaderInt32SecondsDefaultResponse,
  HeaderFloatSeconds204Response,
  HeaderFloatSecondsDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface QueryDefault {
  get(
    options: QueryDefaultParameters
  ): StreamableMethod<QueryDefault204Response | QueryDefaultDefaultResponse>;
}

export interface QueryIso8601 {
  get(
    options: QueryIso8601Parameters
  ): StreamableMethod<QueryIso8601204Response | QueryIso8601DefaultResponse>;
}

export interface QueryInt32Seconds {
  get(
    options: QueryInt32SecondsParameters
  ): StreamableMethod<
    QueryInt32Seconds204Response | QueryInt32SecondsDefaultResponse
  >;
}

export interface QueryFloatSeconds {
  get(
    options: QueryFloatSecondsParameters
  ): StreamableMethod<
    QueryFloatSeconds204Response | QueryFloatSecondsDefaultResponse
  >;
}

export interface QueryInt32SecondsArray {
  get(
    options: QueryInt32SecondsArrayParameters
  ): StreamableMethod<
    QueryInt32SecondsArray204Response | QueryInt32SecondsArrayDefaultResponse
  >;
}

export interface PropertyDefault {
  post(
    options: PropertyDefaultParameters
  ): StreamableMethod<
    PropertyDefault200Response | PropertyDefaultDefaultResponse
  >;
}

export interface PropertyIso8601 {
  post(
    options: PropertyIso8601Parameters
  ): StreamableMethod<
    PropertyIso8601200Response | PropertyIso8601DefaultResponse
  >;
}

export interface PropertyInt32Seconds {
  post(
    options: PropertyInt32SecondsParameters
  ): StreamableMethod<
    PropertyInt32Seconds200Response | PropertyInt32SecondsDefaultResponse
  >;
}

export interface PropertyFloatSeconds {
  post(
    options: PropertyFloatSecondsParameters
  ): StreamableMethod<
    PropertyFloatSeconds200Response | PropertyFloatSecondsDefaultResponse
  >;
}

export interface PropertyFloatSecondsArray {
  post(
    options: PropertyFloatSecondsArrayParameters
  ): StreamableMethod<
    | PropertyFloatSecondsArray200Response
    | PropertyFloatSecondsArrayDefaultResponse
  >;
}

export interface HeaderDefault {
  get(
    options: HeaderDefaultParameters
  ): StreamableMethod<HeaderDefault204Response | HeaderDefaultDefaultResponse>;
}

export interface HeaderIso8601 {
  get(
    options: HeaderIso8601Parameters
  ): StreamableMethod<HeaderIso8601204Response | HeaderIso8601DefaultResponse>;
}

export interface HeaderIso8601Array {
  get(
    options: HeaderIso8601ArrayParameters
  ): StreamableMethod<
    HeaderIso8601Array204Response | HeaderIso8601ArrayDefaultResponse
  >;
}

export interface HeaderInt32Seconds {
  get(
    options: HeaderInt32SecondsParameters
  ): StreamableMethod<
    HeaderInt32Seconds204Response | HeaderInt32SecondsDefaultResponse
  >;
}

export interface HeaderFloatSeconds {
  get(
    options: HeaderFloatSecondsParameters
  ): StreamableMethod<
    HeaderFloatSeconds204Response | HeaderFloatSecondsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/encode/duration/query/default' has methods for the following verbs: get */
  (path: "/encode/duration/query/default"): QueryDefault;
  /** Resource for '/encode/duration/query/iso8601' has methods for the following verbs: get */
  (path: "/encode/duration/query/iso8601"): QueryIso8601;
  /** Resource for '/encode/duration/query/int32-seconds' has methods for the following verbs: get */
  (path: "/encode/duration/query/int32-seconds"): QueryInt32Seconds;
  /** Resource for '/encode/duration/query/float-seconds' has methods for the following verbs: get */
  (path: "/encode/duration/query/float-seconds"): QueryFloatSeconds;
  /** Resource for '/encode/duration/query/int32-seconds-array' has methods for the following verbs: get */
  (path: "/encode/duration/query/int32-seconds-array"): QueryInt32SecondsArray;
  /** Resource for '/encode/duration/property/default' has methods for the following verbs: post */
  (path: "/encode/duration/property/default"): PropertyDefault;
  /** Resource for '/encode/duration/property/iso8601' has methods for the following verbs: post */
  (path: "/encode/duration/property/iso8601"): PropertyIso8601;
  /** Resource for '/encode/duration/property/int32-seconds' has methods for the following verbs: post */
  (path: "/encode/duration/property/int32-seconds"): PropertyInt32Seconds;
  /** Resource for '/encode/duration/property/float-seconds' has methods for the following verbs: post */
  (path: "/encode/duration/property/float-seconds"): PropertyFloatSeconds;
  /** Resource for '/encode/duration/property/float-seconds-array' has methods for the following verbs: post */
  (
    path: "/encode/duration/property/float-seconds-array"
  ): PropertyFloatSecondsArray;
  /** Resource for '/encode/duration/header/default' has methods for the following verbs: get */
  (path: "/encode/duration/header/default"): HeaderDefault;
  /** Resource for '/encode/duration/header/iso8601' has methods for the following verbs: get */
  (path: "/encode/duration/header/iso8601"): HeaderIso8601;
  /** Resource for '/encode/duration/header/iso8601-array' has methods for the following verbs: get */
  (path: "/encode/duration/header/iso8601-array"): HeaderIso8601Array;
  /** Resource for '/encode/duration/header/int32-seconds' has methods for the following verbs: get */
  (path: "/encode/duration/header/int32-seconds"): HeaderInt32Seconds;
  /** Resource for '/encode/duration/header/float-seconds' has methods for the following verbs: get */
  (path: "/encode/duration/header/float-seconds"): HeaderFloatSeconds;
}

export type DurationClient = Client & {
  path: Routes;
};
