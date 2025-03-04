// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext as Client } from "../../index.js";
import { Ba, baSerializer } from "../../../models/b/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { BCOp1OptionalParams } from "./options.js";

export function _op1Send(
  context: Client,
  body: Ba,
  options: BCOp1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b/c")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: baSerializer(body),
    });
}

export async function _op1Deserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function op1(
  context: Client,
  body: Ba,
  options: BCOp1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}
