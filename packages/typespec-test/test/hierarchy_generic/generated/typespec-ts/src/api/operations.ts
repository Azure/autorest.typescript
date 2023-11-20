// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { A } from "../models/models.js";
import { FooContext as Client, Op1204Response } from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { RestError, PipelineResponse } from "@azure/core-rest-pipeline";
import { Op1Options } from "../models/options.js";

export function _op1Send(
  context: Client,
  body: A,
  options: Op1Options = { requestOptions: {} }
): StreamableMethod<Op1204Response> {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop1: body["prop1"] },
    });
}

export async function _op1Deserialize(result: Op1204Response): Promise<void> {
  if (result.status !== "204") {
    const internalError = (result.body as any).error || result.body || result;
    const message = `Unexpected status code ${result.status}`;
    throw new RestError(internalError.message ?? message, {
      statusCode: Number(result.status),
      code: internalError.code,
      request: result.request,
      response: result.body as PipelineResponse,
    });
  }

  return;
}

export async function op1(
  context: Client,
  body: A,
  options: Op1Options = { requestOptions: {} }
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}
