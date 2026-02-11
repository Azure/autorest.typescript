// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createJobSchedules,
  JobSchedulesContext,
  JobSchedulesOptionalParams,
} from "./api/index.js";
import {
  BatchJobSchedule,
  BatchJobScheduleUpdateOptions,
  BatchJobScheduleCreateOptions,
} from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import {
  listJobSchedules,
  createJobSchedule,
  terminateJobSchedule,
  enableJobSchedule,
  disableJobSchedule,
  replaceJobSchedule,
  updateJobSchedule,
  getJobSchedule,
  deleteJobSchedule,
  jobScheduleExists,
} from "./api/operations.js";
import {
  ListJobSchedulesOptionalParams,
  CreateJobScheduleOptionalParams,
  TerminateJobScheduleOptionalParams,
  EnableJobScheduleOptionalParams,
  DisableJobScheduleOptionalParams,
  ReplaceJobScheduleOptionalParams,
  UpdateJobScheduleOptionalParams,
  GetJobScheduleOptionalParams,
  DeleteJobScheduleOptionalParams,
  JobScheduleExistsOptionalParams,
} from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { JobSchedulesOptionalParams } from "./api/jobSchedulesContext.js";

export class JobSchedules {
  private _client: JobSchedulesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: JobSchedulesOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createJobSchedules(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Lists all of the Job Schedules in the specified Account. */
  listJobSchedules(
    options: ListJobSchedulesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<BatchJobSchedule> {
    return listJobSchedules(this._client, options);
  }

  /** Creates a Job Schedule to the specified Account. */
  createJobSchedule(
    body: BatchJobScheduleCreateOptions,
    options: CreateJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return createJobSchedule(this._client, body, options);
  }

  /** Terminates a Job Schedule. */
  terminateJobSchedule(
    jobScheduleId: string,
    options: TerminateJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return terminateJobSchedule(this._client, jobScheduleId, options);
  }

  /** Enables a Job Schedule. */
  enableJobSchedule(
    jobScheduleId: string,
    options: EnableJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return enableJobSchedule(this._client, jobScheduleId, options);
  }

  /** No new Jobs will be created until the Job Schedule is enabled again. */
  disableJobSchedule(
    jobScheduleId: string,
    options: DisableJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return disableJobSchedule(this._client, jobScheduleId, options);
  }

  /**
   * This fully replaces all the updatable properties of the Job Schedule. For
   * example, if the schedule property is not specified with this request, then the
   * Batch service will remove the existing schedule. Changes to a Job Schedule only
   * impact Jobs created by the schedule after the update has taken place; currently
   * running Jobs are unaffected.
   */
  replaceJobSchedule(
    jobScheduleId: string,
    body: BatchJobSchedule,
    options: ReplaceJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return replaceJobSchedule(this._client, jobScheduleId, body, options);
  }

  /**
   * This replaces only the Job Schedule properties specified in the request. For
   * example, if the schedule property is not specified with this request, then the
   * Batch service will keep the existing schedule. Changes to a Job Schedule only
   * impact Jobs created by the schedule after the update has taken place; currently
   * running Jobs are unaffected.
   */
  updateJobSchedule(
    jobScheduleId: string,
    body: BatchJobScheduleUpdateOptions,
    options: UpdateJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return updateJobSchedule(this._client, jobScheduleId, body, options);
  }

  /** Gets information about the specified Job Schedule. */
  getJobSchedule(
    jobScheduleId: string,
    options: GetJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<BatchJobSchedule> {
    return getJobSchedule(this._client, jobScheduleId, options);
  }

  /**
   * When you delete a Job Schedule, this also deletes all Jobs and Tasks under that
   * schedule. When Tasks are deleted, all the files in their working directories on
   * the Compute Nodes are also deleted (the retention period is ignored). The Job
   * Schedule statistics are no longer accessible once the Job Schedule is deleted,
   * though they are still counted towards Account lifetime statistics.
   */
  deleteJobSchedule(
    jobScheduleId: string,
    options: DeleteJobScheduleOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteJobSchedule(this._client, jobScheduleId, options);
  }

  /** Checks the specified Job Schedule exists. */
  jobScheduleExists(
    jobScheduleId: string,
    options: JobScheduleExistsOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return jobScheduleExists(this._client, jobScheduleId, options);
  }
}
