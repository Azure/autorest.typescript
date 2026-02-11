// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DContext as Client } from "./index.js";
import { A, aSerializer } from "../../models/models.js";
import { Op1OptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _op1Send(
  context: Client,
  body: A,
  options: Op1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/d")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: aSerializer(body),
    });
}

export async function _op1Deserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function op1(
  context: Client,
  body: A,
  options: Op1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}
