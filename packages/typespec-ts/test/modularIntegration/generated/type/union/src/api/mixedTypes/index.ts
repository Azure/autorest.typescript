// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { MixedTypesCases } from "../../models/models.js";
import { UnionContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  MixedTypesGetOptionalParams,
  MixedTypesSendOptionalParams,
} from "../../models/options.js";

export function _mixedTypesGetSend(
  context: Client,
  options: MixedTypesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/mixed-types")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _mixedTypesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<{ prop: MixedTypesCases }> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    prop: {
      model: result.body.prop["model"],
      literal: result.body.prop["literal"],
      int: result.body.prop["int"],
      boolean: result.body.prop["boolean"],
      array: result.body.prop["array"],
    },
  };
}

export async function mixedTypesGet(
  context: Client,
  options: MixedTypesGetOptionalParams = { requestOptions: {} },
): Promise<{ prop: MixedTypesCases }> {
  const result = await _mixedTypesGetSend(context, options);
  return _mixedTypesGetDeserialize(result);
}

export function _mixedTypesSendSend(
  context: Client,
  prop: MixedTypesCases,
  options: MixedTypesSendOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/mixed-types")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        prop: {
          model: prop["model"],
          literal: prop["literal"],
          int: prop["int"],
          boolean: prop["boolean"],
          array: prop["array"],
        },
      },
    });
}

export async function _mixedTypesSendDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function mixedTypesSend(
  context: Client,
  prop: MixedTypesCases,
  options: MixedTypesSendOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _mixedTypesSendSend(context, prop, options);
  return _mixedTypesSendDeserialize(result);
}
