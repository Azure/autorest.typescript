// Licensed under the MIT License.

import { OpenAIContext } from "../../../api/openAIContext.js";
import {
  create,
  list,
  retrieve,
  listEvents,
  cancel,
} from "../../../api/fineTuning/jobs/index.js";
import {
  CreateFineTuningJobRequest,
  FineTuningJob,
  ListPaginatedFineTuningJobsResponse,
  ListFineTuningJobEventsResponse,
} from "../../../models/models.js";
import {
  FineTuningJobsCreateOptionalParams,
  FineTuningJobsListOptionalParams,
  FineTuningJobsRetrieveOptionalParams,
  FineTuningJobsListEventsOptionalParams,
  FineTuningJobsCancelOptionalParams,
} from "../../../api/options.js";

/** Interface representing a FineTuningJobs operations. */
export interface FineTuningJobsOperations {
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
): FineTuningJobsOperations {
  return {
    ...getFineTuningJobs(context),
  };
}
