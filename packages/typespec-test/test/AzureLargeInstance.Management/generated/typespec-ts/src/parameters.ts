// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  AzureLargeInstanceTagsUpdate,
  ForceState,
  AzureLargeStorageInstanceTagsUpdate,
} from "./models.js";

export type OperationsListParameters = RequestParameters;
export type AzureLargeInstancesGetParameters = RequestParameters;

export interface AzureLargeInstancesUpdateBodyParam {
  /** The resource properties to be updated. */
  body: AzureLargeInstanceTagsUpdate;
}

export type AzureLargeInstancesUpdateParameters =
  AzureLargeInstancesUpdateBodyParam & RequestParameters;
export type AzureLargeInstancesListByResourceGroupParameters =
  RequestParameters;
export type AzureLargeInstancesListBySubscriptionParameters = RequestParameters;
export type AzureLargeInstancesStartParameters = RequestParameters;

export interface AzureLargeInstancesRestartBodyParam {
  /** When set to 'active', this parameter empowers the server with the ability to forcefully terminate and halt any existing processes that may be running on the server */
  body?: ForceState;
}

export type AzureLargeInstancesRestartParameters =
  AzureLargeInstancesRestartBodyParam & RequestParameters;
export type AzureLargeInstancesShutdownParameters = RequestParameters;
export type AzureLargeStorageInstancesGetParameters = RequestParameters;

export interface AzureLargeStorageInstancesUpdateBodyParam {
  /** The resource properties to be updated. */
  body: AzureLargeStorageInstanceTagsUpdate;
}

export type AzureLargeStorageInstancesUpdateParameters =
  AzureLargeStorageInstancesUpdateBodyParam & RequestParameters;
export type AzureLargeStorageInstancesListByResourceGroupParameters =
  RequestParameters;
export type AzureLargeStorageInstancesListBySubscriptionParameters =
  RequestParameters;
