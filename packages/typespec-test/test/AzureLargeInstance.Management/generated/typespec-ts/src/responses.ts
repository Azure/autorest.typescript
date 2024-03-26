// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  PagedOperationOutput,
  ErrorResponseOutput,
  AzureLargeInstanceOutput,
  AzureLargeInstanceListResultOutput,
  OperationStatusResultOutput,
  AzureLargeStorageInstanceOutput,
  AzureLargeStorageInstanceListResultOutput,
} from "./outputModels.js";

/** Azure operation completed successfully. */
export interface OperationsList200Response extends HttpResponse {
  status: "200";
  body: PagedOperationOutput;
}

export interface OperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AzureLargeInstancesGet200Response extends HttpResponse {
  status: "200";
  body: AzureLargeInstanceOutput;
}

export interface AzureLargeInstancesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AzureLargeInstancesUpdate200Response extends HttpResponse {
  status: "200";
  body: AzureLargeInstanceOutput;
}

export interface AzureLargeInstancesUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AzureLargeInstancesListByResourceGroup200Response
  extends HttpResponse {
  status: "200";
  body: AzureLargeInstanceListResultOutput;
}

export interface AzureLargeInstancesListByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AzureLargeInstancesListBySubscription200Response
  extends HttpResponse {
  status: "200";
  body: AzureLargeInstanceListResultOutput;
}

export interface AzureLargeInstancesListBySubscriptionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface AzureLargeInstancesStart200Response extends HttpResponse {
  status: "200";
  body: OperationStatusResultOutput;
}

export interface AzureLargeInstancesStart202Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
}

/** Resource operation accepted. */
export interface AzureLargeInstancesStart202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AzureLargeInstancesStart202Headers;
}

export interface AzureLargeInstancesStartDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running start operation */
export interface AzureLargeInstancesStartLogicalResponse extends HttpResponse {
  status: "200";
  body: OperationStatusResultOutput;
}

/** The request has succeeded. */
export interface AzureLargeInstancesRestart200Response extends HttpResponse {
  status: "200";
  body: OperationStatusResultOutput;
}

export interface AzureLargeInstancesRestart202Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
}

/** Resource operation accepted. */
export interface AzureLargeInstancesRestart202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AzureLargeInstancesRestart202Headers;
}

export interface AzureLargeInstancesRestartDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running restart operation */
export interface AzureLargeInstancesRestartLogicalResponse
  extends HttpResponse {
  status: "200";
  body: OperationStatusResultOutput;
}

/** The request has succeeded. */
export interface AzureLargeInstancesShutdown200Response extends HttpResponse {
  status: "200";
  body: OperationStatusResultOutput;
}

export interface AzureLargeInstancesShutdown202Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
}

/** Resource operation accepted. */
export interface AzureLargeInstancesShutdown202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AzureLargeInstancesShutdown202Headers;
}

export interface AzureLargeInstancesShutdownDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running shutdown operation */
export interface AzureLargeInstancesShutdownLogicalResponse
  extends HttpResponse {
  status: "200";
  body: OperationStatusResultOutput;
}

/** Azure operation completed successfully. */
export interface AzureLargeStorageInstancesGet200Response extends HttpResponse {
  status: "200";
  body: AzureLargeStorageInstanceOutput;
}

export interface AzureLargeStorageInstancesGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AzureLargeStorageInstancesUpdate200Response
  extends HttpResponse {
  status: "200";
  body: AzureLargeStorageInstanceOutput;
}

export interface AzureLargeStorageInstancesUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AzureLargeStorageInstancesListByResourceGroup200Response
  extends HttpResponse {
  status: "200";
  body: AzureLargeStorageInstanceListResultOutput;
}

export interface AzureLargeStorageInstancesListByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AzureLargeStorageInstancesListBySubscription200Response
  extends HttpResponse {
  status: "200";
  body: AzureLargeStorageInstanceListResultOutput;
}

export interface AzureLargeStorageInstancesListBySubscriptionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
