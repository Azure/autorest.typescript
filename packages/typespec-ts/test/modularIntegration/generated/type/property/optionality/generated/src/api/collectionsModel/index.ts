// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionsModelProperty } from "../../models/models.js";
import {
  CollectionsModelGetAll200Response,
  CollectionsModelGetDefault200Response,
  CollectionsModelPutAll204Response,
  CollectionsModelPutDefault204Response,
  OptionalContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CollectionsModelGetAllOptionalParams,
  CollectionsModelGetDefaultOptionalParams,
  CollectionsModelPutAllOptionalParams,
  CollectionsModelPutDefaultOptionalParams,
} from "../../models/options.js";

export function _collectionsModelGetAllSend(
  context: Client,
  options: CollectionsModelGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<CollectionsModelGetAll200Response> {
  return context
    .path("/type/property/optional/collections/model/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _collectionsModelGetAllDeserialize(
  result: CollectionsModelGetAll200Response,
): Promise<CollectionsModelProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property:
      result.body["property"] === undefined
        ? result.body["property"]
        : result.body["property"].map((p) => ({ property: p["property"] })),
  };
}

/** Get models that will return all properties in the model */
export async function collectionsModelGetAll(
  context: Client,
  options: CollectionsModelGetAllOptionalParams = { requestOptions: {} },
): Promise<CollectionsModelProperty> {
  const result = await _collectionsModelGetAllSend(context, options);
  return _collectionsModelGetAllDeserialize(result);
}

export function _collectionsModelGetDefaultSend(
  context: Client,
  options: CollectionsModelGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<CollectionsModelGetDefault200Response> {
  return context
    .path("/type/property/optional/collections/model/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _collectionsModelGetDefaultDeserialize(
  result: CollectionsModelGetDefault200Response,
): Promise<CollectionsModelProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property:
      result.body["property"] === undefined
        ? result.body["property"]
        : result.body["property"].map((p) => ({ property: p["property"] })),
  };
}

/** Get models that will return the default object */
export async function collectionsModelGetDefault(
  context: Client,
  options: CollectionsModelGetDefaultOptionalParams = { requestOptions: {} },
): Promise<CollectionsModelProperty> {
  const result = await _collectionsModelGetDefaultSend(context, options);
  return _collectionsModelGetDefaultDeserialize(result);
}

export function _collectionsModelPutAllSend(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPutAllOptionalParams = { requestOptions: {} },
): StreamableMethod<CollectionsModelPutAll204Response> {
  return context
    .path("/type/property/optional/collections/model/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        property:
          body["property"] === undefined
            ? body["property"]
            : body["property"].map((p) => ({ property: p["property"] })),
      },
    });
}

export async function _collectionsModelPutAllDeserialize(
  result: CollectionsModelPutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function collectionsModelPutAll(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _collectionsModelPutAllSend(context, body, options);
  return _collectionsModelPutAllDeserialize(result);
}

export function _collectionsModelPutDefaultSend(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPutDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<CollectionsModelPutDefault204Response> {
  return context
    .path("/type/property/optional/collections/model/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        property:
          body["property"] === undefined
            ? body["property"]
            : body["property"].map((p) => ({ property: p["property"] })),
      },
    });
}

export async function _collectionsModelPutDefaultDeserialize(
  result: CollectionsModelPutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function collectionsModelPutDefault(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _collectionsModelPutDefaultSend(context, body, options);
  return _collectionsModelPutDefaultDeserialize(result);
}
