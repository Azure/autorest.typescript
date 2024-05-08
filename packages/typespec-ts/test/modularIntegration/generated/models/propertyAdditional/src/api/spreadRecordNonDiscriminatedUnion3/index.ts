// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpreadRecordForNonDiscriminatedUnion3 } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  SpreadRecordNonDiscriminatedUnion3Get200Response,
  SpreadRecordNonDiscriminatedUnion3Put204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  SpreadRecordNonDiscriminatedUnion3GetOptionalParams,
  SpreadRecordNonDiscriminatedUnion3PutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: SpreadRecordNonDiscriminatedUnion3GetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<SpreadRecordNonDiscriminatedUnion3Get200Response> {
  return context
    .path(
      "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion3",
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: SpreadRecordNonDiscriminatedUnion3Get200Response,
): Promise<SpreadRecordForNonDiscriminatedUnion3> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return result.body;
}

/** Get call */
export async function get(
  context: Client,
  options: SpreadRecordNonDiscriminatedUnion3GetOptionalParams = {
    requestOptions: {},
  },
): Promise<SpreadRecordForNonDiscriminatedUnion3> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: SpreadRecordForNonDiscriminatedUnion3,
  options: SpreadRecordNonDiscriminatedUnion3PutOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<SpreadRecordNonDiscriminatedUnion3Put204Response> {
  return context
    .path(
      "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion3",
    )
    .put({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _putDeserialize(
  result: SpreadRecordNonDiscriminatedUnion3Put204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: SpreadRecordForNonDiscriminatedUnion3,
  options: SpreadRecordNonDiscriminatedUnion3PutOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
