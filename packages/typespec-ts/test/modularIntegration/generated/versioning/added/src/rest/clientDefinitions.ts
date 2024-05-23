// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  V1Parameters,
  V2Parameters,
  V2InInterfaceParameters,
} from "./parameters.js";
import {
  V1200Response,
  V2200Response,
  V2InInterface200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface V1 {
  post(options: V1Parameters): StreamableMethod<V1200Response>;
}

export interface V2 {
  post(options: V2Parameters): StreamableMethod<V2200Response>;
}

export interface V2InInterface {
  post(
    options: V2InInterfaceParameters,
  ): StreamableMethod<V2InInterface200Response>;
}

export interface Routes {
  /** Resource for '/v1' has methods for the following verbs: post */
  (path: "/v1"): V1;
  /** Resource for '/v2' has methods for the following verbs: post */
  (path: "/v2"): V2;
  /** Resource for '/interface-v2/v2' has methods for the following verbs: post */
  (path: "/interface-v2/v2"): V2InInterface;
}

export type AddedContext = Client & {
  path: Routes;
};
