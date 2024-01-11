// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValidParameters, InvalidParameters } from "./parameters.js";
import {
  Valid204Response,
  Invalid204Response,
  Invalid403Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Valid {
  /** Check whether client is authenticated */
  get(options?: ValidParameters): StreamableMethod<Valid204Response>;
}

export interface Invalid {
  /** Check whether client is authenticated. */
  get(
    options?: InvalidParameters,
  ): StreamableMethod<Invalid204Response | Invalid403Response>;
}

export interface Routes {
  /** Resource for '/authentication/api-key/valid' has methods for the following verbs: get */
  (path: "/authentication/api-key/valid"): Valid;
  /** Resource for '/authentication/api-key/invalid' has methods for the following verbs: get */
  (path: "/authentication/api-key/invalid"): Invalid;
}

export type ApiKeyContext = Client & {
  path: Routes;
};
