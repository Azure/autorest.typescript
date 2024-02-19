// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Extension } from "../models/models.js";
import {
  Get200Response,
  Put204Response,
  RecursiveContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { PutOptions, GetOptions } from "../models/options.js";

export function _putSend(
  context: Client,
  input: Extension,
  options: PutOptions = { requestOptions: {} },
): StreamableMethod<Put204Response> {
  return context
    .path("/type/model/inheritance/recursive")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        extension: !input["extension"]
          ? input["extension"]
          : input["extension"].map((p) => ({
              extension: !p.extension ? undefined : p.extension,
              level: p["level"],
            })),
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
  options: PutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _putSend(context, input, options);
  return _putDeserialize(result);
}

export function _getSend(
  context: Client,
  options: GetOptions = { requestOptions: {} },
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
    extension: !result.body["extension"]
      ? result.body["extension"]
      : result.body["extension"].map((p) => ({
          extension: !p.extension ? undefined : p.extension,
          level: p["level"],
        })),
    level: result.body["level"],
  };
}

export async function get(
  context: Client,
  options: GetOptions = { requestOptions: {} },
): Promise<Extension> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}
