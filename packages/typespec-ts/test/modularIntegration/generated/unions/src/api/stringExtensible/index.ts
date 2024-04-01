// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringExtensibleGet200Response,
  StringExtensibleSend204Response,
  UnionContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringExtensibleGetOptions,
  StringExtensibleSendOptions,
} from "../../models/options.js";

export function _stringExtensibleGetSend(
  context: Client,
  options: StringExtensibleGetOptions = { requestOptions: {} },
): StreamableMethod<StringExtensibleGet200Response> {
  return context
    .path("/type/union/string-extensible")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringExtensibleGetDeserialize(
  result: StringExtensibleGet200Response,
): Promise<{ prop: string | "b" | "c" }> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    prop: result.body["prop"],
  };
}

export async function stringExtensibleGet(
  context: Client,
  options: StringExtensibleGetOptions = { requestOptions: {} },
): Promise<{ prop: string | "b" | "c" }> {
  const result = await _stringExtensibleGetSend(context, options);
  return _stringExtensibleGetDeserialize(result);
}

export function _stringExtensibleSendSend(
  context: Client,
  prop: string | "b" | "c",
  options: StringExtensibleSendOptions = { requestOptions: {} },
): StreamableMethod<StringExtensibleSend204Response> {
  return context
    .path("/type/union/string-extensible")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: prop },
    });
}

export async function _stringExtensibleSendDeserialize(
  result: StringExtensibleSend204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function stringExtensibleSend(
  context: Client,
  prop: string | "b" | "c",
  options: StringExtensibleSendOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _stringExtensibleSendSend(context, prop, options);
  return _stringExtensibleSendDeserialize(result);
}
