// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionsByteProperty } from "../../models/models.js";
import {
  CollectionsByteGetAll200Response,
  CollectionsByteGetDefault200Response,
  CollectionsBytePutAll204Response,
  CollectionsBytePutDefault204Response,
  OptionalContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array, uint8ArrayToString } from "@azure/core-util";
import {
  CollectionsByteGetAllOptions,
  CollectionsByteGetDefaultOptions,
  CollectionsBytePutAllOptions,
  CollectionsBytePutDefaultOptions,
} from "../../models/options.js";

export function _collectionsByteGetAllSend(
  context: Client,
  options: CollectionsByteGetAllOptions = { requestOptions: {} },
): StreamableMethod<CollectionsByteGetAll200Response> {
  return context
    .path("/type/property/optional/collections/bytes/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _collectionsByteGetAllDeserialize(
  result: CollectionsByteGetAll200Response,
): Promise<CollectionsByteProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property:
      result.body["property"] === undefined
        ? result.body["property"]
        : result.body["property"].map((p) =>
            typeof p === "string" ? stringToUint8Array(p, "base64") : p,
          ),
  };
}

/** Get models that will return all properties in the model */
export async function collectionsByteGetAll(
  context: Client,
  options: CollectionsByteGetAllOptions = { requestOptions: {} },
): Promise<CollectionsByteProperty> {
  const result = await _collectionsByteGetAllSend(context, options);
  return _collectionsByteGetAllDeserialize(result);
}

export function _collectionsByteGetDefaultSend(
  context: Client,
  options: CollectionsByteGetDefaultOptions = { requestOptions: {} },
): StreamableMethod<CollectionsByteGetDefault200Response> {
  return context
    .path("/type/property/optional/collections/bytes/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _collectionsByteGetDefaultDeserialize(
  result: CollectionsByteGetDefault200Response,
): Promise<CollectionsByteProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property:
      result.body["property"] === undefined
        ? result.body["property"]
        : result.body["property"].map((p) =>
            typeof p === "string" ? stringToUint8Array(p, "base64") : p,
          ),
  };
}

/** Get models that will return the default object */
export async function collectionsByteGetDefault(
  context: Client,
  options: CollectionsByteGetDefaultOptions = { requestOptions: {} },
): Promise<CollectionsByteProperty> {
  const result = await _collectionsByteGetDefaultSend(context, options);
  return _collectionsByteGetDefaultDeserialize(result);
}

export function _collectionsBytePutAllSend(
  context: Client,
  body: CollectionsByteProperty,
  options: CollectionsBytePutAllOptions = { requestOptions: {} },
): StreamableMethod<CollectionsBytePutAll204Response> {
  return context
    .path("/type/property/optional/collections/bytes/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        property:
          body["property"] === undefined
            ? body["property"]
            : body["property"].map((p) =>
                p !== undefined ? uint8ArrayToString(p, "base64") : undefined,
              ),
      },
    });
}

export async function _collectionsBytePutAllDeserialize(
  result: CollectionsBytePutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function collectionsBytePutAll(
  context: Client,
  body: CollectionsByteProperty,
  options: CollectionsBytePutAllOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _collectionsBytePutAllSend(context, body, options);
  return _collectionsBytePutAllDeserialize(result);
}

export function _collectionsBytePutDefaultSend(
  context: Client,
  body: CollectionsByteProperty,
  options: CollectionsBytePutDefaultOptions = { requestOptions: {} },
): StreamableMethod<CollectionsBytePutDefault204Response> {
  return context
    .path("/type/property/optional/collections/bytes/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        property:
          body["property"] === undefined
            ? body["property"]
            : body["property"].map((p) =>
                p !== undefined ? uint8ArrayToString(p, "base64") : undefined,
              ),
      },
    });
}

export async function _collectionsBytePutDefaultDeserialize(
  result: CollectionsBytePutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function collectionsBytePutDefault(
  context: Client,
  body: CollectionsByteProperty,
  options: CollectionsBytePutDefaultOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _collectionsBytePutDefaultSend(context, body, options);
  return _collectionsBytePutDefaultDeserialize(result);
}
