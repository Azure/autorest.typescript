// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createJobs, JobsContext, JobsOptionalParams } from "./api/index.js";
import {
  BatchJob,
  BatchJobUpdateOptions,
  BatchJobDisableOptions,
  BatchJobCreateOptions,
  JobPreparationAndReleaseTaskExecutionInformation,
  TaskCountsResult,
} from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import {
  getJobTaskCounts,
  listJobPreparationAndReleaseTaskStatus,
  listJobsFromSchedule,
  listJobs,
  createJob,
  terminateJob,
  enableJob,
  disableJob,
  replaceJob,
  updateJob,
  getJob,
  deleteJob,
} from "./api/operations.js";
import {
  GetJobTaskCountsOptionalParams,
  ListJobPreparationAndReleaseTaskStatusOptionalParams,
  ListJobsFromScheduleOptionalParams,
  ListJobsOptionalParams,
  CreateJobOptionalParams,
  TerminateJobOptionalParams,
  EnableJobOptionalParams,
  DisableJobOptionalParams,
  ReplaceJobOptionalParams,
  UpdateJobOptionalParams,
  GetJobOptionalParams,
  DeleteJobOptionalParams,
} from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { JobsOptionalParams } from "./api/jobsContext.js";

export class Jobs {
  private _client: JobsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: JobsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createJobs(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /**
   * Task counts provide a count of the Tasks by active, running or completed Task
   * state, and a count of Tasks which succeeded or failed. Tasks in the preparing
   * state are counted as running. Note that the numbers returned may not always be
   * up to date. If you need exact task counts, use a list query.
   */
  getJobTaskCounts(
    jobId: string,
    options: GetJobTaskCountsOptionalParams = { requestOptions: {} },
  ): Promise<TaskCountsResult> {
    return getJobTaskCounts(this._client, jobId, options);
  }

  /**
   * This API returns the Job Preparation and Job Release Task status on all Compute
   * Nodes that have run the Job Preparation or Job Release Task. This includes
   * Compute Nodes which have since been removed from the Pool. If this API is
   * invoked on a Job which has no Job Preparation or Job Release Task, the Batch
   * service returns HTTP status code 409 (Conflict) with an error code of
   * JobPreparationTaskNotSpecified.
   */
  listJobPreparationAndReleaseTaskStatus(
    jobId: string,
    options: ListJobPreparationAndReleaseTaskStatusOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<JobPreparationAndReleaseTaskExecutionInformation> {
    return listJobPreparationAndReleaseTaskStatus(this._client, jobId, options);
  }

  /** Lists the Jobs that have been created under the specified Job Schedule. */
  listJobsFromSchedule(
    jobScheduleId: string,
    options: ListJobsFromScheduleOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchJob> {
    return listJobsFromSchedule(this._client, jobScheduleId, options);
  }

  /** Lists all of the Jobs in the specified Account. */
  listJobs(
    options: ListJobsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchJob> {
    return listJobs(this._client, options);
  }

  /**
   * The Batch service supports two ways to control the work done as part of a Job.
   * In the first approach, the user specifies a Job Manager Task. The Batch service
   * launches this Task when it is ready to start the Job. The Job Manager Task
   * controls all other Tasks that run under this Job, by using the Task APIs. In
   * the second approach, the user directly controls the execution of Tasks under an
   * active Job, by using the Task APIs. Also note: when naming Jobs, avoid
   * including sensitive information such as user names or secret project names.
   * This information may appear in telemetry logs accessible to Microsoft Support
   * engineers.
   */
  createJob(
    body: BatchJobCreateOptions,
    options: CreateJobOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return createJob(this._client, body, options);
  }

  /**
   * When a Terminate Job request is received, the Batch service sets the Job to the
   * terminating state. The Batch service then terminates any running Tasks
   * associated with the Job and runs any required Job release Tasks. Then the Job
   * moves into the completed state. If there are any Tasks in the Job in the active
   * state, they will remain in the active state. Once a Job is terminated, new
   * Tasks cannot be added and any remaining active Tasks will not be scheduled.
   */
  terminateJob(
    jobId: string,
    options: TerminateJobOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return terminateJob(this._client, jobId, options);
  }

  /**
   * When you call this API, the Batch service sets a disabled Job to the enabling
   * state. After the this operation is completed, the Job moves to the active
   * state, and scheduling of new Tasks under the Job resumes. The Batch service
   * does not allow a Task to remain in the active state for more than 180 days.
   * Therefore, if you enable a Job containing active Tasks which were added more
   * than 180 days ago, those Tasks will not run.
   */
  enableJob(
    jobId: string,
    options: EnableJobOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return enableJob(this._client, jobId, options);
  }

  /**
   * The Batch Service immediately moves the Job to the disabling state. Batch then
   * uses the disableTasks parameter to determine what to do with the currently
   * running Tasks of the Job. The Job remains in the disabling state until the
   * disable operation is completed and all Tasks have been dealt with according to
   * the disableTasks option; the Job then moves to the disabled state. No new Tasks
   * are started under the Job until it moves back to active state. If you try to
   * disable a Job that is in any state other than active, disabling, or disabled,
   * the request fails with status code 409.
   */
  disableJob(
    jobId: string,
    body: BatchJobDisableOptions,
    options: DisableJobOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return disableJob(this._client, jobId, body, options);
  }

  /**
   * This fully replaces all the updatable properties of the Job. For example, if
   * the Job has constraints associated with it and if constraints is not specified
   * with this request, then the Batch service will remove the existing constraints.
   */
  replaceJob(
    jobId: string,
    body: BatchJob,
    options: ReplaceJobOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return replaceJob(this._client, jobId, body, options);
  }

  /**
   * This replaces only the Job properties specified in the request. For example, if
   * the Job has constraints, and a request does not specify the constraints
   * element, then the Job keeps the existing constraints.
   */
  updateJob(
    jobId: string,
    body: BatchJobUpdateOptions,
    options: UpdateJobOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return updateJob(this._client, jobId, body, options);
  }

  /** Gets information about the specified Job. */
  getJob(jobId: string, options: GetJobOptionalParams = { requestOptions: {} }): Promise<BatchJob> {
    return getJob(this._client, jobId, options);
  }

  /**
   * Deleting a Job also deletes all Tasks that are part of that Job, and all Job
   * statistics. This also overrides the retention period for Task data; that is, if
   * the Job contains Tasks which are still retained on Compute Nodes, the Batch
   * services deletes those Tasks' working directories and all their contents.  When
   * a Delete Job request is received, the Batch service sets the Job to the
   * deleting state. All update operations on a Job that is in deleting state will
   * fail with status code 409 (Conflict), with additional information indicating
   * that the Job is being deleted.
   */
  deleteJob(
    jobId: string,
    options: DeleteJobOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteJob(this._client, jobId, options);
  }
}
