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
  JobsCancel200Response,
  JobsCancelDefaultResponse,
  JobsCreate200Response,
  JobsCreateDefaultResponse,
  JobsList200Response,
  JobsListDefaultResponse,
  JobsListEvents200Response,
  JobsListEventsDefaultResponse,
  JobsRetrieve200Response,
  JobsRetrieveDefaultResponse,
  OpenAIContext as Client,
} from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  FineTuningJobsCreateOptions,
  FineTuningJobsListOptions,
  FineTuningJobsRetrieveOptions,
  FineTuningJobsListEventsOptions,
  FineTuningJobsCancelOptions,
} from "../../../models/options.js";

export function _fineTuningJobsCreateSend(
  context: Client,
  job: CreateFineTuningJobRequest,
  options: FineTuningJobsCreateOptions = { requestOptions: {} }
): StreamableMethod<JobsCreate200Response | JobsCreateDefaultResponse> {
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

export async function _fineTuningJobsCreateDeserialize(
  result: JobsCreate200Response | JobsCreateDefaultResponse
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
export async function fineTuningJobsCreate(
  context: Client,
  job: CreateFineTuningJobRequest,
  options: FineTuningJobsCreateOptions = { requestOptions: {} }
): Promise<FineTuningJob> {
  const result = await _fineTuningJobsCreateSend(context, job, options);
  return _fineTuningJobsCreateDeserialize(result);
}

export function _fineTuningJobsListSend(
  context: Client,
  options: FineTuningJobsListOptions = { requestOptions: {} }
): StreamableMethod<JobsList200Response | JobsListDefaultResponse> {
  return context
    .path("/fine_tuning/jobs")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { after: options?.after, limit: options?.limit },
    });
}

export async function _fineTuningJobsListDeserialize(
  result: JobsList200Response | JobsListDefaultResponse
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

export async function fineTuningJobsList(
  context: Client,
  options: FineTuningJobsListOptions = { requestOptions: {} }
): Promise<ListPaginatedFineTuningJobsResponse> {
  const result = await _fineTuningJobsListSend(context, options);
  return _fineTuningJobsListDeserialize(result);
}

export function _fineTuningJobsRetrieveSend(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsRetrieveOptions = { requestOptions: {} }
): StreamableMethod<JobsRetrieve200Response | JobsRetrieveDefaultResponse> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}", fineTuningJobId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _fineTuningJobsRetrieveDeserialize(
  result: JobsRetrieve200Response | JobsRetrieveDefaultResponse
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

export async function fineTuningJobsRetrieve(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsRetrieveOptions = { requestOptions: {} }
): Promise<FineTuningJob> {
  const result = await _fineTuningJobsRetrieveSend(
    context,
    fineTuningJobId,
    options
  );
  return _fineTuningJobsRetrieveDeserialize(result);
}

export function _fineTuningJobsListEventsSend(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsListEventsOptions = { requestOptions: {} }
): StreamableMethod<JobsListEvents200Response | JobsListEventsDefaultResponse> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/events", fineTuningJobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { after: options?.after, limit: options?.limit },
    });
}

export async function _fineTuningJobsListEventsDeserialize(
  result: JobsListEvents200Response | JobsListEventsDefaultResponse
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

export async function fineTuningJobsListEvents(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsListEventsOptions = { requestOptions: {} }
): Promise<ListFineTuningJobEventsResponse> {
  const result = await _fineTuningJobsListEventsSend(
    context,
    fineTuningJobId,
    options
  );
  return _fineTuningJobsListEventsDeserialize(result);
}

export function _fineTuningJobsCancelSend(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsCancelOptions = { requestOptions: {} }
): StreamableMethod<JobsCancel200Response | JobsCancelDefaultResponse> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/cancel", fineTuningJobId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _fineTuningJobsCancelDeserialize(
  result: JobsCancel200Response | JobsCancelDefaultResponse
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

export async function fineTuningJobsCancel(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsCancelOptions = { requestOptions: {} }
): Promise<FineTuningJob> {
  const result = await _fineTuningJobsCancelSend(
    context,
    fineTuningJobId,
    options
  );
  return _fineTuningJobsCancelDeserialize(result);
}
