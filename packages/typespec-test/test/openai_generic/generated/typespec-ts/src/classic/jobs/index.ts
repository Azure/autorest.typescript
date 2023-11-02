// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  CreateFineTuningJobRequest,
  FineTuningJob,
  ListPaginatedFineTuningJobsResponse,
  ListFineTuningJobEventsResponse,
} from "../../models/models.js";
import {
  create,
  list,
  retrieve,
  listEvents,
  cancel,
} from "../../api/jobs/index.js";
import {
  JobsCreateOptions,
  JobsListOptions,
  JobsRetrieveOptions,
  JobsListEventsOptions,
  JobsCancelOptions,
} from "../../models/options.js";

export interface JobsOperations {
  create: (
    job: CreateFineTuningJobRequest,
    options?: JobsCreateOptions
  ) => Promise<FineTuningJob>;
  list: (
    options?: JobsListOptions
  ) => Promise<ListPaginatedFineTuningJobsResponse>;
  retrieve: (
    fineTuningJobId: string,
    options?: JobsRetrieveOptions
  ) => Promise<FineTuningJob>;
  listEvents: (
    fineTuningJobId: string,
    options?: JobsListEventsOptions
  ) => Promise<ListFineTuningJobEventsResponse>;
  cancel: (
    fineTuningJobId: string,
    options?: JobsCancelOptions
  ) => Promise<FineTuningJob>;
}

export function getJobs(context: OpenAIContext) {
  return {
    create: (job: CreateFineTuningJobRequest, options?: JobsCreateOptions) =>
      create(context, job, options),
    list: (options?: JobsListOptions) => list(context, options),
    retrieve: (fineTuningJobId: string, options?: JobsRetrieveOptions) =>
      retrieve(context, fineTuningJobId, options),
    listEvents: (fineTuningJobId: string, options?: JobsListEventsOptions) =>
      listEvents(context, fineTuningJobId, options),
    cancel: (fineTuningJobId: string, options?: JobsCancelOptions) =>
      cancel(context, fineTuningJobId, options),
  };
}

export function getJobsOperations(context: OpenAIContext): JobsOperations {
  return {
    ...getJobs(context),
  };
}
