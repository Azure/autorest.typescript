// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext as Client } from "../../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  CreateFineTuningJobRequest,
  FineTuningJob,
  ListPaginatedFineTuningJobsResponse,
  ListFineTuningJobEventsResponse,
} from "../../../models/models.js";
import {
  PathUncheckedResponse,
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
): StreamableMethod {
  return context
    .path("/fine_tuning/jobs")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        training_file: job["training_file"],
        validation_file: job["validation_file"],
        model: job["model"],
        hyperparameters: !job.hyperparameters
          ? undefined
          : { n_epochs: job.hyperparameters?.["n_epochs"] },
        suffix: job["suffix"],
      },
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<FineTuningJob> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created_at: new Date(result.body["created_at"]),
    finished_at:
      result.body["finished_at"] === null
        ? null
        : new Date(result.body["finished_at"]),
    model: result.body["model"],
    fine_tuned_model: result.body["fine_tuned_model"],
    organization_id: result.body["organization_id"],
    status: result.body["status"],
    hyperparameters: { n_epochs: result.body.hyperparameters["n_epochs"] },
    training_file: result.body["training_file"],
    validation_file: result.body["validation_file"],
    result_files: result.body["result_files"],
    trained_tokens: result.body["trained_tokens"],
    error:
      result.body.error === null
        ? null
        : {
            message: result.body.error["message"],
            code: result.body.error["code"],
            param: result.body.error["param"],
          },
  };
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
): StreamableMethod {
  return context
    .path("/fine_tuning/jobs")
    .get({
      ...operationOptionsToRequestParameters(options),
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

  return {
    object: result.body["object"],
    data: result.body["data"].map((p: any) => {
      return {
        id: p["id"],
        object: p["object"],
        created_at: new Date(p["created_at"]),
        finished_at:
          p["finished_at"] === null ? null : new Date(p["finished_at"]),
        model: p["model"],
        fine_tuned_model: p["fine_tuned_model"],
        organization_id: p["organization_id"],
        status: p["status"],
        hyperparameters: { n_epochs: p.hyperparameters["n_epochs"] },
        training_file: p["training_file"],
        validation_file: p["validation_file"],
        result_files: p["result_files"],
        trained_tokens: p["trained_tokens"],
        error:
          p.error === null
            ? null
            : {
                message: p.error["message"],
                code: p.error["code"],
                param: p.error["param"],
              },
      };
    }),
    has_more: result.body["has_more"],
  };
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
): StreamableMethod {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}", fineTuningJobId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: PathUncheckedResponse,
): Promise<FineTuningJob> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created_at: new Date(result.body["created_at"]),
    finished_at:
      result.body["finished_at"] === null
        ? null
        : new Date(result.body["finished_at"]),
    model: result.body["model"],
    fine_tuned_model: result.body["fine_tuned_model"],
    organization_id: result.body["organization_id"],
    status: result.body["status"],
    hyperparameters: { n_epochs: result.body.hyperparameters["n_epochs"] },
    training_file: result.body["training_file"],
    validation_file: result.body["validation_file"],
    result_files: result.body["result_files"],
    trained_tokens: result.body["trained_tokens"],
    error:
      result.body.error === null
        ? null
        : {
            message: result.body.error["message"],
            code: result.body.error["code"],
            param: result.body.error["param"],
          },
  };
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
): StreamableMethod {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/events", fineTuningJobId)
    .get({
      ...operationOptionsToRequestParameters(options),
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

  return {
    object: result.body["object"],
    data: result.body["data"].map((p: any) => {
      return {
        id: p["id"],
        object: p["object"],
        created_at: new Date(p["created_at"]),
        level: p["level"],
        message: p["message"],
      };
    }),
  };
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
): StreamableMethod {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/cancel", fineTuningJobId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelDeserialize(
  result: PathUncheckedResponse,
): Promise<FineTuningJob> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created_at: new Date(result.body["created_at"]),
    finished_at:
      result.body["finished_at"] === null
        ? null
        : new Date(result.body["finished_at"]),
    model: result.body["model"],
    fine_tuned_model: result.body["fine_tuned_model"],
    organization_id: result.body["organization_id"],
    status: result.body["status"],
    hyperparameters: { n_epochs: result.body.hyperparameters["n_epochs"] },
    training_file: result.body["training_file"],
    validation_file: result.body["validation_file"],
    result_files: result.body["result_files"],
    trained_tokens: result.body["trained_tokens"],
    error:
      result.body.error === null
        ? null
        : {
            message: result.body.error["message"],
            code: result.body.error["code"],
            param: result.body.error["param"],
          },
  };
}

export async function cancel(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsCancelOptionalParams = { requestOptions: {} },
): Promise<FineTuningJob> {
  const result = await _cancelSend(context, fineTuningJobId, options);
  return _cancelDeserialize(result);
}
