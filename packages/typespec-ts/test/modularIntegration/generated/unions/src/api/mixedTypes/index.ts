// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { MixedTypesCases } from "../../models/models.js";
import {
  MixedTypesGet200Response,
  MixedTypesSend204Response,
  UnionContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  MixedTypesGetOptions,
  MixedTypesSendOptions,
} from "../../models/options.js";

export function _mixedTypesGetSend(
  context: Client,
  options: MixedTypesGetOptions = { requestOptions: {} },
): StreamableMethod<MixedTypesGet200Response> {
  return context
    .path("/type/union/mixed-types")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _mixedTypesGetDeserialize(
  result: MixedTypesGet200Response,
): Promise<{ prop: MixedTypesCases }> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    prop: {
      model: result.body.prop["model"],
      literal: result.body.prop["literal"],
      int: result.body.prop["int"],
      boolean: result.body.prop["boolean"],
    },
  };
}

export async function mixedTypesGet(
  context: Client,
  options: MixedTypesGetOptions = { requestOptions: {} },
): Promise<{ prop: MixedTypesCases }> {
  const result = await _mixedTypesGetSend(context, options);
  return _mixedTypesGetDeserialize(result);
}

export function _mixedTypesSendSend(
  context: Client,
  prop: MixedTypesCases,
  options: MixedTypesSendOptions = { requestOptions: {} },
): StreamableMethod<MixedTypesSend204Response> {
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
        },
      },
    });
}

export async function _mixedTypesSendDeserialize(
  result: MixedTypesSend204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function mixedTypesSend(
  context: Client,
  prop: MixedTypesCases,
  options: MixedTypesSendOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _mixedTypesSendSend(context, prop, options);
  return _mixedTypesSendDeserialize(result);
}
