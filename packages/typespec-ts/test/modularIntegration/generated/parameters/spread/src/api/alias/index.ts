// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpreadContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  AliasSpreadAsRequestBodyOptionalParams,
  AliasSpreadParameterWithInnerModelOptionalParams,
  AliasSpreadAsRequestParameterOptionalParams,
  AliasSpreadWithMultipleParametersOptionalParams,
  AliasSpreadParameterWithInnerAliasOptionalParams,
} from "../../models/options.js";

export function _aliasSpreadAsRequestBodySend(
  context: Client,
  name: string,
  options: AliasSpreadAsRequestBodyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/parameters/spread/alias/request-body")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { name: name },
    });
}

export async function _aliasSpreadAsRequestBodyDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function aliasSpreadAsRequestBody(
  context: Client,
  name: string,
  options: AliasSpreadAsRequestBodyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _aliasSpreadAsRequestBodySend(context, name, options);
  return _aliasSpreadAsRequestBodyDeserialize(result);
}

export function _aliasSpreadParameterWithInnerModelSend(
  context: Client,
  id: string,
  xMsTestHeader: string,
  name: string,
  options: AliasSpreadParameterWithInnerModelOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/parameters/spread/alias/inner-model-parameter/{id}", id)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { "x-ms-test-header": xMsTestHeader },
      body: { name: name },
    });
}

export async function _aliasSpreadParameterWithInnerModelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function aliasSpreadParameterWithInnerModel(
  context: Client,
  id: string,
  xMsTestHeader: string,
  name: string,
  options: AliasSpreadParameterWithInnerModelOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _aliasSpreadParameterWithInnerModelSend(
    context,
    id,
    xMsTestHeader,
    name,
    options,
  );
  return _aliasSpreadParameterWithInnerModelDeserialize(result);
}

export function _aliasSpreadAsRequestParameterSend(
  context: Client,
  id: string,
  xMsTestHeader: string,
  name: string,
  options: AliasSpreadAsRequestParameterOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/parameters/spread/alias/request-parameter/{id}", id)
    .put({
      ...operationOptionsToRequestParameters(options),
      headers: { "x-ms-test-header": xMsTestHeader },
      body: { name: name },
    });
}

export async function _aliasSpreadAsRequestParameterDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function aliasSpreadAsRequestParameter(
  context: Client,
  id: string,
  xMsTestHeader: string,
  name: string,
  options: AliasSpreadAsRequestParameterOptionalParams = { requestOptions: {} },
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
  requiredString: string,
  requiredIntList: number[],
  options: AliasSpreadWithMultipleParametersOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/parameters/spread/alias/multiple-parameters/{id}", id)
    .put({
      ...operationOptionsToRequestParameters(options),
      headers: { "x-ms-test-header": xMsTestHeader },
      body: {
        requiredString: requiredString,
        optionalInt: options?.optionalInt,
        requiredIntList: requiredIntList,
        optionalStringList: options?.optionalStringList,
      },
    });
}

export async function _aliasSpreadWithMultipleParametersDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function aliasSpreadWithMultipleParameters(
  context: Client,
  id: string,
  xMsTestHeader: string,
  requiredString: string,
  requiredIntList: number[],
  options: AliasSpreadWithMultipleParametersOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _aliasSpreadWithMultipleParametersSend(
    context,
    id,
    xMsTestHeader,
    requiredString,
    requiredIntList,
    options,
  );
  return _aliasSpreadWithMultipleParametersDeserialize(result);
}

export function _aliasSpreadParameterWithInnerAliasSend(
  context: Client,
  id: string,
  xMsTestHeader: string,
  name: string,
  age: number,
  options: AliasSpreadParameterWithInnerAliasOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/parameters/spread/alias/inner-alias-parameter/{id}", id)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { "x-ms-test-header": xMsTestHeader },
      body: { name: name, age: age },
    });
}

export async function _aliasSpreadParameterWithInnerAliasDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** spread an alias with contains another alias property as body. */
export async function aliasSpreadParameterWithInnerAlias(
  context: Client,
  id: string,
  xMsTestHeader: string,
  name: string,
  age: number,
  options: AliasSpreadParameterWithInnerAliasOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _aliasSpreadParameterWithInnerAliasSend(
    context,
    id,
    xMsTestHeader,
    name,
    age,
    options,
  );
  return _aliasSpreadParameterWithInnerAliasDeserialize(result);
}
