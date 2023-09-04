// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DefaultBytesProperty,
  Base64BytesProperty,
  Base64urlBytesProperty,
  Base64urlArrayBytesProperty,
} from "../models/models.js";
import {
  BytesContext as Client,
  PropertyBase64200Response,
  PropertyBase64url200Response,
  PropertyBase64urlArray200Response,
  PropertyDefault200Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { stringToUint8Array } from "@azure/core-util";
import {
  PropertyDefaultOptions,
  PropertyBase64Options,
  PropertyBase64urlOptions,
  PropertyBase64urlArrayOptions,
} from "../models/options.js";

export function _propertyDefaultSend(
  context: Client,
  value: Uint8Array,
  options: PropertyDefaultOptions = { requestOptions: {} }
): StreamableMethod<PropertyDefault200Response> {
  return context
    .path("/encode/bytes/property/default")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: value },
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
  value: Uint8Array,
  options: PropertyDefaultOptions = { requestOptions: {} }
): Promise<DefaultBytesProperty> {
  const result = await _propertyDefaultSend(context, value, options);
  return _propertyDefaultDeserialize(result);
}

export function _propertyBase64Send(
  context: Client,
  value: Uint8Array,
  options: PropertyBase64Options = { requestOptions: {} }
): StreamableMethod<PropertyBase64200Response> {
  return context
    .path("/encode/bytes/property/base64")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: value },
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
  value: Uint8Array,
  options: PropertyBase64Options = { requestOptions: {} }
): Promise<Base64BytesProperty> {
  const result = await _propertyBase64Send(context, value, options);
  return _propertyBase64Deserialize(result);
}

export function _propertyBase64urlSend(
  context: Client,
  value: Uint8Array,
  options: PropertyBase64urlOptions = { requestOptions: {} }
): StreamableMethod<PropertyBase64url200Response> {
  return context
    .path("/encode/bytes/property/base64url")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: value },
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
        ? stringToUint8Array(result.body["value"], "base64")
        : result.body["value"],
  };
}

export async function propertyBase64url(
  context: Client,
  value: Uint8Array,
  options: PropertyBase64urlOptions = { requestOptions: {} }
): Promise<Base64urlBytesProperty> {
  const result = await _propertyBase64urlSend(context, value, options);
  return _propertyBase64urlDeserialize(result);
}

export function _propertyBase64urlArraySend(
  context: Client,
  value: Uint8Array[],
  options: PropertyBase64urlArrayOptions = { requestOptions: {} }
): StreamableMethod<PropertyBase64urlArray200Response> {
  return context
    .path("/encode/bytes/property/base64url-array")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { value: value },
    });
}

export async function _propertyBase64urlArrayDeserialize(
  result: PropertyBase64urlArray200Response
): Promise<Base64urlArrayBytesProperty> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    value: result.body["value"],
  };
}

export async function propertyBase64urlArray(
  context: Client,
  value: Uint8Array[],
  options: PropertyBase64urlArrayOptions = { requestOptions: {} }
): Promise<Base64urlArrayBytesProperty> {
  const result = await _propertyBase64urlArraySend(context, value, options);
  return _propertyBase64urlArrayDeserialize(result);
}
