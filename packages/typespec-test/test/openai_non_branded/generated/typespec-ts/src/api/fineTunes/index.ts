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
import {
  FineTunesCreateOptionalParams,
  FineTunesListOptionalParams,
  FineTunesRetrieveOptionalParams,
  FineTunesListEventsOptionalParams,
  FineTunesCancelOptionalParams,
} from "../../models/options.js";

export function _createSend(
  context: Client,
  fineTune: CreateFineTuneRequest,
  options: FineTunesCreateOptionalParams = { requestOptions: {} },
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
  result: FineTunesCreate200Response | FineTunesCreateDefaultResponse,
): Promise<FineTune> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as FineTunesCreate200Response;
  return {
    id: _result.body["id"],
    object: _result.body["object"],
    createdAt: new Date(_result.body["created_at"]),
    updatedAt: new Date(_result.body["updated_at"]),
    model: _result.body["model"],
    fineTunedModel: _result.body["fine_tuned_model"],
    organizationId: _result.body["organization_id"],
    status: _result.body["status"],
    hyperparams: {
      nEpochs: _result.body.hyperparams["n_epochs"],
      batchSize: _result.body.hyperparams["batch_size"],
      promptLossWeight: _result.body.hyperparams["prompt_loss_weight"],
      learningRateMultiplier:
        _result.body.hyperparams["learning_rate_multiplier"],
      computeClassificationMetrics:
        _result.body.hyperparams["compute_classification_metrics"],
      classificationPositiveClass:
        _result.body.hyperparams["classification_positive_class"],
      classificationNClasses:
        _result.body.hyperparams["classification_n_classes"],
    },
    trainingFiles: _result.body["training_files"].map((p) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        statusDetails: p["status_details"],
      };
    }),
    validationFiles: _result.body["validation_files"].map((p) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        statusDetails: p["status_details"],
      };
    }),
    resultFiles: _result.body["result_files"].map((p) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        statusDetails: p["status_details"],
      };
    }),
    events:
      _result.body["events"] === undefined
        ? _result.body["events"]
        : _result.body["events"].map((p) => {
            return {
              object: p["object"],
              createdAt: new Date(p["created_at"]),
              level: p["level"],
              message: p["message"],
            };
          }),
  };
}

export async function create(
  context: Client,
  fineTune: CreateFineTuneRequest,
  options: FineTunesCreateOptionalParams = { requestOptions: {} },
): Promise<FineTune> {
  const result = await _createSend(context, fineTune, options);
  return _createDeserialize(result);
}

export function _listSend(
  context: Client,
  options: FineTunesListOptionalParams = { requestOptions: {} },
): StreamableMethod<FineTunesList200Response | FineTunesListDefaultResponse> {
  return context
    .path("/fine-tunes")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: FineTunesList200Response | FineTunesListDefaultResponse,
): Promise<ListFineTunesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as FineTunesList200Response;
  return {
    object: _result.body["object"],
    data: _result.body["data"].map((p) => {
      return {
        id: p["id"],
        object: p["object"],
        createdAt: new Date(p["created_at"]),
        updatedAt: new Date(p["updated_at"]),
        model: p["model"],
        fineTunedModel: p["fine_tuned_model"],
        organizationId: p["organization_id"],
        status: p["status"],
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
        trainingFiles: p["training_files"].map((p) => {
          return {
            id: p["id"],
            object: p["object"],
            bytes: p["bytes"],
            createdAt: new Date(p["createdAt"]),
            filename: p["filename"],
            purpose: p["purpose"],
            status: p["status"],
            statusDetails: p["status_details"],
          };
        }),
        validationFiles: p["validation_files"].map((p) => {
          return {
            id: p["id"],
            object: p["object"],
            bytes: p["bytes"],
            createdAt: new Date(p["createdAt"]),
            filename: p["filename"],
            purpose: p["purpose"],
            status: p["status"],
            statusDetails: p["status_details"],
          };
        }),
        resultFiles: p["result_files"].map((p) => {
          return {
            id: p["id"],
            object: p["object"],
            bytes: p["bytes"],
            createdAt: new Date(p["createdAt"]),
            filename: p["filename"],
            purpose: p["purpose"],
            status: p["status"],
            statusDetails: p["status_details"],
          };
        }),
        events:
          p["events"] === undefined
            ? p["events"]
            : p["events"].map((p) => {
                return {
                  object: p["object"],
                  createdAt: new Date(p["created_at"]),
                  level: p["level"],
                  message: p["message"],
                };
              }),
      };
    }),
  };
}

export async function list(
  context: Client,
  options: FineTunesListOptionalParams = { requestOptions: {} },
): Promise<ListFineTunesResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  fineTuneId: string,
  options: FineTunesRetrieveOptionalParams = { requestOptions: {} },
): StreamableMethod<
  FineTunesRetrieve200Response | FineTunesRetrieveDefaultResponse
