// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionsStringProperty } from "../../models/models.js";
import {
  CollectionsStringGet200Response,
  CollectionsStringPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CollectionsStringGetOptions,
  CollectionsStringPutOptions,
} from "../../models/options.js";

export function _collectionsStringGetSend(
  context: Client,
  options: CollectionsStringGetOptions = { requestOptions: {} },
): StreamableMethod<CollectionsStringGet200Response> {
  return context
    .path("/type/property/value-types/collections/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _collectionsStringGetDeserialize(
  result: CollectionsStringGet200Response,
): Promise<CollectionsStringProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function collectionsStringGet(
  context: Client,
  options: CollectionsStringGetOptions = { requestOptions: {} },
): Promise<CollectionsStringProperty> {
  const result = await _collectionsStringGetSend(context, options);
  return _collectionsStringGetDeserialize(result);
}

export function _collectionsStringPutSend(
  context: Client,
  body: CollectionsStringProperty,
  options: CollectionsStringPutOptions = { requestOptions: {} },
): StreamableMethod<CollectionsStringPut204Response> {
  return context
    .path("/type/property/value-types/collections/string")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _collectionsStringPutDeserialize(
  result: CollectionsStringPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function collectionsStringPut(
  context: Client,
  body: CollectionsStringProperty,
  options: CollectionsStringPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _collectionsStringPutSend(context, body, options);
  return _collectionsStringPutDeserialize(result);
}
