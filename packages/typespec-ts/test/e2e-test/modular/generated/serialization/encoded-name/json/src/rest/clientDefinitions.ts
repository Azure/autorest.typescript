// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SendParameters, GetParameters } from "./parameters.js";
import { Send204Response, Get200Response } from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Send {
  post(options?: SendParameters): StreamableMethod<Send204Response>;
  get(options?: GetParameters): StreamableMethod<Get200Response>;
}

export interface Routes {
  /** Resource for '/serialization/encoded-name/json/property' has methods for the following verbs: post, get */
  (path: "/serialization/encoded-name/json/property"): Send;
}

export type JsonContext = Client & {
  path: Routes;
};
