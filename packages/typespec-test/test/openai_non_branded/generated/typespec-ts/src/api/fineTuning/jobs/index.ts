// Licensed under the MIT license.

import {
  CreateFineTuningJobRequest,
  FineTuningJob,
  ListPaginatedFineTuningJobsResponse,
  ListFineTuningJobEventsResponse,
} from "../../../models/models.js";
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
} from "@typespec/ts-http-runtime";
import { reshape } from "@azure/core-util";
import {
  FineTuningJobsCreateOptions,
  FineTuningJobsListOptions,
  FineTuningJobsRetrieveOptions,
  FineTuningJobsListEventsOptions,
  FineTuningJobsCancelOptions,
} from "../../../models/options.js";

export function _createSend(
  context: Client,
  job: CreateFineTuningJobRequest,
  options: FineTuningJobsCreateOptions = { requestOptions: {} }
): StreamableMethod<
  FineTuningJobsCreate200Response | FineTuningJobsCreateDefaultResponse
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

export async function _createDeserialize(
  result: FineTuningJobsCreate200Response | FineTuningJobsCreateDefaultResponse
): Promise<FineTuningJob> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "created_at",
    "createdAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "created_at",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "finished_at",
    "finishedAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "finished_at",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "fine_tuned_model",
    "fineTunedModel"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "organization_id",
    "organizationId"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "training_file",
    "trainingFile"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "validation_file",
    "validationFile"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "result_files",
    "resultFiles"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "trained_tokens",
    "trainedTokens"
  );
  return deserializedResponse as FineTuningJob;
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
  options: FineTuningJobsCreateOptions = { requestOptions: {} }
): Promise<FineTuningJob> {
  const result = await _createSend(context, job, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: FineTuningJobsListOptions = { requestOptions: {} }
): StreamableMethod<
  FineTuningJobsList200Response | FineTuningJobsListDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { after: options?.after, limit: options?.limit },
    });
}

export async function _listDeserialize(
  result: FineTuningJobsList200Response | FineTuningJobsListDefaultResponse
): Promise<ListPaginatedFineTuningJobsResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(deserializedResponse, "has_more", "hasMore");
  return deserializedResponse as ListPaginatedFineTuningJobsResponse;
}

export async function list(
  context: Client,
  options: FineTuningJobsListOptions = { requestOptions: {} }
): Promise<ListPaginatedFineTuningJobsResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsRetrieveOptions = { requestOptions: {} }
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
    | FineTuningJobsRetrieveDefaultResponse
): Promise<FineTuningJob> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "created_at",
    "createdAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "created_at",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "finished_at",
    "finishedAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "finished_at",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "fine_tuned_model",
    "fineTunedModel"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "organization_id",
    "organizationId"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "training_file",
    "trainingFile"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "validation_file",
    "validationFile"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "result_files",
    "resultFiles"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "trained_tokens",
    "trainedTokens"
  );
  return deserializedResponse as FineTuningJob;
}

export async function retrieve(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsRetrieveOptions = { requestOptions: {} }
): Promise<FineTuningJob> {
  const result = await _retrieveSend(context, fineTuningJobId, options);
  return _retrieveDeserialize(result);
}

export function _listEventsSend(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsListEventsOptions = { requestOptions: {} }
): StreamableMethod<
  FineTuningJobsListEvents200Response | FineTuningJobsListEventsDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/events", fineTuningJobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { after: options?.after, limit: options?.limit },
    });
}

export async function _listEventsDeserialize(
  result:
    | FineTuningJobsListEvents200Response
    | FineTuningJobsListEventsDefaultResponse
): Promise<ListFineTuningJobEventsResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  return deserializedResponse as ListFineTuningJobEventsResponse;
}

export async function listEvents(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsListEventsOptions = { requestOptions: {} }
): Promise<ListFineTuningJobEventsResponse> {
  const result = await _listEventsSend(context, fineTuningJobId, options);
  return _listEventsDeserialize(result);
}

export function _cancelSend(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsCancelOptions = { requestOptions: {} }
): StreamableMethod<
  FineTuningJobsCancel200Response | FineTuningJobsCancelDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/cancel", fineTuningJobId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelDeserialize(
  result: FineTuningJobsCancel200Response | FineTuningJobsCancelDefaultResponse
): Promise<FineTuningJob> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "created_at",
    "createdAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "created_at",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "finished_at",
    "finishedAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "finished_at",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "fine_tuned_model",
    "fineTunedModel"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "organization_id",
    "organizationId"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "training_file",
    "trainingFile"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "validation_file",
    "validationFile"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "result_files",
    "resultFiles"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "trained_tokens",
    "trainedTokens"
  );
  return deserializedResponse as FineTuningJob;
}

export async function cancel(
  context: Client,
  fineTuningJobId: string,
  options: FineTuningJobsCancelOptions = { requestOptions: {} }
): Promise<FineTuningJob> {
  const result = await _cancelSend(context, fineTuningJobId, options);
  return _cancelDeserialize(result);
}
