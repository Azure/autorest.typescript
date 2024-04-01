// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DictionaryStringProperty } from "../../models/models.js";
import {
  DictionaryStringGet200Response,
  DictionaryStringPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DictionaryStringGetOptions,
  DictionaryStringPutOptions,
} from "../../models/options.js";

export function _dictionaryStringGetSend(
  context: Client,
  options: DictionaryStringGetOptions = { requestOptions: {} },
): StreamableMethod<DictionaryStringGet200Response> {
  return context
    .path("/type/property/value-types/dictionary/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dictionaryStringGetDeserialize(
  result: DictionaryStringGet200Response,
): Promise<DictionaryStringProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function dictionaryStringGet(
  context: Client,
  options: DictionaryStringGetOptions = { requestOptions: {} },
): Promise<DictionaryStringProperty> {
  const result = await _dictionaryStringGetSend(context, options);
  return _dictionaryStringGetDeserialize(result);
}

export function _dictionaryStringPutSend(
  context: Client,
  body: DictionaryStringProperty,
  options: DictionaryStringPutOptions = { requestOptions: {} },
): StreamableMethod<DictionaryStringPut204Response> {
  return context
    .path("/type/property/value-types/dictionary/string")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _dictionaryStringPutDeserialize(
  result: DictionaryStringPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function dictionaryStringPut(
  context: Client,
  body: DictionaryStringProperty,
  options: DictionaryStringPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _dictionaryStringPutSend(context, body, options);
  return _dictionaryStringPutDeserialize(result);
}
