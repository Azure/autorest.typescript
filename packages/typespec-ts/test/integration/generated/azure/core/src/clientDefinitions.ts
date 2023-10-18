// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateOrUpdateParameters,
  CreateOrReplaceParameters,
  GetParameters,
  DeleteParameters,
  ListParameters,
  ListWithPageParameters,
  ListWithCustomPageModelParameters,
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
  DeleteOperation204Response,
  DeleteOperationDefaultResponse,
  List200Response,
  ListDefaultResponse,
  ListWithPage200Response,
  ListWithPageDefaultResponse,
  ListWithCustomPageModel200Response,
  ListWithCustomPageModelDefaultResponse,
  ExportOperation200Response,
  ExportOperationDefaultResponse,
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
  ): StreamableMethod<
    DeleteOperation204Response | DeleteOperationDefaultResponse
  >;
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

export interface ListWithCustomPageModel {
  /** List with custom page model. */
  get(
    options?: ListWithCustomPageModelParameters
  ): StreamableMethod<
    ListWithCustomPageModel200Response | ListWithCustomPageModelDefaultResponse
  >;
}

export interface Export {
  /** Exports a User */
  post(
    options: ExportParameters
  ): StreamableMethod<
    ExportOperation200Response | ExportOperationDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/azure/core/basic/users/\{id\}' has methods for the following verbs: patch, put, get, delete */
  (path: "/azure/core/basic/users/{id}", id: number): CreateOrUpdate;
  /** Resource for '/azure/core/basic/users' has methods for the following verbs: get */
  (path: "/azure/core/basic/users"): List;
  /** Resource for '/azure/core/basic/page' has methods for the following verbs: get */
  (path: "/azure/core/basic/page"): ListWithPage;
  /** Resource for '/azure/core/basic/custom-page' has methods for the following verbs: get */
  (path: "/azure/core/basic/custom-page"): ListWithCustomPageModel;
  /** Resource for '/azure/core/basic/users/\{id\}:export' has methods for the following verbs: post */
  (path: "/azure/core/basic/users/{id}:export", id: number): Export;
}

export type AzureCoreClient = Client & {
  path: Routes;
};
