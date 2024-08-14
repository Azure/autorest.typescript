// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

<<<<<<< HEAD
import { A0 } from "../models/models.js";
import { FooContext as Client, Op1204Response } from "../rest/index.js";
=======
import { A } from "../models/models.js";
import { FooContext as Client } from "./index.js";
>>>>>>> main
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { Op1OptionalParams } from "./options.js";

export function _op1Send(
  context: Client,
  body: A0,
  options: Op1OptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop1: body["prop1"] },
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
  body: A0,
  options: Op1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}
