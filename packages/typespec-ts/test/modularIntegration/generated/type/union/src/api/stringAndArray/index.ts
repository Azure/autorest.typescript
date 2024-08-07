// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StringAndArrayCases } from "../../models/models.js";
import { UnionContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringAndArrayGetOptionalParams,
  StringAndArraySendOptionalParams,
} from "../../models/options.js";

export function _stringAndArrayGetSend(
  context: Client,
  options: StringAndArrayGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/string-and-array")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringAndArrayGetDeserialize(
  result: PathUncheckedResponse,
): Promise<{ prop: StringAndArrayCases }> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    prop: {
      string: result.body.prop["string"],
      array: result.body.prop["array"],
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
): StreamableMethod {
  return context
    .path("/type/union/string-and-array")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: { string: prop["string"], array: prop["array"] } },
    });
}

export async function _stringAndArraySendDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
