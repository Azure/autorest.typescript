// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { JobsContext as Client } from "./index.js";
import {
  batchErrorDeserializer,
  BatchJob,
  batchJobSerializer,
  batchJobDeserializer,
  BatchJobUpdateOptions,
  batchJobUpdateOptionsSerializer,
  BatchJobDisableOptions,
  batchJobDisableOptionsSerializer,
  batchJobTerminateOptionsSerializer,
  BatchJobCreateOptions,
  batchJobCreateOptionsSerializer,
  _BatchJobListResult,
  _batchJobListResultDeserializer,
  _BatchJobListPreparationAndReleaseTaskStatusResult,
  _batchJobListPreparationAndReleaseTaskStatusResultDeserializer,
  JobPreparationAndReleaseTaskExecutionInformation,
  TaskCountsResult,
  taskCountsResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
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
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getJobTaskCountsSend(
  context: Client,
  jobId: string,
  options: GetJobTaskCountsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobs/{jobId}/taskcounts{?api%2Dversion,timeOut}",
    {
      jobId: jobId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getJobTaskCountsDeserialize(
  result: PathUncheckedResponse,
): Promise<TaskCountsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return taskCountsResultDeserializer(result.body);
}

/**
 * Task counts provide a count of the Tasks by active, running or completed Task
 * state, and a count of Tasks which succeeded or failed. Tasks in the preparing
 * state are counted as running. Note that the numbers returned may not always be
 * up to date. If you need exact task counts, use a list query.
 */
export async function getJobTaskCounts(
  context: Client,
  jobId: string,
  options: GetJobTaskCountsOptionalParams = { requestOptions: {} },
): Promise<TaskCountsResult> {
  const result = await _getJobTaskCountsSend(context, jobId, options);
  return _getJobTaskCountsDeserialize(result);
}

export function _listJobPreparationAndReleaseTaskStatusSend(
  context: Client,
  jobId: string,
  options: ListJobPreparationAndReleaseTaskStatusOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobs/{jobId}/jobpreparationandreleasetaskstatus{?maxresults,timeOut,%24filter,%24select}",
    {
      jobId: jobId,
      maxresults: options?.maxresults,
      timeOut: options?.timeOutInSeconds,
      "%24filter": options?.filter,
      "%24select": !options?.select
        ? options?.select
        : options?.select.map((p: any) => {
            return p;
          }),
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listJobPreparationAndReleaseTaskStatusDeserialize(
  result: PathUncheckedResponse,
): Promise<_BatchJobListPreparationAndReleaseTaskStatusResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return _batchJobListPreparationAndReleaseTaskStatusResultDeserializer(result.body);
}

/**
 * This API returns the Job Preparation and Job Release Task status on all Compute
 * Nodes that have run the Job Preparation or Job Release Task. This includes
 * Compute Nodes which have since been removed from the Pool. If this API is
 * invoked on a Job which has no Job Preparation or Job Release Task, the Batch
 * service returns HTTP status code 409 (Conflict) with an error code of
 * JobPreparationTaskNotSpecified.
 */
export function listJobPreparationAndReleaseTaskStatus(
  context: Client,
  jobId: string,
  options: ListJobPreparationAndReleaseTaskStatusOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<JobPreparationAndReleaseTaskExecutionInformation> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobPreparationAndReleaseTaskStatusSend(context, jobId, options),
    _listJobPreparationAndReleaseTaskStatusDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "odata.nextLink" },
  );
}

export function _listJobsFromScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: ListJobsFromScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobschedules/{jobScheduleId}/jobs{?api%2Dversion,maxresults,timeOut,%24filter,%24select,%24expand}",
    {
      jobScheduleId: jobScheduleId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      maxresults: options?.maxresults,
      timeOut: options?.timeOutInSeconds,
      "%24filter": options?.filter,
      "%24select": !options?.select
        ? options?.select
        : options?.select.map((p: any) => {
            return p;
          }),
      "%24expand": !options?.expand
        ? options?.expand
        : options?.expand.map((p: any) => {
            return p;
          }),
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listJobsFromScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<_BatchJobListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return _batchJobListResultDeserializer(result.body);
}

/** Lists the Jobs that have been created under the specified Job Schedule. */
export function listJobsFromSchedule(
  context: Client,
  jobScheduleId: string,
  options: ListJobsFromScheduleOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchJob> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobsFromScheduleSend(context, jobScheduleId, options),
    _listJobsFromScheduleDeserialize,
    ["200"],
    {
      itemName: "value",
      nextLinkName: "odata.nextLink",
      apiVersion: context.apiVersion ?? "2023-05-01.17.0",
    },
  );
}

