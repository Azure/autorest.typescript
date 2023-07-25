// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RegistrationParameters } from "./parameters";
import { Registration200Response } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Registration {
  post(
    options: RegistrationParameters
  ): StreamableMethod<Registration200Response>;
}

export interface Routes {
  /** Resource for '/registration' has methods for the following verbs: post */
  (path: "/registration"): Registration;
}

export type UnionBodyClient = Client & {
  path: Routes;
};
