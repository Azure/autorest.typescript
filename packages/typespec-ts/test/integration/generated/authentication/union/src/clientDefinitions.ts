// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ValidKeyParameters, ValidTokenParameters } from "./parameters";
import {
  ValidKey204Response,
  ValidKeyDefaultResponse,
  ValidToken204Response,
  ValidTokenDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ValidKey {
  /** Check whether client is authenticated */
  get(
    options?: ValidKeyParameters
  ): StreamableMethod<ValidKey204Response | ValidKeyDefaultResponse>;
}

export interface ValidToken {
  /** Check whether client is authenticated */
  get(
    options?: ValidTokenParameters
  ): StreamableMethod<ValidToken204Response | ValidTokenDefaultResponse>;
}

export interface Routes {
  /** Resource for '/authentication/union/validkey' has methods for the following verbs: get */
  (path: "/authentication/union/validkey"): ValidKey;
  /** Resource for '/authentication/union/validtoken' has methods for the following verbs: get */
  (path: "/authentication/union/validtoken"): ValidToken;
}

export type AuthUnionClient = Client & {
  path: Routes;
};
