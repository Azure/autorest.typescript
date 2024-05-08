// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  Fleet,
  FleetPatch,
  FleetMember,
  FleetMemberUpdate,
  UpdateRun,
  SkipProperties,
  FleetUpdateStrategy,
} from "./models.js";

export type OperationsListParameters = RequestParameters;
export type FleetsGetParameters = RequestParameters;

export interface FleetsCreateHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
}

export interface FleetsCreateBodyParam {
  /** Resource create parameters. */
  body: Fleet;
}

export interface FleetsCreateHeaderParam {
  headers?: RawHttpHeadersInput & FleetsCreateHeaders;
}

export type FleetsCreateParameters = FleetsCreateHeaderParam &
  FleetsCreateBodyParam &
  RequestParameters;

export interface FleetsUpdateAsyncHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
}

export interface FleetsUpdateAsyncBodyParam {
  /** The resource properties to be updated. */
  body: FleetPatch;
}

export interface FleetsUpdateAsyncHeaderParam {
  headers?: RawHttpHeadersInput & FleetsUpdateAsyncHeaders;
}

export type FleetsUpdateAsyncParameters = FleetsUpdateAsyncHeaderParam &
  FleetsUpdateAsyncBodyParam &
  RequestParameters;

export interface FleetsDeleteHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
}

export interface FleetsDeleteHeaderParam {
  headers?: RawHttpHeadersInput & FleetsDeleteHeaders;
}

export type FleetsDeleteParameters = FleetsDeleteHeaderParam &
  RequestParameters;
export type FleetsListByResourceGroupParameters = RequestParameters;
export type FleetsListBySubscriptionParameters = RequestParameters;

export interface FleetsListCredentialsBodyParam {
  /** The content of the action request */
  body: void;
}

export type FleetsListCredentialsParameters = FleetsListCredentialsBodyParam &
  RequestParameters;
export type FleetMembersGetParameters = RequestParameters;

export interface FleetMembersCreateHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
}

export interface FleetMembersCreateBodyParam {
  /** Resource create parameters. */
  body: FleetMember;
}

export interface FleetMembersCreateHeaderParam {
  headers?: RawHttpHeadersInput & FleetMembersCreateHeaders;
}

export type FleetMembersCreateParameters = FleetMembersCreateHeaderParam &
  FleetMembersCreateBodyParam &
  RequestParameters;

export interface FleetMembersUpdateAsyncHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
}

export interface FleetMembersUpdateAsyncBodyParam {
  /** The resource properties to be updated. */
  body: FleetMemberUpdate;
}

export interface FleetMembersUpdateAsyncHeaderParam {
  headers?: RawHttpHeadersInput & FleetMembersUpdateAsyncHeaders;
}

export type FleetMembersUpdateAsyncParameters =
  FleetMembersUpdateAsyncHeaderParam &
    FleetMembersUpdateAsyncBodyParam &
    RequestParameters;

export interface FleetMembersDeleteHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
}

export interface FleetMembersDeleteHeaderParam {
  headers?: RawHttpHeadersInput & FleetMembersDeleteHeaders;
}

export type FleetMembersDeleteParameters = FleetMembersDeleteHeaderParam &
  RequestParameters;
export type FleetMembersListByFleetParameters = RequestParameters;
export type UpdateRunsGetParameters = RequestParameters;

export interface UpdateRunsCreateOrUpdateHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
}

export interface UpdateRunsCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: UpdateRun;
}

export interface UpdateRunsCreateOrUpdateHeaderParam {
  headers?: RawHttpHeadersInput & UpdateRunsCreateOrUpdateHeaders;
}

export type UpdateRunsCreateOrUpdateParameters =
  UpdateRunsCreateOrUpdateHeaderParam &
    UpdateRunsCreateOrUpdateBodyParam &
    RequestParameters;

export interface UpdateRunsDeleteHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
}

export interface UpdateRunsDeleteHeaderParam {
  headers?: RawHttpHeadersInput & UpdateRunsDeleteHeaders;
}

export type UpdateRunsDeleteParameters = UpdateRunsDeleteHeaderParam &
  RequestParameters;
export type UpdateRunsListByFleetParameters = RequestParameters;

export interface UpdateRunsStartHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
}

export interface UpdateRunsStartBodyParam {
  /** The content of the action request */
  body: void;
}

export interface UpdateRunsStartHeaderParam {
  headers?: RawHttpHeadersInput & UpdateRunsStartHeaders;
}

export type UpdateRunsStartParameters = UpdateRunsStartHeaderParam &
  UpdateRunsStartBodyParam &
  RequestParameters;

export interface UpdateRunsStopHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
}

export interface UpdateRunsStopBodyParam {
  /** The content of the action request */
  body: void;
}

export interface UpdateRunsStopHeaderParam {
  headers?: RawHttpHeadersInput & UpdateRunsStopHeaders;
}

export type UpdateRunsStopParameters = UpdateRunsStopHeaderParam &
  UpdateRunsStopBodyParam &
  RequestParameters;

export interface UpdateRunsSkipHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
}

export interface UpdateRunsSkipBodyParam {
  /** The content of the action request */
  body: SkipProperties;
}

export interface UpdateRunsSkipHeaderParam {
  headers?: RawHttpHeadersInput & UpdateRunsSkipHeaders;
}

export type UpdateRunsSkipParameters = UpdateRunsSkipHeaderParam &
  UpdateRunsSkipBodyParam &
  RequestParameters;
export type FleetUpdateStrategiesGetParameters = RequestParameters;

export interface FleetUpdateStrategiesCreateOrUpdateHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
}

export interface FleetUpdateStrategiesCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: FleetUpdateStrategy;
}

export interface FleetUpdateStrategiesCreateOrUpdateHeaderParam {
  headers?: RawHttpHeadersInput & FleetUpdateStrategiesCreateOrUpdateHeaders;
}

export type FleetUpdateStrategiesCreateOrUpdateParameters =
  FleetUpdateStrategiesCreateOrUpdateHeaderParam &
    FleetUpdateStrategiesCreateOrUpdateBodyParam &
    RequestParameters;

export interface FleetUpdateStrategiesDeleteHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
}

export interface FleetUpdateStrategiesDeleteHeaderParam {
  headers?: RawHttpHeadersInput & FleetUpdateStrategiesDeleteHeaders;
}

export type FleetUpdateStrategiesDeleteParameters =
  FleetUpdateStrategiesDeleteHeaderParam & RequestParameters;
export type FleetUpdateStrategiesListByFleetParameters = RequestParameters;