> {
  return context
    .path("/fine-tunes/{fine_tune_id}", fineTuneId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: FineTunesRetrieve200Response | FineTunesRetrieveDefaultResponse,
): Promise<FineTune> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as FineTunesRetrieve200Response;
  return {
    id: _result.body["id"],
    object: _result.body["object"],
    createdAt: new Date(_result.body["created_at"]),
    updatedAt: new Date(_result.body["updated_at"]),
    model: _result.body["model"],
    fineTunedModel: _result.body["fine_tuned_model"],
    organizationId: _result.body["organization_id"],
    status: _result.body["status"],
    hyperparams: {
      nEpochs: _result.body.hyperparams["n_epochs"],
      batchSize: _result.body.hyperparams["batch_size"],
      promptLossWeight: _result.body.hyperparams["prompt_loss_weight"],
      learningRateMultiplier:
        _result.body.hyperparams["learning_rate_multiplier"],
      computeClassificationMetrics:
        _result.body.hyperparams["compute_classification_metrics"],
      classificationPositiveClass:
        _result.body.hyperparams["classification_positive_class"],
      classificationNClasses:
        _result.body.hyperparams["classification_n_classes"],
    },
    trainingFiles: _result.body["training_files"].map((p) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        statusDetails: p["status_details"],
      };
    }),
    validationFiles: _result.body["validation_files"].map((p) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        statusDetails: p["status_details"],
      };
    }),
    resultFiles: _result.body["result_files"].map((p) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        statusDetails: p["status_details"],
      };
    }),
    events:
      _result.body["events"] === undefined
        ? _result.body["events"]
        : _result.body["events"].map((p) => {
            return {
              object: p["object"],
              createdAt: new Date(p["created_at"]),
              level: p["level"],
              message: p["message"],
            };
          }),
  };
}

export async function retrieve(
  context: Client,
  fineTuneId: string,
  options: FineTunesRetrieveOptionalParams = { requestOptions: {} },
): Promise<FineTune> {
  const result = await _retrieveSend(context, fineTuneId, options);
  return _retrieveDeserialize(result);
}

export function _listEventsSend(
  context: Client,
  fineTuneId: string,
  options: FineTunesListEventsOptionalParams = { requestOptions: {} },
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
  result: FineTunesListEvents200Response | FineTunesListEventsDefaultResponse,
): Promise<ListFineTuneEventsResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as FineTunesListEvents200Response;
  return {
    object: _result.body["object"],
    data: _result.body["data"].map((p) => {
      return {
        object: p["object"],
        createdAt: new Date(p["created_at"]),
        level: p["level"],
        message: p["message"],
      };
    }),
  };
}

export async function listEvents(
  context: Client,
  fineTuneId: string,
  options: FineTunesListEventsOptionalParams = { requestOptions: {} },
): Promise<ListFineTuneEventsResponse> {
  const result = await _listEventsSend(context, fineTuneId, options);
  return _listEventsDeserialize(result);
}

export function _cancelSend(
  context: Client,
  fineTuneId: string,
  options: FineTunesCancelOptionalParams = { requestOptions: {} },
): StreamableMethod<
  FineTunesCancel200Response | FineTunesCancelDefaultResponse
> {
  return context
    .path("/fine-tunes/{fine_tune_id}/cancel", fineTuneId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelDeserialize(
  result: FineTunesCancel200Response | FineTunesCancelDefaultResponse,
): Promise<FineTune> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as FineTunesCancel200Response;
  return {
    id: _result.body["id"],
    object: _result.body["object"],
    createdAt: new Date(_result.body["created_at"]),
    updatedAt: new Date(_result.body["updated_at"]),
    model: _result.body["model"],
    fineTunedModel: _result.body["fine_tuned_model"],
    organizationId: _result.body["organization_id"],
    status: _result.body["status"],
    hyperparams: {
      nEpochs: _result.body.hyperparams["n_epochs"],
      batchSize: _result.body.hyperparams["batch_size"],
      promptLossWeight: _result.body.hyperparams["prompt_loss_weight"],
      learningRateMultiplier:
        _result.body.hyperparams["learning_rate_multiplier"],
      computeClassificationMetrics:
        _result.body.hyperparams["compute_classification_metrics"],
      classificationPositiveClass:
        _result.body.hyperparams["classification_positive_class"],
      classificationNClasses:
        _result.body.hyperparams["classification_n_classes"],
    },
    trainingFiles: _result.body["training_files"].map((p) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        statusDetails: p["status_details"],
      };
    }),
    validationFiles: _result.body["validation_files"].map((p) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        statusDetails: p["status_details"],
      };
    }),
    resultFiles: _result.body["result_files"].map((p) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        statusDetails: p["status_details"],
      };
    }),
    events:
      _result.body["events"] === undefined
        ? _result.body["events"]
        : _result.body["events"].map((p) => {
            return {
              object: p["object"],
              createdAt: new Date(p["created_at"]),
              level: p["level"],
              message: p["message"],
            };
          }),
  };
}

export async function cancel(
  context: Client,
  fineTuneId: string,
  options: FineTunesCancelOptionalParams = { requestOptions: {} },
): Promise<FineTune> {
  const result = await _cancelSend(context, fineTuneId, options);
  return _cancelDeserialize(result);
}
