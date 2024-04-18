// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpreadRecordForNonDiscriminatedUnion2 } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  SpreadRecordNonDiscriminatedUnion2Get200Response,
  SpreadRecordNonDiscriminatedUnion2Put204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  SpreadRecordNonDiscriminatedUnion2GetOptionalParams,
  SpreadRecordNonDiscriminatedUnion2PutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: SpreadRecordNonDiscriminatedUnion2GetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<SpreadRecordNonDiscriminatedUnion2Get200Response> {
  return context
    .path(
      "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion2",
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: SpreadRecordNonDiscriminatedUnion2Get200Response,
): Promise<SpreadRecordForNonDiscriminatedUnion2> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
  };
}

/** Get call */
export async function get(
  context: Client,
  options: SpreadRecordNonDiscriminatedUnion2GetOptionalParams = {
    requestOptions: {},
  },
): Promise<SpreadRecordForNonDiscriminatedUnion2> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: SpreadRecordForNonDiscriminatedUnion2,
  options: SpreadRecordNonDiscriminatedUnion2PutOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<SpreadRecordNonDiscriminatedUnion2Put204Response> {
  return context
    .path(
      "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion2",
    )
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: SpreadRecordNonDiscriminatedUnion2Put204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: SpreadRecordForNonDiscriminatedUnion2,
  options: SpreadRecordNonDiscriminatedUnion2PutOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
