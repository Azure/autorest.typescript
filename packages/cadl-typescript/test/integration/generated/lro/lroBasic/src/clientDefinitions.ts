// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateParameters,
  GetParameters,
  PollingParameters,
} from "./parameters";
import {
  Create200Response,
  Get200Response,
  Polling200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Create {
  /** Test for basic lro of put */
  put(options?: CreateParameters): StreamableMethod<Create200Response>;
  /** The final url */
  get(options?: GetParameters): StreamableMethod<Get200Response>;
}

export interface Polling {
  /** The polling url */
  get(options?: PollingParameters): StreamableMethod<Polling200Response>;
}

export interface Routes {
  /** Resource for '/lro/basic/put' has methods for the following verbs: put, get */
  (path: "/lro/basic/put"): Create;
  /** Resource for '/lro/basic/put/polling' has methods for the following verbs: get */
  (path: "/lro/basic/put/polling"): Polling;
}

export type AzureLroClient = Client & {
  path: Routes;
};
