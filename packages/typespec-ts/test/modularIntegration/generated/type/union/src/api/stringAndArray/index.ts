// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StringAndArrayCases } from "../../models/models.js";
import {
  StringAndArrayGet200Response,
  StringAndArraySend204Response,
  UnionContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringAndArrayGetOptionalParams,
  StringAndArraySendOptionalParams,
} from "../../models/options.js";

export function _stringAndArrayGetSend(
  context: Client,
  options: StringAndArrayGetOptionalParams = { requestOptions: {} },
): StreamableMethod<StringAndArrayGet200Response> {
  return context
    .path("/type/union/string-and-array")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringAndArrayGetDeserialize(
  result: StringAndArrayGet200Response,
): Promise<{ prop: StringAndArrayCases }> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as StringAndArrayGet200Response;
  return {
    prop: {
      string: _result.body.prop["string"],
      array: _result.body.prop["array"],
    },
  };
}

export async function stringAndArrayGet(
  context: Client,
  options: StringAndArrayGetOptionalParams = { requestOptions: {} },
): Promise<{ prop: StringAndArrayCases }> {
  const result = await _stringAndArrayGetSend(context, options);
  return _stringAndArrayGetDeserialize(result);
}

export function _stringAndArraySendSend(
  context: Client,
  prop: StringAndArrayCases,
  options: StringAndArraySendOptionalParams = { requestOptions: {} },
): StreamableMethod<StringAndArraySend204Response> {
  return context
    .path("/type/union/string-and-array")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: { string: prop["string"], array: prop["array"] } },
    });
}

export async function _stringAndArraySendDeserialize(
  result: StringAndArraySend204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function stringAndArraySend(
  context: Client,
  prop: StringAndArrayCases,
  options: StringAndArraySendOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stringAndArraySendSend(context, prop, options);
  return _stringAndArraySendDeserialize(result);
}
