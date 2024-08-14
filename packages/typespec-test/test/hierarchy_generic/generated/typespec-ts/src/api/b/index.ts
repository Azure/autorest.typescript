// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

<<<<<<< HEAD
import { A1 } from "../../models/models.js";
import { BOp1204Response, FooContext as Client } from "../../rest/index.js";
=======
import { BA } from "../../models/models.js";
import { FooContext as Client } from "../index.js";
>>>>>>> main
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { BOp1OptionalParams } from "../options.js";

export function _op1Send(
  context: Client,
  body: A1,
  options: BOp1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/b")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop2: body["prop2"] },
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
  body: A1,
  options: BOp1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}
