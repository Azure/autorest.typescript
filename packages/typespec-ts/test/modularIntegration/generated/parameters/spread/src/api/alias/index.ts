// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AliasSpreadAsRequestBody204Response,
  AliasSpreadAsRequestParameter204Response,
  AliasSpreadWithMultipleParameters204Response,
  SpreadContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  AliasSpreadAsRequestBodyOptions,
  AliasSpreadAsRequestParameterOptions,
  AliasSpreadWithMultipleParametersOptions,
} from "../../models/options.js";

export function _aliasSpreadAsRequestBodySend(
  context: Client,
  name: string,
  options: AliasSpreadAsRequestBodyOptions = { requestOptions: {} },
): StreamableMethod<AliasSpreadAsRequestBody204Response> {
  return context
    .path("/parameters/spread/alias/request-body")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { name: name },
    });
}

export async function _aliasSpreadAsRequestBodyDeserialize(
  result: AliasSpreadAsRequestBody204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function aliasSpreadAsRequestBody(
  context: Client,
  name: string,
  options: AliasSpreadAsRequestBodyOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _aliasSpreadAsRequestBodySend(context, name, options);
  return _aliasSpreadAsRequestBodyDeserialize(result);
}

export function _aliasSpreadAsRequestParameterSend(
  context: Client,
  id: string,
  xMsTestHeader: string,
  name: string,
  options: AliasSpreadAsRequestParameterOptions = { requestOptions: {} },
): StreamableMethod<AliasSpreadAsRequestParameter204Response> {
  return context
    .path("/parameters/spread/alias/request-parameter/{id}", id)
    .put({
      ...operationOptionsToRequestParameters(options),
      headers: { "x-ms-test-header": xMsTestHeader },
      body: { name: name },
    });
}

export async function _aliasSpreadAsRequestParameterDeserialize(
  result: AliasSpreadAsRequestParameter204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function aliasSpreadAsRequestParameter(
  context: Client,
  id: string,
  xMsTestHeader: string,
  name: string,
  options: AliasSpreadAsRequestParameterOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _aliasSpreadAsRequestParameterSend(
    context,
    id,
    xMsTestHeader,
    name,
    options,
  );
  return _aliasSpreadAsRequestParameterDeserialize(result);
}

export function _aliasSpreadWithMultipleParametersSend(
  context: Client,
  id: string,
  xMsTestHeader: string,
  prop1: string,
  prop2: string,
  prop3: string,
  prop4: string,
  prop5: string,
  prop6: string,
  options: AliasSpreadWithMultipleParametersOptions = { requestOptions: {} },
): StreamableMethod<AliasSpreadWithMultipleParameters204Response> {
  return context
    .path("/parameters/spread/alias/multiple-parameters/{id}", id)
    .put({
      ...operationOptionsToRequestParameters(options),
      headers: { "x-ms-test-header": xMsTestHeader },
      body: {
        prop1: prop1,
        prop2: prop2,
        prop3: prop3,
        prop4: prop4,
        prop5: prop5,
        prop6: prop6,
      },
    });
}

export async function _aliasSpreadWithMultipleParametersDeserialize(
  result: AliasSpreadWithMultipleParameters204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function aliasSpreadWithMultipleParameters(
  context: Client,
  id: string,
  xMsTestHeader: string,
  prop1: string,
  prop2: string,
  prop3: string,
  prop4: string,
  prop5: string,
  prop6: string,
  options: AliasSpreadWithMultipleParametersOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _aliasSpreadWithMultipleParametersSend(
    context,
    id,
    xMsTestHeader,
    prop1,
    prop2,
    prop3,
    prop4,
    prop5,
    prop6,
    options,
  );
  return _aliasSpreadWithMultipleParametersDeserialize(result);
}
