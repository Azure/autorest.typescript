// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  fineTuningJobsCreate,
  fineTuningJobsList,
  fineTuningJobsRetrieve,
  fineTuningJobsListEvents,
  fineTuningJobsCancel,
} from "../../../api/fineTuning/jobs/index.js";
import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  CreateFineTuningJobRequest,
  FineTuningJob,
  ListPaginatedFineTuningJobsResponse,
  ListFineTuningJobEventsResponse,
} from "../../../models/models.js";
import {
  FineTuningJobsCreateOptions,
  FineTuningJobsListOptions,
  FineTuningJobsRetrieveOptions,
  FineTuningJobsListEventsOptions,
  FineTuningJobsCancelOptions,
} from "../../../models/options.js";

export interface FineTuningJobsOperations {
  jobs: {
    create: (
      job: CreateFineTuningJobRequest,
      options?: FineTuningJobsCreateOptions
    ) => Promise<FineTuningJob>;
    list: (
      options?: FineTuningJobsListOptions
    ) => Promise<ListPaginatedFineTuningJobsResponse>;
    retrieve: (
      fineTuningJobId: string,
      options?: FineTuningJobsRetrieveOptions
    ) => Promise<FineTuningJob>;
    listEvents: (
      fineTuningJobId: string,
      options?: FineTuningJobsListEventsOptions
    ) => Promise<ListFineTuningJobEventsResponse>;
    cancel: (
      fineTuningJobId: string,
      options?: FineTuningJobsCancelOptions
    ) => Promise<FineTuningJob>;
  };
}

export function getFineTuningJobs(context: OpenAIContext) {
  return {
    create: (
      job: CreateFineTuningJobRequest,
      options?: FineTuningJobsCreateOptions
    ) => fineTuningJobsCreate(context, job, options),
    list: (options?: FineTuningJobsListOptions) =>
      fineTuningJobsList(context, options),
    retrieve: (
      fineTuningJobId: string,
      options?: FineTuningJobsRetrieveOptions
    ) => fineTuningJobsRetrieve(context, fineTuningJobId, options),
    listEvents: (
      fineTuningJobId: string,
      options?: FineTuningJobsListEventsOptions
    ) => fineTuningJobsListEvents(context, fineTuningJobId, options),
    cancel: (fineTuningJobId: string, options?: FineTuningJobsCancelOptions) =>
      fineTuningJobsCancel(context, fineTuningJobId, options),
  };
}

export function getFineTuningJobsOperations(
  context: OpenAIContext
): FineTuningJobsOperations {
  return {
    jobs: getFineTuningJobs(context),
  };
}
