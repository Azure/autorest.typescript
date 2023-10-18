// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CreateJobParameters } from "./parameters";
import {
  CreateJob200Response,
  CreateJob202Response,
  CreateJobDefaultResponse,
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

export interface Routes {
  /** Resource for '/azure/core/lro/rpc/legacy/create-resource-poll-via-operation-location/jobs' has methods for the following verbs: post */
  (
    path: "/azure/core/lro/rpc/legacy/create-resource-poll-via-operation-location/jobs"
  ): CreateJob;
}

export type LegacyClient = Client & {
  path: Routes;
};
