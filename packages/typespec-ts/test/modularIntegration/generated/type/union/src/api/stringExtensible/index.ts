// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringExtensibleGetOptionalParams,
  StringExtensibleSendOptionalParams,
} from "../../models/options.js";

export function _stringExtensibleGetSend(
  context: Client,
  options: StringExtensibleGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/string-extensible")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringExtensibleGetDeserialize(
  result: PathUncheckedResponse,
): Promise<{ prop: string | "b" | "c" }> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    prop: result.body["prop"],
  };
}

export async function stringExtensibleGet(
  context: Client,
  options: StringExtensibleGetOptionalParams = { requestOptions: {} },
): Promise<{ prop: string | "b" | "c" }> {
  const result = await _stringExtensibleGetSend(context, options);
  return _stringExtensibleGetDeserialize(result);
}

export function _stringExtensibleSendSend(
  context: Client,
  prop: string | "b" | "c",
  options: StringExtensibleSendOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/string-extensible")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: prop },
    });
}

export async function _stringExtensibleSendDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function stringExtensibleSend(
  context: Client,
  prop: string | "b" | "c",
  options: StringExtensibleSendOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stringExtensibleSendSend(context, prop, options);
  return _stringExtensibleSendDeserialize(result);
}
