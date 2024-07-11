// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BodyParameter } from "../../models/models.js";
import {
  ModelSpreadAsRequestBody204Response,
  ModelSpreadCompositeRequest204Response,
  ModelSpreadCompositeRequestMix204Response,
  ModelSpreadCompositeRequestOnlyWithBody204Response,
  ModelSpreadCompositeRequestWithoutBody204Response,
  SpreadContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ModelSpreadAsRequestBodyOptionalParams,
  ModelSpreadCompositeRequestOnlyWithBodyOptionalParams,
  ModelSpreadCompositeRequestWithoutBodyOptionalParams,
  ModelSpreadCompositeRequestOptionalParams,
  ModelSpreadCompositeRequestMixOptionalParams,
} from "../../models/options.js";

export function _modelSpreadAsRequestBodySend(
  context: Client,
  name: string,
  options: ModelSpreadAsRequestBodyOptionalParams = { requestOptions: {} },
): StreamableMethod<ModelSpreadAsRequestBody204Response> {
  return context
    .path("/parameters/spread/model/request-body")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { name: name },
    });
}

export async function _modelSpreadAsRequestBodyDeserialize(
  result: ModelSpreadAsRequestBody204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelSpreadAsRequestBody(
  context: Client,
  name: string,
  options: ModelSpreadAsRequestBodyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelSpreadAsRequestBodySend(context, name, options);
  return _modelSpreadAsRequestBodyDeserialize(result);
}

export function _modelSpreadCompositeRequestOnlyWithBodySend(
  context: Client,
  body: BodyParameter,
  options: ModelSpreadCompositeRequestOnlyWithBodyOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<ModelSpreadCompositeRequestOnlyWithBody204Response> {
  return context
    .path("/parameters/spread/model/composite-request-only-with-body")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _modelSpreadCompositeRequestOnlyWithBodyDeserialize(
  result: ModelSpreadCompositeRequestOnlyWithBody204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelSpreadCompositeRequestOnlyWithBody(
  context: Client,
  body: BodyParameter,
  options: ModelSpreadCompositeRequestOnlyWithBodyOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _modelSpreadCompositeRequestOnlyWithBodySend(
    context,
    body,
    options,
  );
  return _modelSpreadCompositeRequestOnlyWithBodyDeserialize(result);
}

export function _modelSpreadCompositeRequestWithoutBodySend(
  context: Client,
  name: string,
  testHeader: string,
  options: ModelSpreadCompositeRequestWithoutBodyOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<ModelSpreadCompositeRequestWithoutBody204Response> {
  return context
    .path(
      "/parameters/spread/model/composite-request-without-body/{name}",
      name,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      headers: { "test-header": testHeader },
    });
}

export async function _modelSpreadCompositeRequestWithoutBodyDeserialize(
  result: ModelSpreadCompositeRequestWithoutBody204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelSpreadCompositeRequestWithoutBody(
  context: Client,
  name: string,
  testHeader: string,
  options: ModelSpreadCompositeRequestWithoutBodyOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _modelSpreadCompositeRequestWithoutBodySend(
    context,
    name,
    testHeader,
    options,
  );
  return _modelSpreadCompositeRequestWithoutBodyDeserialize(result);
}

export function _modelSpreadCompositeRequestSend(
  context: Client,
  name: string,
  testHeader: string,
  body: BodyParameter,
  options: ModelSpreadCompositeRequestOptionalParams = { requestOptions: {} },
): StreamableMethod<ModelSpreadCompositeRequest204Response> {
  return context
    .path("/parameters/spread/model/composite-request/{name}", name)
    .put({
      ...operationOptionsToRequestParameters(options),
      headers: { "test-header": testHeader },
      body: { name: body["name"] },
    });
}

export async function _modelSpreadCompositeRequestDeserialize(
  result: ModelSpreadCompositeRequest204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelSpreadCompositeRequest(
  context: Client,
  name: string,
  testHeader: string,
  body: BodyParameter,
  options: ModelSpreadCompositeRequestOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelSpreadCompositeRequestSend(
    context,
    name,
    testHeader,
    body,
    options,
  );
  return _modelSpreadCompositeRequestDeserialize(result);
}

export function _modelSpreadCompositeRequestMixSend(
  context: Client,
  name: string,
  testHeader: string,
  prop: string,
  options: ModelSpreadCompositeRequestMixOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<ModelSpreadCompositeRequestMix204Response> {
  return context
    .path("/parameters/spread/model/composite-request-mix/{name}", name)
    .put({
      ...operationOptionsToRequestParameters(options),
      headers: { "test-header": testHeader },
      body: { prop: prop },
    });
}

export async function _modelSpreadCompositeRequestMixDeserialize(
  result: ModelSpreadCompositeRequestMix204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelSpreadCompositeRequestMix(
  context: Client,
  name: string,
  testHeader: string,
  prop: string,
  options: ModelSpreadCompositeRequestMixOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _modelSpreadCompositeRequestMixSend(
    context,
    name,
    testHeader,
    prop,
    options,
  );
  return _modelSpreadCompositeRequestMixDeserialize(result);
}
