// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateFineTuneRequest,
  FineTune,
  ListFineTunesResponse,
  ListFineTuneEventsResponse,
} from "../../models/models.js";
import {
  serializeCreateFineTuneRequest,
  deserializeFineTune,
  deserializeListFineTunesResponse,
  deserializeListFineTuneEventsResponse,
} from "../../utils/serializeUtil.js";
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
): StreamableMethod<
  FineTunesCreate200Response | FineTunesCreateDefaultResponse
> {
  return context
    .path("/fine-tunes")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: serializeCreateFineTuneRequest(fineTune),
    });
}

export async function _createDeserialize(
  result: FineTunesCreate200Response | FineTunesCreateDefaultResponse,
): Promise<FineTune> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeFineTune(result.body);
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

  return deserializeListFineTunesResponse(result.body);
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

  return deserializeFineTune(result.body);
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
      queryParameters: options?.stream,
    });
}

export async function _listEventsDeserialize(
  result: FineTunesListEvents200Response | FineTunesListEventsDefaultResponse,
): Promise<ListFineTuneEventsResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeListFineTuneEventsResponse(result.body);
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

  return deserializeFineTune(result.body);
}

export async function cancel(
  context: Client,
  fineTuneId: string,
  options: FineTunesCancelOptionalParams = { requestOptions: {} },
): Promise<FineTune> {
  const result = await _cancelSend(context, fineTuneId, options);
  return _cancelDeserialize(result);
}
