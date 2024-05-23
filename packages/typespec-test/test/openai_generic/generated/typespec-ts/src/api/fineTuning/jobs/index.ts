// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateFineTuningJobRequest,
  FineTuningJob,
  ListPaginatedFineTuningJobsResponse,
  ListFineTuningJobEventsResponse,
} from "../../../models/models.js";
import {
  serializeCreateFineTuningJobRequest,
  deserializeFineTuningJob,
  deserializeListPaginatedFineTuningJobsResponse,
  deserializeListFineTuningJobEventsResponse,
} from "../../../utils/serializeUtil.js";
import {
  FineTuningJobsCancel200Response,
  FineTuningJobsCancelDefaultResponse,
  FineTuningJobsCreate200Response,
  FineTuningJobsCreateDefaultResponse,
  FineTuningJobsList200Response,
  FineTuningJobsListDefaultResponse,
  FineTuningJobsListEvents200Response,
  FineTuningJobsListEventsDefaultResponse,
  FineTuningJobsRetrieve200Response,
  FineTuningJobsRetrieveDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  FineTuningJobsCreateOptionalParams,
  FineTuningJobsListOptionalParams,
  FineTuningJobsRetrieveOptionalParams,
  FineTuningJobsListEventsOptionalParams,
  FineTuningJobsCancelOptionalParams,
} from "../../../models/options.js";

export function _createSend(
  context: Client,
  job: CreateFineTuningJobRequest,
  options: FineTuningJobsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  FineTuningJobsCreate200Response | FineTuningJobsCreateDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: serializeCreateFineTuningJobRequest(job),
    });
}

export async function _createDeserialize(
  result: FineTuningJobsCreate200Response | FineTuningJobsCreateDefaultResponse,
): Promise<FineTuningJob> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeFineTuningJob(result.body);
}

/**
 * Creates a job that fine-tunes a specified model from a given dataset.
 *
 * Response includes details of the enqueued job including job status and the name of the
 * fine-tuned models once complete.
 *
 * [Learn more about fine-tuning](/docs/guides/fine-tuning)
 */
export async function create(
  context: Client,
  job: CreateFineTuningJobRequest,
  options: FineTuningJobsCreateOptionalParams = { requestOptions: {} },
): Promise<FineTuningJob> {
  const result = await _createSend(context, job, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: FineTuningJobsListOptionalParams = { requestOptions: {} },
): StreamableMethod<
  FineTuningJobsList200Response | FineTuningJobsListDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.after,
      queryParameters: options?.limit,
    });
}

export async function _listDeserialize(
  result: FineTuningJobsList200Response | FineTuningJobsListDefaultResponse,
): Promise<ListPaginatedFineTuningJobsResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeListPaginatedFineTuningJobsResponse(result.body);
}

export async function list(
  context: Client,
  options: FineTuningJobsListOptionalParams = { requestOptions: {} },
): Promise<ListPaginatedFineTuningJobsResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsRetrieveOptionalParams = { requestOptions: {} },
): StreamableMethod<
  FineTuningJobsRetrieve200Response | FineTuningJobsRetrieveDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}", fineTuningJobId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result:
    | FineTuningJobsRetrieve200Response
    | FineTuningJobsRetrieveDefaultResponse,
): Promise<FineTuningJob> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeFineTuningJob(result.body);
}

export async function retrieve(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsRetrieveOptionalParams = { requestOptions: {} },
): Promise<FineTuningJob> {
  const result = await _retrieveSend(context, fineTuningJobId, options);
  return _retrieveDeserialize(result);
}

export function _listEventsSend(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsListEventsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  FineTuningJobsListEvents200Response | FineTuningJobsListEventsDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/events", fineTuningJobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: options?.after,
      queryParameters: options?.limit,
    });
}

export async function _listEventsDeserialize(
  result:
    | FineTuningJobsListEvents200Response
    | FineTuningJobsListEventsDefaultResponse,
): Promise<ListFineTuningJobEventsResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeListFineTuningJobEventsResponse(result.body);
}

export async function listEvents(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsListEventsOptionalParams = { requestOptions: {} },
): Promise<ListFineTuningJobEventsResponse> {
  const result = await _listEventsSend(context, fineTuningJobId, options);
  return _listEventsDeserialize(result);
}

export function _cancelSend(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsCancelOptionalParams = { requestOptions: {} },
): StreamableMethod<
  FineTuningJobsCancel200Response | FineTuningJobsCancelDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/cancel", fineTuningJobId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelDeserialize(
  result: FineTuningJobsCancel200Response | FineTuningJobsCancelDefaultResponse,
): Promise<FineTuningJob> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeFineTuningJob(result.body);
}

export async function cancel(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsCancelOptionalParams = { requestOptions: {} },
): Promise<FineTuningJob> {
  const result = await _cancelSend(context, fineTuningJobId, options);
  return _cancelDeserialize(result);
}
