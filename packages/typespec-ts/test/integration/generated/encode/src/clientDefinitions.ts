// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  QueryDefaultParameters,
  QueryIso8601Parameters,
  QueryInt32SecondsParameters,
  QueryFloatSecondsParameters,
  PropertyDefaultParameters,
  PropertyIso8601Parameters,
  PropertyInt32SecondsParameters,
  PropertyFloatSecondsParameters,
} from "./parameters";
import {
  QueryDefault204Response,
  QueryIso8601204Response,
  QueryInt32Seconds204Response,
  QueryFloatSeconds204Response,
  PropertyDefault200Response,
  PropertyIso8601200Response,
  PropertyInt32Seconds200Response,
  PropertyFloatSeconds200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface QueryDefault {
  get(
    options: QueryDefaultParameters
  ): StreamableMethod<QueryDefault204Response>;
}

export interface QueryIso8601 {
  get(
    options: QueryIso8601Parameters
  ): StreamableMethod<QueryIso8601204Response>;
}

export interface QueryInt32Seconds {
  get(
    options: QueryInt32SecondsParameters
  ): StreamableMethod<QueryInt32Seconds204Response>;
}

export interface QueryFloatSeconds {
  get(
    options: QueryFloatSecondsParameters
  ): StreamableMethod<QueryFloatSeconds204Response>;
}

export interface PropertyDefault {
  post(
    options: PropertyDefaultParameters
  ): StreamableMethod<PropertyDefault200Response>;
}

export interface PropertyIso8601 {
  post(
    options: PropertyIso8601Parameters
  ): StreamableMethod<PropertyIso8601200Response>;
}

export interface PropertyInt32Seconds {
  post(
    options: PropertyInt32SecondsParameters
  ): StreamableMethod<PropertyInt32Seconds200Response>;
}

export interface PropertyFloatSeconds {
  post(
    options: PropertyFloatSecondsParameters
  ): StreamableMethod<PropertyFloatSeconds200Response>;
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
  /** Resource for '/encode/duration/property/default' has methods for the following verbs: post */
  (path: "/encode/duration/property/default"): PropertyDefault;
  /** Resource for '/encode/duration/property/iso8601' has methods for the following verbs: post */
  (path: "/encode/duration/property/iso8601"): PropertyIso8601;
  /** Resource for '/encode/duration/property/int32-seconds' has methods for the following verbs: post */
  (path: "/encode/duration/property/int32-seconds"): PropertyInt32Seconds;
  /** Resource for '/encode/duration/property/float-seconds' has methods for the following verbs: post */
  (path: "/encode/duration/property/float-seconds"): PropertyFloatSeconds;
}

export type EncodeDurationClient = Client & {
  path: Routes;
};
