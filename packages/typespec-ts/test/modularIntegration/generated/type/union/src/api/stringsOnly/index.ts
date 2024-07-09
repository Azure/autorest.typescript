// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StringsOnlyGet200Response,
  StringsOnlySend204Response,
  UnionContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  StringsOnlyGetOptionalParams,
  StringsOnlySendOptionalParams,
} from "../../models/options.js";

export function _stringsOnlyGetSend(
  context: Client,
  options: StringsOnlyGetOptionalParams = { requestOptions: {} },
): StreamableMethod<StringsOnlyGet200Response> {
  return context
    .path("/type/union/strings-only")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringsOnlyGetDeserialize(
  result: StringsOnlyGet200Response,
): Promise<{ prop: "a" | "b" | "c" }> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as StringsOnlyGet200Response;
  return {
    prop: _result.body["prop"],
  };
}

export async function stringsOnlyGet(
  context: Client,
  options: StringsOnlyGetOptionalParams = { requestOptions: {} },
): Promise<{ prop: "a" | "b" | "c" }> {
  const result = await _stringsOnlyGetSend(context, options);
  return _stringsOnlyGetDeserialize(result);
}

export function _stringsOnlySendSend(
  context: Client,
  prop: "a" | "b" | "c",
  options: StringsOnlySendOptionalParams = { requestOptions: {} },
): StreamableMethod<StringsOnlySend204Response> {
  return context
    .path("/type/union/strings-only")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: prop },
    });
}

export async function _stringsOnlySendDeserialize(
  result: StringsOnlySend204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function stringsOnlySend(
  context: Client,
  prop: "a" | "b" | "c",
  options: StringsOnlySendOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _stringsOnlySendSend(context, prop, options);
  return _stringsOnlySendDeserialize(result);
}
