// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DefaultParameters,
  Iso8601Parameters,
  Int32SecondsParameters,
  FloatSecondsParameters,
  Int32SecondsArrayParameters,
  FloatSecondsArrayParameters,
  Iso8601ArrayParameters,
} from "./parameters.js";
import {
  Default204Response,
  Iso8601204Response,
  Int32Seconds204Response,
  FloatSeconds204Response,
  Int32SecondsArray204Response,
  Default200Response,
  Iso8601200Response,
  Int32Seconds200Response,
  FloatSeconds200Response,
  FloatSecondsArray200Response,
  Iso8601Array204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Default {
  get(options: DefaultParameters): StreamableMethod<Default204Response>;
}

export interface Iso8601 {
  get(options: Iso8601Parameters): StreamableMethod<Iso8601204Response>;
}

export interface Int32Seconds {
  get(
    options: Int32SecondsParameters
  ): StreamableMethod<Int32Seconds204Response>;
}

export interface FloatSeconds {
  get(
    options: FloatSecondsParameters
  ): StreamableMethod<FloatSeconds204Response>;
}

export interface Int32SecondsArray {
  get(
    options: Int32SecondsArrayParameters
  ): StreamableMethod<Int32SecondsArray204Response>;
}

export interface Default {
  post(options: DefaultParameters): StreamableMethod<Default200Response>;
}

export interface Iso8601 {
  post(options: Iso8601Parameters): StreamableMethod<Iso8601200Response>;
}

export interface Int32Seconds {
  post(
    options: Int32SecondsParameters
  ): StreamableMethod<Int32Seconds200Response>;
}

export interface FloatSeconds {
  post(
    options: FloatSecondsParameters
  ): StreamableMethod<FloatSeconds200Response>;
}

export interface FloatSecondsArray {
  post(
    options: FloatSecondsArrayParameters
  ): StreamableMethod<FloatSecondsArray200Response>;
}

export interface Default {
  get(options: DefaultParameters): StreamableMethod<Default204Response>;
}

export interface Iso8601 {
  get(options: Iso8601Parameters): StreamableMethod<Iso8601204Response>;
}

export interface Iso8601Array {
  get(
    options: Iso8601ArrayParameters
  ): StreamableMethod<Iso8601Array204Response>;
}

export interface Int32Seconds {
  get(
    options: Int32SecondsParameters
  ): StreamableMethod<Int32Seconds204Response>;
}

export interface FloatSeconds {
  get(
    options: FloatSecondsParameters
  ): StreamableMethod<FloatSeconds204Response>;
}

export interface Routes {
  /** Resource for '/encode/duration/query/default' has methods for the following verbs: get */
  (path: "/encode/duration/query/default"): Default;
  /** Resource for '/encode/duration/query/iso8601' has methods for the following verbs: get */
  (path: "/encode/duration/query/iso8601"): Iso8601;
  /** Resource for '/encode/duration/query/int32-seconds' has methods for the following verbs: get */
  (path: "/encode/duration/query/int32-seconds"): Int32Seconds;
  /** Resource for '/encode/duration/query/float-seconds' has methods for the following verbs: get */
  (path: "/encode/duration/query/float-seconds"): FloatSeconds;
  /** Resource for '/encode/duration/query/int32-seconds-array' has methods for the following verbs: get */
  (path: "/encode/duration/query/int32-seconds-array"): Int32SecondsArray;
  /** Resource for '/encode/duration/property/default' has methods for the following verbs: post */
  (path: "/encode/duration/property/default"): Default;
  /** Resource for '/encode/duration/property/iso8601' has methods for the following verbs: post */
  (path: "/encode/duration/property/iso8601"): Iso8601;
  /** Resource for '/encode/duration/property/int32-seconds' has methods for the following verbs: post */
  (path: "/encode/duration/property/int32-seconds"): Int32Seconds;
  /** Resource for '/encode/duration/property/float-seconds' has methods for the following verbs: post */
  (path: "/encode/duration/property/float-seconds"): FloatSeconds;
  /** Resource for '/encode/duration/property/float-seconds-array' has methods for the following verbs: post */
  (path: "/encode/duration/property/float-seconds-array"): FloatSecondsArray;
  /** Resource for '/encode/duration/header/default' has methods for the following verbs: get */
  (path: "/encode/duration/header/default"): Default;
  /** Resource for '/encode/duration/header/iso8601' has methods for the following verbs: get */
  (path: "/encode/duration/header/iso8601"): Iso8601;
  /** Resource for '/encode/duration/header/iso8601-array' has methods for the following verbs: get */
  (path: "/encode/duration/header/iso8601-array"): Iso8601Array;
  /** Resource for '/encode/duration/header/int32-seconds' has methods for the following verbs: get */
  (path: "/encode/duration/header/int32-seconds"): Int32Seconds;
  /** Resource for '/encode/duration/header/float-seconds' has methods for the following verbs: get */
  (path: "/encode/duration/header/float-seconds"): FloatSeconds;
}

export type DurationContext = Client & {
  path: Routes;
};
