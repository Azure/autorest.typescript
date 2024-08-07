// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionsIntProperty } from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  CollectionsIntGetOptionalParams,
  CollectionsIntPutOptionalParams,
} from "../../models/options.js";

export function _collectionsIntGetSend(
  context: Client,
  options: CollectionsIntGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/collections/int")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _collectionsIntGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CollectionsIntProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function collectionsIntGet(
  context: Client,
  options: CollectionsIntGetOptionalParams = { requestOptions: {} },
): Promise<CollectionsIntProperty> {
  const result = await _collectionsIntGetSend(context, options);
  return _collectionsIntGetDeserialize(result);
}

export function _collectionsIntPutSend(
  context: Client,
  body: CollectionsIntProperty,
  options: CollectionsIntPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/collections/int")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _collectionsIntPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function collectionsIntPut(
  context: Client,
  body: CollectionsIntProperty,
  options: CollectionsIntPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _collectionsIntPutSend(context, body, options);
  return _collectionsIntPutDeserialize(result);
}
