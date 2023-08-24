// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValidParameters, InvalidParameters } from "./parameters";
import {
  Valid204Response,
  ValidDefaultResponse,
  Invalid204Response,
  Invalid403Response,
  InvalidDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Valid {
  /** Check whether client is authenticated */
  get(
    options?: ValidParameters
  ): StreamableMethod<Valid204Response | ValidDefaultResponse>;
}

export interface Invalid {
  /** Check whether client is authenticated. Will return an invalid bearer error. */
  get(
    options?: InvalidParameters
  ): StreamableMethod<
    Invalid204Response | Invalid403Response | InvalidDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/authentication/oauth2/valid' has methods for the following verbs: get */
  (path: "/authentication/oauth2/valid"): Valid;
  /** Resource for '/authentication/oauth2/invalid' has methods for the following verbs: get */
  (path: "/authentication/oauth2/invalid"): Invalid;
}

export type AuthOauth2Client = Client & {
  path: Routes;
};
