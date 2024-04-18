// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { WidgetData } from "../../models/models.js";
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
): Promise<Record<string, WidgetData>> {
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
  options: SpreadRecordDiscriminatedUnionGetOptionalParams = {
    requestOptions: {},
  },
): Promise<Record<string, WidgetData>> {
  const result = await _getSend(context, options);
  return _getDeserialize(result);
}

export function _putSend(
  context: Client,
  body: Record<string, WidgetData>,
  options: SpreadRecordDiscriminatedUnionPutOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<SpreadRecordDiscriminatedUnionPut204Response> {
  return context
    .path("/type/property/additionalProperties/spreadRecordDiscriminatedUnion")
    .put({ ...operationOptionsToRequestParameters(options), body: body });
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
  body: Record<string, WidgetData>,
  options: SpreadRecordDiscriminatedUnionPutOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _putSend(context, body, options);
  return _putDeserialize(result);
}
