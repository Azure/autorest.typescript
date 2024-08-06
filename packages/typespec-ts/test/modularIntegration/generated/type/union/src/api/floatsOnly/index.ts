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
  FloatsOnlyGetOptionalParams,
  FloatsOnlySendOptionalParams,
} from "../../models/options.js";

export function _floatsOnlyGetSend(
  context: Client,
  options: FloatsOnlyGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/floats-only")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _floatsOnlyGetDeserialize(
  result: PathUncheckedResponse,
): Promise<{ prop: 1.1 | 2.2 | 3.3 }> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    prop: result.body["prop"],
  };
}

export async function floatsOnlyGet(
  context: Client,
  options: FloatsOnlyGetOptionalParams = { requestOptions: {} },
): Promise<{ prop: 1.1 | 2.2 | 3.3 }> {
  const result = await _floatsOnlyGetSend(context, options);
  return _floatsOnlyGetDeserialize(result);
}

export function _floatsOnlySendSend(
  context: Client,
  prop: 1.1 | 2.2 | 3.3,
  options: FloatsOnlySendOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/floats-only")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: prop },
    });
}

export async function _floatsOnlySendDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function floatsOnlySend(
  context: Client,
  prop: 1.1 | 2.2 | 3.3,
  options: FloatsOnlySendOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _floatsOnlySendSend(context, prop, options);
  return _floatsOnlySendDeserialize(result);
}
