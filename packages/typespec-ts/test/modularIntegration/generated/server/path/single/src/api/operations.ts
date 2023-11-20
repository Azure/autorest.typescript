// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { MyOp200Response, SingleContext as Client } from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { RestError } from "@azure/core-rest-pipeline";
import { MyOpOptions } from "../models/options.js";

export function _myOpSend(
  context: Client,
  options: MyOpOptions = { requestOptions: {} }
): StreamableMethod<MyOp200Response> {
  return context
    .path("/server/path/single/myOp")
    .head({ ...operationOptionsToRequestParameters(options) });
}

export async function _myOpDeserialize(result: MyOp200Response): Promise<void> {
  if (result.status !== "200") {
    const internalError = (result.body as any).error || result.body || result;
    const message = `Unexpected status code ${result.status}`;
    throw new RestError(internalError.message ?? message, {
      statusCode: Number(result.status),
      code: internalError.code,
      request: result.request,
    });
  }

  return;
}

export async function myOp(
  context: Client,
  options: MyOpOptions = { requestOptions: {} }
): Promise<void> {
  const result = await _myOpSend(context, options);
  return _myOpDeserialize(result);
}
