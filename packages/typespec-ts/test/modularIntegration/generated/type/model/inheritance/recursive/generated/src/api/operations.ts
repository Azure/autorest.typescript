// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { extensionSerializer, Extension } from "../models/models.js";
import {
  RecursiveContext as Client,
  Get200Response,
  Put204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { PutOptionalParams, GetOptionalParams } from "../models/options.js";

export function _putSend(
  context: Client,
  input: Extension,
  options: PutOptionalParams = { requestOptions: {} },
): StreamableMethod<Put204Response> {
  return context
    .path("/type/model/inheritance/recursive")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        extension:
          input["extension"] === undefined
            ? input["extension"]
            : input["extension"].map(extensionSerializer),
        level: input["level"],
      },
    });
}

export async function _putDeserialize(result: Put204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function put(
  context: Client,
  input: Extension,
  options: PutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, input, options);
  return _putDeserialize(result);
}

export function _getSend(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} },
): StreamableMethod<Get200Response> {
  return context
    .path("/type/model/inheritance/recursive")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: Get200Response,
): Promise<Extension> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    extension:
      result.body["extension"] === undefined
        ? result.body["extension"]
        : result.body["extension"].map((p) => {
            return {
              extension: !p.extension ? undefined : p.extension,
              level: p["level"],
            };
          }),
    level: result.body["level"],
  };
}

export async function get(
  context: Client,
  options: GetOptionalParams = { requestOptions: {} },
): Promise<Extension> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}
