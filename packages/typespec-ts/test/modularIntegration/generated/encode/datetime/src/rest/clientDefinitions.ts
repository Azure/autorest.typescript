// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DefaultParameters,
  Rfc3339Parameters,
  Rfc7231Parameters,
  UnixTimestampParameters,
  UnixTimestampArrayParameters,
} from "./parameters.js";
import {
  Default204Response,
  Rfc3339204Response,
  Rfc7231204Response,
  UnixTimestamp204Response,
  UnixTimestampArray204Response,
  Default200Response,
  Rfc3339200Response,
  Rfc7231200Response,
  UnixTimestamp200Response,
  UnixTimestampArray200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Default {
  get(options: DefaultParameters): StreamableMethod<Default204Response>;
}

export interface Rfc3339 {
  get(options: Rfc3339Parameters): StreamableMethod<Rfc3339204Response>;
}

export interface Rfc7231 {
  get(options: Rfc7231Parameters): StreamableMethod<Rfc7231204Response>;
}

export interface UnixTimestamp {
  get(
    options: UnixTimestampParameters
  ): StreamableMethod<UnixTimestamp204Response>;
}

export interface UnixTimestampArray {
  get(
    options: UnixTimestampArrayParameters
  ): StreamableMethod<UnixTimestampArray204Response>;
}

export interface Default {
  post(options: DefaultParameters): StreamableMethod<Default200Response>;
}

export interface Rfc3339 {
  post(options: Rfc3339Parameters): StreamableMethod<Rfc3339200Response>;
}

export interface Rfc7231 {
  post(options: Rfc7231Parameters): StreamableMethod<Rfc7231200Response>;
}

export interface UnixTimestamp {
  post(
    options: UnixTimestampParameters
  ): StreamableMethod<UnixTimestamp200Response>;
}

export interface UnixTimestampArray {
  post(
    options: UnixTimestampArrayParameters
  ): StreamableMethod<UnixTimestampArray200Response>;
}

export interface Default {
  get(options: DefaultParameters): StreamableMethod<Default204Response>;
}

export interface Rfc3339 {
  get(options: Rfc3339Parameters): StreamableMethod<Rfc3339204Response>;
}

export interface Rfc7231 {
  get(options: Rfc7231Parameters): StreamableMethod<Rfc7231204Response>;
}

export interface UnixTimestamp {
  get(
    options: UnixTimestampParameters
  ): StreamableMethod<UnixTimestamp204Response>;
}

export interface UnixTimestampArray {
  get(
    options: UnixTimestampArrayParameters
  ): StreamableMethod<UnixTimestampArray204Response>;
}

export interface Default {
  get(options?: DefaultParameters): StreamableMethod<Default204Response>;
}

export interface Rfc3339 {
  get(options?: Rfc3339Parameters): StreamableMethod<Rfc3339204Response>;
}

export interface Rfc7231 {
  get(options?: Rfc7231Parameters): StreamableMethod<Rfc7231204Response>;
}

export interface UnixTimestamp {
  get(
    options?: UnixTimestampParameters
  ): StreamableMethod<UnixTimestamp204Response>;
}

export interface Routes {
  /** Resource for '/encode/datetime/query/default' has methods for the following verbs: get */
  (path: "/encode/datetime/query/default"): Default;
  /** Resource for '/encode/datetime/query/rfc3339' has methods for the following verbs: get */
  (path: "/encode/datetime/query/rfc3339"): Rfc3339;
  /** Resource for '/encode/datetime/query/rfc7231' has methods for the following verbs: get */
  (path: "/encode/datetime/query/rfc7231"): Rfc7231;
  /** Resource for '/encode/datetime/query/unix-timestamp' has methods for the following verbs: get */
  (path: "/encode/datetime/query/unix-timestamp"): UnixTimestamp;
  /** Resource for '/encode/datetime/query/unix-timestamp-array' has methods for the following verbs: get */
  (path: "/encode/datetime/query/unix-timestamp-array"): UnixTimestampArray;
  /** Resource for '/encode/datetime/property/default' has methods for the following verbs: post */
  (path: "/encode/datetime/property/default"): Default;
  /** Resource for '/encode/datetime/property/rfc3339' has methods for the following verbs: post */
  (path: "/encode/datetime/property/rfc3339"): Rfc3339;
  /** Resource for '/encode/datetime/property/rfc7231' has methods for the following verbs: post */
  (path: "/encode/datetime/property/rfc7231"): Rfc7231;
  /** Resource for '/encode/datetime/property/unix-timestamp' has methods for the following verbs: post */
  (path: "/encode/datetime/property/unix-timestamp"): UnixTimestamp;
  /** Resource for '/encode/datetime/property/unix-timestamp-array' has methods for the following verbs: post */
  (path: "/encode/datetime/property/unix-timestamp-array"): UnixTimestampArray;
  /** Resource for '/encode/datetime/header/default' has methods for the following verbs: get */
  (path: "/encode/datetime/header/default"): Default;
  /** Resource for '/encode/datetime/header/rfc3339' has methods for the following verbs: get */
  (path: "/encode/datetime/header/rfc3339"): Rfc3339;
  /** Resource for '/encode/datetime/header/rfc7231' has methods for the following verbs: get */
  (path: "/encode/datetime/header/rfc7231"): Rfc7231;
  /** Resource for '/encode/datetime/header/unix-timestamp' has methods for the following verbs: get */
  (path: "/encode/datetime/header/unix-timestamp"): UnixTimestamp;
  /** Resource for '/encode/datetime/header/unix-timestamp-array' has methods for the following verbs: get */
  (path: "/encode/datetime/header/unix-timestamp-array"): UnixTimestampArray;
  /** Resource for '/encode/datetime/responseheader/default' has methods for the following verbs: get */
  (path: "/encode/datetime/responseheader/default"): Default;
  /** Resource for '/encode/datetime/responseheader/rfc3339' has methods for the following verbs: get */
  (path: "/encode/datetime/responseheader/rfc3339"): Rfc3339;
  /** Resource for '/encode/datetime/responseheader/rfc7231' has methods for the following verbs: get */
  (path: "/encode/datetime/responseheader/rfc7231"): Rfc7231;
  /** Resource for '/encode/datetime/responseheader/unix-timestamp' has methods for the following verbs: get */
  (path: "/encode/datetime/responseheader/unix-timestamp"): UnixTimestamp;
}

export type DatetimeContext = Client & {
  path: Routes;
};
