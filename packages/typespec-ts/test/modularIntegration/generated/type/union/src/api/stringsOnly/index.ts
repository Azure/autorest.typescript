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
  StringsOnlyGetOptionalParams,
  StringsOnlySendOptionalParams,
} from "../../models/options.js";

export function _stringsOnlyGetSend(
  context: Client,
  options: StringsOnlyGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/strings-only")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _stringsOnlyGetDeserialize(
  result: PathUncheckedResponse,
): Promise<{ prop: "a" | "b" | "c" }> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    prop: result.body["prop"],
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
): StreamableMethod {
  return context
    .path("/type/union/strings-only")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: prop },
    });
}

export async function _stringsOnlySendDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
