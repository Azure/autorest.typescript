// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OpenAIContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  CreateFineTuneRequest,
  FineTune,
  ListFineTunesResponse,
  ListFineTuneEventsResponse,
} from "../../models/models.js";
import {
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
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
): StreamableMethod {
  return context
    .path("/fine-tunes")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        training_file: fineTune["training_file"],
        validation_file: fineTune["validation_file"],
        model: fineTune["model"],
        n_epochs: fineTune["n_epochs"],
        batch_size: fineTune["batch_size"],
        learning_rate_multiplier: fineTune["learning_rate_multiplier"],
        prompt_loss_rate: fineTune["prompt_loss_rate"],
        compute_classification_metrics:
          fineTune["compute_classification_metrics"],
        classification_n_classes: fineTune["classification_n_classes"],
        classification_positive_class:
          fineTune["classification_positive_class"],
        classification_betas: fineTune["classification_betas"],
        suffix: fineTune["suffix"],
      },
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<FineTune> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created_at: new Date(result.body["created_at"]),
    updated_at: new Date(result.body["updated_at"]),
    model: result.body["model"],
    fine_tuned_model: result.body["fine_tuned_model"],
    organization_id: result.body["organization_id"],
    status: result.body["status"],
    hyperparams: {
      n_epochs: result.body.hyperparams["n_epochs"],
      batch_size: result.body.hyperparams["batch_size"],
      prompt_loss_weight: result.body.hyperparams["prompt_loss_weight"],
      learning_rate_multiplier:
        result.body.hyperparams["learning_rate_multiplier"],
      compute_classification_metrics:
        result.body.hyperparams["compute_classification_metrics"],
      classification_positive_class:
        result.body.hyperparams["classification_positive_class"],
      classification_n_classes:
        result.body.hyperparams["classification_n_classes"],
    },
    training_files: result.body["training_files"].map((p: any) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        status_details: p["status_details"],
      };
    }),
    validation_files: result.body["validation_files"].map((p: any) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        status_details: p["status_details"],
      };
    }),
    result_files: result.body["result_files"].map((p: any) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        status_details: p["status_details"],
      };
    }),
    events:
      result.body["events"] === undefined
        ? result.body["events"]
        : result.body["events"].map((p: any) => {
            return {
              object: p["object"],
              created_at: new Date(p["created_at"]),
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
): StreamableMethod {
  return context
    .path("/fine-tunes")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<ListFineTunesResponse> {
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
        updated_at: new Date(p["updated_at"]),
        model: p["model"],
        fine_tuned_model: p["fine_tuned_model"],
        organization_id: p["organization_id"],
        status: p["status"],
        hyperparams: {
          n_epochs: p.hyperparams["n_epochs"],
          batch_size: p.hyperparams["batch_size"],
          prompt_loss_weight: p.hyperparams["prompt_loss_weight"],
          learning_rate_multiplier: p.hyperparams["learning_rate_multiplier"],
          compute_classification_metrics:
            p.hyperparams["compute_classification_metrics"],
          classification_positive_class:
            p.hyperparams["classification_positive_class"],
          classification_n_classes: p.hyperparams["classification_n_classes"],
        },
        training_files: p["training_files"].map((p: any) => {
          return {
            id: p["id"],
            object: p["object"],
            bytes: p["bytes"],
            createdAt: new Date(p["createdAt"]),
            filename: p["filename"],
            purpose: p["purpose"],
            status: p["status"],
            status_details: p["status_details"],
          };
        }),
        validation_files: p["validation_files"].map((p: any) => {
          return {
            id: p["id"],
            object: p["object"],
            bytes: p["bytes"],
            createdAt: new Date(p["createdAt"]),
            filename: p["filename"],
            purpose: p["purpose"],
            status: p["status"],
            status_details: p["status_details"],
          };
        }),
        result_files: p["result_files"].map((p: any) => {
          return {
            id: p["id"],
            object: p["object"],
            bytes: p["bytes"],
            createdAt: new Date(p["createdAt"]),
            filename: p["filename"],
            purpose: p["purpose"],
            status: p["status"],
            status_details: p["status_details"],
          };
        }),
        events:
          p["events"] === undefined
            ? p["events"]
            : p["events"].map((p: any) => {
                return {
                  object: p["object"],
                  created_at: new Date(p["created_at"]),
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
): StreamableMethod {
  return context
    .path("/fine-tunes/{fine_tune_id}", fineTuneId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: PathUncheckedResponse,
): Promise<FineTune> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created_at: new Date(result.body["created_at"]),
    updated_at: new Date(result.body["updated_at"]),
    model: result.body["model"],
    fine_tuned_model: result.body["fine_tuned_model"],
    organization_id: result.body["organization_id"],
    status: result.body["status"],
    hyperparams: {
      n_epochs: result.body.hyperparams["n_epochs"],
      batch_size: result.body.hyperparams["batch_size"],
      prompt_loss_weight: result.body.hyperparams["prompt_loss_weight"],
      learning_rate_multiplier:
        result.body.hyperparams["learning_rate_multiplier"],
      compute_classification_metrics:
        result.body.hyperparams["compute_classification_metrics"],
      classification_positive_class:
        result.body.hyperparams["classification_positive_class"],
      classification_n_classes:
        result.body.hyperparams["classification_n_classes"],
    },
    training_files: result.body["training_files"].map((p: any) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        status_details: p["status_details"],
      };
    }),
    validation_files: result.body["validation_files"].map((p: any) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        status_details: p["status_details"],
      };
    }),
    result_files: result.body["result_files"].map((p: any) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        status_details: p["status_details"],
      };
    }),
    events:
      result.body["events"] === undefined
        ? result.body["events"]
        : result.body["events"].map((p: any) => {
            return {
              object: p["object"],
              created_at: new Date(p["created_at"]),
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
): StreamableMethod {
  return context
    .path("/fine-tunes/{fine_tune_id}/events", fineTuneId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { stream: options?.stream },
    });
}

export async function _listEventsDeserialize(
  result: PathUncheckedResponse,
): Promise<ListFineTuneEventsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    object: result.body["object"],
    data: result.body["data"].map((p: any) => {
      return {
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
): StreamableMethod {
  return context
    .path("/fine-tunes/{fine_tune_id}/cancel", fineTuneId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelDeserialize(
  result: PathUncheckedResponse,
): Promise<FineTune> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created_at: new Date(result.body["created_at"]),
    updated_at: new Date(result.body["updated_at"]),
    model: result.body["model"],
    fine_tuned_model: result.body["fine_tuned_model"],
    organization_id: result.body["organization_id"],
    status: result.body["status"],
    hyperparams: {
      n_epochs: result.body.hyperparams["n_epochs"],
      batch_size: result.body.hyperparams["batch_size"],
      prompt_loss_weight: result.body.hyperparams["prompt_loss_weight"],
      learning_rate_multiplier:
        result.body.hyperparams["learning_rate_multiplier"],
      compute_classification_metrics:
        result.body.hyperparams["compute_classification_metrics"],
      classification_positive_class:
        result.body.hyperparams["classification_positive_class"],
      classification_n_classes:
        result.body.hyperparams["classification_n_classes"],
    },
    training_files: result.body["training_files"].map((p: any) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        status_details: p["status_details"],
      };
    }),
    validation_files: result.body["validation_files"].map((p: any) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        status_details: p["status_details"],
      };
    }),
    result_files: result.body["result_files"].map((p: any) => {
      return {
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"],
        status_details: p["status_details"],
      };
    }),
    events:
      result.body["events"] === undefined
        ? result.body["events"]
        : result.body["events"].map((p: any) => {
            return {
              object: p["object"],
              created_at: new Date(p["created_at"]),
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
