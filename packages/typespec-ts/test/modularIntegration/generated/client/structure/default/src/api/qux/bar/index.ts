// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Nine204Response,
  ServiceContext as Client,
} from "../../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { QuxBarNineOptions } from "../../../models/options.js";

export function _nineSend(
  context: Client,
  options: QuxBarNineOptions = { requestOptions: {} },
): StreamableMethod<Nine204Response> {
  return context
    .path("/nine")
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _nineDeserialize(result: Nine204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function nine(
  context: Client,
  options: QuxBarNineOptions = { requestOptions: {} },
): Promise<void> {
  const result = await _nineSend(context, options);
  return _nineDeserialize(result);
}
