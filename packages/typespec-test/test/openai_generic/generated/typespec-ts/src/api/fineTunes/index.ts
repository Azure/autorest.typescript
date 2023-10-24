// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateFineTuneRequest,
  FineTune,
  ListFineTunesResponse,
  ListFineTuneEventsResponse,
} from "../../models/models.js";
import {
  CancelFineTune200Response,
  CancelFineTuneDefaultResponse,
  CreateFineTune200Response,
  CreateFineTuneDefaultResponse,
  isUnexpected,
  ListFineTuneEvents200Response,
  ListFineTuneEventsDefaultResponse,
  ListFineTunes200Response,
  ListFineTunesDefaultResponse,
  OpenAIContext as Client,
  RetrieveFineTune200Response,
  RetrieveFineTuneDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  CreateFineTuneOptions,
  ListFineTunesOptions,
  RetrieveFineTuneOptions,
  ListFineTuneEventsOptions,
  CancelFineTuneOptions,
} from "../../models/options.js";

export function _createFineTuneSend(
  context: Client,
  fineTune: CreateFineTuneRequest,
  options: CreateFineTuneOptions = { requestOptions: {} }
): StreamableMethod<CreateFineTune200Response | CreateFineTuneDefaultResponse> {
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

export async function _createFineTuneDeserialize(
  result: CreateFineTune200Response | CreateFineTuneDefaultResponse
): Promise<FineTune> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    updatedAt: new Date(result.body["updated_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"] as any,
    hyperparams: {
      nEpochs: result.body.hyperparams["n_epochs"],
      batchSize: result.body.hyperparams["batch_size"],
      promptLossWeight: result.body.hyperparams["prompt_loss_weight"],
      learningRateMultiplier:
        result.body.hyperparams["learning_rate_multiplier"],
      computeClassificationMetrics:
        result.body.hyperparams["compute_classification_metrics"],
      classificationPositiveClass:
        result.body.hyperparams["classification_positive_class"],
      classificationNClasses:
        result.body.hyperparams["classification_n_classes"],
    },
    trainingFiles: (result.body["training_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    validationFiles: (result.body["validation_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    resultFiles: (result.body["result_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    events: (result.body["events"] ?? []).map((p) => ({
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      level: p["level"],
      message: p["message"],
    })),
  };
}

export async function createFineTune(
  context: Client,
  fineTune: CreateFineTuneRequest,
  options: CreateFineTuneOptions = { requestOptions: {} }
): Promise<FineTune> {
  const result = await _createFineTuneSend(context, fineTune, options);
  return _createFineTuneDeserialize(result);
}

export function _listFineTunesSend(
  context: Client,
  options: ListFineTunesOptions = { requestOptions: {} }
): StreamableMethod<ListFineTunes200Response | ListFineTunesDefaultResponse> {
  return context
    .path("/fine-tunes")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listFineTunesDeserialize(
  result: ListFineTunes200Response | ListFineTunesDefaultResponse
): Promise<ListFineTunesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      updatedAt: new Date(p["updated_at"]),
      model: p["model"],
      fineTunedModel: p["fine_tuned_model"],
      organizationId: p["organization_id"],
      status: p["status"] as any,
      hyperparams: {
        nEpochs: p.hyperparams["n_epochs"],
        batchSize: p.hyperparams["batch_size"],
        promptLossWeight: p.hyperparams["prompt_loss_weight"],
        learningRateMultiplier: p.hyperparams["learning_rate_multiplier"],
        computeClassificationMetrics:
          p.hyperparams["compute_classification_metrics"],
        classificationPositiveClass:
          p.hyperparams["classification_positive_class"],
        classificationNClasses: p.hyperparams["classification_n_classes"],
      },
      trainingFiles: (p["training_files"] ?? []).map((p) => ({
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"] as any,
        statusDetails: p["status_details"],
      })),
      validationFiles: (p["validation_files"] ?? []).map((p) => ({
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"] as any,
        statusDetails: p["status_details"],
      })),
      resultFiles: (p["result_files"] ?? []).map((p) => ({
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"] as any,
        statusDetails: p["status_details"],
      })),
      events: (p["events"] ?? []).map((p) => ({
        object: p["object"],
        createdAt: new Date(p["created_at"]),
        level: p["level"],
        message: p["message"],
      })),
    })),
  };
}

export async function listFineTunes(
  context: Client,
  options: ListFineTunesOptions = { requestOptions: {} }
): Promise<ListFineTunesResponse> {
  const result = await _listFineTunesSend(context, options);
  return _listFineTunesDeserialize(result);
}

