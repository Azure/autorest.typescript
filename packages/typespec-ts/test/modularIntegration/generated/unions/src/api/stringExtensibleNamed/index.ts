// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StringExtensibleNamedUnion } from "../../models/models.js";
import {
  StringExtensibleNamedGet200Response,
  StringExtensibleNamedSend204Response,
  UnionContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringExtensibleNamedGetOptions,
  StringExtensibleNamedSendOptions,
} from "../../models/options.js";

export function _stringExtensibleNamedGetSend(
  context: Client,
  options: StringExtensibleNamedGetOptions = { requestOptions: {} },
): StreamableMethod<StringExtensibleNamedGet200Response> {
  return context
    .path("/type/union/string-extensible-named")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringExtensibleNamedGetDeserialize(
  result: StringExtensibleNamedGet200Response,
): Promise<{ prop: StringExtensibleNamedUnion }> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    prop: result.body["prop"],
  };
}

export async function stringExtensibleNamedGet(
  context: Client,
  options: StringExtensibleNamedGetOptions = { requestOptions: {} },
): Promise<{ prop: StringExtensibleNamedUnion }> {
  const result = await _stringExtensibleNamedGetSend(context, options);
  return _stringExtensibleNamedGetDeserialize(result);
}

export function _stringExtensibleNamedSendSend(
  context: Client,
  prop: StringExtensibleNamedUnion,
  options: StringExtensibleNamedSendOptions = { requestOptions: {} },
): StreamableMethod<StringExtensibleNamedSend204Response> {
  return context
    .path("/type/union/string-extensible-named")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: prop },
    });
}

export async function _stringExtensibleNamedSendDeserialize(
  result: StringExtensibleNamedSend204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function stringExtensibleNamedSend(
  context: Client,
  prop: StringExtensibleNamedUnion,
  options: StringExtensibleNamedSendOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _stringExtensibleNamedSendSend(context, prop, options);
  return _stringExtensibleNamedSendDeserialize(result);
}
