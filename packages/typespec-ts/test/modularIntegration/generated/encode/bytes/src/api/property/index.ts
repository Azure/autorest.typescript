// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DefaultBytesProperty,
  Base64BytesProperty,
  Base64urlBytesProperty,
  Base64urlArrayBytesProperty,
} from "../../models/models.js";
import { BytesContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
import {
  PropertyDefaultOptionalParams,
  PropertyBase64OptionalParams,
  PropertyBase64urlOptionalParams,
  PropertyBase64urlArrayOptionalParams,
} from "../../models/options.js";

export function _propertyDefaultSend(
  context: Client,
  body: DefaultBytesProperty,
  options: PropertyDefaultOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/bytes/property/default")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: uint8ArrayToString(body["value"], "base64") },
    });
}

export async function _propertyDefaultDeserialize(
  result: PathUncheckedResponse,
): Promise<DefaultBytesProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      typeof result.body["value"] === "string"
        ? stringToUint8Array(result.body["value"], "base64")
        : result.body["value"],
  };
}

export async function propertyDefault(
  context: Client,
  body: DefaultBytesProperty,
  options: PropertyDefaultOptionalParams = { requestOptions: {} },
): Promise<DefaultBytesProperty> {
  const result = await _propertyDefaultSend(context, body, options);
  return _propertyDefaultDeserialize(result);
}

export function _propertyBase64Send(
  context: Client,
  body: Base64BytesProperty,
  options: PropertyBase64OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/bytes/property/base64")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: uint8ArrayToString(body["value"], "base64") },
    });
}

export async function _propertyBase64Deserialize(
  result: PathUncheckedResponse,
): Promise<Base64BytesProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      typeof result.body["value"] === "string"
        ? stringToUint8Array(result.body["value"], "base64")
        : result.body["value"],
  };
}

export async function propertyBase64(
  context: Client,
  body: Base64BytesProperty,
  options: PropertyBase64OptionalParams = { requestOptions: {} },
): Promise<Base64BytesProperty> {
  const result = await _propertyBase64Send(context, body, options);
  return _propertyBase64Deserialize(result);
}

export function _propertyBase64urlSend(
  context: Client,
  body: Base64urlBytesProperty,
  options: PropertyBase64urlOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/bytes/property/base64url")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: uint8ArrayToString(body["value"], "base64url") },
    });
}

export async function _propertyBase64urlDeserialize(
  result: PathUncheckedResponse,
): Promise<Base64urlBytesProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value:
      typeof result.body["value"] === "string"
        ? stringToUint8Array(result.body["value"], "base64url")
        : result.body["value"],
  };
}

export async function propertyBase64url(
  context: Client,
  body: Base64urlBytesProperty,
  options: PropertyBase64urlOptionalParams = { requestOptions: {} },
): Promise<Base64urlBytesProperty> {
  const result = await _propertyBase64urlSend(context, body, options);
  return _propertyBase64urlDeserialize(result);
}

export function _propertyBase64urlArraySend(
  context: Client,
  body: Base64urlArrayBytesProperty,
  options: PropertyBase64urlArrayOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/encode/bytes/property/base64url-array")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        value: body["value"].map((p) => uint8ArrayToString(p, "base64url")),
      },
    });
}

export async function _propertyBase64urlArrayDeserialize(
  result: PathUncheckedResponse,
): Promise<Base64urlArrayBytesProperty> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) =>
      typeof p === "string" ? stringToUint8Array(p, "base64url") : p,
    ),
  };
}

export async function propertyBase64urlArray(
  context: Client,
  body: Base64urlArrayBytesProperty,
  options: PropertyBase64urlArrayOptionalParams = { requestOptions: {} },
): Promise<Base64urlArrayBytesProperty> {
  const result = await _propertyBase64urlArraySend(context, body, options);
  return _propertyBase64urlArrayDeserialize(result);
}
