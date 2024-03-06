// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionsModelProperty } from "../../models/models.js";
import {
  CollectionsModelGet200Response,
  CollectionsModelPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CollectionsModelGetOptions,
  CollectionsModelPutOptions,
} from "../../models/options.js";

export function _collectionsModelGetSend(
  context: Client,
  options: CollectionsModelGetOptions = { requestOptions: {} },
): StreamableMethod<CollectionsModelGet200Response> {
  return context
    .path("/type/property/value-types/collections/model")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _collectionsModelGetDeserialize(
  result: CollectionsModelGet200Response,
): Promise<CollectionsModelProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"].map((p) => ({ property: p["property"] })),
  };
}

/** Get call */
export async function collectionsModelGet(
  context: Client,
  options: CollectionsModelGetOptions = { requestOptions: {} },
): Promise<CollectionsModelProperty> {
  const result = await _collectionsModelGetSend(context, options);
  return _collectionsModelGetDeserialize(result);
}

export function _collectionsModelPutSend(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPutOptions = { requestOptions: {} },
): StreamableMethod<CollectionsModelPut204Response> {
  return context
    .path("/type/property/value-types/collections/model")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        property: body["property"].map((p) => ({ property: p["property"] })),
      },
    });
}

export async function _collectionsModelPutDeserialize(
  result: CollectionsModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function collectionsModelPut(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPutOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _collectionsModelPutSend(context, body, options);
  return _collectionsModelPutDeserialize(result);
}
