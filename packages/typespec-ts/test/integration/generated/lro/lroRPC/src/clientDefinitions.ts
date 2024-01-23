// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GetJobParameters, CreateJobParameters } from "./parameters";
import {
  GetJob200Response,
  GetJobDefaultResponse,
  CreateJob202Response,
  CreateJobDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetJob {
  /** Poll a Job */
  get(
    options?: GetJobParameters,
  ): StreamableMethod<GetJob200Response | GetJobDefaultResponse>;
}

export interface CreateJob {
  /** Creates a Job */
  post(
    options?: CreateJobParameters,
  ): StreamableMethod<CreateJob202Response | CreateJobDefaultResponse>;
}

export interface Routes {
  /** Resource for '/azure/core/lro/rpc/legacy/create-resource-poll-via-operation-location/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/azure/core/lro/rpc/legacy/create-resource-poll-via-operation-location/jobs/{jobId}",
    jobId: string,
  ): GetJob;
  /** Resource for '/azure/core/lro/rpc/legacy/create-resource-poll-via-operation-location/jobs' has methods for the following verbs: post */
  (
    path: "/azure/core/lro/rpc/legacy/create-resource-poll-via-operation-location/jobs",
  ): CreateJob;
}

export type LegacyClient = Client & {
  path: Routes;
};
