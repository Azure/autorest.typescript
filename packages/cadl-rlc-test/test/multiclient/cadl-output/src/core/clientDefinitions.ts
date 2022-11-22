// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CadlCoreOpCreateOrUpdateParameters,
  CadlCoreOpGetParameters,
  CadlCoreOpDeleteParameters,
  CadlCoreOpListParameters,
} from "./parameters";
import {
  CadlCoreOpCreateOrUpdate200Response,
  CadlCoreOpCreateOrUpdate201Response,
  CadlCoreOpCreateOrUpdateDefaultResponse,
  CadlCoreOpGet200Response,
  CadlCoreOpGetDefaultResponse,
  CadlCoreOpDelete204Response,
  CadlCoreOpDeleteDefaultResponse,
  CadlCoreOpList200Response,
  CadlCoreOpListDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateOrUpdate {
  /** Creates a new resource or updates an existing one. */
  put(
    options?: CadlCoreOpCreateOrUpdateParameters
  ): StreamableMethod<
    | CadlCoreOpCreateOrUpdate200Response
    | CadlCoreOpCreateOrUpdate201Response
    | CadlCoreOpCreateOrUpdateDefaultResponse
  >;
  /** Gets the details of a resource. */
  get(
    options?: CadlCoreOpGetParameters
  ): StreamableMethod<CadlCoreOpGet200Response | CadlCoreOpGetDefaultResponse>;
  /** Deletes a resource. */
  delete(
    options?: CadlCoreOpDeleteParameters
  ): StreamableMethod<
    CadlCoreOpDelete204Response | CadlCoreOpDeleteDefaultResponse
  >;
}

export interface List {
  /** Lists the existing resources. */
  get(
    options?: CadlCoreOpListParameters
  ): StreamableMethod<
    CadlCoreOpList200Response | CadlCoreOpListDefaultResponse
  >;
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
