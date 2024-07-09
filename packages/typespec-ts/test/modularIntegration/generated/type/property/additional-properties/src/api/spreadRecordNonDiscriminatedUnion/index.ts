// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpreadRecordForNonDiscriminatedUnion } from "../../models/models.js";
import {
  AdditionalPropertiesContext as Client,
  SpreadRecordNonDiscriminatedUnionGet200Response,
  SpreadRecordNonDiscriminatedUnionPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  SpreadRecordNonDiscriminatedUnionGetOptionalParams,
  SpreadRecordNonDiscriminatedUnionPutOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  options: SpreadRecordNonDiscriminatedUnionGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<SpreadRecordNonDiscriminatedUnionGet200Response> {
  return context
    .path(
      "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion",
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: SpreadRecordNonDiscriminatedUnionGet200Response,
): Promise<SpreadRecordForNonDiscriminatedUnion> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result =
    result as unknown as SpreadRecordNonDiscriminatedUnionGet200Response;
  return _result.body as any;
}

/** Get call */
export async function get(
  context: Client,
  options: SpreadRecordNonDiscriminatedUnionGetOptionalParams = {
    requestOptions: {},
  },
): Promise<SpreadRecordForNonDiscriminatedUnion> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: SpreadRecordForNonDiscriminatedUnion,
  options: SpreadRecordNonDiscriminatedUnionPutOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<SpreadRecordNonDiscriminatedUnionPut204Response> {
  return context
    .path(
      "/type/property/additionalProperties/spreadRecordNonDiscriminatedUnion",
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: serializeRecord(body as any) as any,
    });
}

export async function _putDeserialize(
  result: SpreadRecordNonDiscriminatedUnionPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function put(
  context: Client,
  body: SpreadRecordForNonDiscriminatedUnion,
  options: SpreadRecordNonDiscriminatedUnionPutOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
