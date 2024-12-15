// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  OpenAIContext as Client,
  FineTunesCancelOptionalParams,
  FineTunesCreateOptionalParams,
  FineTunesListEventsOptionalParams,
  FineTunesListOptionalParams,
  FineTunesRetrieveOptionalParams,
} from "../index.js";
import {
  CreateFineTuneRequest,
  createFineTuneRequestSerializer,
  FineTune,
  fineTuneDeserializer,
  ListFineTunesResponse,
  listFineTunesResponseDeserializer,
  ListFineTuneEventsResponse,
  listFineTuneEventsResponseDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _cancelSend(
  context: Client,
  fineTuneId: string,
  options: FineTunesCancelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/fine-tunes/{fine_tune_id}/cancel", fineTuneId)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json" },
    });
}

export async function _cancelDeserialize(
  result: PathUncheckedResponse,
): Promise<FineTune> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fineTuneDeserializer(result.body);
}

export async function cancel(
  context: Client,
  fineTuneId: string,
  options: FineTunesCancelOptionalParams = { requestOptions: {} },
): Promise<FineTune> {
  const result = await _cancelSend(context, fineTuneId, options);
  return _cancelDeserialize(result);
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
      headers: { accept: "application/json" },
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

  return listFineTuneEventsResponseDeserializer(result.body);
}

export async function listEvents(
  context: Client,
  fineTuneId: string,
  options: FineTunesListEventsOptionalParams = { requestOptions: {} },
): Promise<ListFineTuneEventsResponse> {
  const result = await _listEventsSend(context, fineTuneId, options);
  return _listEventsDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  fineTuneId: string,
  options: FineTunesRetrieveOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/fine-tunes/{fine_tune_id}", fineTuneId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json" },
    });
}

export async function _retrieveDeserialize(
  result: PathUncheckedResponse,
): Promise<FineTune> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fineTuneDeserializer(result.body);
}

export async function retrieve(
  context: Client,
  fineTuneId: string,
  options: FineTunesRetrieveOptionalParams = { requestOptions: {} },
): Promise<FineTune> {
  const result = await _retrieveSend(context, fineTuneId, options);
  return _retrieveDeserialize(result);
}

export function _listSend(
  context: Client,
  options: FineTunesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/fine-tunes")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json" },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<ListFineTunesResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return listFineTunesResponseDeserializer(result.body);
}

export async function list(
  context: Client,
  options: FineTunesListOptionalParams = { requestOptions: {} },
): Promise<ListFineTunesResponse> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}

export function _createSend(
  context: Client,
  fineTune: CreateFineTuneRequest,
  options: FineTunesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/fine-tunes")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json" },
      body: createFineTuneRequestSerializer(fineTune),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<FineTune> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return fineTuneDeserializer(result.body);
}

export async function create(
  context: Client,
  fineTune: CreateFineTuneRequest,
  options: FineTunesCreateOptionalParams = { requestOptions: {} },
): Promise<FineTune> {
  const result = await _createSend(context, fineTune, options);
  return _createDeserialize(result);
}
