// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { JobSchedulesContext as Client } from "./index.js";
import {
  batchErrorDeserializer,
  BatchJobSchedule,
  batchJobScheduleSerializer,
  batchJobScheduleDeserializer,
  BatchJobScheduleUpdateOptions,
  batchJobScheduleUpdateOptionsSerializer,
  BatchJobScheduleCreateOptions,
  batchJobScheduleCreateOptionsSerializer,
  _BatchJobScheduleListResult,
  _batchJobScheduleListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
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
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listJobSchedulesSend(
  context: Client,
  options: ListJobSchedulesOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobschedules{?api%2Dversion,maxresults,timeOut,%24filter,%24select,%24expand}",
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

export async function _listJobSchedulesDeserialize(
  result: PathUncheckedResponse,
): Promise<_BatchJobScheduleListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return _batchJobScheduleListResultDeserializer(result.body);
}

/** Lists all of the Job Schedules in the specified Account. */
export function listJobSchedules(
  context: Client,
  options: ListJobSchedulesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BatchJobSchedule> {
  return buildPagedAsyncIterator(
    context,
    () => _listJobSchedulesSend(context, options),
    _listJobSchedulesDeserialize,
    ["200"],
    {
      itemName: "value",
      nextLinkName: "odata.nextLink",
      apiVersion: context.apiVersion ?? "2023-05-01.17.0",
    },
  );
}

export function _createJobScheduleSend(
  context: Client,
  body: BatchJobScheduleCreateOptions,
  options: CreateJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobschedules{?api%2Dversion,timeOut}",
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
      body: batchJobScheduleCreateOptionsSerializer(body),
    });
}

export async function _createJobScheduleDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Creates a Job Schedule to the specified Account. */
export async function createJobSchedule(
  context: Client,
  body: BatchJobScheduleCreateOptions,
  options: CreateJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _createJobScheduleSend(context, body, options);
  return _createJobScheduleDeserialize(result);
}

export function _terminateJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: TerminateJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobschedules/{jobScheduleId}/terminate{?api%2Dversion,timeOut}",
    {
      jobScheduleId: jobScheduleId,
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

export async function _terminateJobScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Terminates a Job Schedule. */
export async function terminateJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: TerminateJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _terminateJobScheduleSend(context, jobScheduleId, options);
  return _terminateJobScheduleDeserialize(result);
}

export function _enableJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: EnableJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobschedules/{jobScheduleId}/enable{?api%2Dversion,timeOut}",
    {
      jobScheduleId: jobScheduleId,
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

export async function _enableJobScheduleDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Enables a Job Schedule. */
export async function enableJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: EnableJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _enableJobScheduleSend(context, jobScheduleId, options);
  return _enableJobScheduleDeserialize(result);
}

export function _disableJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: DisableJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobschedules/{jobScheduleId}/disable{?api%2Dversion,timeOut}",
    {
      jobScheduleId: jobScheduleId,
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

export async function _disableJobScheduleDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** No new Jobs will be created until the Job Schedule is enabled again. */
export async function disableJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: DisableJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _disableJobScheduleSend(context, jobScheduleId, options);
  return _disableJobScheduleDeserialize(result);
}

export function _replaceJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  body: BatchJobSchedule,
  options: ReplaceJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobschedules/{jobScheduleId}{?api%2Dversion,timeOut}",
    {
      jobScheduleId: jobScheduleId,
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
      body: batchJobScheduleSerializer(body),
    });
}

export async function _replaceJobScheduleDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * This fully replaces all the updatable properties of the Job Schedule. For
 * example, if the schedule property is not specified with this request, then the
 * Batch service will remove the existing schedule. Changes to a Job Schedule only
 * impact Jobs created by the schedule after the update has taken place; currently
 * running Jobs are unaffected.
 */
export async function replaceJobSchedule(
  context: Client,
  jobScheduleId: string,
  body: BatchJobSchedule,
  options: ReplaceJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _replaceJobScheduleSend(context, jobScheduleId, body, options);
  return _replaceJobScheduleDeserialize(result);
}

export function _updateJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  body: BatchJobScheduleUpdateOptions,
  options: UpdateJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobschedules/{jobScheduleId}{?api%2Dversion,timeOut}",
    {
      jobScheduleId: jobScheduleId,
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
      body: batchJobScheduleUpdateOptionsSerializer(body),
    });
}

export async function _updateJobScheduleDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * This replaces only the Job Schedule properties specified in the request. For
 * example, if the schedule property is not specified with this request, then the
 * Batch service will keep the existing schedule. Changes to a Job Schedule only
 * impact Jobs created by the schedule after the update has taken place; currently
 * running Jobs are unaffected.
 */
export async function updateJobSchedule(
  context: Client,
  jobScheduleId: string,
  body: BatchJobScheduleUpdateOptions,
  options: UpdateJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _updateJobScheduleSend(context, jobScheduleId, body, options);
  return _updateJobScheduleDeserialize(result);
}

export function _getJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: GetJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobschedules/{jobScheduleId}{?api%2Dversion,timeOut,%24select,%24expand}",
    {
      jobScheduleId: jobScheduleId,
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

export async function _getJobScheduleDeserialize(
  result: PathUncheckedResponse,
): Promise<BatchJobSchedule> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return batchJobScheduleDeserializer(result.body);
}

/** Gets information about the specified Job Schedule. */
export async function getJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: GetJobScheduleOptionalParams = { requestOptions: {} },
): Promise<BatchJobSchedule> {
  const result = await _getJobScheduleSend(context, jobScheduleId, options);
  return _getJobScheduleDeserialize(result);
}

export function _deleteJobScheduleSend(
  context: Client,
  jobScheduleId: string,
  options: DeleteJobScheduleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobschedules/{jobScheduleId}{?api%2Dversion,timeOut}",
    {
      jobScheduleId: jobScheduleId,
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

export async function _deleteJobScheduleDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/**
 * When you delete a Job Schedule, this also deletes all Jobs and Tasks under that
 * schedule. When Tasks are deleted, all the files in their working directories on
 * the Compute Nodes are also deleted (the retention period is ignored). The Job
 * Schedule statistics are no longer accessible once the Job Schedule is deleted,
 * though they are still counted towards Account lifetime statistics.
 */
export async function deleteJobSchedule(
  context: Client,
  jobScheduleId: string,
  options: DeleteJobScheduleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteJobScheduleSend(context, jobScheduleId, options);
  return _deleteJobScheduleDeserialize(result);
}

export function _jobScheduleExistsSend(
  context: Client,
  jobScheduleId: string,
  options: JobScheduleExistsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/jobschedules/{jobScheduleId}{?api%2Dversion,timeOut}",
    {
      jobScheduleId: jobScheduleId,
      "api%2Dversion": context.apiVersion ?? "2023-05-01.17.0",
      timeOut: options?.timeOutInSeconds,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .head({
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

export async function _jobScheduleExistsDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "404"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = batchErrorDeserializer(result.body);
    throw error;
  }

  return;
}

/** Checks the specified Job Schedule exists. */
export async function jobScheduleExists(
  context: Client,
  jobScheduleId: string,
  options: JobScheduleExistsOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _jobScheduleExistsSend(context, jobScheduleId, options);
  return _jobScheduleExistsDeserialize(result);
}
