// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "@azure-rest/core-client";
import {
  createFineTuningJob,
  listPaginatedFineTuningJobs,
  retrieveFineTuningJob,
  listFineTuningEvents,
  cancelFineTuningJob,
} from "../../../api/fineTuning/jobs";
import {
  CreateFineTuningJobRequest,
  CreateFineTuningJobOptions,
  FineTuningJob,
  ListPaginatedFineTuningJobsOptions,
  ListPaginatedFineTuningJobsResponse,
  RetrieveFineTuningJobOptions,
  ListFineTuningEventsOptions,
  ListFineTuningJobEventsResponse,
  CancelFineTuningJobOptions,
} from "../../../models";

export interface FineTuningJobsOperations {
  jobs: {
    createFineTuningJob: (
      job: CreateFineTuningJobRequest,
      options?: CreateFineTuningJobOptions
    ) => Promise<FineTuningJob>;
    listPaginatedFineTuningJobs: (
      options?: ListPaginatedFineTuningJobsOptions
    ) => Promise<ListPaginatedFineTuningJobsResponse>;
    retrieveFineTuningJob: (
      fineTuningJobId: string,
      options?: RetrieveFineTuningJobOptions
    ) => Promise<FineTuningJob>;
    listFineTuningEvents: (
      fineTuningJobId: string,
      options?: ListFineTuningEventsOptions
    ) => Promise<ListFineTuningJobEventsResponse>;
    cancelFineTuningJob: (
      fineTuningJobId: string,
      options?: CancelFineTuningJobOptions
    ) => Promise<FineTuningJob>;
  };
}

export function getFineTuningJobs(context: Client) {
  return {
    createFineTuningJob: (
      job: CreateFineTuningJobRequest,
      options?: CreateFineTuningJobOptions
    ) => createFineTuningJob(context, job, options),
    listPaginatedFineTuningJobs: (
      options?: ListPaginatedFineTuningJobsOptions
    ) => listPaginatedFineTuningJobs(context, options),
    retrieveFineTuningJob: (
      fineTuningJobId: string,
      options?: RetrieveFineTuningJobOptions
    ) => retrieveFineTuningJob(context, fineTuningJobId, options),
    listFineTuningEvents: (
      fineTuningJobId: string,
      options?: ListFineTuningEventsOptions
    ) => listFineTuningEvents(context, fineTuningJobId, options),
    cancelFineTuningJob: (
      fineTuningJobId: string,
      options?: CancelFineTuningJobOptions
    ) => cancelFineTuningJob(context, fineTuningJobId, options),
  };
}

export function getFineTuningJobsOperations(): FineTuningJobsOperations {
  return {
    jobs: getFineTuningJobs,
  };
}
