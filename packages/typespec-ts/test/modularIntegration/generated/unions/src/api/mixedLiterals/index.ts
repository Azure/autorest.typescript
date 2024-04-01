// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { MixedLiteralsCases } from "../../models/models.js";
import {
  MixedLiteralsGet200Response,
  MixedLiteralsSend204Response,
  UnionContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  MixedLiteralsGetOptions,
  MixedLiteralsSendOptions,
} from "../../models/options.js";

export function _mixedLiteralsGetSend(
  context: Client,
  options: MixedLiteralsGetOptions = { requestOptions: {} },
): StreamableMethod<MixedLiteralsGet200Response> {
  return context
    .path("/type/union/mixed-literals")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _mixedLiteralsGetDeserialize(
  result: MixedLiteralsGet200Response,
): Promise<{ prop: MixedLiteralsCases }> {
  if (result.status !== "200") {
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
  options: MixedLiteralsGetOptions = { requestOptions: {} },
): Promise<{ prop: MixedLiteralsCases }> {
  const result = await _mixedLiteralsGetSend(context, options);
  return _mixedLiteralsGetDeserialize(result);
}

export function _mixedLiteralsSendSend(
  context: Client,
  prop: MixedLiteralsCases,
  options: MixedLiteralsSendOptions = { requestOptions: {} },
): StreamableMethod<MixedLiteralsSend204Response> {
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
  result: MixedLiteralsSend204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function mixedLiteralsSend(
  context: Client,
  prop: MixedLiteralsCases,
  options: MixedLiteralsSendOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _mixedLiteralsSendSend(context, prop, options);
  return _mixedLiteralsSendDeserialize(result);
}
