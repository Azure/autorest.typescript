// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext as Client } from "../../../index.js";
import { Bea, beaSerializer } from "../../../../models/b/e/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { BECOp1OptionalParams } from "./options.js";

export function _op1Send(
  context: Client,
  body: Bea,
  options: BECOp1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b/e")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: beaSerializer(body),
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
  body: Bea,
  options: BECOp1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}
