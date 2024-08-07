// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionsStringProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  CollectionsStringGetOptionalParams,
  CollectionsStringPutOptionalParams,
} from "../../models/options.js";

export function _collectionsStringGetSend(
  context: Client,
  options: CollectionsStringGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/collections/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _collectionsStringGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CollectionsStringProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function collectionsStringGet(
  context: Client,
  options: CollectionsStringGetOptionalParams = { requestOptions: {} },
): Promise<CollectionsStringProperty> {
  const result = await _collectionsStringGetSend(context, options);
  return _collectionsStringGetDeserialize(result);
}

export function _collectionsStringPutSend(
  context: Client,
  body: CollectionsStringProperty,
  options: CollectionsStringPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/collections/string")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _collectionsStringPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function collectionsStringPut(
  context: Client,
  body: CollectionsStringProperty,
  options: CollectionsStringPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _collectionsStringPutSend(context, body, options);
  return _collectionsStringPutDeserialize(result);
}
