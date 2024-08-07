// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { User } from "../../models/models.js";
import { BasicContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { ExplicitBodySimpleOptionalParams } from "../../models/options.js";

export function _explicitBodySimpleSend(
  context: Client,
  body: User,
  options: ExplicitBodySimpleOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/parameters/basic/explicit-body/simple")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"] },
    });
}

export async function _explicitBodySimpleDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
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
