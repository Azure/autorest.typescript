// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpResponse } from "@azure-rest/core-client";
import {
  ManagedIdentityTrackedResourceOutput,
  ErrorResponseOutput,
} from "./outputModels.js";

/** Azure operation completed successfully. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: ManagedIdentityTrackedResourceOutput;
}

export interface GetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'ManagedIdentityTrackedResource' update operation succeeded */
export interface CreateWithSystemAssigned200Response extends HttpResponse {
  status: "200";
  body: ManagedIdentityTrackedResourceOutput;
}

/** Resource 'ManagedIdentityTrackedResource' create operation succeeded */
export interface CreateWithSystemAssigned201Response extends HttpResponse {
  status: "201";
  body: ManagedIdentityTrackedResourceOutput;
}

export interface CreateWithSystemAssignedDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface UpdateWithUserAssignedAndSystemAssigned200Response
  extends HttpResponse {
  status: "200";
  body: ManagedIdentityTrackedResourceOutput;
}

export interface UpdateWithUserAssignedAndSystemAssignedDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
