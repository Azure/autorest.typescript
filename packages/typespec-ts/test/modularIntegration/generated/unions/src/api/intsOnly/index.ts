// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  IntsOnlyGet200Response,
  IntsOnlySend204Response,
  UnionContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  IntsOnlyGetOptions,
  IntsOnlySendOptions,
} from "../../models/options.js";

export function _intsOnlyGetSend(
  context: Client,
  options: IntsOnlyGetOptions = { requestOptions: {} },
): StreamableMethod<IntsOnlyGet200Response> {
  return context
    .path("/type/union/ints-only")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _intsOnlyGetDeserialize(
  result: IntsOnlyGet200Response,
): Promise<{ prop: 1 | 2 | 3 }> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    prop: result.body["prop"],
  };
}

export async function intsOnlyGet(
  context: Client,
  options: IntsOnlyGetOptions = { requestOptions: {} },
): Promise<{ prop: 1 | 2 | 3 }> {
  const result = await _intsOnlyGetSend(context, options);
  return _intsOnlyGetDeserialize(result);
}

export function _intsOnlySendSend(
  context: Client,
  prop: 1 | 2 | 3,
  options: IntsOnlySendOptions = { requestOptions: {} },
): StreamableMethod<IntsOnlySend204Response> {
  return context
    .path("/type/union/ints-only")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: prop },
    });
}

export async function _intsOnlySendDeserialize(
  result: IntsOnlySend204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function intsOnlySend(
  context: Client,
  prop: 1 | 2 | 3,
  options: IntsOnlySendOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _intsOnlySendSend(context, prop, options);
  return _intsOnlySendDeserialize(result);
}
