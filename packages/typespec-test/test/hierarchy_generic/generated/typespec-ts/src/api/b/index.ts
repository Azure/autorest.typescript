// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BOp1OptionalParams, FooContext as Client } from "../index.js";
import { Ba, baSerializer } from "../../models/b/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _bOp1Send(
  context: Client,
  body: Ba,
  options: BOp1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: baSerializer(body),
    });
}

export async function _bOp1Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function bOp1(
  context: Client,
  body: Ba,
  options: BOp1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _bOp1Send(context, body, options);
  return _bOp1Deserialize(result);
}
