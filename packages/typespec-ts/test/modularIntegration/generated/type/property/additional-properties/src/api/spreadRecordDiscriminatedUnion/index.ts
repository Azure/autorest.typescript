// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpreadRecordForDiscriminatedUnion } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  SpreadRecordDiscriminatedUnionGet200Response,
  SpreadRecordDiscriminatedUnionPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
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
): StreamableMethod<SpreadRecordDiscriminatedUnionGet200Response> {
  return context
    .path("/type/property/additionalProperties/spreadRecordDiscriminatedUnion")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: SpreadRecordDiscriminatedUnionGet200Response,
): Promise<SpreadRecordForDiscriminatedUnion> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result =
    result as unknown as SpreadRecordDiscriminatedUnionGet200Response;
  return _result.body as any;
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
): StreamableMethod<SpreadRecordDiscriminatedUnionPut204Response> {
  return context
    .path("/type/property/additionalProperties/spreadRecordDiscriminatedUnion")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any) as any,
    });
}

export async function _putDeserialize(
  result: SpreadRecordDiscriminatedUnionPut204Response,
): Promise<void> {
  if (result.status !== "204") {
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
