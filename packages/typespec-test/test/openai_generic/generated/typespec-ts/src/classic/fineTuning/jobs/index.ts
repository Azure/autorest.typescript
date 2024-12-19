// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext } from "../../../api/openAIContext.js";
import {
  cancel,
  listEvents,
  retrieve,
  list,
  create,
} from "../../../api/fineTuning/jobs/index.js";
import {
  CreateFineTuningJobRequest,
  FineTuningJob,
  ListPaginatedFineTuningJobsResponse,
  ListFineTuningJobEventsResponse,
} from "../../../models/models.js";
import {
  FineTuningJobsCancelOptionalParams,
  FineTuningJobsListEventsOptionalParams,
  FineTuningJobsRetrieveOptionalParams,
  FineTuningJobsListOptionalParams,
  FineTuningJobsCreateOptionalParams,
} from "../../../api/options.js";

/** Interface representing a FineTuningJobs operations. */
export interface FineTuningJobsOperations {
  cancel: (
    fineTuningJobId: string,
    options?: FineTuningJobsCancelOptionalParams,
  ) => Promise<FineTuningJob>;
  listEvents: (
    fineTuningJobId: string,
    options?: FineTuningJobsListEventsOptionalParams,
  ) => Promise<ListFineTuningJobEventsResponse>;
  retrieve: (
    fineTuningJobId: string,
    options?: FineTuningJobsRetrieveOptionalParams,
  ) => Promise<FineTuningJob>;
  list: (
    options?: FineTuningJobsListOptionalParams,
  ) => Promise<ListPaginatedFineTuningJobsResponse>;
  /**
   * Creates a job that fine-tunes a specified model from a given dataset.
   *
   * Response includes details of the enqueued job including job status and the name of the
   * fine-tuned models once complete.
   *
   * [Learn more about fine-tuning](/docs/guides/fine-tuning)
   */
  create: (
    job: CreateFineTuningJobRequest,
    options?: FineTuningJobsCreateOptionalParams,
  ) => Promise<FineTuningJob>;
}

export function getFineTuningJobs(context: OpenAIContext) {
  return {
    cancel: (
      fineTuningJobId: string,
      options?: FineTuningJobsCancelOptionalParams,
    ) => cancel(context, fineTuningJobId, options),
    listEvents: (
      fineTuningJobId: string,
      options?: FineTuningJobsListEventsOptionalParams,
    ) => listEvents(context, fineTuningJobId, options),
    retrieve: (
      fineTuningJobId: string,
      options?: FineTuningJobsRetrieveOptionalParams,
    ) => retrieve(context, fineTuningJobId, options),
    list: (options?: FineTuningJobsListOptionalParams) =>
      list(context, options),
    create: (
      job: CreateFineTuningJobRequest,
      options?: FineTuningJobsCreateOptionalParams,
    ) => create(context, job, options),
  };
}

export function getFineTuningJobsOperations(
  context: OpenAIContext,
): FineTuningJobsOperations {
  return {
    ...getFineTuningJobs(context),
  };
}
