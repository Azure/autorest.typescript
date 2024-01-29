// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  TrialMatcherGetJobParameters,
  TrialMatcherCreateJobParameters,
} from "./parameters.js";
import {
  TrialMatcherGetJob200Response,
  TrialMatcherGetJobDefaultResponse,
  TrialMatcherCreateJob200Response,
  TrialMatcherCreateJob202Response,
  TrialMatcherCreateJobDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetJob {
  /** Gets the status and details of the Trial Matcher job. */
  get(
    options?: TrialMatcherGetJobParameters,
  ): StreamableMethod<
    TrialMatcherGetJob200Response | TrialMatcherGetJobDefaultResponse
  >;
}

export interface CreateJob {
  /** Creates a Trial Matcher job with the given request body. */
  post(
    options?: TrialMatcherCreateJobParameters,
  ): StreamableMethod<
    | TrialMatcherCreateJob200Response
    | TrialMatcherCreateJob202Response
    | TrialMatcherCreateJobDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/trialmatcher/jobs/\{jobId\}' has methods for the following verbs: get */
  (path: "/trialmatcher/jobs/{jobId}", jobId: string): GetJob;
  /** Resource for '/trialmatcher/jobs' has methods for the following verbs: post */
  (path: "/trialmatcher/jobs"): CreateJob;
}

export type AzureHealthInsightsContext = Client & {
  path: Routes;
};
