// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpreadRecordForDiscriminatedUnion } from "../../models/models.js";
import { AdditionalPropertiesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  SpreadRecordDiscriminatedUnionGetOptionalParams,
  SpreadRecordDiscriminatedUnionPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: SpreadRecordDiscriminatedUnionGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/type/property/additionalProperties/spreadRecordDiscriminatedUnion")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<SpreadRecordForDiscriminatedUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return result.body as any;
}

/** Get call */
export async function get(
  context: Client,
  options: SpreadRecordDiscriminatedUnionGetOptionalParams = {
    requestOptions: {},
  },
): Promise<SpreadRecordForDiscriminatedUnion> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: SpreadRecordForDiscriminatedUnion,
  options: SpreadRecordDiscriminatedUnionPutOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/type/property/additionalProperties/spreadRecordDiscriminatedUnion")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any) as any,
    });
}

export async function _putDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: SpreadRecordForDiscriminatedUnion,
  options: SpreadRecordDiscriminatedUnionPutOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
