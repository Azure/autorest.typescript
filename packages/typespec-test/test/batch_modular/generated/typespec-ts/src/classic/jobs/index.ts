// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BatchContext } from "../../api/BatchContext.js";
import {
  BatchJob,
  BatchJobUpdateOptions,
  BatchJobDisableOptions,
  BatchJobTerminateOptions,
  BatchJobCreateOptions,
  JobPreparationAndReleaseTaskExecutionInformation,
  TaskCountsResult,
} from "../../models/models.js";
import {
  deleteJob,
  getJob,
  updateJob,
  replaceJob,
  disableJob,
  enableJob,
  terminateJob,
  createJob,
  listJobs,
  listJobsFromSchedule,
  listJobPreparationAndReleaseTaskStatus,
  getJobTaskCounts,
} from "../../api/jobs/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  JobsDeleteJobOptions,
  JobsGetJobOptions,
  JobsUpdateJobOptions,
  JobsReplaceJobOptions,
  JobsDisableJobOptions,
  JobsEnableJobOptions,
  JobsTerminateJobOptions,
  JobsCreateJobOptions,
  JobsListJobsOptions,
  JobsListJobsFromScheduleOptions,
  JobsListJobPreparationAndReleaseTaskStatusOptions,
  JobsGetJobTaskCountsOptions,
} from "../../models/options.js";

export interface JobsOperations {
  deleteJob: (jobId: string, options?: JobsDeleteJobOptions) => Promise<void>;
  getJob: (jobId: string, options?: JobsGetJobOptions) => Promise<BatchJob>;
  updateJob: (
    jobId: string,
    body: BatchJobUpdateOptions,
    options?: JobsUpdateJobOptions,
  ) => Promise<void>;
  replaceJob: (
    jobId: string,
    body: BatchJob,
    options?: JobsReplaceJobOptions,
  ) => Promise<void>;
  disableJob: (
    jobId: string,
    body: BatchJobDisableOptions,
    options?: JobsDisableJobOptions,
  ) => Promise<void>;
  enableJob: (jobId: string, options?: JobsEnableJobOptions) => Promise<void>;
  terminateJob: (
    jobId: string,
    body: BatchJobTerminateOptions,
    options?: JobsTerminateJobOptions,
  ) => Promise<void>;
  createJob: (
    body: BatchJobCreateOptions,
    options?: JobsCreateJobOptions,
  ) => Promise<void>;
  listJobs: (
    options?: JobsListJobsOptions,
  ) => PagedAsyncIterableIterator<BatchJob>;
  listJobsFromSchedule: (
    jobScheduleId: string,
    options?: JobsListJobsFromScheduleOptions,
  ) => PagedAsyncIterableIterator<BatchJob>;
  listJobPreparationAndReleaseTaskStatus: (
    jobId: string,
    options?: JobsListJobPreparationAndReleaseTaskStatusOptions,
  ) => PagedAsyncIterableIterator<JobPreparationAndReleaseTaskExecutionInformation>;
  getJobTaskCounts: (
    jobId: string,
    options?: JobsGetJobTaskCountsOptions,
  ) => Promise<TaskCountsResult>;
}

export function getJobs(context: BatchContext) {
  return {
    deleteJob: (jobId: string, options?: JobsDeleteJobOptions) =>
      deleteJob(context, jobId, options),
    getJob: (jobId: string, options?: JobsGetJobOptions) =>
      getJob(context, jobId, options),
    updateJob: (
      jobId: string,
      body: BatchJobUpdateOptions,
      options?: JobsUpdateJobOptions,
    ) => updateJob(context, jobId, body, options),
    replaceJob: (
      jobId: string,
      body: BatchJob,
      options?: JobsReplaceJobOptions,
    ) => replaceJob(context, jobId, body, options),
    disableJob: (
      jobId: string,
      body: BatchJobDisableOptions,
      options?: JobsDisableJobOptions,
    ) => disableJob(context, jobId, body, options),
    enableJob: (jobId: string, options?: JobsEnableJobOptions) =>
      enableJob(context, jobId, options),
    terminateJob: (
      jobId: string,
      body: BatchJobTerminateOptions,
      options?: JobsTerminateJobOptions,
    ) => terminateJob(context, jobId, body, options),
    createJob: (body: BatchJobCreateOptions, options?: JobsCreateJobOptions) =>
      createJob(context, body, options),
    listJobs: (options?: JobsListJobsOptions) => listJobs(context, options),
    listJobsFromSchedule: (
      jobScheduleId: string,
      options?: JobsListJobsFromScheduleOptions,
    ) => listJobsFromSchedule(context, jobScheduleId, options),
    listJobPreparationAndReleaseTaskStatus: (
      jobId: string,
      options?: JobsListJobPreparationAndReleaseTaskStatusOptions,
    ) => listJobPreparationAndReleaseTaskStatus(context, jobId, options),
    getJobTaskCounts: (jobId: string, options?: JobsGetJobTaskCountsOptions) =>
      getJobTaskCounts(context, jobId, options),
  };
}

export function getJobsOperations(context: BatchContext): JobsOperations {
  return {
    ...getJobs(context),
  };
}
