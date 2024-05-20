// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  PagedOperationOutput,
  ErrorResponseOutput,
  StandbyVirtualMachinePoolResourceOutput,
  StandbyVirtualMachinePoolResourceListResultOutput,
  StandbyVirtualMachineResourceOutput,
  StandbyVirtualMachineResourceListResultOutput,
  StandbyContainerGroupPoolResourceOutput,
  StandbyContainerGroupPoolResourceListResultOutput,
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
export interface StandbyVirtualMachinePoolsGet200Response extends HttpResponse {
  status: "200";
  body: StandbyVirtualMachinePoolResourceOutput;
}

export interface StandbyVirtualMachinePoolsGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'StandbyVirtualMachinePoolResource' update operation succeeded */
export interface StandbyVirtualMachinePoolsCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: StandbyVirtualMachinePoolResourceOutput;
}

export interface StandbyVirtualMachinePoolsCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'StandbyVirtualMachinePoolResource' create operation succeeded */
export interface StandbyVirtualMachinePoolsCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: StandbyVirtualMachinePoolResourceOutput;
  headers: RawHttpHeaders & StandbyVirtualMachinePoolsCreateOrUpdate201Headers;
}

export interface StandbyVirtualMachinePoolsCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface StandbyVirtualMachinePoolsCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: StandbyVirtualMachinePoolResourceOutput;
}

export interface StandbyVirtualMachinePoolsDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface StandbyVirtualMachinePoolsDelete202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & StandbyVirtualMachinePoolsDelete202Headers;
}

/** Resource does not exist. */
export interface StandbyVirtualMachinePoolsDelete204Response
  extends HttpResponse {
  status: "204";
}

export interface StandbyVirtualMachinePoolsDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface StandbyVirtualMachinePoolsDeleteLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface StandbyVirtualMachinePoolsUpdate200Response
  extends HttpResponse {
  status: "200";
  body: StandbyVirtualMachinePoolResourceOutput;
}

export interface StandbyVirtualMachinePoolsUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface StandbyVirtualMachinePoolsListByResourceGroup200Response
  extends HttpResponse {
  status: "200";
  body: StandbyVirtualMachinePoolResourceListResultOutput;
}

export interface StandbyVirtualMachinePoolsListByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface StandbyVirtualMachinePoolsListBySubscription200Response
  extends HttpResponse {
  status: "200";
  body: StandbyVirtualMachinePoolResourceListResultOutput;
}

export interface StandbyVirtualMachinePoolsListBySubscriptionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface StandbyVirtualMachinesGet200Response extends HttpResponse {
  status: "200";
  body: StandbyVirtualMachineResourceOutput;
}

export interface StandbyVirtualMachinesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface StandbyVirtualMachinesListByStandbyVirtualMachinePoolResource200Response
  extends HttpResponse {
  status: "200";
  body: StandbyVirtualMachineResourceListResultOutput;
}

export interface StandbyVirtualMachinesListByStandbyVirtualMachinePoolResourceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface StandbyContainerGroupPoolsGet200Response extends HttpResponse {
  status: "200";
  body: StandbyContainerGroupPoolResourceOutput;
}

export interface StandbyContainerGroupPoolsGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'StandbyContainerGroupPoolResource' update operation succeeded */
export interface StandbyContainerGroupPoolsCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: StandbyContainerGroupPoolResourceOutput;
}

export interface StandbyContainerGroupPoolsCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'StandbyContainerGroupPoolResource' create operation succeeded */
export interface StandbyContainerGroupPoolsCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: StandbyContainerGroupPoolResourceOutput;
  headers: RawHttpHeaders & StandbyContainerGroupPoolsCreateOrUpdate201Headers;
}

export interface StandbyContainerGroupPoolsCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface StandbyContainerGroupPoolsCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: StandbyContainerGroupPoolResourceOutput;
}

export interface StandbyContainerGroupPoolsDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface StandbyContainerGroupPoolsDelete202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & StandbyContainerGroupPoolsDelete202Headers;
}

/** Resource does not exist. */
export interface StandbyContainerGroupPoolsDelete204Response
  extends HttpResponse {
  status: "204";
}

export interface StandbyContainerGroupPoolsDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface StandbyContainerGroupPoolsDeleteLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface StandbyContainerGroupPoolsUpdate200Response
  extends HttpResponse {
  status: "200";
  body: StandbyContainerGroupPoolResourceOutput;
}

export interface StandbyContainerGroupPoolsUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface StandbyContainerGroupPoolsListByResourceGroup200Response
  extends HttpResponse {
  status: "200";
  body: StandbyContainerGroupPoolResourceListResultOutput;
}

export interface StandbyContainerGroupPoolsListByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface StandbyContainerGroupPoolsListBySubscription200Response
  extends HttpResponse {
  status: "200";
  body: StandbyContainerGroupPoolResourceListResultOutput;
}

export interface StandbyContainerGroupPoolsListBySubscriptionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
