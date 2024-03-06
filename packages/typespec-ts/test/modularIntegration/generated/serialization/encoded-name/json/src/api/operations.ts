// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { JsonEncodedNameModel } from "../models/models.js";
import {
  Get200Response,
  JsonContext as Client,
  Send204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { SendOptions, GetOptions } from "../models/options.js";

export function _sendSend(
  context: Client,
  body: JsonEncodedNameModel,
  options: SendOptions = { requestOptions: {} },
): StreamableMethod<Send204Response> {
  return context
    .path("/serialization/encoded-name/json/property")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { wireName: body["defaultName"] },
    });
}

export async function _sendDeserialize(result: Send204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function send(
  context: Client,
  body: JsonEncodedNameModel,
  options: SendOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _sendSend(context, body, options);
  return _sendDeserialize(result);
}

export function _getSend(
  context: Client,
  options: GetOptions = { requestOptions: {} },
): StreamableMethod<Get200Response> {
  return context
    .path("/serialization/encoded-name/json/property")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: Get200Response,
): Promise<JsonEncodedNameModel> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    defaultName: result.body["wireName"],
  };
}

export async function get(
  context: Client,
  options: GetOptions = { requestOptions: {} },
): Promise<JsonEncodedNameModel> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}
