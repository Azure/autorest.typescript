// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RequestParameters } from "@azure-rest/core-client";
import { ManagedIdentityTrackedResource } from "./models.js";

export type GetParameters = RequestParameters;

export interface CreateWithSystemAssignedBodyParam {
  /** Resource create parameters. */
  body: ManagedIdentityTrackedResource;
}

export type CreateWithSystemAssignedParameters =
  CreateWithSystemAssignedBodyParam & RequestParameters;

export interface UpdateWithUserAssignedAndSystemAssignedBodyParam {
  /** The resource properties to be updated. */
  body: ManagedIdentityTrackedResource;
}

export type UpdateWithUserAssignedAndSystemAssignedParameters =
  UpdateWithUserAssignedAndSystemAssignedBodyParam & RequestParameters;
