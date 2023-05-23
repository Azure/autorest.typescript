// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateOrReplaceParameters,
  DeleteParameters,
  ExportParameters,
} from "./parameters";
import {
  CreateOrReplace200Response,
  CreateOrReplace201Response,
  CreateOrReplaceDefaultResponse,
  Delete202Response,
  DeleteDefaultResponse,
  Export202Response,
  ExportDefaultResponse,
} from "./responses";
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
  /** Deletes a User */
  delete(
    options?: DeleteParameters
  ): StreamableMethod<Delete202Response | DeleteDefaultResponse>;
}

export interface Export {
  /** Exports a User */
  post(
    options: ExportParameters
  ): StreamableMethod<Export202Response | ExportDefaultResponse>;
}

export interface Routes {
  /** Resource for '/azure/core/lro/standard/users/\{name\}' has methods for the following verbs: put, delete */
  (
    path: "/azure/core/lro/standard/users/{name}",
    name: string
  ): CreateOrReplace;
  /** Resource for '/azure/core/lro/standard/users/\{name\}:export' has methods for the following verbs: post */
  (path: "/azure/core/lro/standard/users/{name}:export", name: string): Export;
}

export type SpecsAzureCoreLroStandardClient = Client & {
  path: Routes;
};
