// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  PollingSuccessCreateParameters,
  PollingSuccessGetParameters,
  PollingSuccessPollingParameters,
} from "./parameters";
import {
  PollingSuccessCreate200Response,
  PollingSuccessGet200Response,
  PollingSuccessPolling200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

/** Contains operations for PollingSuccess operations */
export interface PollingSuccessOperations {
  /** Test for basic lro of put */
  create(
    options?: PollingSuccessCreateParameters
  ): StreamableMethod<PollingSuccessCreate200Response>;
  /** The final url */
  get(
    options?: PollingSuccessGetParameters
  ): StreamableMethod<PollingSuccessGet200Response>;
  /** The polling url */
  polling(
    options?: PollingSuccessPollingParameters
  ): StreamableMethod<PollingSuccessPolling200Response>;
}

export interface Create {
  /** Test for basic lro of put */
  put(
    options?: PollingSuccessCreateParameters
  ): StreamableMethod<PollingSuccessCreate200Response>;
  /** The final url */
  get(
    options?: PollingSuccessGetParameters
  ): StreamableMethod<PollingSuccessGet200Response>;
}

export interface Polling {
  /** The polling url */
  get(
    options?: PollingSuccessPollingParameters
  ): StreamableMethod<PollingSuccessPolling200Response>;
}

export interface Routes {
  /** Resource for '/lro/basic/put' has methods for the following verbs: put, get */
  (path: "/lro/basic/put"): Create;
  /** Resource for '/lro/basic/put/polling' has methods for the following verbs: get */
  (path: "/lro/basic/put/polling"): Polling;
}

export type AzureLroClient = Client & {
  path: Routes;
  pollingSuccess: PollingSuccessOperations;
};
