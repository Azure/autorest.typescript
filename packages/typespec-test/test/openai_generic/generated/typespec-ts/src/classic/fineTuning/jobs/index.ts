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
  FineTuningJobsCreateOptionalParams,
  FineTuningJobsListOptionalParams,
  FineTuningJobsRetrieveOptionalParams,
  FineTuningJobsListEventsOptionalParams,
  FineTuningJobsCancelOptionalParams,
} from "../../../models/options.js";

export interface FineTuningJobs {
  create: (
    job: CreateFineTuningJobRequest,
    options?: FineTuningJobsCreateOptionalParams,
  ) => Promise<FineTuningJob>;
  list: (
    options?: FineTuningJobsListOptionalParams,
  ) => Promise<ListPaginatedFineTuningJobsResponse>;
  retrieve: (
    fineTuningJobId: string,
    options?: FineTuningJobsRetrieveOptionalParams,
  ) => Promise<FineTuningJob>;
  listEvents: (
    fineTuningJobId: string,
    options?: FineTuningJobsListEventsOptionalParams,
  ) => Promise<ListFineTuningJobEventsResponse>;
  cancel: (
    fineTuningJobId: string,
    options?: FineTuningJobsCancelOptionalParams,
  ) => Promise<FineTuningJob>;
}

export function getFineTuningJobs(context: OpenAIContext) {
  return {
    create: (
      job: CreateFineTuningJobRequest,
      options?: FineTuningJobsCreateOptionalParams,
    ) => create(context, job, options),
    list: (options?: FineTuningJobsListOptionalParams) =>
      list(context, options),
    retrieve: (
      fineTuningJobId: string,
      options?: FineTuningJobsRetrieveOptionalParams,
    ) => retrieve(context, fineTuningJobId, options),
    listEvents: (
      fineTuningJobId: string,
      options?: FineTuningJobsListEventsOptionalParams,
    ) => listEvents(context, fineTuningJobId, options),
    cancel: (
      fineTuningJobId: string,
      options?: FineTuningJobsCancelOptionalParams,
    ) => cancel(context, fineTuningJobId, options),
  };
}

export function getFineTuningJobsOperations(
  context: OpenAIContext,
): FineTuningJobs {
  return {
    ...getFineTuningJobs(context),
  };
}
