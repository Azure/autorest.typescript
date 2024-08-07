// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  innerModelSerializer,
  CollectionsModelProperty,
} from "../../models/models.js";
import { ValueTypesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  CollectionsModelGetOptionalParams,
  CollectionsModelPutOptionalParams,
} from "../../models/options.js";

export function _collectionsModelGetSend(
  context: Client,
  options: CollectionsModelGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/collections/model")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _collectionsModelGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CollectionsModelProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    property: result.body["property"].map((p: any) => {
      return { property: p["property"] };
    }),
  };
}

/** Get call */
export async function collectionsModelGet(
  context: Client,
  options: CollectionsModelGetOptionalParams = { requestOptions: {} },
): Promise<CollectionsModelProperty> {
  const result = await _collectionsModelGetSend(context, options);
  return _collectionsModelGetDeserialize(result);
}

export function _collectionsModelPutSend(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPutOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/property/value-types/collections/model")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"].map(innerModelSerializer) },
    });
}

export async function _collectionsModelPutDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function collectionsModelPut(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _collectionsModelPutSend(context, body, options);
  return _collectionsModelPutDeserialize(result);
}
