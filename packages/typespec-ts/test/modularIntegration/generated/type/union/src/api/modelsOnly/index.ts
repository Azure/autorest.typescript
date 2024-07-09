// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Cat, Dog } from "../../models/models.js";
import {
  ModelsOnlyGet200Response,
  ModelsOnlySend204Response,
  UnionContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ModelsOnlyGetOptionalParams,
  ModelsOnlySendOptionalParams,
} from "../../models/options.js";

export function _modelsOnlyGetSend(
  context: Client,
  options: ModelsOnlyGetOptionalParams = { requestOptions: {} },
): StreamableMethod<ModelsOnlyGet200Response> {
  return context
    .path("/type/union/models-only")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _modelsOnlyGetDeserialize(
  result: ModelsOnlyGet200Response,
): Promise<{ prop: Cat | Dog }> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as ModelsOnlyGet200Response;
  return {
    prop: _result.body["prop"],
  };
}

export async function modelsOnlyGet(
  context: Client,
  options: ModelsOnlyGetOptionalParams = { requestOptions: {} },
): Promise<{ prop: Cat | Dog }> {
  const result = await _modelsOnlyGetSend(context, options);
  return _modelsOnlyGetDeserialize(result);
}

export function _modelsOnlySendSend(
  context: Client,
  prop: Cat | Dog,
  options: ModelsOnlySendOptionalParams = { requestOptions: {} },
): StreamableMethod<ModelsOnlySend204Response> {
  return context
    .path("/type/union/models-only")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: prop },
    });
}

export async function _modelsOnlySendDeserialize(
  result: ModelsOnlySend204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelsOnlySend(
  context: Client,
  prop: Cat | Dog,
  options: ModelsOnlySendOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelsOnlySendSend(context, prop, options);
  return _modelsOnlySendDeserialize(result);
}
