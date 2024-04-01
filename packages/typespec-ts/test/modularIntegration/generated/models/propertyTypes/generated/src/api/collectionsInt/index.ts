// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionsIntProperty } from "../../models/models.js";
import {
  CollectionsIntGet200Response,
  CollectionsIntPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CollectionsIntGetOptions,
  CollectionsIntPutOptions,
} from "../../models/options.js";

export function _collectionsIntGetSend(
  context: Client,
  options: CollectionsIntGetOptions = { requestOptions: {} },
): StreamableMethod<CollectionsIntGet200Response> {
  return context
    .path("/type/property/value-types/collections/int")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _collectionsIntGetDeserialize(
  result: CollectionsIntGet200Response,
): Promise<CollectionsIntProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"],
  };
}

/** Get call */
export async function collectionsIntGet(
  context: Client,
  options: CollectionsIntGetOptions = { requestOptions: {} },
): Promise<CollectionsIntProperty> {
  const result = await _collectionsIntGetSend(context, options);
  return _collectionsIntGetDeserialize(result);
}

export function _collectionsIntPutSend(
  context: Client,
  body: CollectionsIntProperty,
  options: CollectionsIntPutOptions = { requestOptions: {} },
): StreamableMethod<CollectionsIntPut204Response> {
  return context
    .path("/type/property/value-types/collections/int")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _collectionsIntPutDeserialize(
  result: CollectionsIntPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function collectionsIntPut(
  context: Client,
  body: CollectionsIntProperty,
  options: CollectionsIntPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _collectionsIntPutSend(context, body, options);
  return _collectionsIntPutDeserialize(result);
}
