// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { MixedLiteralsCases } from "../../models/models.js";
import { UnionContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  MixedLiteralsGetOptionalParams,
  MixedLiteralsSendOptionalParams,
} from "../../models/options.js";

export function _mixedLiteralsGetSend(
  context: Client,
  options: MixedLiteralsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/mixed-literals")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _mixedLiteralsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<{ prop: MixedLiteralsCases }> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    prop: {
      stringLiteral: result.body.prop["stringLiteral"],
      intLiteral: result.body.prop["intLiteral"],
      floatLiteral: result.body.prop["floatLiteral"],
      booleanLiteral: result.body.prop["booleanLiteral"],
    },
  };
}

export async function mixedLiteralsGet(
  context: Client,
  options: MixedLiteralsGetOptionalParams = { requestOptions: {} },
): Promise<{ prop: MixedLiteralsCases }> {
  const result = await _mixedLiteralsGetSend(context, options);
  return _mixedLiteralsGetDeserialize(result);
}

export function _mixedLiteralsSendSend(
  context: Client,
  prop: MixedLiteralsCases,
  options: MixedLiteralsSendOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/type/union/mixed-literals")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        prop: {
          stringLiteral: prop["stringLiteral"],
          intLiteral: prop["intLiteral"],
          floatLiteral: prop["floatLiteral"],
          booleanLiteral: prop["booleanLiteral"],
        },
      },
    });
}

export async function _mixedLiteralsSendDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function mixedLiteralsSend(
  context: Client,
  prop: MixedLiteralsCases,
  options: MixedLiteralsSendOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _mixedLiteralsSendSend(context, prop, options);
  return _mixedLiteralsSendDeserialize(result);
}
