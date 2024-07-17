// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { User } from "../../models/models.js";
import {
  BasicContext as Client,
  ExplicitBodySimple204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { ExplicitBodySimpleOptionalParams } from "../options.js";

export function _explicitBodySimpleSend(
  context: Client,
  body: User,
  options: ExplicitBodySimpleOptionalParams = { requestOptions: {} },
): StreamableMethod<ExplicitBodySimple204Response> {
  return context
    .path("/parameters/basic/explicit-body/simple")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _explicitBodySimpleDeserialize(
  result: ExplicitBodySimple204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function explicitBodySimple(
  context: Client,
  body: User,
  options: ExplicitBodySimpleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _explicitBodySimpleSend(context, body, options);
  return _explicitBodySimpleDeserialize(result);
}
