// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  FloatsOnlyGet200Response,
  FloatsOnlySend204Response,
  UnionContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  FloatsOnlyGetOptions,
  FloatsOnlySendOptions,
} from "../../models/options.js";

export function _floatsOnlyGetSend(
  context: Client,
  options: FloatsOnlyGetOptions = { requestOptions: {} },
): StreamableMethod<FloatsOnlyGet200Response> {
  return context
    .path("/type/union/floats-only")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _floatsOnlyGetDeserialize(
  result: FloatsOnlyGet200Response,
): Promise<{ prop: 1.1 | 2.2 | 3.3 }> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    prop: result.body["prop"],
  };
}

export async function floatsOnlyGet(
  context: Client,
  options: FloatsOnlyGetOptions = { requestOptions: {} },
): Promise<{ prop: 1.1 | 2.2 | 3.3 }> {
  const result = await _floatsOnlyGetSend(context, options);
  return _floatsOnlyGetDeserialize(result);
}

export function _floatsOnlySendSend(
  context: Client,
  prop: 1.1 | 2.2 | 3.3,
  options: FloatsOnlySendOptions = { requestOptions: {} },
): StreamableMethod<FloatsOnlySend204Response> {
  return context
    .path("/type/union/floats-only")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: prop },
    });
}

export async function _floatsOnlySendDeserialize(
  result: FloatsOnlySend204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function floatsOnlySend(
  context: Client,
  prop: 1.1 | 2.2 | 3.3,
  options: FloatsOnlySendOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _floatsOnlySendSend(context, prop, options);
  return _floatsOnlySendDeserialize(result);
}
