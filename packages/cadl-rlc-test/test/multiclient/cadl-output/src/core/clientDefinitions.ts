// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateOrUpdateParameters,
  GetParameters,
  DeleteParameters,
  ListParameters,
} from "./parameters";
import {
  CreateOrUpdate200Response,
  CreateOrUpdate201Response,
  CreateOrUpdateDefaultResponse,
  Get200Response,
  GetDefaultResponse,
  Delete204Response,
  DeleteDefaultResponse,
  List200Response,
  ListDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateOrUpdate {
  /** Creates a new resource or updates an existing one. */
  put(
    options?: CreateOrUpdateParameters
  ): StreamableMethod<
    | CreateOrUpdate200Response
    | CreateOrUpdate201Response
    | CreateOrUpdateDefaultResponse
  >;
  /** Gets the details of a resource. */
  get(
    options?: GetParameters
  ): StreamableMethod<Get200Response | GetDefaultResponse>;
  /** Deletes a resource. */
  delete(
    options?: DeleteParameters
  ): StreamableMethod<Delete204Response | DeleteDefaultResponse>;
}

export interface List {
  /** Lists the existing resources. */
  get(
    options?: ListParameters
  ): StreamableMethod<List200Response | ListDefaultResponse>;
}

export interface Routes {
  /** Resource for '/cadl-core/resources/\{name\}' has methods for the following verbs: put, get, delete */
  (path: "/cadl-core/resources/{name}", name: string): CreateOrUpdate;
  /** Resource for '/cadl-core/resources' has methods for the following verbs: get */
  (path: "/cadl-core/resources"): List;
}

export type CoreClient = Client & {
  path: Routes;
};
