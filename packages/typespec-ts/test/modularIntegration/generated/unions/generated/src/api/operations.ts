// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ModelWithSimpleUnionProperty,
  ModelWithNamedUnionProperty,
  ModelWithSimpleUnionPropertyInResponse,
  ModelWithNamedUnionPropertyInResponse,
} from "../models/models.js";
import {
  ReceiveFirstNamedUnionValue200Response,
  ReceiveIntArray200Response,
  ReceiveSecondNamedUnionValue200Response,
  ReceiveString200Response,
  SendFirstNamedUnionValue200Response,
  SendInt200Response,
  SendIntArray200Response,
  SendSecondNamedUnionValue200Response,
  UnionContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import {
  SendIntOptions,
  SendIntArrayOptions,
  SendFirstNamedUnionValueOptions,
  SendSecondNamedUnionValueOptions,
  ReceiveStringOptions,
  ReceiveIntArrayOptions,
  ReceiveFirstNamedUnionValueOptions,
  ReceiveSecondNamedUnionValueOptions,
} from "../models/options.js";

export function _sendIntSend(
  context: Client,
  input: ModelWithSimpleUnionProperty,
  options: SendIntOptions = { requestOptions: {} }
): StreamableMethod<SendInt200Response> {
  return context
    .path("/type/union/int")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { simpleUnion: input["simpleUnion"] },
    });
}

export async function _sendIntDeserialize(
  result: SendInt200Response
): Promise<void> {
  if (result.status !== "200") {
    throw result.body;
  }

  return;
}

export async function sendInt(
  context: Client,
  input: ModelWithSimpleUnionProperty,
  options: SendIntOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _sendIntSend(context, input, options);
  return _sendIntDeserialize(result);
}

export function _sendIntArraySend(
  context: Client,
  input: ModelWithSimpleUnionProperty,
  options: SendIntArrayOptions = { requestOptions: {} }
): StreamableMethod<SendIntArray200Response> {
  return context
    .path("/type/union/int-array")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { simpleUnion: input["simpleUnion"] },
    });
}

export async function _sendIntArrayDeserialize(
  result: SendIntArray200Response
): Promise<void> {
  if (result.status !== "200") {
    throw result.body;
  }

  return;
}

export async function sendIntArray(
  context: Client,
  input: ModelWithSimpleUnionProperty,
  options: SendIntArrayOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _sendIntArraySend(context, input, options);
  return _sendIntArrayDeserialize(result);
}

export function _sendFirstNamedUnionValueSend(
  context: Client,
  input: ModelWithNamedUnionProperty,
  options: SendFirstNamedUnionValueOptions = { requestOptions: {} }
): StreamableMethod<SendFirstNamedUnionValue200Response> {
  return context
    .path("/type/union/model1")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { namedUnion: input["namedUnion"] },
    });
}

export async function _sendFirstNamedUnionValueDeserialize(
  result: SendFirstNamedUnionValue200Response
): Promise<void> {
  if (result.status !== "200") {
    throw result.body;
  }

  return;
}

export async function sendFirstNamedUnionValue(
  context: Client,
  input: ModelWithNamedUnionProperty,
  options: SendFirstNamedUnionValueOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _sendFirstNamedUnionValueSend(context, input, options);
  return _sendFirstNamedUnionValueDeserialize(result);
}

export function _sendSecondNamedUnionValueSend(
  context: Client,
  input: ModelWithNamedUnionProperty,
  options: SendSecondNamedUnionValueOptions = { requestOptions: {} }
): StreamableMethod<SendSecondNamedUnionValue200Response> {
  return context
    .path("/type/union/model2")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { namedUnion: input["namedUnion"] },
    });
}

export async function _sendSecondNamedUnionValueDeserialize(
  result: SendSecondNamedUnionValue200Response
): Promise<void> {
  if (result.status !== "200") {
    throw result.body;
  }

  return;
}

export async function sendSecondNamedUnionValue(
  context: Client,
  input: ModelWithNamedUnionProperty,
  options: SendSecondNamedUnionValueOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _sendSecondNamedUnionValueSend(context, input, options);
  return _sendSecondNamedUnionValueDeserialize(result);
}

export function _receiveStringSend(
  context: Client,
  options: ReceiveStringOptions = { requestOptions: {} }
): StreamableMethod<ReceiveString200Response> {
  return context
    .path("/type/union/receive/string")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _receiveStringDeserialize(
  result: ReceiveString200Response
): Promise<ModelWithSimpleUnionPropertyInResponse> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    simpleUnion: result.body["simpleUnion"] as any,
  };
}

export async function receiveString(
  context: Client,
  options: ReceiveStringOptions = { requestOptions: {} }
): Promise<ModelWithSimpleUnionPropertyInResponse> {
  const result = await _receiveStringSend(context, options);
  return _receiveStringDeserialize(result);
}

export function _receiveIntArraySend(
  context: Client,
  options: ReceiveIntArrayOptions = { requestOptions: {} }
): StreamableMethod<ReceiveIntArray200Response> {
  return context
    .path("/type/union/receive/int-array")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _receiveIntArrayDeserialize(
  result: ReceiveIntArray200Response
): Promise<ModelWithSimpleUnionPropertyInResponse> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    simpleUnion: result.body["simpleUnion"] as any,
  };
}

export async function receiveIntArray(
  context: Client,
  options: ReceiveIntArrayOptions = { requestOptions: {} }
): Promise<ModelWithSimpleUnionPropertyInResponse> {
  const result = await _receiveIntArraySend(context, options);
  return _receiveIntArrayDeserialize(result);
}

export function _receiveFirstNamedUnionValueSend(
  context: Client,
  options: ReceiveFirstNamedUnionValueOptions = { requestOptions: {} }
): StreamableMethod<ReceiveFirstNamedUnionValue200Response> {
  return context
    .path("/type/union/receive/model1")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _receiveFirstNamedUnionValueDeserialize(
  result: ReceiveFirstNamedUnionValue200Response
): Promise<ModelWithNamedUnionPropertyInResponse> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    namedUnion: result.body["namedUnion"] as any,
  };
}

export async function receiveFirstNamedUnionValue(
  context: Client,
  options: ReceiveFirstNamedUnionValueOptions = { requestOptions: {} }
): Promise<ModelWithNamedUnionPropertyInResponse> {
  const result = await _receiveFirstNamedUnionValueSend(context, options);
  return _receiveFirstNamedUnionValueDeserialize(result);
}

export function _receiveSecondNamedUnionValueSend(
  context: Client,
  options: ReceiveSecondNamedUnionValueOptions = { requestOptions: {} }
): StreamableMethod<ReceiveSecondNamedUnionValue200Response> {
  return context
    .path("/type/union/receive/model2")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _receiveSecondNamedUnionValueDeserialize(
  result: ReceiveSecondNamedUnionValue200Response
): Promise<ModelWithNamedUnionPropertyInResponse> {
  if (result.status !== "200") {
    throw result.body;
  }

  return {
    namedUnion: result.body["namedUnion"] as any,
  };
}

export async function receiveSecondNamedUnionValue(
  context: Client,
  options: ReceiveSecondNamedUnionValueOptions = { requestOptions: {} }
): Promise<ModelWithNamedUnionPropertyInResponse> {
  const result = await _receiveSecondNamedUnionValueSend(context, options);
  return _receiveSecondNamedUnionValueDeserialize(result);
}