export function _listJobsSend(
  context: Client,
  options: ListJobsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobs{?api%2Dversion,maxresults,timeOut,%24filter,%24select,%24expand}",
    {
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      maxresults: options?.maxresults,
      timeOut: options?.timeOutInSeconds,
      "%24filter": options?.filter,
      "%24select": !options?.select
        ? options?.select
        : options?.select.map((p: any) => {
            return p;
          }),
      "%24expand": !options?.expand
        ? options?.expand
        : options?.expand.map((p: any) => {
            return p;
          }),
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listJobsDeserialize(
  result: PathUncheckedResponse,
): Promise<_BatchJobListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return _batchJobListResultDeserializer(result.body);
}

/** Lists all of the Jobs in the specified Account. */
export function listJobs(
  context: Client,
  options: ListJobsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchJob> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobsSend(context, options),
    _listJobsDeserialize,
    ["200"],
    {
      itemName: "value",
      nextLinkName: "odata.nextLink",
      apiVersion: context.apiVersion ?? "2023-05-01.17.0",
    },
  );
}

export function _createJobSend(
  context: Client,
  body: BatchJobCreateOptions,
  options: CreateJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobs{?api%2Dversion,timeOut}",
    {
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: batchJobCreateOptionsSerializer(body),
    });
}

export async function _createJobDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
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
export async function createJob(
  context: Client,
  body: BatchJobCreateOptions,
  options: CreateJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createJobSend(context, body, options);
  return _createJobDeserialize(result);
}

export function _terminateJobSend(
  context: Client,
  jobId: string,
  options: TerminateJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobs/{jobId}/terminate{?api%2Dversion,timeOut}",
    {
      jobId: jobId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifMatch !== undefined ? { "if-match": options?.ifMatch } : {}),
        ...(options?.ifNoneMatch !== undefined ? { "if-none-match": options?.ifNoneMatch } : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: !options["body"]
        ? options["body"]
        : batchJobTerminateOptionsSerializer(options["body"]),
    });
}

export async function _terminateJobDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * When a Terminate Job request is received, the Batch service sets the Job to the
 * terminating state. The Batch service then terminates any running Tasks
 * associated with the Job and runs any required Job release Tasks. Then the Job
 * moves into the completed state. If there are any Tasks in the Job in the active
 * state, they will remain in the active state. Once a Job is terminated, new
 * Tasks cannot be added and any remaining active Tasks will not be scheduled.
 */
export async function terminateJob(
  context: Client,
  jobId: string,
  options: TerminateJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _terminateJobSend(context, jobId, options);
  return _terminateJobDeserialize(result);
}

export function _enableJobSend(
  context: Client,
  jobId: string,
  options: EnableJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobs/{jobId}/enable{?api%2Dversion,timeOut}",
    {
      jobId: jobId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifMatch !== undefined ? { "if-match": options?.ifMatch } : {}),
        ...(options?.ifNoneMatch !== undefined ? { "if-none-match": options?.ifNoneMatch } : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        ...options.requestOptions?.headers,
      },
    });
}

export async function _enableJobDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * When you call this API, the Batch service sets a disabled Job to the enabling
 * state. After the this operation is completed, the Job moves to the active
 * state, and scheduling of new Tasks under the Job resumes. The Batch service
 * does not allow a Task to remain in the active state for more than 180 days.
 * Therefore, if you enable a Job containing active Tasks which were added more
 * than 180 days ago, those Tasks will not run.
 */
export async function enableJob(
  context: Client,
  jobId: string,
  options: EnableJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _enableJobSend(context, jobId, options);
  return _enableJobDeserialize(result);
}

export function _disableJobSend(
  context: Client,
  jobId: string,
  body: BatchJobDisableOptions,
  options: DisableJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobs/{jobId}/disable{?api%2Dversion,timeOut}",
    {
      jobId: jobId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifMatch !== undefined ? { "if-match": options?.ifMatch } : {}),
        ...(options?.ifNoneMatch !== undefined ? { "if-none-match": options?.ifNoneMatch } : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: batchJobDisableOptionsSerializer(body),
    });
}

export async function _disableJobDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
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
export async function disableJob(
  context: Client,
  jobId: string,
  body: BatchJobDisableOptions,
  options: DisableJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _disableJobSend(context, jobId, body, options);
  return _disableJobDeserialize(result);
}

