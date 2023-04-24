// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateJobParameters,
  GetJobParameters,
  CreateJobFinalOnLocationParameters,
  GetPollParameters,
} from "./parameters";
import {
  CreateJob200Response,
  CreateJob202Response,
  CreateJobDefaultResponse,
  GetJob200Response,
  GetJobDefaultResponse,
  CreateJobFinalOnLocation200Response,
  CreateJobFinalOnLocation202Response,
  CreateJobFinalOnLocationDefaultResponse,
  GetPoll200Response,
  GetPollDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CreateJob {
  /** Creates a Job */
  post(
    options?: CreateJobParameters
  ): StreamableMethod<
    CreateJob200Response | CreateJob202Response | CreateJobDefaultResponse
  >;
}

export interface GetJob {
  /** Gets the status of a Job */
  get(
    options?: GetJobParameters
  ): StreamableMethod<GetJob200Response | GetJobDefaultResponse>;
}

export interface CreateJobFinalOnLocation {
  /** Creates a Job */
  post(
    options?: CreateJobFinalOnLocationParameters
  ): StreamableMethod<
    | CreateJobFinalOnLocation200Response
    | CreateJobFinalOnLocation202Response
    | CreateJobFinalOnLocationDefaultResponse
  >;
}

export interface GetPoll {
  /** Gets the status of a Job */
  get(
    options?: GetPollParameters
  ): StreamableMethod<GetPoll200Response | GetPollDefaultResponse>;
}

export interface Routes {
  /** Resource for '/azure/core/lro/rpc/same-poll-result/jobs' has methods for the following verbs: post */
  (path: "/azure/core/lro/rpc/same-poll-result/jobs"): CreateJob;
  /** Resource for '/azure/core/lro/rpc/same-poll-result/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/azure/core/lro/rpc/same-poll-result/jobs/{jobId}",
    jobId: string
  ): GetJob;
  /** Resource for '/azure/core/lro/rpc/different-poll-result/jobs' has methods for the following verbs: post */
  (
    path: "/azure/core/lro/rpc/different-poll-result/jobs"
  ): CreateJobFinalOnLocation;
  /** Resource for '/azure/core/lro/rpc/different-poll-result/jobs/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/azure/core/lro/rpc/different-poll-result/jobs/operations/{operationId}",
    operationId: string
  ): GetPoll;
}

export type SpecsAzureCoreLroRpcClient = Client & {
  path: Routes;
};
