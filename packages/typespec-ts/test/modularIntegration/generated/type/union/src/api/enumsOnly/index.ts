// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { EnumsOnlyCases } from "../../models/models.js";
import { UnionContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  EnumsOnlyGetOptionalParams,
  EnumsOnlySendOptionalParams,
} from "../../models/options.js";

export function _enumsOnlyGetSend(
  context: Client,
  options: EnumsOnlyGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/enums-only")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _enumsOnlyGetDeserialize(
  result: PathUncheckedResponse,
): Promise<{ prop: EnumsOnlyCases }> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    prop: { lr: result.body.prop["lr"], ud: result.body.prop["ud"] },
  };
}

export async function enumsOnlyGet(
  context: Client,
  options: EnumsOnlyGetOptionalParams = { requestOptions: {} },
): Promise<{ prop: EnumsOnlyCases }> {
  const result = await _enumsOnlyGetSend(context, options);
  return _enumsOnlyGetDeserialize(result);
}

export function _enumsOnlySendSend(
  context: Client,
  prop: EnumsOnlyCases,
  options: EnumsOnlySendOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/enums-only")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop: { lr: prop["lr"], ud: prop["ud"] } },
    });
}

export async function _enumsOnlySendDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function enumsOnlySend(
  context: Client,
  prop: EnumsOnlyCases,
  options: EnumsOnlySendOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _enumsOnlySendSend(context, prop, options);
  return _enumsOnlySendDeserialize(result);
}
