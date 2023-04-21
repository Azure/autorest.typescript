// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GetParameters, DeleteParameters } from "./parameters";
import {
  Get200Response,
  GetDefaultResponse,
  Delete204Response,
  DeleteDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Get {
  /** Get a resource, sending and receiving headers. */
  get(
    options: GetParameters
  ): StreamableMethod<Get200Response | GetDefaultResponse>;
}

export interface Delete {
  /** Delete resource with api-version path parameter */
  delete(
    options?: DeleteParameters
  ): StreamableMethod<Delete204Response | DeleteDefaultResponse>;
}

export interface Routes {
  /** Resource for '/azure/traits/user/\{id\}' has methods for the following verbs: get */
  (path: "/azure/traits/user/{id}", id: number): Get;
  /** Resource for '/azure/traits/api/\{apiVersion\}/user/\{id\}' has methods for the following verbs: delete */
  (
    path: "/azure/traits/api/{apiVersion}/user/{id}",
    apiVersion: string,
    id: number
  ): Delete;
}

export type AzureCoreTraitsClient = Client & {
  path: Routes;
};
