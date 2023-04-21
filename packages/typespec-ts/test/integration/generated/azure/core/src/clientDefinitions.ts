// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateOrUpdateParameters,
  CreateOrReplaceParameters,
  GetParameters,
  DeleteParameters,
  ListParameters,
  ListWithPageParameters,
  ExportParameters,
} from "./parameters";
import {
  CreateOrUpdate200Response,
  CreateOrUpdate201Response,
  CreateOrUpdateDefaultResponse,
  CreateOrReplace200Response,
  CreateOrReplace201Response,
  CreateOrReplaceDefaultResponse,
  Get200Response,
  GetDefaultResponse,
  Delete204Response,
  DeleteDefaultResponse,
  List200Response,
  ListDefaultResponse,
  ListWithPage200Response,
  ListWithPageDefaultResponse,
  Export200Response,
  ExportDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateOrUpdate {
  /** Creates or updates a User */
  patch(
    options: CreateOrUpdateParameters
  ): StreamableMethod<
    | CreateOrUpdate200Response
    | CreateOrUpdate201Response
    | CreateOrUpdateDefaultResponse
  >;
  /** Creates or replaces a User */
  put(
    options: CreateOrReplaceParameters
  ): StreamableMethod<
    | CreateOrReplace200Response
    | CreateOrReplace201Response
    | CreateOrReplaceDefaultResponse
  >;
  /** Gets a User */
  get(
    options?: GetParameters
  ): StreamableMethod<Get200Response | GetDefaultResponse>;
  /** Deletes a User */
  delete(
    options?: DeleteParameters
  ): StreamableMethod<Delete204Response | DeleteDefaultResponse>;
}

export interface List {
  /** Lists all Users */
  get(
    options?: ListParameters
  ): StreamableMethod<List200Response | ListDefaultResponse>;
}

export interface ListWithPage {
  /** List with Azure.Core.Page<>. */
  get(
    options?: ListWithPageParameters
  ): StreamableMethod<ListWithPage200Response | ListWithPageDefaultResponse>;
}

export interface Export {
  /** Exports a User */
  post(
    options: ExportParameters
  ): StreamableMethod<Export200Response | ExportDefaultResponse>;
}

export interface Routes {
  /** Resource for '/azure/core/users/\{id\}' has methods for the following verbs: patch, put, get, delete */
  (path: "/azure/core/users/{id}", id: number): CreateOrUpdate;
  /** Resource for '/azure/core/users' has methods for the following verbs: get */
  (path: "/azure/core/users"): List;
  /** Resource for '/azure/core/page' has methods for the following verbs: get */
  (path: "/azure/core/page"): ListWithPage;
  /** Resource for '/azure/core/users/\{id\}:export' has methods for the following verbs: post */
  (path: "/azure/core/users/{id}:export", id: number): Export;
}

export type AzureCoreClient = Client & {
  path: Routes;
};
