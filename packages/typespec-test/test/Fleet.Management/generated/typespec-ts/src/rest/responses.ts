// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  PagedOperationOutput,
  ErrorResponseOutput,
  FleetOutput,
  FleetListResultOutput,
  FleetCredentialResultsOutput,
  FleetMemberOutput,
  FleetMemberListResultOutput,
  UpdateRunOutput,
  UpdateRunListResultOutput,
  FleetUpdateStrategyOutput,
  FleetUpdateStrategyListResultOutput,
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
export interface FleetsGet200Response extends HttpResponse {
  status: "200";
  body: FleetOutput;
}

export interface FleetsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'Fleet' update operation succeeded */
export interface FleetsCreate200Response extends HttpResponse {
  status: "200";
  body: FleetOutput;
}

export interface FleetsCreate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'Fleet' create operation succeeded */
export interface FleetsCreate201Response extends HttpResponse {
  status: "201";
  body: FleetOutput;
  headers: RawHttpHeaders & FleetsCreate201Headers;
}

export interface FleetsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running create operation */
export interface FleetsCreateLogicalResponse extends HttpResponse {
  status: "200";
  body: FleetOutput;
}

/** Azure operation completed successfully. */
export interface FleetsUpdateAsync200Response extends HttpResponse {
  status: "200";
  body: FleetOutput;
}

export interface FleetsUpdateAsync202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface FleetsUpdateAsync202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & FleetsUpdateAsync202Headers;
}

export interface FleetsUpdateAsyncDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running updateAsync operation */
export interface FleetsUpdateAsyncLogicalResponse extends HttpResponse {
  status: "200";
  body: FleetOutput;
}

/** Resource deleted successfully. */
export interface FleetsDelete200Response extends HttpResponse {
  status: "200";
}

export interface FleetsDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface FleetsDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & FleetsDelete202Headers;
}

/** Resource does not exist. */
export interface FleetsDelete204Response extends HttpResponse {
  status: "204";
}

export interface FleetsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface FleetsDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface FleetsListByResourceGroup200Response extends HttpResponse {
  status: "200";
  body: FleetListResultOutput;
}

export interface FleetsListByResourceGroupDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface FleetsListBySubscription200Response extends HttpResponse {
  status: "200";
  body: FleetListResultOutput;
}

export interface FleetsListBySubscriptionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface FleetsListCredentials200Response extends HttpResponse {
  status: "200";
  body: FleetCredentialResultsOutput;
}

export interface FleetsListCredentialsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface FleetMembersGet200Response extends HttpResponse {
  status: "200";
  body: FleetMemberOutput;
}

export interface FleetMembersGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'FleetMember' update operation succeeded */
export interface FleetMembersCreate200Response extends HttpResponse {
  status: "200";
  body: FleetMemberOutput;
}

export interface FleetMembersCreate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'FleetMember' create operation succeeded */
export interface FleetMembersCreate201Response extends HttpResponse {
  status: "201";
  body: FleetMemberOutput;
  headers: RawHttpHeaders & FleetMembersCreate201Headers;
}

export interface FleetMembersCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running create operation */
export interface FleetMembersCreateLogicalResponse extends HttpResponse {
  status: "200";
  body: FleetMemberOutput;
}

/** Azure operation completed successfully. */
export interface FleetMembersUpdateAsync200Response extends HttpResponse {
  status: "200";
  body: FleetMemberOutput;
}

export interface FleetMembersUpdateAsync202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface FleetMembersUpdateAsync202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & FleetMembersUpdateAsync202Headers;
}

export interface FleetMembersUpdateAsyncDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running updateAsync operation */
export interface FleetMembersUpdateAsyncLogicalResponse extends HttpResponse {
  status: "200";
  body: FleetMemberOutput;
}

/** Resource deleted successfully. */
export interface FleetMembersDelete200Response extends HttpResponse {
  status: "200";
}

export interface FleetMembersDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface FleetMembersDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & FleetMembersDelete202Headers;
}

/** Resource does not exist. */
export interface FleetMembersDelete204Response extends HttpResponse {
  status: "204";
}

