// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetParameters,
  UpdateParameters,
  DeleteParameters,
  CreateParameters,
  ListParameters,
} from "./parameters";
import {
  Get200Response,
  GetDefaultResponse,
  Update200Response,
  UpdateDefaultResponse,
  DeleteOperation200Response,
  DeleteOperationDefaultResponse,
  Create200Response,
  Create201Response,
  CreateDefaultResponse,
  List200Response,
  ListDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Get {
  /** Gets an instance of the resource. */
  get(
    options?: GetParameters,
  ): StreamableMethod<Get200Response | GetDefaultResponse>;
  /** Updates an existing instance of the resource. */
  patch(
    options: UpdateParameters,
  ): StreamableMethod<Update200Response | UpdateDefaultResponse>;
  /** Deletes an existing instance of the resource. */
  delete(
    options?: DeleteParameters,
  ): StreamableMethod<
    DeleteOperation200Response | DeleteOperationDefaultResponse
  >;
}

export interface Create {
  /** Creates a new instance of the resource. */
  post(
    options: CreateParameters,
  ): StreamableMethod<
    Create200Response | Create201Response | CreateDefaultResponse
  >;
  /** Lists all instances of the resource. */
  get(
    options?: ListParameters,
  ): StreamableMethod<List200Response | ListDefaultResponse>;
}

export interface Routes {
  /** Resource for '/\{id\}' has methods for the following verbs: get, patch, delete */
  (path: "/{id}", id: string): Get;
  /** Resource for '/' has methods for the following verbs: post, get */
  (path: "/"): Create;
}

export type DemoServiceClient = Client & {
  path: Routes;
};
