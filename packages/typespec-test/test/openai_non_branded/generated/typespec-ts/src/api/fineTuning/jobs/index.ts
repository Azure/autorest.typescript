// Licensed under the MIT License.

import {
  OpenAIContext as Client,
  FineTuningJobsCancelOptionalParams,
  FineTuningJobsCreateOptionalParams,
  FineTuningJobsListEventsOptionalParams,
  FineTuningJobsListOptionalParams,
  FineTuningJobsRetrieveOptionalParams,
} from "../../index.js";
import {
  CreateFineTuningJobRequest,
  createFineTuningJobRequestSerializer,
  FineTuningJob,
  fineTuningJobDeserializer,
  ListPaginatedFineTuningJobsResponse,
  listPaginatedFineTuningJobsResponseDeserializer,
  ListFineTuningJobEventsResponse,
  listFineTuningJobEventsResponseDeserializer,
} from "../../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _cancelSend(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsCancelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/cancel", fineTuningJobId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json" },
    });
}

export async function _cancelDeserialize(
  result: PathUncheckedResponse,
): Promise<FineTuningJob> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fineTuningJobDeserializer(result.body);
}

export async function cancel(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsCancelOptionalParams = { requestOptions: {} },
): Promise<FineTuningJob> {
  const result = await _cancelSend(context, fineTuningJobId, options);
  return _cancelDeserialize(result);
}

export function _listEventsSend(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsListEventsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/events", fineTuningJobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json" },
      queryParameters: { after: options?.after, limit: options?.limit },
    });
}

export async function _listEventsDeserialize(
  result: PathUncheckedResponse,
): Promise<ListFineTuningJobEventsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return listFineTuningJobEventsResponseDeserializer(result.body);
}

export async function listEvents(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsListEventsOptionalParams = { requestOptions: {} },
): Promise<ListFineTuningJobEventsResponse> {
  const result = await _listEventsSend(context, fineTuningJobId, options);
  return _listEventsDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsRetrieveOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}", fineTuningJobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json" },
    });
}

export async function _retrieveDeserialize(
  result: PathUncheckedResponse,
): Promise<FineTuningJob> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fineTuningJobDeserializer(result.body);
}

export async function retrieve(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsRetrieveOptionalParams = { requestOptions: {} },
): Promise<FineTuningJob> {
  const result = await _retrieveSend(context, fineTuningJobId, options);
  return _retrieveDeserialize(result);
}

export function _listSend(
  context: Client,
  options: FineTuningJobsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/fine_tuning/jobs")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json" },
      queryParameters: { after: options?.after, limit: options?.limit },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<ListPaginatedFineTuningJobsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return listPaginatedFineTuningJobsResponseDeserializer(result.body);
}

export async function list(
  context: Client,
  options: FineTuningJobsListOptionalParams = { requestOptions: {} },
): Promise<ListPaginatedFineTuningJobsResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _createSend(
  context: Client,
  job: CreateFineTuningJobRequest,
  options: FineTuningJobsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/fine_tuning/jobs")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json" },
      body: createFineTuningJobRequestSerializer(job),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<FineTuningJob> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fineTuningJobDeserializer(result.body);
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