export function _retrieveFineTuneSend(
  context: Client,
  fineTuneId: string,
  options: RetrieveFineTuneOptions = { requestOptions: {} }
): StreamableMethod<
  RetrieveFineTune200Response | RetrieveFineTuneDefaultResponse
> {
  return context
    .path("/fine-tunes/{fine_tune_id}", fineTuneId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveFineTuneDeserialize(
  result: RetrieveFineTune200Response | RetrieveFineTuneDefaultResponse
): Promise<FineTune> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    updatedAt: new Date(result.body["updated_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"] as any,
    hyperparams: {
      nEpochs: result.body.hyperparams["n_epochs"],
      batchSize: result.body.hyperparams["batch_size"],
      promptLossWeight: result.body.hyperparams["prompt_loss_weight"],
      learningRateMultiplier:
        result.body.hyperparams["learning_rate_multiplier"],
      computeClassificationMetrics:
        result.body.hyperparams["compute_classification_metrics"],
      classificationPositiveClass:
        result.body.hyperparams["classification_positive_class"],
      classificationNClasses:
        result.body.hyperparams["classification_n_classes"],
    },
    trainingFiles: (result.body["training_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    validationFiles: (result.body["validation_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    resultFiles: (result.body["result_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    events: (result.body["events"] ?? []).map((p) => ({
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      level: p["level"],
      message: p["message"],
    })),
  };
}

export async function retrieveFineTune(
  context: Client,
  fineTuneId: string,
  options: RetrieveFineTuneOptions = { requestOptions: {} }
): Promise<FineTune> {
  const result = await _retrieveFineTuneSend(context, fineTuneId, options);
  return _retrieveFineTuneDeserialize(result);
}

export function _listFineTuneEventsSend(
  context: Client,
  fineTuneId: string,
  options: ListFineTuneEventsOptions = { requestOptions: {} }
): StreamableMethod<
  ListFineTuneEvents200Response | ListFineTuneEventsDefaultResponse
> {
  return context
    .path("/fine-tunes/{fine_tune_id}/events", fineTuneId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { stream: options?.stream },
    });
}

export async function _listFineTuneEventsDeserialize(
  result: ListFineTuneEvents200Response | ListFineTuneEventsDefaultResponse
): Promise<ListFineTuneEventsResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      level: p["level"],
      message: p["message"],
    })),
  };
}

export async function listFineTuneEvents(
  context: Client,
  fineTuneId: string,
  options: ListFineTuneEventsOptions = { requestOptions: {} }
): Promise<ListFineTuneEventsResponse> {
  const result = await _listFineTuneEventsSend(context, fineTuneId, options);
  return _listFineTuneEventsDeserialize(result);
}

export function _cancelFineTuneSend(
  context: Client,
  fineTuneId: string,
  options: CancelFineTuneOptions = { requestOptions: {} }
): StreamableMethod<CancelFineTune200Response | CancelFineTuneDefaultResponse> {
  return context
    .path("/fine-tunes/{fine_tune_id}/cancel", fineTuneId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelFineTuneDeserialize(
  result: CancelFineTune200Response | CancelFineTuneDefaultResponse
): Promise<FineTune> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    updatedAt: new Date(result.body["updated_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"] as any,
    hyperparams: {
      nEpochs: result.body.hyperparams["n_epochs"],
      batchSize: result.body.hyperparams["batch_size"],
      promptLossWeight: result.body.hyperparams["prompt_loss_weight"],
      learningRateMultiplier:
        result.body.hyperparams["learning_rate_multiplier"],
      computeClassificationMetrics:
        result.body.hyperparams["compute_classification_metrics"],
      classificationPositiveClass:
        result.body.hyperparams["classification_positive_class"],
      classificationNClasses:
        result.body.hyperparams["classification_n_classes"],
    },
    trainingFiles: (result.body["training_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    validationFiles: (result.body["validation_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    resultFiles: (result.body["result_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    events: (result.body["events"] ?? []).map((p) => ({
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      level: p["level"],
      message: p["message"],
    })),
  };
}

export async function cancelFineTune(
  context: Client,
  fineTuneId: string,
  options: CancelFineTuneOptions = { requestOptions: {} }
): Promise<FineTune> {
  const result = await _cancelFineTuneSend(context, fineTuneId, options);
  return _cancelFineTuneDeserialize(result);
}
