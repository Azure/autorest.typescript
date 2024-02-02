// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../../api/OpenAIContext.js";
import {
  CreateFineTuningJobRequest,
  FineTuningJob,
  ListPaginatedFineTuningJobsResponse,
  ListFineTuningJobEventsResponse,
} from "../../../models/models.js";
import {
  create,
  list,
  retrieve,
  listEvents,
  cancel,
} from "../../../api/fineTuning/jobs/index.js";
import {
  FineTuningJobsCreateOptions,
  FineTuningJobsListOptions,
  FineTuningJobsRetrieveOptions,
  FineTuningJobsListEventsOptions,
  FineTuningJobsCancelOptions,
} from "../../../models/options.js";

export interface FineTuningJobsOperations {
  create: (
    job: CreateFineTuningJobRequest,
    options?: FineTuningJobsCreateOptions,
  ) => Promise<FineTuningJob>;
  list: (
    options?: FineTuningJobsListOptions,
  ) => Promise<ListPaginatedFineTuningJobsResponse>;
  retrieve: (
    fineTuningJobId: string,
    options?: FineTuningJobsRetrieveOptions,
  ) => Promise<FineTuningJob>;
  listEvents: (
    fineTuningJobId: string,
    options?: FineTuningJobsListEventsOptions,
  ) => Promise<ListFineTuningJobEventsResponse>;
  cancel: (
    fineTuningJobId: string,
    options?: FineTuningJobsCancelOptions,
  ) => Promise<FineTuningJob>;
}

export function getFineTuningJobs(context: OpenAIContext) {
  return {
    create: (
      job: CreateFineTuningJobRequest,
      options?: FineTuningJobsCreateOptions,
    ) => create(context, job, options),
    list: (options?: FineTuningJobsListOptions) => list(context, options),
    retrieve: (
      fineTuningJobId: string,
      options?: FineTuningJobsRetrieveOptions,
    ) => retrieve(context, fineTuningJobId, options),
    listEvents: (
      fineTuningJobId: string,
      options?: FineTuningJobsListEventsOptions,
    ) => listEvents(context, fineTuningJobId, options),
    cancel: (fineTuningJobId: string, options?: FineTuningJobsCancelOptions) =>
      cancel(context, fineTuningJobId, options),
  };
}

export function getFineTuningJobsOperations(
  context: OpenAIContext,
): FineTuningJobsOperations {
  return {
    ...getFineTuningJobs(context),
  };
}
