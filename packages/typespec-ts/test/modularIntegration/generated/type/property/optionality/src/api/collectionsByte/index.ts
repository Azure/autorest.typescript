// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CollectionsByteProperty } from "../../models/models.js";
import {
  OptionalContext as Client,
  CollectionsByteGetAll200Response,
  CollectionsByteGetDefault200Response,
  CollectionsBytePutAll204Response,
  CollectionsBytePutDefault204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { stringToUint8Array, uint8ArrayToString } from "@azure/core-util";
import {
  CollectionsByteGetAllOptionalParams,
  CollectionsByteGetDefaultOptionalParams,
  CollectionsBytePutAllOptionalParams,
  CollectionsBytePutDefaultOptionalParams,
} from "../../models/options.js";

export function _getAllSend(
  context: Client,
  options: CollectionsByteGetAllOptionalParams = { requestOptions: {} },
): StreamableMethod<CollectionsByteGetAll200Response> {
  return context
    .path("/type/property/optional/collections/bytes/all")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAllDeserialize(
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
export async function getAll(
  context: Client,
  options: CollectionsByteGetAllOptionalParams = { requestOptions: {} },
): Promise<CollectionsByteProperty> {
  const result = await _getAllSend(context, options);
  return _getAllDeserialize(result);
}

export function _getDefaultSend(
  context: Client,
  options: CollectionsByteGetDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<CollectionsByteGetDefault200Response> {
  return context
    .path("/type/property/optional/collections/bytes/default")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDefaultDeserialize(
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
export async function getDefault(
  context: Client,
  options: CollectionsByteGetDefaultOptionalParams = { requestOptions: {} },
): Promise<CollectionsByteProperty> {
  const result = await _getDefaultSend(context, options);
  return _getDefaultDeserialize(result);
}

export function _putAllSend(
  context: Client,
  body: CollectionsByteProperty,
  options: CollectionsBytePutAllOptionalParams = { requestOptions: {} },
): StreamableMethod<CollectionsBytePutAll204Response> {
  return context
    .path("/type/property/optional/collections/bytes/all")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        property:
          body["property"] === undefined
            ? body["property"]
            : body["property"].map((p) => uint8ArrayToString(p, "base64")),
      },
    });
}

export async function _putAllDeserialize(
  result: CollectionsBytePutAll204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with all properties present. */
export async function putAll(
  context: Client,
  body: CollectionsByteProperty,
  options: CollectionsBytePutAllOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putAllSend(context, body, options);
  return _putAllDeserialize(result);
}

export function _putDefaultSend(
  context: Client,
  body: CollectionsByteProperty,
  options: CollectionsBytePutDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod<CollectionsBytePutDefault204Response> {
  return context
    .path("/type/property/optional/collections/bytes/default")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        property:
          body["property"] === undefined
            ? body["property"]
            : body["property"].map((p) => uint8ArrayToString(p, "base64")),
      },
    });
}

export async function _putDefaultDeserialize(
  result: CollectionsBytePutDefault204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put a body with default properties. */
export async function putDefault(
  context: Client,
  body: CollectionsByteProperty,
  options: CollectionsBytePutDefaultOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _putDefaultSend(context, body, options);
  return _putDefaultDeserialize(result);
}
