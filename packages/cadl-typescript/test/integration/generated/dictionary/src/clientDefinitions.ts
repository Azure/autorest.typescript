// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GetParameters, PutParameters } from "./parameters";
import { Get200Response, Put204Response } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Get {
  get(options?: GetParameters): StreamableMethod<Get200Response>;
  put(options: PutParameters): StreamableMethod<Put204Response>;
}

export interface Get {
  get(options?: GetParameters): StreamableMethod<Get200Response>;
  put(options: PutParameters): StreamableMethod<Put204Response>;
}

export interface Get {
  get(options?: GetParameters): StreamableMethod<Get200Response>;
  put(options: PutParameters): StreamableMethod<Put204Response>;
}

export interface Get {
  get(options?: GetParameters): StreamableMethod<Get200Response>;
  put(options: PutParameters): StreamableMethod<Put204Response>;
}

export interface Get {
  get(options?: GetParameters): StreamableMethod<Get200Response>;
  put(options: PutParameters): StreamableMethod<Put204Response>;
}

export interface Get {
  get(options?: GetParameters): StreamableMethod<Get200Response>;
  put(options: PutParameters): StreamableMethod<Put204Response>;
}

export interface Get {
  get(options?: GetParameters): StreamableMethod<Get200Response>;
  put(options: PutParameters): StreamableMethod<Put204Response>;
}

export interface Get {
  get(options?: GetParameters): StreamableMethod<Get200Response>;
  put(options: PutParameters): StreamableMethod<Put204Response>;
}

export interface Get {
  get(options?: GetParameters): StreamableMethod<Get200Response>;
  put(options: PutParameters): StreamableMethod<Put204Response>;
}

export interface Get {
  get(options?: GetParameters): StreamableMethod<Get200Response>;
  put(options: PutParameters): StreamableMethod<Put204Response>;
}

export interface Routes {
  /** Resource for '/dictionary/int32' has methods for the following verbs: get, put */
  (path: "/dictionary/int32"): Get;
  /** Resource for '/dictionary/int64' has methods for the following verbs: get, put */
  (path: "/dictionary/int64"): Get;
  /** Resource for '/dictionary/boolean' has methods for the following verbs: get, put */
  (path: "/dictionary/boolean"): Get;
  /** Resource for '/dictionary/string' has methods for the following verbs: get, put */
  (path: "/dictionary/string"): Get;
  /** Resource for '/dictionary/float32' has methods for the following verbs: get, put */
  (path: "/dictionary/float32"): Get;
  /** Resource for '/dictionary/datetime' has methods for the following verbs: get, put */
  (path: "/dictionary/datetime"): Get;
  /** Resource for '/dictionary/duration' has methods for the following verbs: get, put */
  (path: "/dictionary/duration"): Get;
  /** Resource for '/dictionary/unknown' has methods for the following verbs: get, put */
  (path: "/dictionary/unknown"): Get;
  /** Resource for '/dictionary/model' has methods for the following verbs: get, put */
  (path: "/dictionary/model"): Get;
  /** Resource for '/dictionary/model/recursive' has methods for the following verbs: get, put */
  (path: "/dictionary/model/recursive"): Get;
}

export type DictClient = Client & {
  path: Routes;
};
