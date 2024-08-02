// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Cat, Dog } from "../../models/models.js";
import { UnionContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  ModelsOnlyGetOptionalParams,
  ModelsOnlySendOptionalParams,
} from "../../models/options.js";

export function _modelsOnlyGetSend(
  context: Client,
  options: ModelsOnlyGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/models-only")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _modelsOnlyGetDeserialize(
  result: PathUncheckedResponse,
): Promise<{ prop: Cat | Dog }> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    prop: result.body["prop"],
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
): StreamableMethod {
  return context
    .path("/type/union/models-only")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: prop },
    });
}

export async function _modelsOnlySendDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
