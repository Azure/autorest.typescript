// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateFineTuningJobRequest,
  FineTuningJob,
  ListPaginatedFineTuningJobsResponse,
  ListFineTuningJobEventsResponse,
} from "../../../models/models.js";
import {
  isUnexpected,
  OpenAIContext as Client,
} from "../../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  CreateFineTuningJobOptions,
  ListPaginatedFineTuningJobsOptions,
  RetrieveFineTuningJobOptions,
  ListFineTuningEventsOptions,
  CancelFineTuningJobOptions,
} from "../../../models/options.js";

export function _createFineTuningJobSend(
  context: Client,
  job: CreateFineTuningJobRequest,
  options: CreateFineTuningJobOptions = { requestOptions: {} }
): StreamableMethod<
  CreateFineTuningJob200Response | CreateFineTuningJobDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        training_file: job["trainingFile"],
        validation_file: job["validationFile"],
        model: job["model"],
        hyperparameters: !job.hyperparameters
          ? undefined
          : { n_epochs: job.hyperparameters?.["nEpochs"] },
        suffix: job["suffix"],
      },
    });
}

export async function _createFineTuningJobDeserialize(
  result: CreateFineTuningJob200Response | CreateFineTuningJobDefaultResponse
): Promise<FineTuningJob> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    finishedAt:
      result.body["finished_at"] === null
        ? null
        : new Date(result.body["finished_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"] as any,
    hyperparameters: {
      nEpochs: result.body.hyperparameters["n_epochs"] as any,
    },
    trainingFile: result.body["training_file"],
    validationFile: result.body["validation_file"],
    resultFiles: result.body["result_files"],
    trainedTokens: result.body["trained_tokens"],
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
export async function createFineTuningJob(
  context: Client,
  job: CreateFineTuningJobRequest,
  options: CreateFineTuningJobOptions = { requestOptions: {} }
): Promise<FineTuningJob> {
  const result = await _createFineTuningJobSend(context, job, options);
  return _createFineTuningJobDeserialize(result);
}

export function _listPaginatedFineTuningJobsSend(
  context: Client,
  options: ListPaginatedFineTuningJobsOptions = { requestOptions: {} }
): StreamableMethod<
  | ListPaginatedFineTuningJobs200Response
  | ListPaginatedFineTuningJobsDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { after: options?.after, limit: options?.limit },
    });
}

export async function _listPaginatedFineTuningJobsDeserialize(
  result:
    | ListPaginatedFineTuningJobs200Response
    | ListPaginatedFineTuningJobsDefaultResponse
): Promise<ListPaginatedFineTuningJobsResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      finishedAt: p["finished_at"] === null ? null : new Date(p["finished_at"]),
      model: p["model"],
      fineTunedModel: p["fine_tuned_model"],
      organizationId: p["organization_id"],
      status: p["status"] as any,
      hyperparameters: { nEpochs: p.hyperparameters["n_epochs"] as any },
      trainingFile: p["training_file"],
      validationFile: p["validation_file"],
      resultFiles: p["result_files"],
      trainedTokens: p["trained_tokens"],
      error:
        p.error === null
          ? null
          : {
              message: p.error["message"],
              code: p.error["code"],
              param: p.error["param"],
            },
    })),
    hasMore: result.body["has_more"],
  };
}

export async function listPaginatedFineTuningJobs(
  context: Client,
  options: ListPaginatedFineTuningJobsOptions = { requestOptions: {} }
): Promise<ListPaginatedFineTuningJobsResponse> {
  const result = await _listPaginatedFineTuningJobsSend(context, options);
  return _listPaginatedFineTuningJobsDeserialize(result);
}

export function _retrieveFineTuningJobSend(
  context: Client,
  fineTuningJobId: string,
  options: RetrieveFineTuningJobOptions = { requestOptions: {} }
): StreamableMethod<
  RetrieveFineTuningJob200Response | RetrieveFineTuningJobDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}", fineTuningJobId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveFineTuningJobDeserialize(
  result:
    | RetrieveFineTuningJob200Response
    | RetrieveFineTuningJobDefaultResponse
): Promise<FineTuningJob> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    finishedAt:
      result.body["finished_at"] === null
        ? null
        : new Date(result.body["finished_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"] as any,
    hyperparameters: {
      nEpochs: result.body.hyperparameters["n_epochs"] as any,
    },
    trainingFile: result.body["training_file"],
    validationFile: result.body["validation_file"],
    resultFiles: result.body["result_files"],
    trainedTokens: result.body["trained_tokens"],
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

export async function retrieveFineTuningJob(
  context: Client,
  fineTuningJobId: string,
  options: RetrieveFineTuningJobOptions = { requestOptions: {} }
): Promise<FineTuningJob> {
  const result = await _retrieveFineTuningJobSend(
    context,
    fineTuningJobId,
    options
  );
  return _retrieveFineTuningJobDeserialize(result);
}

export function _listFineTuningEventsSend(
  context: Client,
  fineTuningJobId: string,
  options: ListFineTuningEventsOptions = { requestOptions: {} }
): StreamableMethod<
  ListFineTuningEvents200Response | ListFineTuningEventsDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/events", fineTuningJobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { after: options?.after, limit: options?.limit },
    });
}

export async function _listFineTuningEventsDeserialize(
  result: ListFineTuningEvents200Response | ListFineTuningEventsDefaultResponse
): Promise<ListFineTuningJobEventsResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      level: p["level"] as any,
      message: p["message"],
    })),
  };
}

export async function listFineTuningEvents(
  context: Client,
  fineTuningJobId: string,
  options: ListFineTuningEventsOptions = { requestOptions: {} }
): Promise<ListFineTuningJobEventsResponse> {
  const result = await _listFineTuningEventsSend(
    context,
    fineTuningJobId,
    options
  );
  return _listFineTuningEventsDeserialize(result);
}

export function _cancelFineTuningJobSend(
  context: Client,
  fineTuningJobId: string,
  options: CancelFineTuningJobOptions = { requestOptions: {} }
): StreamableMethod<
  CancelFineTuningJob200Response | CancelFineTuningJobDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/cancel", fineTuningJobId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelFineTuningJobDeserialize(
  result: CancelFineTuningJob200Response | CancelFineTuningJobDefaultResponse
): Promise<FineTuningJob> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    finishedAt:
      result.body["finished_at"] === null
        ? null
        : new Date(result.body["finished_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"] as any,
    hyperparameters: {
      nEpochs: result.body.hyperparameters["n_epochs"] as any,
    },
    trainingFile: result.body["training_file"],
    validationFile: result.body["validation_file"],
    resultFiles: result.body["result_files"],
    trainedTokens: result.body["trained_tokens"],
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

export async function cancelFineTuningJob(
  context: Client,
  fineTuningJobId: string,
  options: CancelFineTuningJobOptions = { requestOptions: {} }
): Promise<FineTuningJob> {
  const result = await _cancelFineTuningJobSend(
    context,
    fineTuningJobId,
    options
  );
  return _cancelFineTuningJobDeserialize(result);
}
