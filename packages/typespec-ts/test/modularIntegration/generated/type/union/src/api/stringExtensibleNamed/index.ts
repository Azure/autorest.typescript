// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StringExtensibleNamedUnion } from "../../models/models.js";
import { UnionContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringExtensibleNamedGetOptionalParams,
  StringExtensibleNamedSendOptionalParams,
} from "../../models/options.js";

export function _stringExtensibleNamedGetSend(
  context: Client,
  options: StringExtensibleNamedGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/string-extensible-named")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringExtensibleNamedGetDeserialize(
  result: PathUncheckedResponse,
): Promise<{ prop: StringExtensibleNamedUnion }> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    prop: result.body["prop"],
  };
}

export async function stringExtensibleNamedGet(
  context: Client,
  options: StringExtensibleNamedGetOptionalParams = { requestOptions: {} },
): Promise<{ prop: StringExtensibleNamedUnion }> {
  const result = await _stringExtensibleNamedGetSend(context, options);
  return _stringExtensibleNamedGetDeserialize(result);
}

export function _stringExtensibleNamedSendSend(
  context: Client,
  prop: StringExtensibleNamedUnion,
  options: StringExtensibleNamedSendOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/string-extensible-named")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: prop },
    });
}

export async function _stringExtensibleNamedSendDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function stringExtensibleNamedSend(
  context: Client,
  prop: StringExtensibleNamedUnion,
  options: StringExtensibleNamedSendOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stringExtensibleNamedSendSend(context, prop, options);
  return _stringExtensibleNamedSendDeserialize(result);
}
