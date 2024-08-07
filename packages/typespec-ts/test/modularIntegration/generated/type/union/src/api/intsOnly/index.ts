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
  IntsOnlyGetOptionalParams,
  IntsOnlySendOptionalParams,
} from "../../models/options.js";

export function _intsOnlyGetSend(
  context: Client,
  options: IntsOnlyGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/ints-only")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _intsOnlyGetDeserialize(
  result: PathUncheckedResponse,
): Promise<{ prop: 1 | 2 | 3 }> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    prop: result.body["prop"],
  };
}

export async function intsOnlyGet(
  context: Client,
  options: IntsOnlyGetOptionalParams = { requestOptions: {} },
): Promise<{ prop: 1 | 2 | 3 }> {
  const result = await _intsOnlyGetSend(context, options);
  return _intsOnlyGetDeserialize(result);
}

export function _intsOnlySendSend(
  context: Client,
  prop: 1 | 2 | 3,
  options: IntsOnlySendOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/ints-only")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: prop },
    });
}

export async function _intsOnlySendDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function intsOnlySend(
  context: Client,
  prop: 1 | 2 | 3,
  options: IntsOnlySendOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _intsOnlySendSend(context, prop, options);
  return _intsOnlySendDeserialize(result);
}
