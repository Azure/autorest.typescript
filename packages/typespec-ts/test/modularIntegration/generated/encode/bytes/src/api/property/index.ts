// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DefaultBytesProperty,
  Base64BytesProperty,
  Base64urlBytesProperty,
  Base64urlArrayBytesProperty,
} from "../../models/models.js";
import {
  BytesContext as Client,
  PropertyBase64200Response,
  PropertyBase64url200Response,
  PropertyBase64urlArray200Response,
  PropertyDefault200Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { uint8ArrayToString, stringToUint8Array } from "@azure/core-util";
import {
  PropertyDefaultOptions,
  PropertyBase64Options,
  PropertyBase64urlOptions,
  PropertyBase64urlArrayOptions,
} from "../../models/options.js";

export function _propertyDefaultSend(
  context: Client,
  body: DefaultBytesProperty,
  options: PropertyDefaultOptions = { requestOptions: {} }
): StreamableMethod<PropertyDefault200Response> {
  return context
    .path("/encode/bytes/property/default")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: uint8ArrayToString(body["value"], "base64") },
    });
}

export async function _propertyDefaultDeserialize(
  result: PropertyDefault200Response
): Promise<DefaultBytesProperty> {
  if (result.status !== "200") {
    throw result.body;
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
  options: PropertyDefaultOptions = { requestOptions: {} }
): Promise<DefaultBytesProperty> {
  const result = await _propertyDefaultSend(context, body, options);
  return _propertyDefaultDeserialize(result);
}

export function _propertyBase64Send(
  context: Client,
  body: Base64BytesProperty,
  options: PropertyBase64Options = { requestOptions: {} }
): StreamableMethod<PropertyBase64200Response> {
  return context
    .path("/encode/bytes/property/base64")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: uint8ArrayToString(body["value"], "base64") },
    });
}

export async function _propertyBase64Deserialize(
  result: PropertyBase64200Response
): Promise<Base64BytesProperty> {
  if (result.status !== "200") {
    throw result.body;
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
  options: PropertyBase64Options = { requestOptions: {} }
): Promise<Base64BytesProperty> {
  const result = await _propertyBase64Send(context, body, options);
  return _propertyBase64Deserialize(result);
}

export function _propertyBase64urlSend(
  context: Client,
  body: Base64urlBytesProperty,
  options: PropertyBase64urlOptions = { requestOptions: {} }
): StreamableMethod<PropertyBase64url200Response> {
  return context
    .path("/encode/bytes/property/base64url")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: uint8ArrayToString(body["value"], "base64url") },
    });
}

export async function _propertyBase64urlDeserialize(
  result: PropertyBase64url200Response
): Promise<Base64urlBytesProperty> {
  if (result.status !== "200") {
    throw result.body;
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
  options: PropertyBase64urlOptions = { requestOptions: {} }
): Promise<Base64urlBytesProperty> {
  const result = await _propertyBase64urlSend(context, body, options);
  return _propertyBase64urlDeserialize(result);
}

export function _propertyBase64urlArraySend(
  context: Client,
  body: Base64urlArrayBytesProperty,
  options: PropertyBase64urlArrayOptions = { requestOptions: {} }
): StreamableMethod<PropertyBase64urlArray200Response> {
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
  result: PropertyBase64urlArray200Response
): Promise<Base64urlArrayBytesProperty> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    value: result.body["value"].map((p) =>
      typeof p === "string" ? stringToUint8Array(p, "base64url") : p
    ),
  };
}

export async function propertyBase64urlArray(
  context: Client,
  body: Base64urlArrayBytesProperty,
  options: PropertyBase64urlArrayOptions = { requestOptions: {} }
): Promise<Base64urlArrayBytesProperty> {
  const result = await _propertyBase64urlArraySend(context, body, options);
  return _propertyBase64urlArrayDeserialize(result);
}
