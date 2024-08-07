// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryStringProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  DictionaryStringGetOptionalParams,
  DictionaryStringPutOptionalParams,
} from "../../models/options.js";

export function _dictionaryStringGetSend(
  context: Client,
  options: DictionaryStringGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/dictionary/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dictionaryStringGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DictionaryStringProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function dictionaryStringGet(
  context: Client,
  options: DictionaryStringGetOptionalParams = { requestOptions: {} },
): Promise<DictionaryStringProperty> {
  const result = await _dictionaryStringGetSend(context, options);
  return _dictionaryStringGetDeserialize(result);
}

export function _dictionaryStringPutSend(
  context: Client,
  body: DictionaryStringProperty,
  options: DictionaryStringPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/dictionary/string")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: serializeRecord(body.property as any) as any },
    });
}

export async function _dictionaryStringPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function dictionaryStringPut(
  context: Client,
  body: DictionaryStringProperty,
  options: DictionaryStringPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _dictionaryStringPutSend(context, body, options);
  return _dictionaryStringPutDeserialize(result);
}
