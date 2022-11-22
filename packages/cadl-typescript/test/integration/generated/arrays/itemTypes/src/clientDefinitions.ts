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

export interface Routes {
  /** Resource for '/arrays/item-types/int32' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/int32"): Get;
  /** Resource for '/arrays/item-types/int64' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/int64"): Get;
  /** Resource for '/arrays/item-types/boolean' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/boolean"): Get;
  /** Resource for '/arrays/item-types/string' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/string"): Get;
  /** Resource for '/arrays/item-types/float32' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/float32"): Get;
  /** Resource for '/arrays/item-types/datetime' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/datetime"): Get;
  /** Resource for '/arrays/item-types/duration' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/duration"): Get;
  /** Resource for '/arrays/item-types/unknown' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/unknown"): Get;
  /** Resource for '/arrays/item-types/model' has methods for the following verbs: get, put */
  (path: "/arrays/item-types/model"): Get;
}

export type ArrayItemTypesClient = Client & {
  path: Routes;
};
