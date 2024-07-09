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
  MixedLiteralsGetOptionalParams,
  MixedLiteralsSendOptionalParams,
} from "../../models/options.js";

export function _mixedLiteralsGetSend(
  context: Client,
  options: MixedLiteralsGetOptionalParams = { requestOptions: {} },
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

  const _result = result as unknown as MixedLiteralsGet200Response;
  return {
    prop: {
      stringLiteral: _result.body.prop["stringLiteral"],
      intLiteral: _result.body.prop["intLiteral"],
      floatLiteral: _result.body.prop["floatLiteral"],
      booleanLiteral: _result.body.prop["booleanLiteral"],
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
  options: MixedLiteralsSendOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _mixedLiteralsSendSend(context, prop, options);
  return _mixedLiteralsSendDeserialize(result);
}
