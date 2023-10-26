// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  create,
  list,
  retrieve,
  listEvents,
  cancel,
  CreateOptions,
  ListOptions,
  RetrieveOptions,
  ListEventsOptions,
  CancelOptions,
} from "../../../api/fineTuning/jobs/index.js";
import {
  CreateFineTuningJobRequest,
  FineTuningJob,
  ListPaginatedFineTuningJobsResponse,
  ListFineTuningJobEventsResponse,
} from "../../../models/models.js";

export interface FineTuningJobsOperations {
  jobs: {
    create: (
      job: CreateFineTuningJobRequest,
      options?: CreateOptions
    ) => Promise<FineTuningJob>;
    list: (
      options?: ListOptions
    ) => Promise<ListPaginatedFineTuningJobsResponse>;
    retrieve: (
      fineTuningJobId: string,
      options?: RetrieveOptions
    ) => Promise<FineTuningJob>;
    listEvents: (
      fineTuningJobId: string,
      options?: ListEventsOptions
    ) => Promise<ListFineTuningJobEventsResponse>;
    cancel: (
      fineTuningJobId: string,
      options?: CancelOptions
    ) => Promise<FineTuningJob>;
  };
}

export function getFineTuningJobs(context: OpenAIContext) {
  return {
    create: (job: CreateFineTuningJobRequest, options?: CreateOptions) =>
      create(context, job, options),
    list: (options?: ListOptions) => list(context, options),
    retrieve: (fineTuningJobId: string, options?: RetrieveOptions) =>
      retrieve(context, fineTuningJobId, options),
    listEvents: (fineTuningJobId: string, options?: ListEventsOptions) =>
      listEvents(context, fineTuningJobId, options),
    cancel: (fineTuningJobId: string, options?: CancelOptions) =>
      cancel(context, fineTuningJobId, options),
  };
}

export function getFineTuningJobsOperations(
  context: OpenAIContext
): FineTuningJobsOperations {
  return {
    jobs: getFineTuningJobs(context),
  };
}
