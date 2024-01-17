// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BatchContext } from "../../api/BatchContext.js";
import {
  BatchJobSchedule,
  BatchJobScheduleUpdateOptions,
  BatchJobScheduleCreateOptions,
} from "../../models/models.js";
import {
  jobScheduleExists,
  deleteJobSchedule,
  getJobSchedule,
  updateJobSchedule,
  replaceJobSchedule,
  disableJobSchedule,
  enableJobSchedule,
  terminateJobSchedule,
  createJobSchedule,
  listJobSchedules,
} from "../../api/jobSchedules/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  JobSchedulesJobScheduleExistsOptions,
  JobSchedulesDeleteJobScheduleOptions,
  JobSchedulesGetJobScheduleOptions,
  JobSchedulesUpdateJobScheduleOptions,
  JobSchedulesReplaceJobScheduleOptions,
  JobSchedulesDisableJobScheduleOptions,
  JobSchedulesEnableJobScheduleOptions,
  JobSchedulesTerminateJobScheduleOptions,
  JobSchedulesCreateJobScheduleOptions,
  JobSchedulesListJobSchedulesOptions,
} from "../../models/options.js";

export interface JobSchedulesOperations {
  jobScheduleExists: (
    jobScheduleId: string,
    options?: JobSchedulesJobScheduleExistsOptions,
  ) => Promise<void>;
  deleteJobSchedule: (
    jobScheduleId: string,
    options?: JobSchedulesDeleteJobScheduleOptions,
  ) => Promise<void>;
  getJobSchedule: (
    jobScheduleId: string,
    options?: JobSchedulesGetJobScheduleOptions,
  ) => Promise<BatchJobSchedule>;
  updateJobSchedule: (
    jobScheduleId: string,
    body: BatchJobScheduleUpdateOptions,
    options?: JobSchedulesUpdateJobScheduleOptions,
  ) => Promise<void>;
  replaceJobSchedule: (
    jobScheduleId: string,
    body: BatchJobSchedule,
    options?: JobSchedulesReplaceJobScheduleOptions,
  ) => Promise<void>;
  disableJobSchedule: (
    jobScheduleId: string,
    options?: JobSchedulesDisableJobScheduleOptions,
  ) => Promise<void>;
  enableJobSchedule: (
    jobScheduleId: string,
    options?: JobSchedulesEnableJobScheduleOptions,
  ) => Promise<void>;
  terminateJobSchedule: (
    jobScheduleId: string,
    options?: JobSchedulesTerminateJobScheduleOptions,
  ) => Promise<void>;
  createJobSchedule: (
    body: BatchJobScheduleCreateOptions,
    options?: JobSchedulesCreateJobScheduleOptions,
  ) => Promise<void>;
  listJobSchedules: (
    options?: JobSchedulesListJobSchedulesOptions,
  ) => PagedAsyncIterableIterator<BatchJobSchedule>;
}

export function getJobSchedules(context: BatchContext) {
  return {
    jobScheduleExists: (
      jobScheduleId: string,
      options?: JobSchedulesJobScheduleExistsOptions,
    ) => jobScheduleExists(context, jobScheduleId, options),
    deleteJobSchedule: (
      jobScheduleId: string,
      options?: JobSchedulesDeleteJobScheduleOptions,
    ) => deleteJobSchedule(context, jobScheduleId, options),
    getJobSchedule: (
      jobScheduleId: string,
      options?: JobSchedulesGetJobScheduleOptions,
    ) => getJobSchedule(context, jobScheduleId, options),
    updateJobSchedule: (
      jobScheduleId: string,
      body: BatchJobScheduleUpdateOptions,
      options?: JobSchedulesUpdateJobScheduleOptions,
    ) => updateJobSchedule(context, jobScheduleId, body, options),
    replaceJobSchedule: (
      jobScheduleId: string,
      body: BatchJobSchedule,
      options?: JobSchedulesReplaceJobScheduleOptions,
    ) => replaceJobSchedule(context, jobScheduleId, body, options),
    disableJobSchedule: (
      jobScheduleId: string,
      options?: JobSchedulesDisableJobScheduleOptions,
    ) => disableJobSchedule(context, jobScheduleId, options),
    enableJobSchedule: (
      jobScheduleId: string,
      options?: JobSchedulesEnableJobScheduleOptions,
    ) => enableJobSchedule(context, jobScheduleId, options),
    terminateJobSchedule: (
      jobScheduleId: string,
      options?: JobSchedulesTerminateJobScheduleOptions,
    ) => terminateJobSchedule(context, jobScheduleId, options),
    createJobSchedule: (
      body: BatchJobScheduleCreateOptions,
      options?: JobSchedulesCreateJobScheduleOptions,
    ) => createJobSchedule(context, body, options),
    listJobSchedules: (options?: JobSchedulesListJobSchedulesOptions) =>
      listJobSchedules(context, options),
  };
}

export function getJobSchedulesOperations(
  context: BatchContext,
): JobSchedulesOperations {
  return {
    ...getJobSchedules(context),
  };
}