export function _replaceJobSend(
  context: Client,
  jobId: string,
  body: BatchJob,
  options: ReplaceJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobs/{jobId}{?api%2Dversion,timeOut}",
    {
      jobId: jobId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifMatch !== undefined ? { "if-match": options?.ifMatch } : {}),
        ...(options?.ifNoneMatch !== undefined ? { "if-none-match": options?.ifNoneMatch } : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: batchJobSerializer(body),
    });
}

export async function _replaceJobDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * This fully replaces all the updatable properties of the Job. For example, if
 * the Job has constraints associated with it and if constraints is not specified
 * with this request, then the Batch service will remove the existing constraints.
 */
export async function replaceJob(
  context: Client,
  jobId: string,
  body: BatchJob,
  options: ReplaceJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _replaceJobSend(context, jobId, body, options);
  return _replaceJobDeserialize(result);
}

export function _updateJobSend(
  context: Client,
  jobId: string,
  body: BatchJobUpdateOptions,
  options: UpdateJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobs/{jobId}{?api%2Dversion,timeOut}",
    {
      jobId: jobId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json; odata=minimalmetadata",
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifMatch !== undefined ? { "if-match": options?.ifMatch } : {}),
        ...(options?.ifNoneMatch !== undefined ? { "if-none-match": options?.ifNoneMatch } : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        ...options.requestOptions?.headers,
      },
      body: batchJobUpdateOptionsSerializer(body),
    });
}

export async function _updateJobDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * This replaces only the Job properties specified in the request. For example, if
 * the Job has constraints, and a request does not specify the constraints
 * element, then the Job keeps the existing constraints.
 */
export async function updateJob(
  context: Client,
  jobId: string,
  body: BatchJobUpdateOptions,
  options: UpdateJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _updateJobSend(context, jobId, body, options);
  return _updateJobDeserialize(result);
}

export function _getJobSend(
  context: Client,
  jobId: string,
  options: GetJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobs/{jobId}{?api%2Dversion,timeOut,%24select,%24expand}",
    {
      jobId: jobId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
      "%24select": !options?.select
        ? options?.select
        : options?.select.map((p: any) => {
            return p;
          }),
      "%24expand": !options?.expand
        ? options?.expand
        : options?.expand.map((p: any) => {
            return p;
          }),
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifMatch !== undefined ? { "if-match": options?.ifMatch } : {}),
        ...(options?.ifNoneMatch !== undefined ? { "if-none-match": options?.ifNoneMatch } : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getJobDeserialize(result: PathUncheckedResponse): Promise<BatchJob> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return batchJobDeserializer(result.body);
}

/** Gets information about the specified Job. */
export async function getJob(
  context: Client,
  jobId: string,
  options: GetJobOptionalParams = { requestOptions: {} },
): Promise<BatchJob> {
  const result = await _getJobSend(context, jobId, options);
  return _getJobDeserialize(result);
}

export function _deleteJobSend(
  context: Client,
  jobId: string,
  options: DeleteJobOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobs/{jobId}{?api%2Dversion,timeOut}",
    {
      jobId: jobId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.clientRequestId !== undefined
          ? { "client-request-id": options?.clientRequestId }
          : {}),
        ...(options?.returnClientRequestId !== undefined
          ? { "return-client-request-id": options?.returnClientRequestId }
          : {}),
        ...(options?.ocpDate !== undefined
          ? { "ocp-date": !options?.ocpDate ? options?.ocpDate : options?.ocpDate.toUTCString() }
          : {}),
        ...(options?.ifMatch !== undefined ? { "if-match": options?.ifMatch } : {}),
        ...(options?.ifNoneMatch !== undefined ? { "if-none-match": options?.ifNoneMatch } : {}),
        ...(options?.ifModifiedSince !== undefined
          ? {
              "if-modified-since": !options?.ifModifiedSince
                ? options?.ifModifiedSince
                : options?.ifModifiedSince.toUTCString(),
            }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? {
              "if-unmodified-since": !options?.ifUnmodifiedSince
                ? options?.ifUnmodifiedSince
                : options?.ifUnmodifiedSince.toUTCString(),
            }
          : {}),
        ...options.requestOptions?.headers,
      },
    });
}

export async function _deleteJobDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
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
export async function deleteJob(
  context: Client,
  jobId: string,
  options: DeleteJobOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteJobSend(context, jobId, options);
  return _deleteJobDeserialize(result);
}
