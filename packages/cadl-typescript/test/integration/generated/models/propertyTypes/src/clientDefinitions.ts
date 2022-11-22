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
  /** Resource for '/models/properties/types/boolean' has methods for the following verbs: get, put */
  (path: "/models/properties/types/boolean"): Get;
  /** Resource for '/models/properties/types/string' has methods for the following verbs: get, put */
  (path: "/models/properties/types/string"): Get;
  /** Resource for '/models/properties/types/bytes' has methods for the following verbs: get, put */
  (path: "/models/properties/types/bytes"): Get;
  /** Resource for '/models/properties/types/int' has methods for the following verbs: get, put */
  (path: "/models/properties/types/int"): Get;
  /** Resource for '/models/properties/types/float' has methods for the following verbs: get, put */
  (path: "/models/properties/types/float"): Get;
  /** Resource for '/models/properties/types/datetime' has methods for the following verbs: get, put */
  (path: "/models/properties/types/datetime"): Get;
  /** Resource for '/models/properties/types/duration' has methods for the following verbs: get, put */
  (path: "/models/properties/types/duration"): Get;
  /** Resource for '/models/properties/types/enum' has methods for the following verbs: get, put */
  (path: "/models/properties/types/enum"): Get;
  /** Resource for '/models/properties/types/extensible-enum' has methods for the following verbs: get, put */
  (path: "/models/properties/types/extensible-enum"): Get;
  /** Resource for '/models/properties/types/model' has methods for the following verbs: get, put */
  (path: "/models/properties/types/model"): Get;
  /** Resource for '/models/properties/types/collections/string' has methods for the following verbs: get, put */
  (path: "/models/properties/types/collections/string"): Get;
  /** Resource for '/models/properties/types/collections/int' has methods for the following verbs: get, put */
  (path: "/models/properties/types/collections/int"): Get;
  /** Resource for '/models/properties/types/collections/model' has methods for the following verbs: get, put */
  (path: "/models/properties/types/collections/model"): Get;
  /** Resource for '/models/properties/types/dictionary/string' has methods for the following verbs: get, put */
  (path: "/models/properties/types/dictionary/string"): Get;
  /** Resource for '/models/properties/types/never' has methods for the following verbs: get, put */
  (path: "/models/properties/types/never"): Get;
}

export type ModelsPropertyTypesClient = Client & {
  path: Routes;
};
