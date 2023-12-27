// Licensed under the MIT license.

import {
  CreateFineTuneRequest,
  FineTune,
  ListFineTunesResponse,
  ListFineTuneEventsResponse,
} from "../../models/models.js";
import {
  FineTunesCancel200Response,
  FineTunesCancelDefaultResponse,
  FineTunesCreate200Response,
  FineTunesCreateDefaultResponse,
  FineTunesList200Response,
  FineTunesListDefaultResponse,
  FineTunesListEvents200Response,
  FineTunesListEventsDefaultResponse,
  FineTunesRetrieve200Response,
  FineTunesRetrieveDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@typespec/ts-http-runtime";
import { reshape } from "@azure/core-util";
import {
  FineTunesCreateOptions,
  FineTunesListOptions,
  FineTunesRetrieveOptions,
  FineTunesListEventsOptions,
  FineTunesCancelOptions,
} from "../../models/options.js";

export function _createSend(
  context: Client,
  fineTune: CreateFineTuneRequest,
  options: FineTunesCreateOptions = { requestOptions: {} }
): StreamableMethod<
  FineTunesCreate200Response | FineTunesCreateDefaultResponse
> {
  return context
    .path("/fine-tunes")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        training_file: fineTune["trainingFile"],
        validation_file: fineTune["validationFile"],
        model: fineTune["model"],
        n_epochs: fineTune["nEpochs"],
        batch_size: fineTune["batchSize"],
        learning_rate_multiplier: fineTune["learningRateMultiplier"],
        prompt_loss_rate: fineTune["promptLossRate"],
        compute_classification_metrics:
          fineTune["computeClassificationMetrics"],
        classification_n_classes: fineTune["classificationNClasses"],
        classification_positive_class: fineTune["classificationPositiveClass"],
        classification_betas: fineTune["classificationBetas"],
        suffix: fineTune["suffix"],
      },
    });
}

export async function _createDeserialize(
  result: FineTunesCreate200Response | FineTunesCreateDefaultResponse
): Promise<FineTune> {
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
    "updated_at",
    "updatedAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "updated_at",
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
    "training_files",
    "trainingFiles"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "training_files[].createdAt",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "training_files[].status_details",
    "statusDetails"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "validation_files",
    "validationFiles"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "result_files",
    "resultFiles"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "events[].created_at",
    "createdAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "events[].created_at",
    (value) => new Date(value as string)
  );
  return deserializedResponse as FineTune;
}

export async function create(
  context: Client,
  fineTune: CreateFineTuneRequest,
  options: FineTunesCreateOptions = { requestOptions: {} }
): Promise<FineTune> {
  const result = await _createSend(context, fineTune, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: FineTunesListOptions = { requestOptions: {} }
): StreamableMethod<FineTunesList200Response | FineTunesListDefaultResponse> {
  return context
    .path("/fine-tunes")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: FineTunesList200Response | FineTunesListDefaultResponse
): Promise<ListFineTunesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].created_at",
    "createdAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].created_at",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].updated_at",
    "updatedAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].updated_at",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].fine_tuned_model",
    "fineTunedModel"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].organization_id",
    "organizationId"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].training_files",
    "trainingFiles"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].training_files[].createdAt",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].training_files[].status_details",
    "statusDetails"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].validation_files",
    "validationFiles"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].result_files",
    "resultFiles"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].events[].created_at",
    "createdAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].events[].created_at",
    (value) => new Date(value as string)
  );
  return deserializedResponse as ListFineTunesResponse;
}

export async function list(
  context: Client,
  options: FineTunesListOptions = { requestOptions: {} }
): Promise<ListFineTunesResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  fineTuneId: string,
  options: FineTunesRetrieveOptions = { requestOptions: {} }
): StreamableMethod<
  FineTunesRetrieve200Response | FineTunesRetrieveDefaultResponse
> {
  return context
    .path("/fine-tunes/{fine_tune_id}", fineTuneId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: FineTunesRetrieve200Response | FineTunesRetrieveDefaultResponse
): Promise<FineTune> {
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
    "updated_at",
    "updatedAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "updated_at",
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
    "training_files",
    "trainingFiles"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "training_files[].createdAt",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "training_files[].status_details",
    "statusDetails"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "validation_files",
    "validationFiles"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "result_files",
    "resultFiles"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "events[].created_at",
    "createdAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "events[].created_at",
    (value) => new Date(value as string)
  );
  return deserializedResponse as FineTune;
}

export async function retrieve(
  context: Client,
  fineTuneId: string,
  options: FineTunesRetrieveOptions = { requestOptions: {} }
): Promise<FineTune> {
  const result = await _retrieveSend(context, fineTuneId, options);
  return _retrieveDeserialize(result);
}

export function _listEventsSend(
  context: Client,
  fineTuneId: string,
  options: FineTunesListEventsOptions = { requestOptions: {} }
): StreamableMethod<
  FineTunesListEvents200Response | FineTunesListEventsDefaultResponse
> {
  return context
    .path("/fine-tunes/{fine_tune_id}/events", fineTuneId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { stream: options?.stream },
    });
}

export async function _listEventsDeserialize(
  result: FineTunesListEvents200Response | FineTunesListEventsDefaultResponse
): Promise<ListFineTuneEventsResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  let deserializedResponse: unknown = result.body;
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].created_at",
    "createdAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "data[].created_at",
    (value) => new Date(value as string)
  );
  return deserializedResponse as ListFineTuneEventsResponse;
}

export async function listEvents(
  context: Client,
  fineTuneId: string,
  options: FineTunesListEventsOptions = { requestOptions: {} }
): Promise<ListFineTuneEventsResponse> {
  const result = await _listEventsSend(context, fineTuneId, options);
  return _listEventsDeserialize(result);
}

export function _cancelSend(
  context: Client,
  fineTuneId: string,
  options: FineTunesCancelOptions = { requestOptions: {} }
): StreamableMethod<
  FineTunesCancel200Response | FineTunesCancelDefaultResponse
> {
  return context
    .path("/fine-tunes/{fine_tune_id}/cancel", fineTuneId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelDeserialize(
  result: FineTunesCancel200Response | FineTunesCancelDefaultResponse
): Promise<FineTune> {
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
    "updated_at",
    "updatedAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "updated_at",
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
    "training_files",
    "trainingFiles"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "training_files[].createdAt",
    (value) => new Date(value as string)
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "training_files[].status_details",
    "statusDetails"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "validation_files",
    "validationFiles"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "result_files",
    "resultFiles"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "events[].created_at",
    "createdAt"
  );
  deserializedResponse = reshape(
    deserializedResponse,
    "events[].created_at",
    (value) => new Date(value as string)
  );
  return deserializedResponse as FineTune;
}

export async function cancel(
  context: Client,
  fineTuneId: string,
  options: FineTunesCancelOptions = { requestOptions: {} }
): Promise<FineTune> {
  const result = await _cancelSend(context, fineTuneId, options);
  return _cancelDeserialize(result);
}
