// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { JsonEncodedNameModel } from "../models/models.js";
import { JsonContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { SendOptionalParams, GetOptionalParams } from "../models/options.js";

export function _sendSend(
  context: Client,
  body: JsonEncodedNameModel,
  options: SendOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/serialization/encoded-name/json/property")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { wireName: body["defaultName"] },
    });
}

export async function _sendDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function send(
  context: Client,
  body: JsonEncodedNameModel,
  options: SendOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _sendSend(context, body, options);
  return _sendDeserialize(result);
}

export function _getSend(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/serialization/encoded-name/json/property")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<JsonEncodedNameModel> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    defaultName: result.body["wireName"],
  };
}

export async function get(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<JsonEncodedNameModel> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}