export interface FleetMembersDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface FleetMembersDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface FleetMembersListByFleet200Response extends HttpResponse {
  status: "200";
  body: FleetMemberListResultOutput;
}

export interface FleetMembersListByFleetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface UpdateRunsGet200Response extends HttpResponse {
  status: "200";
  body: UpdateRunOutput;
}

export interface UpdateRunsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'UpdateRun' update operation succeeded */
export interface UpdateRunsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: UpdateRunOutput;
}

export interface UpdateRunsCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'UpdateRun' create operation succeeded */
export interface UpdateRunsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: UpdateRunOutput;
  headers: RawHttpHeaders & UpdateRunsCreateOrUpdate201Headers;
}

export interface UpdateRunsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface UpdateRunsCreateOrUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: UpdateRunOutput;
}

/** Resource deleted successfully. */
export interface UpdateRunsDelete200Response extends HttpResponse {
  status: "200";
}

export interface UpdateRunsDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface UpdateRunsDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & UpdateRunsDelete202Headers;
}

/** Resource does not exist. */
export interface UpdateRunsDelete204Response extends HttpResponse {
  status: "204";
}

export interface UpdateRunsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface UpdateRunsDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface UpdateRunsListByFleet200Response extends HttpResponse {
  status: "200";
  body: UpdateRunListResultOutput;
}

export interface UpdateRunsListByFleetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface UpdateRunsStart200Response extends HttpResponse {
  status: "200";
  body: UpdateRunOutput;
}

export interface UpdateRunsStart202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface UpdateRunsStart202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & UpdateRunsStart202Headers;
}

export interface UpdateRunsStartDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running start operation */
export interface UpdateRunsStartLogicalResponse extends HttpResponse {
  status: "200";
  body: UpdateRunOutput;
}

/** Azure operation completed successfully. */
export interface UpdateRunsStop200Response extends HttpResponse {
  status: "200";
  body: UpdateRunOutput;
}

export interface UpdateRunsStop202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface UpdateRunsStop202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & UpdateRunsStop202Headers;
}

export interface UpdateRunsStopDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running stop operation */
export interface UpdateRunsStopLogicalResponse extends HttpResponse {
  status: "200";
  body: UpdateRunOutput;
}

/** Azure operation completed successfully. */
export interface UpdateRunsSkip200Response extends HttpResponse {
  status: "200";
  body: UpdateRunOutput;
}

export interface UpdateRunsSkip202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface UpdateRunsSkip202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & UpdateRunsSkip202Headers;
}

export interface UpdateRunsSkipDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running skip operation */
export interface UpdateRunsSkipLogicalResponse extends HttpResponse {
  status: "200";
  body: UpdateRunOutput;
}

/** Azure operation completed successfully. */
export interface FleetUpdateStrategiesGet200Response extends HttpResponse {
  status: "200";
  body: FleetUpdateStrategyOutput;
}

export interface FleetUpdateStrategiesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'FleetUpdateStrategy' update operation succeeded */
export interface FleetUpdateStrategiesCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: FleetUpdateStrategyOutput;
}

export interface FleetUpdateStrategiesCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'FleetUpdateStrategy' create operation succeeded */
export interface FleetUpdateStrategiesCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: FleetUpdateStrategyOutput;
  headers: RawHttpHeaders & FleetUpdateStrategiesCreateOrUpdate201Headers;
}

export interface FleetUpdateStrategiesCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface FleetUpdateStrategiesCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: FleetUpdateStrategyOutput;
}

/** Resource deleted successfully. */
export interface FleetUpdateStrategiesDelete200Response extends HttpResponse {
  status: "200";
}

export interface FleetUpdateStrategiesDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface FleetUpdateStrategiesDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & FleetUpdateStrategiesDelete202Headers;
}

/** Resource does not exist. */
export interface FleetUpdateStrategiesDelete204Response extends HttpResponse {
  status: "204";
}

export interface FleetUpdateStrategiesDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface FleetUpdateStrategiesDeleteLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface FleetUpdateStrategiesListByFleet200Response
  extends HttpResponse {
  status: "200";
  body: FleetUpdateStrategyListResultOutput;
}

export interface FleetUpdateStrategiesListByFleetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
