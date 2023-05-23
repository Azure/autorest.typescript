// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CreateOrReplaceParameters } from "./parameters.js";
import {
  CreateOrReplace200Response,
  CreateOrReplace201Response,
  CreateOrReplaceDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateOrReplace {
  /** Creates or replaces a User */
  put(
    options: CreateOrReplaceParameters
  ): StreamableMethod<
    | CreateOrReplace200Response
    | CreateOrReplace201Response
    | CreateOrReplaceDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/azure/core/lro/standard/users/\{name\}' has methods for the following verbs: put */
  (
    path: "/azure/core/lro/standard/users/{name}",
    name: string
  ): CreateOrReplace;
}

export type StandardContext = Client & {
  path: Routes;
};
